#!/usr/bin/env python3
r"""
Parse pre-extracted Incerto XHTML files into clean ~500-token markdown chunks.

Reads:  /tmp/incerto-extracted/OEBPS/xhtml/*.xhtml
Writes: <repo>/scripts/incerto/chunks/<book-slug>/c<chap>__<chunk-idx>.md

Stdlib only — uses html.parser for tag stripping and re for chapter detection.

Chapter detection priority:
  1. _c\d+_ pattern in filename (e.g. _c01_, _c001_)
  2. Other roles (fm1=front-matter, prl=prologue, app=appendix, etc.) -> chap=0 with role suffix

Chunking:
  Target ~500 tokens (~700 words). Pack whole paragraphs until threshold,
  never split a paragraph mid-sentence.
"""

from __future__ import annotations

import html
import json
import os
import re
import sys
from html.parser import HTMLParser
from pathlib import Path

# ---------------------------------------------------------------------------
# Configuration

REPO_ROOT = Path(__file__).resolve().parents[3]   # .../taleb-pi

OUTPUT_DIR = REPO_ROOT / "scripts" / "incerto" / "chunks"
SOURCE_DIR = Path("/tmp/incerto-extracted/OEBPS/xhtml")

# ISBN -> (title, slug) — verified from actual content of fm1/prl/c01 pages
ISBN_TO_BOOK = {
    "9781588367679": ("Fooled by Randomness", "fooled-by-randomness"),
    "9780679604181": ("The Black Swan", "black-swan"),
    "9780679643685": ("The Bed of Procrustes", "bed-of-procrustes"),
    "9780679645276": ("Antifragile", "antifragile"),
    "9780425284636": ("Skin in the Game", "skin-in-the-game"),
    # 9780593243664 = bundle wrapper — skipped (only TOC/cover)
}

WORDS_PER_CHUNK = 700  # ~500 tokens at ~1.4 tokens/word average

# Filename patterns
ISBN_RE = re.compile(r"Tale_(\d{13})_")
CHAPTER_RE = re.compile(r"_c(\d+)_")
ROLE_RE = re.compile(r"_([a-z]+\d*)_r\d+\.xhtml$")  # final role token before _r1.xhtml

# Roles we treat as content (chap=0 with role label) when no _cNN_ in filename
CONTENT_ROLES = {
    "fm1": "frontmatter",
    "prl": "prologue",
    "app": "appendix",
    "app1": "appendix-1",
    "app2": "appendix-2",
    "epl": "epilogue",
    "aft": "afterword",
    "nts": "notes",
    "gls": "glossary",
}

# Roles we skip (no body text worth indexing)
SKIP_ROLES = {
    "cvi",  # cover image
    "tp",   # title page
    "cop",  # copyright
    "toc",  # table of contents
    "ded",  # dedication
    "ack",  # acknowledgements
    "bib",  # bibliography (refs only)
    "bm",   # backmatter
    "bm1",
    "bm2",
    "ftn",  # footnotes (already inlined)
}


# ---------------------------------------------------------------------------
# HTML -> plain text


class TextExtractor(HTMLParser):
    """Strip XHTML to plain text, preserving paragraph boundaries."""

    # Tags that act as block-level breaks
    BLOCK_TAGS = {
        "p", "div", "h1", "h2", "h3", "h4", "h5", "h6",
        "li", "blockquote", "br", "hr", "tr",
    }
    # Tags whose content we discard wholesale
    DROP_TAGS = {
        "head", "script", "style", "title", "meta", "link",
    }

    def __init__(self) -> None:
        super().__init__(convert_charrefs=True)
        self._buf: list[str] = []
        self._drop_depth = 0

    def handle_starttag(self, tag: str, attrs: list[tuple[str, str | None]]) -> None:
        if tag in self.DROP_TAGS:
            self._drop_depth += 1
            return
        if self._drop_depth:
            return
        if tag in self.BLOCK_TAGS:
            self._buf.append("\n\n")

    def handle_endtag(self, tag: str) -> None:
        if tag in self.DROP_TAGS:
            self._drop_depth = max(0, self._drop_depth - 1)
            return
        if self._drop_depth:
            return
        if tag in self.BLOCK_TAGS:
            self._buf.append("\n\n")

    def handle_data(self, data: str) -> None:
        if self._drop_depth:
            return
        self._buf.append(data)

    def get_text(self) -> str:
        raw = "".join(self._buf)
        # Collapse runs of whitespace within a line, keep paragraph breaks
        # 1) normalize all whitespace except \n
        raw = re.sub(r"[ \t\r\f\v]+", " ", raw)
        # 2) trim each line
        lines = [ln.strip() for ln in raw.split("\n")]
        raw = "\n".join(lines)
        # 3) collapse 3+ newlines -> exactly 2
        raw = re.sub(r"\n{3,}", "\n\n", raw)
        return raw.strip()


def extract_text(xhtml_path: Path) -> str:
    """Read an XHTML file and return its body as paragraph-separated text."""
    with xhtml_path.open("r", encoding="utf-8") as fh:
        source = fh.read()
    parser = TextExtractor()
    parser.feed(source)
    parser.close()
    return parser.get_text()


# ---------------------------------------------------------------------------
# Chunking


