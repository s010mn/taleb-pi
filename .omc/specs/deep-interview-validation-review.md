# Deep Interview Spec: taleb-pi MAGI Validation Review

## Metadata
- Interview ID: validation-review-magi-2026-05-05
- Rounds: 5
- Final Ambiguity Score: 5%
- Type: brownfield
- Generated: 2026-05-05
- Threshold: 20%
- Status: PASSED

## Clarity Breakdown
| Dimension | Score | Weight | Weighted |
|-----------|-------|--------|----------|
| Goal Clarity | 0.95 | 0.35 | 0.333 |
| Constraint Clarity | 0.93 | 0.25 | 0.233 |
| Success Criteria | 0.92 | 0.25 | 0.230 |
| Context Clarity | 0.90 | 0.15 | 0.135 |
| **Total Clarity** | | | **0.931** |
| **Ambiguity** | | | **6.9%** |

---

## Goal

Run a **comprehensive 4-dimensional validation review** of the just-shipped taleb-pi system (P1-P5 commits) using **real omp processes** with **structured JSON output capture**. Collect data across all 4 dimensions; ship per-dimension reports + aggregate summary + raw run archive. **Soft judgment** — no hard pass/fail thresholds; user reviews data and makes the call.

## Constraints

- **Real omp processes**: Use `omp -p --mode json` for structured streaming JSON event capture (not `--mode text`). Each turn produces line-delimited JSON events (`session/agent_start/turn_start/message_start/text_delta/turn_end/agent_end`).
- **Multi-turn dialogue when needed**: Use `omp -c "next question"` to continue the same session for follow-ups. Sessions persist in `~/.omp/agent/sessions/`.
- **No TUI hack**: omp's `--mode json` and `-c continue` flags eliminate the need for tmux/expect — TUI was a misperceived blocker.
- **Model**: deepseek-v4-flash for ALL validation runs (already configured in config.yml). Flash exposes prompt-engineering quality more honestly than pro (deep reasoning compensates for prompt gaps).
- **Timeout**: Generous per-turn (180-300s) — heavyweight MAGI flow can take 1-2 min per turn × 6 turns = 6-12 min per battery question.
- **Budget**: Unlimited. ~50-100 omp calls expected (8 battery × 6 turns + comparison runs + retrieval probes + register checks).
- **Sequential within MAGI calls**: omp may serialize internally; we run battery questions sequentially to avoid contention.

## Non-Goals

- Hard pass/fail gating — user evaluates collected data with judgment, not arithmetic threshold
- Modifying agents/rules/skills based on findings (validation produces report; fixing is a separate phase)
- Testing every possible Taleb concept — 8-question battery is the limit
- Full E2E test framework (CI, regression suite, etc.) — this is one-shot validation
- Re-running ralplan or autopilot phases

---

## Acceptance Criteria

### Dimension 1: MAGI Tension Verification (8-question battery)

- [ ] Run all 8 battery questions through `omp -p --mode json "/magi <question>"` with deepseek-v4-flash
- [ ] Categories covered (per spec line 188): financial decision, system design, life choice, ethical dilemma, factual claim, technical evaluation, geopolitical assessment, personal habit
- [ ] For each question, capture:
  - Full JSON event stream → `.omc/qa/runs/d1-tension/q<N>-events.jsonl`
  - Extracted final tribunal verdict text → `.omc/qa/runs/d1-tension/q<N>-verdict.md`
  - Vote pattern classification (3-0 / 2-1 / 1-1-1)
  - Per-MAGI verdict line (accept / accept-with-conditions / reject)
  - Token + duration stats from `usage` fields in JSON events
- [ ] Aggregate report `.omc/qa/d1-tension-report.md` includes:
  - Vote pattern distribution table
  - Per-question disagreement summary
  - Soft narrative judgment: where did MAGI tension feel real vs theatrical?

### Dimension 2: Default mode vs /magi comparison

- [ ] Pick 3 questions from the 8-battery (1 high-stakes decision, 1 factual, 1 borderline)
- [ ] For each: run via `omp -p --mode json "<question>"` (default mode) AND `omp -p --mode json "/magi <question>"` (tribunal mode), capture both
- [ ] Side-by-side comparison: same question, different modes
- [ ] Report `.omc/qa/d2-mode-compare-report.md`: 
  - Did default mode actually deliver "Taleb framing" via the 10 alwaysApply rules?
  - Did MAGI tribunal add real value or just noise?
  - Is `/magi` opt-in justified, or should some questions auto-trigger?

