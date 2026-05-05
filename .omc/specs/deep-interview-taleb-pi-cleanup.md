# Deep Interview Spec: taleb-pi Via Negativa Cleanup, MAGI System & Enrichment

## Metadata
- Interview ID: taleb-pi-improvements-20260505
- Rounds: 15 (6 standard + 6 MAGI-focused + 3 architecture/prompt refinement)
- Final Ambiguity Score: 8.4%
- Type: brownfield
- Generated: 2026-05-05 (updated post-sciomc + external-context)
- Threshold: 20%
- Initial Context Summarized: no
- Status: PASSED
- Sciomc Session: magi-tension-design (5 stages + cross-validation, complete)
- External Context: oh-my-pi architecture + prompt engineering research (4 facets, complete)

## Clarity Breakdown (final, Round 15)
| Dimension | Score | Weight | Weighted |
|-----------|-------|--------|----------|
| Goal Clarity | 0.95 | 0.35 | 0.333 |
| Constraint Clarity | 0.90 | 0.25 | 0.225 |
| Success Criteria | 0.88 | 0.25 | 0.220 |
| Context Clarity | 0.92 | 0.15 | 0.138 |
| **Total Clarity** | | | **0.916** |
| **Ambiguity** | | | **8.4%** |

## Goal

Transform taleb-pi into a Taleb-style thinking agent with a 3-agent MAGI debate system at its core. Clean up first (Via Negativa), then build the MAGI architecture grounded in academic research on productive tension. The agent's purpose is to **reshape how users think** (make them Taleb disciples); code is subordinate to thinking.

## Constraints

