# P5 Executor learnings — Incerto Knowledge System

Written by Executor on 2026-05-05 after completing all 6 P5 deliverables.

## Adaptation: bm25 npm package was broken

The plan's O3 review chose the `bm25` npm package (12KB, no deps) over heavier
alternatives. On install, `bm25@0.1.1` turned out to be **non-functional**:

- Its README first line: "THIS MODULE IS NO LONGER BEING MAINTAINED."
- `app/controller/bm25.js` requires `../../node_modules/idf/app/idf_map.js`
- The `idf` package is not in its `dependencies` (only `lodash` is)
- Importing it raises `Cannot find module '../../node_modules/idf/app/idf_map.js'`

**Adaptation taken:** removed the dep (`bun remove bm25`), wrote a 50-line
self-contained Okapi BM25 implementation in `scripts/build-index.ts` and
`scripts/search.ts`. The formula is short enough that owning it directly is
**more antifragile** than depending on an unmaintained package — every
moving part is local, no transitive surface area, no pinning concerns. This
honors the plan's lean spirit (the very reason O3 chose bm25 over LanceDB
+ Transformers.js).

If a future iteration wants a "real" library, `retrieval` (which the bm25
README points to as the maintained successor) or `wink-bm25-text-search`
are the correct choices. But our current ~150 lines of TS pass every
validation step at zero dependency cost.

## Adaptation: ISBN-to-title mapping fix

The task description's example table mapped:
- 9780679643685 → Fooled by Randomness
- 9781588367679 → Skin in the Game

But the actual content of the chapter pages reveals:
- 9780679643685 → **The Bed of Procrustes** (PROCRUSTES is on its fm1)
- 9781588367679 → **Fooled by Randomness** (luck-disguised-as-nonluck prologue)
- 9780425284636 → **Skin in the Game** (Antaeus prologue)

The task instruction was: "if you find different ordering in the OPF spine,
follow what's actually there." So the parser uses the verified mapping in
its `ISBN_TO_BOOK` constant. The OPF spine order (b01..b05) confirms:
b01=FbR, b02=BlackSwan, b03=Procrustes, b04=Antifragile, b05=SitG.

## Chunk distribution

Total chunks across the 5 books: **773**
- fooled-by-randomness: 136
- black-swan: 205
- bed-of-procrustes: 31  (this book is mostly aphorisms — short chapters)
- antifragile: 264       (the largest book by content density)
- skin-in-the-game: 137

Index size: 3.1MB (well under threshold for in-memory load on every search call).

## Operational notes

- `chunks/`, `index.json`, `query-log.jsonl`, `node_modules/` are all
  gitignored — they're rebuildable from the epub.
- The EPUB itself was already gitignored in P1.
- Scripts (`scripts/parse-epub.py`, `scripts/build-index.ts`, `scripts/search.ts`)
  and `package.json` ARE tracked — these are the source of truth.
- A future operator can rebuild from scratch via:
  ```bash
  python3 .omc/incerto/scripts/parse-epub.py        # 773 chunks
  cd .omc/incerto && bun install && bun run scripts/build-index.ts
  ```

## P5.4-pre subagent skill access — PASS

Probe via `omp -p --no-session --model deepseek/deepseek-v4-flash` confirmed
the harness loads `skills/incerto-search/SKILL.md` body when slash-invoked.
Model was able to quote the exact bash invocation AND list all 5 book titles
verbatim in `--no-session` mode (no prior context to draw from). This proves
slash-routing resolves skill bodies correctly, which is the prerequisite for
MAGI agents to dispatch to incerto-search via the task tool.

## Files for downstream MAGI integration

- `skills/incerto-search/SKILL.md` (375 tokens, slightly over the 300 target)
- `.omc/incerto/scripts/search.ts` — the executable
- `.omc/incerto/index.json` — runtime, rebuild from chunks
- `.omc/incerto/chunks/<slug>/cNNN__II.md` — full passage source for citations

When MAGI agents (MELCHIOR/BALTHASAR/CASPER) cite Taleb, they should:
1. Run `bun run .omc/incerto/scripts/search.ts "<concept>"` first
2. Read the top chunk file in full (each is ~500 tokens, plain markdown)
3. Quote the passage with citation `> "<quote>" — Book Title, Ch. N`