### Dimension 3: Incerto retrieval quality

- [ ] Pick 5 representative concept queries: "narrative fallacy", "via negativa", "antifragile", "skin in the game", "ergodicity"
- [ ] For each: `bun run .omc/incerto/scripts/search.ts "<query>"` → capture top-5 hits
- [ ] LLM-judge (using a NEW omp call with deepseek-flash): given the query + top-5 hits + Taleb's actual concept definition, are the hits ON-TOPIC and FROM THE RIGHT BOOK?
- [ ] Report `.omc/qa/d3-retrieval-report.md`:
  - Per-query: top-5 with relevance verdict
  - Misses (high-rank but off-topic) flagged
  - Aggregate: % of top-3 that are genuinely relevant

### Dimension 4: Prompt register verification (translated vs original)

- [ ] For each of 4 MAGI agents (skeptic, pre-mortem, antifragility-scout, magi-synthesizer): retrieve original Chinese version from `git show 7e8b796:agents/<file>` (the commit just before P2 rewrite — actually the previous main HEAD)
- [ ] For each agent: pose the same simple prompt to the model with the original Chinese system prompt vs the new English prompt (use `--append-system-prompt @<file>` or load via `--system-prompt`)
- [ ] Compare:
  - Adversarial directness (does model push back / challenge?)
  - Specificity vs vagueness
  - Length and structure parity
- [ ] Report `.omc/qa/d4-register-report.md`:
  - Per-agent: side-by-side output
  - Soft judgment: did register survive translation, or did edge get flattened?
  - Where the English version is BETTER than original (sometimes happens)

### Final aggregate

- [ ] `.omc/qa/validation-summary.md` with:
  - Per-dimension headlines (1-paragraph each)
  - Open issues / surprises
  - Recommended fixes (if any) — but DO NOT fix in this validation phase
  - Links to all per-dimension reports + raw data

---

## Tools & Commands

### Real omp invocation pattern

```bash
# Single-turn JSON-streaming validation call
omp -p --mode json --no-session --model deepseek/deepseek-v4-flash \
  "/magi <question>" 2>&1 | tee .omc/qa/runs/d1-tension/q1-events.jsonl

# Multi-turn (continue same session) — useful for D4 register comparison if same agent must answer multiple questions
omp -p --model deepseek/deepseek-v4-flash "Question 1"  # session created
omp -p -c "Follow-up"  # continues last session
omp -p -r <session-id> "Resume that"  # resume specific session

# Extract just final assistant text from JSON events
jq -r 'select(.type=="agent_end") | .messages[-1].content[] | select(.type=="text") | .text' < q1-events.jsonl
```

### Why JSON mode beats text mode

| Concern | text mode | json mode |
|---|---|---|
| Output buffering | tee flushes only on completion | per-event flush |
| Token counts | Not captured | `.usage.totalTokens` per message |
| Tool dispatch traces | Hidden | Explicit `tool_use` events |
| Thinking traces | Mixed in stream | Separate `thinking_*` events |
| Timeout debugging | Silent until kill | Last event timestamp readable |

## Assumptions Exposed & Resolved

| Assumption | Challenge | Resolution |
|------------|-----------|------------|
| omp is TUI-only, hard to script | Probed `--mode json` and `--mode rpc` | omp natively supports JSON event streaming + RPC bidirectional + `-c` continue. No TUI hack needed. |
| Need to run 8-question battery + 4 dimensions all at once | Could be reduced for budget | User chose full coverage, no budget cap |
| Hard pass/fail thresholds needed | Could be soft user judgment | User chose soft judgment with structured data archive |
| Pro model needed for "best showing" | Flash exposes prompt gaps better | Use flash everywhere — validates prompt engineering, not max-capability |
| Need to fix issues during validation | Could be separate phase | Validation produces data + report; fixing is separate phase |

## Technical Context

### Existing artifacts (from prior phases)

- `.omc/qa/runs/qa-rules-load.txt` (verified all 10 alwaysApply rules load)
- `.omc/qa/runs/qa-identity.txt` (verified SYSTEM.md loads with Taleb framing)
- `.omc/qa/magi-probe.txt` (P1.0 probe — `/magi` produced 27 marker hits, full tribunal flow)