def chunk_paragraphs(text: str, words_per_chunk: int = WORDS_PER_CHUNK) -> list[str]:
    """
    Pack whole paragraphs until cumulative word count reaches threshold.
    Never splits a paragraph (preserves sentence integrity by definition).
    """
    paragraphs = [p.strip() for p in text.split("\n\n") if p.strip()]
    if not paragraphs:
        return []

    chunks: list[str] = []
    buf: list[str] = []
    word_count = 0

    for para in paragraphs:
        para_words = len(para.split())
        # If buffer empty and one paragraph alone exceeds threshold,
        # emit it as a single chunk (we never split mid-paragraph).
        if not buf:
            buf.append(para)
            word_count = para_words
            continue
        if word_count + para_words > words_per_chunk:
            chunks.append("\n\n".join(buf))
            buf = [para]
            word_count = para_words
        else:
            buf.append(para)
            word_count += para_words

    if buf:
        chunks.append("\n\n".join(buf))
    return chunks


# ---------------------------------------------------------------------------
# Filename classification


def classify(filename: str) -> tuple[str | None, int | None, str | None]:
    """
    Return (isbn, chapter, role).

    chapter is an int when _cNN_ matched, else None.
    role is a string label when no chapter matched (e.g. 'prologue'); else None.

    Returns (None, None, None) when the file should be skipped.
    """
    isbn_m = ISBN_RE.search(filename)
    if not isbn_m:
        return (None, None, None)
    isbn = isbn_m.group(1)
    if isbn not in ISBN_TO_BOOK:
        return (None, None, None)

    chap_m = CHAPTER_RE.search(filename)
    if chap_m:
        return (isbn, int(chap_m.group(1)), None)

    role_m = ROLE_RE.search(filename)
    if not role_m:
        return (isbn, None, None)
    role = role_m.group(1)
    if role in SKIP_ROLES:
        return (None, None, None)
    if role in CONTENT_ROLES:
        return (isbn, 0, CONTENT_ROLES[role])
    # Unknown role — be conservative, skip
    return (None, None, None)


# ---------------------------------------------------------------------------
# Frontmatter writer


def write_chunk(
    out_path: Path,
    *,
    book_title: str,
    slug: str,
    chapter: int,
    role: str | None,
    chunk_index: int,
    isbn: str,
    source_file: str,
    body: str,
) -> None:
    out_path.parent.mkdir(parents=True, exist_ok=True)
    fm_lines = [
        "---",
        f"book: {book_title}",
        f"slug: {slug}",
        f"chapter: {chapter}",
    ]
    if role:
        fm_lines.append(f"role: {role}")
    fm_lines.extend([
        f"chunk_index: {chunk_index}",
        f"isbn: {isbn}",
        f"source_file: {source_file}",
        "---",
        "",
        body,
        "",
    ])
    out_path.write_text("\n".join(fm_lines), encoding="utf-8")


# ---------------------------------------------------------------------------
# Main


def main() -> int:
    if not SOURCE_DIR.is_dir():
        print(f"FATAL: {SOURCE_DIR} not found", file=sys.stderr)
        return 1

    OUTPUT_DIR.mkdir(parents=True, exist_ok=True)

    files = sorted(SOURCE_DIR.glob("*.xhtml"))
    if not files:
        print(f"FATAL: no XHTML files in {SOURCE_DIR}", file=sys.stderr)
        return 1

    stats = {
        "files_processed": 0,
        "files_skipped": 0,
        "chunks_written": 0,
        "by_book": {slug: {"chunks": 0, "files": 0} for _, slug in ISBN_TO_BOOK.values()},
    }

    # role-counter per (slug, chapter=0) so that fm1 + prl + app etc don't collide
    role_chap_counter: dict[tuple[str, str], int] = {}

    for path in files:
        isbn, chapter, role = classify(path.name)
        if isbn is None:
            stats["files_skipped"] += 1
            continue

        title, slug = ISBN_TO_BOOK[isbn]
        text = extract_text(path)
        if not text.strip():
            stats["files_skipped"] += 1
            continue

        # Strip the bundle title boilerplate that html title tag injects via head
        # (parser already drops <head>, but defensive cleanup of leading "..., Incerto 5-Book Bundle")
        # The first ~200 chars typically include 'Chapter Foo, Incerto 5-Book Bundle'
        # We leave those for context — they're useful for retrieval.

        chunks = chunk_paragraphs(text)
        if not chunks:
            stats["files_skipped"] += 1
            continue

        # Determine effective chapter label and pseudo-chapter for filename
        # When role is set (chapter==0), pseudo-chap = 0, but we tag role
        # to disambiguate multiple non-chapter files.
        chap_label = chapter if chapter is not None else 0

        # Chapter file format: c<chap_zfill3>__<idx>.md OR c000-<role>__<idx>.md
        if role is not None:
            chap_token = f"c000-{role}"
        else:
            chap_token = f"c{chap_label:03d}"

        for idx, body in enumerate(chunks, start=1):
            out_name = f"{chap_token}__{idx:02d}.md"
            out_path = OUTPUT_DIR / slug / out_name
            write_chunk(
                out_path,
                book_title=title,
                slug=slug,
                chapter=chap_label,
                role=role,
                chunk_index=idx,
                isbn=isbn,
                source_file=path.name,
                body=body,
            )
            stats["chunks_written"] += 1
            stats["by_book"][slug]["chunks"] += 1

        stats["by_book"][slug]["files"] += 1
        stats["files_processed"] += 1

    print(json.dumps(stats, indent=2))
    return 0


if __name__ == "__main__":
    sys.exit(main())
