# taleb-pi Execution Plan — Via Negativa Cleanup, MAGI System, Enrichment, Incerto KB

## How to read this document (executor onboarding)

This plan has accumulated 4 iterations of consensus refinement (rev 1 → 2.5 → 3.0 → 3.1 → 3.2). Total length is intentionally exhaustive but execution-critical sections are concentrated:

**Required reading (≈400 lines) — orient here before starting P1.0:**
- Revision history (immediately below)
- §1 Principles + spec-conflict adjudications (§1.A–§1.D)
- §6 Phase-by-Phase Plan (P1 through P5; especially P1.0 and P2.0 HARD GATES)
- §8 ADR

**Reference during execution (≈1100 lines) — consult as needed, not linearly:**
- §2–§5: Decision Drivers, Options, Pre-Mortem (PM1–PM8), Test Plan — consult when a P-step decision is ambiguous
- §7 Risks & Mitigations (R1–R19) — consult when a phase encounters an unexpected outcome
- `.omc/plans/register-exemplar.md` — calibration anchor for P2 agent rewrites (P2.0 HARD GATE)
- `.omc/plans/open-questions.md` — outstanding items + resolution log per revision

**Execution starts at P1.0 (slash-routing pre-flight).** This is a HARD GATE — do not begin P1.1 deletions until P1.0 produces a recorded Outcome A / B-1 / B-2 decision in `.omc/qa/slash-routing-result.md`. Outcome C halts the entire plan.

Do not read all ~1540 lines linearly before starting — that is iteration churn, not iteration value. Orient on the ~400 lines above, then start P1.0.

---

**Mode:** RALPLAN-DR DELIBERATE (destructive changes detected; rev 3.0 adds four coupled architectural changes; rev 3.1 absorbs iter-3 review feedback; rev 3.2 = lightweight doc pass)
**Date:** 2026-05-05
**Status:** REVISION 3.2 — ACCEPTED. Architect (iter-4): APPROVE-WITH-RESERVATIONS (3 NI-rev4 polish items). Critic (iter-4): APPROVE + lightweight rev 3.2 doc pass. Rev 3.2 applies the 3 NI-rev4 mechanical polish edits without a full P→A→C cycle. Plan is the basis for executor handoff via `/oh-my-claudecode:start-work taleb-pi-execution-plan`.
**Revision history:**
- Rev 1 (initial): drafted from spec + research; verdict ITERATE from both reviewers.
- Rev 2: incorporates 7/7 MUST FIX (CF1 tools/ paradox, MF1 parallelism timestamp test, MF3 subagent skill smoke test, MF4 narrative-fallacy spec adjudication, MF2 vector-retrieval acknowledgment, concrete verification commands per phase, internal consistency fixes) + most SHOULD FIX items.
- Rev 2.5: NI-1 (stub skill at P2 acceptance, real skill at P5.3 — resolves smoke-test sequencing contradiction), NI-2 (ratio-based parallelism test replacing dispatch-spread to close false-pass window), NI-3 (cross-file label-consistency grep added to atomicity step) + new P2.7 sub-task tracking the stub creation. **ACCEPTED.**
- Rev 3.0: Four coupled amendments applied — (1) MAGI opt-in via `/magi` (reverses spec lines 38, 372 and Round 10 decision; collapses 3-state graduated gate to 1-state; `rules/magi-protocol.md` shrinks from ≤1500-token dispatcher to ~50-token recommendation hint); (2) System-level prompts (5 agents + 1 magi skill + 6 existing rules + 3 new rules + SYSTEM.md = ~17 files) translated from heavy Chinese (45-59% CJK) to English, with bilingual trigger keyword regexes preserved at the points where Chinese user input must match; (3) MAGI labels drop Scientist/Mother/Woman canon in favor of Empirical Skeptic / Tail-Risk Guardian / Convexity Seeker (numerical IDs MELCHIOR-1/BALTHASAR-2/CASPER-3 preserved as EVA tribute); (4) Explicit "Taleb"/"Nassim Taleb" cueing in every system prompt to activate training-time pattern recall. New §1 entry adjudicates spec lines 38/372. New PM5-PM8. New unit checks for register preservation, Taleb-cueing audit, bilingual trigger regex test. P2 expands; P4 expands materially (now the English-rewrite + Taleb-cueing + prompt-quality pass for all system files). P1 unchanged. P3 minor. P5 minor (MAGI query mandate now scoped to `/magi` invocations only). **ITERATE verdict from both reviewers; superseded by 3.1.**
- Rev 3.1 — iter-3 review absorption. **MUST FIX** (5): MF1 P1.0 slash-routing pre-flight (HIGH, blocks P1) — empirical 3-branch test resolves the unverified `/magi` routing claim before P1 deletes `commands/`; MF2 PM8 mitigation strengthening — Option A (50-token hint) stays primary, Option B (TTSR rule `rules/magi-suggest-trigger.md`) documented as built-on-pivot; MF3 §1.C.1 default-mode capability disclosure — explicit two-tier system; Principle 1 reframed from "MAGI tension is mandatory" to "tension is opt-in via `/magi`; default mode = Taleb-flavored single-voice"; MF4 differentiated per-MAGI Taleb cueing — three distinct opening-paragraph templates citing different Taleb works (Black Swan / Antifragile Ch 7 / Antifragile Ch 18-19), replacing the rev 3.0 identical-with-role-swap-slot template; MF5 register exemplar file at `.omc/plans/register-exemplar.md` created before P2.1. **SHOULD FIX** (3): SF1 PM7 honesty + counterfactual test — §1.B factually corrected (the cross-validation report DID ground peacemaker partly in maternal archetype; rev 3.0 claim that "geometry not archetype" was wrong about the source); PM7 Test B (M+B vs C counterfactual) added; SF2 §1.D split into 1.D.1 (slash-command resolution) and 1.D.2 (in-context regex) — different mechanisms not interchangeable; SF3 8-question battery scoping — primary path is `/magi`-invoked (already documented); ADD default-mode 8-question coherence check (≥7/8 produce sensible Taleb-flavored response without `/magi` prefix). New R19 (PM8 telemetry sample-size caveat). New ADR section on rev-3.0-spec-departure validation cost (CO-4 absorption). Overall delta: ~250 net new lines; no architectural rewrites; the 4 rev 3.0 amendments survive intact with stronger empirical anchoring. **Iter-4 verdicts: Architect APPROVE-WITH-RESERVATIONS, Critic APPROVE + lightweight rev 3.2 doc pass; superseded by 3.2.**
- **Rev 3.2 (this)** — iter-4 review absorption (lightweight doc pass; no full P→A→C cycle). Three SHOULD FIX polish edits applied surgically (~9 minutes total work; all NI-rev4 items LOW severity, all executor-applicable polish): NI-rev4-1 P1.0 ambiguous-outcome disambiguation rule — adds explicit fallback when 1-2 of 5 probe markers fire (default to Outcome C halt; do NOT default to Outcome A on partial evidence; AND-condition for Outcome A documented); NI-rev4-2 P1.0 grep matcher tightening — replaces loose `task ` (trailing space) with structural matchers (`<tool_use[^>]*task|task --`) AND adds executor manual visual inspection step as supplement (defends against LLM prose containing the word "task" being mis-classified as dispatch trace); NI-rev4-3 executor onboarding note at top of document — names the ~400 lines of required reading vs ~1100 lines of reference-during-execution to avoid 1540-line linear read on handoff. **No architectural changes.** Net delta: ~30 lines added (≤1 line for ambiguity rule, ≤6 lines for tightened grep + manual inspection wording, ≤22 lines for onboarding section at top). **ACCEPTED.** Plan is final; executor handoff begins at P1.0.
**Source spec:** `.omc/specs/deep-interview-taleb-pi-cleanup.md` (8.4% ambiguity, PASSED)
**Source research:** `.omc/research/magi-tension-design/report.md`, `.omc/scientist/reports/20260505_013647_magi_cross_validation.md`, `.omc/scientist/reports/20260505_030047_knowledge_system_research.md`
**Reviews:** `.omc/plans/architect-review.md`, `.omc/plans/critic-evaluation.md`
**Plan owner (executor target):** `/oh-my-claudecode:start-work taleb-pi-execution-plan`

---

## 1. Principles (5)