These prove the system loads. Validation is **substantive quality**, not load-verification.

### Plan reference

- Plan body §6 P2 acceptance criteria mention 8-question battery + categories at `.omc/plans/taleb-pi-execution-plan.md` line ~188
- D2 (cheap rollback) and D1 (tension authenticity) drivers from plan §2 are the validation framing

### MAGI architecture being validated

- **MELCHIOR-1 / Empirical Skeptic** — narrative-fallacy, evidence quality
- **BALTHASAR-2 / Tail-Risk Guardian** — via negativa, ergodicity, ruin avoidance
- **CASPER-3 / Convexity Seeker** — antifragility, barbell, optionality
- **Synthesizer** — S2A two-stage filtering, 3-0 / 2-1 / 1-1-1 verdict templates
- **Tribunal flow** — sequential per current `skills/magi-tribunal/SKILL.md` (parallel + rebuttal was specified in plan but the actual deployed file is sequential — this is a gap to investigate)

## Ontology

| Entity | Type | Fields | Relationships |
|---|---|---|---|
| ValidationDimension | core | id, name, description, run_dir, report_path | produces Report |
| BatteryQuestion | core | id, category, text | runs through TribunalRun |
| TribunalRun | core | question_id, model, mode, jsonl_path, verdict_md_path, vote_pattern, duration_ms, total_tokens | belongs to ValidationDimension |
| RetrievalQuery | supporting | query_text, top_k_results, llm_judge_verdict | part of D3 |
| RegisterCompare | supporting | agent_id, original_chinese, new_english, model_response_chinese, model_response_english | part of D4 |
| Report | output | dimension_id, content, raw_data_paths | one per ValidationDimension + 1 summary |

## 8-Question Battery (placeholder — exact wording TBD by executor)

| # | Category | Sample question seed |
|---|---|---|
| 1 | Financial decision | "Should I take a job offer 30% more pay at less stable startup?" |
| 2 | System design | "Should we adopt microservices for our 50-person engineering team?" |
| 3 | Life choice | "Should I move to a different country for a better career?" |
| 4 | Ethical dilemma | "Is it acceptable to use AI to write someone's eulogy?" |
| 5 | Factual claim | "Was COVID-19 a black swan event?" |
| 6 | Technical evaluation | "Is GraphQL better than REST for a public API?" |
| 7 | Geopolitical | "Will China overtake the US economy by 2035?" |
| 8 | Personal habit | "Should I quit social media entirely?" |

Executor finalizes exact wording from the categories with Taleb framing in mind (e.g., questions where MAGI's three optimization targets actually clash).

## Limitations

- Soft judgment means findings are user-evaluated; no automated regression
- Single LLM judge for D3 retrieval (no human inter-rater)
- D4 compares against ONE Chinese version (the previous main HEAD); not all rev 2.5 history
- omp's actual parallelism in MAGI flow is internal — JSON events show order but not concurrency
- 5 books × 773 chunks × 5 queries = limited corpus coverage; rare concepts may not surface

---

## Interview Transcript

<details>
<summary>Full Q&A (5 rounds)</summary>

### Round 1
**Q:** Validation review 范围是什么?(可多选)
**A:** All 4 — MAGI tension (8-battery), default vs /magi compare, Incerto retrieval quality, prompt register
**Ambiguity:** 100% → 58% (Goal: 0.75, Constraints: 0.30, Criteria: 0.40, Context: 0.85)

### Round 2
**Q:** 验证预算/优先级怎么定?
**A:** 全量跑(不限预算)
**Ambiguity:** 58% → 38%

### Round 3
**Q:** Pass/fail 阈值怎么定?
**A:** 柔性 — 收集数据由我调代判定
**Ambiguity:** 38% → 22%

### Round 4 (Contrarian mode)
**Q:** Validation 用什么模型? 验证 prompt 工程质量 vs 最佳状态能力?
**A:** 全部跑 deepseek-flash
**Ambiguity:** 22% → 12%

### Round 5 (Simplifier mode)
**Q:** 交付形式?(决定跑完之后产出什么)
**A:** Per-维度报告 + 汇总 + 原始数据存档
**Ambiguity:** 12% → 5%

</details>
