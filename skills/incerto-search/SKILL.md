---
name: incerto-search
description: BM25 query into the Nassim Taleb Incerto corpus (5 books). Returns top-K ranked passages with book + chapter citation. Use this skill when MAGI agents need to ground their analysis in Taleb's actual writing.
---

# Incerto Search

Query the BM25-indexed Incerto corpus (Fooled by Randomness, The Black Swan, The Bed of Procrustes, Antifragile, Skin in the Game).

## Usage

```bash
bun run .omc/incerto/scripts/search.ts "<query>"
```

Optional flags:
- `--top=K`     change result count (default 5)
- `--format=md` markdown output (default)
- `--format=json` machine-readable JSON

Returns top-K ranked passages, each with:
- Book title and chapter number
- ~200-character preview of the passage
- Path to the full chunk file under `.omc/incerto/chunks/<slug>/`

Read the returned chunk file in full when the preview is not enough — every chunk is ~500 tokens, plain markdown with frontmatter.

## When to invoke

- A MAGI agent (MELCHIOR / BALTHASAR / CASPER) needs to ground a claim in Taleb's actual text
- The user references a Taleb concept and asks for the original framing
- An assertion needs evidence beyond paraphrased framework knowledge
- You are about to assert what Taleb "would say" — query first, paraphrase from the returned passage

## Citation format

When citing a returned passage:

> "<exact quote>" — *Book Title*, Ch. N

For non-numbered sections (frontmatter, glossary, prologue, etc.), use the `role` field as the locator:

> "<exact quote>" — *Antifragile*, Glossary

## Side effect

Each invocation appends one line to `.omc/incerto/query-log.jsonl` for traceability:
`{ ts, q, top_chunk_paths }`. This is intentional — it lets a reviewer reconstruct what evidence each MAGI agent retrieved.
