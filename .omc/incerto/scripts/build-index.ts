#!/usr/bin/env bun
/**
 * Build a BM25 index over the Incerto chunks produced by parse-epub.py.
 *
 * Reads:  ../chunks/<slug>/*.md   (frontmatter + body)
 * Writes: ../index.json           (BM25-ready: idf map, doc-term freq, doc lens, metadata)
 *
 * NOTE on the bm25 npm package: plan O3 selected `bm25` (12KB) but the published
 * 0.1.1 build references `../../node_modules/idf/app/idf_map.js` which is never
 * installed (its declared deps are only `lodash`). The package is broken on
 * import. The README itself says "THIS MODULE IS NO LONGER BEING MAINTAINED".
 *
 * Adaptation: implement BM25 ourselves. The Okapi BM25 formula is ~30 lines and
 * we already control tokenization. This is more antifragile (no broken dep)
 * and matches the lean spirit of the plan (no LanceDB, no Transformers.js).
 *
 * BM25 formula:  score(D,Q) = sum_{q in Q} IDF(q) * tf(q,D) * (k1+1) / (tf(q,D) + k1*(1 - b + b*|D|/avgdl))
 *   k1 = 1.5,  b = 0.75   (standard tunings)
 */

import { readdirSync, readFileSync, writeFileSync, statSync } from "node:fs";
import { join, relative } from "node:path";

// ---------------------------------------------------------------------------
// Paths

const SCRIPT_DIR = new URL(".", import.meta.url).pathname;
const INCERTO_DIR = join(SCRIPT_DIR, "..");           // .omc/incerto
const CHUNKS_DIR = join(INCERTO_DIR, "chunks");
const INDEX_PATH = join(INCERTO_DIR, "index.json");
const REPO_ROOT = join(INCERTO_DIR, "..", "..");      // taleb-pi

// ---------------------------------------------------------------------------
// Tokenization
//
// Lowercase, split on non-letters, drop tokens shorter than 2 chars,
// drop a small stopword list (BM25 weights stopwords low naturally,
// but stripping them shrinks the index meaningfully).

const STOPWORDS = new Set([
  "the", "a", "an", "and", "or", "but", "is", "are", "was", "were", "be",
  "been", "being", "have", "has", "had", "do", "does", "did", "will",
  "would", "should", "could", "may", "might", "must", "shall", "can",
  "of", "in", "on", "at", "to", "for", "with", "by", "from", "as",
  "into", "through", "during", "before", "after", "above", "below",
  "this", "that", "these", "those", "it", "its", "they", "them", "their",
  "we", "us", "our", "you", "your", "i", "me", "my", "he", "him", "his",
  "she", "her", "not", "no", "so", "if", "then", "than", "also", "such",
  "what", "which", "who", "whom", "where", "when", "why", "how", "all",
  "any", "both", "each", "few", "more", "most", "other", "some", "only",
  "own", "same", "very", "too", "just", "about", "out", "up", "down",
]);

function tokenize(text: string): string[] {
  const out: string[] = [];
  // \p{L} = unicode letters; smart quotes / em dashes / page anchors get split out
  const re = /\p{L}+/gu;
  let match: RegExpExecArray | null;
  while ((match = re.exec(text)) !== null) {
    const tok = match[0].toLowerCase();
    if (tok.length < 2) continue;
    if (STOPWORDS.has(tok)) continue;
    out.push(tok);
  }
  return out;
}

// ---------------------------------------------------------------------------
// Frontmatter

interface Frontmatter {
  book: string;
  slug: string;
  chapter: number;
  role?: string;
  chunk_index: number;
  isbn: string;
  source_file: string;
}