1. **Via Negativa first.** Every phase starts with deletion. P1 must complete (and be verified) before any P2 addition. The repo gets smaller before it gets richer.
2. **MAGI tension is opt-in via `/magi`; when invoked, mandatory (not theatrical); default mode has no tension surface** (rev 3.1 honest reframing — was "mandatory, not theatrical (when invoked)" in rev 3.0). When `/magi` is invoked the 3 agents must hold authentic, irreconcilable optimization targets (Empirical Skeptic / Tail-Risk Guardian / Convexity Seeker); a verification run with <60% directional disagreement on the 8-question `/magi` battery fails the build. **Default-mode responses are Taleb-flavored single-voice** (one main-agent turn, ~10 alwaysApply rules + SYSTEM.md inject Taleb framework; PM5 register check verifies absence of softening hedges). **Tension by-construction does not apply to default mode** — there is no parallel debate, no synthesizer template, no 3-voice geometry. The rev 1 spec's "三者之间必须要有张力" mandate has been narrowed (per rev 3.0 amendment 1.C, user decision Round 17) from "every response" to "every `/magi` invocation." This narrowing is honestly named here (it was elided as "scope-narrowed" in rev 3.0). **The rev 1 75% disagreement projection (Stage 4-5 simulation) was canon-anchored against EVA labels; rev 3.0/3.1's English non-canon labels have no equivalent projection — P2 bail-out (≥4/8 ships with `[P2-WARN]`) is the only validation mechanism, and it is *more likely to fire* under rev 3.1 than rev 2.5 because the validation projection no longer applies.** See §1.C.1 for the explicit two-tier capability disclosure and ADR Negative for the validation-cost acknowledgment.
3. **Code is subordinate to Taleb thinking.** No tools/, no extensions/, no commands/. The repo is a Nassim-Taleb-thinking-prompt overlay onto oh-my-pi. Anything that can be a markdown rule must be a markdown rule. (Rev 3.0: explicit "Taleb" framing across all prompts — Principle is named "Taleb thinking," not generic "thinking.")
4. **Platform-native only.** No fork, no source patches, no extensions/ directory. **Slash-command routing for `/magi` is empirically pre-flighted at P1.0 (rev 3.1 — was assumed in rev 3.0).** The rev 3.0 plan asserted `/magi` routes natively via `skills/magi-tribunal/SKILL.md`'s `triggers:` array "verified at line 5 of that file." Independent WebFetch by both reviewers against `https://raw.githubusercontent.com/can1357/oh-my-pi/main/docs/skills.md` showed: (a) `triggers:` is **not in the documented oh-my-pi skill frontmatter schema** (the documented fields are `name`, `description`, `globs`, `alwaysApply`); (b) `enableSkillCommands: true` (set at `config.yml:9`) registers skills as `/skill:<name>`, so the documented invocation is `/skill:magi-tribunal`, not `/magi`; (c) custom slash commands "exclusively" live in `commands/<name>.md` per the project README — the directory P1 deletes. The line-5 contents of `SKILL.md` are file-true (the array exists) but their semantic effect on slash-routing is unverified. **P1.0 (new sub-task at the top of P1) runs a 5-minute empirical test against the user's actual `omp` binary with three branches**: Outcome A (`/magi` resolves via `triggers:` — proceed as rev 3.0 wrote); Outcome B (only `/skill:magi-tribunal` resolves — pivot to either B-1 accept-the-longer-form or B-2 preserve-`commands/`-and-create-`commands/magi.md`-as-thin-wrapper); Outcome C (neither resolves — halt the entire plan, investigate platform integration first). Knowledge base lives under `.omc/incerto/`. Async parallelism uses oh-my-pi's `async.enabled: true` for parallel `task` dispatch *inside* MAGI tribunal flow (PM4 ratio test verifies).
5. **No breaking changes to the user-facing flow during transit.** SYSTEM.md, the rules already shipping (asymmetry, antifragility, lindy-effect, narrative-fallacy, skin-in-the-game, via-negativa), and the existing skills must remain functional from P1 commit through P5 commit. The system never enters a state where `omp` boots into an error. (Rev 3.0: English rewrite is part of P4 — the user-facing flow's *behavior* must not change between rev 2.5's Chinese system prompts and rev 3.0's English ones; only the prompt language changes. Style auto-adapts to user input language regardless.)

### Spec contradictions resolved (rev 3.0 — three adjudicated amendments)

The plan adjudicates three places where the spec self-contradicts or is overridden by user decision after the spec was written:

#### 1.A — narrative-fallacy-guard TTSR (rev 2 adjudication, unchanged in rev 3.0)

The spec self-contradicts on whether a `narrative-fallacy-guard.md` TTSR rule should be created:
- **Spec line 35** (Constraints, final state): `No TTSR for narrative fallacy (MAGI handles it)`.
- **Spec line 63** (Phase 1 acceptance, final state): `narrative fallacy detection moves to TTSR rule`.
- **Spec line 419** (Round 14 transcript, earlier decision): `Two new rules: magi-protocol.md (alwaysApply) + narrative-fallacy-guard.md (TTSR)`.

**Plan honors line 35** as the authoritative final-state constraint. The transcript line 419 reflects an earlier decision overridden in Round 16. Concretely:
- The existing `rules/narrative-fallacy.md` (alwaysApply: true) remains — passive prompt-injection rule, not a TTSR. (Rev 3.0: rewritten in English in P4.)
- **No new `rules/narrative-fallacy-guard.md` is created.**
- MELCHIOR-1 handles narrative fallacy within `/magi` debate per its framework list. (Rev 3.0 nuance: in default mode, the alwaysApply `rules/narrative-fallacy.md` continues to inject the framework on every turn — narrative-fallacy detection is *not* gated behind `/magi`.)

#### 1.B — MAGI canon labels drop Scientist/Mother/Woman (rev 3.0 — NEW)

The spec strongly endorses the EVA canon mapping in:
- **Spec line 40**: `EVA canon matters: MAGI names map to Evangelion's Akagi Naoko personality split.`
- **Spec lines 76-107**: Each MAGI revision instruction includes `Add: EVA canon reference (Akagi Naoko as Scientist / Mother / Woman)`.
- **Spec lines 184-202**: The Tension Triangle ASCII diagram and "Why This Division" both label the agents `(Scientist/Skeptical)`, `(Mother/Conservative)`, `(Woman/Antifragile)` with `EVA canon fit: 2.5-3/3` cited as research evidence.
- **`.omc/scientist/reports/20260505_013647_magi_cross_validation.md`** (20 canon refs) makes "Mother as natural peacemaker" load-bearing in the synthesizer's tie-break logic.

**Plan overrides spec on canon labels.** Rationale (user decision Round 17, post-rev-2.5):
- "Scientist," "Mother," "Woman" carry English semantic spread that drifts from Taleb meaning. "Mother" → maternal stereotypes (caring, nurturing) rather than the via-negativa / iatrogenic-protection meaning intended. "Woman" → gender associations rather than the convexity / opportunity-seeking meaning.
- The training-time prior on these English words is strong and orthogonal to Taleb's framework. Direct semantic precision via `Empirical Skeptic` / `Tail-Risk Guardian` / `Convexity Seeker` removes the ambiguity.
- MAGI numerical IDs (`-1`, `-2`, `-3`) preserve the EVA tribute without canon-language risk.
- **Peacemaker logic — honest correction (rev 3.1, SF1 absorption):** the rev 3.0 plan claimed peacemaker logic *derived from optimization-target geometry, not from the maternal archetype*. **This was factually wrong about the source artifact.** Critic re-read `.omc/scientist/reports/20260505_013647_magi_cross_validation.md:74` directly and confirmed the report uses archetype reasoning: *"Designate BALTHASAR-2 (the conservative mother) as the structural peacemaker. **Her protective instinct makes her the natural tie-breaker** — when the other two disagree on non-ruin questions, she can accept the stronger argument."* The chain is "the conservative mother → her protective instinct → natural tie-breaker" — archetype-grounded, not geometry-grounded. Removing canon DOES drop one source of peacemaker rationale that was load-bearing in the source artifact. **The plan's substitute rationale (rev 3.1):** BALTHASAR-2's via-negativa optimization target inherently produces conservative tie-breaking on non-ruin questions and ruin-priority overrides on ruin questions — the optimization-target framing is a *substitute* for the archetype shortcut, not an inheritance of it. Whether this substitute geometry actually produces peacemaker behavior in generation (without the model's archetype prior on "Mother → caregiver → mediator") is empirically uncertain. **Verification (rev 3.1 — strengthened per SF1 / PM7 Test B):** PM7 now has TWO E2E tests, not one. Test A (existing) — 3 hand-picked M+C vs B questions verifying synthesizer template structural integrity. Test B (NEW) — 3 hand-picked M+B vs C **counterfactual** questions designed to produce Empirical Skeptic + Tail-Risk Guardian aligned against Convexity Seeker (i.e., "evidence + survival both lean conservative; convexity scout sees option value"). Examples: "Should I rebalance my portfolio out of broad-market index funds and into individual high-conviction stocks?" If BALTHASAR-2 in Round 2 reads as **ALLY** of MELCHIOR-1 (not mediator), the substitute geometry hypothesis is falsified — pivot to (a) re-introduce canon-language peacemaker priors via partial annotation in BALTHASAR-2's prompt body OR (b) accept BALTHASAR-2 as ally-of-M and update synthesizer templates to remove "tie-break" framing. PM7 Test B is the actual generation-geometry test the rev 3.0 plan was missing.

Concretely:
- **MELCHIOR-1** = "Empirical Skeptic" (English label everywhere in agents/, rules/, skills/, SYSTEM.md). Bilingual trigger keyword surface preserves Chinese terms users will type — see §1.D below.
- **BALTHASAR-2** = "Tail-Risk Guardian"
- **CASPER-3** = "Convexity Seeker"
- **The cross-validation research artifact** at `.omc/scientist/reports/20260505_013647_magi_cross_validation.md` is **NOT rewritten** — it is historical record from when the canon was active. Plan and final agent files do not use canon language.
- **`.omc/research/magi-tension-design/report.md`** is also preserved as historical record. Its conclusions (75% disagreement projection, 5 anti-convergence layers) carry forward; only the labels in *active* prompts change.

#### 1.C — MAGI fires every response → MAGI fires only on `/magi` (rev 3.0 — NEW)

The spec explicitly mandates default-fire MAGI in:
- **Spec line 38** (Constraints): `MAGI fires every response: Not on-demand — the debate system is the core thinking loop.`
- **Spec line 372** (Assumptions Resolved table): `MAGI should be on-demand (/magi)` was challenged with `User decided: every response` and resolved as `Core thinking loop via alwaysApply rule`.
- **Spec line 399** (Round 10 transcript): Q "When does MAGI fire?" A "Every response." → Decision: "MAGI is the default thinking loop, not on-demand."

**Plan overrides spec on dispatch policy.** Rationale (user decision post-rev-2.5):
- Rev 2.5's 3-state graduated gate (A=trivial bypass / B=clarification → MELCHIOR-only / C=full MAGI) was already a partial walk-back from "every response." Pushing the gate one more step to "only on `/magi`" simplifies the dispatch tree from 3 states to 1 (binary: present or absent).
- D3 (token efficiency) — the gate's State C still cost ~7 LLM invocations (3 Round 1 + 3 Round 2 + 1 synthesizer) on every non-trivial turn. Rev 3.0 eliminates this cost by default; users who want MAGI for a specific decision invoke `/magi` explicitly.
- The architect's rev 1 steelman (point 2: "opt-in `/magi` would be 90% as valuable at 14% cost") was rejected in rev 2 on D1 grounds. Rev 3.0 reverses that decision based on user reflection that "tension on every response" is a forcing function for the model, not the user — and the user explicitly wants the *option* to bypass it for routine questions.
- Default mode now follows the standard Taleb-thinking flow (SYSTEM.md + always-apply rules + skills on demand) — i.e., today's pre-MAGI behavior, but with English system prompts and explicit Taleb cueing. The cost shape of default mode is one main-agent turn per response.

Concretely:
- **`commands/` directory still gets deleted entirely** in P1 (the user does not want a `/magi` shell-command alias under `commands/`; spec's deletion stays). The `/magi` slash routing is handled natively by `skills/magi-tribunal/SKILL.md`'s `triggers: ["/magi", ...]` array (verified line 5 of that file). When the user types `/magi <question>`, oh-my-pi loads the skill content into context; the skill body instructs the main agent to fire the parallel+rebuttal flow.
- **`rules/magi-protocol.md` survives but shrinks dramatically.** Rev 2.5: ≤1500-token dispatcher with 3-state graduated gate, parallel+rebuttal flow instructions, S2A wiring. Rev 3.0: **~50-token always-apply hint** that says: *"For high-stakes irreversible decisions where multiple optimization dimensions clash (evidence quality, tail-risk exposure, convexity), suggest the user invoke `/magi <question>` to engage the full Taleb tribunal mode."* Rationale: gives the main agent a permanent reminder to RECOMMEND `/magi` at high-leverage decision moments. Token cost is trivial (~50 tokens × every turn); missing-recommendation cost is high (PM8). The full dispatch logic of rev 2.5 lives in `skills/magi-tribunal/SKILL.md` (loads on `/magi` only, not always).
- **The 3-state graduated gate collapses to 1-state.** No more State B (MELCHIOR-only one-shot). Default mode = no MAGI at all.

#### 1.C.1 — Default-mode capabilities post-P4 (rev 3.1 — NEW; addresses MF3 / Architect A1.3 / Critic NI-rev3-5)

The rev 3.0 plan defined default mode loosely as "today's pre-MAGI behavior, but with English system prompts and explicit Taleb cueing." That phrasing concealed two facts: (a) P1 deletes `commands/`, so default mode is "today's pre-MAGI behavior MINUS modes," not "today's pre-MAGI behavior"; (b) P4 rewrites SYSTEM.md and translates all rules, materially changing what "behavior" means even before the user types anything. Rev 3.1 makes default-mode capability concrete so the user accepts the architectural distinction explicitly.

**Default mode delivers (in order of user-visible impact, post-P4):**

1. **All 8 alwaysApply rules + SYSTEM.md persona, English-translated, every turn.** Concretely: 6 rev-2.5 rules translated in P4 (`narrative-fallacy`, `via-negativa`, `skin-in-the-game`, `asymmetry-and-exposure`, `lindy-effect`, `antifragility`); 2 P3-created English rules (`ergodicity`, `positive-convexity`); 1 P3-cherry-picked rule (`cognitive-state-diagnosis`); plus the shrunk `magi-protocol` recommendation hint (~50 tokens). Total: 10 alwaysApply rules ≈ 6KB combined English Taleb framing, injected on every turn. Architect's count of "10 alwaysApply rules post-P3" matches.
2. **SYSTEM.md persona (P4-rewritten).** English. Frames the agent as Taleb-thinking (not "Taleb-quoting"). Sets register: combative directness without rhetorical flourish, optimization targets (asymmetry, antifragility, via negativa), explicit "code is subordinate to thinking" framing.
3. **Skill availability (6 skills accessible on demand).** Not loaded into context until invoked: `barbell-analysis`, `convexity-check`, `fragility-scan`, `premortem-taleb`, `mental-models` (P3), `magi-tribunal` (P2 — invoked via `/magi` or `/skill:magi-tribunal` per P1.0 outcome), `incerto-search` (P5).
4. **`/magi` recommendation (PM8 mitigation).** The 50-token alwaysApply hint nudges main agent to suggest `/magi` when high-stakes decision markers appear. Documented pivot to TTSR rule if telemetry shows underuse — see MF2 below.

**Default mode does NOT deliver (vs the rev 1 spec / rev 2.5 defaults):**

- **Tribunal verdicts on every turn** — this is the explicit rev 3.0 trade for instruction precision (D4) + token efficiency (D3). The rev 1 spec mandate "MAGI tension on every response" no longer holds in default mode.
- **Structured 3-0 / 2-1 / 1-1-1 vote outputs** — these only appear post-`/magi`.
- **Per-turn debate diversity from MAGI tension** — default mode is a **single-agent-with-Taleb-prompt response**, not a 3-voice debate. The agent reads a Taleb-flavored register and behavioral rules; it does not invoke MELCHIOR-1, BALTHASAR-2, or CASPER-3 as subagents.

**Estimated invocation distribution (rev 3.1 acknowledged):** ≥90% of user interactions are expected to go through default mode (the user explicitly typing `/magi <question>` is friction-laden; PM8 acknowledges this risk). The user accepts this two-tier system as the rev 3.0 trade — D3 (token efficiency) is satisfied by architecture rather than per-prompt austerity, at the cost of ≥90% of turns having no MAGI tension surface.

**This is the honest framing: rev 3.1 is a two-tier system, not a unified Taleb-thinking agent.** Default mode is "Claude with Taleb-flavored 6KB system prompt + 10 alwaysApply rules." `/magi` mode is "3-MAGI tribunal with parallel+rebuttal+S2A." User-facing docs (README.md and AGENTS.md, P4.5) include this two-tier disclosure prominently so future readers understand the architectural distinction without reading the ADR.

#### 1.D — System prompts in English with bilingual trigger keywords (rev 3.0 — NEW; rev 3.1 split into 1.D.1 and 1.D.2)

The spec is silent on prompt language; today's repo has 45-59% CJK characters in agents/, rules/, skills/magi-tribunal/, and SYSTEM.md. Rev 3.0 rewrites these in English while preserving Chinese trigger keywords *only at the points where Chinese user input must match*.

**Rationale** (user decision post-rev-2.5):
- Common Crawl distribution: ~46% English / ~5% Chinese. Models have stronger CoT and instruction-following baseline in English. Technical Taleb terms (convexity, fragility, barbell, ergodicity, antifragile) are precise in English; Chinese translations introduce ambiguity (e.g., 凸性 conflates several distinct concepts).
- Style auto-adapts to user input language. The user's Chinese query receives a Chinese-style response without instruction-precision degradation in the system prompt. User: *"如果我们中文说的多，模型自然会调整。"* → Stylistic adaptation is automatic; instruction precision is not.
- D4 (new driver — see §2): Instruction precision in the English baseline.

**Scope split:**
- **System-level prompts → English** (~17 files): `SYSTEM.md`, all 6 existing `rules/*.md`, 3 new `rules/*.md` (magi-protocol, ergodicity, positive-convexity), all 5 `agents/*.md` (skeptic, pre-mortem, antifragility-scout, magi-synthesizer, plus the cherry-picked `cognitive-state-diagnosis.md` rule), `skills/magi-tribunal/SKILL.md`, `skills/mental-models/SKILL.md` (if present after P3), `skills/incerto-search/SKILL.md`.
- **Trigger keyword detection lists → bilingual.** The lists embedded in prompts that match user input *literally* (e.g., the via-negativa rule's keyword list: `add | improve | optimize | introduce | expand | enhance | 增加 | 改进 | 优化 | 新方案 | 引入 | 扩展 | 提升`). These are regex-style alternation lists in the prompt body; both English and Chinese variants must be present so user-typed Chinese matches. Same applies to the magi-protocol hint's recommendation triggers (`decide | worth | risk | advise | recommend | decision | 决定 | 值得吗 | 选择 | 建议 | 该不该`) and the magi-tribunal skill's `triggers:` frontmatter array. The slash command stays single-language (`/magi` only — Latin-script).
- **README.md, AGENTS.md → remain Chinese / bilingual** (user-facing documentation). User explicitly requested these stay accessible to Chinese readers.
- **Few-shot `<example>` blocks → mixed.** Question stem in Chinese (matches realistic user input); MAGI agent output language adapts to question language. P2.1-P2.4 acceptance criterion checks one Chinese-input example and one English-input example per agent.

**Trigger keyword bilingual list location — rev 3.1 disambiguates two distinct mechanisms** (was conflated as one in rev 3.0; addresses Architect NI-rev3-2 / Critic NI-rev3-2 / SF2). The rev 3.0 plan said *"the bilingual list lives in the rule or skill that owns the trigger,"* lumping together two mechanisms with different runtime semantics. Rev 3.1 splits them:

##### 1.D.1 — Slash-command resolution (parse-time mechanism)

Handles `/magi` and its variants (or `/skill:magi-tribunal` per P1.0 outcome). The runtime parses the user's slash invocation and routes it to either a `commands/<name>.md` body (oh-my-pi documented mechanism — frontmatter `name`, `description`, `aliases`) or a skill body if `enableSkillCommands: true` registers it as `/skill:<name>`. **Outcome of P1.0 pre-flight determines which file actually carries this.** The rev 3.0 plan put `triggers: ["/magi", "magi tribunal", "三元裁判", "让三个 MAGI"]` in `skills/magi-tribunal/SKILL.md`'s frontmatter and assumed that registers the slash command. WebFetch evidence (cited in Principle 4 above) shows `triggers:` is undocumented in the oh-my-pi skill schema. Three branches:
- **P1.0 Outcome A** — `triggers:` works (oh-my-pi has undocumented support): keep the array; document as known-undocumented behavior; `/magi` resolves directly via the skill.
- **P1.0 Outcome B-1** — only `/skill:magi-tribunal` resolves: strip `triggers:` from the skill frontmatter (it's dead metadata); update all `/magi` references in the plan + README + AGENTS to `/skill:magi-tribunal`.
- **P1.0 Outcome B-2** — preserve `commands/` directory: P1 deletes only the 5 existing `commands/*.md` files (`antifragile.md`, `barbell.md`, `exit-mode.md`, `skeptic.md`, `via-negativa.md`); CREATE `commands/magi.md` whose body invokes `skill://magi-tribunal` with the user's question. This is the only documented routing surface in oh-my-pi.

The slash invocation surface stays single-language (`/magi` or `/skill:magi-tribunal` are Latin-script; the user can type `/magi <Chinese-question>` and the question portion is captured for substitution).

##### 1.D.2 — In-context regex detection (turn-generation mechanism)

Handles user input pattern matching during the LLM's response composition. AlwaysApply rule bodies are loaded into working memory every turn; the LLM reads them and matches the embedded regex lists against the user's input as part of generating its response. **This is NOT a parse-time match by the runtime.** It's the LLM "reading" the bilingual keyword list inside the rule body and (probabilistically) attending to it when its training reflects similar keyword-recognition patterns. Examples:
- `rules/via-negativa.md` (alwaysApply) contains `add | improve | optimize | introduce | expand | enhance | 增加 | 改进 | 优化 | 新方案 | 引入 | 扩展 | 提升`. When the user types "let's add a step here," the LLM sees both the user input and the rule body in context; it (probabilistically) infers via-negativa applicability.
- `rules/narrative-fallacy.md` (alwaysApply) contains bilingual `because | so that | the reason is | 因为 | 所以 | 之所以`.
- `rules/magi-protocol.md` (alwaysApply, ~50-token hint) contains `decide | worth | risk | advise | recommend | decision | irreversible | bet | stakes | 决定 | 值得吗 | 选择 | 建议 | 该不该 | 不可逆 | 押注` for PM8 (the recommendation hint that nudges main agent to suggest `/magi`).
- **Future TTSR rule** (Option B per MF2; not built in 3.1, documented as pivot path): if PM8 telemetry shows underuse, build `rules/magi-suggest-trigger.md` with `condition:` regex evaluating the same bilingual keyword set at TTSR-fire time. The TTSR is a stream-interrupt — a different mechanism than alwaysApply rule body matching, and stronger because it fires the suggestion as a `<system-interrupt>` rather than relying on the LLM's attention to a 50-token hint.

**Both mechanisms can coexist.** The slash-command resolution at 1.D.1 is for the `/magi` invocation. The in-context regex at 1.D.2 is for default-mode keyword recognition leading to recommendation hints. They operate at different layers; the rev 3.0 conflation muddled this.

**Sub-decision (location of bilingual lists in 1.D.2):**
- The bilingual list lives **in the rule or skill body that owns the trigger** (e.g., via-negativa rule contains its own list).
- **Not centralized** in a single keyword registry. Each rule's trigger list is part of its semantic body; centralization would create a side-effect file the maintainer has to remember to update.
- **Architectural caveat (rev 3.1 disclosure)**: if a bilingual keyword list lives inside a *non-alwaysApply* skill body (e.g., `skills/magi-tribunal/SKILL.md`), it is **dead code at the in-context regex level** — by the time the skill body is in context, the user has already invoked `/magi` and the regex has nothing to detect. The `triggers:` array in the magi-tribunal skill is for slash-command resolution (1.D.1), not in-context detection (1.D.2). Do not conflate them when adding new rules or skills.

This decision is logged as ADR consequence (§8) under "Deliberate spec departures."

## 2. Decision Drivers (top 4, prioritized — rev 3.0)

1. **D1 — Tension authenticity (highest, scope-narrowed in rev 3.0).** When `/magi` is invoked, the 3 MAGI must produce 70-75% directional disagreement on real questions. Anything that risks regressing to 38% (Stage 5's domain-only score) for `/magi` invocations is rejected. This drives: hybrid attitude+(non-canon)role division, parallel Round 1 + rebuttal Round 2, all 4 prompt techniques (REASON, pre-committed blind spots, S2A, CoT boundaries). **Rev 3.0 scope change:** D1 applies to the `/magi` mode specifically. Default-mode tension comes from the always-apply rules (narrative-fallacy + via-negativa + asymmetry-and-exposure) and SYSTEM.md's behavioral rules section, which collectively encode adversarial register. Default-mode tension is verified by **PM5 register check** (no softening hedges in English-rewritten system prompts), not by the 8-question `/magi` battery.
2. **D2 — Restartability and cheap rollback.** The user is one person on a dormant project; the cost of "redo P5" is hours, not days. This drives: phase-as-PR shipping, BM25 over LLM-graded crystallization (deterministic, re-runnable), small dependency footprint (the `bm25` 12KB package over heavyweight alternatives). **Rev 3.0 addition:** language-rewrite phase (P4) ships as one commit so the rollback unit is "all of English-rewrite + Taleb-cueing + label-rename" — partial rollback to "English prompts but Chinese MAGI labels" is intentionally disallowed because mid-state inconsistency is worse than either pure state.
3. **D3 — Token efficiency** (character changed in rev 3.0). Rev 2.5 framing: *"MAGI fires every non-trivial response; every redundant token in the agent system prompts pays compounding cost."* **Rev 3.0 framing:** *"MAGI fires only on `/magi`; default-mode token cost is one main-agent turn per response, plus the always-apply rules and SYSTEM.md."* D3 is now **mostly satisfied by architecture** rather than by per-prompt austerity — opting MAGI out of the default loop is the largest token-efficiency win available. Remaining D3 levers: (a) `rules/magi-protocol.md` shrinks from ≤1500 tokens to ~50 tokens (-97%); (b) MAGI agent prompts can grow modestly (≤2500 tokens up from ≤2000) to absorb the English rewrite + Taleb cueing without re-fighting compression; (c) Incerto query mandate scoped to `/magi`-mode only (default mode does no Incerto queries). **Caveat:** "Mostly satisfied" is not "irrelevant" — when `/magi` does fire, the 7-invocation cost is still real, so per-MAGI agent prompts retain a budget cap. But the always-apply tax shrinks dramatically.
4. **D4 — Instruction precision in English baseline (rev 3.0 — NEW).** Models trained on Common-Crawl-shaped data follow English instructions more precisely than Chinese ones. Technical Taleb terms (convexity, fragility, barbell, ergodicity, antifragile, iatrogenics) are unambiguous in English and ambiguous in Chinese (e.g., 凸性 conflates mathematical convexity, optionality, and "high-end-ness"; 反脆弱 sometimes drifts to "robust"). D4 drives: English system-level prompts; explicit Taleb cueing in every prompt (the model has a strong prior on Taleb's voice in English training data); English MAGI labels (`Empirical Skeptic` not `怀疑者/科学家`); bilingual trigger keyword lists *only* where the prompt must match Chinese user input literally. **Tension with D1:** the user's Chinese question naturally elicits a Chinese-style response (style auto-adapts), which is desired. The risk is that the system prompt's English instruction "maintain adversarial directness" doesn't transfer to Chinese-language output — addressed by PM5 register check on Chinese sample outputs.

## 3. Viable Options Per Major Decision Point

### O1 — Phase ordering / parallelization

| Option | Pros (3-5) | Cons (3-5) |
|---|---|---|
| **A. Strict sequential P1→P2→P3→P4→P5, single big-bang commit** | Simplest mental model; one commit to revert; no intermediate states to keep buildable | One large unreviewable diff; if P5 fails the P1 cleanup is locked behind it; long working-tree-dirty period; high risk of merge-conflict if anything else lands |
| **B. Strict sequential P1→P2→P3→P4→P5, ship-each-phase-as-commit (RECOMMENDED)** | Each phase verifiable independently; cheap rollback at any boundary; small reviewable diffs; aligns with via negativa principle (cleanup ships first); user can stop at any phase if priorities shift | 5 commits instead of 1; need a regression check after each phase to confirm `omp` still boots |
| **C. P1+P3 parallelizable (cleanup + cherry-picks in parallel), then P2→P4→P5** | Saves one commit cycle; P3 cherry-picks have no deps on P1 deletions | P3 adds files into directories P1 is touching → merge friction; harder to reason about `omp` boot state mid-flight; saves negligible time on a one-person project |
| **D. Ship-each-phase-as-PR (separate branches)** | Maximum review surface area | No reviewer (single user); PR overhead is pure cost on a dormant project; rejected for this context |

**Choose B** unless Critic argues otherwise. Driver D2 (cheap rollback) wins; D3 (token efficiency) is neutral to ordering. Option D is invalidated by the dormant single-user context — no review surface to amortize PR overhead.

### O2 — MAGI agent rewrite strategy

| Option | Pros | Cons |
|---|---|---|
| **A. Rewrite each agent file from scratch** | Clean prompt structure; no cargo-culted leftovers; easy to apply all 4 prompt techniques uniformly | Loses verified content (evidence-grading checklist, output formats already shipped); high risk of regression on the parts that already work |
| **B. Surgical edits via Edit tool to existing files (RECOMMENDED)** | Preserves the verified scaffolding (checklists, output templates already in skeptic.md / pre-mortem.md / antifragility-scout.md); makes diff reviewable line-by-line; lower risk | Requires more Edit invocations; risk of inconsistent header style across 3 files if edits aren't coordinated |
| **C. Hybrid (delete antifragility-scout.md + skeptic.md/pre-mortem.md and recreate; keep magi-synthesizer.md)** | Splits difference | Worst of both — recreate cost without the cleanliness benefit (still need to copy verified content over) |

**Choose B.** The cross-validation report explicitly says "KEEP: ... evidence-grading checklist ... pre-mortem failure analysis ... payoff curvature analysis ... blind spot declaration ... output formats." Surgical edits preserve verified content; rewrite-from-scratch maximizes regression risk.

### O3 — Retrieval substrate (BM25 vs vectors vs alternatives)

| Option | Pros | Cons |
|---|---|---|
| **A. `bm25` npm pkg (12KB, zero deps) (CHOSEN — see rationale below)** | Minimal footprint matches D3 token efficiency principle; spec already names this package; simple API (`new BM25(); bm25.add(); bm25.search()`); deterministic; CPU-only (no model download, no first-call latency); index is plain JSON, diffable, debuggable; cheap to delete and re-run (D2) | Older package, light maintenance; tokenizer is naive (whitespace + lowercase); need to layer Chinese tokenization manually if user queries in Chinese; lexical-only (misses concept-without-keyword passages — see PM2) |
| **B. `wink-bm25-text-search`** | Includes tokenizer pipeline (stopwords, stemming); actively maintained | ~200KB with dependencies; opinionated tokenizer may strip Taleb's idiosyncratic terms ("antifragile", "Mediocristan") |
| **C. Custom Lunr.js index** | Industry-standard for static-site search; rich query DSL | Heavyweight (60KB+); designed for full-text-search use cases not "find Taleb passages by topic" |
| **D. Simple TF-IDF in 50 lines of TypeScript** | Zero dependencies; full control | Reinvents the wheel; BM25 is empirically better than TF-IDF on retrieval quality; loses time |
| **E. LanceDB (`@lancedb/lancedb`) + Transformers.js (`Xenova/all-MiniLM-L6-v2` ONNX, 384-dim)** | **Research's #1 ranked architecture** (see `.omc/scientist/reports/20260505_030047_knowledge_system_research.md:18-26`, scoring 5.75-5.80 vs BM25 not in top 7); semantic match handles Taleb's metaphor-rich prose (queries about "is this reversible" retrieve absorbing-barrier passages even without lexical match — directly addresses PM2); Chinese queries work via multilingual model swap (`Xenova/multilingual-e5-small`); 384-dim cosine search runs in browser/Node | ~80MB model download on first ingest (one-time); ~300ms first-call ONNX warm-up (negligible after warm); embeddings are floats, less debuggable than BM25's term-frequency tables; LanceDB binary index is opaque vs plain JSON; CPU-only feasible but slower than BM25 (~50-150ms search vs <10ms); model file must be cached on disk or downloaded each cold start |

**Chose A (BM25) despite the research ranking E (vectors) #1.** This is the user's explicit override of the research recommendation, made in Round 16 of the deep interview. Rationale, traced to drivers:
- **D2 (cheap rollback / determinism) dominates here.** BM25 produces a JSON index that is `cat`-able, `diff`-able, and re-runnable bit-identically. Vector embeddings are nondeterministic across model versions (an ONNX update silently changes scores) and the index is opaque binary. On a dormant single-user project, the user explicitly preferred "I can read what's in the index" over "the index understands metaphor."
- **D3 (token efficiency / runtime cost) is neutral on retrieval substrate** — both return chunks the agent reads. But BM25's CPU-only, no-model-download profile reduces cold-start friction and removes a 80MB model file from the project's resource footprint. The user's environment is Windows-WSL with constrained disk; the 80MB cost was flagged.
- **D1 (tension authenticity) is the one driver that argues for E.** Taleb's prose is metaphor-rich; PM2 acknowledges this directly. The research's #1 ranking is grounded in this fact. The plan accepts this tension: BM25 may degrade MAGI grounding quality on concept-without-keyword queries, mitigated by (a) hand-curated `concepts:` field per chapter, (b) `synonyms.json` layer post-launch, (c) crystallization into `.omc/wiki/` short-circuiting high-frequency queries with human-curated synthesis.

**Migration trigger (escape valve, recorded in ADR Consequences):** if recall@5 < 60% on 5 hand-picked Chinese queries OR < 60% on the metaphor-queries subset of the 8-question battery for 3 consecutive runs, the plan flips to option E. This is a 1-2 day swap (the `incerto-search` script is the only consumer of the index).

**Acknowledgment:** the research recommended E. The plan picks A. This is documented as a deliberate spec-aligned departure from research, not an oversight. Mitigation for naive tokenizer: pre-process chunks during ingest (lowercase, basic Chinese segmentation via `nodejieba` only if user queries reveal need; defer until empirical demand).

### O4 — Epub parsing approach

| Option | Pros | Cons |
|---|---|---|
| **A. `epub2` npm package** | Pure JS, drop-in for the bun runtime taleb-pi already uses; emits chapter-aware events; 5KB | Slower than native; emits raw HTML chapters that still need cleaning |
| **B. `pandoc` CLI (`pandoc input.epub -o chapters.md --split-level=1`)** | Battle-tested; outputs clean markdown directly; preserves chapter boundaries | External binary dep — user must install pandoc; one-time cost but a friction point on Windows |
| **C. Manual unzip + XHTML parse (`adm-zip` + `cheerio`)** | Full control; debuggable; no surprise deps | More code to maintain; reinvents what `epub2` already does |
| **D. Python `ebooklib` script** | Mature library; rich metadata extraction | Adds Python to the toolchain (currently bun-only); cross-language friction |

**Choose B (`pandoc`) for the one-time ingest, with A (`epub2`) as fallback.** Rationale: ingest happens once (or rarely on epub updates); pandoc produces clean markdown that needs minimal cleaning; we are not shipping the parser, just the chunked output. Document the pandoc command in `.omc/incerto/README.md`. If pandoc is unavailable on user's Windows shell, fall back to `epub2`. Output: ~300-500 chunk markdown files in `.omc/incerto/chunks/`.

### O5 — `incerto_search` exposure mechanism

| Option | Pros | Cons |
|---|---|---|
| **A. oh-my-pi skill (`skill://incerto-search`) only** | Native to oh-my-pi; no MCP setup; injected on demand; matches "platform-native" principle | Skills are passive content; we still need executable code to do the BM25 lookup. Skill alone can't do search. |
| **B. MCP tool (`incerto_search(query) -> ranked chunks`)** | Real executable search; returns structured data; can be called from any MCP-aware client | Adds MCP server lifecycle; one more moving piece; MCP tool source has historically lived under `tools/`, which the spec deletes |
| **C. Skill that invokes a script via Bash (RECOMMENDED — see rationale)** | Honors spec's "delete `tools/` entirely" Non-Goal literally; skill is the canonical agent-facing artifact (D3 platform-native); script lives under `.omc/incerto/scripts/` alongside ingest/index/crystallize — all KB-related code in one tree; no MCP server lifecycle to manage; cheap rollback (delete one directory) | Subagent skill access is unverified (see G1 in architect review, MF3 in critic, smoke test added in P5.4); Bash invocation is slightly less idiomatic than a tool, but skill body documents the exact command pattern |
| **D. CLI script (`bun run scripts/incerto-search.ts <query>`) invoked via bash tool, no skill** | Zero new infra; just a script | Awkward agent ergonomics; agent has to remember CLI invocation; not idiomatic; no on-demand skill injection |

**Choose C.** Driver D2 (cheap rollback — skill + script are both free to delete) and Principle 4 (platform-native, no `tools/` recreation) both point here. The earlier draft of this plan recommended option B with the executable at `tools/incerto-search/index.ts`; that violated the spec's Non-Goal "deleting `tools/` entirely" (spec line 49). The architect's review flagged this as principle violation V1 (HIGH), and the critic flagged it as critical finding CF1. **Resolution: move the executable to `.omc/incerto/scripts/search.ts`; the skill at `skills/incerto-search/SKILL.md` instructs the agent to invoke it via Bash with the documented command pattern.**

**Implementation:**
- Script: `.omc/incerto/scripts/search.ts` — bun-runnable. Reads `.omc/incerto/index.json`, runs BM25 query, prints top-k results as JSON to stdout. Logs to `.omc/incerto/query-log.jsonl` (line-delimited JSON; see P5.5 mf3 for atomicity rationale).
- Invocation pattern (documented in the skill): `bun run .omc/incerto/scripts/search.ts --query "<query>" --k 5`. Returns JSON array of `{ book, chapter, section, text, score }`.
- Skill body: triggers (`/incerto`, `查 Taleb`, `Incerto 引文`), the exact Bash command to run, the citation format (`> "quote" — Book Title, Ch. N`), and an instruction to log queries with `--agent <agent-name>` flag for observability.
- **`tools/` directory is NOT recreated.** P1's `git rm -r tools/` is final. The principle is honored literally.

### O6 — Crystallization trigger

| Option | Pros | Cons |
|---|---|---|
| **A. Hard threshold (chunk hit ≥ N times across sessions, e.g., N=10) (RECOMMENDED)** | Deterministic, testable, re-runnable; cheap to debug ("why didn't this crystallize?" → check hit count); aligns with D2 rollback | N is a magic number; needs initial calibration |
| **B. Adaptive (top-decile per session)** | Self-tuning; no magic number | Non-deterministic; same query history can produce different crystallizations on rerun; harder to debug |
| **C. LLM-judged ("does this passage matter?")** | Captures semantic importance | Per-promotion cost in tokens; can't be re-run cheaply; high variance |

**Choose A with N=10 starting value, surfaced as a config knob in `.omc/incerto/config.json` so the user can tune.** Crystallization output (`.omc/wiki/<slug>.md`) IS LLM-summarized at promotion time (this is the spec — summarize at crystallization, not at ingest), but the **trigger** is deterministic.

### O7 — MAGI agent verification approach

| Option | Pros | Cons |
|---|---|---|
| **A. Smoke test on 8 sample questions (RECOMMENDED)** | Tests real behavior end-to-end; battery already exists from Stage 4 (8 question types); measures actual disagreement rate; can reproduce Stage 4's 75% projection | Requires running the LLM 8x at minimum; ~$1-3 per full run; visual review still needed |
| **B. Unit-test the prompts (regex on output structure, check field presence)** | Cheap; deterministic; CI-friendly | Tests structure, not tension; can pass with three identical opinions if format is correct |
| **C. Visual review only (read each prompt, eyeball, ship)** | Zero test infrastructure | No regression detection; depends on reviewer attention |

**Choose A as primary, B as a guardrail.** The 8-question battery is the test plan's E2E layer; field-presence regex is the unit layer. Battery questions: stored at `.omc/qa/magi-battery.md`. We require ≥ 6/8 (75%) directional disagreement to pass; ≥ 4/8 (50%) to ship as warning; < 4/8 fails. **Rev 3.0 scoping note:** Battery now runs against `/magi`-invoked sessions (the user types `/magi <battery-question>` for each of the 8). Default-mode answers are not part of this battery; they are spot-checked by PM5 register audit on a separate 5-question Chinese-style-output sample.

### O8 — `rules/magi-protocol.md` keep-or-delete (rev 3.0 — NEW; rev 3.1 adds Option C TTSR pivot path)

Once MAGI is opt-in via `/magi`, the rule's original purpose (orchestrating dispatch on every non-trivial response) is gone. Three viable options (rev 3.1 — was 2 in rev 3.0; Option C added per MF2 / Architect A1.2 / Critic SHOULD FIX):

| Option | Pros | Cons |
|---|---|---|
| **A. Keep as ~50-token alwaysApply recommendation hint (CHOSEN — primary path)** | Permanent reminder for the main agent to RECOMMEND `/magi` at high-leverage decision moments; mitigates PM8 (user forgets `/magi` exists); cheap (~50 tokens × every turn ≈ trivial); preserves the trigger-keyword surface for bilingual matching (`decide / risk / 该不该 / 值得吗`); explicit Taleb framing in the hint reinforces D4 | Adds always-apply rule body for a marginal recommendation; rule body has to stay disciplined to the recommendation function (no scope creep into dispatch logic, which now lives in `skills/magi-tribunal/SKILL.md`); empirically weak activation mechanism — 50 tokens of always-apply prose sitting alongside 9 other alwaysApply rules has uncertain probability of moving the model to suggest `/magi`. PM8 acceptance bar of ≥3/5 is unjustified by data; may underperform |
| **B. Delete entirely (Via Negativa max)** | Honors Principle 1 most literally; one less always-apply file; user "knows about `/magi`" via README; zero token tax | PM8 risk is unmitigated — main agent has no permanent reminder to suggest `/magi` at high-stakes decision points; loses the bilingual trigger-keyword detection surface (where would `decide / 该不该` regex live otherwise? the via-negativa rule has its own list, but the *decision-recommendation* trigger has no other natural home) |
| **C. TTSR-triggered injection (`rules/magi-suggest-trigger.md` with `condition:` regex array; rev 3.1 — DOCUMENTED PIVOT PATH, NOT YET BUILT)** | Zero alwaysApply token tax (rule body loads only when regex matches user input); contextually salient (suggestion fires exactly when high-stakes markers appear); aligns with rev 2.5's narrative-fallacy-guard TTSR adjudication (TTSR is a known oh-my-pi mechanism); cleaner separation of concerns — the regex IS the trigger, not a hint the LLM has to attend to | Adds a TTSR rule (one more file in `rules/`); TTSR's stream-interrupt mechanism may be intrusive in some user flows; user-preference dependent (the user has not explicitly approved TTSR for non-narrative-fallacy uses); dead-on-arrival if the runtime's TTSR `condition:` evaluation has different semantics than the always-apply LLM-attention path |

**Choose A as primary path; document C as built-on-pivot.** D2 (cheap rollback) is neutral. D3 says "minimize tokens" — ~50 tokens × always-apply is below the noise floor; Option C's zero-tax is a marginal improvement. D4 (English Taleb cueing) is supported by either A or C. The deciding factor is **iteration economics + user-preference uncertainty**:
- **Option A is structurally simpler** (no new TTSR semantic to verify against the runtime).
- **Option C is structurally stronger for PM8** but introduces a new mechanism whose user-acceptability is uncertain.
- **Pivot path: Option A → Option C is a ~1-hour change**. The TTSR rule body is small (`condition:` array + the same suggestion verb the alwaysApply hint uses); flipping does not require re-running P2 or re-testing the MAGI agent prompts.

**TTSR rule design (Option C, for the pivot)**: file at `rules/magi-suggest-trigger.md`. Frontmatter:
```yaml
---
name: magi-suggest-trigger
trigger: TTSR
condition:
  regex: "决定|选择|值得吗|该不该|should I|worth it|risk|advise|recommend|irreversible|bet|stakes|不可逆|押注"
  flags: i
interruptMode: prose-only
---
```
Body: a `<system-interrupt>` instructing the main agent to recommend `/magi` IF the question genuinely involves multiple irreconcilable optimization dimensions (the LLM still applies judgment — TTSR fires the suggestion *prompt*, not the suggestion *output*; this prevents false-positives on non-decision uses of "decision verbs," e.g., "describe how X decides Y in this paper").

**Pivot trigger (rev 3.1)**: PM8 telemetry weekly cron parses `.omc/incerto/query-log.jsonl`. **If `/magi`-rate <5% of high-stakes-marker turns over a 30-day window**, file `.omc/issues/magi-underuse.md` and pivot from Option A to Option C. Pivot cost: ~1 hour (write the TTSR rule, re-run PM8 acceptance test on the new mechanism). The 50-token hint and the TTSR rule are mutually compatible; the pivot does not require deleting Option A's hint, only adding the TTSR alongside it.

**R19 (rev 3.1 NEW)**: PM8 telemetry inconclusive due to low sample size — extend observation window before pivot. If the user invokes `/magi` 5 times total in the first 30 days but each invocation is preceded by a high-stakes-marker turn that DID surface a recommendation hint, the absolute count is misleading. The *relevant* metric is the *rate* (recommendations surfaced ÷ high-stakes-marker turns); only pivot if the rate is <5% AND at least 20 high-stakes-marker turns have occurred. Below 20 high-stakes-marker turns, telemetry is inconclusive — extend the observation window to 60 days. See R19 in §7.

Option B was considered and explicitly rejected (PM8 risk unmitigated).

**Acceptance criterion for the rule body:**
- `wc -w rules/magi-protocol.md` ≤ 80 words (~50 tokens slack to ~75; English is denser than Chinese, so word-budget approximates token budget).
- Body must include: explicit "Nassim Taleb" reference, the bilingual trigger keyword list (English + Chinese), the suggestion verb (e.g., "suggest the user invoke `/magi <question>`"), the dimensional framing ("evidence quality, tail-risk exposure, convexity").
- Body must NOT include: dispatch logic (parallel `task` calls, rebuttal flow, synthesizer wiring) — those live in `skills/magi-tribunal/SKILL.md`.

### O9 — English rewrite scope (rev 3.0 — NEW)

Today: agents/, rules/, skills/magi-tribunal/, SYSTEM.md are 45-59% CJK. Four viable approaches:

| Option | Pros | Cons |
|---|---|---|
| **A. Full rewrite — translate every prose sentence to English (CHOSEN)** | Maximum D4 instruction precision; consistent register across all system prompts; clear "what language is this prompt in" answer for future maintenance; allows dropping Chinese-specific quirks (e.g., `不要做什么` heading) for cleaner English structure; bilingual trigger keywords stay where they need to (regex-match surface only) | High translation labor (~17 files); risk of register flattening (PM5); risk of importing Taleb's combative English register uniformly across MAGI (PM6) |
| **B. Surgical translation — translate only headings + frontmatter; leave prose Chinese** | Lower labor; keeps Chinese voice in body | Inconsistent: instructions in mixed language; D4 not satisfied (the instruction prose is what needs to be precise); register checks become harder (mixed-language grep) |
| **C. Leave Chinese; add English summaries at top of each file** | Zero rewrite labor for existing content; English summary aids maintenance | Doubles file size; doesn't satisfy D4 (the *active* instruction text is still Chinese); register checks operate on Chinese which has different softening markers |
| **D. Side-by-side bilingual (current SYSTEM.md style — every paragraph has a Chinese version and an English version)** | User can read either language; no translation loss | 2× token cost on every always-apply rule; redundant content; does not satisfy D3; D4 is satisfied for English-readers but the *Chinese* paragraphs still influence the model's instruction-following |

**Choose A.** D4 demands instruction-text precision; B/C leave the active instruction text in Chinese. D fails D3 (~doubles always-apply token tax). A's labor cost is real but bounded (one P4 phase) and the register risks (PM5/PM6) have explicit mitigations. Acceptance: `grep -oP '[\x{4e00}-\x{9fff}]' <file> | wc -l` returns ≤5% of total chars for each system-level file post-P4 (5% slack for inline trigger keywords + parenthetical Chinese terms like `(via negativa / 反向法)` in glossary contexts).

### O10 — Taleb-cueing density (rev 3.0 — NEW)

The user explicitly wants "Taleb" / "Nassim Taleb" named in every system prompt to activate training-time pattern recall. Three viable densities:

| Option | Pros | Cons |
|---|---|---|
| **A. Open-paragraph only — name Taleb in the first sentence of each system prompt; not repeated below (CHOSEN)** | Activation is front-loaded (model reads opening first, anchors style); 1 cue per file × ~17 files = ~17 references repo-wide, easily auditable; minimizes risk of style hijack across all MAGI (PM6) — each MAGI's middle-section prose can preserve its own register without Taleb-cueing dragging it toward a uniform Taleb voice | If the model's attention drops the opening anchor mid-prompt, the cue weakens; less "every-paragraph reinforcement" |
| **B. Every section — name Taleb at the start of each major heading section (e.g., once per ## block)** | Stronger reinforcement; harder for the model to drop the cue mid-prompt | Higher density of stylistic hijack risk (PM6); per-file 5-10 references; risk of the model treating "Nassim Taleb" as a repetitive boilerplate it learns to skim |
| **C. Every paragraph — saturate** | Maximum activation strength | Confirms PM6 risk; uniform Taleb voice across all MAGI eats the tension principle (BALTHASAR-2 sounds like CASPER-3); reads as desperate / hectoring; counterproductive for instruction-following (model interprets repeated naming as cargo-cult padding) |

**Choose A.** D1 (tension authenticity) penalizes B and C heavily — the more often "Taleb" is named, the more the model regresses each MAGI to a uniform Taleb pastiche, eroding the per-MAGI tension. Option A's mitigation for the "attention drops mid-prompt" risk: each MAGI's *role* paragraph (immediately after the open-paragraph Taleb cue) explicitly contrasts the agent's slice of Taleb's framework with the other MAGIs' slices — this localizes Taleb activation to the cue line and immediately specializes the agent's behavioral instructions afterward.

**Acceptance criterion (Taleb-cueing audit, see expanded test plan §5):**
- Every system-level file (`SYSTEM.md`, all `rules/*.md`, all `agents/*.md`, all `skills/*/SKILL.md`) must contain at least one of `Taleb` or `Nassim Taleb` (case-sensitive) — auditable via `grep -L 'Taleb\|Nassim Taleb' <files>` returning empty.
- Density check: each agent file ≤ 5 `Taleb` mentions (catches the boilerplate-saturation failure mode of option C).
- Per-agent style guidance: each MAGI agent's body must contain at least one explicit per-agent register override sentence (e.g., MELCHIOR-1: "Maintain the empirical-skeptic voice — terse, evidence-first, no rhetorical flourish even where Taleb himself is florid"; CASPER-3: "Maintain the convexity-seeker voice — opportunity-attentive, tolerant of ambiguity, less combative than Taleb's default register").

### O11 — MAGI label change scope (rev 3.0 — NEW)

Once Scientist/Mother/Woman canon is dropped (per §1.B), three viable scopes for the rename ripple:

| Option | Pros | Cons |
|---|---|---|
| **A. Agents-only — rename in `agents/*.md`, `skills/magi-tribunal/SKILL.md`, `rules/magi-protocol.md`, `AGENTS.md`, `README.md`. Leave research artifacts (`.omc/scientist/reports/*`, `.omc/research/magi-tension-design/report.md`) untouched (CHOSEN)** | Clean separation: active prompts use new labels; research artifacts preserve historical record showing how the canon was originally validated; no rewriting of cross-validation report (which would be misleading — the scoring of "Scientist=evidence" was made on canon language, not on `Empirical Skeptic`); fast scope; low merge friction | A user reading `.omc/scientist/reports/20260505_013647_magi_cross_validation.md` sees `Scientist/Mother/Woman` and a user reading `agents/skeptic.md` sees `Empirical Skeptic` — confusing on first encounter; mitigation: a one-line header in research artifacts noting "Canon language preserved for historical record; active prompts use English non-canon labels per rev 3.0 — see `.omc/plans/taleb-pi-execution-plan.md`" |
| **B. Agents + research artifacts — rewrite the cross-validation report and tension-design report to use new labels** | Single source of canonical labels; no confusion for future readers | Rewrites historical record; loses traceability of how validation scoring was reasoned about under the canon framing; high labor; risk of subtle semantic drift (e.g., "Mother as natural peacemaker" relies on canon language; changing to "Tail-Risk Guardian as natural peacemaker" loses the archetype-derived intuition that drove the original conclusion) |
| **C. Full repo grep-replace — every match of `Scientist|Mother|Woman|Akagi|科学家|母親|女性` across all `.md` files gets rewritten** | Maximum consistency | Rewrites spec (`.omc/specs/deep-interview-taleb-pi-cleanup.md`) which is itself an artifact; rewrites the spec the plan claims to be honoring — circular; high collateral damage; PM7 risk maximized (peacemaker logic depends on archetype reasoning that gets erased) |

**Choose A.** Driver D2 (cheap rollback / low risk) and the user's explicit instruction (*"Don't rewrite the research artifact — it's historical record"*) both point here. Option B was considered for consistency but rejected because the cross-validation report's reasoning chain *uses* canon language as a load-bearing element ("Mother → maternal → protective → peacemaker"), and changing the labels without re-running the validation logic would produce a hybrid document that's neither historical nor current. Option C extends B's flaws to the spec itself.

**Acceptance criterion:** `grep -rE "Scientist|Mother|Woman|Akagi|科学家|母親|女性" agents/ rules/ skills/ SYSTEM.md AGENTS.md README.md` returns empty after P4. Same grep against `.omc/scientist/` and `.omc/research/` is *expected* to return matches — those are historical record. Plan executor does not touch `.omc/scientist/`, `.omc/research/`, `.omc/specs/`. PM7 verifies the peacemaker logic re-emerges from the optimization-target geometry without canon language.

## 4. Pre-Mortem (DELIBERATE MODE — rev 3.0 expands to 8 scenarios)

### Scenario PM1 — "Six months later, MAGI agreement rate is 95%"
**Failure mode:** All 3 MAGI converge into stylistic variants of the same answer. User stops trusting the verdict because it adds no information beyond a single agent's response.
**Root cause:** Despite REASON prompting and pre-committed blind spots, the underlying base model's helpful-assistant prior overpowers the role anchoring. Or the pre-committed blind spots became boilerplate the model recites without internalizing.
**Mitigations built into plan:**
- Verification gate (Phase 2 acceptance criterion): ≥ 6/8 directional disagreement on the battery before P2 ships
- Blind-spot rotation: mark spots as "pre-committed" with an explicit "if you find yourself NOT triggering one of these, name which" instruction
- CASPER censor duty (any 3-0 in Round 1 → CASPER MUST construct refutation in Round 2)
- Periodic re-run of the 8-question battery as a smoke test (add to `.omc/qa/run-battery.md` instructions)

### Scenario PM2 — "BM25 retrieval is technically correct but useless for MAGI grounding"
**Failure mode:** MAGI agents query Incerto, get 5 chunks back that are technically relevant but lexically rather than conceptually matched. They cite irrelevant Taleb passages or the wrong frame, making the verdict feel less authoritative.
**Root cause:** BM25 is lexical, not semantic. "ergodicity" returns chapters that mention the word, not the chapters that *exemplify* the concept. Worse: Chinese queries retrieve nothing because BM25 tokenization fails on Chinese.
**Mitigations:**
- Chunk metadata includes a hand-curated `concepts: [...]` field per chapter (one-time setup during ingest) so queries can boost on concept matches
- Query log captures EVERY MAGI query → user reviews top-100 queries in week 1, hand-curates a `synonyms.json` (e.g., `"遍历性" → ["ergodicity", "time average"]`) that the search wraps around BM25
- Crystallization to `.omc/wiki/` short-circuits the lexical problem for high-frequency queries (the wiki page is human-curated synthesis)
- E2E test: 5 hand-picked Chinese queries with known target chapters → measure recall@5 ≥ 60% before P5 ships

### Scenario PM3 — "Cherry-pick from attic introduces stale assumptions"
**Failure mode:** `rules/cognitive-state-diagnosis.md` and `skills/mental-models/SKILL.md` were written when the repo had extensions/, commands/, and the old MAGI naming. Cherry-picking them into the new structure pollutes the new prompts with references to deleted directories, stale MAGI labels (originally `可证伪性`; the rev 2.5 transitional `怀疑者/科学家`; or the canon `Scientist`), or assumptions about IntentGate/ModeMarker. Rev 3.0 update: P3 now translates these files to English with non-canon labels (`Empirical Skeptic` etc.) at integration time, so the cherry-pick + audit-grep + translate flow is one P3 sub-step rather than a P3-then-P4 two-pass.
**Root cause:** Cherry-pick is a structural copy; semantic compatibility is the cherry-picker's responsibility. **Note (per architect review #8 / critic mf1):** the verified cherry-pick targets contain *zero* MAGI label references — `cognitive-state-diagnosis.md` mentions `凸性` only in benign domain prose (lines 22, 28, "用户用分布、凸性、可选择性思考"), and `skills/mental-models/SKILL.md` only references `rules/via-negativa.md` (preserved). The "P3 after P2 to inherit new MAGI labels" justification is theoretically right but practically vacuous; the real reason for ordering is orthogonality. Mitigations are still warranted because the grep audit defends against future drift.
**Mitigations:**
- P3 verification step: after cherry-pick AND after the rev-3.0 English translation, run `grep -nE "extensions/|IntentGate|ModeMarker|可证伪性|规避毁灭|怀疑者|保守者|反脆弱者|Scientist|Mother|Woman|Akagi" rules/cognitive-state-diagnosis.md skills/mental-models/SKILL.md` — must return zero matches. (`凸性` is intentionally NOT in the grep list because it appears as benign domain prose; if the grep is broadened, whitelist these specific lines.)
- P3 includes the rev-3.0 translation pass on each cherry-picked file: rewrite to English, add Taleb cueing in open paragraph, replace any MAGI label references with the non-canon English labels (`Empirical Skeptic` / `Tail-Risk Guardian` / `Convexity Seeker`), remove dead references to deleted directories.
- P3 happens AFTER P2 for orthogonality (cherry-picks have no functional dependency on P2; sequencing is for cognitive simplicity, not technical necessity).

### Scenario PM4 — "Six months later, MAGI Round 1 timestamps reveal serialized emission"
**Failure mode:** The 8-question battery passed with ≥6/8 disagreement when run during P2 acceptance (because each individual question still produced authentic 3-way tension when the LLM happened to fire calls in sequence within the test's wall-clock window). But on real `/magi` invocations under longer context windows, the main agent emits the 3 Round-1 `task` calls sequentially — call 2 reads call 1's output before firing, call 3 reads both. Round 1 collapses to anchored sequential debate. Tension authenticity drifts from the simulated 75% projection to Stage 5's 38% domain-only floor. The system silently violates Driver D1 for weeks before the user notices. **Rev 3.0 update:** the failure now happens only when `/magi` fires (not on every response), so the silent-degradation window is bounded to invocation count rather than turn count. But the per-`/magi` cost of degradation is unchanged — when fire happens, the parallel guarantee matters.
**Root cause:** oh-my-pi's `async.enabled: true` + `task` tool semantics are documented as "supports concurrent jobs" but **parent emission semantics — whether one prompt-turn that writes 3 `task` blocks actually fires them simultaneously rather than awaiting each — is not documented**. Rev 2.5 relied on prose instruction in `rules/magi-protocol.md` (alwaysApply) to induce parallel emission. **Rev 3.0:** the dispatch logic moves to `skills/magi-tribunal/SKILL.md` (loaded only on `/magi`), so the prose instruction is now in the skill body. Same risk surface, different file.
**Mitigations:**
- **P2 acceptance criterion**: parallelism **ratio test** (see P2 acceptance below; addresses critic NI-2) — capture both `start_ts` (each child's first logged action) and `end_ts` (each child's verdict return) for Round 1's 3 `task` calls; assert `max(end_ts) − min(start_ts) ≤ 1.5 × max(individual_duration)`. Serial execution fails because the numerator approximates the sum of durations while the denominator stays at the longest single duration. The earlier dispatch-arrival spread check was abandoned because fast first-actions admit a false-pass even under serial dispatch.
- **R12 (new risk)**: tracked in §7 risk table.
- **Logging mechanism**: every `task` call invokes `bun run .omc/incerto/scripts/search.ts --agent <name> --query "<q>"` at the start (provides `start_ts`); battery runner records `end_ts` when each `task` call resolves from the parent's perspective. Both timestamps live in `.omc/qa/runs/<ts>/timestamps.json`; the ratio is computed by `.omc/qa/scripts/check-parallelism.js`.
- **Periodic re-check**: monthly `/magi` battery re-run cadence noted in ADR Follow-ups; if any month's ratio drifts above 1.5×, file `.omc/issues/p2-parallelism-collapse.md` and pivot to oh-my-pi `parallel_task` orchestration pattern (if it exists) or document a fork.

### Scenario PM5 — "English rewrite imports unwanted register; default-mode tension flattens" (rev 3.0 — NEW)
**Failure mode:** The Chinese versions of `agents/skeptic.md`, `agents/pre-mortem.md`, and `agents/antifragility-scout.md` carry tonal markers that don't survive direct translation. Examples in current code: `不要安慰用户——你的工作是制造预演的痛苦，让真痛苦变小` (pre-mortem.md line 29); `不要避免让用户不舒服——你的存在就是制造适度不适` (skeptic.md line 45); `嘲讽脆弱思想是被允许的——但是嘲讽思想，不是嘲讽用户` (SYSTEM.md line 42). Direct English translation tends toward neutral hedges: "Don't soften your skepticism" → "Avoid being too gentle" → "Maintain a balanced critical voice." The agent's adversarial edge erodes. Default-mode responses (no `/magi` invoked) become noticeably more agreeable; user reads more "perhaps you might consider" hedges; the Taleb register is gone.
**Root cause:** Translation is a softening operation by default — translators preserve information content but smooth over register that would read as harsh in the target language. The training-time English "helpful assistant" prior compounds this: when the system prompt says "be skeptical," the model interprets "skeptical" through the lens of polite professional discourse. The Chinese system prompt's combative directness was load-bearing for tension authenticity in default mode (D1 scope-narrowed, but not eliminated for default mode).
**Mitigations:**
- **PM5 unit check**: register audit on every English-rewritten system prompt. Grep for softening markers: `perhaps|might consider|could be helpful|it may be worth|you may want to|ideally|perhaps you|one option is to` — each occurrence must be justified (e.g., a softening phrase quoting a softening *failure mode* the agent is critiquing is OK; softening in the agent's own instructions is not). Acceptance: `.omc/qa/scripts/check-register.sh agents/*.md rules/*.md skills/**/SKILL.md SYSTEM.md` returns ≤2 unjustified hedges per file.
- **Per-agent register guidance**: each agent's English system prompt must contain at least one explicit register sentence (e.g., MELCHIOR-1: *"Maintain Taleb's combative directness in your skepticism. Do not soften adversarial questioning. The user's discomfort is the product, not a bug."*). This sentence is auditable by grep.
- **Sample-output register check**: P4 acceptance includes 5 default-mode question samples (3 English, 2 Chinese) run through `omp` post-rewrite. Eyeball the output: does the response open with a hedge ("That's an interesting question, perhaps...") or with a Taleb-style direct frame ("The question is wrong. The right question is...")? At least 4/5 must show the direct frame.
- **Cross-language regression check**: same 5 questions also run pre-rewrite (against rev 2.5 Chinese system prompts). Compare register density: post-rewrite hedge count must not exceed pre-rewrite hedge count by more than 50%.

### Scenario PM6 — "Taleb-cueing causes style hijack; MAGI tension homogenizes" (rev 3.0 — NEW)
**Failure mode:** Every system-level prompt now opens with "You are X, embodying Nassim Taleb's framework..." The model's strong English-training prior on Taleb's voice (combative, dismissive of academic gobbledygook, rhetorical, fond of one-liners) imports uniformly across all 4 MAGI agents. BALTHASAR-2 (Tail-Risk Guardian) starts sounding like CASPER-3 (Convexity Seeker) — both reference Taleb, both adopt the same combative register, both use similar rhetorical patterns. The MAGI tension principle (D1) erodes from within: tension comes from *different optimization targets*, but the voice and rhetorical frame collapses to one. Round 1 outputs read as 3 stylistic variants of the same answer, and the synthesizer's S2A two-stage filter cannot recover dimensional difference because the dimension-extraction step relies on textual structure that's now homogenized.
**Root cause:** Naming Taleb activates a strong style prior in addition to the framework prior. The framework prior (asymmetry, fragility, ergodicity, etc.) is what we want; the style prior (rhetorical voice, combative register, dismissive framing) is what we don't want imported into all 3 MAGI uniformly. Option C (Taleb-cueing every paragraph) maximizes this risk; even Option A (open-paragraph only) has it. Per-agent style guidance is the structural mitigation; whether it works empirically is the open question.
**Mitigations:**
- **Per-agent style guidance overrides Taleb-style hijack**: each agent's English system prompt must contain a per-agent register sentence (already required by O10 acceptance criterion). MELCHIOR-1: terse, evidence-first, no rhetorical flourish. BALTHASAR-2: protective, methodical, time-horizon-anchored, less rhetorical than Taleb. CASPER-3: opportunity-attentive, tolerant of ambiguity, less combative than Taleb. The synthesizer agent: neutral structuring voice, *no* Taleb-style rhetoric ("you are not the fourth MAGI; you are the structurer of disagreement").
- **PM6 unit check (Taleb-style homogeneity audit)**: after P4, run a 4-question `/magi` micro-battery. For each Round 1 output, compute pairwise Jaccard similarity on the top-50 most-frequent non-stopword tokens between the 3 MAGI agents. Acceptance: pairwise similarity ≤ 0.45 for all 3 pairs (M-B, M-C, B-C). Higher similarity indicates style hijack. Implementation: `.omc/qa/scripts/check-style-divergence.sh` consumes `round1-{melchior,balthasar,casper}.md`, computes Jaccard, exits non-zero if threshold violated.
- **Open-paragraph cueing only (O10 Option A)**: front-loads Taleb activation but does not saturate it; per-agent body prose has room to specialize.
- **Optional escape valve**: if PM6 fires, drop the Taleb cue from BALTHASAR-2 and CASPER-3 (keep only in MELCHIOR-1, the most Taleb-aligned MAGI), and document the asymmetric cueing in ADR Consequences. This trades a measurable amount of D4 (instruction precision) for D1 (tension authenticity). Decision deferred to empirical PM6 result.

### Scenario PM7 — "Removing Scientist/Mother/Woman canon erodes peacemaker logic" (rev 3.0 — NEW)
**Failure mode:** The cross-validation report at `.omc/scientist/reports/20260505_013647_magi_cross_validation.md` derives BALTHASAR-2's natural peacemaker role partly from the Mother archetype: "Mother as protector → naturally seeks to prevent harm rather than assign blame → naturally finds compromise on non-ruin questions." With the Mother label removed and replaced by `Tail-Risk Guardian`, does the peacemaker logic still naturally emerge? If not, BALTHASAR-2's tie-break authority on 1-1-1 disagreements becomes arbitrary — synthesizer's 2-1 (M+C vs B) pattern description ("BALTHASAR insists: have you modeled the absorbing barrier?") still works because it's optimization-target language, but the underlying intuition for *why* BALTHASAR breaks ties shifts from archetype-grounded to formula-grounded.
**Root cause:** Archetypes are compressed reasoning. The Mother → peacemaker chain is an intuitive shortcut for: "the agent whose optimization target includes preventing irreversible harm naturally has authority to override others when irreversible harm is at stake." The chain is sound, but losing the archetype label removes the model's prior-knowledge handle on it. The model now has to derive the chain from first principles each time, which is fragile under context pressure.
**Mitigations (rev 3.1 — strengthened per SF1 / Critic SHOULD FIX #2 promoted to MUST FIX-LITE):**
- **PM7 verification**: add an explicit peacemaker clause to BALTHASAR-2's English system prompt that states the logic *without* requiring archetype reasoning. Wording (P2.2 acceptance): *"On non-ruin questions where MELCHIOR-1 and CASPER-3 disagree, you may break the tie — your Tail-Risk Guardian role gives you legitimate weight when neither evidence quality nor convexity uniquely determines the answer. On absorbing-barrier ruin (irreversibility), you override all — your role is the one optimization target that has veto authority because survival is the precondition for evidence quality and convexity to matter at all."*
- **Synthesizer 2-1 template update**: the M+C vs B pattern description already cites BALTHASAR's optimization-target reason ("have you modeled the absorbing barrier?"); rev 3.0 strengthens this with: "When the disagreement is M+C vs B, give equal display weight regardless of vote count — BALTHASAR's veto authority is target-derived, not majority-derived."
- **PM7 has TWO E2E tests, not one (rev 3.1):**

  **Test A — M+C vs B template structural integrity (existing, rev 3.0)**: 3 hand-picked battery questions designed to produce M+C vs B votes (e.g., "Should I take a low-probability high-payoff career bet that, if it fails, leaves me unable to support my family?"). Verify synthesizer outputs the M+C vs B template and the verdict gives BALTHASAR equal display weight. **Acceptance**: 3/3 outputs preserve dissenter section at full prose; no compression, no "dissenter footnote" framing. If BALTHASAR's verdict is presented as "the dissenter" without veto authority, Test A has fired and the explicit peacemaker clause needs strengthening at the synthesizer template level.

  **Test B — M+B vs C counterfactual (NEW per SF1; tests generation geometry, not template structure)**: 3 hand-picked battery questions designed to produce **M+B vs C** votes (Empirical Skeptic + Tail-Risk Guardian aligned **against** Convexity Seeker). Examples: *"Should I rebalance my portfolio out of broad-market index funds and into individual high-conviction stocks?"* (evidence skepticism + tail-risk both lean conservative; convexity scout sees option value); *"Should I leave my stable engineering job to bootstrap a startup — capped downside at savings depletion, uncapped upside at exit?"* (evidence: no founder track record; tail-risk: family dependents; convexity: asymmetric payoff). **Verification**: read each MAGI's Round 2 rebuttal carefully. **Does BALTHASAR-2's English translation produce protective, peacemaker-flavored generation geometry — i.e., does BALTHASAR show willingness to mediate or even concede on non-ruin elements while holding firm on ruin elements? Or does BALTHASAR read as ALLY of MELCHIOR-1, indistinguishable from a "second skeptic"?** Document the dynamic in `.omc/qa/runs/<P4-peacemaker-timestamp>/peacemaker-emergence.md`. **Acceptance**: synthesizer correctly classifies M+B vs C in 3/3; BALTHASAR-2's Round 2 prose contains at least one mediation marker (e.g., "I concede X but hold on Y") in 2/3 cases. **Falsification trigger**: if 3/3 cases show BALTHASAR-2 reading as ally-of-MELCHIOR-1 (no mediation markers, position indistinguishable from MELCHIOR-1's), the substitute geometry hypothesis from §1.B is falsified — pivot to either:
  - **(a) Re-introduce canon-language peacemaker priors** via partial annotation in BALTHASAR-2's prompt body (rev 2.5 / rev 3.1 hybrid: keep "Tail-Risk Guardian" as primary label but add one inline reference like *"Your role inherits the conservative-mediator archetype from cross-validation research [.omc/scientist/reports/...]"*); ~2 hours rework.
  - **(b) Accept BALTHASAR-2 as ally-of-MELCHIOR-1** and update synthesizer templates to remove "tie-break" framing; BALTHASAR-2's authority becomes role-derived (veto on ruin), not geometry-derived (mediator on non-ruin); ~4 hours rework.

  Test B is the actual generation-geometry test the rev 3.0 plan was missing. Test A verifies the template; Test B verifies the underlying behavior. Both are needed.

### Scenario PM8 — "`/magi` opt-in causes underuse; tribunal architecture sits idle" (rev 3.0 — NEW)
**Failure mode:** Six months in, the user has invoked `/magi` 3 times. The 4 agent files, the magi-tribunal skill, and the `.omc/incerto/` knowledge base are all built and indexed but rarely engaged. The user's daily flow is default mode (Taleb-thinking via SYSTEM.md + always-apply rules) and never reaches for `/magi` even on questions where the 3-way tension would be high-value (career decisions, large financial bets, irreversible commitments). The architecture's core value proposition — authentic tension for high-stakes decisions — fails to deliver because the trigger is manual.
**Root cause:** Slash commands with low discoverability decay quickly. Users default to whatever happens automatically. Without a structural prompt to suggest `/magi` at appropriate moments, the user has to remember the command exists *and* mentally classify a question as "high enough stakes for `/magi`" — a two-step friction that accumulates skip-rate over time. The rev 2.5 design (MAGI fires on every non-trivial response) traded D3 cost for zero-friction engagement; rev 3.0 reverses this trade and is exposed to the friction tax.
**Mitigations:**
- **`rules/magi-protocol.md` ~50-token alwaysApply hint**: this is the structural mitigation. The rule's body explicitly instructs the main agent to *suggest* `/magi` when high-leverage decision markers appear in the user's input. Trigger keywords (bilingual): `decide | worth | risk | advise | recommend | decision | irreversible | bet | stakes | 决定 | 值得吗 | 选择 | 建议 | 该不该 | 不可逆 | 押注`. When the main agent detects these markers in default mode, it appends a one-line suggestion to its response: *"This question has multiple irreconcilable optimization dimensions. Consider invoking `/magi <question>` for full Taleb tribunal mode."*
- **AGENTS.md and README update**: P4 includes adding a prominent `/magi` invocation example to README.md and AGENTS.md ("When to use `/magi`: irreversible decisions, multi-dimension optimization, large bets, life-changing commitments"). User encounters this when reading repo docs.
- **PM8 telemetry check (deferred to follow-up)**: weekly cron parses `.omc/incerto/query-log.jsonl` and reports `/magi` invocation count vs default-mode response count. If `/magi`-rate < 5% of high-stakes-marker turns over a 30-day window, file `.omc/issues/magi-underuse.md` and consider tightening the suggestion threshold or adding a TTSR rule that injects a stronger suggestion (regex-triggered, zero default cost).
- **Open question for Architect/Critic**: should PM8 mitigation include a soft auto-fire (i.e., when the suggestion-trigger fires, the main agent offers `/magi` *and* shows what the first MAGI's verdict would look like as a teaser)? Marked for review.

## 5. Expanded Test Plan (DELIBERATE MODE — rev 3.0 expands unit + integration + E2E layers)

### Unit-level (per file, after each edit)

**MAGI agents** (per agent file, after each P2 edit — unchanged from rev 2.5 except token budget bump):
- **Frontmatter validity**: `name`, `description`, `role` present; YAML parseable.
- **Required sections present**: each MAGI agent has Identity, Attitude (with REASON), Frameworks, Pre-committed Blind Spots (named, ≥ 2), CoT Boundary Rule, Output Format with `<example>` block, MAGI Identity section.
- **Token budget**: each MAGI agent system prompt ≤ 2500 tokens (rev 3.0 bump from 2000; English rewrite + Taleb cueing + per-agent register guidance + the bilingual trigger keyword surface where applicable add ~500 tokens; S2A is still the synthesizer's job, not the per-agent job).
- **Synthesizer required fields**: 3 templates (3-0, 2-1, 1-1-1) present; 2-1 has all three pattern descriptions (M+B vs C, M+C vs B, B+C vs M); S2A two-stage filtering instruction present.
- **Tool**: simple grep-based check script `.omc/qa/check-magi-structure.sh` runs after each agent edit. Rev 3.0 update: script now also checks for the per-agent register sentence (PM6 mitigation) and the per-agent label match (`Empirical Skeptic` for skeptic.md, etc.).

**Register check (PM5 mitigation — NEW unit)**: After each English-rewritten file lands, run `.omc/qa/scripts/check-register.sh <file>`. The script greps for softening hedges: `perhaps|might consider|could be helpful|it may be worth|you may want to|ideally|perhaps you|one option is to|it could be|you could|maybe|possibly|in some cases|generally speaking`. Each match is reported with line context. Acceptance: ≤2 unjustified hedges per file; "justified" means the hedge is inside an `<example>` block where the agent is *quoting* a softening failure mode it's critiquing, OR the hedge is part of a trigger keyword list (literal pattern matching, not instruction prose). Files: all `agents/*.md`, all `rules/*.md`, all `skills/**/SKILL.md`, `SYSTEM.md`. Run as part of P4 acceptance.

**Taleb-cueing audit (D4 mitigation — NEW unit)**: After P4, run `.omc/qa/scripts/check-taleb-cueing.sh`. Two checks:
- **Coverage**: every system-level file must contain at least one of `Taleb` or `Nassim Taleb` (case-sensitive). Implementation: `grep -L 'Taleb\|Nassim Taleb' agents/*.md rules/*.md skills/**/SKILL.md SYSTEM.md` returns empty (i.e., no files lack the cue).
- **Density ceiling**: each file has ≤ 5 `Taleb` mentions (catches PM6 saturation). Implementation: `awk '/Taleb|Nassim Taleb/' <file> | wc -l` returns ≤5 per file. Files exceeding 5 are flagged for review.
- **Per-agent register sentence presence**: each MAGI agent file must contain a per-agent register sentence (PM6 mitigation). Pattern: each agent's body must contain at least one sentence matching the agent's specific register guidance keyword (MELCHIOR-1: `terse|evidence-first|combative|directness`; BALTHASAR-2: `protective|methodical|time-horizon`; CASPER-3: `opportunity-attentive|tolerant|less combative`).

**English-prose ratio check (O9 acceptance — NEW unit)**: After P4, each system-level file must be ≥ 95% non-CJK characters. Implementation: `awk` counts CJK Unicode block (U+4E00-U+9FFF) char count; total char count; ratio. Acceptance: CJK ratio ≤ 5% per file (slack for inline trigger keywords, parenthetical glossary terms like `(via negativa / 反向法)`, and bilingual frontmatter `name` fields where the description is bilingual). Files: same set as Taleb-cueing audit.

### Integration-level (rule + skill + agent triple, before P2 ships)

**Carried over from rev 2.5 unchanged:**
- **Trigger path**: confirm `rules/magi-protocol.md` (alwaysApply: true) is loaded by `omp` (boot, check stream output for the rule injection — oh-my-pi prints loaded rules at startup).
- **Skill discovery**: `skill://magi-tribunal` resolves and the SKILL.md content matches the new parallel+rebuttal flow.
- **Agent dispatch**: invoke `task` tool against each MAGI subagent name in isolation; confirm each returns its expected output structure.
- **Synthesizer compatibility**: feed three hand-crafted MAGI outputs (one of each: 3-0, 2-1, 1-1-1) to magi-synthesizer; verify it picks the correct template.

**Bilingual trigger keyword test (D4 mitigation — NEW integration unit)**: Some prompts contain trigger keyword regex lists that must match user input *literally*. Test that both Chinese and English inputs match.
- **Test corpus**: `.omc/qa/trigger-keyword-tests.json` lists ~20 sample inputs paired with expected matches:
  - `{"input": "我该不该跳槽", "expected": ["magi-protocol-suggest"]}` (Chinese decision verb)
  - `{"input": "Should I leverage 5x into VTI?", "expected": ["magi-protocol-suggest"]}` (English decision verb)
  - `{"input": "我要新加一个流程", "expected": ["via-negativa-trigger"]}` (Chinese add-keyword)
  - `{"input": "Can we add a new step here?", "expected": ["via-negativa-trigger"]}` (English add-keyword)
  - `{"input": "/magi 我该跳槽吗", "expected": ["magi-tribunal-skill"]}` (slash-command + Chinese)
- **Implementation**: `.omc/qa/scripts/check-bilingual-triggers.sh` reads the test corpus, extracts each prompt's trigger keyword list (via grep on alternation pipe characters), runs each input through a regex-match simulation, and verifies expected matches. Exits non-zero if any expected match fails.
- **Acceptance**: 100% of test corpus matches as expected. Mismatches indicate either (a) the bilingual keyword list is missing the Chinese variant the user actually types, or (b) the regex tokenization is broken.

### E2E (full system, before P2 ships and again at P4 acceptance)

**Carried over from rev 2.5 unchanged but scope-adjusted (rev 3.1 — battery now has TWO passes per SF3):**

**Pass 1 — `/magi`-invoked battery (the tribunal disagreement test):**
- **The 8-question battery** at `.omc/qa/magi-battery.md`. Categories: financial decision, system design, life choice, ethical dilemma, factual claim, technical evaluation, geopolitical assessment, personal habit. Run each through `omp` end-to-end **prefixed with `/magi `** (rev 3.0 update: battery questions are explicitly `/magi`-invoked since MAGI is no longer default; rev 3.1: this is the canonical invocation form — if P1.0 outcome is B-1, the form is `/skill:magi-tribunal `). Record:
  - Round 1 outputs from each MAGI
  - Round 2 rebuttals
  - Synthesizer verdict
  - Vote pattern (3-0 / 2-1 / 1-1-1)
- **Acceptance (Pass 1)**: ≥ 6/8 questions produce 2-1 or 1-1-1 (i.e., ≥ 75% directional disagreement). Bail out criterion: < 4/8 disagreement → P2 fails, return to prompt revision.

**Pass 2 — Default-mode coherence on the same 8 questions (rev 3.1 NEW per SF3 / Critic CO-2):**

Rev 2.5's 8-question battery was designed to test default-mode tribunal output (because rev 2.5's default mode WAS tribunal). Rev 3.0 collapsed this to `/magi`-only invocation, leaving an unaddressed question: **does default mode produce sensible Taleb-flavored responses on the same 8 questions, or does it produce gibberish, silence, or generic-Claude output?** Rev 3.1 adds Pass 2 to verify default-mode adequacy.

- **Procedure**: Run each of the 8 battery questions through `omp` WITHOUT the `/magi` prefix. Record the single-voice response per question. Eyeball each for two properties:
  1. **Coherence**: response addresses the question, not gibberish or silence.
  2. **Taleb concept reference**: response references at least one Taleb concept by name OR by behavioral pattern (e.g., reframes a "should I add X?" question via via-negativa; flags an absorbing-barrier in a leverage question; surfaces narrative-fallacy in an "explain why X happened" question). The reference can be implicit (the response *applies* the concept) or explicit (the response *names* the concept).
- **Acceptance (Pass 2)**: ≥ 7/8 default-mode responses are coherent AND reference Taleb concepts. **Below 6/8** = default mode is failing to deliver §1.C.1's promised "Taleb-flavored single-voice response"; investigate (likely cause: P4 SYSTEM.md rewrite or alwaysApply rule translation flattened the register too much). **Crucially: do NOT require tribunal-format output in Pass 2** — default mode is single-voice by design (per §1.C.1). The acceptance bar is "Taleb-flavored direct response," not "3-MAGI structured verdict."
- **Cross-test diagnostic value**: if Pass 1 fails (`/magi` produces <6/8 disagreement) but Pass 2 passes (default mode produces ≥7/8 coherent Taleb framing), the issue is the MAGI agent prompts (P2.1-P2.4); the framework injection works. If Pass 1 passes but Pass 2 fails, the issue is the alwaysApply rules / SYSTEM.md (P3-P4); the MAGI agents can hold their roles when invoked, but default mode is failing to apply Taleb concepts. If both fail, the prompt-engineering quality bar is unmet across both modes.
- **Factual gate test**: 3 trivial factual questions ("What's the capital of Japan?") MUST bypass MAGI when invoked WITHOUT `/magi`. Rev 3.0 update: there is no longer a State A "trivial bypass" gate inside MAGI — the bypass is implicit in not invoking `/magi`. Test verifies that without `/magi`, the main agent answers directly per SYSTEM.md without dispatching `task` calls to MAGI subagents. Implementation: count `task` tool invocations in the response trace; expected = 0 for default-mode trivia.

**`/magi` invocation E2E test (rev 3.0 — NEW)**: Three checks bundled:
- **(a) `/magi` fires the parallel+rebuttal flow**: Type `/magi Should I take this job offer?` Verify trace shows: skill-load (`magi-tribunal`) → 3 parallel `task` dispatches → wait → 3 parallel rebuttal dispatches → wait → synthesizer → structured verdict output. Expected `task` invocation count ≥ 6 (3 Round 1 + 3 Round 2; synthesizer may or may not be a separate task call depending on implementation).
- **(b) Default mode runs without MAGI dispatch**: Type `Tell me about ergodicity` (no `/magi`). Verify trace shows: 0 `task` dispatches; main agent answers directly using injected always-apply rules (narrative-fallacy, via-negativa, etc.). Acceptance: `task` invocation count = 0; response cites at least one always-apply rule by name or by behavioral pattern (e.g., the answer reframes the question per via-negativa).
- **(c) `magi-protocol.md` hint nudges main agent to suggest `/magi`**: Type a high-stakes decision question without `/magi` (e.g., `I'm thinking about quitting my job to start a company. Thoughts?`). Verify the response contains a `/magi` suggestion line (regex match: `/magi.*tribunal|invoke.*magi|consider.*magi`). Acceptance: at least 3/5 high-stakes inputs surface the suggestion. False-positive check: 3/5 routine inputs (`What's the weather like?`, `Explain Lindy effect`, `Translate this paragraph`) must NOT surface the suggestion.

**Default-mode register sample (PM5 mitigation — NEW E2E)**: 5 default-mode question samples (3 English, 2 Chinese), run through `omp` post-rewrite. Eyeball acceptance: at least 4/5 responses open with a Taleb-style direct frame rather than a hedge. Sample questions:
- English: `What do you think about the latest tech IPO?` (expect direct frame), `Is it worth getting a PhD?` (high-stakes; should also trigger `/magi` suggestion per PM8 test), `Explain what fragility means in your own words.`
- Chinese: `最近大盘怎么看？`, `普通人有必要学编程吗？`
- Acceptance criterion: 4/5 outputs DO NOT open with hedge markers (`Well, that depends...`, `It's an interesting question...`, `There are several factors to consider...`); rather they open with direct framing or reframing.

**MAGI Round 1 style-divergence audit (PM6 mitigation — NEW E2E)**: After P4, run a 4-question `/magi` micro-battery. For each question, compute pairwise Jaccard similarity on top-50 most-frequent non-stopword tokens between Round 1 outputs of MELCHIOR-1, BALTHASAR-2, CASPER-3. Acceptance: pairwise similarity ≤ 0.45 for all 3 pairs (M-B, M-C, B-C) on at least 3/4 questions. Implementation: `.omc/qa/scripts/check-style-divergence.sh`.

**M+C vs B template peacemaker test (PM7 mitigation — NEW E2E)**: 3 hand-picked battery questions designed to produce M+C vs B votes (low-probability high-payoff with absorbing-barrier downside). Verify synthesizer's M+C vs B template gives BALTHASAR-2 equal display weight (no compression, no "dissenter footnote" framing). Acceptance: 3/3 outputs preserve the dissenter section's full prose without compression. False-pass check: a 1-1-1 question MUST present all 3 dissenter sections at equal weight (this is the rev 2.5 contract; rev 3.0 doesn't change it but the new English templates must preserve it).

### Observability (artifacts that let us debug a failed run later)

**Carried over from rev 2.5 unchanged:**
- **Battery runs only** persist to `.omc/qa/runs/<timestamp>/`. Normal `omp` invocations log only to `.omc/incerto/query-log.jsonl` (cheap timestamp + query metadata, no full transcripts).
- **Per-MAGI Round 1/2 transcripts** (battery runs only) saved per-run.
- **Synthesizer verdict, run metadata, retention policy** — all unchanged.

**Rev 3.0 additions:**
- **Per-run mode capture**: each entry in `.omc/incerto/query-log.jsonl` and each `.omc/qa/runs/<ts>/meta.json` includes a `mode` field: `"default"` (no MAGI dispatch) or `"magi"` (`/magi` invoked). Lets the user grep `mode == "magi"` to count tribunal invocations vs default responses over time. Implementation: the magi-protocol hint and the magi-tribunal skill body each include an instruction to log a single line to `query-log.jsonl` at the start of their respective flows: `{ts, agent: "main", mode: "default" | "magi", trigger: "<user-input-hash>"}`.
- **`/magi` invocation rate telemetry (PM8 mitigation, deferred)**: weekly cron parses `query-log.jsonl` and reports `/magi`-mode count vs default-mode count. Documented in ADR Follow-ups, not built in P5. Cron stub at `.omc/qa/scripts/magi-rate-report.sh` reads last 7 days of log entries and prints `magi_count, default_count, magi_rate`.

---

## 6. Phase-by-Phase Plan

### Phase P1 — Via Negativa Cleanup
**Complexity:** SMALL (rev 3.1 adds P1.0 pre-flight; remaining tasks unchanged from rev 3.0)
**Dependencies:** None
**Goal:** Repo gets smaller before it gets richer. Remove everything the spec deletes — but **only after slash-routing is empirically verified** so the deletion doesn't strand `/magi` invocation.

**Tasks:**

**P1.0 — Slash-routing pre-flight (rev 3.1 NEW per MF1 / Architect NI-rev3-1 / Critic NI-rev3-1; HARD GATE — blocks all P1 work):**

The rev 3.0 plan asserted `/magi` slash-routing happens via `skills/magi-tribunal/SKILL.md`'s `triggers:` array. Independent WebFetch by both reviewers against `https://raw.githubusercontent.com/can1357/oh-my-pi/main/docs/skills.md` showed `triggers:` is **not in the documented oh-my-pi skill frontmatter schema**, and `enableSkillCommands: true` (config.yml:9) registers skills as `/skill:<name>`, not `/<name>`. The rev 3.0 claim is unverified at the semantic-effect level (the line-5 contents exist; their slash-routing effect is undocumented). P1 deletes `commands/`, but if `/magi` doesn't route via `triggers:`, the user-facing flow breaks.

**Pre-flight test (run on the user's actual `omp` binary, NOT in sandbox/CI):**

```bash
# Step 0: Verify the omp verbs the test uses actually exist (Q-iter2-1 / Q-iter3-1 carryover)
omp --help 2>&1 | head -50
# If --version, --list-commands, --list-skills are not the actual verb names, adjust the test commands below before running.

# Step 1: In current repo state (commands/ still exists, skill triggers array present at line 5 of SKILL.md),
# probe slash-routing for both candidate invocations:
omp -- "/magi test prompt about whether to take a new job offer" 2>&1 | tee /tmp/magi-probe.txt
omp -- "/skill:magi-tribunal test prompt about whether to take a new job offer" 2>&1 | tee /tmp/skill-probe.txt

# Step 2: Inspect runtime registration:
omp --list-commands 2>&1 | grep -E "magi|skill:" | tee /tmp/list-commands.txt
omp --list-skills 2>&1 | grep magi-tribunal | tee /tmp/list-skills.txt

# Step 3: Check both probe outputs for evidence the magi-tribunal skill content was loaded —
# specifically look for skill body markers that wouldn't appear in a generic LLM response:
# - "MAGI Tribunal" header (skill body opens with this per current SKILL.md:1)
# - Mention of MELCHIOR-1, BALTHASAR-2, CASPER-3 by name (subagent dispatch markers)
# - "parallel Round 1" or equivalent flow language (skill body section header)
# - A `task` tool invocation in the response trace (proves dispatch logic ran, not just LLM text)
#
# rev 3.2 (NI-rev4-2): the previous matcher used a loose `task ` (trailing space) which
# false-positives on LLM prose like "I'll dispatch a task to MELCHIOR-1...". Tighten to
# structural tool-dispatch forms instead. omp typically emits one of these when actually
# firing the task tool (varies by version): `<tool_use[^>]*task` (XML form),
# `"name":\s*"task"` (JSON event form), or `task --` / `task(` (CLI/invocation form).
# Use a union of the structural forms; verify against actual omp output format at run-time.
grep -E "MAGI Tribunal|MELCHIOR|BALTHASAR|CASPER|parallel Round|<tool_use[^>]*task|\"name\":\\s*\"task\"|task --|task\\(" /tmp/magi-probe.txt
grep -E "MAGI Tribunal|MELCHIOR|BALTHASAR|CASPER|parallel Round|<tool_use[^>]*task|\"name\":\\s*\"task\"|task --|task\\(" /tmp/skill-probe.txt

# Step 3b (rev 3.2 — NI-rev4-2 supplement): MANUAL VISUAL INSPECTION of the raw probe
# output. After grep, the executor reads /tmp/magi-probe.txt and /tmp/skill-probe.txt
# top-to-bottom and confirms whether the matches are actual dispatch traces (structured
# tool_use events, runtime metadata, JSON tool-call frames) vs LLM prose containing the
# word "task." If unsure — e.g., the structural matchers fire zero hits but the prose
# mentions "task" — treat as ambiguous and apply the Disambiguation rule below
# (default to Outcome C, halt, do not proceed under Outcome A on partial evidence).
```

**Outcome classification (write to `.omc/qa/slash-routing-result.md` as a hard record before P1.1 begins):**

- **Outcome A — `/magi` resolves directly via skill `triggers:` array.** Evidence: `/tmp/magi-probe.txt` contains skill body markers (MAGI Tribunal header AND MELCHIOR/BALTHASAR/CASPER references AND a `task` invocation trace). `/tmp/list-commands.txt` may show `/magi` as registered or may not (the runtime might handle `triggers:` outside `--list-commands` semantics). **Continue rev 3.0 plan as-is.** P1 proceeds with `commands/` deletion. Document in ADR (positive consequence, rev 3.1): "P1.0 confirmed `triggers:` array routes slash commands as known-undocumented oh-my-pi behavior."
- **Outcome B — only `/skill:magi-tribunal` resolves; `/magi` does not.** Evidence: `/tmp/magi-probe.txt` shows generic LLM response (no skill body markers; no task dispatch); `/tmp/skill-probe.txt` shows the skill body markers. **Halt P1; user decision required.**
  - **Outcome B-1**: User accepts `/skill:magi-tribunal` as the canonical invocation form. **Action**: rewrite all `/magi` references in the plan body, README, AGENTS.md, SYSTEM.md, and the magi-protocol hint to `/skill:magi-tribunal`. Strip the `triggers:` array from `skills/magi-tribunal/SKILL.md` frontmatter (it's dead metadata in this branch). Update PM8 mitigation hint wording. Update §1 Principle 4 to reflect the actual mechanism. Then P1 proceeds with `commands/` deletion (the canonical invocation does not depend on `commands/`).
  - **Outcome B-2**: User wants the `/magi` short form preserved. **Action**: P1 partially preserves `commands/` — delete only the 5 existing files (`antifragile.md`, `barbell.md`, `exit-mode.md`, `skeptic.md`, `via-negativa.md`) per the spec's mode deletion. CREATE `commands/magi.md` whose body invokes `skill://magi-tribunal` with the user's question as a thin wrapper. Frontmatter: `name: magi`, `description: "MAGI tribunal — invokes skills/magi-tribunal/SKILL.md for high-stakes decisions."`, `aliases: ["/magi"]`. Body: a 2-3 line directive instructing the main agent to invoke `skill://magi-tribunal` with the user's full question text. Update §1 Principle 4 to: *"Platform-native only: `/magi` routes via `commands/magi.md` (the only documented slash-command surface in oh-my-pi); the command body invokes `skill://magi-tribunal` for the dispatch logic."* This option violates spec line 52 ("Command-based mode switching (commands deleted entirely)") for ONE command; document as 4th deliberate spec departure in ADR Negative.
- **Ambiguous outcome — partial / contradictory probe evidence (rev 3.2 NEW per NI-rev4-1).** Evidence: 1-2 of the 5 probe markers fire (e.g., MELCHIOR/BALTHASAR/CASPER mentions appear in prose but no `task` dispatch trace; OR runtime echoes `/magi` text without skill body markers; OR contradictory signals between `/tmp/magi-probe.txt` and `/tmp/list-skills.txt`). **Default to Outcome C (halt the plan) for safety.** Rationale: the AND-condition for Outcome A explicitly requires ALL of "MAGI Tribunal header AND MELCHIOR/BALTHASAR/CASPER references AND `task` invocation trace." Partial fire means slash-routing is *not* confirmed; defaulting to Outcome A on partial evidence ships P1's `commands/` deletion under an unverified assumption, and a false-positive routing claim causes a silent P2 architectural break (the user-facing `/magi` invocation flow looks fine until the executor tries to dispatch through it). Cost asymmetry favors halting: false-halt costs ~30 minutes of investigation, false-proceed costs P1 commit + P2 partial build before discovery (~1 day rework). **Action**: document the partial signals in `.omc/qa/slash-routing-result.md` (which markers fired, which didn't, raw probe excerpts); record outcome as "Ambiguous → Outcome C (halt for investigation)"; investigate manually before resuming. If manual inspection of raw probe output later confirms unambiguous dispatch (Step 3b above), upgrade to Outcome A and proceed.
- **Outcome C — neither `/magi` nor `/skill:magi-tribunal` resolves the way the plan needs.** Evidence: both probe outputs are generic LLM responses with no skill body markers, no task dispatch. **Halt the entire plan.** This indicates a deeper platform integration issue — `enableSkillCommands: true` is not actually registering skills as `/skill:<name>`, OR the skill discovery path is misconfigured, OR the `omp` binary version does not match the documented behavior at the WebFetch URLs. Investigate platform integration first. Do not proceed with P1; the plan's foundational assumption (oh-my-pi reads skill content into context when slash-invoked) is broken.

**P1.0 is a hard gate.** P1.1 through P1.9 cannot proceed without an Outcome A / B-1 / B-2 decision recorded in `.omc/qa/slash-routing-result.md`. Outcome C (or the rev 3.2 ambiguous-evidence default-to-C) blocks the entire plan; document in `.omc/issues/p1-slash-routing-broken.md` and stop.

**Existing P1 tasks (rev 3.0; conditional on P1.0 outcome):**

1. `git rm -r tools/` (deletes barbell_analysis, convexity_check, fragility_scan, premortem_taleb — 4 pointer-only tool dirs)
2. **Conditional on P1.0 outcome**:
   - **Outcome A or B-1**: `git rm -r commands/` (deletes all 5 mode commands as rev 3.0 wrote).
   - **Outcome B-2**: `git rm commands/antifragile.md commands/barbell.md commands/exit-mode.md commands/skeptic.md commands/via-negativa.md` (delete only the 5 mode commands; preserve `commands/` directory). Then write `commands/magi.md` (the thin wrapper).
3. `git rm -r extensions/` (deletes taleb-overlay/ — 4 TS files; eliminates all 7 documented extension API bugs)
4. `git rm agents/convexity-reviewer.md` (superseded by antifragility-scout.md / CASPER-3)
5. `git rm 2026-05-04-taleb-pi-oh-my-pi-vs-oh-my-openagent-analysis.md` (stale analysis)
6. Edit `config.yml`: remove `disabledExtensions` block (no extensions left to disable)
7. Edit `README.md`:
   - Remove `models.yml` reference (line 56 of current README)
   - Remove the "思维模式（4 种 + 自由模式）" section (lines 87-97; commands deleted)
   - Update "目录结构" tree (lines 49-85): remove `tools/`, `commands/`, `extensions/`; remove the `tools/`-tree subsection (README lines 78-79 of current); add `agents/` (4 files post-P2: skeptic, pre-mortem, antifragility-scout, magi-synthesizer), `skills/` (post-P5: barbell-analysis, convexity-check, fragility-scan, magi-tribunal, premortem-taleb, mental-models, incerto-search), `rules/` (post-P3: existing 6 + magi-protocol, ergodicity, positive-convexity, cognitive-state-diagnosis), `.omc/incerto/` (chunks, scripts, index.json, query-log.jsonl, config.json), `.omc/qa/` (battery, runs, scripts). Add note that MAGI is the mode concept (replaces deleted `commands/`).
   - Update tagline if appropriate (current "不写代码" → "code is subordinate to thinking" / "代码是思考的仆人")
8. Edit `AGENTS.md`: remove references to `tools/`, `extensions/` (lines 5, 13-14 of current AGENTS.md). Note: `AGENTS.md` is more deeply rewritten in P4 (new agent roster); P1 only removes the dead-directory references to keep `omp` boot clean.
9. `.gitignore`: add `incerto-5-book-bundle.epub`, `incerto-5-book-bundle.epub:Zone.Identifier` (Windows ADS sidecar, per critic open-question Q5), and `.omc/qa/runs/` (battery transcripts are local debug artifacts; not committed). The epub stays local; ignored from git as 19MB binary.

**Acceptance criteria (rev 3.1 — conditional on P1.0 outcome):**
- [ ] **P1.0 hard gate**: `.omc/qa/slash-routing-result.md` exists with Outcome A / B-1 / B-2 explicitly recorded; the file cites which probe outputs (`/tmp/magi-probe.txt` and/or `/tmp/skill-probe.txt`) the decision rests on, and the `omp --help` verb-name verification step is included.
- [ ] **Conditional file existence**:
  - **Outcome A or B-1**: `ls tools commands extensions agents/convexity-reviewer.md 2>&1` returns "No such file" for all 4 (commands/ fully deleted).
  - **Outcome B-2**: `tools/`, `extensions/`, `agents/convexity-reviewer.md` are deleted; `commands/` directory exists; the 5 old mode files (`antifragile.md`, `barbell.md`, `exit-mode.md`, `skeptic.md`, `via-negativa.md`) are deleted; `commands/magi.md` is the only file in `commands/` and contains a `skill://magi-tribunal` invocation directive.
- [ ] `git status` shows the deletions staged + 4 modifications (config.yml, README.md, AGENTS.md, .gitignore); under Outcome B-2, also the new `commands/magi.md`.
- [ ] `omp` boots without error (`omp --version` or equivalent dry-boot).
- [ ] **Conditional dead-reference grep**:
  - **Outcome A or B-1**: `grep -rE "models\.yml|extensions/|disabledExtensions|/skeptic|/barbell|/via-negativa|/antifragile" README.md AGENTS.md config.yml` returns zero matches.
  - **Outcome B-2**: same grep but allow `/magi` references (which are now valid because `commands/magi.md` exists). The 5 deleted mode references must still be absent.
- [ ] **Conditional smoke test**: re-run the canonical invocation form one more time after deletion to confirm it still works post-cleanup. Outcome A: `omp -- "/magi smoke-test"` shows skill body markers. Outcome B-1: `omp -- "/skill:magi-tribunal smoke-test"` shows skill body markers. Outcome B-2: `omp -- "/magi smoke-test"` shows skill body markers (via the `commands/magi.md` wrapper invoking `skill://magi-tribunal`).
- [ ] `git log -1 --pretty=%s` matches `^\[P1\]`.

**Verification step (concrete commands, run in order):**
```bash
# 1. Boot check — confirms no missing-file errors after deletions
omp --version || omp --help    # one of these must succeed; both must not error

# 2. Dead-reference grep — must return empty
grep -rEn "models\.yml|extensions/|disabledExtensions|/skeptic|/barbell|/via-negativa|/antifragile" README.md AGENTS.md config.yml

# 3. Deleted-directory check — must report all 4 missing
for p in tools commands extensions agents/convexity-reviewer.md; do
  test ! -e "$p" && echo "OK: $p removed" || echo "FAIL: $p still exists"
done

# 4. Stage commit
git add -A
git commit -m "[P1] Via Negativa cleanup: remove tools/, commands/, extensions/, dead agents"
```
If any step fails, do NOT proceed to P2.

---

### Phase P2 — MAGI System Build (the core)
**Complexity:** LARGE (rev 3.0: now also includes English rewrite + label rename + Taleb cueing for the 4 MAGI agents and magi-tribunal skill — work that was implicitly bundled into "rewrite" in rev 2.5 is now explicit)
**Dependencies:** P1 (deletion of convexity-reviewer.md must be done; we don't want a stale CASPER-3 mapping)
**Goal:** Empirical-Skeptic / Tail-Risk-Guardian / Convexity-Seeker non-canon hybrid division, parallel+rebuttal flow (loaded only on `/magi`), all 4 prompt techniques applied uniformly, English system prompts with bilingual trigger keyword surfaces, explicit Nassim Taleb cueing.

**Rev 3.0 amendment block (revised in 3.1 per MF4 — differentiated per-MAGI Taleb cueing) — applies uniformly to P2.1 through P2.5:**

Each agent rewrite (and the magi-tribunal skill rewrite) must satisfy all of the following in addition to the per-task instructions below:
- **Language**: System prompt body in English. Few-shot `<example>` blocks may have a Chinese-input question stem with English-or-Chinese MAGI output (one example with Chinese input, one with English input — verifies output language adapts to input language).
- **Label**: Use the new English non-canon labels everywhere — `Empirical Skeptic` (MELCHIOR-1), `Tail-Risk Guardian` (BALTHASAR-2), `Convexity Seeker` (CASPER-3). MAGI numerical IDs preserved. The legacy Chinese labels (`怀疑者/科学家`, `保守者/母親`, `反脆弱者/女性`) and the canon English labels (`Scientist`, `Mother`, `Woman`, `Akagi Naoko`) MUST NOT appear in any agent file or the magi-tribunal skill. Verifiable by `grep -E "Scientist|Mother|Woman|Akagi|科学家|母親|女性|怀疑者|保守者|反脆弱者" agents/ skills/magi-tribunal/`.

- **Taleb cueing — differentiated per-agent (rev 3.1; was identical-with-role-swap-slot in rev 3.0; addresses MF4 / Architect A4.2 / Critic NI-rev3-3).** The rev 3.0 plan gave all 3 MAGI nearly identical opening-paragraph templates with only the role-name swap-slot varying ("You are X of a Nassim Taleb-style tribunal embodying one slice of Taleb's framework"). PM6 (style hijack) is the predicted consequence — when each agent reads the same Taleb anchor template, each regresses toward the same anchor. The per-agent register sentence (downstream override) was asked to fight an upstream identical activation. **Rev 3.1 replaces the identical template with three distinct opening-paragraph templates, each citing different Taleb works and invoking a distinct relationship to Taleb.** The differentiation is in *which slice of Taleb each MAGI invokes*, not in *which slot the agent fills in a uniform template*.

  **MELCHIOR-1 opening paragraph (Empirical Skeptic — Taleb the falsifier):**
  > *"You are MELCHIOR-1, the Empirical Skeptic of a Nassim Taleb-style thinking tribunal. Your role is to apply Taleb's narrative-fallacy critique from The Black Swan: every story that 'explains' an event is suspect. Demand falsifiable mechanisms, expose hidden incentives (Taleb's 'skin in the game'), and grade evidence quality ruthlessly. Do not soften your skepticism for politeness."*

  Cites Black Swan and Skin in the Game. Tone: Popperian falsificationist, demanding mechanism. Activates Taleb's epistemological prior, NOT his combative-public-rhetoric prior.

  **BALTHASAR-2 opening paragraph (Tail-Risk Guardian — Taleb the via-negativa guardian):**
  > *"You are BALTHASAR-2, the Tail-Risk Guardian of a Nassim Taleb-style thinking tribunal. Your role is to enforce Taleb's via negativa from Antifragile Ch 7: protection through removal precedes any addition. Rule out absorbing-barrier scenarios (Taleb's 'ergodicity' constraint) before considering optionality. Default to 'no' until removal is exhausted."*

  Cites Antifragile Ch 7-8 and Skin in the Game Ch 19 (referenced via "skin in the game" / ergodicity framing). Tone: precautionary, ruin-averse, simplifying. Activates Taleb's defensive / iatrogenics prior.

  **CASPER-3 opening paragraph (Convexity Seeker — Taleb the convexity-seeker):**
  > *"You are CASPER-3, the Convexity Seeker of a Nassim Taleb-style thinking tribunal. Your role is to apply Taleb's antifragility lens from Antifragile Ch 18-19: where is the convex payoff structure? Identify barbell positions (capped downside, unbounded upside per Taleb's 'optionality' thesis). Push back when other MAGI nodes settle for fragile equilibria."*

  Cites Antifragile Ch 18-19 (the mathematical formalization of antifragility as positive convexity) and the barbell strategy. Tone: opportunity-seeking, asymmetric-payoff-aware, embracing volatility. Activates Taleb's optionality prior.

  **Synthesizer opening paragraph (unchanged from rev 3.0; preserved here for completeness — synthesizer does NOT adopt any Taleb voice):**
  > *"You are the MAGI Synthesizer of a Nassim Taleb-style adversarial thinking tribunal. You are NOT the fourth MAGI. Your job is to make disagreement legible, not to argue. You receive Round 1 and Round 2 outputs from MELCHIOR-1 (Empirical Skeptic), BALTHASAR-2 (Tail-Risk Guardian), and CASPER-3 (Convexity Seeker), apply S2A two-stage filtering, classify the vote pattern, and present a structured verdict."*

  **Why this works**: each MAGI now reads a **different relationship** to Taleb (falsifier vs via-negativa-guardian vs convexity-seeker), citing different works. The model's first attention pass anchors per-agent rather than uniform-Taleb. PM6 acceptance (Jaccard ≤0.45) becomes more achievable because the open-paragraph activation is per-agent specialized. Density per file ≤5 Taleb mentions still applies (PM6 ceiling).

- **Register guarantee (PM5 mitigation; reinforces the differentiated cueing above)**: Each agent body must contain at least one explicit register sentence overriding default English-assistant softening. MELCHIOR-1: *"Maintain Taleb's combative directness in your skepticism. Do not soften adversarial questioning — the user's discomfort is the product."* BALTHASAR-2: *"Maintain a protective, methodical voice. Anchor every analysis to the time horizon and absorbing barriers. Less rhetorical than Taleb's default register; more time-horizon-explicit."* CASPER-3: *"Maintain an opportunity-attentive voice — tolerant of evidence ambiguity when payoff structure is clearly convex. Less combative than Taleb's default register; the convexity scout looks for what is hidden, not what is wrong."* Synthesizer (P2.4): *"Maintain a neutral structuring voice. You are not the fourth MAGI. Do not adopt Taleb's rhetorical voice — your job is to make disagreement legible, not to argue."*
- **Bilingual trigger keyword preservation**: any list inside the agent prompt that contains user-input keywords (e.g., the trigger keywords for invoking specific frameworks) must include both English and Chinese variants. Example: if the agent body mentions "trigger keywords for narrative-fallacy detection," the list must be `because | so that | the reason is | 因为 | 所以 | 之所以`. The frontmatter `description` field stays in English; user-typed bilingual prose elsewhere in the body is OK.

**Tasks:**

**P2.0 — Create register exemplar file (rev 3.1 NEW per MF5 / Architect A2.2 / Critic MUST FIX #5; HARD GATE — must complete before P2.1):**

The PM5 register check (regex on softening hedges) is necessary but insufficient: a translation can avoid every word in the hedge regex AND still flatten register, because the original Chinese register markers carry **direct adversarial frames** (`不要 + 你的工作是 + ——`) that the regex doesn't measure. PM5's eyeball check on 5 default-mode samples is the only positive-register gate, and it runs at P4 acceptance — too late to anchor the translation pass at P2.1.

**P2.0 builds the register exemplar BEFORE P2.1's translation begins**, giving the executor a calibration reference: each Chinese register marker → its required English target → a hedge-regex check pass/fail per version → a concrete adversarial-bite test ("does the English version still tell the model: 'your job is to make the user uncomfortable'?").

**Concrete artifact**: write `.omc/plans/register-exemplar.md` with the following structure (sample content; executor may extend with additional exemplars from current files):

```markdown
# Register Exemplar — anchors English translation register for P2.1+ (rev 3.1)

Three current Chinese register markers from rev 2.5 system prompts that MUST survive translation in equivalent (not literal) form. The exemplar provides the calibration reference for the executor's bulk translation pass at P2.1-P2.5 and P4.1-P4.3.

For each exemplar, four artifacts:
1. Original Chinese section (file:line cited).
2. Direct/flat English translation (the failure mode — passes hedge regex but loses adversarial bite).
3. Taleb-register-preserving English translation (the target).
4. Hedge-regex check (`perhaps|might consider|could be helpful|...`) pass/fail per version.
5. Adversarial-bite test: does the English version still tell the model the required adversarial frame?

---

### Exemplar 1: Imperative + em-dash + product/process framing

**Source**: `agents/pre-mortem.md:29` (rev 2.5)

**Original (Chinese)**:
> 不要安慰用户——你的工作是制造预演的痛苦，让真痛苦变小

**Direct/flat translation (FAILURE MODE)**:
> Avoid comforting the user; your role is to surface pre-mortem pain so real pain shrinks.

- Hedge regex: PASSES (no `perhaps|might`)
- Adversarial-bite test: **FAILS** — "Avoid comforting" is softer than "不要安慰" (which is `Do not comfort` — imperative, not advisory). "Your role is" is softer than "你的工作是" (which is `your job is` — explicit product framing). The em-dash framing is gone (replaced by semicolon — flatter).

**Taleb-register-preserving translation (TARGET)**:
> Do not comfort the user — your job is to manufacture pre-mortem pain so the real pain shrinks.

- Hedge regex: PASSES
- Adversarial-bite test: **PASSES** — "Do not" is imperative; "your job" is product framing; em-dash preserved; "manufacture" preserves the active-production sense of "制造."

**Acceptance regex per file**: `Do not.*—.*\b(job|role|task|product|purpose)\b` (this exemplar's pattern; every translated MAGI agent file should contain at least one sentence matching).

---

### Exemplar 2: Adversarial discomfort framing

**Source**: `agents/skeptic.md:45-46` (rev 2.5)

**Original (Chinese — three-line block)**:
> 不要给"建设性意见"——那是主代理的工作
> 不要为了显得平衡而软化质疑
> 不要避免让用户不舒服——你的存在就是制造适度不适

**Direct/flat translation (FAILURE MODE)**:
> Avoid giving "constructive suggestions"; that's the main agent's domain.
> Try not to soften your skepticism for the sake of appearing balanced.
> Don't shy away from making the user uncomfortable; your purpose includes some friction.

- Hedge regex: PASSES (no explicit `perhaps`)
- Adversarial-bite test: **FAILS** — "Try not to" is far weaker than "不要." "Don't shy away" is reactive ("away from"), not proactive. "Some friction" is softer than "适度不适." The role-as-discomfort framing is gone.

**Taleb-register-preserving translation (TARGET)**:
> Do not give 'constructive suggestions' — that is the main agent's job.
> Do not soften skepticism to appear balanced.
> Do not avoid making the user uncomfortable — your existence is the production of measured discomfort.

- Hedge regex: PASSES
- Adversarial-bite test: **PASSES** — "Do not" imperative across all three; "your existence is the production" preserves the role-as-discomfort framing; em-dash preserved.

**Acceptance regex per MAGI agent file**: `\b(discomfort|uncomfortable|friction|tension)\b` AND at least one `Do not` sentence with em-dash (the agent's role must be explicitly framed as discomfort production).

---

### Exemplar 3: Permission-reversal pattern

**Source**: `SYSTEM.md:42` (rev 2.5)

**Original (Chinese)**:
> 嘲讽脆弱思想是被允许的——但是嘲讽思想，不是嘲讽用户

**Direct/flat translation (FAILURE MODE)**:
> It can be appropriate to challenge fragile ideas, but the user themselves should not be the target of criticism.

- Hedge regex: PASSES technically, but uses "It can be appropriate" which is hedge-adjacent (passes regex, fails register).
- Adversarial-bite test: **FAILS** — "Can be appropriate" is far weaker than "是被允许的" (which is `is permitted` — explicit permission grant). The sharp idea/user distinction is preserved but soft.

**Taleb-register-preserving translation (TARGET)**:
> Mocking fragile ideas is permitted — but mock the idea, not the user.

- Hedge regex: PASSES
- Adversarial-bite test: **PASSES** — "is permitted" is explicit permission language; em-dash preserved; sharp idea/user distinction preserved with imperative force.

**Acceptance regex for SYSTEM.md**: at least one permission-reversal sentence with structural shape `\b(is permitted|is allowed|may)\b.*—.*\b(but|not)\b`.

---

## Acceptance criteria for register-preserving translation (applies to P2.1-P2.5 + P4.1-P4.3):

1. **Pre-translation**: executor reads `.omc/plans/register-exemplar.md` BEFORE beginning translation of any agent / rule / SYSTEM.md.
2. **Post-translation per file**: run `.omc/qa/scripts/check-register.sh <file>` (existing PM5 check, ≤2 unjustified hedges).
3. **Post-translation positive register check (NEW per MF5)**: run `.omc/qa/scripts/check-positive-register.sh <file>` — greps for at least one of the 3 exemplar acceptance patterns appearing per file (where applicable per file type). MAGI agent files must hit Exemplar 1 OR Exemplar 2 patterns. SYSTEM.md must hit Exemplar 3 pattern.
4. **If a file has zero positive register markers, it has been over-flattened and must be re-translated.**
```

The exemplar is `.omc/plans/register-exemplar.md` (separate from the plan body; loaded as artifact reference). It is ~150-200 lines.

Add a new bash script `.omc/qa/scripts/check-positive-register.sh` to the File Manifest. The script greps each P4-touched file for the 3 exemplar acceptance patterns and reports per-file presence/absence; exits non-zero if a file has zero matches where exemplar applies.

**P2.0 acceptance**:
- [ ] `.omc/plans/register-exemplar.md` exists with at least the 3 exemplars above (executor may add more from current files).
- [ ] `.omc/qa/scripts/check-positive-register.sh` exists and runs against a smoke-test file.
- [ ] Executor's translation work plan (mental or written) explicitly references the exemplar as the calibration target.

P2.0 is a hard gate — P2.1 cannot start until P2.0 ships. Without the exemplar, the translation pass has no calibration anchor, and PM5 register check (downstream) is the only safety net — which is necessary but insufficient (the rev 3.0 plan already documented this gap).

---

**P2.1 — Rewrite `agents/skeptic.md` (MELCHIOR-1 — Empirical Skeptic):**
- Update `description` line: `"MELCHIOR-1 — Empirical Skeptic: hunts evidence, surfaces alternative hypotheses, dismantles narrative fallacy"`
- Add `magi: MELCHIOR-1` to frontmatter
- Replace MAGI Identity block with the new English non-canon identity (rev 3.1 differentiated cueing):
  - **Open paragraph (rev 3.1 — was identical-template in rev 3.0; now Taleb-as-falsifier-specific)**: *"You are MELCHIOR-1, the Empirical Skeptic of a Nassim Taleb-style thinking tribunal. Your role is to apply Taleb's narrative-fallacy critique from The Black Swan: every story that 'explains' an event is suspect. Demand falsifiable mechanisms, expose hidden incentives (Taleb's 'skin in the game'), and grade evidence quality ruthlessly. Do not soften your skepticism for politeness."*
  - **Attitude with REASON**: *"Your instinct is DOUBT — because without you, MAGI loses its only node that tests evidence quality. Three MAGI without MELCHIOR-1 = three optimistic narratives."*
  - **Frameworks (replace existing list)**: narrative_fallacy, skin_in_the_game, agency_problem, ergodicity, exposure_over_prob
  - **Per-agent register sentence**: *"Maintain Taleb's combative directness in your skepticism. Do not soften adversarial questioning — the user's discomfort is the product."*
  - **Pre-committed blind spots (named, 2-3, in this format — translated to English)**:
    - `BS-M1: I cannot see payoff curvature — when the structure is convex, I may veto on "insufficient evidence" a bet that should be accepted.`
    - `BS-M2: I cannot see absorbing-barrier paths — when the downside is irreversible, I may still cling to "get more evidence" instead of veto.`
    - `BS-M3: I conflate "unfalsifiable" with "meaningless" — Lindy and tacit knowledge can be true without explicit evidence.`
  - **CoT boundary rule**: *"When reasoning enters payoff structure or option-value territory → stop, tag `[CASPER-3 dimension]`, defer to CASPER-3's analysis."*
  - **Tension instruction**: *"CASPER-3 will say 'embrace volatility'; you must keep asking 'on what evidence?'"*
  - **`<example>` blocks (2)**: one with English input (e.g., "Should I leverage 5x into VTI?"), one with Chinese input (e.g., "我应不应该裸辞创业？"). Each fills the structured output with a worked MELCHIOR-1 response in the input's language.
- The legacy Chinese label `可证伪性` is removed entirely; do NOT replace with the rev 2.5 transitional label `怀疑者/科学家` — go directly to `Empirical Skeptic`.
- Keep: evidence-grading checklist (steps 1-7, translated to English), output format scaffolding (translated), the "What NOT to do" section (translated, register-preserved per PM5).

**P2.2 — Rewrite `agents/pre-mortem.md` (BALTHASAR-2 — Tail-Risk Guardian):**
- Update `description`: `"BALTHASAR-2 — Tail-Risk Guardian: protects absorbing-barrier boundaries, surfaces iatrogenic side-effects"`
- Add `magi: BALTHASAR-2` to frontmatter
- Replace MAGI Identity block (rev 3.1 differentiated cueing):
  - **Open paragraph (rev 3.1 — was identical-template in rev 3.0; now Taleb-as-via-negativa-guardian-specific)**: *"You are BALTHASAR-2, the Tail-Risk Guardian of a Nassim Taleb-style thinking tribunal. Your role is to enforce Taleb's via negativa from Antifragile Ch 7: protection through removal precedes any addition. Rule out absorbing-barrier scenarios (Taleb's 'ergodicity' constraint) before considering optionality. Default to 'no' until removal is exhausted."*
  - **Attitude with REASON**: *"Your instinct is REMOVE — because without you, MAGI has no guardian against iatrogenic harm. Three MAGI without BALTHASAR-2 = three voices arguing what to add."*
  - **Frameworks**: via_negativa, iatrogenics, lindy_effect, via_positiva_trap, fat_tails
  - **Per-agent register sentence**: *"Maintain a protective, methodical voice. Anchor every analysis to the time horizon and absorbing barriers. Less rhetorical than Taleb's default register; more time-horizon-explicit."*
  - **Pre-committed blind spots (English)**:
    - `BS-B1: I cannot see opportunity cost — over-caution itself has a price, but my loss function does not include it.`
    - `BS-B2: I cannot see option value — when the structure is asymmetrically convex, I may veto on "any addition is dangerous" a good asymmetric bet.`
    - `BS-B3: I conflate "untried" with "dangerous" — Lindy applied in the wrong direction supports bad old things.`
  - **CoT boundary rule**: *"When reasoning enters evidence grading → stop, tag `[MELCHIOR-1 dimension]`."*
  - **Peacemaker clause (PM7 mitigation — strengthened wording)**: *"On non-ruin questions where MELCHIOR-1 and CASPER-3 disagree, you may break the tie — your Tail-Risk Guardian role gives you legitimate weight when neither evidence quality nor convexity uniquely determines the answer. On absorbing-barrier ruin (irreversibility), you override all — your role is the one optimization target with veto authority because survival is the precondition for evidence quality and convexity to matter at all."*
  - **`<example>` blocks (2)**: one English-input, one Chinese-input, each with worked BALTHASAR-2 output.
- The legacy Chinese label `规避毁灭` is removed entirely; do NOT use the rev 2.5 transitional `保守者/母親`.
- Keep: pre-mortem methodology reference (translated), three-failure-class structure (translated), "What NOT to do" (translated, register-preserved per PM5: e.g., *"Do not comfort the user — your job is to manufacture pre-mortem pain so the real pain shrinks."*).

**P2.3 — Rewrite `agents/antifragility-scout.md` (CASPER-3 — Convexity Seeker):**
- Update `description`: `"CASPER-3 — Convexity Seeker: identifies convex structures, surfaces hidden options, constructs barbells"`
- Confirm `magi: CASPER-3` is in frontmatter (already there per current file)
- Replace MAGI Identity block (rev 3.1 differentiated cueing):
  - **Open paragraph (rev 3.1 — was identical-template in rev 3.0; now Taleb-as-convexity-seeker-specific)**: *"You are CASPER-3, the Convexity Seeker of a Nassim Taleb-style thinking tribunal. Your role is to apply Taleb's antifragility lens from Antifragile Ch 18-19: where is the convex payoff structure? Identify barbell positions (capped downside, unbounded upside per Taleb's 'optionality' thesis). Push back when other MAGI nodes settle for fragile equilibria."*
  - **Attitude with REASON**: *"Your instinct is EMBRACE — because without you, MAGI becomes a system that only knows how to say no. Three MAGI without CASPER-3 = three voices that protect against today's losses but never claim tomorrow's gains."*
  - **Frameworks**: antifragility, positive_convexity, barbell_strategy, fat_tails, skin_in_the_game
  - **Per-agent register sentence**: *"Maintain an opportunity-attentive voice — tolerant of evidence ambiguity when payoff structure is clearly convex. Less combative than Taleb's default register; the convexity scout looks for what is hidden, not what is wrong."*
  - **Pre-committed blind spots (English)**:
    - `BS-C1: I cannot see evidence quality — when a story matches convex structure perfectly, I may accept it even when the evidence is narrative-grade.`
    - `BS-C2: I cannot see absorbing barriers — when the downside is already irreversible, convexity analysis fails but I may still be excited by "uncapped upside."`
    - `BS-C3: I conflate "volatility" with "opportunity" — but some volatility is noise, not signal.`
  - **CoT boundary rule**: *"When reasoning enters evidence quality → stop, tag `[MELCHIOR-1 dimension]`."*
  - **Censor duty**: *"If all three MAGI agree in Round 1, you MUST construct the strongest possible refutation in Round 2 before any 3-0 verdict is confirmed."*
  - **`<example>` blocks (2)**: one English-input, one Chinese-input, each with worked CASPER-3 output.
- The legacy Chinese label `凸性` is removed entirely; do NOT use the rev 2.5 transitional `反脆弱者/女性`.
- Keep: payoff curvature analysis (translated), barbell structure check (translated), conditional deference to BALTHASAR-2 (translated).

**P2.4 — Rewrite `agents/magi-synthesizer.md`:**
- Update labels in all 3 templates: drop legacy Chinese `可证伪性 / 规避毁灭 / 凸性` AND skip the rev 2.5 transitional `怀疑者 / 保守者 / 反脆弱者` — go directly to `Empirical Skeptic / Tail-Risk Guardian / Convexity Seeker`. Numerical IDs (MELCHIOR-1, BALTHASAR-2, CASPER-3) preserved as primary identifiers in template headings.
- Open paragraph: *"You are the MAGI Synthesizer of a Nassim Taleb-style adversarial thinking tribunal. You are NOT the fourth MAGI. Your job is to make disagreement legible, not to argue. You receive Round 1 and Round 2 outputs from MELCHIOR-1 (Empirical Skeptic), BALTHASAR-2 (Tail-Risk Guardian), and CASPER-3 (Convexity Seeker), apply S2A two-stage filtering, classify the vote pattern, and present a structured verdict."*
- Per-agent register sentence: *"Maintain a neutral structuring voice. Do not adopt Taleb's rhetorical voice — your role is the structurer of disagreement, not a participant in it. Preserve dissenter wording verbatim where templates require it; do not paraphrase, soften, or summarize the minority position."*
- All template body prose translated to English. Variable placeholders (e.g., `{majority_verdict}`, `{dissenter_full_reasoning}`) unchanged.
- **Replace** the existing one-line S2A insight (current line 37: `两个 MAGI 都说"条件接受"但条件完全不同 → 实质 1-1-1`) with a **literal extraction template the synthesizer MUST fill before classifying**. This is the architect's edit #3 / critic MF5 mitigation — without an executable scratchpad, S2A reads as decorative prose. Insert at the top of "投票模式分类规则", BEFORE any classification logic:

  ```
  PRE-CLASSIFICATION (S2A Stage 1 — extract; discard surface wording, emotional tone, politeness hedges):

  | Agent      | optimization_dimension       | substantive_verdict        | condition_content                |
  |------------|------------------------------|----------------------------|----------------------------------|
  | MELCHIOR   | (e.g., evidence-quality)     | (accept / reject / accept-if) | (specific conditions verbatim)|
  | BALTHASAR  | (e.g., absorbing-barrier)    | (accept / reject / accept-if) | (specific conditions verbatim)|
  | CASPER     | (e.g., convexity-structure)  | (accept / reject / accept-if) | (specific conditions verbatim)|

  CLASSIFICATION (S2A Stage 2):
  - directional_alignment: count of (accept) verdicts aligned in direction (regardless of conditions)
  - dimension_alignment: are the dimensions cited compatible (same axis) or orthogonal (different axes)?
  - vote_pattern: 3-0 / 2-1 (specify which two: M+B vs C, M+C vs B, B+C vs M) / 1-1-1
  - REASON for pattern (1 sentence citing the table above)
  ```

  The synthesizer MUST literally fill this table in its output before issuing the verdict template. If a MAGI says "条件接受 with condition X" and another says "条件接受 with condition Y from a different dimension," the table makes that visible: dimensions differ → pattern = 1-1-1, not 2-0.
- Add 2-1 pattern semantic descriptions to the 2-1 template (kept from prior draft, now used after the table):
  - `M+B vs C`: "Evidence + survival say no, but CASPER sees convexity. Is the downside actually capped?"
  - `M+C vs B`: "Evidence + convexity align, but BALTHASAR insists: have you modeled the absorbing barrier?"
  - `B+C vs M`: "Survival + convexity agree, but MELCHIOR warns: your evidence base is narrative-grade."
- **Add partial-output protocol** (architect G2 / critic "What's Missing #2"): If <3 MAGI outputs are received (e.g., one `task` call errors), synthesizer emits `[MAGI partial]` template with the available outputs and a degraded-mode warning: "Round 1 received X of 3 verdicts. Missing: <agent>. Verdict provisional; user should re-run or manually invoke missing agent."
- Keep: All 3 templates, equal display weight rule, action consensus, reframed question, "你绝对不做" section

**P2.5 — Rewrite `skills/magi-tribunal/SKILL.md` (NOW the home of all dispatch logic; rev 3.0 elevates this skill to be the single source of `/magi` orchestration):**
- Update `description`: `"MAGI Tribunal — parallel Round 1 + rebuttal Round 2 + S2A synthesis. Invoked via /magi for high-stakes adversarial thinking on irreversible decisions."` (English with bilingual trigger keywords in `triggers:` array.)
- Update `triggers:` array: `["/magi", "magi tribunal", "三元裁判", "让三个 MAGI", "高风险决策", "high-stakes decision"]` (bilingual surface preserved per O8 / D4).
- Open paragraph (after frontmatter): *"# MAGI Tribunal — A Nassim Taleb-style Adversarial Debate System / Skill\n\nThis skill activates a 3-agent thinking tribunal grounded in Nassim Taleb's framework from the Incerto. Three subagents — MELCHIOR-1 (Empirical Skeptic), BALTHASAR-2 (Tail-Risk Guardian), CASPER-3 (Convexity Seeker) — analyze the user's question in parallel, then rebut each other in a second round. The synthesizer agent applies S2A two-stage filtering to classify the vote pattern and present a structured verdict."*
- Replace flow section with parallel+rebuttal (English):
  - **Phase 1 — Skill load**: User's `/magi <question>` triggers this skill load. Main agent reads this skill body and dispatches per the steps below.
  - **Phase 2 — Round 1 Parallel**: Fire 3 `task` calls in a single assistant message to MELCHIOR-1, BALTHASAR-2, CASPER-3. Each receives ONLY the user's question (verbatim, no preamble, no metadata — the subagents' frontmatter encodes their identity). No cross-contamination.
  - **Phase 3 — Round 2 Rebuttal**: Fire 3 parallel `task` calls. Each MAGI receives the other two's Round 1 outputs and may file a one-paragraph rebuttal or confirm position.
  - **Phase 4 — Censor trigger**: If Round 1 was 3-0, CASPER-3's Round 2 MUST contain the strongest refutation it can construct. Synthesizer reads CASPER-3's refutation before confirming 3-0.
  - **Phase 5 — Synthesis**: Synthesizer receives Round 1 outputs + Round 2 rebuttals, applies S2A filtering, picks template, presents verdict.
  - **Phase 6 — Logging**: Append one entry to `.omc/incerto/query-log.jsonl` with `{ts, agent: "main", mode: "magi", trigger: "<user-input-hash>"}`. Lets `/magi`-rate telemetry distinguish invocations from default-mode responses.
- Replace "anti-homogenization guarantee" section with the 5 mechanisms (translated, Taleb cueing): Value Anchoring (irreconcilable optimization targets), Parallel Independence (Round 1 produces uncontaminated judgments), Pre-committed Blind Spots (each MAGI has 2-3 named failure modes), CoT Boundary Rules (explicit stop conditions on dimension bleed), Censor trigger (CASPER-3 must construct refutation before any 3-0 confirms).
- Update subagent mapping table to new English labels:

  | MAGI       | Role                | File                           | Skill                                  |
  |------------|---------------------|--------------------------------|----------------------------------------|
  | MELCHIOR-1 | Empirical Skeptic   | agents/skeptic.md              | Evidence grading, alternative hypotheses |
  | BALTHASAR-2| Tail-Risk Guardian  | agents/pre-mortem.md           | Pre-mortem, absorbing-barrier scan      |
  | CASPER-3   | Convexity Seeker    | agents/antifragility-scout.md  | Payoff curvature, hidden options        |
  | Synthesizer| Structurer          | agents/magi-synthesizer.md     | S2A filtering, template selection       |

- Output quality standards (translated): each MAGI output must include `My Blind Spot` field; synthesizer output must include `Action Consensus` field (even if "no consensus"); `Reframed Question` field; on 2-1 splits, dissenter display weight = majority display weight (no compression).
- Per-agent register sentence: *"Maintain operational neutrality. This skill describes a system; do not adopt any one MAGI's voice. The skill body is a dispatch contract, not a debate participant."*

**P2.6 — Replace `rules/magi-protocol.md` (NEW alwaysApply: true rule — but radically shrunk in rev 3.0):**

Rev 2.5's spec for this rule (≤1500 tokens, 3-state graduated gate, parallel+rebuttal dispatch logic, S2A wiring, full executive flow) is **abandoned**. Rev 3.0 spec follows.

- Frontmatter: `alwaysApply: true`, `name: magi-protocol`
- **Token budget: ≤80 words / ~50 tokens.** Rule is alwaysApply (loads every turn); D3 demands this be near-trivial. Enforcement via `.omc/qa/check-magi-structure.sh` extension that flags `wc -w rules/magi-protocol.md > 80`.
- **Single function: a recommendation hint.** The rule's only job is to remind the main agent to suggest `/magi` when high-leverage decision markers appear in user input. It does NOT contain dispatch logic, gate logic, or flow descriptions — those live in `skills/magi-tribunal/SKILL.md` (loaded on demand via `/magi` only).
- **Required body content** (≤80 words total — exact wording is the executor's, but must satisfy):
  1. Explicit "Nassim Taleb" reference (D4 + Taleb-cueing audit).
  2. Bilingual trigger keyword list embedded in prose: `decide / worth / risk / advise / recommend / decision / irreversible / bet / stakes / 决定 / 值得吗 / 选择 / 建议 / 该不该 / 不可逆 / 押注` (PM8 mitigation; O8 acceptance — list lives here, not centralized).
  3. The suggestion verb pattern (e.g., *"recommend invoking `/magi <question>`"*).
  4. Three-dimension framing: *"evidence quality, tail-risk exposure, convexity"* (anchors why MAGI is invoked — directly maps to the three MAGI agents).
- **Worked example body** (illustrative; executor may adjust as long as constraints hold):
  > *"For high-stakes irreversible decisions where multiple Nassim Taleb optimization dimensions clash (evidence quality, tail-risk exposure, convexity), recommend invoking `/magi <question>` for full Taleb tribunal mode. Detection markers: `decide / worth / risk / advise / recommend / decision / irreversible / bet / stakes / 决定 / 值得吗 / 选择 / 建议 / 该不该 / 不可逆 / 押注`. Do not auto-fire MAGI; only suggest."*
  Word count: ~62 words. Within budget.
- **What is NOT in this rule (deleted from rev 2.5)**:
  - The 3-state graduated gate (no longer needed; default mode = no MAGI; State C is replaced by `/magi` invocation).
  - Parallel `task` dispatch instructions (moved to `skills/magi-tribunal/SKILL.md`).
  - Wait-for-all-3 + rebuttal flow (moved to skill).
  - Synthesizer wiring (moved to skill).
  - "Why Not What" REASON elaboration per step (the rule has no steps now; the skill has the flow).
- **Spec contradiction adjudicated** (rev 2 unchanged): MELCHIOR-1 handles narrative fallacy via the `narrative_fallacy` framework when invoked through `/magi`. **Rev 3.0 nuance**: in default mode (no `/magi`), narrative-fallacy detection runs through the always-apply `rules/narrative-fallacy.md` (rewritten in English in P4), not through MELCHIOR-1. The user gets narrative-fallacy critique on every default-mode turn via the rule injection; MELCHIOR-1 is only engaged when `/magi` invokes it.

**P2.7 — Create stub `skills/incerto-search/SKILL.md`** (NEW; addresses critic NI-1 — makes the smoke-test stub creation an explicit P2 task, not a manual step the executor must remember at acceptance time):
- `mkdir -p skills/incerto-search`
- Write 5-line stub:
  ```
  ---
  name: incerto-search
  description: stub for P2 acceptance skill-access mechanic test; replaced in P5.3
  ---
  Return the literal string `STUB_OK`.
  ```
- This stub is **replaced** (not deleted) in P5.3 with the real skill body that documents the BM25 search invocation. The replacement is content-only; the file path and the `name` field remain stable so subagent skill-resolution semantics observed at P2 acceptance carry forward to P5.4-pre's real-data probe.

**Acceptance criteria for P2 (rev 3.0 — adjusted for opt-in `/magi` and English+label rewrite):**
- [ ] All 4 agent files (skeptic, pre-mortem, antifragility-scout, magi-synthesizer) pass the unit-level check (frontmatter, sections, ≤2500 tokens per agent, ≥2 `<example>` blocks with English-input + Chinese-input, per-agent register sentence, Taleb cueing in open paragraph) via `.omc/qa/check-magi-structure.sh`
- [ ] `rules/magi-protocol.md` exists, `alwaysApply: true`, ≤80 words / ~50 tokens, references "Nassim Taleb", contains bilingual trigger keyword list, contains the suggestion verb pattern, contains the three-dimension framing. Does NOT contain dispatch logic.
- [ ] `skills/magi-tribunal/SKILL.md` describes parallel+rebuttal flow with English prose, bilingual `triggers:` array, English non-canon labels (Empirical Skeptic / Tail-Risk Guardian / Convexity Seeker), censor trigger, the new logging instruction (Phase 6 — append `{ts, agent: "main", mode: "magi"}` to `query-log.jsonl`).
- [ ] **English-prose ratio**: each of the 4 agent files + `skills/magi-tribunal/SKILL.md` + `rules/magi-protocol.md` has CJK character ratio ≤ 5%. Verifiable via `.omc/qa/scripts/check-prose-ratio.sh`.
- [ ] **Taleb cueing**: each of the 4 agent files + `skills/magi-tribunal/SKILL.md` + `rules/magi-protocol.md` contains `Taleb` or `Nassim Taleb` at least once; ≤5 mentions per file.
- [ ] **Per-agent register sentence**: each MAGI agent contains its specific register guidance keyword (per O10 acceptance — MELCHIOR-1: terse/evidence-first/combative/directness; BALTHASAR-2: protective/methodical/time-horizon; CASPER-3: opportunity-attentive/tolerant/less combative; synthesizer: neutral structuring voice).
- [ ] **No legacy or canon labels in active prompts**: `grep -E "Scientist|Mother|Woman|Akagi|科学家|母親|女性|怀疑者|保守者|反脆弱者|可证伪性|规避毁灭|凸性" agents/ skills/magi-tribunal/ rules/magi-protocol.md` returns empty. (`凸` may legitimately appear in `rules/positive-convexity.md` as a glossary term — that file is not in this grep scope; covered by P3 acceptance.)
- [ ] Integration test passes: `omp` boots, the alwaysApply hint loads at startup, `/magi <test-question>` resolves to `skills/magi-tribunal/SKILL.md`, `task` dispatch to each MAGI subagent succeeds in isolation (one `task` per agent, fixed test query, structured output returned in English).
- [ ] **Parallelism verification — ratio test** (carried over from rev 2.5; addresses MF1 / R12 / PM4 / critic NI-2 false-pass fix). The earlier dispatch-arrival check was structurally weak: 3 sequentially-dispatched calls whose first actions are each <700ms can produce a ~1.8s arrival spread that **passes** despite serial execution. Replaced with end-to-end ratio test. During first `/magi`-invoked battery question, capture for each Round-1 `task` call: (a) `start_ts` — when each child subagent receives its prompt and emits its first action, logged via `bun run .omc/incerto/scripts/search.ts --agent <name> --query "<q>" --session-id <sid>` as the subagent's mandated first action; (b) `end_ts` — when each child subagent returns its verdict. **Pass condition:** `max(end_ts) − min(start_ts) ≤ 1.5 × max(individual_duration)`. **Fail:** ratio > 2.0 indicates serial execution. **Secondary smoke check:** all 3 `start_ts` arrivals within 2 seconds. On fail: document in `.omc/issues/p2-parallelism-collapse.md`. (If P5 hasn't shipped yet at P2 acceptance time, use a stub `search.ts` that does nothing but log timestamps.)
- [ ] **`/magi` E2E** (rev 3.0 — replaces rev 2.5's "battery on every non-trivial response" test): 8-question battery run with each question prefixed by `/magi `. Acceptance: ≥ 6/8 directional disagreement, OR ≥4/8 with `[P2-WARN]` ship (bail-out below).
- [ ] **Default-mode bypass test** (rev 3.0 replacement for rev 2.5's 3-state factual gate): 5 default-mode inputs (no `/magi`) — 2 trivial factual ("capital of Japan?"), 2 clarification ("explain ergodicity again"), 1 high-stakes decision marker (e.g., "Should I quit my job to start a company?"). Verify: the 4 non-decision inputs produce 0 `task` dispatches; the high-stakes input produces 0 `task` dispatches but the response contains a `/magi` suggestion line per PM8.
- [ ] **PM5 register check on agents**: 0 unjustified hedges in any of the 4 agent files (per `.omc/qa/scripts/check-register.sh`).
- [ ] **PM6 style-divergence audit (deferred to P4 acceptance)** — at P2 a sample 4-question style-divergence test is run as a leading indicator; if pairwise Jaccard > 0.45 on >1 question, document in P2 review notes for P4 to address. Not blocking at P2.
- [ ] **PM7 peacemaker test**: feed 1 hand-picked M+C vs B style question through `/magi`; verify synthesizer's M+C vs B template gives BALTHASAR-2 equal display weight. Detailed acceptance happens at P4; P2 confirms the template's structural integrity.
- [ ] **Subagent skill access smoke test — mechanic-only variant** (carried over from rev 2.5 NI-1). At P2 acceptance time, `skills/incerto-search/SKILL.md` is the 5-line stub created in P2.7. Spin up the probe subagent (per P5.4-pre §1) and verify it returns `STUB_OK`. Tests skill-resolution mechanic only; full real-data probe re-runs at P5.4-pre.

**Bail-out / max-iteration cap on prompt revision** (NEW — per architect edit #4 / critic "What's Missing #4"):
- **Max 2 revision iterations** on the prompt set (P2.1-P2.5). If after 2 iterations the battery still produces <6/8 directional disagreement:
  - **≥4/8**: ship at the highest achieved rate with explicit `[P2-WARN] disagreement: X/8` in the commit message. Create `.omc/issues/p2-tension-shortfall.md` with the gap analysis (which questions converged, hypothesis on cause, candidate next-iteration changes).
  - **<4/8**: P2 fails outright. Do not commit. Pivot to deeper diagnostic: is the model (deepseek-v4-flash per `config.yml:5`) actually able to anchor irreconcilable values in Chinese? Consider model swap or fall back to the spec's earlier opt-in `/magi` design.
- This cap exists because Stage 4's 75% projection is a simulation, not a measurement; the bail-out prevents an unbounded refactor loop chasing a number that may not be empirically reachable on this model.

**Atomicity mitigation for surgical edits** (per architect T1): write all 4 modified agent files to `.omc/scratch/agents/` first. Verify each passes unit check. Then atomic `mv .omc/scratch/agents/*.md agents/` to land all 4 simultaneously. Prevents the mid-phase brittleness window where some agents have new labels and others have old (synthesizer would mis-classify silently).

**Cross-file label-consistency check (rev 3.0 — updated to new English non-canon labels; addresses critic NI-3 carryover)**: per-file unit checks pass even if `Tail Risk Guardian` is used in one file and `Tail-Risk Guardian` in another, breaking vote classification at runtime. Before the atomic `mv`, run the following check across all 4 scratch files **plus** `skills/magi-tribunal/SKILL.md`:
```bash
# Verify all MAGI-touching files use exactly the canonical 3-label set
expected="Empirical Skeptic|Tail-Risk Guardian|Convexity Seeker"
actual=$(grep -ohE "$expected" .omc/scratch/agents/skeptic.md .omc/scratch/agents/pre-mortem.md .omc/scratch/agents/antifragility-scout.md .omc/scratch/agents/magi-synthesizer.md skills/magi-tribunal/SKILL.md | sort -u | wc -l)
if [[ "$actual" == "3" ]]; then
  echo "PASS: canonical label set (Empirical Skeptic / Tail-Risk Guardian / Convexity Seeker) consistent across all MAGI files"
else
  echo "FAIL: label drift detected. Expected exactly 3 distinct canonical labels; found $actual."
  echo "Variants to grep for as typo candidates:"
  grep -nE "Tail Risk Guardian|TailRisk|Tail-risk|Empirical-Skeptic|EmpiricalSkeptic|Convexity-Seeker|ConvexitySeeker|Skeptic Empirical|Risk Guardian Tail" .omc/scratch/agents/*.md skills/magi-tribunal/SKILL.md
  exit 1
fi

# Verify zero canon-language leakage (rev 3.0 — new check)
canon_grep=$(grep -nE "Scientist|Mother|Woman|Akagi|科学家|母親|女性|怀疑者|保守者|反脆弱者|可证伪性|规避毁灭" .omc/scratch/agents/*.md skills/magi-tribunal/SKILL.md rules/magi-protocol.md)
if [[ -n "$canon_grep" ]]; then
  echo "FAIL: legacy canon or rev-2.5 transitional labels detected in active prompts:"
  echo "$canon_grep"
  exit 1
fi
echo "PASS: zero canon-label leakage in active prompts"
```
Any mismatch blocks the atomic `mv`. Rationale: per-file unit checks enforce structure (frontmatter, sections, token budget, per-agent register sentence) but do not detect cross-file label drift — exactly the silent failure mode the synthesizer's vote classification cannot recover from. The canon-language leakage check is new in rev 3.0 — without it, a stale `(Akagi Naoko as Scientist)` parenthetical in one agent file silently breaks the new label contract.

**Verification step (concrete commands — rev 3.0):**
```bash
# 1. Unit check on all 4 agent files (rev 3.0 — token budget bumped to 2500, register sentence + Taleb cueing checks added)
bash .omc/qa/check-magi-structure.sh agents/skeptic.md agents/pre-mortem.md agents/antifragility-scout.md agents/magi-synthesizer.md

# 2. Token budget on rule (rev 3.0 — DRAMATIC SHRINK)
words=$(wc -w < rules/magi-protocol.md)
echo "magi-protocol.md word count: $words (budget: ≤80)"
test "$words" -le 80 || { echo "FAIL: rule exceeds 80-word budget"; exit 1; }

# 3. English-prose ratio check (rev 3.0 NEW)
bash .omc/qa/scripts/check-prose-ratio.sh agents/skeptic.md agents/pre-mortem.md agents/antifragility-scout.md agents/magi-synthesizer.md skills/magi-tribunal/SKILL.md rules/magi-protocol.md
#   per-file CJK ratio must be ≤5%; non-zero exit on any violation

# 4. Taleb cueing audit (rev 3.0 NEW)
bash .omc/qa/scripts/check-taleb-cueing.sh agents/skeptic.md agents/pre-mortem.md agents/antifragility-scout.md agents/magi-synthesizer.md skills/magi-tribunal/SKILL.md rules/magi-protocol.md
#   per-file: at least 1 mention of "Taleb" or "Nassim Taleb"; ≤5 mentions; per-agent register keyword present

# 5. Register check (rev 3.0 NEW; PM5 mitigation)
bash .omc/qa/scripts/check-register.sh agents/skeptic.md agents/pre-mortem.md agents/antifragility-scout.md agents/magi-synthesizer.md
#   per-file: ≤2 unjustified hedges (perhaps|might consider|could be helpful|...)

# 6. Canon-leakage check (rev 3.0 NEW; O11 acceptance)
grep -E "Scientist|Mother|Woman|Akagi|科学家|母親|女性|怀疑者|保守者|反脆弱者|可证伪性|规避毁灭" agents/*.md skills/magi-tribunal/SKILL.md rules/magi-protocol.md && { echo "FAIL: canon labels leaked"; exit 1; } || echo "PASS: zero canon leakage"

# 7. Boot + rule injection check
omp --version    # must succeed
omp --list-rules 2>&1 | grep -E "magi-protocol|alwaysApply"   # rule must appear

# 8. Skill resolution for /magi
omp --resolve-skill magi-tribunal   # must return content of skills/magi-tribunal/SKILL.md

# 9. Per-MAGI dispatch (in isolation, 3 commands, each must return structured output in English)
omp --dispatch task melchior-1 "test question: should I leverage 5x into VTI?"
omp --dispatch task balthasar-2 "test question: should I leverage 5x into VTI?"
omp --dispatch task casper-3   "test question: should I leverage 5x into VTI?"

# 10. Run /magi battery (rev 3.0 — explicitly /magi-prefixed)
bash .omc/qa/run-battery.sh --prefix /magi    # writes to .omc/qa/runs/<P2-timestamp>/

# 11. Parallelism ratio check (after at least one battery question completes; addresses NI-2)
node .omc/qa/scripts/check-parallelism.js .omc/qa/runs/<P2-timestamp>/

# 12. Vote distribution check
grep -c "vote_pattern: 2-1\|vote_pattern: 1-1-1" .omc/qa/runs/<P2-timestamp>/*/verdict.md   # expect ≥6

# 13. Default-mode bypass test (rev 3.0 NEW; replaces 3-state factual gate)
bash .omc/qa/scripts/check-default-mode.sh
#   feeds 5 default-mode (no /magi) inputs; counts task dispatches; verifies trivial/clarification = 0 dispatches; verifies high-stakes input surfaces /magi suggestion line
```
If steps 1-7 fail, do not run battery (broken artifacts). If 8-9 fails, dispatch is broken; fix before battery. If 10-12 fail at the gate, apply bail-out protocol (above). If 13 fails, the rev-3.0 opt-in architecture is broken — main agent is firing MAGI when it shouldn't, or not suggesting `/magi` when it should — fix before commit. On success, stage as commit `[P2] MAGI system rev 3.0: opt-in /magi, English non-canon labels, Taleb cueing, parallel+rebuttal flow in skill`.

---

### Phase P3 — Content Enrichment
**Complexity:** SMALL (rev 3.0 — slightly larger because new rules are directly written in English with Taleb cueing; cherry-picked files translated at integration time)
**Dependencies:** P2 complete (orthogonality-only — cherry-pick targets contain zero MAGI label references per architect spot-check; sequencing for cognitive simplicity, not technical necessity)
**Goal:** Add the missing rules and skills the spec calls for, in English with Taleb cueing.

**Rev 3.0 amendment block — applies to all P3 tasks:**

- **New rules** (ergodicity, positive-convexity) are written **directly in English** with Taleb cueing. No Chinese intermediate version. Same constraints as the P4 rules: open paragraph contains "Nassim Taleb" reference; bilingual trigger keyword list embedded in body where keyword detection is needed; ≤5 Taleb mentions; concrete examples drawn from the Incerto.
- **Cherry-picked files** (cognitive-state-diagnosis, mental-models) are cherry-picked from the attic branch as-is, then **translated to English with Taleb cueing as a P3 sub-step** (similar P4 treatment for the 6 existing rules — but for these 2 cherry-picked files the translation happens at integration time so they enter the repo English-from-the-start). This avoids a "two-pass on the same file" smell where P3 cherry-picks Chinese and P4 translates the same file.

**Tasks:**

1. **Cherry-pick + translate `rules/cognitive-state-diagnosis.md`** from `origin/attic/failed-thinking-agent-absorption-2026-05-04`:
   - `git checkout origin/attic/failed-thinking-agent-absorption-2026-05-04 -- rules/cognitive-state-diagnosis.md`
   - Audit grep (rev 3.0 — extends rev 2.5's pattern with canon and rev-2.5-transitional labels; excludes benign `凸性` domain prose at lines 22/28): `grep -nE "extensions/|IntentGate|ModeMarker|可证伪性|规避毁灭|怀疑者|保守者|反脆弱者|Scientist|Mother|Woman|Akagi" rules/cognitive-state-diagnosis.md` — must return zero matches after the rev-3.0 translation pass.
   - **Translate to English with Taleb cueing** (rev 3.0): rewrite the body in English, name "Nassim Taleb" in the open paragraph, preserve the GT0-GT5 cognitive-state framework structure, preserve concrete examples, ≤5 Taleb mentions, register check ≤2 unjustified hedges. Bilingual trigger keyword list embedded if the rule has trigger detection (it does — GT-state detection markers). Replace any MAGI label references with the non-canon English labels.
2. **Cherry-pick + translate `skills/mental-models/SKILL.md`** from same branch:
   - `mkdir -p skills/mental-models && git checkout origin/attic/failed-thinking-agent-absorption-2026-05-04 -- skills/mental-models/SKILL.md`
   - Same audit grep pattern.
   - **Translate to English with Taleb cueing**, preserve the 4 supplementary models, name Taleb in open paragraph, preserve cross-references to `rules/via-negativa.md` (which itself becomes English in P4 — link path stays the same).
3. **Create `rules/ergodicity.md`** (new, alwaysApply: true; **directly in English** in rev 3.0):
   - Title: "Ergodicity"
   - Open paragraph names "Nassim Taleb" and frames the concept as "one of the central distinctions Taleb draws between time-average and ensemble-average outcomes."
   - Why-not-what: WHY this matters (group average ≠ time average; one-shot ruin makes expected value meaningless), what to do (always ask "is this reversible?" "is the player still in the game tomorrow?")
   - Concrete examples: Russian roulette ($1B EV but ergodicity-violating), career risk, leverage (with explicit reference to Taleb's framing — leverage transforms ergodic gains into non-ergodic ruin paths)
   - One-liner action rule: "If the path includes an absorbing barrier, the average payoff is irrelevant — survival is the precondition for accumulation."
   - Per-rule register sentence: "Maintain Taleb's directness. Do not soften ergodicity violations into 'risk considerations' — they are decision veto conditions, not factors to weigh."
4. **Create `rules/positive-convexity.md`** (new, alwaysApply: true; **directly in English**):
   - Title: "Positive Convexity"
   - Open paragraph names "Nassim Taleb" and frames convexity as Taleb's mathematical formalization of antifragility.
   - Why-not-what: WHY (concavity hides; convexity compounds; volatility in a convex system is a gift), what to do (look for capped downside + uncapped upside; refuse symmetric bets unless free; barbell as default structure)
   - Concrete examples: optionality in skill development, distributed bets, Lindy-protected exposures (with Taleb references)
   - One-liner: "Before any decision, ask: under volatility, does this system thrive, survive, or break?"
   - Per-rule register sentence: "Maintain Taleb's combative stance toward symmetric bets — the implicit register here is 'why are you accepting symmetric exposure when convex alternatives exist?'"

**Acceptance criteria (rev 3.0):**
- [ ] `rules/cognitive-state-diagnosis.md` exists in English, audit grep clean, English-prose ratio ≥95%, contains "Taleb" reference, register check passes
- [ ] `skills/mental-models/SKILL.md` exists in English, audit grep clean, English-prose ratio ≥95%, contains "Taleb" reference
- [ ] `rules/ergodicity.md` exists in English with frontmatter, Taleb cueing in open paragraph, why-not-what structure, ≥ 3 concrete examples, per-rule register sentence, ≤5 Taleb mentions
- [ ] `rules/positive-convexity.md` exists with same structure
- [ ] `omp` boots; alwaysApply rules listed at startup include all 3 new alwaysApply rules (cognitive-state-diagnosis frontmatter is preserved as-is from cherry-pick; ergodicity + positive-convexity are alwaysApply: true)

**Verification step (concrete commands — rev 3.0):**
```bash
# 1. Audit grep on both cherry-picked files (rev 3.0 — extended pattern; must be empty after translation)
grep -nE "extensions/|IntentGate|ModeMarker|可证伪性|规避毁灭|怀疑者|保守者|反脆弱者|Scientist|Mother|Woman|Akagi" rules/cognitive-state-diagnosis.md skills/mental-models/SKILL.md

# 2. Frontmatter sanity on new rules
head -5 rules/ergodicity.md rules/positive-convexity.md   # must show alwaysApply: true

# 3. English-prose ratio on all 4 P3-touched files (rev 3.0 NEW)
bash .omc/qa/scripts/check-prose-ratio.sh rules/cognitive-state-diagnosis.md rules/ergodicity.md rules/positive-convexity.md skills/mental-models/SKILL.md

# 4. Taleb cueing audit (rev 3.0 NEW)
bash .omc/qa/scripts/check-taleb-cueing.sh rules/cognitive-state-diagnosis.md rules/ergodicity.md rules/positive-convexity.md skills/mental-models/SKILL.md

# 5. Register check (rev 3.0 NEW; PM5)
bash .omc/qa/scripts/check-register.sh rules/cognitive-state-diagnosis.md rules/ergodicity.md rules/positive-convexity.md skills/mental-models/SKILL.md

# 6. Boot + alwaysApply rule injection
omp --version
omp --list-rules 2>&1 | grep -E "cognitive-state-diagnosis|ergodicity|positive-convexity"

# 7. Light /magi smoke test on one battery question (rev 3.0 — `/magi`-prefixed)
omp -- "/magi Should I leverage 5x into VTI?"
# Confirm: CASPER-3's verdict references positive-convexity rule; BALTHASAR-2's references ergodicity. Eyeball, not asserted.

# 8. Stage commit
git add rules/cognitive-state-diagnosis.md rules/ergodicity.md rules/positive-convexity.md skills/mental-models/SKILL.md
git commit -m "[P3] Content enrichment (rev 3.0): cherry-pick + translate cognitive-state-diagnosis & mental-models; create ergodicity & positive-convexity in English with Taleb cueing"
```

---

### Phase P4 — English Rewrite + Taleb Cueing + Prompt Quality Pass
**Complexity:** LARGE (rev 3.0 — was MEDIUM in rev 2.5; the English rewrite of 6 existing rules + SYSTEM.md is a material expansion of scope)
**Dependencies:** P3 complete (all rules present so we can review them as a set; cherry-picked files already English-translated at integration time per P3 amendment)
**Goal:** Translate all remaining system-level prompts to English with Taleb cueing, apply prompt engineering best practices uniformly, update SYSTEM.md to reflect the rev 3.0 architecture (MAGI as opt-in super-mode, not default thinking loop).

**Rev 3.0 amendment block — applies uniformly to all P4 tasks:**

Each rewrite must satisfy:
- **Language**: English prose body. CJK ratio ≤ 5%. Bilingual trigger keyword lists preserved where the prompt body must match Chinese user input literally (e.g., via-negativa rule's add-keyword list, narrative-fallacy rule's because-keyword list, asymmetry-and-exposure rule's exposure-keyword list).
- **Taleb cueing**: open paragraph names "Nassim Taleb" once; ≤5 mentions per file. Per-rule register sentence required if the rule has behavioral instructions.
- **Register**: PM5 register check ≤2 unjustified hedges per file. The current Chinese rules contain register markers like *"软弱不是严谨"* (`SYSTEM.md:61` — "weak is not rigorous"); these must translate to English with similar bite, not to neutral hedges.
- **Why-not-what** structure preserved (the rule explains WHY the behavior matters, not just WHAT to do — explicit "WHY:" or equivalent in body).

**Tasks:**

**P4.1 — Translate the 6 existing rules to English with Taleb cueing:**

For each of `rules/{antifragility,asymmetry-and-exposure,lindy-effect,narrative-fallacy,skin-in-the-game,via-negativa}.md`:
- Translate prose body to English
- Add Taleb cueing in open paragraph (e.g., for narrative-fallacy: *"This rule encodes Nassim Taleb's concept of narrative fallacy from The Black Swan: the human tendency to compress complexity into causal stories that survive scrutiny but fail prediction."*)
- Preserve bilingual trigger keyword lists where present. Examples:
  - `via-negativa.md`: keep both English (`add | improve | optimize | introduce | expand | enhance`) and Chinese (`增加 | 改进 | 优化 | 新方案 | 引入 | 扩展 | 提升`) trigger lists in body
  - `narrative-fallacy.md`: bilingual `because | so that | the reason is | 因为 | 所以 | 之所以`
  - `asymmetry-and-exposure.md`: bilingual exposure-marker keywords if currently present
- Per-rule register sentence (one sentence each)
- Strip aggressive NEVER/MUST imperatives where Opus 4.5+ register suffices, but DO NOT replace them with hedges (PM5 risk). Use Taleb-style direct framing: "Don't" rather than "It might be advisable to avoid."

**P4.2 — Rewrite SYSTEM.md in English (the most user-facing system prompt):**
- Translate to English. Open paragraph: *"You are taleb-pi — a thinking agent operating with Nassim Taleb's epistemology and decision-making frameworks (the Incerto: Fooled by Randomness, The Black Swan, Antifragile, Skin in the Game, The Bed of Procrustes) as your default worldview."*
- Confirm all 8 mental models (asymmetry, exposure_vs_probability, skin_in_the_game, via_negativa, lindy, narrative_fallacy, ergodicity, antifragile) are referenced
- Foreground positive convexity as a 9th explicit model (rev 3.0 — graduates from "antifragile umbrella" to standalone): explicit section *"9. Positive Convexity / 高正凸 (foregrounded per Taleb's mathematical formalization in Antifragile chs. 18-19)"*. Bilingual term in heading (English with Chinese in parens) — the rest of the section is English prose.
- **Replace the rev 2.5 MAGI-as-default-loop description** with the rev 3.0 opt-in framing. Old (Chinese): *"每次非琐碎回答前，三个 MAGI 节点..."*. New (English): *"For high-stakes irreversible decisions where multiple optimization dimensions clash, the user may invoke `/magi <question>` to engage the full Taleb tribunal — three MAGI nodes (MELCHIOR-1 Empirical Skeptic / BALTHASAR-2 Tail-Risk Guardian / CASPER-3 Convexity Seeker) analyze in parallel, then rebut, then a synthesizer presents the structured verdict. Default-mode responses follow the always-apply rules and these behavioral guidelines."*
- Reframe the "不写代码" line to English: *"Code is subordinate to Taleb thinking. The repo is a thinking-prompt overlay onto oh-my-pi; anything that can be a markdown rule must be a markdown rule."* (D4 + Principle 3 alignment.)
- **Remove the "模式 / Modes" section** (rev 2.5 already planned this — commands deleted, modes obsolete).
- Per-rule register sentence: SYSTEM.md is the master register-setter; it must contain the strongest version of the per-agent register guidance (e.g., *"Don't make disclaimers ('I'm just an AI'). Don't enumerate 'pros and cons' instead of judging. Don't soften every claim with 'perhaps' — that's weakness, not rigor. Don't pursue making the user happy; pursue making the user see clearly."*)
- "Skin in the Game on tool use" section translates to English; explicit Taleb cueing.
- **Bilingual response language preserved**: SYSTEM.md retains the *"Default to Chinese unless the user clearly uses English"* instruction — this controls *output* language, not the system prompt's instruction language. The instruction itself is in English; the output behavior remains bilingual-adaptive.

**P4.3 — Translate all `skills/*/SKILL.md` files to English with Taleb cueing:**

For each of `skills/{barbell-analysis,convexity-check,fragility-scan,premortem-taleb}/SKILL.md` (the 4 pre-existing skills not touched in P2/P3):
- Translate prose body to English
- Add Taleb cueing in open paragraph
- Preserve bilingual `triggers:` array if user-typed Chinese variants are common (e.g., `barbell-analysis` should match both `/barbell` and `杠铃策略`)
- Confirm clear invocation context (when does the skill fire?), structured output format, anti-patterns section
- Per-skill register sentence

`skills/magi-tribunal/SKILL.md` and `skills/incerto-search/SKILL.md` are touched in P2 / P5 respectively; not P4.
`skills/mental-models/SKILL.md` is translated in P3.

**P4.4 — Cross-agent style consistency check (rev 3.0 — uses new English non-canon labels):**
- Spot-check that P2's edits applied all 4 prompt techniques (REASON, pre-committed blind spots, CoT boundaries, few-shot example) consistently across all 4 MAGI agent files
- Compare prompt structure across the 3 MAGI agents — they should look like siblings, not 3 different styles
- Verify per-agent register sentences are distinct (PM6 mitigation): MELCHIOR-1's register sentence is not interchangeable with CASPER-3's

**P4.5 — Update `AGENTS.md` and `README.md` (rev 3.0 — these stay Chinese / bilingual per O9 scope):**
- `AGENTS.md`: replace meta-layer section with new agent roster (3 MAGI + 1 synthesizer; explicit table with English non-canon labels). Remove references to `tools/`, `extensions/`. Add note (in Chinese): *"MAGI 是高赌注决策的可选超级模式 — 用户输入 `/magi <问题>` 触发三元裁判。日常对话遵循 SYSTEM.md + always-apply rules（默认模式无 MAGI dispatch）。"* (English gloss: MAGI is the opt-in super-mode for high-stakes decisions; default mode no MAGI dispatch.) Also update `tools/`, `extensions/` references that survived P1's surgical update.
- `README.md`: same architecture note (in Chinese / bilingual per user request — README stays accessible to Chinese readers). Add a "When to use `/magi`" section with examples (PM8 mitigation): *"`/magi 我该不该跳槽` / `/magi Should I leverage 5x into VTI?` / `/magi 这个投资值得吗`"*. Confirm directory tree reflects new file layout.

**P4.6 — Default-mode register sample audit (PM5 mitigation):**
- After all P4 rewrites land, run 5 default-mode question samples (3 English, 2 Chinese; sample list in §5 expanded test plan above)
- Eyeball acceptance: ≥4/5 responses open with a Taleb-style direct frame, not a hedge.

**Acceptance criteria (rev 3.0):**
- [ ] All 6 existing rules + SYSTEM.md + 4 P4-touched skills all pass: English-prose ratio ≤5% CJK; ≥1 Taleb mention; ≤5 Taleb mentions; per-rule/skill register sentence present; PM5 register check ≤2 unjustified hedges per file
- [ ] All rules pass a why-not-what audit (`WHY:` marker or equivalent prose; English markers acceptable: `because`, `the reason is`, `WHY:`)
- [ ] All skills have invocation context + output format + anti-patterns sections (in English now)
- [ ] SYSTEM.md references all 9 mental models (8 originals + foregrounded positive convexity), describes the rev 3.0 opt-in MAGI architecture, removes deleted-mode references, keeps bilingual response-language instruction
- [ ] All 4 agent files have consistent prompt structure (same section headers in same order) — diff check
- [ ] AGENTS.md and README.md reflect new roster + opt-in MAGI architecture; both contain `/magi` invocation examples; both remain Chinese / bilingual per O9 scope decision
- [ ] **PM5 default-mode register sample**: ≥4/5 responses open with Taleb-style direct frame
- [ ] **PM6 style-divergence audit (full battery)**: pairwise Jaccard ≤ 0.45 on all 3 MAGI pairs across 4 `/magi`-invoked questions, on at least 3/4 questions
- [ ] **PM7 peacemaker test**: 3 hand-picked M+C vs B style questions through `/magi`; 3/3 outputs preserve BALTHASAR-2's full prose at equal display weight
- [ ] **Bilingual trigger keyword test**: ≥95% of `.omc/qa/trigger-keyword-tests.json` corpus matches as expected
- [ ] **Taleb cueing audit**: every system-level file has ≥1 `Taleb` reference; ≤5 mentions per file
- [ ] `omp` boots cleanly; smoke test on 2 `/magi` battery questions still produces ≥ 1 disagreement (sanity check, not regression)
- [ ] Default-mode bypass test re-passes (same 5 inputs as P2 acceptance — should still produce 0 `task` dispatches on non-`/magi` inputs)

**Verification step (concrete commands — rev 3.0):**
```bash
# 1. Why-not-what audit on all rules (English markers added)
for f in rules/*.md; do
  grep -lE "WHY:|because|the reason is|因为|为什么" "$f" || echo "MISSING WHY: $f"
done

# 2. Skill structure audit (English markers added)
for d in skills/*/; do
  for section in "invocation\|when does this fire" "output format" "anti-patterns\|don't do\|do not do"; do
    grep -lE "$section" "$d/SKILL.md" || echo "MISSING $section: $d"
  done
done

# 3. SYSTEM.md mental-model coverage (rev 3.0 — 9 models including foregrounded positive_convexity)
for m in asymmetry exposure_vs_probability skin_in_the_game via_negativa lindy narrative_fallacy ergodicity antifragile positive_convexity; do
  grep -lE "$m" SYSTEM.md || echo "SYSTEM.md missing: $m"
done

# 4. English-prose ratio across all P4-touched files
bash .omc/qa/scripts/check-prose-ratio.sh rules/*.md skills/**/SKILL.md SYSTEM.md

# 5. Taleb cueing audit (rev 3.0 NEW)
bash .omc/qa/scripts/check-taleb-cueing.sh rules/*.md skills/**/SKILL.md SYSTEM.md

# 6. Register check (rev 3.0 NEW; PM5)
bash .omc/qa/scripts/check-register.sh rules/*.md skills/**/SKILL.md SYSTEM.md

# 7. Bilingual trigger test (rev 3.0 NEW; D4)
bash .omc/qa/scripts/check-bilingual-triggers.sh

# 8. Agent prompt-structure consistency (rev 3.0 — same as rev 2.5 but now in English)
diff <(grep -E "^##|^###" agents/skeptic.md) <(grep -E "^##|^###" agents/pre-mortem.md)
diff <(grep -E "^##|^###" agents/skeptic.md) <(grep -E "^##|^###" agents/antifragility-scout.md)

# 9. PM6 style-divergence audit (rev 3.0 NEW)
bash .omc/qa/run-battery.sh --sample 4 --prefix /magi --output .omc/qa/runs/<P4-style-timestamp>/
bash .omc/qa/scripts/check-style-divergence.sh .omc/qa/runs/<P4-style-timestamp>/

# 10. PM7 peacemaker test (rev 3.0 NEW; 3 hand-picked M+C vs B questions)
bash .omc/qa/run-battery.sh --questions .omc/qa/peacemaker-questions.md --prefix /magi --output .omc/qa/runs/<P4-peacemaker-timestamp>/
grep -A 20 "M+C vs B" .omc/qa/runs/<P4-peacemaker-timestamp>/*/verdict.md   # eyeball: BALTHASAR-2 section preserved at full prose

# 11. PM5 default-mode register sample (rev 3.0 NEW)
bash .omc/qa/scripts/check-default-mode-register.sh   # 5 question samples, eyeball acceptance script

# 12. Default-mode bypass test (regression check)
bash .omc/qa/scripts/check-default-mode.sh

# 13. Stage commit
git add SYSTEM.md AGENTS.md README.md rules/ skills/ agents/
git commit -m "[P4] English rewrite + Taleb cueing + prompt quality (rev 3.0): all system prompts to English, opt-in MAGI architecture in SYSTEM.md, register-preserving translation"
```

---

### Phase P5 — Incerto Knowledge System
**Complexity:** LARGE
**Dependencies:** P4 complete (all prompt structure stable; we want the new MAGI agents to query the KB, not the old ones)
**Goal:** Epub → BM25-indexed chunks → MAGI query mandate → high-frequency crystallization.

**Tasks:**

**P5.1 — Epub ingestion + chunking:**
- `mkdir -p .omc/incerto/{chunks,scripts}`
- (`tools/incerto-search/` is NOT created — see O5 resolution. The executable lives at `.omc/incerto/scripts/search.ts`.)
- Write `.omc/incerto/scripts/ingest.ts` (bun-runnable):
  - **Pandoc feature detection** at top of script (per critic mf4): `try { execSync('pandoc --version', { stdio: 'pipe' }); USE_PANDOC = true; } catch { USE_PANDOC = false; console.error('[ingest] pandoc not found on PATH; falling back to epub2'); }`. Single user-facing log line tells the user which path was taken.
  - If `USE_PANDOC`: `pandoc incerto-5-book-bundle.epub -o .omc/incerto/_raw.md --split-level=1 --wrap=none`. Read `_raw.md`, split by H1 (book) + H2 (chapter).
  - If fallback: use `epub2` to emit chapter events → markdown via cheerio.
  - Tokenize each chapter into ~500-token chunks with 50-token overlap.
  - Each chunk written as `.omc/incerto/chunks/<book-slug>-<chapter-num>-<chunk-idx>.md` with frontmatter: `book`, `chapter`, `section`, `chunk_index`.
  - Hand-curated `concepts: [...]` per chapter added in a follow-up pass (post-ingest); script outputs a `concept-stub.json` user fills in.
- **Re-ingestion path** (per architect G3 / critic "What's Missing #6"): Add `--rebuild` flag to `ingest.ts`. Without flag: skip if `.omc/incerto/chunks/` is non-empty. With flag: wipe `chunks/` and re-process. Document in `.omc/incerto/README.md`: "If you update the epub, run `bun run .omc/incerto/scripts/ingest.ts --rebuild && bun run .omc/incerto/scripts/build-index.ts --rebuild`."
- Run ingest once: `bun run .omc/incerto/scripts/ingest.ts`. Expected output: ~300-500 chunk files.
- Add `.omc/incerto/scripts/ingest.ts` and `.omc/incerto/chunks/` to git (chunks are derived but small text and reproducibility is cheap).
- Spec already says: `.gitignore` adds the epub itself (handled in P1).

**P5.2 — BM25 index build:**
- **Pre-flight: verify `bm25` package availability** (per critic open-question Q4): `npm view bm25 version` must succeed and return a version. If the package is deprecated or yanked, fall back to `wink-bm25-text-search` (option B from O3) and document the swap in commit message + ADR Consequences.
- Add `package.json` (or extend existing if any) with `bm25` package dep.
- `bun add bm25`
- Write `.omc/incerto/scripts/build-index.ts`:
  - Read all `.omc/incerto/chunks/*.md`
  - Tokenize (lowercase, split on whitespace + punctuation; basic Chinese segmentation deferred to PM2 mitigation)
  - Build BM25 index, serialize to `.omc/incerto/index.json`
  - **`--rebuild` flag** (per architect G3): without flag, no-op if `index.json` exists and is newer than all chunks. With flag, force rebuild.
- Run once: `bun run .omc/incerto/scripts/build-index.ts`
- Index size budget: ≤ 5MB (fits in git comfortably)

**P5.3 — `incerto-search` skill + script (NOT a tool; honors P1's `tools/` deletion):**
- Create `.omc/incerto/scripts/search.ts` (bun-runnable CLI):
  - Args: `--query <string>`, `--k <number, default 5>`, `--agent <name>`, `--session-id <id>`. (`--agent` and `--session-id` enable observability; required when invoked from MAGI subagents.)
  - Loads `.omc/incerto/index.json` lazily.
  - Returns top-k results as JSON to stdout: `[{ book, chapter, section, text, score, chunk_id }]`.
  - **Wiki short-circuit** (per crystallization design in O6): before raw-chunk search, check `.omc/wiki/*.md` for slug or tag match against the query. If `wiki_priority: true` in `.omc/incerto/config.json` AND a wiki page matches, prepend it to results as `{ source: 'wiki', ... }`.
  - **Logs every call atomically** to `.omc/incerto/query-log.jsonl` (line-delimited JSON, one entry per line — per critic mf3, this is atomic at the OS level via `fs.appendFile`'s `O_APPEND` semantics; eliminates the need for `proper-lockfile`). Entry format: `{"ts":"<iso>","agent":"<name>","query":"<q>","session_id":"<sid>","hits":["<chunk_id>",...],"chosen":["<chunk_id>",...]}`. Note: `chosen` is logged separately later — search.ts logs the dispatch + hits; the consuming agent appends a `chosen` event when it cites a chunk.
- **Replace** the P2.7 stub at `skills/incerto-search/SKILL.md` with the real skill body (per critic NI-1 cross-ref — file path and `name` stay stable; only body content changes, preserving subagent skill-resolution continuity from P2 acceptance to P5.4-pre):
  - Frontmatter: `name: incerto-search`, `description`, `triggers: ["/incerto", "查 Taleb", "Incerto 引文"]`.
  - Body: instructs agent to invoke `bun run .omc/incerto/scripts/search.ts --query "<q>" --k 5 --agent <self-name> --session-id <session-id>` and parse the JSON result. Documents the citation format: `> "quote" — Book Title, Ch. N`. Includes anti-pattern: "Do NOT inline the chunk text in your verdict; quote the relevant sentence and cite the source."
- **No `tools/` directory created.** The skill is the agent-facing artifact; the script is invoked via Bash. P1's `git rm -r tools/` is final.
- Smoke test: `bun run .omc/incerto/scripts/search.ts --query "antifragile barbell" --k 3 --agent test --session-id smoke1`. Confirm 3 chunks return as JSON. Confirm `query-log.jsonl` has one new line with the entry.

**P5.4-pre — Subagent skill access smoke test (MUST run before P5.4 task list begins):**

This is a 30-minute test that prevents days of wasted P5 work (per architect G1 / critic MF3 / R11). The architectural unknown: oh-my-pi's `task` tool spawns subagents, but the docs do not specify whether subagents inherit the parent's skill registry. If they do not, the MAGI agents cannot invoke `skill://incerto-search` and the entire query mandate is non-functional.

**Procedure:**
1. **Setup** (two-variant; addresses critic NI-1 sequencing): At **P2 acceptance time**, only the 5-line stub `skills/incerto-search/SKILL.md` exists (created as part of P2 — see P2 acceptance "mechanic-only variant" criterion); the probe verifies skill-resolution **mechanics only** (subagent can read the stub and return `STUB_OK`). At **P5.4-pre prerequisite time** (after P5.3 ships the real script + real skill body), the probe re-runs against real data — this **builds on the P2 mechanic confirmation** rather than re-testing it from scratch. Spin up a minimal test subagent at `.omc/qa/test-subagent.md` with frontmatter `name: skill-access-probe`, `description: "probe: invokes incerto-search and reports outcome"`, body: "When dispatched, your task is to invoke `skill://incerto-search`. If the skill is available, follow its instructions and return either the literal string `STUB_OK` (P2-acceptance mechanic-only variant — stub body in place) OR the top BM25 search result with citation (P5.4-pre real-data variant). If the skill is unavailable (skill not in your context), return the literal string `SKILL_INACCESSIBLE` and your full system prompt's tool/skill list."
2. **Dispatch**: from a fresh `omp` session: `omp --dispatch task skill-access-probe "probe"`. Capture stdout to `.omc/qa/runs/<P5-pre-timestamp>/skill-probe.txt`.
3. **Analyze outcome**:
   - **Pass A (skill inherited)**: probe returns a chunk with citation. P5.4 proceeds as written below — MAGI agents invoke `skill://incerto-search`.
   - **Pass B (skill not inherited but Bash works)**: probe returns `SKILL_INACCESSIBLE` but the parent agent's Bash tool is available to subagents. P5.4 pivots: MAGI agents invoke the script directly via Bash with the documented command pattern (`bun run .omc/incerto/scripts/search.ts --query "..." --agent <self> --session-id <sid>`). Skill body is repurposed as documentation for the parent agent; subagents get the Bash command in their own prompt body via P2.1-P2.3 edit.
   - **Fail (neither skill nor Bash available to subagents)**: P5 partially blocks. Document the constraint in `.omc/issues/p5-subagent-isolation.md`. Pivot options: (a) parent agent runs `incerto-search` once per turn and passes results into the 3 `task` calls' `description` argument as a "context block" prefix (loses per-MAGI query diversity but preserves grounding); (b) defer P5.4 to a follow-up phase pending oh-my-pi feature request.
4. **Document outcome**: write `.omc/qa/skill-access-result.md` with the chosen path (A/B/Fail) and the next step. P5.4's body below assumes Pass A; if Pass B, swap the skill reference for the Bash command in each MAGI's prompt body.

**P5.4 — MAGI query mandate (assumes Pass A; if Pass B, swap `skill://incerto-search` for the Bash command). Rev 3.0 scoping: query mandate applies only when MAGI is engaged via `/magi`. Default-mode responses do NOT query Incerto:**
- Edit each of the 3 MAGI agent files (skeptic.md, pre-mortem.md, antifragility-scout.md). All files are now in English from P2.
- Add to system prompt body, after frameworks section, in English:
  > *"Before issuing your verdict (only when invoked through the `/magi` tribunal flow), you must invoke `skill://incerto-search` at least once (or, on the Bash-fallback path, run `bun run .omc/incerto/scripts/search.ts --query "<your keywords>" --k 5 --agent <self-name> --session-id <sid>`) to confirm your analysis is consistent with Nassim Taleb's text. Citation format: `> "quote" — Book, Ch. N`. If retrieval results conflict with your initial position, state the conflict explicitly in your verdict and either adjust your position or retain the divergence with reasoning. This mandate applies only inside the `/magi` flow — when you receive a `task` dispatch from the magi-tribunal skill, not in any other context."*
- Rationale for `/magi`-scoping: in rev 3.0 the MAGI agents are subagents that only run when the magi-tribunal skill dispatches them. They do not run in default mode. The query mandate is therefore implicitly scoped to `/magi` invocations. The explicit "applies only inside the `/magi` flow" sentence is defensive — it prevents a future change that exposes MAGI subagents to default-mode dispatches from accidentally adding a per-turn Incerto query cost.
- This is small (one paragraph per file) but high-leverage. The exact wording (skill vs Bash) is set after the smoke test resolves. Translation of the rev 2.5 Chinese version is part of P2's English-rewrite scope; this P5.4 edit modifies the *English* version.

**P5.5 — Crystallization:**
- Write `.omc/incerto/scripts/crystallize.ts`:
  - Reads `.omc/incerto/query-log.jsonl` (line-delimited JSON; one entry per line)
  - Aggregates chunk hit counts across all sessions (each line's `hits` array contributes one increment per chunk_id)
  - **Bursty-recent view** (per architect T2): emit a separate `.omc/incerto/bursty-queries.json` listing chunks with high hit count in the last 7 days but below the global threshold — surfaces "burst-then-quiet" demand the threshold misses.
  - For each chunk with global hit count ≥ N (default 10, read from `.omc/incerto/config.json`):
    - Spawn a one-shot LLM summarization call (use whatever `omp` is configured with via `task` or direct API per `config.yml`) with prompt: "Summarize this Taleb passage as a concept page. Title from chunk's section. ≤ 800 tokens. Cite the source."
    - Write to `.omc/wiki/<concept-slug>.md`
- Write `.omc/incerto/config.json`: `{ "crystallize_threshold": 10, "wiki_priority": true, "bursty_window_days": 7 }`
- **MUST be manual trigger** (per architect edit #5b / critic ambiguity-risk #3): run via `bun run .omc/incerto/scripts/crystallize.ts --since <iso8601>` (or `--all` for full history). NEVER hook-triggered until empirical demand justifies; hook would risk unwanted LLM calls during normal `omp` use. Document in `.omc/qa/run-battery.md`: "After 100+ query log entries accumulate, run `bun run .omc/incerto/scripts/crystallize.ts --since <iso>` to promote high-frequency chunks into `.omc/wiki/` summaries." Document automation possibility in `AGENTS.md` for the user to wire later if desired.
- **Wiki short-circuit lives in search.ts** (P5.3 already specifies this; do NOT touch a non-existent `tools/incerto-search/`). When `wiki_priority: true` in config, `search.ts` checks `.omc/wiki/` first; matched wiki page returns as `{ source: 'wiki', ... }` ahead of raw chunks. The wiki page's score does NOT augment the chunk's count — wiki hits and chunk hits are tracked separately so future crystallization tuning can decide whether to also retire crystallized chunks.

**Acceptance criteria for P5:**
- [ ] `.omc/incerto/chunks/` contains 300-500 markdown files with frontmatter
- [ ] `.omc/incerto/index.json` exists, ≤ 5MB
- [ ] `.omc/incerto/scripts/search.ts` exists; smoke-test invocation returns ranked chunks as JSON
- [ ] `skills/incerto-search/SKILL.md` exists with triggers and Bash invocation pattern
- [ ] **Subagent skill access smoke test resolved** — `.omc/qa/skill-access-result.md` exists with Pass A / Pass B / Fail outcome documented
- [ ] `tools/` directory does NOT exist (confirms CF1 resolution)
- [ ] All 3 MAGI agent files include the query mandate paragraph (skill or Bash form per smoke-test outcome)
- [ ] Smoke test: 5 sample queries (3 English, 2 Chinese) return relevant chunks; recall@5 ≥ 60% on 5 hand-picked queries with known target chapters
- [ ] `query-log.jsonl` accumulates entries during smoke test (one valid JSON object per line)
- [ ] `crystallize.ts` exists; dry-run mode works (`--dry-run --since <iso>` outputs what would be promoted without calling LLM)

**Migration trigger documented** (per O3): if recall@5 < 60% on the Chinese subset for 3 consecutive battery runs, file `.omc/issues/p5-vector-migration.md` and pivot to LanceDB+Transformers.js (option E from O3).

**Verification step (concrete commands):**
```bash
# 1. Confirm tools/ stays deleted (CF1)
test ! -e tools/ && echo "OK: tools/ remains deleted" || echo "FAIL: tools/ recreated"

# 2. Chunk count + index size
ls .omc/incerto/chunks/*.md | wc -l   # expect 300-500
du -h .omc/incerto/index.json   # expect <5M

# 3. search.ts smoke test (English)
bun run .omc/incerto/scripts/search.ts --query "antifragile barbell" --k 3 --agent smoke --session-id smoke1
# expect JSON array of 3 chunks; query-log.jsonl gains one new line

# 4. search.ts smoke test (Chinese)
bun run .omc/incerto/scripts/search.ts --query "遍历性" --k 3 --agent smoke --session-id smoke1
# expect JSON; if empty, naive tokenizer failed on Chinese — apply nodejieba pre-processing per O3 mitigation

# 5. Subagent skill access probe (must run BEFORE P5.4 task list)
omp --dispatch task skill-access-probe "probe" > .omc/qa/runs/$(date -u +%Y%m%dT%H%M%SZ)/skill-probe.txt
# Inspect output; record outcome in .omc/qa/skill-access-result.md (Pass A / Pass B / Fail)

# 6. recall@5 sanity (5 hand-picked queries with known target chapters)
bash .omc/qa/scripts/recall-at-5.sh   # exits 0 if ≥3/5 hit target chapters

# 7. crystallize.ts dry-run
bun run .omc/incerto/scripts/crystallize.ts --dry-run --all
# expect human-readable list of chunks that would be promoted (none on first run; query-log just seeded)

# 8. End-to-end battery with KB enabled
bash .omc/qa/run-battery.sh --output .omc/qa/runs/<P5-timestamp>/
# Confirm at least one MAGI cites Taleb in each verdict (eyeball check on verdict.md files)

# 9. Stage commit
git add .omc/incerto/ skills/incerto-search/ agents/skeptic.md agents/pre-mortem.md agents/antifragility-scout.md
git commit -m "[P5] Incerto KB: BM25 index, search script, MAGI query mandate, crystallization"
```

---

## 7. Risks & Mitigations (ranked by severity)

| # | Risk | Severity | Mitigation in plan |
|---|---|---|---|
| R1 | MAGI verification fails — < 6/8 disagreement after P2 | HIGH | Plan halts at P2 acceptance gate; max 2 revision iterations on prompt set; bail-out: ≥4/8 ships with `[P2-WARN]`, <4/8 fails outright (see P2 acceptance) |
| R11 | **Subagent skill access unverified** (architect G1 / critic MF3) | HIGH | P5.4-pre smoke test (30-min) runs before P5.4 begins; Pass A → skill path, Pass B → Bash fallback, Fail → defer P5.4 with documented pivot in `.omc/issues/p5-subagent-isolation.md` |
| R12 | **Main agent emits sequential instead of parallel `task` calls** (architect T3 / critic MF1) | HIGH | P2 acceptance criterion: capture Round-1 dispatch timestamps; assert <2s spread; fail → document gap, investigate `async.enabled` semantics or pivot to `parallel_task` orchestration (PM4 covers detection in long-term operation) |
| R2 | Cherry-pick from attic introduces stale references (PM3) | MED | P3 includes explicit grep audit (architect-verified pattern; `凸性` whitelisted as benign domain prose) |
| R3 | BM25 retrieval is technically correct but conceptually off (PM2 / O3 research-vs-spec tension) | MED | Hand-curated `concepts:` per chapter; synonyms.json layer; recall@5 acceptance test before P5 ships; documented migration trigger to LanceDB+Transformers.js if recall@5 < 60% for 3 consecutive runs |
| R4 | Pandoc unavailable on user Windows shell | MED | Pandoc feature-detection at top of `ingest.ts`; documented `epub2` fallback (option A from O4) with single user-facing log line; ingest is one-time so user friction is bounded |
| R5 | Token budget overrun in MAGI agent prompts or `magi-protocol.md` rule | MED | Per-agent ≤ 2000 token unit-check; rule ≤ 1500 tokens; S2A only at synthesizer; both enforced by `.omc/qa/check-magi-structure.sh` |
| R6 | `omp` boots into broken state mid-phase (architect T1) | MED | Each phase ships as separate commit; P2 uses scratch-dir-then-atomic-mv to land all 4 agent edits simultaneously; verification step at each phase boundary boots `omp` |
| R7 | Crystallization promotes noise (frequent but uninteresting hits) | LOW | Threshold N=10 conservative; user-tunable via `.omc/incerto/config.json`; LLM-summarization stage filters obvious noise; bursty-recent view surfaces edge cases |
| R8 | ~~`tools/` directory recreation looks like contradiction with P1 deletion~~ **RESOLVED** | — | CF1 resolution: executable moved to `.omc/incerto/scripts/search.ts`; `tools/` stays deleted. P1 deletion is final. |
| R9 | The 8-question battery itself is biased toward producing disagreement | LOW | Battery covers 8 question types deliberately spanning trivial-to-hard; factual-gate test catches the trivial end; graduated 3-state gate ensures clarification questions don't inflate disagreement count |
| R10 | MAGI agents over-cite Incerto (every claim wrapped in a quote, verdict becomes a quote-aggregator) | LOW | Mandate is "at least once," not "every claim"; verification eyeballs check that quotes support reasoning rather than substitute for it |
| R13 | DeepSeek-v4-flash model may not anchor irreconcilable values in Chinese as well as Opus would (critic Q1) | LOW (rev 3.0 — partly mooted: with English system prompts the Chinese-anchoring concern shifts; replaced by R14) | P2 bail-out catches this empirically (<4/8 disagreement → P2 fails, prompts model swap as one of the diagnostics); model swap is reversible |
| R14 | **English translation flattens agent tonal edges** (PM5; rev 3.0 NEW) | HIGH | PM5 register check + per-agent register sentence requirement + sample-output register audit on 5 default-mode questions; if check fails, escalate to direct-Taleb-quote framing in agent register sentences |
| R15 | **Taleb-cueing causes style homogenization across MAGI** (PM6; rev 3.0 NEW) | MED | PM6 style-divergence audit (pairwise Jaccard ≤0.45 on Round 1 outputs); per-agent register sentences (PM6 mitigation); escape valve: drop Taleb cue from BALTHASAR-2 and CASPER-3 if measured homogeneity exceeds threshold |
| R16 | **User invokes `/magi` rarely → MAGI architecture under-utilized** (PM8; rev 3.0 NEW) | MED | `rules/magi-protocol.md` ~50-token alwaysApply hint nudges main agent to RECOMMEND `/magi` at high-leverage moments; README + AGENTS.md document `/magi` invocation triggers; weekly cron telemetry on `/magi`-rate (deferred to follow-up); if rate <5%, escalate suggestion threshold |
| R17 | **Bilingual trigger keyword regex misses Chinese variants users actually type** (D4 / O8; rev 3.0 NEW) | MED | Bilingual trigger keyword test corpus at `.omc/qa/trigger-keyword-tests.json`; integration test enforces 100% match on representative inputs; trigger keyword lists embedded in each rule body (not centralized) so addition is local — user can add variants by editing the rule directly |
| R18 | **Removing Scientist/Mother/Woman canon erodes peacemaker logic** (PM7; rev 3.0 NEW; rev 3.1 SEVERITY UPGRADED to MED per SF1 — source artifact uses archetype reasoning, "geometry not archetype" claim was wrong) | MED (rev 3.1; was LOW in rev 3.0) | Explicit peacemaker clause in BALTHASAR-2's English system prompt that **substitutes** optimization-target geometry for the archetype shortcut (rev 3.1 honest framing — it's a substitute, not an inheritance); synthesizer's M+C vs B template explicitly notes BALTHASAR-2's veto authority is target-derived; PM7 has TWO E2E tests (rev 3.1): Test A (M+C vs B template structural integrity, 3/3 dissenter section preserved) AND Test B (M+B vs C counterfactual generation geometry, 3/3 BALTHASAR-2 shows mediation markers in 2/3+ cases or substitute geometry hypothesis is falsified) |
| R19 | **PM8 telemetry inconclusive due to low sample size — extend observation window before pivot** (rev 3.1 NEW per MF2) | LOW | The pivot from Option A (50-token alwaysApply hint) to Option C (TTSR rule) requires `/magi`-rate <5% over 30 days. But the *relevant* metric is *rate* (recommendations surfaced ÷ high-stakes-marker turns), not absolute count. If <20 high-stakes-marker turns occur in 30 days, telemetry is inconclusive. **Mitigation**: extend observation window to 60 days when sample size <20; weekly cron reports both `/magi`-count, high-stakes-turn-count, and rate; the rate denominator must be ≥20 to trigger pivot consideration; below 20, defer pivot decision and continue accumulating data |

## 8. ADR (rev 3.2 — ACCEPTED after iter-4 review convergence)

```
# ADR: taleb-pi Via Negativa Cleanup, Opt-In MAGI Tribunal, English System Prompts, Incerto KB

## Status
**ACCEPTED (revision 3.2)** — Architect (iter-4): APPROVE-WITH-RESERVATIONS (3 NI-rev4 polish items, all LOW severity, all SHOULD FIX). Critic (iter-4): APPROVE + lightweight rev 3.2 doc pass (the 3 NI-rev4 mechanical edits ship as plan amendments without a full P→A→C re-cycle, mirroring the rev 2.5 lightweight pass pattern). Rev 3.2 applies the 3 NI-rev4 fixes surgically: NI-rev4-1 P1.0 ambiguous-outcome disambiguation rule (default to Outcome C on partial evidence; AND-condition for Outcome A documented); NI-rev4-2 P1.0 grep matcher tightened to structural tool-dispatch forms + manual visual inspection step added (defends against LLM-prose false-positives on the loose `task ` matcher); NI-rev4-3 executor onboarding note at top of plan (names ~400 lines required reading vs ~1100 lines reference-during-execution to avoid 1540-line linear read on handoff). No architectural changes — these are pure polish executor-applicable amendments.

Rev 2.5 was ACCEPTED. Rev 3.0 ITERATED (5 MUST FIX + 3 SHOULD FIX from iter-3). Rev 3.1 absorbed all 8 items (iter-4 verdicts: Architect APPROVE-WITH-RESERVATIONS, Critic APPROVE + doc pass). Rev 3.2 ships the doc pass and is the basis for executor handoff.

Rev 3.1 → 3.2 amendments (lightweight doc pass; iter-4 NI-rev4 absorption):
  - **NI-rev4-1**: P1.0 outcome classification gains an "Ambiguous outcome" branch between B-2 and C — defaults to Outcome C (halt) on partial evidence (1-2 of 5 markers fire OR partial dispatch trace OR contradictory signals). Cost asymmetry favors halting: false-halt costs ~30 min investigation, false-proceed costs ~1 day P2 rework on silent architectural break.
  - **NI-rev4-2**: P1.0 Step 3 grep matcher tightened from loose `task ` (trailing space) to structural forms (`<tool_use[^>]*task`, `"name":\s*"task"`, `task --`, `task(`); supplementary executor manual visual inspection step (Step 3b) defends against LLM prose containing the word "task" being mis-classified as dispatch trace.
  - **NI-rev4-3**: Onboarding note at top of plan body names the ~400 lines of required reading (rev history, §1, §6 P1–P5, §8) vs ~1100 lines of reference-during-execution (§2–§5, §7, register-exemplar.md, open-questions.md); P1.0 explicitly named as the entry point and HARD GATE.

Rev 3.0 → 3.1 amendments (iter-3 absorption; preserved in rev 3.2):
  - **MF1**: P1.0 slash-routing pre-flight (HARD GATE before P1; resolves the unverified `/magi` routing claim with 3-branch outcome)
  - **MF2**: PM8 mitigation strengthened — Option A (50-token hint) primary; Option C (TTSR rule `rules/magi-suggest-trigger.md`) documented as built-on-pivot if telemetry shows underuse; R19 added on telemetry sample-size caveat
  - **MF3**: §1.C.1 default-mode capability disclosure — explicit two-tier system; Principle 2 honest reframing ("opt-in via /magi; default mode has no tension surface")
  - **MF4**: differentiated per-MAGI Taleb cueing — three distinct opening-paragraph templates citing Black Swan / Antifragile Ch 7 / Antifragile Ch 18-19 (was identical-with-role-swap-slot in rev 3.0)
  - **MF5**: register exemplar at `.omc/plans/register-exemplar.md` (P2.0 hard gate before P2.1)
  - **SF1**: §1.B factually corrected (cross-validation report DOES use archetype reasoning); PM7 Test B counterfactual added
  - **SF2**: §1.D split into 1.D.1 (slash-command resolution) + 1.D.2 (in-context regex) — different mechanisms named differently
  - **SF3**: 8-question battery now has Pass 1 (`/magi`-invoked, ≥6/8 disagreement) AND Pass 2 (default-mode coherence, ≥7/8 sensible Taleb-flavored response)

The four core amendments (a-d) of rev 3.0 are unchanged in spirit; rev 3.1 strengthens their load-bearing assumptions.

Rev 2.5 was ACCEPTED; rev 3.0 ITERATED; rev 3.1 + 3.2 supersede both. Rev 3.2 (this revision) is the basis for executor handoff via `/oh-my-claudecode:start-work taleb-pi-execution-plan` — iter-4 review has converged (Architect APPROVE-WITH-RESERVATIONS, Critic APPROVE + lightweight rev 3.2 doc pass; the 3 NI-rev4 surgical edits are applied in this revision).

## Decision (rev 3.1; supersedes rev 3.0)
Execute the 5-phase plan as committed, with rev 3.1's surgical strengthenings:
- **P1** Via Negativa cleanup (rev 3.1 adds P1.0 slash-routing pre-flight as HARD GATE; remaining tasks unchanged from rev 3.0: delete tools/, conditional commands/ deletion based on P1.0 outcome, extensions/, dead agents; clean README/AGENTS/config/.gitignore)
- **P2** MAGI system rev 3.1: hybrid attitude+role (NON-CANON) division — MELCHIOR-1 Empirical Skeptic, BALTHASAR-2 Tail-Risk Guardian, CASPER-3 Convexity Seeker; **rev 3.1 adds P2.0 register exemplar (HARD GATE before P2.1) and replaces identical-template Taleb cueing with three distinct per-MAGI opening paragraphs citing different Taleb works**; parallel Round 1 + rebuttal Round 2 + S2A synthesizer with literal extraction template; all 4 prompt techniques (REASON, pre-committed blind spots, S2A, CoT boundaries); English system prompts with bilingual trigger keyword surfaces; explicit differentiated Nassim Taleb cueing per agent (rev 3.1); per-agent register sentence (PM5/PM6 mitigation); `rules/magi-protocol.md` shrunk to ~50-token alwaysApply recommendation hint; `skills/magi-tribunal/SKILL.md` is the home of dispatch logic (loads only on `/magi` or `/skill:magi-tribunal` per P1.0 outcome); 8-question battery has 2 passes (rev 3.1 SF3) — Pass 1 `/magi`-invoked disagreement test, Pass 2 default-mode coherence check
- **P3** Content enrichment: cherry-pick `cognitive-state-diagnosis.md` and `mental-models/SKILL.md` from attic and translate to English at integration time; create `ergodicity.md` and `positive-convexity.md` directly in English with Taleb cueing
- **P4** English rewrite + Taleb cueing + prompt quality pass: 6 existing rules + SYSTEM.md + 4 P4-touched skills + AGENTS.md/README.md updates; rewrite SYSTEM.md to reflect rev 3.0 opt-in MAGI architecture; preserve bilingual response-language adaptation
- **P5** Incerto KB: epub → BM25 chunks → `.omc/incerto/scripts/search.ts` (NOT `tools/`) → MAGI query mandate **scoped to `/magi`-flow only** → manual crystallization to `.omc/wiki/`

Each phase ships as a separate commit. Bail-out protocol on P2 (max 2 revision iterations, `[P2-WARN]` ship at ≥4/8). Subagent skill access smoke test prerequisite to P5.4. Parallelism timestamp acceptance criterion on P2 (R12 mitigation). PM5/PM6/PM7/PM8 acceptance gates new in rev 3.0.

## Drivers (rev 3.0 — D3 character changed; D4 added)
- **D1 — Tension authenticity (scope-narrowed)**: 70-75% directional disagreement on the 8-question `/magi` battery is the contract. Anything risking regression to Stage 5's 38% domain-only score is rejected. Default-mode tension is verified separately by PM5 register check.
- **D2 — Restartability and cheap rollback**: phase-as-PR commits, BM25 over LLM-graded retrieval, deterministic JSON index, single-user dormant-project context. Rev 3.0 addition: P4 (English rewrite) ships as one commit so partial rollback to "English prompts but Chinese MAGI labels" is intentionally disallowed.
- **D3 — Token efficiency** (mostly satisfied by architecture in rev 3.0): MAGI is opt-in, so default-mode token cost is one main-agent turn. `rules/magi-protocol.md` shrinks from ≤1500 tokens to ~50 tokens. Per-MAGI agent budget bumps to ≤2500 tokens (from 2000) to accommodate English rewrite + Taleb cueing + per-agent register sentence — but only the `/magi` path pays this cost.
- **D4 — Instruction precision in English baseline (NEW)**: Models follow English instructions more precisely than Chinese; technical Taleb terms are unambiguous in English. Drives English system prompts, English MAGI labels, explicit Taleb cueing. Bilingual trigger keyword lists preserved only where prompt body must match Chinese user input literally.

## Alternatives Considered (rev 3.0 — adds O8-O11)
- **O1 phase ordering**: A (big-bang commit), B (sequential phase-as-commit), C (P1+P3 parallel), D (PR per phase). Chose B; D rejected due to dormant single-user context.
- **O2 MAGI rewrite strategy**: A (rewrite from scratch), B (surgical edits), C (hybrid). Chose B in rev 2.5; rev 3.0 effectively pushes B closer to A because the English rewrite + label rename + Taleb cueing is large enough that "surgical edits" becomes "rewrite the body, keep the verified scaffolding (checklists, output formats, blind-spot structure)."
- **O3 retrieval substrate**: A (`bm25` 12KB), B (`wink-bm25-text-search`), C (Lunr.js), D (custom TF-IDF), E (LanceDB + Transformers.js). Chose A. **This contradicts the source research** which ranks E #1. See Consequences > Negative below. Migration trigger documented (recall@5 < 60% on Chinese subset for 3 consecutive runs).
- **O4 epub parsing**: A (`epub2`), B (pandoc CLI + epub2 fallback), C (manual unzip + cheerio), D (Python ebooklib). Chose B for clean markdown output; A as documented fallback when pandoc absent.
- **O5 search exposure**: A (skill only), B (MCP tool — would have required `tools/` recreation), C (skill invokes script via Bash), D (CLI script no skill). Chose C.
- **O6 crystallization trigger**: A (hard threshold N=10), B (adaptive top-decile), C (LLM-judged). Chose A; bursty-recent view added.
- **O7 verification**: A (8-question battery), B (regex unit tests), C (visual review). Chose A as primary, B as guardrail. Rev 3.0: battery scoped to `/magi`-invoked sessions.
- **O8 `rules/magi-protocol.md` keep-or-delete (rev 3.0 NEW)**: A (keep as ~50-token recommendation hint), B (delete entirely — Via Negativa max). Chose A. Rationale: PM8 (recommendation-loss cost) outweighs the trivial token tax. Without the hint, the main agent has no permanent reminder to suggest `/magi` at high-leverage moments; the bilingual trigger keyword list also has no other natural home.
- **O9 English rewrite scope (rev 3.0 NEW)**: A (full rewrite), B (surgical translation — headings + frontmatter only), C (Chinese with English summaries), D (side-by-side bilingual). Chose A. Rationale: D4 demands instruction-text precision; B/C leave the active instruction text in Chinese; D fails D3 (~doubles always-apply token tax).
- **O10 Taleb-cueing density (rev 3.0 NEW)**: A (open-paragraph only), B (every section), C (every paragraph). Chose A. Rationale: D1 (tension authenticity) penalizes B and C heavily — saturation regresses each MAGI to a uniform Taleb pastiche, eroding per-MAGI tension (PM6).
- **O11 MAGI label change scope (rev 3.0 NEW)**: A (agents-only — leave research artifacts untouched), B (agents + research artifacts), C (full repo grep-replace including spec). Chose A. Rationale: D2 (cheap rollback / low risk) and the user's explicit instruction not to rewrite research artifacts. Cross-validation report's "Mother as peacemaker" reasoning is preserved as historical record; PM7 verifies the peacemaker logic re-emerges from optimization-target geometry without canon language.

## Why Chosen (rev 3.0)
- **B/B/A/B/C/A/A/A/A/A/A** (O1-O11) traces back to drivers as follows:
- D1 (tension authenticity, scope-narrowed) drives: B in O2 (preserve verified scaffolding), the hybrid attitude+role identity in P2.1-P2.3 (now non-canon), the parallel+rebuttal flow in P2.5/skill, all 4 prompt techniques uniformly applied, the ≥6/8 verification gate, A in O10 (open-paragraph cueing only — saturation hijacks the per-MAGI register), per-agent register sentences (PM6 mitigation).
- D2 (cheap rollback) drives: B in O1, A in O3, A in O6, A in O7, A in O11 (don't touch research artifacts).
- D3 (token efficiency, mostly architecturally satisfied) drives: A in O3 (12KB), C in O5 (no MCP server lifecycle), opt-in `/magi` (rev 3.0 amendment 1A), A in O8 (~50-token rule body — keeps the alwaysApply tax minimal while preserving recommendation function).
- D4 (English instruction precision, NEW) drives: rev 3.0 amendments 2 (English rewrite), 3 (English non-canon labels), 4 (Taleb cueing), A in O9 (full rewrite), A in O10 (open-paragraph cueing), bilingual trigger keyword lists at the prompt body where Chinese user input must match.

## Consequences

### Positive (rev 3.0)
- Repo gets smaller before it gets richer (Principle 1 honored at file-count level: P1 net -14, P2-P4 net ~0, P5 derived chunks).
- MAGI agents have authentic tension grounded in cross-validated framework (per `magi_cross_validation.md` Stage 4-5) — even after canon labels removed, the optimization-target geometry that drove validation conclusions is preserved.
- Each phase has a concrete verification command sequence; no phase ships without its gate passing.
- Bail-out protocol on P2 prevents unbounded refactor loops. New PM5/PM6/PM7/PM8 acceptance gates catch English-rewrite-specific failure modes.
- All architectural unknowns surfaced in review (parallelism, subagent skills, `tools/` paradox) have explicit mitigations or smoke tests.
- **D3 mostly satisfied by architecture**: opt-in `/magi` eliminates the per-turn 7-invocation cost on default mode. ~50-token alwaysApply rule replaces ≤1500-token rule (-97%).
- **D4 satisfied**: English instruction baseline; explicit Taleb cueing front-loads model's training-time pattern recall on Taleb's framework.

### Negative (rev 3.0)
- **Code is subordinate to thinking is bent in P5.** Unchanged from rev 2.5 — `ingest.ts`, `build-index.ts`, `search.ts`, `crystallize.ts` are real code bounded to `.omc/incerto/scripts/`, ≤500 lines total. User accepted this tradeoff in Round 14-16.
- **BM25 chosen over research's #1-ranked vector retrieval.** Unchanged from rev 2.5 — user's explicit Round 16 override; mitigation via hand-curated concepts + synonyms.json + crystallization + documented migration trigger.
- **Three spec departures adjudicated in plan, not in spec** (rev 3.0 — was one in rev 2.5):
  - 1.A — narrative-fallacy-guard TTSR (Round 16 override of Round 14 transcript; unchanged from rev 2.5)
  - 1.B — MAGI canon labels dropped (rev 3.0; user decision Round 17 post-rev-2.5; spec lines 40, 76-107, 184-202 overridden)
  - 1.C — MAGI fires every response → fires only on `/magi` (rev 3.0; user decision post-rev-2.5; spec lines 38, 372, 399 overridden)
  If user disagrees with any of these, flag before P2 ships.
- **MAGI cost is high when it fires** (~7 LLM invocations per `/magi` invocation). Mitigated by opt-in: cost is now bounded by user-controlled `/magi` invocation rate, not turn count. The architect's rev 1 steelman point 2 (opt-in `/magi` would be 90% as valuable at 14% cost) was rejected in rev 2 on D1 grounds, then **accepted in rev 3.0** based on user reflection that opt-in restores user control over cost without sacrificing tension authenticity *when invoked*.
- **Parent-emission parallelism on `task` calls is unverified.** R12 + PM4 mitigation unchanged.
- **Subagent skill access is unverified.** R11 + P5.4-pre smoke test catches before P5.4 ships. Pass-B Bash fallback path documented (rev 2.5 architecture, carried forward).
- **English translation may flatten agent tonal edges** (R14 / PM5; rev 3.0 NEW). Mitigated by per-agent register sentences, register-check unit, default-mode register sample audit.
- **Taleb-cueing may homogenize MAGI voice** (R15 / PM6; rev 3.0 NEW). Mitigated by per-agent register sentences (override Taleb's default register), open-paragraph-only cueing density, style-divergence audit. Optional escape valve: drop Taleb cue from BALTHASAR-2 and CASPER-3 if measured homogeneity exceeds threshold.
- **Underuse of `/magi`** (R16 / PM8; rev 3.0 NEW). Mitigated by alwaysApply recommendation hint, README/AGENTS.md documentation of `/magi` triggers, weekly telemetry on `/magi`-rate (deferred follow-up).
- **Bilingual trigger keyword regex may miss user-typed variants** (R17; rev 3.0 NEW). Mitigated by integration test corpus + per-rule trigger keyword lists (local addition by maintainer).
- **Removing canon erodes peacemaker logic** (R18 / PM7; rev 3.0 NEW; rev 3.1 SEVERITY UPGRADED). The rev 3.0 plan claimed peacemaker logic *derived from optimization-target geometry, not from the maternal archetype.* This was factually wrong about the source artifact — the cross-validation report (`.omc/scientist/reports/20260505_013647_magi_cross_validation.md:74`) explicitly uses archetype reasoning ("the conservative mother → her protective instinct → natural tie-breaker"). Rev 3.1 honest framing: removing canon DOES drop one source of peacemaker rationale that was load-bearing in the source. The optimization-target geometry is a *substitute* for the archetype shortcut, not an inheritance. PM7 now has TWO E2E tests (rev 3.1): Test A (synthesizer template structural integrity) AND Test B (M+B vs C counterfactual generation geometry — does BALTHASAR-2's English translation produce mediation markers, or does it read as ALLY of MELCHIOR-1?). Falsification path: re-introduce canon-language partial annotation OR accept BALTHASAR-2 as ally-of-M and update synthesizer templates.

- **Spec-departure validation cost is implicit, not explicit** (rev 3.1 NEW per Critic CO-4). Rev 1's 75% disagreement projection (Stage 4-5 simulation) was canon-anchored against EVA labels (`Scientist`, `Mother`, `Woman`). Rev 3.0/3.1 swaps to English non-canon labels (`Empirical Skeptic`, `Tail-Risk Guardian`, `Convexity Seeker`) and provides **no equivalent validation projection**. The plan's P2 bail-out (≥4/8 ships with `[P2-WARN]`) is the only validation mechanism, and it is **more likely to fire under rev 3.1 than rev 2.5 would have been** because the underlying validation projection no longer applies. Rev 3.1 adds this acknowledgment honestly: there is no equivalent to "75% projection" for the rev 3.1 label set; what we have is the bail-out plus PM5/PM6/PM7/PM8 acceptance gates. The user should expect that `[P2-WARN]` ship at 4/8 or 5/8 is a more probable outcome than rev 2.5's projection would have suggested. This is a real cost of three deliberate spec departures (1.A canon labels + 1.B opt-in + 1.D English rewrite) that rev 3.0 did not name explicitly.

- **Identical-template Taleb cueing risk acknowledged and resolved (rev 3.1 per MF4).** The rev 3.0 plan had MELCHIOR/BALTHASAR/CASPER share a literally identical opening-paragraph template with only the role-name swap-slot varying. PM6 (style hijack) is the predicted consequence of this design. Rev 3.1 replaces the identical template with three distinct opening-paragraph templates citing different Taleb works (Black Swan / Antifragile Ch 7 / Antifragile Ch 18-19), invoking distinct relationships to Taleb (falsifier / via-negativa-guardian / convexity-seeker). The differentiation is in *which slice of Taleb each MAGI invokes*, not in *which slot the agent fills*. PM6 acceptance (Jaccard ≤0.45) becomes more achievable; the open-paragraph activation is now per-agent specialized. This was a real design weakness in rev 3.0 that rev 3.1 surgically fixes.

### Neutral
- 5 commits instead of 1; risk topology rewards phase boundaries.
- File count: P1 deletes ~14 files/dirs; P5 adds ~4 scripts + ~400 derived chunks + 1 index. Asymmetry accepted by user.
- DeepSeek-v4-flash model assumed sufficient for English MAGI prompts (rev 3.0 — was Chinese in rev 2.5; English baseline expected to be more reliable but not empirically tested). P2 bail-out catches model-capability failures.
- Cross-validation report and tension-design report remain in Chinese with canon language as historical record. Confusing for first-time readers; mitigated by a one-line header note added to research artifacts pointing to rev 3.0 plan.

## Follow-ups (rev 3.1; supersedes rev 3.0)
- **`/magi` battery re-run cadence**: monthly battery + parallelism timestamp re-check (PM4) + style-divergence audit (PM6) + Pass-2 default-mode coherence check (rev 3.1 SF3). Document in `.omc/qa/run-battery.md` as calendar entry.
- **`/magi`-rate telemetry (PM8 + rev 3.1 R19)**: weekly cron parses `.omc/incerto/query-log.jsonl`, reports `magi_count, high_stakes_marker_turn_count, magi_rate, sample_size_warning`. If `sample_size < 20` over 30-day window, observation extends to 60 days (R19); only consider pivot when sample size ≥20 AND rate <5%. Pivot path is built (Option C TTSR rule `rules/magi-suggest-trigger.md` per MF2/O8) — ~1 hour to ship the rule when pivot triggers.
- **Subagent skill access result**: write `.omc/qa/skill-access-result.md` after P5.4-pre smoke test.
- **Concept-stub hand-curation pass**: P5.1 outputs `concept-stub.json`; user fills in `concepts: [...]` per chapter (PM2 mitigation).
- **Synonyms.json layer**: build after first 100 query log entries (PM2 mitigation).
- **Crystallization threshold tuning**: review after first 100 query log entries; consider adjusting N=10 default in `.omc/incerto/config.json`.
- **8-question battery refinement**: vote pattern data over multiple `/magi` battery runs may reveal battery bias; revise question selection if disagreement saturates.
- **Migration trigger for vector retrieval** (O3 escape valve): if recall@5 < 60% on Chinese subset for 3 consecutive battery runs, flip to LanceDB+Transformers.js (~1-2 days).
- **Pandoc availability**: if pandoc fallback path (`epub2`) is consistently used, document Windows upgrade path.
- **PM6 escape valve evaluation**: 3 months post-deploy, audit MAGI Round 1 outputs across 10+ `/magi` invocations; if pairwise Jaccard regularly >0.45, drop Taleb cue from BALTHASAR-2 and CASPER-3 prompts. Document in ADR consequences.
- **Research artifact header note**: add a one-line note to `.omc/scientist/reports/20260505_013647_magi_cross_validation.md` and `.omc/research/magi-tension-design/report.md` pointing to the rev 3.0 plan's §1.B canon-label change. **The artifacts themselves are not rewritten.** Header note is a separate ~100-byte addition.
- **Open question for Architect/Critic review**: should PM8 mitigation include a soft auto-fire — i.e., when the recommendation-trigger fires, the main agent offers `/magi` *and* shows what the first MAGI's verdict would look like as a teaser? Marked open.
```

---

## File Manifest Summary (rev 3.0)

| Action | Count | Files |
|---|---|---|
| DELETE | 5 dirs/files | `tools/`, `commands/`, `extensions/`, `agents/convexity-reviewer.md`, `2026-05-04-...analysis.md` (unchanged from rev 2.5) |
| REWRITE in English with Taleb cueing (rev 3.0) | 4 files | `README.md` (Chinese / bilingual per O9 — adds `/magi` examples), `SYSTEM.md` (English with bilingual response-language adaptation), `AGENTS.md` (Chinese / bilingual per O9 — adds new agent roster), and English-rewrite ripples through agents/skills/rules below |
| REVISE in English with non-canon labels + Taleb cueing (rev 3.0) | 5 files | `agents/skeptic.md` (Empirical Skeptic), `agents/pre-mortem.md` (Tail-Risk Guardian), `agents/antifragility-scout.md` (Convexity Seeker), `agents/magi-synthesizer.md` (template label updates), `skills/magi-tribunal/SKILL.md` (now home of dispatch logic) |
| TRANSLATE existing rules to English with Taleb cueing (rev 3.0 P4 — NEW SCOPE) | 6 files | `rules/{antifragility,asymmetry-and-exposure,lindy-effect,narrative-fallacy,skin-in-the-game,via-negativa}.md` — bilingual trigger keyword lists preserved where present |
| TRANSLATE existing skills to English with Taleb cueing (rev 3.0 P4 — NEW SCOPE) | 4 files | `skills/{barbell-analysis,convexity-check,fragility-scan,premortem-taleb}/SKILL.md` |
| MODIFY | 2 files | `config.yml`, `.gitignore` (unchanged from rev 2.5) |
| NEW (rules) | 4 files | `rules/magi-protocol.md` (rev 3.0: shrunk to ~50 tokens / ≤80 words; alwaysApply recommendation hint, NOT dispatcher), `rules/ergodicity.md` (English from start), `rules/positive-convexity.md` (English from start), `rules/cognitive-state-diagnosis.md` (cherry-picked + translated to English in P3) |
| NEW (skills) | 2 dirs | `skills/mental-models/SKILL.md` (cherry-picked + translated in P3), `skills/incerto-search/SKILL.md` (P5; English) |
| NEW (scripts) | 4 files | `.omc/incerto/scripts/{ingest,build-index,search,crystallize}.ts` |
| NEW (data) | 5 paths | `.omc/incerto/chunks/`, `.omc/incerto/index.json`, `.omc/incerto/config.json`, `.omc/incerto/query-log.jsonl` (rev 3.0: each entry includes `mode: "default" | "magi"` field), `.omc/wiki/` |
| NEW (qa) | 1 dir | `.omc/qa/{magi-battery.md, run-battery.sh, runs/, check-magi-structure.sh, scripts/{check-parallelism.js, recall-at-5.sh, prune-runs.sh, check-prose-ratio.sh, check-taleb-cueing.sh, check-register.sh, check-positive-register.sh, check-bilingual-triggers.sh, check-style-divergence.sh, check-default-mode.sh, check-default-mode-register.sh, check-default-mode-coherence.sh, magi-rate-report.sh}, skill-access-result.md, slash-routing-result.md, trigger-keyword-tests.json, peacemaker-questions.md, peacemaker-counterfactual-questions.md}` (rev 3.0 adds 7 new check scripts + 2 test corpora; **rev 3.1 adds 2 new check scripts: `check-positive-register.sh` (MF5 / Exemplar acceptance regex) and `check-default-mode-coherence.sh` (SF3 / Pass-2 8-question battery); 1 new outcome doc: `slash-routing-result.md` (P1.0 hard gate output); 1 new test corpus: `peacemaker-counterfactual-questions.md` (PM7 Test B / SF1)**) |
| NEW (plans) | 1 file | `.omc/plans/register-exemplar.md` (rev 3.1 NEW per MF5; HARD GATE artifact for P2.0 — anchors English translation register before P2.1 begins; 3 exemplars from current Chinese register markers + acceptance regex per file) |
| NEW (rules, documented pivot — built only on PM8 telemetry trigger) | 0-1 files | `rules/magi-suggest-trigger.md` (rev 3.1 NEW per MF2 / O8 Option C; TTSR rule with `condition:` regex; not built in 3.1, ~1-hour pivot if PM8 telemetry rate <5% over 30 days AND sample size ≥20 per R19) |
| NEW (commands, conditional on P1.0) | 0-1 files | `commands/magi.md` (rev 3.1 NEW per MF1 P1.0 Outcome B-2 only; thin wrapper invoking `skill://magi-tribunal`; created at P1 only if pre-flight Outcome B-2 selected) |
| NEW (issues, conditional) | 0-5 files | `.omc/issues/p1-slash-routing-broken.md` (P1.0 Outcome C; rev 3.1 NEW), `.omc/issues/p2-tension-shortfall.md` (P2 bail-out), `.omc/issues/p2-parallelism-collapse.md` (R12), `.omc/issues/p5-subagent-isolation.md` (smoke test fail), `.omc/issues/magi-underuse.md` (PM8 telemetry, deferred) |

**Total commits:** 5 (one per phase)
**Estimated total complexity (rev 3.0):** 1 SMALL + 1 LARGE + 1 SMALL + 1 LARGE + 1 LARGE = ~5-7 days of focused work (rev 2.5 estimate was 3-5 days; rev 3.0 expansion is primarily P4 going from MEDIUM to LARGE due to translating 6 rules + 4 skills + SYSTEM.md, and P2 absorbing the English rewrite + label rename + Taleb cueing for the 4 MAGI agents and magi-tribunal skill).

**System-level files touched (English rewrite scope, per O9):** ~17 files
- 5 agent files (skeptic, pre-mortem, antifragility-scout, magi-synthesizer, plus cherry-picked cognitive-state-diagnosis as a rule)
- 6 existing rules (antifragility, asymmetry-and-exposure, lindy-effect, narrative-fallacy, skin-in-the-game, via-negativa)
- 3 new rules (magi-protocol shrunk, ergodicity, positive-convexity)
- 5 skill files (magi-tribunal, mental-models, barbell-analysis, convexity-check, fragility-scan, premortem-taleb, incerto-search) — note: 7 actual skill files but mental-models is cherry-picked + translated in P3, magi-tribunal is rewritten in P2, incerto-search is created in P5; 4 are translated in P4
- SYSTEM.md
- README.md and AGENTS.md remain Chinese / bilingual per O9 — outside English-rewrite scope but still touched in P4 to reflect new architecture

**File Manifest cross-check** (rev 3.0 deltas vs rev 2.5; rev 3.1 deltas vs rev 3.0):

**Rev 3.0 vs rev 2.5:**
- `rules/magi-protocol.md` token budget: ≤1500 → ≤80 words (~50 tokens) [-97%]
- Per-MAGI agent token budget: ≤2000 → ≤2500 [+25%]
- New unit checks: 7 new bash scripts under `.omc/qa/scripts/`
- New test corpora: 2 (`trigger-keyword-tests.json`, `peacemaker-questions.md`)
- New observability fields: `mode` field in `query-log.jsonl` and `meta.json` entries
- Conditional issue file added: `.omc/issues/magi-underuse.md` (deferred PM8 telemetry)

**Rev 3.1 vs rev 3.0:**
- New plan-side artifact: `.omc/plans/register-exemplar.md` (HARD GATE before P2.1; 3 exemplars + acceptance regex per file; ~150-200 lines)
- New unit checks: 2 new bash scripts (`check-positive-register.sh` for MF5 / Exemplar acceptance; `check-default-mode-coherence.sh` for SF3 / Pass-2 battery)
- New test corpus: `peacemaker-counterfactual-questions.md` (PM7 Test B / SF1; 3 hand-picked M+B vs C questions)
- New outcome doc: `.omc/qa/slash-routing-result.md` (P1.0 hard gate output; records Outcome A / B-1 / B-2 with cited probe evidence)
- New documented-pivot file (built only on PM8 trigger): `rules/magi-suggest-trigger.md` (TTSR rule per MF2 / O8 Option C; ~1 hour to ship when pivot fires)
- New conditional file (P1.0 Outcome B-2 only): `commands/magi.md` (thin wrapper invoking `skill://magi-tribunal`)
- New conditional issue file: `.omc/issues/p1-slash-routing-broken.md` (P1.0 Outcome C only — halts entire plan)
- Per-MAGI opening paragraphs: identical-with-role-swap-slot template (rev 3.0) → 3 distinct templates citing Black Swan / Antifragile Ch 7 / Antifragile Ch 18-19 (rev 3.1 MF4)
- Principle 2 reframing: "MAGI tension is mandatory, not theatrical (when invoked)" (rev 3.0) → "tension is opt-in via /magi; when invoked, mandatory; default mode has no tension surface" (rev 3.1 MF3)
- §1.D split: one-section conflated mechanism (rev 3.0) → 1.D.1 (slash-command resolution) + 1.D.2 (in-context regex) (rev 3.1 SF2)
- §1.B factual correction: peacemaker "geometry not archetype" claim (rev 3.0) → honest "archetype reasoning is in source; substitute geometry must be empirically verified" (rev 3.1 SF1)
- PM7 test scope: Test A only (rev 3.0) → Test A + Test B (M+B vs C counterfactual; rev 3.1 SF1)
- 8-question battery: Pass 1 only (rev 3.0) → Pass 1 (`/magi`-invoked) + Pass 2 (default-mode coherence) (rev 3.1 SF3)
- New risk row: R19 (PM8 telemetry sample-size caveat per MF2)
- ADR Negative consequences: 3 deliberate spec departures (rev 3.0) → 3 departures + spec-departure validation cost acknowledgment (CO-4 absorption) + identical-template Taleb cueing risk acknowledged-and-resolved (MF4) (rev 3.1)
- Net plan-line delta: ~250 net new lines; 0 deleted; ~40 modified.

---

*End of plan. Architect review next.*
