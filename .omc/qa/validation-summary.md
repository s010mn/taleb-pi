# taleb-pi Validation Review — Aggregate Summary

**Date**: 2026-05-05
**Spec**: `.omc/specs/deep-interview-validation-review.md` (deep-interview, 6.9% ambiguity, PASSED)
**Model**: deepseek-v4-flash (validates prompt-engineering quality, not max-capability)
**Method**: 4 dimensions, real omp processes, soft user judgment (no automated pass/fail)
**Total omp invocations**: ~32 (8 D1 + 6 D2 + 5 D3 + 6 D4 + 7 D3 judges)

## Per-dimension headlines

### D1 — MAGI Tension Verification: **STRONG**

8-question battery, 7/8 substantive disagreement (87.5%), exceeding plan gate of ≥6/8.
- 4 three-way splits (Q1, Q3, Q4, Q8 — including financial / life-choice / ethical / personal-habit)
- 2 two-way splits (Q2 system design, Q7 geopolitical)
- 1 mixed (Q6 technical-evaluation)
- 1 unanimous 3-0 (Q5 factual claim — COVID as White Swan, matching Taleb's own published position; censor mechanism produced 3 real refutations before maintaining the verdict)

The tribunal architecture works as designed. Tension is genuine, not theatrical. Action consensus is consistently extractable even on three-way splits. Reframed-question outputs frequently challenge the user's original framing, which is the highest-signal MAGI behavior.

→ `.omc/qa/d1-tension-report.md`

### D2 — Default Mode vs /magi Comparison: **OPT-IN /magi JUSTIFIED**

3 questions × 2 modes = 6 omp calls.
- **Q-B factual**: Default and /magi functionally equivalent. MAGI's pre-classification gate fired correctly and skipped the tribunal — actually used *fewer* tokens than default (45,199 vs 45,959). For factual questions, default mode is sufficient.
- **Q-A decision**: MAGI's CASPER-3 surfaced a conditional accept path (career convexity, severance negotiation) that single-voice default suppressed. The 1.36× token overhead produced genuine structural uplift.
- **Q-C ethical**: Default opened "absolutely not." MAGI produced a three-way split with MELCHIOR's enforcement objection unresolved. The unresolved tension is more honest than default's clean dismissal. 1.62× token overhead, most justified here.

Average overhead 1.29×. /magi is warranted when the asker wants a map of disagreement space, not a single verdict. Default mode delivers Taleb framing successfully via the 10 alwaysApply rules.

→ `.omc/qa/d2-mode-compare-report.md`

### D3 — Incerto BM25 Retrieval Quality: **MIXED**

5 concept queries × top-5 BM25 hits × LLM judge = 8/15 top-3 ON-TOPIC (53%).

- **GOOD on multi-word distinctive phrases**: "narrative fallacy" (2/3), "skin in the game" (2/3), "ergodicity" (2/3 — Skin Ch. 19 hits)
- **POOR on "via negativa"**: 0/3. Canonical Antifragile Ch. 7-8 never appeared. BM25 cannot bridge the Latin phrase to paraphrased body text.
- **POOR on "antifragile"**: 2/3 ON-TOPIC but the canonical primary definitions (Ch. 1, glossary) buried by lexical-frequency saturation. IDF signal collapses on a term ubiquitous to the corpus.

**Recommendation**: BM25 alone is insufficient for single-word title-terms and Latin concept names. Either (a) augment with a chapter-anchored semantic index, or (b) MAGI agents must provide multi-word disambiguating context in their queries (e.g., "via negativa removal subtraction iatrogenic" rather than "via negativa").

→ `.omc/qa/d3-retrieval-report.md`

### D4 — Prompt Register Survival (CN→EN): **PRESERVED OR IMPROVED**

4 MAGI agents (2 with CN baseline from 7e8b796, 2 P3-era new without baseline).
- **MELCHIOR-1 / Empirical Skeptic**: Register fully survived. EN is 22% longer but adds substantive cross-MAGI blind-spot flagging absent from CN. EN marginally stronger.
- **BALTHASAR-2 / Tail-Risk Guardian**: Register survived. EN's refusal is more blunt ("only theater without a time anchor") than CN's polite option menu. No softening.
- **CASPER-3 / Convexity Seeker**: No CN baseline (P3 file). EN demonstrates consistent adversarial register independently.
- **Synthesizer**: No CN baseline (P3 file). EN consistent adversarial register.

**0/2 comparable agents flattened. 2/2 preserved or improved.** PM5 risk (register-flatten on translation) did not materialize. Differentiated Taleb cueing per agent (MF4) appears to have worked.

→ `.omc/qa/d4-register-report.md`

## Overall verdict (soft judgment)

The validation establishes that the just-shipped taleb-pi system functions substantively, not just structurally:

| Dimension | Plan target | Actual | Soft judgment |
|---|---|---|---|
| D1 tension | ≥6/8 disagreement | 7/8 (87.5%) | STRONG — gate cleared |
| D2 opt-in /magi | "default mode delivers Taleb framing; /magi adds structural value" | Both confirmed | JUSTIFIED |
| D3 retrieval | "top-3 are genuinely relevant" | 53% ON-TOPIC; 1 query at 0% | MIXED — needs work |
| D4 register | "no PM5 flatten" | 0 flattened, 2 improved | PRESERVED |

## Open issues / surprises

1. **D3 "via negativa" returned 0/3 ON-TOPIC.** The canonical Antifragile Ch. 7-8 chapters were never surfaced. This is the worst-performing concept query and exposes BM25's limit.
2. **D3 "antifragile"** suffered IDF collapse — the term is too frequent in the corpus for raw BM25 to identify primary definitions.
3. **/magi runs are heavyweight**: 6 LLM calls per invocation, 6-10 minute wall-time on flash, 100-250MB raw JSON streams. JSON event mode adds an order of magnitude compared to text mode. Compact-on-write would help future runs.
4. **Q4 (ethical-dilemma) timed out** when run in parallel with 7 other heavy /magi invocations. Parallel batching of /magi is fragile — sequential is more reliable for production.
5. **Q5 censor mechanism worked correctly**: CASPER's required refutation on 3-0 produced 3 substantive counterarguments (observer-relativity, fragility-cascade, retrospective-predictability), evaluated each, and maintained the verdict. This is the censor design earning its keep.

## Recommended fixes (NOT applied — separate phase)

1. **D3.1** Enhance BM25 with chapter-anchor lookups for known concept-to-chapter mappings (e.g., `via negativa → Antifragile Ch. 7-8` should always include the chapter as a hard filter for "via negativa" queries). Or augment with a small embedding model for concept queries.
2. **D3.2** Adjust BM25 IDF computation to dampen ubiquitous terms ("antifragile" appears so often it loses signal). Consider per-chunk normalization or BM25+ variant.
3. **D2** Default-mode response for factual questions is already strong via the 10 alwaysApply rules. Document that /magi is overkill for factual questions in `rules/magi-protocol.md` (already does this).
4. **General** Consider a `--mode text` shortcut for /magi when JSON streams are not needed (90% disk savings). Or extend `omp --mode` with a `compact-json` option emitting only `agent_end`.

## Limitations

- Single LLM judge (deepseek-flash) — no inter-model robustness check
- 8 questions × 1 trial each — no within-question variance estimate
- D3 retrieval evaluated against LLM judgment of "Taleb's primary treatment", not a held-out gold standard
- D4 has only 2 CN-vs-EN pairs (the other 2 agents were created post-P2)
- Q4 borrowed from D2 due to parallel-batch timeout (acceptable: same question, same model, same skill chain)

## Raw data archive

- `.omc/qa/runs/d1-tension/` — 8 verdicts + 8 compact event streams + battery.txt + timing.log
- `.omc/qa/runs/d2-mode-compare/` — 3 questions × 2 modes = 6 verdicts + 6 events
- `.omc/qa/runs/d3-retrieval/` — 5 BM25 results + 5 LLM judge verdicts + 5 event streams
- `.omc/qa/runs/d4-register/` — 4 CN system prompts + 4 EN system prompts + 6 response pairs

Total disk: ~15MB after compaction (was 991MB raw before jq filter).

## Next step

User reads the 4 per-dimension reports + this aggregate summary. Decides whether:
1. Accept and ship as-is (D1, D2, D4 strong; D3 acceptable for /magi-only knowledge augmentation)
2. Fix D3 retrieval first (recommended fixes above) before declaring system complete
3. Investigate Q4 timeout root cause if production usage envisages parallel /magi calls