function parseChunk(raw: string): { fm: Frontmatter; body: string } {
  const m = raw.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n([\s\S]*)$/);
  if (!m) throw new Error("chunk missing frontmatter");
  const fmRaw = m[1];
  const body = m[2].trim();
  const fm: any = {};
  for (const line of fmRaw.split(/\r?\n/)) {
    const kv = line.match(/^(\w+):\s*(.*)$/);
    if (!kv) continue;
    const [, k, v] = kv;
    if (k === "chapter" || k === "chunk_index") {
      fm[k] = Number.parseInt(v, 10);
    } else {
      fm[k] = v;
    }
  }
  return { fm: fm as Frontmatter, body };
}

// ---------------------------------------------------------------------------
// Walk chunks dir

function walkChunks(): { absPath: string; relPath: string }[] {
  const out: { absPath: string; relPath: string }[] = [];
  for (const slug of readdirSync(CHUNKS_DIR)) {
    const slugDir = join(CHUNKS_DIR, slug);
    if (!statSync(slugDir).isDirectory()) continue;
    for (const file of readdirSync(slugDir)) {
      if (!file.endsWith(".md")) continue;
      const absPath = join(slugDir, file);
      out.push({
        absPath,
        relPath: relative(REPO_ROOT, absPath),
      });
    }
  }
  return out;
}

// ---------------------------------------------------------------------------
// Build the index

interface DocEntry {
  /** Stable doc id = index in `docs` array */
  id: number;
  /** Path relative to repo root, e.g. ".omc/incerto/chunks/black-swan/c001__01.md" */
  path: string;
  /** Frontmatter copied verbatim */
  meta: Frontmatter;
  /** First ~200 chars of body, used for the search snippet (no body indexing data) */
  preview: string;
  /** Term frequency map for this doc */
  tf: Record<string, number>;
  /** Length in tokens */
  len: number;
}

interface IndexShape {
  /** BM25 tunings */
  k1: number;
  b: number;
  /** Average document length in tokens */
  avgdl: number;
  /** Inverse document frequency per term: log((N - df + 0.5) / (df + 0.5) + 1) */
  idf: Record<string, number>;
  /** Per-document state */
  docs: DocEntry[];
  /** Build metadata */
  builtAt: string;
  numDocs: number;
  numTerms: number;
}

function build(): IndexShape {
  const files = walkChunks();
  const docs: DocEntry[] = [];
  const df: Record<string, number> = {};

  let totalLen = 0;
  for (let i = 0; i < files.length; i++) {
    const { absPath, relPath } = files[i];
    const raw = readFileSync(absPath, "utf8");
    const { fm, body } = parseChunk(raw);

    const tokens = tokenize(body);
    const tf: Record<string, number> = {};
    for (const t of tokens) tf[t] = (tf[t] ?? 0) + 1;

    // Update document frequency
    for (const term of Object.keys(tf)) {
      df[term] = (df[term] ?? 0) + 1;
    }

    docs.push({
      id: i,
      path: relPath,
      meta: fm,
      preview: body.slice(0, 200).replace(/\s+/g, " ").trim(),
      tf,
      len: tokens.length,
    });
    totalLen += tokens.length;
  }

  const N = docs.length;
  const avgdl = totalLen / Math.max(1, N);
  const idf: Record<string, number> = {};
  for (const [term, dfi] of Object.entries(df)) {
    // Lucene-style smoothed IDF — never negative
    idf[term] = Math.log((N - dfi + 0.5) / (dfi + 0.5) + 1);
  }

  return {
    k1: 1.5,
    b: 0.75,
    avgdl,
    idf,
    docs,
    builtAt: new Date().toISOString(),
    numDocs: N,
    numTerms: Object.keys(idf).length,
  };
}

// ---------------------------------------------------------------------------
// Main

const index = build();
writeFileSync(INDEX_PATH, JSON.stringify(index));
const sizeKb = (statSync(INDEX_PATH).size / 1024).toFixed(1);

console.log(JSON.stringify({
  ok: true,
  numDocs: index.numDocs,
  numTerms: index.numTerms,
  avgdl: Math.round(index.avgdl),
  indexPath: relative(REPO_ROOT, INDEX_PATH),
  sizeKb,
  builtAt: index.builtAt,
}, null, 2));