- **Via Negativa first**: Remove or simplify before adding. Every addition must justify its existence.
- **No breaking changes to core flow**: SYSTEM.md + rules + skills must remain functional throughout.
- **Prompt engineering quality**: All prompts follow established practices (The Prompt Report arxiv 2406.06608, oh-my-openagent patterns). Key techniques: Role Prompting with REASON, Self-Refine, Zero-Shot for rules / Few-Shot for output format, S2A attention filtering, "Why Not What" rule construction.
- **Dormant project**: Free to restructure; no active users to protect.
- **Full platform-native**: No extension. No TTSR for narrative fallacy (MAGI handles it). MAGI via alwaysApply rule + task tool. Delete extensions/ entirely.
- **Positive convexity (高正凸)**: Must be a prominent concept, not buried in a single skill.
- **MAGI tension is mandatory**: "三者之间必须要有张力" — the three agents must have genuine productive disagreement, not theater.
- **MAGI fires every response**: Not on-demand — the debate system is the core thinking loop.
- **MAGI parallel + rebuttal**: Round 1 parallel (independent, no cross-contamination), Round 2 rebuttal (each sees the other two's verdicts). Nemeth authenticity preserved.
- **EVA canon matters**: MAGI names map to Evangelion's Akagi Naoko personality split.
- **Prompt engineering techniques**: Pre-committed blind spots, S2A filtering for synthesizer, CoT boundary rules, few-shot output examples — all mandatory.

## Non-Goals

- Building a full testing framework
- Implementing IntentGate or automatic intent classification
- Implementing ModeMarker (oh-my-pi's native TTSR handles guardrails)
- Maintaining the extension system (deleted entirely; TTSR replaces narrative fallacy scanner)
- Making tools/ "do real work" (deleting tools/ entirely)
- Multi-model routing or provider configuration
- Persisting mode state across sessions
- Command-based mode switching (commands deleted entirely)

---

## Acceptance Criteria

### Phase 1: Via Negativa Cleanup (remove/simplify)

- [ ] **Delete `tools/` directory entirely** — 4 pointer-only tools add latency without value
- [ ] **Delete `commands/` directory entirely** — 5 stateless one-shot injections superseded by MAGI system. No more mode switching; MAGI IS the mode.
- [ ] **Delete `agents/convexity-reviewer.md`** — superseded by `agents/antifragility-scout.md` (CASPER-3)
- [ ] **Delete `extensions/` directory entirely** — narrative fallacy detection moves to TTSR rule (zero context cost, regex-triggered stream abort). No more extension API bugs. No more TUI hang risk.
- [ ] **Fix README.md**: Remove `models.yml` reference; correct "not write code" to "code is subordinate to thinking"; update directory tree
- [ ] **Delete** `2026-05-04-taleb-pi-oh-my-pi-vs-oh-my-openagent-analysis.md` (stale analysis doc in repo root)
- [ ] **Update `config.yml`**: Remove `disabledExtensions` entry (no extensions to disable); remove `extensions` paths if present

### Phase 2: MAGI 3-Agent Debate System (the core build)

Grounded in sciomc research: 5 stages analyzing Taleb's internal tensions, social science debate frameworks (Nemeth, Habermas, Hegel), AI multi-agent debate systems, division optimization across 40 simulated scenarios, and synthesis mechanism design.

#### 2a: Revise MAGI Agent Files (Hybrid Division)

Cross-validation found: Stage 4's attitudes + Stage 5's EVA canon = optimal hybrid.

- [ ] **Revise `agents/skeptic.md` (MELCHIOR-1 — 怀疑者/科学家)**
  - Keep: evidence-grading checklist, blind spot declaration, MAGI identity
  - Add: SKEPTICAL attitude framing with REASON ("Your instinct is DOUBT — because without you, MAGI loses its only node that tests evidence quality")
  - Add: EVA canon reference (Akagi Naoko as Scientist)
  - Add: Explicit tension instruction vs CASPER
  - Add: Pre-committed blind spots (2-3 named failure modes the agent MUST reference, not free-form)
  - Add: CoT boundary rule ("When reasoning enters payoff structure territory → stop, tag [CASPER维度]")
  - Add: One `<example>` block with realistic filled output (few-shot for output format)
  - Change: Chinese label from 可证伪性 to 怀疑者/科学家
  - Change: Frameworks to narrative_fallacy, skin_in_the_game, agency_problem, ergodicity, exposure_over_prob

- [ ] **Revise `agents/pre-mortem.md` (BALTHASAR-2 — 保守者/母親)**
  - Keep: pre-mortem failure analysis, blind spot declaration, MAGI identity
  - Add: VIA NEGATIVA attitude with REASON ("Your instinct is REMOVE — because without you, MAGI has no guardian against iatrogenic harm")
  - Add: EVA canon reference (Akagi Naoko as Mother)
  - Add: iatrogenics, lindy_effect, via_positiva_trap as primary frameworks
  - Add: Peacemaker clause ("On non-ruin questions where MELCHIOR and CASPER disagree, you may break the tie. On absorbing-barrier ruin, you override all.")
  - Add: Pre-committed blind spots (named failure modes)
  - Add: CoT boundary rule ("When reasoning enters evidence grading → stop, tag [MELCHIOR维度]")
  - Add: One `<example>` block with realistic filled output
  - Change: Chinese label from 规避毁灭 to 保守者/母親

- [ ] **Revise `agents/antifragility-scout.md` (CASPER-3 — 反脆弱者/女性)**
  - Keep: payoff curvature analysis, barbell structure check, blind spot declaration, conditional deference to BALTHASAR on absorbing barriers
  - Add: ANTIFRAGILE attitude with REASON ("Your instinct is EMBRACE — because without you, MAGI becomes a system that only knows how to say no")
  - Add: EVA canon reference (Akagi Naoko as Woman)
  - Add: Explicit tension with MELCHIOR
  - Add: Censor duty ("If all three MAGI agree in round 1, you MUST construct the strongest possible refutation before confirming 3-0")
  - Add: Pre-committed blind spots (named failure modes)
  - Add: CoT boundary rule ("When reasoning enters evidence quality → stop, tag [MELCHIOR维度]")
  - Add: One `<example>` block with realistic filled output
  - Change: Chinese label from 凸性 to 反脆弱者/女性

- [ ] **Revise `agents/magi-synthesizer.md`**
  - Keep: All vote logic, 3 output templates (3-0, 2-1, 1-1-1), equal display weight, action consensus, reframed question
  - Change: Labels in templates from 可证伪性/规避毁灭/凸性 to 怀疑者/保守者/反脆弱者
  - Add: **S2A two-stage filtering** — before classifying votes, extract each MAGI's optimization dimension + substantive verdict + condition content. Discard surface wording, emotional tone, politeness hedges. Classify votes ONLY on extracted structure. Two MAGIs saying "条件接受" with conditions from different dimensions = 1-1-1, not 2-0.
  - Add: 2-1 pattern semantic descriptions:
    - M+B vs C: "Evidence + survival say no, but CASPER sees convexity. Is the downside actually capped?"
    - M+C vs B: "Evidence + convexity align, but BALTHASAR insists: have you modeled the absorbing barrier?"
    - B+C vs M: "Survival + convexity agree, but MELCHIOR warns: your evidence base is narrative-grade."

#### 2b: MAGI Execution Flow (Parallel + Rebuttal)

- [ ] **Revise `skills/magi-tribunal/SKILL.md`** for parallel + rebuttal architecture:
  - Change: Flow from sequential (MELCHIOR → BALTHASAR → CASPER) to:
    - **Round 1 (parallel)**: Fire 3 MAGI simultaneously. Each sees ONLY the user's question. No cross-contamination. Independent judgment.
    - **Round 2 (rebuttal)**: Each MAGI receives the other two's Round 1 verdicts. Can file a one-paragraph rebuttal or confirm their position. This is where cross-referencing happens — AFTER independent judgment.
    - **Synthesis**: Synthesizer receives Round 1 outputs + Round 2 rebuttals.
  - Keep: Anti-convergence stack, triggers
  - Change: Agent descriptions to hybrid attitude+domain framing
  - Add: Censor trigger for 3-0 consensus (CASPER must attempt refutation in rebuttal round)
  - Add: Factual question pre-classification gate ("If purely factual with no value component, skip MAGI debate")

#### 2c: MAGI Platform-Native Integration

- [ ] **Create `rules/magi-protocol.md`** (alwaysApply: true) — instructs the main agent to:
  1. For every non-trivial question, fire 3 parallel `task` calls (MELCHIOR, BALTHASAR, CASPER) with only the user's question
  2. Wait for all 3 to complete
  3. Fire 3 parallel rebuttal `task` calls (each MAGI gets the other two's Round 1 output)
  4. Wait for all 3 rebuttals
  5. Feed all 6 outputs to synthesizer logic
  6. Present the structured verdict
  - Trivial questions (greetings, factual lookups, clarifications) bypass MAGI
  - Uses oh-my-pi's `async.enabled: true` + `task` tool for parallel execution


### Phase 3: Content Enrichment (add what's justified)

- [ ] **Cherry-pick `rules/cognitive-state-diagnosis.md`** from attic branch — GT0-GT5 cognitive state framework
- [ ] **Cherry-pick `skills/mental-models/SKILL.md`** from attic branch — 4 supplementary models
- [ ] **Add `rules/ergodicity.md`** — Cover SYSTEM.md's 7th mental model (遍历性: ensemble average ≠ time average)
- [ ] **Strengthen 高正凸 coverage** — Add `rules/positive-convexity.md` as alwaysApply rule (not just a skill); CASPER-3's attitude already foregrounds this but a rule ensures it's in every context

### Phase 4: Prompt Quality Pass

- [ ] **Review all rules/ for prompt engineering best practices**: Role Prompting with REASON, "Why Not What" rule construction, concrete behavioral instructions
- [ ] **Review all skills/ for prompt engineering quality**: Clear invocation context, structured output format, anti-patterns section
- [ ] **Review SYSTEM.md**: Ensure all 8 mental models referenced, positive convexity prominent, "code is thinking's servant" framing, MAGI system described as core architecture
- [ ] **Review all agents/ for prompt engineering quality**: Each MAGI agent should use Role Prompting with REASON, have concrete examples (few-shot for output format), Self-Refine pattern (blind spot declaration = self-criticism)
- [ ] **Update AGENTS.md**: Reflect new agent roster (3 MAGI + 1 synthesizer, no convexity-reviewer)

### Phase 5: Incerto Knowledge System (BM25 + Protocol + Crystallization)

Authoritative source: `incerto-5-book-bundle.epub` (19MB, 5 books)

#### 5a: Epub Ingestion + BM25 Index
- [ ] **Parse epub** into chapter-aware markdown chunks (~500 tokens each). Preserve book title + chapter number + section heading as metadata per chunk.
- [ ] **Build BM25 index** using `bm25` npm package (12KB, zero heavy deps). Store chunks as markdown files, index as JSON.
- [ ] **Add `.gitignore` entry** for the epub file (19MB binary should not be committed)
- [ ] **Store knowledge base** in `.omc/incerto/` — chunks/ (markdown files), index.json (BM25 index), query-log.json (frequency tracking)

#### 5b: MAGI Query Protocol
- [ ] **Add to each MAGI agent's system prompt**: "在给出裁判前，必须至少查询一次 Incerto 知识库来确认你的分析与 Taleb 原文一致。引用格式：`> "quote" — Book, Ch. N`"
- [ ] **Expose as oh-my-pi skill or MCP tool**: `incerto_search(query)` → returns top-k ranked chunks with book/chapter citation

#### 5c: High-Frequency Crystallization
- [ ] **Track query frequency** in `query-log.json` — record each query + which chunks were returned + timestamp
- [ ] **Crystallization trigger**: When a chunk is hit ≥ N times across sessions, auto-promote to `.omc/wiki/` page via LLM summarization (summarize at crystallization time, not at ingest — saves tokens)
- [ ] **Wiki pages get search priority**: Once a passage is crystallized into a wiki page, future queries check wiki first, raw chunks second

---

## MAGI Architecture (from sciomc research)

### The Tension Triangle

```
           MELCHIOR-1 (Scientist/Skeptical)
           "PROVE IT"
              /                  \
   Both lean NO              PROVE vs EMBRACE
   different reasons          (STRONG)
   (MED-STRONG)
            /                      \
BALTHASAR-2                     CASPER-3
(Mother/Conservative)           (Woman/Antifragile)
"REMOVE IT"                     "EMBRACE IT"
        \                        /
         REMOVE vs EMBRACE
         (STRONGEST)
```

### Why This Division (research evidence)

1. **75% directional disagreement** across 8 test question types (Stage 4, 40 simulated scenarios) — 6x the original domain-based proposal (12.5%)
2. **EVA canon fit: 2.5-3/3** — Scientist=evidence, Mother=protection, Woman=opportunity (Stage 5 + cross-validation)
3. **Mirrors real tension in Taleb's writing** — he oscillates between these three voices throughout the Incerto (Stage 1, 5 tensions identified)
4. **Nemeth (2001) authenticity principle** — devil's advocacy = statistically same as no dissent; only authentic positions produce insight (Stage 2)
5. **1 Peacemaker + 2 Troublemakers optimal** — BALTHASAR as peacemaker, MELCHIOR+CASPER as troublemakers (Stage 3, arXiv:2509.23055)
6. **100% framework coverage** — all 14 Taleb frameworks mapped to at least one MAGI (Stage 4)

### Anti-Convergence Stack (3 layers + 2 safeguards)

1. **Value Anchoring**: Irreconcilable optimization targets in system prompts with REASON (why this target is irreplaceable)
2. **Parallel Independence**: Round 1 produces uncontaminated judgments; cross-referencing deferred to Round 2 rebuttal
3. **Blind Spot Declaration**: Each MAGI has 2-3 pre-committed named failure modes (not free-form)

Plus:
4. **CoT Boundary Rules**: Explicit stop conditions when reasoning enters another MAGI's dimension (prevents dimension bleed)
5. **Censor trigger**: CASPER must construct refutation before any 3-0 is confirmed in rebuttal round

### Execution Flow

```
User Question
     │
     ├─────────────┼─────────────┐
     │             │             │
MELCHIOR-1    BALTHASAR-2    CASPER-3
(parallel)    (parallel)    (parallel)
 Round 1       Round 1       Round 1
(independent) (independent) (independent)
     │             │             │
     ├─────────────┼─────────────┤
     │   cross-reference         │
     │             │             │
MELCHIOR-1*   BALTHASAR-2*   CASPER-3*
(sees B+C)    (sees M+C)    (sees M+B)
 Round 2       Round 2       Round 2
(rebuttal)    (rebuttal)    (rebuttal)
     │             │             │
     └─────────────┼─────────────┘
              │
         SYNTHESIZER
     (S2A: extract dimensions
      before classifying votes)
              │
     Structured verdict
```

### Vote Semantics

| Pattern | Meaning | Frequency |
|---------|---------|-----------|
| 3-0 | All optimization targets align — high signal, rare | ~25% |
| 2-1 | One dimension stands alone — dissent gets equal weight | ~45% |
| 1-1-1 | Genuinely value-dependent — highest information output | ~30% |

---

## Files Changed (complete manifest)

### DELETE
| Path | Reason |
|------|--------|
| `tools/` (entire directory) | Pointer-only tools; skills are sufficient |
| `commands/` (entire directory) | Stateless one-shot injections; MAGI replaces mode concept |
| `agents/convexity-reviewer.md` | Superseded by antifragility-scout.md (CASPER-3) |
| `extensions/` (entire directory) | Narrative fallacy → TTSR rule; no more API bugs, no TUI hang risk |
| `2026-05-04-taleb-pi-oh-my-pi-vs-oh-my-openagent-analysis.md` | Stale analysis doc |

### REWRITE
| Path | Change |
|------|--------|
| `README.md` | Directory tree, framing, remove models.yml ref |
| `SYSTEM.md` | MAGI as core architecture, all 8 models, convexity prominent, "code is thinking's servant" |
| `AGENTS.md` | New agent roster (3 MAGI + 1 synthesizer) |

### REVISE (keep content, add framing + prompt techniques)
| Path | Change |
|------|--------|
| `agents/skeptic.md` | Skeptical attitude + REASON, EVA canon, pre-committed blind spots, CoT boundaries, few-shot example |
| `agents/pre-mortem.md` | Via Negativa attitude + REASON, EVA canon, peacemaker role, pre-committed blind spots, CoT boundaries, few-shot example |
| `agents/antifragility-scout.md` | Antifragile attitude + REASON, EVA canon, censor duty, pre-committed blind spots, CoT boundaries, few-shot example |
| `agents/magi-synthesizer.md` | Update labels, S2A two-stage filtering, 2-1 semantic descriptions |
| `skills/magi-tribunal/SKILL.md` | Parallel + rebuttal flow, censor trigger, pre-classification gate |

### NEW
| Path | Purpose |
|------|---------|
| `rules/magi-protocol.md` | alwaysApply rule — instructs main agent to fire MAGI parallel + rebuttal on every non-trivial question |
| `rules/ergodicity.md` | Missing mental model #7 |
| `rules/positive-convexity.md` | Foreground 高正凸 as alwaysApply rule |
| `rules/cognitive-state-diagnosis.md` | From attic branch |
| `skills/mental-models/SKILL.md` | From attic branch |
| `.omc/incerto/chunks/` | Epub chapter-aware markdown chunks (~300-500 files) |
| `.omc/incerto/index.json` | BM25 index over chunks |
| `.omc/incerto/query-log.json` | Query frequency tracker for crystallization |

### MODIFY
| Path | Change |
|------|--------|
| `config.yml` | Remove disabledExtensions and extensions entries |

---

## Technical Context

### oh-my-pi Architecture (from external-context research)

**SYSTEM.md**: Replaces default system prompt entirely. Discovery: `~/.omp/agent/SYSTEM.md` → `<cwd>/.omp/SYSTEM.md`.

**rules/**: Files with `alwaysApply: true` are injected verbatim into system prompt. Files with `condition` arrays become TTSR (regex-triggered stream interrupts — abort + retry, zero context cost until triggered).

**skills/**: Passive content packs (`SKILL.md`). Content injected on demand via `skill://<name>`.

**Agents**: Defined in `agents/*.md`. Frontmatter: `name`, `description` (required), `model`, `tools`, `spawns`, `blocking`. Body = system prompt. Main agent calls subagents via `task` tool (synchronous from model's perspective). Parallel execution via `async.enabled: true` config.

**AGENTS.md**: NOT agent config — loaded as persistent instruction context (like CLAUDE.md).

**TTSR**: Time Traveling Stream Rules. Rules with `condition` (regex array) monitor streaming output. On match: `agent.abort()` → inject `<system-interrupt>` → `agent.continue()`. Zero tokens until triggered. Supports `interruptMode` (always/never/prose-only/tool-only) and `contextMode` (discard/keep).

**Key insight — no `alwaysSpawn`**: oh-my-pi has no declarative mechanism to auto-invoke agents. The pattern is: an `alwaysApply` rule instructs the main agent to call the `task` tool.

### oh-my-pi Extension API (verified, from external-context research)

```typescript
// Correct signatures (confirmed against pi-mono types.ts):
InputEvent.text              // NOT .content
MessageEndEvent.message      // AgentMessage, extract text from .content[]
ToolResultEvent.content      // (TextContent | ImageContent)[], NOT .result
pi.sendMessage({ customType, content, display }, { triggerTurn?, deliverAs? })
pi.appendEntry(customType, data)
// No .role field, no .silent option, no optional chaining needed
```

**Extension deleted** — all 7 API bugs are moot. Narrative fallacy detection moves to TTSR rule.

### Prompt Engineering Practices (from external-context research)

| Technique | Where Applied | Mechanism |
|-----------|--------------|-----------|
| Role Prompting with REASON | All MAGI agents | Identity + why this role is irreplaceable — gives agent reason to resist sycophantic agreement |
| Pre-committed Blind Spots | All MAGI agents | 2-3 named failure modes in system prompt; agent must reference which one was triggered. Prevents rationalization. |
| S2A Two-Stage Filtering | magi-synthesizer.md | Stage 1: extract optimization dimension + verdict + conditions. Stage 2: classify votes on extracted structure only. Prevents surface-agreement misclassification. |
| CoT Boundary Rules | All MAGI agents | Explicit stop conditions when reasoning enters another MAGI's dimension. Tag as [CASPER维度] etc. Prevents dimension bleed. |
| Few-Shot for Output | All MAGI agents | One `<example>` block with realistic filled output per agent. Grounds format. |
| Zero-Shot for Rules | rules/ files | Behavioral instructions without examples — avoids pattern-matching pressure |
| "Why Not What" | All rules/ files | Each rule explains WHY the behavior matters, not just WHAT to do. Enables edge-case generalization. |
| Avoid Aggressive NEVER/MUST | All prompts | Opus 4.5+ responds to normal register; dial back imperatives, add "because" clauses |

### Sources

- [oh-my-pi docs](https://github.com/can1357/oh-my-pi) — config-usage, task-agent-discovery, ttsr-injection-lifecycle, rulebook-matching-pipeline, skills
- [pi-mono extensions/types.ts](https://github.com/badlogic/pi-mono/blob/main/packages/coding-agent/src/core/extensions/types.ts) — verified API signatures
- [The Prompt Report arXiv:2406.06608](https://arxiv.org/abs/2406.06608) — 58 techniques taxonomy
- [Self-Refine arXiv:2303.17651](https://arxiv.org/abs/2303.17651) — blind spot declaration pattern
- [S2A arXiv:2311.11829](https://arxiv.org/abs/2311.11829) — two-stage attention filtering
- [Layered CoT arXiv:2501.18645](https://arxiv.org/pdf/2501.18645) — CoT boundary rules
- [Multi-Agent Design arXiv:2502.02533](https://arxiv.org/html/2502.02533v1) — heterogeneous agents outperform homogeneous
- [Anthropic Prompting Best Practices](https://platform.claude.com/docs/en/docs/build-with-claude/prompt-engineering/claude-prompting-best-practices)

---

## Assumptions Exposed & Resolved

| Assumption | Challenge | Resolution |
|------------|-----------|------------|
| Extension is valuable | IntentGate redundant; ModeMarker overlaps TTSR; API has 7 bugs; caused TUI hang | Delete extensions/ entirely; MAGI's MELCHIOR handles narrative fallacy detection contextually |
| Commands are needed | Stateless one-shot; MAGI replaces mode concept | Delete all commands |
| Domain-based MAGI division works | Forms sequential pipeline, not oppositional triad (38% tension) | Attitude-based division (75% tension) |
| Devil's advocacy produces insight | Nemeth 2001: statistically same as no dissent | Authentic positions via value anchoring |
| Temperature variation helps disagreement | Adds noise, not reason | Value anchoring instead |
| 1-1-1 split is a failure | Three incompatible values = genuinely value-dependent question | Highest-information output; present as feature |
| Users can self-judge narrative fallacies | MELCHIOR (怀疑者) flags narrative fallacy on every response as part of MAGI debate | MAGI replaces regex scanner; context-aware beats pattern-matching |
| MAGI should be on-demand (/magi) | User decided: every response | Core thinking loop via alwaysApply rule |
| Sequential MAGI produces better tension | Later agents anchor on earlier output; Nemeth says independent judgment is stronger | Parallel Round 1 + rebuttal Round 2 |
| Free-form blind spots work | Agents rationalize away generic "state your limitations" | Pre-committed named failure modes |
| Extension needed for narrative fallacy | MAGI's MELCHIOR already flags narrative fallacy contextually on every response; regex is blunt and redundant | Delete entirely; MAGI subsumes this function |

---

## Interview Transcript (Rounds 7-12 additions)

### Round 7
**Q:** Are commands useful? Also, Round 6 research needs deeper investigation.
**A:** Commands need review. External research must be thorough, not superficial.
**Decision:** Triggered deep document-specialist + explore agent research on Prompt Report and oh-my-openagent.

### Round 8
**Q:** Which commands to keep?
**A:** Drop commands entirely. Also: use oh-my-pi's multi-agent capability — 3 agents debating every answer to get the most Talebian result.
**Decision:** Commands deleted. MAGI 3-agent debate system born.

### Round 9
**Q:** MAGI scope — include in spec now or later?
**A:** MUST include now. Name them MELCHIOR-1, BALTHASAR-2, CASPER-3 after Evangelion MAGI.
**Decision:** MAGI is core scope, not Phase 2 add-on.

### Round 10
**Q:** When does MAGI fire?
**A:** Every response.
**Decision:** MAGI is the default thinking loop, not on-demand.

### Round 11
**Q:** What synthesis mechanism?
**A:** EVA-style vote + explicit disagreement display.
**Decision:** 3-0 / 2-1 / 1-1-1 templates with equal dissent weight.

### Round 12
**Q:** Implementation approach?
**A:** No extension needed — oh-my-pi has native subagent capability. Just edit agent files. Main agent is like 神 (God) — must embody Taleb. Division is the key question — need social science research.
**Decision:** Triggered sciomc research (5 stages) on MAGI tension design.

### Round 13
**Q:** How should the 3 MAGI agents execute — parallel or sequential?
**A:** "先并发出结果，之后再复用agent" — parallel first to avoid anchoring, then rebuttal round.
**Decision:** Parallel Round 1 (independent, no cross-contamination) + Rebuttal Round 2 (each sees others' verdicts).

### Round 14
**Q:** MAGI trigger mechanism and narrative fallacy implementation?
**A:** Full platform-native. MAGI via alwaysApply rule + parallel task calls. Narrative fallacy → TTSR rule. Delete extensions/ entirely.
**Decision:** No extension system at all. Two new rules: magi-protocol.md (alwaysApply) + narrative-fallacy-guard.md (TTSR).

### Round 15
**Q:** Which prompt engineering techniques for MAGI agents?
**A:** All four: pre-committed blind spots, S2A filtering for synthesizer, CoT boundary rules, few-shot output examples.
**Decision:** All 4 techniques mandatory in agent rewrites.
