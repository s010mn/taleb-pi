#!/usr/bin/env bun
/**
 * Query the BM25 index of the Incerto corpus.
 *
 * Usage:
 *   bun run scripts/search.ts "<query>" [--top=K] [--format=md|json]
 *
 * Output (default markdown) — top-K passages with book + chapter + path + preview.
 *
 * Side effect: appends one JSONL line to ../query-log.jsonl per invocation:
 *   { ts, q, top_chunk_paths }
 */

import { appendFileSync, readFileSync, statSync } from "node:fs";
import { join, relative } from "node:path";

// ---------------------------------------------------------------------------
// Paths

const SCRIPT_DIR = new URL(".", import.meta.url).pathname;
const INCERTO_DIR = join(SCRIPT_DIR, "..");
const INDEX_PATH = join(INCERTO_DIR, "index.json");
const LOG_PATH = join(INCERTO_DIR, "query-log.jsonl");
const REPO_ROOT = join(INCERTO_DIR, "..", "..");

// ---------------------------------------------------------------------------
// CLI args

interface Args {
  query: string;
  top: number;
  format: "md" | "json";
}

function parseArgs(argv: string[]): Args {
  let top = 5;
  let format: "md" | "json" = "md";
  const positional: string[] = [];
  for (const arg of argv) {
    if (arg.startsWith("--top=")) {
      top = Number.parseInt(arg.slice("--top=".length), 10);
    } else if (arg.startsWith("--format=")) {
      const v = arg.slice("--format=".length);
      if (v !== "md" && v !== "json") {
        throw new Error(`--format must be md or json, got "${v}"`);
      }
      format = v;
    } else if (arg === "--help" || arg === "-h") {
      printHelpAndExit();
    } else {
      positional.push(arg);
    }
  }
  if (positional.length === 0) {
    printHelpAndExit();
  }
  // Allow an unquoted multi-word query: join all positionals
  return { query: positional.join(" ").trim(), top, format };
}

function printHelpAndExit(): never {
  console.error(
    "Usage: bun run scripts/search.ts \"<query>\" [--top=K] [--format=md|json]\n" +
    "  Searches the BM25 index built by scripts/build-index.ts.\n" +
    "  Default top=5, format=md.",
  );
  process.exit(2);
}

// ---------------------------------------------------------------------------
// Index types (must mirror build-index.ts)

interface Frontmatter {
  book: string;
  slug: string;
  chapter: number;
  role?: string;
  chunk_index: number;
  isbn: string;
  source_file: string;
}
interface DocEntry {
  id: number;
  path: string;
  meta: Frontmatter;
  preview: string;
  tf: Record<string, number>;
  len: number;
}
interface IndexShape {
  k1: number;
  b: number;
  avgdl: number;
  idf: Record<string, number>;
  docs: DocEntry[];
  builtAt: string;
  numDocs: number;
  numTerms: number;
}

// ---------------------------------------------------------------------------
// Tokenization (must match build-index.ts to keep parity)

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
// BM25 scoring

function score(index: IndexShape, queryTokens: string[]): { doc: DocEntry; score: number }[] {
  // Deduplicate query tokens — repeated terms in a short query don't help BM25 and waste work
  const uniq = Array.from(new Set(queryTokens));
  // Pre-resolve idf for each query term
  const queryIdfs: { term: string; idf: number }[] = [];
  for (const term of uniq) {
    const idf = index.idf[term];
    if (idf === undefined) continue;  // term not in corpus
    queryIdfs.push({ term, idf });
  }
  if (queryIdfs.length === 0) {
    return [];
  }

  const { k1, b, avgdl, docs } = index;
  const scored: { doc: DocEntry; score: number }[] = [];
  for (const doc of docs) {
    let s = 0;
    for (const { term, idf } of queryIdfs) {
      const tf = doc.tf[term];
      if (!tf) continue;
      const denom = tf + k1 * (1 - b + (b * doc.len) / avgdl);
      s += idf * (tf * (k1 + 1)) / denom;
    }
    if (s > 0) {
      scored.push({ doc, score: s });
    }
  }
  scored.sort((a, b) => b.score - a.score);
  return scored;
}

// ---------------------------------------------------------------------------
// Output formatters

interface Hit {
  rank: number;
  score: number;
  book: string;
  slug: string;
  chapter: number;
  role?: string;
  path: string;
  preview: string;
}

function asHits(results: { doc: DocEntry; score: number }[], top: number): Hit[] {
  return results.slice(0, top).map((r, i) => ({
    rank: i + 1,
    score: Number(r.score.toFixed(4)),
    book: r.doc.meta.book,
    slug: r.doc.meta.slug,
    chapter: r.doc.meta.chapter,
    ...(r.doc.meta.role ? { role: r.doc.meta.role } : {}),
    path: r.doc.path,
    preview: r.doc.preview,
  }));
}

function renderMarkdown(query: string, hits: Hit[]): string {
  const lines: string[] = [];
  lines.push(`# Incerto BM25 search: "${query}"`);
  lines.push("");
  if (hits.length === 0) {
    lines.push("_No matches in the corpus._");
    return lines.join("\n");
  }
  for (const h of hits) {
    const chapLabel = h.role ? `${h.role}` : `Ch. ${h.chapter}`;
    lines.push(`## ${h.rank}. ${h.book} — ${chapLabel}  _(score ${h.score})_`);
    lines.push("");
    lines.push(`> ${h.preview}…`);
    lines.push("");
    lines.push(`**Read full passage**: \`${h.path}\``);
    lines.push("");
  }
  lines.push(`---`);
  lines.push(`Citation format: > "<quote>" — ${hits[0].book}, Ch. ${hits[0].chapter}`);
  return lines.join("\n");
}

// ---------------------------------------------------------------------------
// Logging

function appendLog(query: string, hits: Hit[]): void {
  const entry = {
    ts: new Date().toISOString(),
    q: query,
    top_chunk_paths: hits.map((h) => h.path),
  };
  appendFileSync(LOG_PATH, JSON.stringify(entry) + "\n");
}

// ---------------------------------------------------------------------------
// Main

function main(): void {
  const args = parseArgs(process.argv.slice(2));

  // Load index
  let index: IndexShape;
  try {
    const raw = readFileSync(INDEX_PATH, "utf8");
    index = JSON.parse(raw);
  } catch (err) {
    console.error(
      `FATAL: cannot load ${relative(REPO_ROOT, INDEX_PATH)}.\n` +
      `Run \`bun run scripts/build-index.ts\` first.\n` +
      `Underlying error: ${(err as Error).message}`,
    );
    process.exit(1);
  }

  const queryTokens = tokenize(args.query);
  const results = score(index, queryTokens);
  const hits = asHits(results, args.top);

  appendLog(args.query, hits);

  if (args.format === "json") {
    console.log(JSON.stringify({ query: args.query, hits }, null, 2));
  } else {
    console.log(renderMarkdown(args.query, hits));
  }
}

main();
