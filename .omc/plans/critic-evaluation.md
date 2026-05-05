# Critic Evaluation (Iteration 4 — Revision 3.1, Deliberate)

**Reviewer:** Critic (oh-my-claudecode:critic)
**Plan:** `.omc/plans/taleb-pi-execution-plan.md` (1537 lines, +315 from rev 3.0's 1222)
**New artifacts:** `.omc/plans/register-exemplar.md` (179 lines), `.omc/plans/open-questions.md` (updated, 83 lines)
**Architect Review (iter 4):** APPROVE-WITH-RESERVATIONS (3 small NIs: NI-rev4-1/2/3)
**Mode:** RALPLAN-DR DELIBERATE, iteration 4 of max 5
**Date:** 2026-05-05
**Investigation Mode:** THOROUGH (no escalation triggered — zero CRITICAL findings; the 3 small NIs are surgical polish; rev 3.1 cleanly absorbed iter-3's 5 MUST FIX + 3 SHOULD FIX)

---

## Verdict

**APPROVE**

Concur with the Architect's diagnosis: rev 3.1 substantively absorbs all 5 MUST FIX + 3 SHOULD FIX from iter-3 with no address-in-name-only patches. The 4 rev 3.0 amendments survive intact with **stronger empirical anchoring** (P1.0 pre-flight resolves the slash-routing claim; PM7 Test B counterfactual makes peacemaker geometry empirically falsifiable; differentiated per-MAGI cueing replaces the rev 3.0 swap-slot template; register exemplar anchors the translation pass before P2.1 begins). The 3 NI-rev4 issues the Architect raised are all LOW severity and surgical (≤30 minutes total): one bash test refinement, one decision-tree fallback rule, one prose onboarding note. They do not block executor handoff.

Pre-commitment predictions vs reality:
1. **Predicted: P1.0 ambiguity gap** — CONFIRMED. NI-rev4-1 is real (verified — line 535 specifies "AND" condition for Outcome A but no rule for "1-2 of 5 markers fire"). Architect's recommended fallback ("treat as Outcome C") is correct.
2. **Predicted: differentiated cueing still shares container shape** — CONFIRMED but ADEQUATELY MITIGATED. The opening paragraphs cite different Taleb works (Black Swan / Antifragile Ch 7 / Antifragile Ch 18-19) AND invoke distinct relationships (falsifier / via-negativa-guardian / convexity-seeker), AND the per-agent register-guarantee sentence at line 628 reinforces register divergence. Plus PM6 escape valve. The combination is sufficient; uniform container is a residual mild risk PM6 detects.
3. **Predicted: Pass 2 acceptance bar may be tautological** — CONFIRMED in form but NEUTRALIZED by cross-test diagnostic. The bar (≥7/8 coherent + Taleb-concept reference) is generous in isolation, but the Pass 1 × Pass 2 cross-test value (different failure modes diagnose different culprits) gives it real signal beyond single-bar acceptance. Logged as Open Question (Q-iter4-1).
4. **Predicted: cherry-pick translation handling** — CLEAN. P3 amendment block (lines 1004-1008) integrates cherry-pick + audit-grep + translation as ONE P3 sub-step (no P3-then-P4 two-pass smell); P3 dependency on P2 documented as orthogonality, not technical necessity.
5. **Predicted: SYSTEM.md framing might overclaim** — CLEAN. P4.2 frames default-mode as "Taleb's epistemology and decision-making frameworks as your default worldview" — consistent with §1.C.1's two-tier disclosure that default mode is single-voice + Taleb-flavored, not "Claude with Taleb prompt" misrepresentation.

The plan is converging. Iter-4 is the right place to APPROVE; pushing for iter-5 on three surgical items would be iteration churn, not iteration value. The 3 NI-rev4 fixes ship as a lightweight rev 3.2 doc pass post-acceptance (mirrors the rev 2.5 lightweight pass pattern).

---

## Hard Gates (Iteration 4)

| # | Gate | Status (iter 3 → iter 4) | Notes |
|---|------|---------------------------|-------|
| 1 | Principle-Option Consistency | PARTIAL PASS → **PASS** | Principle 2 reframed honestly (line 22): "MAGI tension is opt-in via `/magi`; when invoked, mandatory; default mode has no tension surface." Principle 4 (line 24) now names P1.0 pre-flight as the resolution mechanism for the slash-routing unknown. The 5 amendments are consistent with the 4 reframed principles: amendment 1A (opt-in MAGI) ↔ Principle 2; amendment 1B (canon labels dropped) ↔ Principle 3 (Taleb thinking, not canon); amendment 1C (slash-routing pre-flight) ↔ Principle 4 (platform-native, empirically verified); amendment 1D (English rewrite) ↔ Principle 5 (no breaking changes — language change does not break behavior). All 11 chosen options (B/B/A/B/C/A/A/A/A/A/A) trace to drivers; rev 3.1's O8 addition (Option C TTSR pivot) is fairly evaluated alongside Option A primary. |
| 2 | Fair Alternatives | PASS → **PASS** | O8-O11 unchanged from iter-3 PASS; rev 3.1 expanded O8 with Option C (TTSR pivot path) and honestly named it as documented-but-not-yet-built. The asymmetric structure (A primary, C documented pivot) is honest about iteration economics — not "rejected" but "deferred-pending-PM8-telemetry." |
| 3 | Risk Mitigation Clarity | PASS → **PASS** | R14-R18 carry over from iter-3; R18 severity correctly upgraded LOW→MED per SF1 honesty correction (archetype reasoning IS in the source; substitute geometry must be verified). R19 (rev 3.1 NEW) addresses PM8 telemetry sample-size caveat with concrete extend-window-to-60-days fallback when n<20. Each risk ties to a specific PM scenario AND a specific plan element AND (rev 3.1 strengthening) a falsifiable acceptance test. |
| 4 | Testable Acceptance Criteria | PARTIAL PASS → **PASS** | The iter-3 partial-pass concerns (uncalibrated PM6 Jaccard threshold, PM8 60% bar, PM7 testing template-not-geometry) are addressed: (a) PM6 ≤0.45 still uncalibrated, but rev 3.1 documents post-P4 calibration baseline; (b) PM8 60% bar logged as Q-iter3-5 active calibration item; (c) PM7 now has Test B (counterfactual) which DOES test generation geometry, with falsification trigger and 2 documented recovery paths. Mechanical testability covers register positive markers (rev 3.1 NEW `check-positive-register.sh`), Pass 2 default-mode coherence (Critic-original new check), and counterfactual M+B vs C generation geometry. |
| 5 | Concrete Verification Steps | PARTIAL PASS → **PASS** | Q-iter2-1 / Q-iter3-1 (omp verb-name verification) explicitly absorbed into P1.0 Step 0 (`omp --help 2>&1 \| head -50`) at line 511. The pre-flight is the load-bearing test, and its prerequisite verb-name verification is now explicit. |
| 6 | Pre-Mortem Quality | PASS-WITH-RESERVATIONS → **PASS** | All 8 PMs (PM1-PM8) carry concrete root causes + built-in mitigations. PM7 mitigation strengthened in rev 3.1 (Test A + Test B). PM6 escape valve still load-bearing for the "uniform container" residual risk; PM6 is the right structural backstop. PM5 register check + new positive-register check is the two-layer safety net (necessary + sufficient when combined). |
| 7 | Expanded Test Plan (4 levels) | PASS → **PASS** | Unit (4 layers including positive register check, NEW per MF5), Integration (bilingual trigger keyword test + cross-file label consistency), E2E (Pass 1 `/magi` battery + Pass 2 default-mode coherence + PM6 style-divergence + PM7 Test A + Test B counterfactual), Observability (mode field in query-log; `/magi`-rate telemetry with R19 sample-size caveat). Test corpora explicitly named: `peacemaker-questions.md` (Test A), `peacemaker-counterfactual-questions.md` (Test B, NEW per SF1), `trigger-keyword-tests.json`. |

**Hard gate net (iter 4):** 7/7 PASS. Up from iter-3's 3 PASS + 4 PARTIAL. Recovered to iter-2 quality level.

---

## Soft Gates (Iteration 4)

| # | Gate | Status (iter 3 → iter 4) | Notes |
|---|------|---------------------------|-------|
| 8 | Spec Fidelity | PASS-WITH-RESERVATIONS → **PASS** | 4 spec departures honestly adjudicated: 1.A narrative-fallacy-guard TTSR, 1.B canon labels, 1.C opt-in MAGI, 1.D English rewrite. The CO-4 reservation (spec-departure validation cost implicit, not explicit) is fully addressed in rev 3.1 — ADR Negative line 1449 explicitly names "Rev 1's 75% disagreement projection (Stage 4-5 simulation) was canon-anchored against EVA labels. Rev 3.0/3.1 swaps to English non-canon labels and provides no equivalent validation projection. The plan's P2 bail-out (≥4/8 ships with `[P2-WARN]`) is the only validation mechanism, and it is more likely to fire under rev 3.1 than rev 2.5 would have been." Honest. |
| 9 | Internal Consistency | PARTIAL PASS → **PASS** | Iter-3's 3 internal contradictions (NI-rev3-1 slash-routing inconsistent with P1; NI-rev3-2 §1.D conflated 2 mechanisms; NI-rev3-4 §1.B claimed geometry where source uses archetype) are all surgically resolved: (1) P1.0 pre-flight + conditional P1 task list; (2) §1.D split into 1.D.1 (slash-command resolution) + 1.D.2 (in-context regex), with the architectural caveat that non-alwaysApply skill body regex is dead-code-at-the-in-context-level (line 142); (3) §1.B factually corrected with explicit source quote at line 55, retraction of "geometry not archetype" claim, substitute-geometry-must-be-verified honest framing, PM7 Test B as the verification mechanism. Spot-checked: P1.0 outcomes (A/B-1/B-2/C) consistently referenced in §1.D.1, P1 task list (lines 547-548), P1 acceptance criteria (line 561+), File Manifest (line 1493). Differentiated cueing in P2 amendment block (lines 600-628) consistently referenced in P2.1 (line 755), P2.2 (line 773), P2.3 (line 791). No new internal contradictions detected. |
| 10 | ADR Quality | PASS-WITH-RESERVATIONS → **PASS** | The Architect rates the rev 3.1 ADR as "one of the best ADRs in this RALPLAN cycle." I concur. Future reader can reconstruct: (a) what was decided, (b) why, (c) tradeoffs accepted, (d) conditions for revisiting, (e) where the plan honestly retracted prior claims (line 1447 retracts "geometry not archetype"; line 1449 names spec-departure validation cost; line 1451 acknowledges identical-template Taleb cueing was a real rev 3.0 design weakness rev 3.1 fixed). The 3 prompt questions (user-driven reversal of researched decisions / shift from tribunal-by-default to optional / spec promise survival) are all honestly addressed in ADR Consequences > Negative — the rev 1 spec promise "tribunal AS the core thinking loop" does NOT survive in default mode; this is named explicitly. |

**Soft gate net (iter 4):** 3/3 PASS. Up from iter-3's 3 PASS-WITH-RESERVATIONS.

---

## Iter-3 Concerns Resolution Verification

For each iter-3 MUST FIX (5) and SHOULD FIX (3), I spot-checked rev 3.1 didn't address-in-name-only.

### MF1 — P1.0 slash-routing pre-flight (HIGH; blocks P1)

**Status: SUBSTANTIVE.** Plan §6 P1.0 (lines 503-541) is a real hard-gate with concrete bash, four named outcomes (A / B-1 / B-2 / C), and explicit Step 0 (`omp --help` for verb-name verification — Q-iter2-1 / Q-iter3-1 carryover). Outcome documentation goes to `.omc/qa/slash-routing-result.md`. Conditional P1 task list (line 547-548) correctly branches on outcome. P1 acceptance criteria (line 561+) are conditional on outcome. ADR (line 1387) names the pre-flight as part of the rev 3.1 strengthening. The plan now correctly treats `triggers:` as a file-true / semantic-effect-unverified array.

### MF2 — PM8 mitigation strengthening

**Status: SUBSTANTIVE.** §3 O8 (lines 243-275) has Option A primary, Option B rejected, Option C TTSR pivot path documented. Pivot trigger concrete (PM8 telemetry rate <5% over 30 days AND sample size ≥20 per R19). TTSR rule design sketched (lines 259-269 with concrete frontmatter). Pivot cost ~1 hour, ships as `rules/magi-suggest-trigger.md`. R19 (rev 3.1 NEW) addresses the PM8 telemetry sample-size caveat with explicit extend-to-60-days fallback when n<20. **The asymmetric absorption is honest** — Critic rated SHOULD FIX, Architect rated MUST FIX; rev 3.1 gives the Architect's preferred MUST FIX-level absorption (Option C is documented, not deferred to ADR Follow-up vapor).

### MF3 — Default-mode capability disclosure

**Status: SUBSTANTIVE.** §1.C.1 (lines 82-101) is the explicit two-tier capability disclosure. Default mode delivers list (10 alwaysApply rules, SYSTEM.md persona, 6 on-demand skills, `/magi` recommendation hint); does NOT deliver list (tribunal verdicts, structured 3-0/2-1/1-1-1 votes, per-turn debate diversity). ≥90% interactions estimated through default mode. Principle 2 honest reframing at line 22 matches: "tension is opt-in via /magi; when invoked, mandatory; default mode has no tension surface." User-facing docs (P4.5 README + AGENTS.md) carry the same disclosure. **The §1.C.1 framing "rev 3.1 is a two-tier system, not a unified Taleb-thinking agent" is the exact honesty the iter-3 critic asked for.**

### MF4 — Differentiated per-MAGI Taleb cueing

**Status: SUBSTANTIVE-WITH-CAVEAT.** P2 amendment block (lines 600-628) replaces the rev 3.0 swap-slot template with three distinct opening paragraphs:
- **MELCHIOR-1** (line 609): cites Black Swan + Skin in the Game; tone Popperian falsificationist; activates Taleb's epistemological prior
- **BALTHASAR-2** (line 614): cites Antifragile Ch 7-8 + Skin in the Game Ch 19; tone precautionary, ruin-averse; activates Taleb's defensive/iatrogenics prior
- **CASPER-3** (line 619): cites Antifragile Ch 18-19; tone opportunity-seeking, asymmetric-payoff-aware; activates Taleb's optionality prior

**Per-agent register-guarantee sentence at line 628 reinforces:** MELCHIOR-1 "combative directness, do not soften adversarial questioning"; BALTHASAR-2 "protective methodical, less rhetorical than Taleb"; CASPER-3 "opportunity-attentive tolerant, less combative than Taleb."

**Are the 3 cueing paragraphs actually different in REGISTER (not just citing different books)?** I spot-checked. The opening paragraphs differ in:
- (a) **Which Taleb work cited** — distinct (Black Swan vs Antifragile Ch 7 vs Antifragile Ch 18-19)
- (b) **Which Taleb prior activated** — distinct (epistemological vs defensive vs optionality)
- (c) **Tone descriptor** — distinct (Popperian falsificationist vs precautionary ruin-averse vs opportunity-seeking)
- (d) **Optimization target named** — distinct (evidence quality vs absorbing-barrier survival vs convex payoff structure)

The container shape "You are X, the Y of a Nassim Taleb-style thinking tribunal. Your role is to apply Taleb's Z from W: ..." is, however, structurally uniform — Architect's caveat is honest. Whether per-agent register-guarantee + per-Taleb-slice differentiation overrides the uniform container is the empirical PM6 question (Jaccard ≤0.45). Plan has the right escape valve (PM6: drop Taleb cue from BALTHASAR-2 and CASPER-3 if Jaccard >0.45). **Substantive absorption with the residual uniform-container risk honestly named.**

### MF5 — Register exemplar shipped

**Status: SUBSTANTIVE, well.** I read `.omc/plans/register-exemplar.md` (179 lines) in full. Three exemplars cite real source files (verified independently: `agents/pre-mortem.md:29`, `agents/skeptic.md:44-46`, `SYSTEM.md:42` — all line numbers correct against current rev 2.5 disk state). Each exemplar provides:
- Original Chinese (file:line cited and verified)
- Direct/flat English translation explicitly framed as FAILURE MODE
- Taleb-register-preserving English translation as TARGET (preserves imperative force, em-dash, identity-level role assignment, productive-sense verbs, explicit permission grants)
- Hedge regex pass/fail per version
- Adversarial-bite test pass/fail per version
- Per-file applicability table (incl. CASPER-3 exemption for Exemplar 2 consistent with MF4's CASPER-3-as-opportunity-attentive register)
- Acceptance regex per file

**Does `register-exemplar.md` actually preserve Chinese adversarial bite, or did Architect over-credit it?** I cross-checked the source line numbers and the TARGET translations:
- Exemplar 1 TARGET preserves "Do not" imperative + em-dash + "your job" product framing + "manufacture" productive-sense — these are the exact register markers in the original Chinese
- Exemplar 2 TARGET preserves "Do not" imperative across all 3 lines + identity-level "your existence is the production of measured discomfort" framing — original Chinese says exactly this
- Exemplar 3 TARGET preserves "is permitted" explicit permission grant + em-dash + sharp idea/user distinction with imperative force "mock the idea, not the user" — matches the original 嘲讽X是被允许的——但是嘲讽X，不是嘲讽Y structure

**Architect did NOT over-credit it.** The exemplar is genuinely sharp. The acceptance regexes are mechanically checkable. The implementation note for `check-positive-register.sh` (lines 139-173 of exemplar) is concrete bash that reads the per-file applicability table and exits non-zero if a file has zero matches where exemplar applies. **Substantive absorption.**

### SF1 — PM7 honesty + counterfactual test

**Status: SUBSTANTIVE.** §1.B (lines 50-55) factually corrected. The plan now honestly reports the cross-validation report's exact text (`"the conservative mother → her protective instinct → natural tie-breaker"` — verified directly against `.omc/scientist/reports/20260505_013647_magi_cross_validation.md:74`) and explicitly retracts the rev 3.0 claim "geometry not archetype" as wrong-about-the-source. Plan's substitute rationale honestly disclosed as empirically uncertain. PM7 has Test A + Test B (line 391). Test B's falsification trigger documented; recovery paths (a) re-introduce canon partial annotation (~2 hours) and (b) accept ally-of-M and rewrite synthesizer templates (~4 hours) both have effort estimates.

**Is the PM7 Test B counterfactual test (Test B: M+B vs C) concrete enough to run?** Yes — 3 hand-picked battery questions named with examples ("Should I rebalance my portfolio out of broad-market index funds and into individual high-conviction stocks?" / "Should I leave my stable engineering job to bootstrap a startup?"). Each question's expected vote pattern is named (M+B both lean conservative; C sees option value). Acceptance bar concrete: 3/3 synthesizer correctly classifies M+B vs C; 2/3 BALTHASAR-2 contains mediation marker. Falsification trigger concrete: 3/3 BALTHASAR-2 reads as ALLY of MELCHIOR-1 → pivot. **This is the actual generation-geometry test the rev 3.0 plan was missing.**

### SF2 — §1.D split (slash-command vs in-context regex)

**Status: SUBSTANTIVE.** §1.D split into:
- **1.D.1** (slash-command resolution at parse-time, line 122) — depends on P1.0 outcome
- **1.D.2** (in-context regex at turn-generation-time, lines 130-142) — lives in alwaysApply rule bodies

**Architectural caveat at line 142**: "if a bilingual keyword list lives inside a *non-alwaysApply* skill body (e.g., `skills/magi-tribunal/SKILL.md`), it is dead code at the in-context regex level — by the time the skill body is in context, the user has already invoked `/magi`." This is exactly the conflation iter-3 NI-rev3-2 flagged. The `triggers:` array in the magi-tribunal skill is for slash-command resolution (1.D.1), not in-context detection (1.D.2). Honest.

### SF3 — Battery scoping (Pass 1 + Pass 2)

**Status: SUBSTANTIVE.** §5 E2E section (lines 446-464) has Pass 1 (`/magi`-invoked battery, ≥6/8 disagreement; rev 2.5 contract carried forward) AND Pass 2 (default-mode coherence on the same 8 questions, ≥7/8 sensible Taleb-flavored response without `/magi` prefix; rev 3.1 NEW). Cross-test diagnostic value named at line 464: Pass 1 fail + Pass 2 pass ⇒ MAGI agent prompts (P2.1-P2.4) are the issue; Pass 1 pass + Pass 2 fail ⇒ alwaysApply rules / SYSTEM.md (P3-P4) are the issue. **The Pass 2 acceptance bar (≥7/8 coherent + Taleb concept reference; either implicit application or explicit naming) is broad — borderline tautological in isolation.** I rate this as ADEQUATE, not strong, because:
- The bar is generous in absolute terms (Taleb concept reference can be implicit application; almost any reasonable response on a "should I add X?" question will apply via-negativa whether or not it names it)
- BUT the cross-test diagnostic (Pass 1 vs Pass 2 separation) gives Pass 2 real diagnostic value that single-bar tests don't have
- Net: the diagnostic structure is the load-bearing element; the 7/8 bar is calibration
- Logged as Q-iter4-1 (post-acceptance): consider tightening Pass 2 bar to require explicit Taleb concept naming (not just implicit application) on at least 4/8 questions, after empirical baseline

---

## Architect's NI-rev4 Triage

### NI-rev4-1 — P1.0 ambiguous-outcome decision tree missing

**Status: SHOULD FIX (lightweight rev 3.2 doc pass)**

**Verification:** Searched plan for "1-2 of 5", "partial markers", "ambiguous", "inconclusive" in the P1.0 outcome classification body — zero hits. Plan defines Outcomes A / B-1 / B-2 / C cleanly but does not address the ambiguous case (e.g., probe shows MELCHIOR/BALTHASAR/CASPER mentions but no `task` dispatch trace; runtime echoes `/magi` in prose without skill firing). Architect's recommended fallback ("If probe markers fire partially (1-2 of 5 hit), treat as Outcome C — halt and investigate; do not proceed under Outcome A on partial evidence") is the right rule.

**Edit (1 line, ≤2 minutes):** Add to plan §6 P1.0 outcome classification (after the Outcome A definition at line 535):
```
**Disambiguation rule (rev 3.2)**: If probe markers fire partially (1-2 of the 5 markers hit, OR no `task` dispatch trace despite some skill body markers appearing), treat as Outcome C (halt and investigate before proceeding). Do NOT default to Outcome A on partial evidence — the AND-condition for Outcome A requires ALL of "MAGI Tribunal header + MELCHIOR/BALTHASAR/CASPER references + `task` invocation trace" to fire.
```

**Severity:** LOW. **Realist Check**: worst case is the executor sees ambiguous probe output, tries Outcome A on partial evidence, ships P1, then discovers at P2 that `/magi` doesn't reliably resolve. Detection within ~1 day; rework path documented. Outcome C is the safe fallback even without the explicit rule (executor reading the plan carefully would naturally halt on ambiguous evidence, but the rule should be written down so the bias toward "evidence I want to see" doesn't push the executor toward Outcome A).

### NI-rev4-2 — `task ` grep matcher loose

**Status: SHOULD FIX (lightweight rev 3.2 doc pass)**

**Verification:** Plan line 529-530 grep is `MAGI Tribunal|MELCHIOR|BALTHASAR|CASPER|parallel Round|task `. Architect is correct that the trailing-space `task ` matcher is loose: any LLM response prose containing "I'll dispatch a task to..." would false-positive. The other 4 markers are stronger — and the AND-condition wording at line 535 (Outcome A requires "header AND MELCHIOR/BALTHASAR/CASPER references AND `task` invocation trace") bounds the false-positive risk to scenarios where ALL FIVE markers fire including the loose one. But strengthening the matcher costs ~5 minutes and removes the residual risk.

**Edit (1 line, ≤5 minutes):** Update plan §6 P1.0 Step 3 grep (line 529-530) to:
```bash
# Tighten `task ` matcher: look for tool-call structural form (omp emits a specific
# format when actually dispatching, distinct from LLM prose containing the word "task").
# If the executor's omp version emits `<tool_use name="task">` or similar, anchor on that.
grep -E "MAGI Tribunal|MELCHIOR|BALTHASAR|CASPER|parallel Round|<tool_use[^>]*task|task --" /tmp/magi-probe.txt
# OR document an executor manual visual inspection step:
# > Visually inspect /tmp/magi-probe.txt for evidence dispatch ran (look for tool_use
# > XML, structured task arguments, or runtime metadata) vs LLM prose containing the
# > word "task." If unsure, treat as ambiguous and apply Disambiguation rule (Outcome C).
```

**Severity:** LOW. **Realist Check**: same scenario as NI-rev4-1. Mitigated by the AND-condition + Architect's recommended manual visual inspection step.

### NI-rev4-3 — Plan size onboarding note (1537 lines)

**Status: SHOULD FIX (lightweight rev 3.2 doc pass)**

**Verification:** Plan is 1537 lines (verified via `wc -l`). Architect's concern is real: executor handoff reading 1537 lines linearly is high overhead. But the rev 3.1 changelog (top of plan §1) + §1 (Principles) + §6 (Phase-by-Phase Plan) + §8 (ADR) is the actual orientation set; the remaining ~700 lines are reference-during-execution (per-task acceptance criteria, verification command sequences, per-phase bash scripts).

**Edit (1 line, ≤2 minutes):** Add at top of §6 (Phase-by-Phase Plan, line 494):
```
**Executor onboarding strategy:** Read this plan's rev 3.1 changelog (top of §1) + §1 (Principles + §1.A-§1.D adjudications) + §6 (Phase-by-Phase Plan, especially P1.0 hard gate and P2.0 hard gate) + §8 (ADR) as orientation. The remaining ~700 lines (per-task acceptance criteria, verification command sequences, per-phase bash scripts in §6.P1-§6.P5; risk table in §7; file manifest in §9) are reference-during-execution, not orientation-before-execution. Do not read all 1537 lines linearly before starting P1.0 — that is iteration churn, not iteration value.
```

**Severity:** LOW. **Realist Check**: worst case is executor reads all 1537 lines linearly before starting, costs ~2-3 hours of focused reading instead of ~30 minutes orientation + per-phase reference reading. Cost asymmetry is real but bounded.

**Net NI-rev4 triage:** all 3 are SHOULD FIX, all are LOW severity, all are surgical (~9 minutes total work). None block executor handoff. They ship as a lightweight rev 3.2 doc pass post-acceptance.

---

## Critic-Original New Issues (Iter-4)

### CO-iter4-1 — SYSTEM.md P4.2 framing test against §1.C.1 disclosure

The user's prompt asks: *"Does P4 [SYSTEM.md rewrite] correctly capture the new identity? Does it position default-mode as 'Claude with Taleb framing' or claim something stronger?"*

**Verification:** P4.2 SYSTEM.md open paragraph (line 1101): *"You are taleb-pi — a thinking agent operating with Nassim Taleb's epistemology and decision-making frameworks (the Incerto: ...) as your default worldview."* Plus P4.2 line 1104 honestly names the rev 3.0 architecture shift: *"For high-stakes irreversible decisions where multiple optimization dimensions clash, the user may invoke `/magi <question>` to engage the full Taleb tribunal... Default-mode responses follow the always-apply rules and these behavioral guidelines."*

**Evaluation:** The framing claims something stronger than "Claude with Taleb framing" — it claims "default worldview = Taleb's epistemology." Whether the agent actually produces Taleb-flavored single-voice responses (vs generic-Claude-with-Taleb-prompt-prepended) is the empirical Pass 2 acceptance test (≥7/8 coherent + Taleb concept reference). **The framing is NOT misleading IF Pass 2 passes** — at ≥7/8 the agent is meaningfully Taleb-flavored even if not adversarial-tribunal-grade. **The framing IS misleading IF Pass 2 fails** — the user would have invested in a "Taleb thinking agent" SYSTEM.md framing that delivers Taleb-flavored output only on `/magi`. This risk is bounded by Pass 2 acceptance.

**Triage: NO EDIT NEEDED.** Plan's §1.C.1 two-tier disclosure (line 101: "rev 3.1 is a two-tier system, not a unified Taleb-thinking agent") + P4.2 SYSTEM.md framing + Pass 2 acceptance test together form a coherent honest framing. Logged as Q-iter4-1 in Open Questions (calibration check post-Pass-2-results: if Pass 2 lands at 6/8 with mostly implicit Taleb application, the SYSTEM.md framing is empirically over-claiming and should be softened in a post-launch doc pass).

### CO-iter4-2 — Cherry-picked attic files English translation integration

The user's prompt asks: *"Is the cherry-pick from attic branch (`rules/cognitive-state-diagnosis.md`, `skills/mental-models/SKILL.md`) still in scope? In rev 3.1's English-rewrite world, these need translation when integrated. Did the plan account for that?"*

**Verification:** Plan §6 P3 amendment block (lines 1004-1008) explicitly handles this: *"Cherry-picked files (cognitive-state-diagnosis, mental-models) are cherry-picked from the attic branch as-is, then translated to English with Taleb cueing as a P3 sub-step (similar P4 treatment for the 6 existing rules — but for these 2 cherry-picked files the translation happens at integration time so they enter the repo English-from-the-start). This avoids a 'two-pass on the same file' smell where P3 cherry-picks Chinese and P4 translates the same file."* P3 task list (lines 1011-1018) integrates cherry-pick + audit-grep + translation as ONE P3 sub-step. PM3 (rev 3.0 update line 347) names this: *"P3 now translates these files to English with non-canon labels (`Empirical Skeptic` etc.) at integration time, so the cherry-pick + audit-grep + translate flow is one P3 sub-step rather than a P3-then-P4 two-pass."*

**Triage: CLEAN. NO EDIT NEEDED.** Plan correctly handles this — better than I expected from my pre-commitment prediction.

### CO-iter4-3 — Pass 2 acceptance bar tautology check

The user's prompt asks: *"Pass 2 (default-mode coherence) is now the test that 'Taleb framing actually works without MAGI.' Is the bar (≥7/8 sensible Taleb-flavored response) calibrated correctly, or is it a tautology (anything not gibberish passes)?"*

**Verification:** Pass 2 acceptance (line 463): *"≥7/8 default-mode responses are coherent AND reference Taleb concepts. The reference can be implicit (the response *applies* the concept) or explicit (the response *names* the concept)."* The implicit-application allowance (line 462) is broad — "reframes a 'should I add X?' question via via-negativa" essentially says "any response on a should-I-add-X question that doesn't naively answer 'yes, add it' would pass." That's borderline tautological because:
- If SYSTEM.md says "code is subordinate to Taleb thinking" + always-apply via-negativa rule fires the keyword regex on "add", then almost any response will "apply via-negativa" by reframing
- The bar mechanically passes if the agent is competent enough to follow its own system prompt

**Counter-argument (why the bar isn't a pure tautology):**
- The cross-test diagnostic value (Pass 1 vs Pass 2 split) DOES produce real signal:
  - Both pass → P2 + P3-P4 are both adequate
  - Pass 1 fails + Pass 2 passes → MAGI agent prompts are the issue (not framework injection)
  - Pass 1 passes + Pass 2 fails → alwaysApply rules / SYSTEM.md flattened the register too much
  - Both fail → systemic failure
- The diagnostic structure is what carries the load, not the absolute 7/8 bar
- 7/8 is a calibration target, not a tautology check

**Triage: ACCEPTABLE BUT WORTH MONITORING.** Logged as Q-iter4-1 in open-questions.md: *"After Pass 2 first-run results (P4 acceptance), audit whether the bar is too generous. If 8/8 questions trivially pass with implicit application, tighten the bar to require explicit Taleb concept naming on at least 4/8 questions to differentiate Taleb-flavored from Taleb-prompt-with-no-real-effect."*

**Severity:** LOW. **Realist Check**: worst case is Pass 2 always passes 8/8, providing zero signal beyond Pass 1; cost is paying the test cost without diagnostic value. Mitigated by: cross-test diagnostic structure provides real value even with generous bar; calibration tightening is a 5-minute post-P4 doc pass. Stays as logged-but-not-blocking.

### CO-iter4-4 — Q-iter3-3 still unresolved (in-context regex parse-time vs turn-generation-time)

**Verification:** open-questions.md Q-iter3-3 (line 76): *"In-context regex inside alwaysApply rule bodies is matched by the LLM during turn generation (not by the runtime at parse time). Empirical verification deferred — if the LLM doesn't reliably attend to the regex during generation, PM8 mitigation underperforms; pivot to Option C TTSR rule (which uses runtime parse-time regex matching)."* The plan correctly acknowledges this (per SF2 absorption) and documents the pivot path (Option C TTSR rule).

**Triage: NO EDIT NEEDED.** This is correctly logged as deferred-empirical-question. The rev 3.1 plan handles it the right way — name the architectural concern, document the pivot mechanism, defer empirical verification.

**Severity:** N/A. Already logged.

---

## Iteration Economics

This is iteration 4 of max 5. Decision space:

| Path | Cost | Benefit | Risk |
|---|---|---|---|
| **APPROVE (this verdict) + lightweight rev 3.2 doc pass** | Executor applies 3 NI-rev4 fixes (~9 minutes total: 1 line for ambiguity rule, 1 line for tightened grep, 1 line for onboarding note) before P1.0 begins; P1.0 pre-flight runs against actual `omp` binary; P1 commit ships | Saves a full P→A→C iter-5 cycle; preserves 5/5 MUST FIX + 3/3 SHOULD FIX absorbed; rev 3.1 plan is 7/7 hard gates pass + 3/3 soft gates pass; 1 of remaining 2 iterations preserved for emergency post-handoff fixes if P1.0 reveals genuine architectural surprises | NI-rev4 fixes are mechanical and surgical — executor judgment is sufficient; the 3 fixes don't change WHICH FILES are deleted/created (unlike iter-3's NI-rev3-1 slash-routing decision) |
| **ITERATE → rev 3.2 (full P→A→C cycle)** | One more P→A→C cycle (~3-5 hours wall-clock for 3 lines of polish edits) | Marginal: NI-rev4-1/2/3 land in rev 3.2 plan body rather than as P0 executor edits | Iteration churn — spends iter-5 (1 of remaining 2) on ~30 lines of polish; risk of introducing iter-5 NI-rev5 from a fifth revision pass; the architectural spine is sound, polish is not the bottleneck |
| **REJECT** | Forces full re-plan | None — plan is not fundamentally broken | Severity-mismatch — slash-routing is empirically resolved at P1.0; canon-removal peacemaker is empirically falsifiable at PM7 Test B; per-MAGI cueing differentiated; register exemplar shipped. Rejecting on 3 surgical NI-rev4 items is the wrong call. |

**Substance vs polish judgment:** This IS polish. Unlike iter-3's NI-rev3-1 (slash-routing pre-flight changed WHICH FILES P1 deletes — plan-level decision) and NI-rev3-3 (per-agent Taleb cueing required drafting 3 distinct opening paragraphs — creative writing), the iter-4 NI-rev4 items are:
- **NI-rev4-1**: 1-line disambiguation rule (executor-applicable; doesn't change which files are touched)
- **NI-rev4-2**: 5-minute grep refinement OR documented manual inspection step (executor-applicable)
- **NI-rev4-3**: 1-line onboarding note (cosmetic; doesn't affect execution outcome)

**Critical contrast with iter-3 (rev 3.0):** in iter-3, the NIs required plan-author judgment on architectural decisions (which slash-routing branch to commit to, how to differentiate per-agent Taleb cueing, what to disclose about default-mode capability). **In iter-4 (rev 3.1), the NIs are pure polish executor can apply as plan amendments before P1.0 ships.** This is the same situation as iter-2 (rev 2.5 → rev 2.5-with-P0-edits) where the verdict was correctly APPROVE-WITH-RESERVATIONS and the rev 2.5 lightweight doc pass shipped.

**The iteration economics are clearly on APPROVE + lightweight rev 3.2 doc pass.**

---

## Final Recommendation

**Verdict: APPROVE**

**Path forward:**
1. **Executor handoff begins immediately at P1.0 pre-flight.** The plan is executable. P1.0 pre-flight runs against the user's actual `omp` binary (5 minutes); P1.0 outcome documented in `.omc/qa/slash-routing-result.md`; P1 task list branches conditionally on outcome.

2. **Lightweight rev 3.2 doc pass (≤15 minutes total) ships either before or after P1.0:**
   - **NI-rev4-1 fix (1 line)**: add disambiguation rule to P1.0 outcome classification at line 535 (the rule prevents executor from defaulting to Outcome A on partial evidence)
   - **NI-rev4-2 fix (5 minutes)**: tighten the `task ` grep matcher in P1.0 Step 3 OR add explicit executor manual visual inspection step (whichever the executor prefers based on actual `omp` output format observed at P1.0)
   - **NI-rev4-3 fix (1 line)**: add executor onboarding strategy note at top of §6 (line 494)
   
   These can ship as a single `[rev 3.2] doc pass: NI-rev4 absorption` commit OR be applied directly during P1.0 work (executor judgment).

3. **Critic does not need to re-review rev 3.2.** The 3 fixes are mechanical edits with no architectural impact; reviewing them as a rev 3.2 → iter-5 cycle would be iteration churn.

4. **Hard gates the executor MUST honor at runtime (carried over from rev 3.1):**
   - **P1.0 hard gate**: pre-flight outcome documented before P1 task 1 begins
   - **P2.0 hard gate**: register exemplar exists at `.omc/plans/register-exemplar.md` before P2.1 begins; `check-positive-register.sh` exists and runs against a smoke-test file
   - **P5.4-pre hard gate**: subagent skill access smoke test resolved (Pass A / Pass B / Fail) before P5.4 begins

5. **Empirical falsification triggers the executor MUST monitor:**
   - **P2 bail-out**: ≥6/8 disagreement → ship; ≥4/8 → ship with `[P2-WARN]`; <4/8 → P2 fails
   - **PM6 Jaccard ≤0.45** (P4 acceptance): if violated, escape valve fires (drop Taleb cue from BALTHASAR-2 and CASPER-3)
   - **PM7 Test B falsification**: if 3/3 BALTHASAR-2 reads as ALLY of MELCHIOR-1 → pivot to canon partial-annotation OR ally-not-mediator template
   - **PM8 telemetry pivot**: if `/magi`-rate <5% over 30 days AND sample size ≥20 → ship Option C TTSR rule (~1 hour)

**The plan is ready for executor handoff.** Iter-4 verdict: APPROVE.

---

## Verdict Justification

**Mode of operation:** THOROUGH throughout. No escalation to ADVERSARIAL was warranted — zero CRITICAL findings, zero MAJOR findings, all iter-3 concerns substantively absorbed. The 3 NI-rev4 issues are LOW severity surgical polish. Pre-commitment predictions vs reality: 5/5 honest predictions; 1 (P1.0 ambiguity) confirmed real, 4 confirmed clean or adequately mitigated.

**Realist Check applied to iter-3 absorption assessment:**
- MF1 (slash-routing): SUBSTANTIVE — pre-flight is real hard-gate with concrete bash; P1 conditional task list correctly branches
- MF2 (PM8 strengthening): SUBSTANTIVE — Option C TTSR pivot path is concrete with sketched frontmatter and ~1-hour effort estimate; R19 sample-size caveat addresses my MED-HIGH realist concern from iter-3
- MF3 (default-mode disclosure): SUBSTANTIVE — §1.C.1 is the explicit two-tier disclosure I asked for in iter-3
- MF4 (differentiated Taleb cueing): SUBSTANTIVE-WITH-CAVEAT — three distinct opening paragraphs cite different Taleb works AND invoke distinct relationships AND have register-guarantee sentences; uniform container shape is residual risk PM6 detects
- MF5 (register exemplar): SUBSTANTIVE — verified line numbers correct against current rev 2.5 disk state; TARGET translations preserve register; per-file applicability table with CASPER-3 exemption is internally consistent
- SF1 (PM7 honesty): SUBSTANTIVE — §1.B retraction explicit; PM7 Test B counterfactual concrete
- SF2 (§1.D split): SUBSTANTIVE — 1.D.1 vs 1.D.2 distinction with explicit dead-code-warning for non-alwaysApply skill body regex
- SF3 (battery scoping): SUBSTANTIVE — Pass 1 + Pass 2 with cross-test diagnostic value

**Why APPROVE not ITERATE:**
- 7/7 hard gates PASS (up from iter-3's 3/4 + 4 PARTIAL); 3/3 soft gates PASS (up from iter-3's 0/3 + 3 PASS-WITH-RESERVATIONS)
- 5/5 MUST FIX absorbed + 3/3 SHOULD FIX absorbed; zero address-in-name-only patches detected
- 3 NI-rev4 items are surgical polish, not plan-author decisions (unlike iter-3 NIs)
- Iter-4 is the correct place to APPROVE; pushing iter-5 on 3 lines of polish would be iteration churn
- The architectural spine is sound: 4 rev 3.0 amendments survive intact with stronger empirical anchoring (P1.0 pre-flight, PM7 Test B, differentiated cueing, register exemplar)

**Why APPROVE not APPROVE-WITH-RESERVATIONS (the architect's verdict):**
- I rate the 3 NI-rev4 fixes as routinely-executor-applicable polish that ship as a rev 3.2 doc pass, not as "reservations" the user must explicitly accept
- The Architect's APPROVE-WITH-RESERVATIONS framing is reasonable but slightly more cautious than iteration economics warrant — APPROVE with documented rev 3.2 doc pass is the iter-4 outcome that matches iter-2's pattern (APPROVE-WITH-RESERVATIONS for rev 2.5 → rev 2.5-light-doc-pass)
- The user can interpret APPROVE as "executor proceeds; 3.2 doc pass is documentation cleanup"

**Why APPROVE not REJECT:**
- Plan spine is sound; 4 amendments are individually defensible; ADR is honest about user-driven reversals; spec departures named explicitly; rev 3.1 strengthenings are real (not amendment-driven growth without re-validation)
- All architectural unknowns have empirical resolution paths (P1.0 pre-flight; PM7 Test B; PM6 escape valve; PM8 Option C pivot)
- Rejecting on 3 surgical NI-rev4 items is severity-mismatch

---

## Open Questions (unscored, iter-4)

Items surfaced during iter-4 verification that did not rise to scored findings:

- **Q-iter4-1 — Pass 2 acceptance bar calibration**: ≥7/8 with implicit-application allowance is borderline tautological. Cross-test diagnostic value (Pass 1 vs Pass 2 split) carries the load; absolute bar is calibration. **Action**: after Pass 2 first-run results (P4 acceptance), audit whether the bar is too generous. If 8/8 trivially pass, tighten the bar in a 5-minute post-P4 doc pass to require explicit Taleb concept naming on at least 4/8.

- **Q-iter4-2 — SYSTEM.md framing vs Pass 2 results**: P4.2 SYSTEM.md frames the agent as "thinking agent operating with Nassim Taleb's epistemology and decision-making frameworks as your default worldview." If Pass 2 lands at 6/8 with mostly implicit Taleb application, the SYSTEM.md framing is empirically over-claiming. **Action**: same as Q-iter4-1; tighten or soften SYSTEM.md framing post-Pass-2-results.

- **Q-iter4-3 — Uniform container shape in MAGI cueing**: differentiated opening paragraphs cite different Taleb works but share container shape ("You are X of a Tribunal, your role is to apply Taleb's Y from Z"). PM6 Jaccard ≤0.45 audit detects whether per-Taleb-slice + register-guarantee differentiation overrides the uniform container. **Action**: PM6 escape valve already documented; if Jaccard >0.45 on >1/4 questions, drop Taleb cue from BALTHASAR-2 and CASPER-3 (asymmetric cueing). No edit needed pre-handoff; logged as empirical question.

- **Q-iter4-4 — `triggers:` array semantic effect** (depends on P1.0 outcome): if P1.0 Outcome A confirms `triggers:` works as known-undocumented oh-my-pi behavior, document this in `.omc/qa/slash-routing-result.md`. If Outcome B-1 / B-2, strip `triggers:` from skill frontmatter as dead metadata. The plan correctly handles this conditionally. No edit needed pre-handoff.

- **Q-iter4-5 — Iter-5 budget reservation**: with iter-4 APPROVE, iter-5 (1 of remaining 2 iterations) is preserved for emergency post-handoff fixes if P1.0 reveals genuine architectural surprises (e.g., `omp` verb names are radically different from assumed; subagent skill access has unknown failure mode). Recommend NOT consuming iter-5 budget on rev 3.2 polish — apply rev 3.2 fixes as plan amendments before P1.0 begins.

These are post-handoff quality items, not blocking findings. None affect the iter-4 APPROVE verdict.

---

*Critic iteration 4 complete. Verdict APPROVE. Concur with Architect on substantive absorption of all 5 MUST FIX + 3 SHOULD FIX from iter-3. Three NI-rev4 items rated SHOULD FIX (lightweight rev 3.2 doc pass). Path forward: executor handoff at P1.0 immediately; rev 3.2 doc pass ships in parallel; Critic does not re-review rev 3.2. The plan is ready.*

---

(prior iter-3 evaluation preserved below)

# Critic Evaluation (Iteration 3 — Revision 3.0, Deliberate)

**Reviewer:** Critic (oh-my-claudecode:critic)
**Plan:** `.omc/plans/taleb-pi-execution-plan.md` (1222 lines, +49% from rev 2.5's 819)
**Architect Review (iter 3):** ITERATE → rev 3.1 with 5 MUST FIX + 3 SHOULD FIX
**Mode:** RALPLAN-DR DELIBERATE, iteration 3 of max 5
**Date:** 2026-05-05
**Investigation Mode:** ADVERSARIAL (escalated — 1 confirmed HIGH-severity Principle 4 violation hinges on slash-routing claim)

---

## Verdict

**ITERATE → rev 3.1**

Concur with the Architect on the central diagnosis: **the rev 3.0 plan rests on a load-bearing platform claim that is empirically false against oh-my-pi's documentation, and that claim gates P1 directly**. P1 deletes `commands/` and the plan asserts `/magi` slash-routing happens via `skills/magi-tribunal/SKILL.md`'s `triggers:` array. Two independent WebFetches against `https://raw.githubusercontent.com/can1357/oh-my-pi/main/docs/skills.md` and the project README confirm: (a) `triggers:` is **not in the documented skill frontmatter schema** (the documented fields are `name`, `description`, `globs`, `alwaysApply`); (b) `enableSkillCommands: true` (set at `config.yml:9`) registers skills as `/skill:<name>` — so a user typing `/magi` resolves to **nothing**, while `/skill:magi-tribunal` resolves to the skill body; (c) custom slash commands "exclusively" live in `commands/<name>.md` per the project README, with frontmatter fields `name`, `description`, `aliases` (verified on disk at `commands/skeptic.md:1-4`). There is no `commands/magi.md` today. **If the plan ships P1 as written, `/magi` will not resolve to anything.** This is a Principle 4 (Platform-native only) violation hiding behind unverified mechanism assumptions.

The fix is mechanical (5-minute pre-flight test + branch logic on outcome), and it does NOT require reverting amendments A1-A4. But it gates P1, not P2, because P1's deletion of `commands/` is one of the three branches the pre-flight outcome could falsify. This is the same diagnosis the Architect reached.

**Beyond slash-routing, four substantive concerns survived self-audit and realist check:**

1. **NI-rev3-3 (per-MAGI Taleb cueing identical with role swap-slot)** — Confirmed. Plan §6 P2.1-P2.3 give MELCHIOR/BALTHASAR/CASPER nearly identical opening-paragraph templates ("You are X, the Y node of a Nassim Taleb-style adversarial thinking tribunal. Your role embodies one slice of Taleb's framework..."). PM6 (style hijack) is the predicted consequence of the literal sameness. The per-agent register sentences (lines 480, 504, 516) ARE differentiated, but they sit downstream of an identical anchoring template — the model reads the same Taleb anchor first, regresses toward it, then encounters per-agent register guidance which is asked to "override" what the open paragraph already activated. Architect's reframing — MELCHIOR-1 cites Taleb-the-falsifier, BALTHASAR-2 cites Taleb-the-via-negativa-guardian, CASPER-3 cites Taleb-the-convexity-seeker — is the right surgical fix.

2. **NI-rev3-4 (peacemaker geometry asserted, not re-derived)** — **Confirmed by direct evidence.** I read the cross-validation report at `.omc/scientist/reports/20260505_013647_magi_cross_validation.md:74`. The report's exact text: *"Designate BALTHASAR-2 (the conservative mother) as the structural peacemaker. **Her protective instinct makes her the natural tie-breaker** — when the other two disagree on non-ruin questions, she can accept the stronger argument."* This is **archetype reasoning** ("the conservative mother" → "her protective instinct" → "natural tie-breaker"), NOT optimization-target geometry. The plan's §1.B claim (lines 50-54) that peacemaker logic "derived from optimization-target geometry, not from the maternal archetype" is **factually wrong about the source artifact**. Drop "Mother" and the load-bearing chain breaks; the plan must either (a) re-derive the chain from first principles in the BALTHASAR-2 prompt body without the archetype shortcut, or (b) treat BALTHASAR-2's tie-break authority as an open empirical question and add the counterfactual M+B vs C test the Architect proposes.

3. **NI-rev3-2 (bilingual trigger keyword surface conflates two mechanisms)** — Confirmed. Plan §1.D line 96-98 says *"the bilingual list lives in the rule or skill that owns the trigger,"* lumping together (i) skill `triggers:` frontmatter array (slash-command resolution at parse time, undocumented per the WebFetch above) and (ii) regex lists embedded in alwaysApply rule bodies (in-context match against user input during turn generation). These are different surfaces with different runtime semantics. If the bilingual keyword list lives in the magi-tribunal SKILL body, **it never matches user input** — by the time the skill body is in context, the slash-command has already fired. The regex is dead code at that location. The plan needs to distinguish slash-command resolution (skill `triggers:` or `commands/*.md` aliases) from in-context regex detection (alwaysApply rule bodies, which are always in working memory and thus available for the LLM to match user input against).

4. **NI-rev3-5 (default-mode capability under-specified)** — Confirmed. The plan defines default mode (§1.C line 74) as *"today's pre-MAGI behavior, but with English system prompts and explicit Taleb cueing."* But P1 deletes `commands/`, so default mode is *not* "today's pre-MAGI behavior" — it's "today's pre-MAGI behavior MINUS modes." More critically, default mode has zero MAGI dispatch by design, which means **D1 (tension authenticity) — the user's rev 1 highest-priority driver, the one constraint Round 16 explicitly named "mandatory" — does not apply to >90% of user interactions** (an estimate, but defensible: most queries don't hit the high-stakes-marker threshold for `/magi`). The plan's PM5 register check verifies absence of softening hedges, which is *not* tension authenticity in the D1 sense — tension requires three optimization targets in productive disagreement. Default mode has one voice. The plan should be honest about this: **the rev 1 spec's "tension is mandatory" claim has been narrowed to "tension is opt-in via /magi"**. The Architect's Synthesis #4 (add §1.C.1 explicit default-mode capability disclosure) is correct.

The plan's other parts are genuinely solid, including: 17/17 of my iter-2 P0 edits absorbed (NI-1 stub skill at P2.7, NI-2 ratio-based parallelism test, NI-3 cross-file label consistency check); the new PM5/PM6/PM7/PM8 mitigations are concrete and have testable acceptance gates; the 8 ADR Negative Consequences honestly catalog tradeoffs; the spec-departure adjudication (3 deliberate departures, all named) is honest. The plan is not gold-plated — the 49% growth is amendment-driven, not theatrical.

**The iteration economics flip the verdict to ITERATE, not APPROVE-WITH-RESERVATIONS, because**: NI-rev3-1 is structurally upstream of P1 itself. Unlike rev 2.5's NI-1/NI-2/NI-3 (which were polish edits the executor could apply at P2 acceptance time), the slash-routing pre-flight changes WHICH FILES P1 deletes — that is a plan-level decision, not an executor edit. NI-rev3-3 (differentiated Taleb cueing) and NI-rev3-4 (peacemaker re-derivation) are also content-level edits to the plan body, not bash scripts the executor writes. The Architect's "ITERATE → rev 3.1" verdict correctly identifies these as plan amendments, not executor responsibilities.

---

## Hard Gates (Iteration 3)

| # | Gate | Status (iter 2 → iter 3) | Notes |
|---|------|---------------------------|-------|
| 1 | Principle-Option Consistency | PASS → **PARTIAL PASS** | All 11 chosen options (B/B/A/B/C/A/A/A/A/A/A) trace to drivers. Why-Chosen at lines 1126-1131 explicitly maps each option back to D1/D2/D3/D4. **However, Principle 2 ("MAGI tension is mandatory, not theatrical (when invoked)") is rev 3.0's most material principle bend** — the parenthetical scope-narrowing is honest but the principle still claims "mandatory" while default mode (>90% of turns) has no tension surface. The honest framing per Architect Synthesis #6 is "MAGI tension is opt-in via /magi; when invoked, mandatory; default mode has no tension surface." Plan should adopt this. **Principle 4 (Platform-native only)** is at risk if NI-rev3-1 reveals `triggers:` does not actually route slash commands — pre-flight resolves. |
| 2 | Fair Alternatives | PASS → **PASS** | O8-O11 (rev 3.0's new options) each list 2-3 alternatives with non-trivial pros/cons. O8 (keep ~50-token hint vs delete entirely) honestly evaluates both. O9 (full rewrite vs surgical translation vs Chinese with English summaries vs side-by-side bilingual) lists all four. O10 (open-paragraph only vs every-section vs every-paragraph) — the rejected options have honest cons explaining WHY they're rejected (PM6 risk). O11 (agents-only vs agents+research vs full repo grep-replace) — the canon-language preservation tradeoff is honestly named. **Caveat**: Architect's NI-rev3-6 (50-token hint is wrong tool for PM8) is not strictly an Alternatives violation — O8 considered "delete entirely" — but neither option considered the TTSR-triggered injection variant the Architect proposes. Logged as Open Question, not a Fair Alternatives failure. |
| 3 | Risk Mitigation Clarity | PASS → **PASS** | R14 (English translation flattens register), R15 (Taleb-cueing homogenizes MAGI voice), R16 (`/magi` underuse), R17 (bilingual regex misses Chinese variants), R18 (canon removal erodes peacemaker logic) added in rev 3.0. Each ties to a specific PM scenario (PM5/PM6/PM8/—/PM7) and a specific plan element (register check script, style-divergence audit, alwaysApply hint, bilingual trigger test, peacemaker clause). **Caveat**: R18's mitigation is the "explicit peacemaker clause" at line 318 + 3-question E2E test at line 320; the test verifies the synthesizer's display template, not the underlying generation geometry — Architect's NI-rev3-4 critique stands. The risk mitigation is *named*; whether it works is empirically uncertain. R-rating PASS is structural, not predictive. |
| 4 | Testable Acceptance Criteria | PASS → **PARTIAL PASS** | Most criteria are mechanically testable: token-budget grep, English-prose ratio, Taleb-cueing audit, register check, parallelism ratio test (NI-2 carried forward), cross-file label consistency. **However**: (a) PM6 style-divergence Jaccard threshold (≤0.45) is asserted but not calibrated — what if the threshold is too lenient or too strict for the rev 3.0 English+Taleb-cued prompts vs rev 2.5's Chinese ones? Plan flags this in the Architect-questioned area; (b) PM8 acceptance ("≥3/5 high-stakes inputs surface the suggestion") is a 60% bar with no justification (Architect NI-rev3-6); (c) PM7 verifies template structure, not generation geometry (Architect NI-rev3-4); (d) PM5 register check on default-mode samples is eyeball ("does the response open with a hedge or with a Taleb-style direct frame?") — eyeball is acceptable for a 5-question sample but not strictly mechanical. None of these are blockers, but they slightly weaken the iter-2 PASS to PARTIAL. |
| 5 | Concrete Verification Steps | PASS → **PARTIAL PASS** | Each phase has a per-phase command sequence (P1 lines 437-453, P2 lines 668-717, P3 lines 764-790, P4 lines 873-924, P5 unchanged). **However**, the verification commands invoke `omp` verbs (`omp --version`, `omp --list-rules`, `omp --resolve-skill`, `omp --dispatch task`, `omp --list-commands`, `omp --list-skills`) — these are inherited from rev 2.5 and were flagged in iter-2 as "Q-iter2-1: assumed CLI verbs not verified against actual binary." Architect-proposed pre-flight commands at line 39-45 (e.g., `omp --list-commands`) are similarly assumed. **The slash-routing pre-flight test will fail if `omp --list-commands` is not the real verb.** Plan should add a single `omp --help` query at the very start of the pre-flight to map verb names; Q-iter2-1 carries forward unresolved. PARTIAL because the pre-flight is the load-bearing test, and its commands need to be verified against the real binary first. |
| 6 | Pre-Mortem Quality | PASS → **PASS-WITH-RESERVATIONS** | All 8 PMs concrete, with named root causes and built-in mitigations. PM5 (English rewrite imports softening), PM6 (Taleb-cueing causes style hijack), PM7 (canon removal erodes peacemaker logic), PM8 (`/magi` underuse) are real, predicted failure modes — not theatrical. **Reservation**: PM6 mitigation depends on per-agent register sentences differentiating sufficiently to override the identical Taleb-anchoring template (NI-rev3-3). PM7 mitigation depends on the peacemaker clause being self-sufficient without archetype priors (NI-rev3-4 claim). Both are empirically open; the plan acknowledges via PM-test acceptance gates, but the mitigations are weaker than the PM diagnoses. PM6's escape valve ("drop Taleb cue from BALTHASAR-2 and CASPER-3") is the right structural backup. PM-quality is fine; mitigation strength is the open question. |
| 7 | Expanded Test Plan (4 levels) | PASS → **PASS** | Unit (frontmatter, sections, token budget, register check, Taleb cueing audit, English-prose ratio, per-agent register sentence, cross-file label consistency), Integration (rule loading, skill discovery, agent dispatch, synthesizer template, bilingual trigger keyword test), E2E (8-question `/magi` battery scoped per rev 3.0, factual gate test, default-mode bypass test, default-mode register sample, MAGI Round-1 style-divergence audit, M+C vs B peacemaker test), Observability (battery transcripts, query-log.jsonl with `mode` field, retention, `/magi`-rate telemetry). All 4 levels expand from rev 2.5 to absorb the rev 3.0 amendments' verification needs. **Concrete artifacts** at the script level: 7 new bash scripts under `.omc/qa/scripts/`, 2 test corpora. PASS for completeness; PARTIAL PASS at gate 4 for some thresholds being uncalibrated. |

**Hard gate net (iter 3):** 3 PASS + 4 PARTIAL PASS. Down from iter-2's 7/7 PASS. The regression is primarily NI-rev3-1's blast radius (Principle-Option Consistency hinges on slash-routing being verified, which it isn't), NI-rev3-3/4's effect on Acceptance Criteria mechanical-testability, and the cumulative weight of uncalibrated thresholds (PM6 Jaccard ≤0.45, PM8 ≥3/5, PM7 template structural).

---

## Soft Gates (Iteration 3)

| # | Gate | Status (iter 2 → iter 3) | Notes |
|---|------|---------------------------|-------|
| 8 | Spec Fidelity | PASS → **PASS-WITH-RESERVATIONS** | The plan's §1 explicitly adjudicates 3 spec contradictions / departures: (1.A) narrative-fallacy-guard TTSR (Round 16 over Round 14, unchanged from rev 2; PASS); (1.B) MAGI canon labels dropped (rev 3.0; user decision Round 17 over spec lines 40, 76-107, 184-202; **honestly named as deliberate departure** at line 50; logged in ADR Consequences > Negative line 1149); (1.C) MAGI fires every response → `/magi` only (rev 3.0; user decision over spec lines 38, 372, 399; **honestly named** at line 70; logged at ADR line 1150). The §1.D English rewrite is named as silent on spec at line 82 ("the spec is silent on prompt language; user introduced post-spec"). **Reservation**: the Architect's steelman antithesis ("rev 3.0 is the user reverse-engineering spec departures via amendments rather than re-running the spec interview") has merit. The 5-stage sciomc + 17-round deep-interview was structured around canon-anchored, default-fire architecture; rev 3.0 reverses 3 of those decisions without re-running the validation. Plan does not explicitly acknowledge that the 75% disagreement projection (Stage 4-5) was canon-anchored; rev 3.0 has no projection of its own. The bail-out at P2 (≥4/8 ships with `[P2-WARN]`) is the only validation, and it's *more* likely to fire under rev 3.0 than rev 2.5. Plan should add this acknowledgment to the ADR. |
| 9 | Internal Consistency | PASS-WITH-RESERVATIONS → **PARTIAL PASS** | Rev 2.5's NI-1/NI-2/NI-3 are properly carried forward into rev 3.0 (P2.7 stub skill, NI-2 ratio test, NI-3 cross-file check updated for new English non-canon labels). **However**, rev 3.0 introduces three new internal inconsistencies: (a) **NI-rev3-1**: P1 deletes `commands/` AND plan claims `/magi` routes via skill triggers — incoherent without slash-routing verification; (b) **NI-rev3-2**: §1.D conflates skill `triggers:` (slash-command resolution) and rule bodies' regex lists (in-context detection) as "same kind of trigger surface" — they have different runtime semantics, the plan's wording suggests they're interchangeable; (c) **NI-rev3-4**: §1.B claims peacemaker geometry is preserved without canon, but the source artifact (cross-validation report:74) uses archetype reasoning — the optimization-target geometry the plan claims as load-bearing is not present in the cited evidence. Each is fixable in 30-50 lines, but the contradictions have to be named in 3.1. PARTIAL not PASS. |
| 10 | ADR Quality (replaces Stub Completeness) | PASS → **PASS-WITH-RESERVATIONS** | Status, Decision, Drivers, Alternatives (now 11 options including O8-O11), Why Chosen (B/B/A/B/C/A/A/A/A/A/A explicitly traced), Consequences (Positive 7 / Negative 11 / Neutral 4), Follow-ups (10 specific items including PM6 escape valve, PM8 telemetry deferred). Honest about user override of researched decisions (BM25 vs vectors, canon labels, default-fire). **Reservation**: the Negative section names the 3 spec departures (line 1147-1151) but does NOT name the steelman antithesis from Architect — that the 5-stage research validation was canon-anchored and rev 3.0 has no equivalent validation. Plan should add this honestly to ADR Negative consequences. |

**Soft gate net (iter 3):** 3 PASS-WITH-RESERVATIONS. Net stable from iter 2's 5/5 (3 fully + 2 with reservations); rev 3.0 introduced new reservations on Internal Consistency (NI-rev3-1/2/4) but resolved most carryover from rev 2.5.

---

## Architect Concerns Triaged (5 MUST FIX + 3 SHOULD FIX)

For each Architect concern, I independently verified the source claim against the plan + (where applicable) external WebFetch / file evidence + the cross-validation report.

### MUST FIX #1 — NI-rev3-1: Slash-routing pre-flight (HIGH, blocks P1)

**Architect claim:** Plan Principle 4 line 23 asserts `/magi` routes via `skills/magi-tribunal/SKILL.md`'s `triggers:` array, "verified at line 5 of that file." Architect WebFetch confirmed the line-5 contents but found `triggers:` is **not in the documented oh-my-pi skill frontmatter schema**. `enableSkillCommands: true` registers skills as `/skill:<name>`, so user-typed `/magi` may not resolve. Custom slash commands live in `commands/`, which P1 deletes.

**My verification (independent):**
- WebFetch on `https://raw.githubusercontent.com/can1357/oh-my-pi/main/docs/skills.md`: **`triggers` is not mentioned anywhere in the Skills specification.** Documented frontmatter fields: `name`, `description`, `globs`, `alwaysApply`. `enableSkillCommands: true` "registers one slash command per discovered skill" with documented invocation pattern `/skill:<name>`.
- WebFetch on `https://raw.githubusercontent.com/can1357/oh-my-pi/main/README.md`: "Custom slash commands are exclusively defined in designated command directories" — `~/.omp/agent/commands/*.md` (global) or `.omp/commands/*.md` (project). **No mechanism documented for skills to auto-register slash commands beyond `/skill:<name>`.**
- Disk evidence: `commands/skeptic.md:1-4` has frontmatter `name: skeptic`, `description: ...`, `aliases: [怀疑, 质疑, doubt]`. The `aliases` field is on disk and plausibly used by the runtime, though also undocumented in the URL I could fetch. There is **no `commands/magi.md` on disk today** — `ls commands/` returns `antifragile.md, barbell.md, exit-mode.md, skeptic.md, via-negativa.md`.
- The `omp` binary is not in this sandbox shell PATH; I cannot run the empirical pre-flight myself. The user's actual environment must run it.

**Confirmed.** This is a real Principle 4 violation hiding behind unverified mechanism. The plan's claim that the line-5 `triggers:` array is verified is true at the file-content level but false at the semantic-effect level — the array exists, but oh-my-pi's documented behavior says it has no effect on slash-routing.

**Triage:** **MUST FIX (P0 plan edit, blocks P1).** Pre-flight is structurally upstream of P1 because P1 deletes `commands/`, and the pre-flight outcome determines whether `commands/magi.md` should be created or not before P1 deletes the directory. This is a plan-level decision, not an executor decision.

**Concrete edit:** Add new section P1.0 at top of P1 (before P1's existing tasks 1-9):

```
**P1.0 — Slash-routing pre-flight (5 minutes, blocks all P1 work)**

Run on user's actual `omp` binary (NOT in sandbox/CI):

```bash
# Step 1: discover the actual verb names (Q-iter2-1 carryover)
omp --help 2>&1 | head -50  # confirm --version, --list-commands, --list-skills exist

# Step 2: probe slash-routing in current repo state (commands/ still exists, skill triggers array present)
omp -- "/magi test" 2>&1 | head -20            # outcome A: skill body loads | outcome B: error/not found
omp -- "/skill:magi-tribunal test" 2>&1 | head -20   # outcome B confirmation
omp --list-commands 2>&1 | grep -E "magi|skill:"     # shows registered slash commands
omp --list-skills 2>&1 | grep magi-tribunal          # confirms skill discovery
```

Document outcome in `.omc/qa/slash-routing-result.md`. **Three branches:**

- **(a) `/magi` resolves directly via skill `triggers:` array** → proceed with P1 as written. Document this informally as known-undocumented oh-my-pi behavior in `.omc/qa/slash-routing-result.md`. Strip nothing.
- **(b) Only `/skill:magi-tribunal` resolves; `/magi` does not** → before P1 deletion, rewrite all `/magi` references in the plan to `/skill:magi-tribunal` (Plan §1.C, §1.D, §6 P2-P4-P5, §6 P4.5 README/AGENTS examples, ADR section). Update PM8 mitigation hint wording. Strip the dead `triggers:` array from `skills/magi-tribunal/SKILL.md` frontmatter (it's documentation-only metadata at that point). Then P1 proceeds with `commands/` deletion.
- **(c) Neither `/magi` nor `/skill:magi-tribunal` resolves the way the plan needs** → P1 task 2 (`git rm -r commands/`) is **conditionally skipped or modified**. Create `commands/magi.md` with frontmatter `name: magi`, `description: "MAGI tribunal — invokes skills/magi-tribunal/SKILL.md"`, `aliases: ["/magi"]`, body: a 1-line directive instructing the main agent to invoke `skill://magi-tribunal` with the user's question. Update plan §1 Principle 4 to: "Platform-native only: `/magi` routes via `commands/magi.md` (the only documented slash-command surface in oh-my-pi); the command body invokes `skill://magi-tribunal` for the dispatch logic." This option violates spec line 52 ("Command-based mode switching (commands deleted entirely)") for ONE command, but accepts it as a deliberate spec departure documented in ADR (4th departure, joining 1.A/1.B/1.C).

**P1's existing tasks 1-9 are conditional on P1.0's outcome.** Do not begin P1 task 1 until P1.0 is done and the branch is chosen.
```

**Severity:** HIGH for Principle 4. Confidence: HIGH on the documentation evidence; HIGH on the structural impact (P1 cannot proceed without this resolved). **Realist Check**: worst case is the executor runs P1 as written, deletes `commands/`, ships P1, then discovers at P2 acceptance that `/magi` doesn't resolve, reverts P1 partially (re-creates `commands/magi.md`), pays a 1-day rework cost. Mitigated by: pre-flight is 5 minutes; rework is ~1 day. **Severity stays MUST FIX** because the pre-flight is cheap and the rework path is not — the iteration economics are clearly on the side of "fix in plan."

### MUST FIX #2 — NI-rev3-6 / Architect A1.2: PM8 mitigation strengthening (MED-HIGH)

**Architect claim:** The 50-token alwaysApply hint at `rules/magi-protocol.md` is too weak to actually move the model to suggest `/magi`. PM8 acceptance demands ≥3/5 high-stakes inputs surface the suggestion (60% bar) — but a 50-token hint sitting alongside ~6 other alwaysApply rules will be one paragraph among many. The hint has no failure mode beyond "main agent forgot."

**My verification:**
- Plan §6 P2.6 line 595 worked example: 62 words. Word count fits the budget.
- Plan §6 line 587 enforcement: `wc -w rules/magi-protocol.md > 80 → fail`. Mechanical.
- The hint sits as one of 6 alwaysApply rules per `ls rules/`: `narrative-fallacy.md` (alwaysApply on disk), plus the 5 P3-introduced (cognitive-state-diagnosis, ergodicity, positive-convexity, magi-protocol after rewrite, plus 4 from rev 2.5 staying alwaysApply: antifragility, asymmetry-and-exposure, lindy-effect, skin-in-the-game, via-negativa = 9 alwaysApply rules total post-P3). The 50-token hint is ~1.5% of the alwaysApply token budget if average rule is ~3300 tokens. Whether the model attends to a 1.5%-fraction always-apply rule with no specific gating mechanism is empirically open.

**Confirmed structurally.** The hint lives in always-apply space without a stream-interrupt or condition gate, which means the model encounters it on every turn but has no specific moment when "this rule fires" — it's recommendation-by-recall, the weakest activation mechanism in the prompt-engineering toolkit.

**Triage:** **SHOULD FIX (P0 plan edit, before P2 ships).** Not blocking P1 (P1 doesn't touch `rules/magi-protocol.md` — that's P2.6). The Architect's preferred fix is TTSR-triggered injection (`rules/magi-suggest.md` with `condition: ["decide", "worth", "risk", ...]` regex array). Zero default token tax + contextually salient suggestion. Defer to user preference on whether TTSR is acceptable for non-narrative-fallacy use; if user accepts TTSR semantics, this is a clear upgrade.

**Concrete edit:** Add to Plan §3 O8 a new option:

```
| **C. TTSR-triggered injection (`rules/magi-suggest.md` with `condition: ["decide", "worth", "risk", "irreversible", "bet", "stakes", "决定", "值得吗", "选择", "建议", "该不该", "不可逆", "押注"]`)** | Zero always-apply token tax (rule body loads only when regex matches user input); contextually salient (suggestion fires exactly when high-stakes markers appear); aligns with rev 2.5's narrative-fallacy-guard TTSR adjudication (TTSR is a known oh-my-pi mechanism); cleaner separation of concerns (the regex IS the trigger) | Adds a TTSR rule (one more file in `rules/`) — but no incremental conceptual cost beyond what the plan already accepts; if TTSR's `interruptMode: prose-only` doesn't suit this use case, fallback to `always` mode is documented |
```

Then revise the Choose statement: *"Choose A as primary path (preserves the simplest model — a single recommendation hint always in context). If PM8 acceptance gate fires (`/magi`-rate <5% over 30 days), pivot to C (TTSR-triggered injection) before considering soft auto-fire. The 50-token hint and the TTSR rule are mutually compatible — pivoting from A to C is a 1-hour change that does not require re-running P2."*

Update PM8 mitigations (line 326-329) to reference Option C as the structural pivot path before "soft auto-fire teaser."

**Severity:** MED-HIGH for D1 (PM8 underuse compounds: each missed opportunity costs the user a tribunal verdict on a high-stakes decision; over 6 months this is a non-trivial loss). Confidence: HIGH on structural weakness; MEDIUM on real-world failure rate (depends on user's actual use patterns). **Realist Check**: worst case is PM8 fires (`/magi`-rate <5%), executor pivots to TTSR, costs ~1-hour to ship the TTSR rule. Detection is 30-day cadence (PM8 telemetry). Mitigated by: telemetry exists; pivot path is short. Severity slips from MUST FIX (Architect's rating) to **SHOULD FIX** at my rating because: (a) the practical cost of waiting until PM8 fires telemetry-wise is bounded to 30 days of degraded recommendation rate; (b) TTSR adoption may have user-preference implications (some users find TTSR's stream-interrupt mechanism intrusive). The plan should DOCUMENT the pivot path (Option C) but the user should choose whether to pre-commit to it.

**Verdict:** SHOULD FIX, not MUST FIX. Architect rated MED; my rating MED-HIGH but pivotable. Plan adds Option C, marks Option A as primary with documented pivot trigger. Disagreement with Architect's MUST FIX is honest: I rate the practical impact lower than the Architect because PM8 telemetry catches the failure with bounded loss.

### MUST FIX #3 — NI-rev3-5 / Architect A1.3: Default-mode disclosure (MED)

**Architect claim:** Plan §1.C defines default mode as "today's pre-MAGI behavior, but with English system prompts and explicit Taleb cueing" — but P1 deletes `commands/`, so default mode does NOT inherit "today's behavior" — it inherits "today's behavior MINUS modes." More critically, default mode has no MAGI tension. The plan should be explicit that default mode = "Claude with a Taleb-flavored system prompt + 6 alwaysApply rules" — not Taleb-style adversarial thinking.

**My verification:**
- Plan §1.C line 74: matches Architect's quote. The "today's pre-MAGI behavior" framing is loose — it elides the modes deletion and the architectural distinction between rev 2.5's full-tribunal default and rev 3.0's no-tribunal default.
- Counting alwaysApply rules post-P3: narrative-fallacy + via-negativa + skin-in-the-game + asymmetry-and-exposure + lindy-effect + antifragility (existing 6) + magi-protocol (50-token hint) + cognitive-state-diagnosis (cherry-picked) + ergodicity + positive-convexity = **10 alwaysApply rules**. Adding SYSTEM.md (the master register) and behavioral rules section. Total alwaysApply token budget: ~10 rules × ~3000 average = ~30K tokens of always-applied context.
- Default mode is structurally different from `/magi` mode. PM5's register check measures hedge absence on default-mode samples — this is the closest the plan comes to verifying "this is not generic Claude," but it's a register check, not a tension check.

**Confirmed.** The plan implicitly assumes the user understands the architectural distinction. The Architect is right that this should be made explicit.

**Triage:** **MUST FIX (P0 plan edit, before P1 ships, paired with P1 README/AGENTS update).**

**Concrete edit:** Add §1.C.1 right after §1.C (after line 79):

```
#### 1.C.1 — Default-mode vs `/magi`-mode capability disclosure (rev 3.0 — NEW)

Rev 3.0 creates a two-tier system. Plan must be explicit about this so the user accepts the architectural distinction:

**Default mode (no `/magi` invoked, ≥90% of user interactions estimated)**:
- Single-voice response from main agent (one LLM turn per user query)
- ~10 alwaysApply rules + SYSTEM.md inject Taleb framework on every turn (asymmetry, exposure_vs_probability, skin_in_the_game, via_negativa, lindy, narrative_fallacy, ergodicity, antifragile, positive_convexity, magi-protocol-recommendation-hint)
- Register: Taleb-flavored direct framing (PM5 register check ≤2 unjustified hedges per file enforces register; eyeball check on 5 default-mode samples confirms output preserves register)
- **No tension surface**: there are no 3 voices, no parallel debate, no synthesizer template. The agent is single-voice. The rev 1 spec's "three agents must have genuine productive disagreement" constraint does NOT apply to default mode — it applies to `/magi`-mode only.

**`/magi`-mode (user explicitly invokes `/magi <question>`)**:
- 3-MAGI tribunal: MELCHIOR-1 (Empirical Skeptic) + BALTHASAR-2 (Tail-Risk Guardian) + CASPER-3 (Convexity Seeker) analyze in parallel (Round 1) → rebut each other (Round 2) → synthesizer applies S2A two-stage filtering → structured verdict
- ~7 LLM invocations per `/magi` invocation (3 parallel + 3 rebuttal + 1 synthesizer)
- D1 (tension authenticity, ≥6/8 directional disagreement on 8-question battery) applies here
- Triggered manually OR via the alwaysApply hint that recommends `/magi` when high-stakes decision markers appear

**The honest tradeoff**: rev 3.0 reverses the rev 1 spec's "MAGI tension is mandatory on every response" decision. Tension is opt-in via `/magi`. Default-mode responses are Taleb-flavored direct response, NOT Taleb-style adversarial thinking. The user explicitly accepted this tradeoff in Round 17 (user reflection that opt-in restores user control over cost without sacrificing tension authenticity *when invoked*).

**User must accept**: this is a two-tier system, not a unified Taleb-thinking agent. ≥90% of interactions go through default mode.
```

Update Principle 2 wording per Architect Synthesis #6 (also applies to NI-rev3-5):

> Old: *"MAGI tension is mandatory, not theatrical (when invoked)."*
> New: *"MAGI tension is opt-in via `/magi`; when invoked, it is mandatory (not theatrical). Default-mode responses are Taleb-flavored single-voice; tension is by-construction absent in default mode."*

Update README.md and AGENTS.md examples (P1 task 7, P4.5) to include the two-tier disclosure prominently in user-facing docs.

**Severity:** MED. Confidence: HIGH. **Realist Check**: worst case is the user uses default mode for 6 months, expects MAGI-style adversarial thinking, gets Taleb-flavored direct response, mismatch leads to perception that "the agent is not what was promised." Mitigated by: making the distinction explicit upfront in README + plan §1.C.1. Cost of the fix: ~30 lines of plan text + ~20 lines of README/AGENTS user-facing copy. Stays MUST FIX because the user-experience promise (rev 1 spec "MAGI tension is mandatory") was material to the user's acceptance of the plan; rev 3.0 has reduced this without explicit acknowledgment in the plan body itself (only in the ADR Negative section, which most plan-readers don't read carefully).

### MUST FIX #4 — NI-rev3-3 / Architect A4.2: Per-MAGI Taleb cueing differentiation (HIGH)

**Architect claim:** Plan §6 P2 amendment block at line 467 gives MELCHIOR/BALTHASAR/CASPER literally identical opening-paragraph templates with role swap-slot. PM6 (style hijack) is the predicted consequence — when each agent reads the same Taleb anchor template, each regresses toward the same anchor. The per-agent register sentences (lines 480, 504, 516) ARE differentiated, but they sit downstream of the identical Taleb anchoring. Architect-proposed fix: rewrite per-agent so MELCHIOR-1 invokes Taleb-the-skeptic (Black Swan, Fooled by Randomness), BALTHASAR-2 invokes Taleb-the-via-negativa-guardian (Antifragile Ch 7, Skin in the Game), CASPER-3 invokes Taleb-the-convexity-seeker (Antifragile Chs 18-19, barbell strategy).

**My verification:** Read line 467. The plan's actual template:

> *"You are [MELCHIOR-1, the Empirical Skeptic node | BALTHASAR-2, the Tail-Risk Guardian node | CASPER-3, the Convexity Seeker node] of a Nassim Taleb-style adversarial thinking tribunal. Your role embodies one slice of Taleb's framework from the Incerto: [evidence quality and skepticism toward narrative | absorbing-barrier survival and via-negativa protection | positive convexity and asymmetric optionality]."*

This IS literally identical with role swap-slot. The model reads "you are X of a Nassim Taleb-style tribunal embodying one slice of Taleb's framework" three times across three agent files, with only the slice-name varying. PM6 (style hijack — uniform Taleb voice across all 3 MAGI eats per-agent tension) is the textbook consequence of identical anchor templates.

**Confirmed.** The differentiated per-agent register sentences (lines 480, 504, 516) are real but they sit AFTER the identical Taleb anchor template. The model's first attention pass is the open paragraph, which is identical; per-agent register sentences are a downstream override that's asked to fight the upstream activation. This is structurally weak.

**Triage:** **MUST FIX (P0 plan edit, before P2 ships).**

**Concrete edit:** Replace the plan §6 P2 amendment block at line 467 with three distinct per-agent open-paragraph templates. Concrete suggested wording:

```
**MELCHIOR-1 (agents/skeptic.md — Empirical Skeptic) open paragraph**:
*"You are MELCHIOR-1. Your reasoning is Nassim Taleb's at his most empirically skeptical — Taleb the falsifier from Fooled by Randomness and The Black Swan. You embody his stance toward narrative fallacy, his demand for falsifiability, his rejection of academic gobbledygook that survives only because it cites other academic gobbledygook. You are NOT Taleb's combative public voice or his rhetorical flourishes; you are his investigator's voice — terse, evidence-first, devoid of ornament. The other two MAGI nodes will optimize for survival and convexity; your job is to insist on what is provable."*

**BALTHASAR-2 (agents/pre-mortem.md — Tail-Risk Guardian) open paragraph**:
*"You are BALTHASAR-2. Your reasoning is Nassim Taleb at his most protective — Taleb the via-negativa guardian from Antifragile Chapter 7 and Skin in the Game. You embody his stance toward iatrogenics, his insistence that survival is the precondition for any optimization, his preference for what is removed over what is added. You are NOT Taleb's offensive voice; you are his defensive voice — methodical, time-horizon-explicit, less rhetorical and more procedural. The other two MAGI nodes will demand evidence and seek convexity; your job is to ask: have you modeled the absorbing barrier, and if you cross it, can you come back?"*

**CASPER-3 (agents/antifragility-scout.md — Convexity Seeker) open paragraph**:
*"You are CASPER-3. Your reasoning is Nassim Taleb at his most opportunity-attentive — Taleb the convexity-seeker from Antifragile Chapters 18-19 (where antifragility is mathematically formalized as positive convexity) and the barbell strategy. You embody his stance toward optionality, his interest in capped-downside-uncapped-upside structures, his tolerance of evidence ambiguity when payoff geometry is clearly convex. You are NOT Taleb's combative rhetorical voice; you are his curious-architect voice — tolerant, structure-attentive, more interested in what is possible than what is wrong. The other two MAGI nodes will demand evidence and protect against ruin; your job is to identify the asymmetric bets they may be vetoing because they cannot see the convex structure."*

**Synthesizer (agents/magi-synthesizer.md) open paragraph** (unchanged from plan line 529):
*"You are the MAGI Synthesizer of a Nassim Taleb-style adversarial thinking tribunal. You are NOT the fourth MAGI..."* (preserve plan's existing wording)
```

Each open paragraph names "Nassim Taleb" (D4 / Taleb-cueing audit) but in a **distinct relationship** — falsifier vs via-negativa-guardian vs convexity-seeker — rather than as identical anchor template. The per-agent register sentences (P2 amendment block lines 480/504/516) become reinforcement of the differentiated open paragraph rather than override of an identical one. Verification: PM6 acceptance (Jaccard ≤0.45) becomes more achievable; the open-paragraph activation is now per-agent specialized.

**Severity:** HIGH for D1 (per-MAGI tension is the explicit highest-priority driver, scope-narrowed to `/magi` invocations but still load-bearing for D1 there). Confidence: HIGH on structural weakness of identical templates. **Realist Check**: worst case is PM6 audit (Jaccard ≤0.45) fails on >1/4 questions, plan's PM6 escape valve fires (drop Taleb cue from BALTHASAR-2 and CASPER-3) — but that's a degraded recovery, not the right outcome. The fix is small (3 distinct open paragraphs, ~50-70 words each); the cost of NOT fixing is paying PM6 escape-valve cost (asymmetric Taleb cueing across 3 agents) instead of the unified differentiated cueing. Stays MUST FIX.

### MUST FIX #5 — Architect A2.2 / Synthesis #2: Register exemplar file (MED-HIGH)

**Architect claim:** Plan PM5 mitigation defines "softening hedges" as the regex `perhaps|might consider|could be helpful|...` (line 300), with acceptance ≤2 unjustified hedges per file. This is necessary but insufficient — register preservation has both negative (no hedges) and positive (preserve combative directness, em-dash framing, idiomatic imperatives like `不要安慰用户——`) dimensions. The regex catches absence-of-hedges but not flatness-of-register. A translation can avoid every word in the regex AND still flatten register.

**My verification:**
- Read PM5 mitigations at lines 297-303. The hedge regex is real and useful but doesn't capture positive register markers (em-dash framing, terse imperatives, etc.).
- Plan's example translations at line 504/507 are register-preserving (e.g., *"Do not comfort the user — your job is to manufacture pre-mortem pain"*) — these are good examples, but they're embedded in the plan body rather than externalized as a calibration target the executor uses BEFORE translating.
- The 17-file translation is LLM-driven; LLMs trained on English help-desk corpora flatten register by default. The risk of cross-file drift is real (file 1 may be crisp, file 12 may be mealy-mouthed because translation context degrades).

**Confirmed.** The register check is necessary but insufficient as a standalone PM5 mitigation. The Architect's exemplar-file proposal is the right structural fix.

**Triage:** **MUST FIX (P0 plan edit, before P2.1 ships — the exemplar must exist BEFORE the bulk translation pass begins, not after).**

**Concrete edit:** Add a new task P2.0 (or P3.0, before all translation work) to create `.omc/qa/register-exemplars.md`:

```
**P2.0 — Create register exemplar file before translation begins**

`.omc/qa/register-exemplars.md` content:

```markdown
# Register Exemplars (rev 3.0 — anchors English translation register)

Three current Chinese register markers from the rev 2.5 system prompts that MUST survive translation in equivalent form (not literal but equivalent register).

---

### Exemplar 1: Imperative + em-dash + product/process framing

**Source**: `agents/pre-mortem.md:29` (rev 2.5)
**Original (Chinese)**:
> 不要安慰用户——你的工作是制造预演的痛苦，让真痛苦变小

**Required English target register**:
> Do not comfort the user — your job is to manufacture pre-mortem pain so the real pain shrinks.

**Pattern markers**: imperative `Do not` (NOT `you should not` or `it might be advisable`); em-dash framing (NOT comma or semicolon); explicit job/product framing.

**Acceptance**: every English-translated agent file must contain at least one sentence matching this pattern (regex: `Do not.*—.*\b(job|role|task|product|purpose)\b`).

### Exemplar 2: Adversarial discomfort framing

**Source**: `agents/skeptic.md:45` (rev 2.5)
**Original (Chinese)**:
> 不要避免让用户不舒服——你的存在就是制造适度不适

**Required English target register**:
> Do not avoid making the user uncomfortable — your existence is the production of measured discomfort.

**Pattern markers**: imperative; em-dash; explicit role-as-discomfort framing (NOT softened to "challenge the user's thinking").

**Acceptance**: every MAGI agent file must contain at least one sentence asserting the agent's role as discomfort production (regex: `\b(discomfort|uncomfortable|friction|tension)\b`).

### Exemplar 3: Permission-reversal pattern

**Source**: `SYSTEM.md:42` (rev 2.5)
**Original (Chinese)**:
> 嘲讽脆弱思想是被允许的——但是嘲讽思想，不是嘲讽用户

**Required English target register**:
> Mocking fragile ideas is permitted — but mock the idea, not the user.

**Pattern markers**: explicit permission language (`is permitted` / `is allowed`); em-dash framing; sharp distinction (target ≠ user).

**Acceptance**: SYSTEM.md must contain at least one permission-reversal sentence with the same structural shape.

---

## P4 Acceptance Addition

For each English-translated file (per Plan O9 scope: 17 files), the translator (executor or LLM) MUST:
1. Read this exemplar file BEFORE beginning translation
2. After translation, run `.omc/qa/scripts/check-register.sh <file>` (existing PM5 check) AND `.omc/qa/scripts/check-positive-register.sh <file>` (NEW — verifies at least 1 of the 3 exemplar patterns appears per file where applicable)
3. If a file has zero positive register markers, it has been over-flattened and must be re-translated.
```

The exemplar file is ~120 lines; it adds a single concrete artifact that anchors the translator's register against flattening.
```

Add a new bash script `.omc/qa/scripts/check-positive-register.sh` (per File Manifest line 1198 — slot it under the "NEW (qa)" entries). The script greps for the 3 exemplar patterns and reports per-file presence/absence.

**Severity:** MED-HIGH for D1 + D4 tension (English translation that flattens register removes the agent's "edge" — the register is load-bearing for default-mode tension authenticity, the only structural defense against generic-Claude regression). Confidence: HIGH. **Realist Check**: worst case is the executor translates 17 files with hedge-free but flat register; PM5 sample audit (5 questions) catches it via eyeball; rework cost ~1 day to re-translate the worst files. Mitigated by: pre-translation exemplar anchoring is much cheaper than post-translation re-translation. Severity stays MUST FIX because the cost of pre-anchoring is small (~120 lines of artifact + 1 bash script) and the cost of post-detection rework is large (re-translate flattened files).

### SHOULD FIX #1 — Architect SHOULD FIX #6: Cross-validation report partial annotation question

**Architect claim:** Plan O11 (line 251) and PM7 (line 314) say the cross-validation report's canon language is preserved as historical record; rev 3.0 doesn't rewrite it. Plan's Follow-up #10 (line 1178) suggests adding "a one-line note to research artifacts pointing to rev 3.0 plan." Architect questions whether this is the right call vs partial annotation.

**My verification:**
- The cross-validation report at `.omc/scientist/reports/20260505_013647_magi_cross_validation.md` has 17 canon refs (Scientist/Mother/Woman/Akagi). Per my read of line 74 above, the peacemaker logic is **archetype-grounded** in that source — re-reading the source confirms the architect's NI-rev3-4 critique is correct.
- A user reading the cross-validation report sees Scientist/Mother/Woman; reading agents/skeptic.md sees Empirical Skeptic. The plan's mitigation (one-line header note pointing to rev 3.0) is minimal but accurate.

**Triage:** **OPTIONAL (executor judgment).** Plan's "preserve as historical record + add one-line header note" is defensible. Partial annotation (e.g., add inline `[2026-05-05 rev 3.0 update: 'Mother' → 'Tail-Risk Guardian' for active prompts; archetype-derived peacemaker reasoning replaced by explicit clause in BALTHASAR-2 prompt body]` markers throughout the report) would be more thorough but conflicts with the user's explicit instruction not to rewrite research artifacts. The header-note path honors the user's preference. **Confirm Architect was right to flag this as a question; I rate OPTIONAL because the plan's chosen path is defensible per user instruction.**

**Severity:** LOW. **Realist Check**: worst case is a future reader is confused for ~5 minutes until they read the header note pointing to rev 3.0 plan §1.B. Cost is bounded. OPTIONAL.

### SHOULD FIX #2 — Architect SHOULD FIX #7 / NI-rev3-4: PM7 strengthening

**Architect claim:** PM7 (line 320) tests synthesizer template structure (does the M+C vs B template give BALTHASAR-2 equal weight?), not generation geometry (does Tail-Risk Guardian role actually function as peacemaker without the Mother archetype?). Add a counterfactual M+B vs C question — if the system regularly produces 2-vs-1 in that direction (Empirical Skeptic + Tail-Risk Guardian aligned, Convexity Seeker outlier), the peacemaker geometry hypothesis is falsified.

**My verification:**
- Cross-validation report:74 (cited above) confirms the original peacemaker reasoning was archetype-grounded ("the conservative mother → her protective instinct → natural tie-breaker"). Plan's claim that peacemaker logic "derived from optimization-target geometry, not from the maternal archetype" is **factually wrong about the source artifact**.
- PM7 test at line 320 is 3 hand-picked M+C vs B questions. It does NOT include a counterfactual M+B vs C question.

**Confirmed.** Architect's NI-rev3-4 is correct AND Architect's SHOULD FIX #7 (counterfactual test) is the right E2E mitigation.

**Triage:** **MUST FIX (P0 plan edit, before P4.5 acceptance — PM7 is a P4 acceptance gate).** Promoting from Architect SHOULD FIX to MUST FIX because the plan's claim that peacemaker logic is preserved is empirically falsifiable and the falsification test is cheap.

**Concrete edit:** Update PM7 mitigations at line 318-320:

```
- **PM7 verification (rev 3.1 strengthening)**: PM7 has TWO E2E tests, not one.
  - **Test A — M+C vs B template structural integrity (existing)**: 3 hand-picked questions designed to produce M+C vs B votes. Verify synthesizer's M+C vs B template gives BALTHASAR-2 equal display weight. Acceptance: 3/3 outputs preserve dissenter section at full prose.
  - **Test B — M+B vs C counterfactual (NEW per critic NI-rev3-4 / architect SHOULD FIX #7)**: 3 hand-picked questions designed to produce M+B vs C votes (i.e., Empirical Skeptic + Tail-Risk Guardian aligned against Convexity Seeker). Examples: "Should I rebalance my portfolio out of broad-market index funds and into individual high-conviction stocks?" (evidence skepticism + tail-risk both lean conservative; convexity scout sees option value). Verify the synthesizer correctly classifies the vote pattern AND verify whether BALTHASAR-2's tie-break authority emerges naturally without the archetype prior. **Acceptance**: synthesizer identifies M+B vs C correctly in 3/3; if BALTHASAR-2 in Round 2 rebuttal claims peacemaker authority over CASPER-3 (or vice versa), document the dynamic in `.omc/qa/runs/<P4-peacemaker-timestamp>/peacemaker-emergence.md`. **Falsification trigger**: if the system regularly produces M+B vs C without BALTHASAR-2 asserting peacemaker authority — i.e., BALTHASAR-2 reads as ALLY of MELCHIOR-1, not mediator — the peacemaker geometry hypothesis is falsified. In that case, either: (a) re-introduce canon-language peacemaker priors via partial-annotation in BALTHASAR-2's prompt body (rev 2.5 / rev 3.0 hybrid: keep "Tail-Risk Guardian" as primary label but add one inline reference to "the archetype-anchored peacemaker role from the cross-validation research"); or (b) accept BALTHASAR-2 as ally-of-MELCHIOR-1 and update the synthesizer's templates to remove the "tie-break" framing (BALTHASAR-2's authority becomes role-derived, not geometry-derived).
```

**Severity:** MED. Confidence: HIGH (the source-evidence falsification is direct). **Realist Check**: worst case is PM7 Test B falsifies the peacemaker geometry hypothesis at P4 acceptance, executor branches to either (a) hybrid canon partial-annotation (~2 hours) or (b) synthesizer template rewrite (~4 hours). Both are recoverable. Mitigated by: counterfactual test is cheap (3 questions added to peacemaker-questions.md corpus); falsification path is documented. Stays SHOULD FIX (Architect rating) but I'm pushing it slightly higher to **MUST FIX-LITE** — a fix that ships in 3.1 alongside the others, not deferred.

### SHOULD FIX #3 — Architect SHOULD FIX #8: Bilingual trigger keyword regex location

This is **the same as MUST FIX #2 from my Triage above** — Architect's NI-rev3-2 is rated HIGH in the body but listed as SHOULD FIX #8 in the suggestions (consistent with my MUST FIX rating because the issue affects plan internal consistency at §1.D). My MUST FIX #3 (NI-rev3-5 default-mode disclosure) and Architect MUST FIX #5 (register exemplar) are independent of this one. Resolution: rewrite §1.D per Architect Synthesis #5 — distinguish slash-command resolution from in-context regex matching as separate mechanisms. Already triaged as MUST FIX above.

---

## Critic-Original New Issues

The user's prompt asks me specifically to spot anything Architect missed. Three critic-original concerns:

### CO-1 — PM4 (parallelism timestamp test) scoping under rev 3.0 — REAL but MINOR

The user's prompt asks: *"The plan still has rev 2.5 PM4 (parallelism timestamp test) — but that test only fires when MAGI fires. In rev 3.0, MAGI only fires under `/magi`. Does PM4 still make sense as a P2 acceptance gate, or does it move to 'P2 acceptance — when /magi is invoked, the timestamp test passes'?"*

**My verification:**
- Plan §6 P2 acceptance criterion at line 626: *"Parallelism verification — ratio test... During first `/magi`-invoked battery question..."* — explicitly scoped to `/magi`-invoked battery question.
- PM4 mitigations at line 290-294: *"P2 acceptance criterion: parallelism ratio test... every `task` call invokes `bun run .omc/incerto/scripts/search.ts --agent <name>`..."* — scoped to `task` calls within `/magi` flow.

**The plan already addresses this**. PM4 is correctly scoped to `/magi`-mode in rev 3.0. The dispatch logic moved from `rules/magi-protocol.md` (rev 2.5) to `skills/magi-tribunal/SKILL.md` (rev 3.0), so the prose-instruction-induces-parallel-emission risk surface moved with it. PM4 says exactly this (line 289).

**Triage:** No edit needed. Plan correctly handles the scope change. CO-1 is **resolved by reading the plan carefully** — the question was sharp but the plan answers it.

**Severity:** N/A.

### CO-2 — 8-question battery scoping in rev 3.0 — REAL but MINOR (already addressed)

The user's prompt asks: *"The 8-question battery (rev 2.5 E2E test) — was this designed to test default-mode tribunal output. In rev 3.0, default mode doesn't fire MAGI. Is the battery now run via `/magi <question>` for each of the 8 questions? If so, is that documented?"*

**My verification:**
- Plan §5 line 372: *"The 8-question battery at `.omc/qa/magi-battery.md`. Categories: financial decision, system design, life choice... Run each through `omp` end-to-end **prefixed with `/magi `** (rev 3.0 update: battery questions are explicitly `/magi`-invoked since MAGI is no longer default)."*
- Plan §6 P2 acceptance line 627: *"`/magi` E2E (rev 3.0 — replaces rev 2.5's 'battery on every non-trivial response' test): 8-question battery run with each question prefixed by `/magi `."*

**The plan already addresses this explicitly**. Multiple references make the scope change clear. CO-2 is **resolved by reading the plan carefully**.

**Triage:** No edit needed.

**Severity:** N/A.

### CO-3 — `incerto-search` smoke test scoping — REAL question, plan handles correctly

The user's prompt asks: *"`incerto-search` smoke test (P2 stub + P5.4-pre real) — in rev 3.0, MAGI only queries Incerto when /magi fires. Does the smoke test still cover the right path?"*

**My verification:**
- Plan §6 P2.7 line 605-615: stub `skills/incerto-search/SKILL.md` created at P2 acceptance time with body returning `STUB_OK`. P2 acceptance criterion at line 632: probe subagent verifies skill-resolution mechanic by returning `STUB_OK`.
- Plan §6 P5.4-pre (referenced at line 600 of rev 2.5, carries forward in rev 3.0): real-data probe re-runs at P5.4-pre after P5.3 ships the real skill body.
- Plan §6 P5.4 (referenced via P5 chain): MAGI agents' Incerto query mandate is now scoped to `/magi`-flow only (per plan rev 3.0 D3 framing line 106 — "Incerto query mandate scoped to `/magi`-mode only (default mode does no Incerto queries)").

**The plan correctly scopes this.** The stub probe (P2.7 + P2 acceptance) tests skill-resolution mechanics — a generic probe that doesn't depend on MAGI being invoked. The real-data probe (P5.4-pre) tests BM25 search round-trip when invoked via `/magi`. The smoke test path covers what it needs to cover.

**However**, a sharper question: does the P5.4-pre real-data probe explicitly run within a `/magi` invocation context, or does it run as an isolated subagent dispatch outside `/magi`-flow? If isolated, the test verifies skill access but not the actual usage path; if `/magi`-invoked, the test verifies the actual usage path. Plan line 600 says probe subagent invokes `skill://incerto-search`; this is isolated dispatch, not `/magi`-invoked. **Mild gap**: the probe verifies subagent skill access mechanic; it does NOT verify the full `/magi` → 3-MAGI → each MAGI invokes incerto-search → BM25 search round-trip → citation-formatted output → synthesizer integration path. The plan should add a note that P5.4-pre is the *mechanic* test and the P5 acceptance E2E (`/magi`-invoked battery) is the *full-path* test; both are needed.

**Triage:** **OPTIONAL note** to add to P5.4-pre setup: "P5.4-pre verifies subagent skill-access mechanic in isolation (not within `/magi`-flow). Full-path verification (each MAGI invokes incerto-search during `/magi` battery question) happens at P5 acceptance E2E and is part of the 8-question `/magi` battery's per-MAGI Round 1 transcript inspection."

**Severity:** LOW. **Realist Check**: worst case is mechanic-pass + full-path-fail at P5 acceptance, executor diagnoses quickly because mechanic is known good. Mitigated by: existing P5 acceptance E2E catches it. OPTIONAL.

---

## Critic-Original New Issues (beyond user's prompted questions)

### CO-4 — Spec departure validation cost is implicit in ADR Negative but not in Principles or P2 bail-out wording

**Issue:** ADR Negative line 1147-1151 names 3 spec departures. **But the rev 1 spec's 75% disagreement projection (Stage 4-5) was canon-anchored** — Stage 4 used canon-language to anchor MAGI personalities and produced the 75% projection. Rev 3.0 swaps canon labels for English non-canon labels (Empirical Skeptic / Tail-Risk Guardian / Convexity Seeker) and provides no equivalent validation. The plan's P2 bail-out (≥4/8 ships with `[P2-WARN]`) is the only validation mechanism, and it's *more likely to fire under rev 3.0 than rev 2.5* because the validation projection is no longer applicable.

The plan does NOT explicitly acknowledge this in the principles or in the P2 bail-out wording. ADR Negative line 1148-1151 names the 3 departures but doesn't say "the 75% projection no longer applies; rev 3.0 has no projection of its own; bail-out is the only validation."

**Triage:** **SHOULD FIX (P0 documentation pass, can go in 3.1).** Plan's principle 2 should say "MAGI tension is opt-in; the rev 1 75% disagreement projection was canon-anchored and does not transfer to rev 3.0's English non-canon labels; the P2 bail-out is the validation mechanism." ADR Negative should add: "Rev 1's 75% disagreement projection (Stage 4-5 simulation) was canon-anchored. Rev 3.0's English non-canon labels are unvalidated; P2 acceptance via 8-question `/magi` battery is the only empirical validation point. Bail-out at ≥4/8 with `[P2-WARN]` is more likely to fire under rev 3.0 than rev 2.5 would have been."

**Severity:** MED. Confidence: HIGH. **Realist Check**: worst case is the user is surprised when P2 ships with `[P2-WARN] disagreement: 4/8` and assumes "the plan said 75%" — but the plan's bail-out protocol covers this and the documented `[P2-WARN]` is honest. The fix is honest documentation, not architectural change.

### CO-5 — `task` payload for `/magi` flow not re-confirmed under rev 3.0 (skill-as-orchestrator pattern)

**Issue:** Rev 2.5 had `rules/magi-protocol.md` (≤1500 tokens, alwaysApply) as the dispatcher; the rule's body specified `task` payload mechanism (verbatim user question, no preamble). Rev 3.0 moves dispatch logic to `skills/magi-tribunal/SKILL.md` (loaded only on `/magi`). Plan §6 P2.5 line 564 says: *"Each receives ONLY the user's question (verbatim, no preamble, no metadata — the subagents' frontmatter encodes their identity)."*

**Verification gap:** rev 2.5's payload mechanism (line 366 of rev 2.5) specified the same. Rev 3.0 inherits this wording but does NOT explicitly say WHERE the user's question is captured. In rev 2.5's flow, the alwaysApply rule body said: "fire 3 parallel `task` calls with ONLY the user's question." In rev 3.0's flow, the user types `/magi <question>` — and the `<question>` part is captured ONCE in the slash-command parser, then passed... where? To the skill body's variable substitution? To each `task` call's `description` field? The plan says "verbatim no preamble" but doesn't specify the substitution mechanism within the skill.

**Triage:** **OPTIONAL.** Practical impact is low; the executor is likely to figure this out empirically (the slash-command parser will resolve `/magi <question>` to `<question>` and the skill body will reference it via convention). But the plan should specify: "When the skill is loaded via `/magi <question>`, the `<question>` portion is the literal user input. The skill body instructs the main agent to fire 3 `task` calls with `<question>` as each call's description argument verbatim."

**Severity:** LOW. **Realist Check**: worst case is executor wastes 30 minutes figuring out the substitution mechanism; cheap fix. OPTIONAL.

---

## Iteration Economics (rev 3.0 → 3.1 vs ITERATE-with-multi-amend)

This is iteration 3 of max 5. Decision space:

| Path | Cost | Benefit | Risk |
|---|---|---|---|
| **ITERATE → rev 3.1 (this verdict)** | One more P→A→C cycle (~3-5 hours wall-clock, plan author rewrites ~150 lines + adds register exemplar file ~120 lines + adds counterfactual test corpus ~50 lines + 3 new bash scripts as part of `.omc/qa/scripts/` per File Manifest, but most are already in scope from rev 3.0 — incremental ~20% expansion) | Resolves the 5 MUST FIX issues at the plan level (slash-routing pre-flight, default-mode disclosure, bilingual trigger surface, differentiated Taleb cueing, register exemplar); avoids executor stopping at P1 to ask about slash-routing; avoids PM6 firing escape-valve due to identical Taleb cueing; closes the peacemaker geometry-vs-archetype falsification gap; reduces post-translation register-flattening rework | Iteration churn: spends 1 of remaining 2 iterations (out of max 5) on plan-text amendments. Risk of introducing rev 3.1 NI-4/NI-5 from a fourth revision pass; though the 5 MUST FIX items are surgical (no architectural rewrites), execution quality at this size needs care. |
| **APPROVE-WITH-RESERVATIONS (executor applies 5 MUST FIX as P0 plan edits before P1)** | Executor applies 5 plan-edit operations totaling ~250 lines before P1 ships (~30 min if executor is sharp; could be 1-2 hours if executor needs to draft per-MAGI Taleb cueing wording) | Saves a full P→A→C cycle; preserves 17/17 of iter-2 critical edits already absorbed; iter-3 plan is structurally close to executable | NI-rev3-1 is NOT executor-fixable as a P0 polish edit because the slash-routing pre-flight outcome changes WHICH FILES P1 deletes. Executor cannot make the plan-level decision about whether `commands/magi.md` is created or `commands/` is deleted. NI-rev3-3 (per-agent Taleb cueing) requires drafting 3 distinct opening-paragraph templates, which is creative writing; NI-rev3-4 (peacemaker counterfactual test) requires drafting question text. These are plan-author tasks, not executor tasks. **APPROVE-WITH-RESERVATIONS is structurally inappropriate for rev 3.0's NIs.** |
| **REJECT** | Forces full re-plan | Resolves all issues definitively but treats rev 3.0 as fundamentally broken | Plan is not fundamentally broken — the spine is sound (4 amendments are individually defensible, 17/17 iter-2 absorbed, ADR honest about user overrides). Rejecting on slash-routing alone is severity-mismatch — slash-routing is a 5-min pre-flight, not a re-architecture. |

**Substance vs polish judgment:** This is **NOT polish vs spine**. The 5 MUST FIX issues are content-level plan amendments that change WHICH FILES P1 deletes (NI-rev3-1) and how P2.1-P2.3 templates read (NI-rev3-3). They cannot be deferred to executor as P0 edits. The Architect's iter-3 verdict (ITERATE → rev 3.1) is correct and matches my analysis.

**Critical contrast with iter-2 (rev 2.5):** in iter-2, the 3 NIs (NI-1/NI-2/NI-3) were all *executor-applicable polish* — measurement spec swap (NI-2 ratio test), atomicity bash check (NI-3 cross-file label), sequencing fix (NI-1 stub skill at P2.7). The Critic could honestly say "executor applies these as P0 plan edits before P2 ships." **In iter-3 (rev 3.0), the NIs are NOT executor-applicable polish.** They require plan-author judgment on (a) which slash-routing branch to commit to, (b) how to differentiate per-agent Taleb cueing, (c) how to disclose the default-mode capability gap. The verdict has to reflect this difference.

**The honest verdict is ITERATE.** The iteration churn is real but warranted because the alternative (executor handles P1-blocking decisions) is worse than the iteration cost.

---

## Final Recommendation

**Verdict: ITERATE → rev 3.1**

**P0 plan edits required (apply at planner level, before P1 ships):**

1. **NI-rev3-1 fix (HIGH, blocks P1)** — Add new section P1.0 "Slash-routing pre-flight" at top of P1 (before existing P1 tasks 1-9). Specify the 5-minute test sequence with 3 outcome branches (a/b/c) and the conditional plan amendments each branch implies. Concrete edit text in MUST FIX #1 above. Update Plan §1 Principle 4 wording per the chosen branch outcome.

2. **NI-rev3-3 fix (HIGH, must land in P2 amendment block)** — Replace the identical-with-role-swap-slot template at line 467 with three distinct per-agent open paragraphs. Concrete edit text in MUST FIX #4 above. MELCHIOR-1 invokes Taleb-the-falsifier; BALTHASAR-2 invokes Taleb-the-via-negativa-guardian; CASPER-3 invokes Taleb-the-convexity-seeker.

3. **NI-rev3-5 fix (MED-HIGH, blocks P1's README/AGENTS update)** — Add new §1.C.1 sub-section explicitly differentiating default-mode and `/magi`-mode capabilities. Update Principle 2 wording to "MAGI tension is opt-in via `/magi`; when invoked, mandatory; default mode has no tension surface." Update README.md and AGENTS.md to include the two-tier disclosure prominently. Concrete edit text in MUST FIX #3 above.

4. **NI-rev3-2 fix (MED, blocks P2 if not addressed)** — Rewrite Plan §1.D (line 96-98) to distinguish slash-command resolution (skill `triggers:` array — undocumented per WebFetch verification, will be resolved by the P1.0 pre-flight) from in-context regex detection (regex lists in alwaysApply rule bodies — runtime regex matches against user input). These are different mechanisms with different runtime semantics.

5. **NI-rev3-7 / register exemplar (MED-HIGH, blocks P2.1)** — Add new task P2.0 (or P3.0) creating `.omc/qa/register-exemplars.md` with 3 current Chinese register markers + required English target register + acceptance regex per file. Concrete edit text in MUST FIX #5 above. Add new bash script `.omc/qa/scripts/check-positive-register.sh` to File Manifest line 1198.

**P0 SHOULD FIX (apply in 3.1 alongside the 5 MUST FIX, NOT deferred to 3.2):**

6. **PM7 strengthening (NI-rev3-4)** — Update PM7 mitigations at line 318-320 to add Test B (M+B vs C counterfactual). Concrete edit text in SHOULD FIX #2 / Architect SHOULD FIX #7 above. Falsification trigger documented; recovery path (re-introduce canon partial-annotation OR accept alliance-not-mediation) documented.

7. **PM8 strengthening (Architect A1.2 / NI-rev3-6)** — Add Option C (TTSR-triggered injection) to O8 in Plan §3. Document the pivot trigger (PM8 telemetry `/magi`-rate <5% over 30 days → flip from Option A to Option C, ~1-hour change). Concrete edit text in SHOULD FIX #2 (above MUST FIX #2 in my triage) above.

**SHOULD FIX optional polish (3.1 or 3.2):**

8. **Spec-departure validation cost disclosure (CO-4)** — Update Principle 2 wording per #3 above; add ADR Negative entry: "Rev 1's 75% disagreement projection (Stage 4-5 canon-anchored) does not transfer to rev 3.0; P2 bail-out is the only validation mechanism."

9. **`task` payload mechanism re-confirmation (CO-5)** — Add to Plan §6 P2.5 (after line 564): "Within the skill body, `<question>` from `/magi <question>` substitutes verbatim into each `task` call's description argument."

10. **`triggers:` cleanup conditional on P1.0 outcome** — If P1.0 branch (a) confirms `triggers:` works, document this as known-undocumented oh-my-pi behavior in `.omc/qa/slash-routing-result.md`. If branch (b) or (c), strip `triggers:` from `skills/magi-tribunal/SKILL.md` frontmatter — it's dead metadata.

**Documentation flips required (post-Critic, ~5 min):**

11. **ADR Status flip** — Plan ADR section: from "REVISION 3.0 — DRAFT" to "REVISION 3.1 — PENDING" once edits 1-10 land. Critic re-reviews 3.1 in iter-4.

12. **Open-questions tracker updates** — Mark rev 3.0 amendments' resolved items per Architect line 296 (graduated gate threshold invalidated, MAGI cost telemetry interpretation changed); add NI-rev3-1 (slash-routing pre-flight, gates P1) as new entry. Mark `triggers:` semantic cleanup as conditional on pre-flight outcome.

**Path forward:**

The planner should apply the 5 MUST FIX edits + 2 SHOULD FIX edits + 3 optional polish edits as a unified 3.1 amendment pass. Estimated effort: ~200 net new lines + ~50 modified lines. **The iteration economics are correct** — these are plan-author tasks, not executor tasks. Spending iter-4 on validating 3.1 is the right tradeoff vs shipping rev 3.0 with NI-rev3-1 as P1-blocking ambiguity.

If the user accepts ITERATE: planner produces 3.1; Architect re-reviews focusing on whether the 5 MUST FIX edits are properly absorbed; Critic issues final verdict at iter-4. **I expect APPROVE at iter-4** if 3.1 absorbs the 5 MUST FIX cleanly.

If the user prefers a faster path: edits 1, 3, 4, 5 are sufficient to flip to ACCEPT-WITH-RESERVATIONS at iter-4 (edits 2, 6, 7 land in 3.2). But this is a strict tradeoff — edit 2 (NI-rev3-3) is HIGH severity for D1 and shouldn't be deferred unless the user explicitly accepts PM6 escape-valve outcome (asymmetric Taleb cueing across MAGI). **Recommend full 5-MUST-FIX pass; do not split.**

---

## Verdict Justification

**Mode of operation:** Started in THOROUGH mode. Escalated to ADVERSARIAL after the Architect's NI-rev3-1 (slash-routing) was confirmed via independent WebFetch evidence + the cross-validation report's archetype-grounded peacemaker reasoning was confirmed via direct file read. Two HIGH-severity findings + 3 MED-severity findings + pattern (rev 3.0's amendments each have at least one substantive concern, suggesting systemic optimization toward "amendment-driven growth without re-validation") triggered ADVERSARIAL escalation per the Investigation Protocol's threshold rules.

**ADVERSARIAL mode added:** CO-4 (spec-departure validation cost is implicit, not explicit). The plan honestly names 3 deliberate spec departures in ADR Negative, but does NOT acknowledge that the 75% disagreement projection (Stage 4-5 simulation) was canon-anchored and that rev 3.0 has no projection of its own. The bail-out (≥4/8 ships with `[P2-WARN]`) is more likely to fire under rev 3.0 than rev 2.5 because the unvalidated label change reduces the probability of hitting 75%. This is the kind of issue THOROUGH mode might miss because it requires reasoning about the **absence** of validation rather than the presence of issues.

**Realist Check applied to NI-rev3-1 through NI-rev3-7 + CO-4:**
- NI-rev3-1: stayed at HIGH despite low practical worst-case (executor stops at P1, asks question, costs ~30 min to clarify) because internal-consistency between Plan Principle 4 (Platform-native) and unverified mechanism is exactly the failure mode the deliberate-mode review is meant to catch. Pre-flight is 5 minutes; the cost asymmetry is unmissable.
- NI-rev3-3: stayed at HIGH because PM6 (style hijack) is the predicted consequence of identical templates AND the fix is small (3 distinct opening paragraphs).
- NI-rev3-4 (peacemaker geometry): stayed at MED because the source-evidence falsification is direct (cross-validation report:74 explicitly uses archetype reasoning), but the practical impact requires PM7 Test B to fire — empirical, not certain. Counterfactual test is cheap; recovery paths are documented.
- NI-rev3-5: stayed at MED because the user-experience promise (rev 1 spec "MAGI tension is mandatory") was material to the plan's acceptance, and rev 3.0 has reduced this without explicit acknowledgment in the plan body.
- NI-rev3-6 (50-token hint vs TTSR): downgraded from Architect MUST FIX to my SHOULD FIX because PM8 telemetry catches the failure with bounded loss (30-day cadence; pivot path is short).
- NI-rev3-7 (register exemplar): stayed at MED-HIGH because pre-translation anchoring is much cheaper than post-translation re-translation rework.
- CO-4 (spec-departure validation cost): MED — honest documentation, not architectural change.

**Why ITERATE not APPROVE-WITH-RESERVATIONS:**
- 3 PASS + 4 PARTIAL PASS at hard gates (down from iter-2's 7/7 PASS); 3 PASS-WITH-RESERVATIONS at soft gates (similar to iter-2 but new internal consistency reservations).
- 5 MUST FIX issues, of which NI-rev3-1 is structurally upstream of P1 (not an executor polish edit).
- Iter-2 NIs were all executor-applicable polish (measurement spec swap, atomicity bash check); iter-3 NIs are plan-author judgment calls (which slash-routing branch, how to differentiate per-agent Taleb cueing, what to disclose about default-mode capability).
- The iteration economics flip the verdict to ITERATE because executor cannot apply NI-rev3-1's pre-flight branching at the plan level.

**Why ITERATE not REJECT:**
- The plan's spine is sound (4 amendments are individually defensible).
- 17/17 of my iter-2 P0 edits are absorbed.
- ADR honestly names spec departures.
- 5 MUST FIX edits are surgical (~200 net new lines, no architectural rewrites).
- Slash-routing is a 5-minute pre-flight, not a re-architecture.

**Why ITERATE not full APPROVE:**
- 5 MUST FIX issues require plan-author judgment.
- Iter-4 is a reasonable use of remaining 2 iterations (out of max 5).
- 3.1's expected delta (~250 lines) is amendment-pass-sized, not architectural-sized.

---

## Open Questions (unscored, iter 3)

Items surfaced during iter-3 verification that did not rise to scored findings:

- **Q-iter3-1**: The slash-routing pre-flight at P1.0 assumes `omp --list-commands`, `omp --list-skills` are valid verbs. Plan inherits these from rev 2.5's verification command sequences (Q-iter2-1 carryover). If `omp --help` reveals different verb names (e.g., `omp commands list` instead of `omp --list-commands`), pre-flight needs adjustment. The pre-flight should start with `omp --help` to map verbs.

- **Q-iter3-2**: The architect raised the question of whether PM6 escape valve ("drop Taleb cue from BALTHASAR-2 and CASPER-3 if measured homogeneity exceeds threshold") is the right asymmetric cueing structure. An alternative: drop Taleb cue from MELCHIOR-1 (the one MAGI most-aligned with Taleb's combative voice — removing it specifically frees the others from the dominant register). Marked open; user judgment required if PM6 fires.

- **Q-iter3-3**: The plan's bilingual trigger keyword regex location (per §1.D) currently has the regex IN the rule body (e.g., `via-negativa.md` body contains `add | improve | optimize | 增加 | 改进`). When the always-apply rule loads, the regex is in working memory, available for the LLM to match. **But**: does the LLM actually evaluate this regex at user-input parse time, or does it evaluate it at next-turn-generation time (i.e., post-user-input, when the LLM is composing its response)? The plan implicitly assumes evaluation at parse time (so the trigger fires same-turn). If oh-my-pi doesn't have a parse-time regex match mechanism (i.e., always-apply rules don't run pre-LLM regex against user input), the trigger only fires when the LLM happens to reference the rule in its next response — which is a different (weaker) activation path. This is a question for the user to verify against their oh-my-pi runtime knowledge or via empirical test.

- **Q-iter3-4**: Plan O11 chose "preserve research artifacts as historical record + add one-line header note" (Architect SHOULD FIX #6). I rated OPTIONAL. If the user wants stronger annotation (e.g., partial inline `[rev 3.0 update]` markers throughout the cross-validation report), that's a 30-minute documentation pass. Not a finding; flag for user preference.

- **Q-iter3-5**: PM6 Jaccard threshold (≤0.45) is asserted but not calibrated. The plan flags this. Architect's NI-rev3-3 fix (differentiated per-agent Taleb cueing) should make 0.45 more achievable; but the threshold itself remains uncalibrated. After P4 ships, the user should consider running PM6 audit on rev 2.5's Chinese prompts for comparison — establishes a baseline before committing to the rev 3.0 threshold.

- **Q-iter3-6**: The "Q-iter2-1 omp CLI verb" carryover from iter-2 is unresolved. P1.0 pre-flight is the right place to resolve it. But until resolved, ALL of the plan's `omp --X` verification commands are technically unverified. Mild risk; cheap to verify (one `omp --help` call).

These are post-3.1 quality items, not blocking findings. None affect the iter-3 ITERATE verdict.

---

*Critic iteration 3 complete. Verdict ITERATE → rev 3.1. Five MUST FIX edits + 2 SHOULD FIX edits + 3 optional polish edits required. Concur with Architect on diagnosis; downgrade Architect's MUST FIX #2 (PM8 mechanism upgrade) to my SHOULD FIX (PM8 telemetry catches failure with bounded loss); promote Architect's SHOULD FIX #7 (PM7 counterfactual) to my MUST FIX-LITE (peacemaker geometry empirically falsifiable from source evidence). Path forward: planner applies 3.1 amendment pass; iter-4 expected to APPROVE if 3.1 absorbs the 5 MUST FIX cleanly.*

---

(prior iteration 2 evaluation preserved below)

# Critic Evaluation (Iteration 2)

**Reviewer:** Critic (oh-my-claudecode:critic)
**Plan:** `.omc/plans/taleb-pi-execution-plan.md` (787 lines, +268 from iter 1)
**Open Questions Tracker:** `.omc/plans/open-questions.md` (NEW, 27 lines)
**Architect Review (iter 2):** APPROVE-WITH-RESERVATIONS, 3 new issues (NI-1, NI-2, NI-3)
**Mode:** RALPLAN-DR DELIBERATE, iteration 2 of max 5
**Date:** 2026-05-05
**Investigation Mode:** THOROUGH (no escalation triggered — zero critical findings, all iter-1 concerns resolved)

---

## Verdict

**APPROVE-WITH-RESERVATIONS** (per ralplan vocabulary: this is functionally APPROVE with 3 documented P0 plan edits the executor applies before P2 ships).

The plan's iteration-2 revision is genuinely good. All 17 of my iteration-1 edits are addressed (12 fully, 5 substantively-with-acknowledged-tradeoffs). The 12 Architect iter-1 edits are addressed (10 fully, 2 with caveats that the Architect themselves surfaced as new issues). The new `open-questions.md` tracker honestly catalogs deferred items. The ADR is now substantively filled and honest about the BM25-vs-research tension.

The Architect's 3 new issues are real but surgical. NI-1 (smoke-test sequencing contradiction) is a mechanical 2-line fix. NI-2 (timestamp test false-pass) is a measurement-spec swap. NI-3 (cross-file label consistency) is a 3-line grep addition. Total: ~30 lines of plan edits, none touching the architectural spine.

**The iteration economics flip the verdict.** Demanding iteration 3 for ~30 lines of polish is iteration churn — the cost of one more P→A→C cycle exceeds the severity of the issues. The right move is to APPROVE with the 3 P0 edits documented as `open-questions.md` items the executor applies before P2 ships, exactly as the Architect's APPROVE-WITH-RESERVATIONS implies.

---

## Hard Gates (Iteration 2)

| # | Gate | Status (iter 1 → iter 2) | Notes |
|---|------|---------------------------|-------|
| 1 | Principle-Option Consistency | PASS → PASS | All 7 chosen options trace to drivers. CF1 (V1 in architect) was the lone tension; resolved by moving executable to `.omc/incerto/scripts/`. ADR Why-Chosen at line 729 traces B/B/A/B/C/A/A back to D1/D2/D3 explicitly. |
| 2 | Fair Alternatives | PASS (with reservation) → **PASS** | O3 now lists option E (LanceDB + Transformers.js) at line 75 with full pros/cons. Rationale at lines 77-84 traces to drivers; ADR Consequences > Negative line 742 names the spread (5.75 vs not-in-top-7) and migration trigger. The omission that caused the iter-1 reservation is fixed. |
| 3 | Risk Mitigation Clarity | PARTIAL PASS → **PASS** | R11 (subagent skills, HIGH), R12 (sequential collapse, HIGH), R13 (DeepSeek-v4 Chinese anchoring, LOW) added. R8 marked RESOLVED. Each new risk ties to specific plan elements (smoke tests, timestamp criterion, bail-out). |
| 4 | Testable Acceptance Criteria | PASS → PASS | Each phase has concrete bash command sequences (lines 238-253, 393-417, 454-472, 514-543, 640-674). Verified: `omp --version`, `omp --list-rules`, `omp --dispatch task`, grep audits, recall@5 check, all are mechanically executable. **Caveat**: `omp --dispatch task` and `omp --list-rules` are assumed CLI verbs — not verified against the binary. Open question Q-iter2-1 below. |
| 5 | Concrete Verification Steps | PASS → PASS | Per-phase pass/fail conditions explicit. P2 bail-out protocol (lines 384-388) has 3 states. P3 grep audit specifies exact pattern. P5 recall@5 ≥3/5 threshold. |
| 6 | Pre-Mortem Quality | PARTIAL PASS → **PASS** | PM4 (lines 162-169) covers the silent sequential collapse — concrete failure mode, traced root cause, 4 mitigations (acceptance criterion, R12, smoke-test logging, monthly re-check cadence). All 4 PMs concrete, not theatrical. |
| 7 | Expanded Test Plan (4 levels) | PASS → PASS | Unit (per-agent structure check), Integration (rule + skill + agent triple, dispatch-each-MAGI test), E2E (8-question battery + factual gate test + parallelism timestamp check), Observability (battery-only persisted transcripts, query-log.jsonl, retention policy). All 4 levels addressed with concrete artifacts. |

**Hard gate net (iter 2):** 7/7 PASS. Up from 5 PASS + 2 PARTIAL in iter 1.

---

## Soft Gates (Iteration 2)

| # | Gate | Status (iter 1 → iter 2) | Notes |
|---|------|---------------------------|-------|
| 8 | Execution Specificity | PASS → PASS | File paths, line numbers, frontmatter snippets, npm packages, bash command sequences all present. The plan now reads more like a runbook than the iter-1 strategy document. |
| 9 | Architect Concern Resolution | FAIL → **PASS-WITH-RESERVATIONS** | All 12 iter-1 architect edits are addressed (10 fully, 2 with new-issue caveats). Architect's iter-2 review issued APPROVE-WITH-RESERVATIONS. Three new architectural issues (NI-1, NI-2, NI-3) introduced — see triage below. None touch the spine. |
| 10 | Internal Consistency | PARTIAL PASS → **PASS-WITH-RESERVATIONS** | CF1 contradiction (P1 deletes tools/, P5 recreates) is fully resolved (executable moved, P1 deletion final at line 112). **However**, NI-1 introduces a NEW internal contradiction (smoke-test sequencing — see triage below). This is iter-2's regression. |
| 11 | Spec Fidelity | FAIL → **PASS** | Non-Goal "deleting tools/ entirely" honored literally (line 112: "tools/ directory is NOT recreated"; File Manifest line 771: "tools/ STAYS deleted"). Spec self-contradiction on narrative-fallacy-guard TTSR explicitly adjudicated at lines 24-36 (plan honors line 35; logged as ADR Negative consequence line 743). |
| 12 | ADR Stub Completeness | PASS → PASS | ADR (lines 696-763) is substantively filled. Status, Decision, Drivers, Alternatives Considered (all 7 options), Why Chosen (traces B/B/A/B/C/A/A to D1/D2/D3), Consequences (Positive 5 / Negative 6 / Neutral 3), Follow-ups (8 specific items). Honest about BM25-vs-research disagreement (line 742), MAGI cost (line 744), code-subordinate-to-thinking bend (line 741). Status will flip from PROPOSED to ACCEPTED post-Critic. |

**Soft gate net (iter 2):** 5/5 PASS (3 fully, 2 PASS-WITH-RESERVATIONS due to NI-1). Up from 2 PASS + 1 PARTIAL + 2 FAIL in iter 1.

---

## Iteration 1 Concerns Triaged (Resolution Verification)

I read my own iter-1 evaluation to verify each of my 17 specific edits and 5 critic-original concerns were addressed.

### Critical Findings (1)

| # | Iter-1 Finding | Iter-2 Resolution Status |
|---|---|---|
| CF1 | Spec Non-Goal violation: tools/ recreation in P5.3 | **RESOLVED**. Lines 99-112 (O5) rewrite chose option C; executable at `.omc/incerto/scripts/search.ts`; line 112 explicit "tools/ NOT recreated"; File Manifest line 771 confirms; R8 marked RESOLVED at line 691; verification step at line 642 (`test ! -e tools/ && echo OK`). The footnote rationalization is gone. |

### Major Findings (5)

| # | Iter-1 Finding | Iter-2 Resolution Status |
|---|---|---|
| MF1 | Parallelism semantics unverified, no observability hook | **RESOLVED-WITH-CAVEAT**. P2 acceptance criterion 5 (line 379) adds dispatch-timestamp check; PM4 (lines 162-169) covers silent sequential collapse; R12 (line 684) tracked. **Caveat**: NI-2 (Architect iter-2) identifies that the timestamp test admits a false-pass when each child's first action is fast. Test is structurally weak. Promoted to MUST FIX P0 in this iteration's recommendations below. |
| MF2 | BM25 vs vector retrieval contradiction silently omitted | **RESOLVED**. Option E added to O3 at line 75 with full pros/cons. Rationale traces to D2 + D3 (lines 77-84). ADR Consequences > Negative line 742 documents the contradiction with research, names the spread (5.75 vs not-in-top-7), states user's explicit Round-16 override, names the migration trigger. Honest. |
| MF3 | Subagent skill access semantics unverified | **RESOLVED-WITH-CAVEAT**. P5.4-pre (lines 595-606) specifies the smoke-test procedure; 3 outcome paths (Pass A / Pass B / Fail); Pass B's Bash fallback is concrete (line 604 specifies the command pattern); Fail's pivot is documented. R11 (line 683) tracked. **Caveat**: NI-1 (Architect iter-2) identifies that the smoke test cannot run at P2 acceptance time as line 382 claims, because P5.3 (which the smoke-test setup at line 600 requires) has not run. Promoted to MUST FIX P0 below. |
| MF4 | Spec self-contradiction on narrative-fallacy-guard TTSR not adjudicated | **RESOLVED**. Plan §1 lines 24-36 explicitly adjudicates: spec line 35 (no TTSR) wins over spec line 419 (Round 14 transcript), reasoning is "Round-16-overrode-Round-14"; existing `rules/narrative-fallacy.md` remains as alwaysApply (not TTSR); MELCHIOR-1 handles narrative fallacy contextually. P2.6 line 363 reinforces. ADR Negative line 743 documents. |
| MF5 | Synthesizer S2A as relabel rather than executable stage | **RESOLVED**. P2.4 lines 320-334 contains a literal extraction table (`\| Agent \| optimization_dimension \| substantive_verdict \| condition_content \|`) the synthesizer MUST fill before classifying. Plus 2-stage classification rules. Plus partial-output protocol (line 341). Executable, not decorative. |

### Critic-Original Edits (3)

| # | Iter-1 Edit | Iter-2 Resolution Status |
|---|---|---|
| 13 | Adjudicate spec self-contradiction on narrative-fallacy-guard TTSR | **RESOLVED** (same as MF4) — lines 24-36 + ADR line 743. |
| 14 | Address vector-retrieval research contradiction | **RESOLVED** (same as MF2) — O3 option E + ADR line 742 + migration trigger documented. |
| 15 | Add PM4 covering silent sequential collapse | **RESOLVED** — PM4 at lines 162-169 with concrete failure mode + 4 mitigations. |

### Specific Plan Edits (17)

Cross-checked each of my 17 numbered edits from iter-1 against the revised plan:

| # | Iter-1 Edit | Iter-2 Status |
|---|---|---|
| 1 | Move executable out of `tools/` | **DONE** (line 109, line 557, line 583) |
| 2 | Add parallelism timestamp criterion | **DONE** (line 379) — but admits false-pass (NI-2) |
| 3 | Replace S2A prose with extraction template | **DONE** (lines 320-334) |
| 4 | Bound P2 verification loop (max 2 iterations + bail-out) | **DONE** (lines 384-388) |
| 5 | Add 3rd gate state (MELCHIOR-only for clarification) | **DONE** (lines 359-362, State A/B/C) |
| 6 | Smoke-test subagent skill access before P5.4 | **DONE** (lines 595-606) — but sequencing contradiction (NI-1) |
| 7 | Add R11 (subagent skill access) | **DONE** (line 683) |
| 8 | Add R12 (sequential collapse) | **DONE** (line 684) |
| 9 | Token budget for `magi-protocol.md` (≤1500 tokens) | **DONE** (line 358) + verification at line 398 |
| 10 | Adjudicate spec contradiction on narrative-fallacy-guard | **DONE** (lines 24-36, line 363, line 743) |
| 11 | Add option E (LanceDB) to O3 | **DONE** (line 75) |
| 12 | Add PM4 (silent sequential collapse) | **DONE** (lines 162-169) |
| 13 | ADR Consequences > Negative on code-subordinate-to-thinking bend | **DONE** (line 741) |
| 14 | Specify retention on `.omc/qa/runs/` (last 10, prune older) | **DONE** (line 196, line 203) |
| 15 | Switch query-log to .jsonl (mf3) | **DONE** (line 109, line 201, line 588) |
| 16 | Pandoc feature detection in ingest.ts | **DONE** (line 559) |
| 17 | `task` payload mechanism (verbatim user question) | **DONE** (line 366) |

**Critic iter-1 net: 17/17 specific edits addressed. Zero rejected.**

---

## Architect's 3 New Issues (NI-1, NI-2, NI-3) Triage

I independently verified each of the Architect's iter-2 findings against the plan source.

### NI-1 — Smoke-test sequencing self-contradiction

**Architect's claim:** Plan line 382 says skill-access smoke test runs at P2 acceptance (before P3); plan line 600 says P5.3 must be complete (P5.3 is in Phase 5). Mutually exclusive.

**My verification:**
- Line 382: `Subagent skill access smoke test (NEW — see P5.4 prerequisite). This MUST pass before P5.4 begins, but the smoke test itself runs at P2 acceptance time (before P3) so we discover the access constraint as early as possible.`
- Line 600: `Setup: P5.3 must be complete (script + skill exist). Spin up a minimal test subagent at .omc/qa/test-subagent.md...`
- The line 379 escape valve (`stub search.ts that does nothing but log timestamps`) addresses the *parallelism timestamp* test, not the *skill-access* probe. The probe at line 600 explicitly invokes `skill://incerto-search` which requires `skills/incerto-search/SKILL.md` to exist — created in P5.3.

**Confirmed.** The contradiction is real and mechanical. The executor will hit this at P2 acceptance and stop.

**Triage:** **MUST FIX (P0 plan edit, applied before P2 ships)**

**Concrete edit:** Apply Architect's preferred option (a) — create a minimal stub `skills/incerto-search/SKILL.md` at P2 acceptance time (5 lines: name, description, body returning literal `STUB_OK`). The probe at P2 acceptance verifies whether subagents can read skill content at all. P5.3 then fleshes out the skill body. This preserves the "discover constraints early" intent without breaking the dependency.

**Plan edit (replace line 382 + line 600 setup):**

Line 382 becomes:
```
[ ] Subagent skill access smoke test (NEW — see P5.4-pre prerequisite for full procedure). At P2 acceptance time, run a minimal-stub variant: create `skills/incerto-search/SKILL.md` with a 5-line stub body ("name: incerto-search / description: stub / body: returns the literal string STUB_OK"). Spin up the test subagent and verify it can resolve `skill://incerto-search` and read the stub content. This MUST pass before P3. The full skill-access probe (with real BM25 search) re-runs at P5.4-pre prerequisite once P5.3 ships the real script.
```

Line 600 becomes:
```
1. **Setup**: At P2 acceptance time, only the 5-line stub `skills/incerto-search/SKILL.md` exists; the probe verifies skill-resolution mechanics. At P5.4-pre prerequisite (after P5.3 ships), the real skill body is in place; the probe verifies the full BM25 search round-trip. Spin up a minimal test subagent at `.omc/qa/test-subagent.md` with frontmatter `name: skill-access-probe`, `description: "probe: invokes incerto-search and reports outcome"`, body: "When dispatched, your task is to invoke `skill://incerto-search`. If the skill is available, follow its instructions and return either the literal string `STUB_OK` (if the stub body is in place — P2 acceptance variant) or the top BM25 search result with citation (P5.4 variant). If the skill is unavailable, return `SKILL_INACCESSIBLE` and your full system prompt's tool/skill list."
```

**Severity:** HIGH (would block executor at P2 acceptance). Confidence: HIGH.

**Realist Check:** Worst case is the executor stops at P2 acceptance, reads the contradiction, asks for clarification, and either chooses the stub path on their own or pings the planner. Cost: 1 round-trip, ~30 minutes. Mitigated by: trivial fix (create 5-line stub skill at P2 acceptance). **Severity stays MUST FIX** because internal-consistency contradictions are exactly what the deliberate-mode review must catch — letting one through past the Critic on the second iteration is a process failure even if the practical cost is low.

### NI-2 — Parallelism timestamp test admits false-pass

**Architect's claim:** Line 379's "all 3 timestamps within 2 seconds of each other" measures dispatch arrival time, not reasoning concurrency. If each child's first action is <700ms, sequential dispatch can produce a 1.8s spread that passes.

**My verification:**
- Line 167 (PM4 mitigations): `Source of truth is query-log.jsonl (each MAGI's first incerto-search call timestamps its dispatch); battery runner aggregates per-run.` — confirms it is a first-action arrival check, not task-end concurrency.
- Line 379: `Pass: all 3 timestamps within 2 seconds of each other.` — 2s spread on first arrivals.
- Architect's math: M(t=0)→0.6s log→B starts→1.2s log→C starts→1.8s log → spread=1.8s, passes, but dispatch was serial.

**Confirmed structurally.** The measurement boundary is wrong for the question being asked. The test is theatrically rigorous: it looks like a parallelism check, but admits the exact failure mode it was designed to catch.

**Practical caveat:** LLM `task` reasoning typically takes 10-30s per call, not <700ms. The hazard exists but requires unusually fast first actions. The false-pass window is narrow but real — and the plan's own PM4 (line 163) describes this exact scenario ("each individual question still produced authentic 3-way tension when the LLM happened to fire calls in sequence within the test's wall-clock window"). The plan acknowledges the failure mode in the pre-mortem but the acceptance test does not catch it.

**Triage:** **MUST FIX (P0 plan edit, applied before P2 ships)**

**Concrete edit:** Adopt Architect's ratio-based test verbatim. Replace line 379:

```
[ ] **Parallelism verification (NEW — addresses MF1 / R12 / PM4):** During the first battery question, capture (a) start_ts when each `task` was dispatched (parent's `task` call emit time, logged via tool-call hook or stderr log line) and (b) end_ts when each MAGI's verdict completed (logged by the battery runner). **Pass: max(end_ts) − min(start_ts) ≤ 1.5 × max(end_ts − start_ts per MAGI)**, where the right side is the longest individual task duration. **Fail: ratio > 2.0 indicates serial execution.** Rationale: parallel execution makes total wall time approximate longest-individual; serial execution makes total wall time approximate sum of all three. The 60-second gap between 30s parallel and 90s sequential is unmissable. Secondary check (kept as smoke signal): all 3 first-action timestamps in `query-log.jsonl` within 2 seconds of each other — catches the egregious "runtime queued the calls" case but is insufficient as primary signal. If primary fails: document the gap in `.omc/issues/p2-parallelism-collapse.md`, pin a follow-up to investigate `async.enabled` config or pivot to oh-my-pi `parallel_task` orchestration pattern.
```

Update PM4 mitigations (line 166-167) to reference the ratio check, not the dispatch-spread check.

**Severity:** HIGH for D1 (tension authenticity is the explicit driver). Confidence: HIGH on structural weakness; MEDIUM on real-world false-pass probability (depends on first-action speed).

**Realist Check:** Worst case is the system ships with degraded parallelism, the battery test passes, the user notices weeks later via `bursty-recent` queries showing serial timestamps, files an issue, and pivots. Detection: slow (week-2+). Mitigated by: PM4's monthly re-check cadence (line 754) acts as a backstop. **Severity stays MUST FIX** because (a) the test is the gate for D1, the explicit highest-priority driver, and (b) the fix is small (ratio swap + capture end timestamps from battery runner). Cheap to do right; expensive to leave wrong.

### NI-3 — Scratch-dir atomicity has no cross-file label consistency check

**Architect's claim:** Line 390's atomicity step writes 4 agents to `.omc/scratch/agents/`, runs unit check on each, then atomic mv. The unit check (`check-magi-structure.sh`) verifies frontmatter/sections/token-budget/structure per file but not cross-file label consistency. A typo (`保守派` instead of `保守者`) in one file vs synthesizer template in another would pass per-file checks but break vote classification silently.

**My verification:**
- Line 390: `write all 4 modified agent files to .omc/scratch/agents/ first. Verify each passes unit check. Then atomic mv .omc/scratch/agents/*.md agents/ to land all 4 simultaneously.`
- Line 178: `Tool: simple grep-based check script .omc/qa/check-magi-structure.sh runs after each agent edit.` — per-file scope.
- Plan does not specify cross-file label consistency check.
- The risk: synthesizer's S2A template (lines 320-334) and the 2-1 pattern descriptions (line 338) reference labels MELCHIOR/BALTHASAR/CASPER. If `agents/skeptic.md` says `怀疑者/科学家` (correct) and `agents/pre-mortem.md` says `保守派/母親` (typo), each file passes structure check, but synthesizer compares the labels in its templates against the labels emitted by agents — mismatch causes silent mis-classification.

**Confirmed.** The gap is real and the proposed fix is trivial.

**Triage:** **SHOULD FIX (P0 plan edit, applied before P2 ships)**

**Concrete edit:** Add to the atomicity step at line 390 (or as a new step in the verification command sequence at line 393-417):

```
**Cross-file label-consistency check** (per architect NI-3): Before atomic mv, run:
```bash
# Verify the unique-label set across all 4 agent files is exactly the canonical set
EXPECTED='怀疑者 保守者 反脆弱者 MELCHIOR-1 BALTHASAR-2 CASPER-3'
ACTUAL=$(grep -hoE '怀疑者|保守者|反脆弱者|MELCHIOR-1|BALTHASAR-2|CASPER-3' .omc/scratch/agents/*.md | sort -u | tr '\n' ' ')
if [ "$ACTUAL" != "$(echo "$EXPECTED" | tr ' ' '\n' | sort -u | tr '\n' ' ')" ]; then
  echo "FAIL: label-set mismatch. Expected: $EXPECTED. Got: $ACTUAL"
  echo "Variants to check: 保守派, 反脆弱派, 怀疑派, 科学派 (typo candidates)"
  exit 1
fi
# Also fail on known typo variants
grep -hE '保守派|反脆弱派|怀疑派|科学派' .omc/scratch/agents/*.md && {
  echo "FAIL: typo variant detected"; exit 1
}
echo "OK: label set consistent across 4 files"
```

Mismatches block the atomic mv. The synthesizer's templates (P2.4 lines 320-334) reference the canonical set; per-agent label emission must match.
```

**Severity:** MEDIUM. Confidence: HIGH. Less than NI-1/NI-2 because the typo would be caught by the integration test (line 184: synthesizer compatibility test feeds 3 hand-crafted MAGI outputs and verifies template selection). However, the integration test is downstream; cross-file check at the atomicity step catches it earlier and cheaper.

**Realist Check:** Worst case is a label typo lands in main, integration test fails, executor reverts the commit and fixes. Cost: 30-minute round-trip. Mitigated by: integration test is a backstop. **Severity SHOULD FIX, not MUST FIX**, but the fix is cheap (5-line bash), so apply at the same time as NI-1 and NI-2.

---

## Iteration Economics

This is iteration 2 of max 5. The decision space:

| Path | Cost | Benefit | Risk |
|---|---|---|---|
| **APPROVE-WITH-RESERVATIONS** (this verdict) | Executor applies 3 P0 plan edits (~30 min total) before P2 ships; P1 cleanup ships now | Saves a full P→A→C cycle; preserves 17/17 of iter-1 critical edits already absorbed; iter-2 plan is 7/7 hard gates pass | NI-1 fix is mechanical so executor judgment is sufficient; NI-2 fix is a measurement spec swap — the executor needs to know the ratio formula and capture end_ts (documented in this verdict's edit text) |
| **ITERATE** (force iter 3) | One more P→A→C cycle (~2-4 hours wall-clock) for ~30 lines of plan edits | Marginal: NI-1/NI-2/NI-3 land in the plan body rather than in `open-questions.md` | Iteration 3 spends one of remaining 3 budget slots; iteration-3 plan grows to ~820 lines with mostly cosmetic changes; risk of introducing iter-3 NI-4/NI-5 from a third revision pass |

**Substance vs polish judgment:** All 3 new issues are smoke-test refinement and atomicity polish. None touch the architectural spine — not the MAGI hybrid division, not the parallel+rebuttal flow, not the BM25-vs-vectors decision, not the deletion-first sequencing. NI-1 is a 2-line contradiction fix. NI-2 is a measurement-spec swap. NI-3 is a 3-line bash addition.

**The iteration churn would be net negative.** Forcing iteration 3 for ~30 lines of polish, when the executor is fully capable of applying these as P0 plan edits before P2 ships, exceeds the cost of the issues themselves. The Architect's APPROVE-WITH-RESERVATIONS implies exactly this: the spine is sound, the smoke-test refinements are surgical, the executor handles them as known blockers gated to P2 acceptance.

**Verdict reasoning summary:** APPROVE on substance (7/7 hard gates, 5/5 soft gates with 2 reservations both tied to NI-1); WITH-RESERVATIONS for the 3 P0 edits the executor applies before P2 ships.

---

## Final Recommendation

**Verdict: APPROVE-WITH-RESERVATIONS** — functionally APPROVE for P1 (cleanup) and the broader plan structure; 3 P0 plan edits required before P2 ships.

**P0 plan edits required (apply before P2 acceptance, executor responsibility, ~30 min total):**

1. **NI-1 fix** — Modify line 382 and line 600 per the edit text in NI-1 above (stub skill at P2 acceptance + real skill at P5.4-pre). Resolves the smoke-test sequencing contradiction.
2. **NI-2 fix** — Replace line 379 with the ratio-based test (`max(end_ts)−min(start_ts) ≤ 1.5 × max(individual_duration)`); update PM4 mitigations at line 167 to match. Resolves the false-pass hazard.
3. **NI-3 fix** — Add cross-file label-consistency bash check to the atomicity step at line 390 (or as new verification step). Resolves the silent typo failure mode.

**Documentation flips required (post-Critic, ~5 min):**

4. **ADR Status flip** — Line 702 from "PROPOSED (revision 2) — pending Critic re-review after iteration" to "ACCEPTED (revision 2) — Critic verdict APPROVE-WITH-RESERVATIONS, executor applies P0 edits before P2 ships."
5. **Open-questions tracker** — Append the 3 P0 edits as `[ ] resolved at P2 ships` items so the tracker reflects the executor's pre-P2 work.

**Path forward:** /ralph executor mode (the plan is executable). Begin with P1 (Via Negativa Cleanup) — independently shippable today, no dependency on the 3 P0 edits. Apply the P0 edits as plan amendments at the start of P2.1 work, then proceed with P2 as written. The 4 verification commands at line 393-417 (boot, list-rules, dispatch, parallelism check) gate the P2 commit.

**If the user prefers a stricter handoff:** the planner can apply the 3 P0 edits as a documentation pass (no architectural work, just text edits to the plan) before handoff to executor — call this iteration 2.5 (lightweight). This is the strict-quality path; the APPROVE-WITH-RESERVATIONS path is the iteration-economics-aware path. User chooses.

---

## Verdict Justification

**Mode of operation:** THOROUGH throughout. No escalation to ADVERSARIAL was warranted — zero critical findings, all iter-1 concerns resolved (CF1 included, which was the iter-1 hard-gate failure), three new issues all surgical and surfaced honestly by the Architect (not hidden in the revision). The plan's iter-2 quality earns a measured tone.

**Realist Check applied to NI-1/NI-2/NI-3:**
- NI-1 stayed at MUST FIX despite low practical cost (1 round-trip) because internal-consistency contradictions on the second iteration are process failures even if cheap.
- NI-2 stayed at MUST FIX because the test gates D1, the explicit highest-priority driver, and the fix is small.
- NI-3 stayed at SHOULD FIX (downgraded from MUST FIX) because the integration test is a backstop, and the typo failure mode is recoverable with one revert. The fix is cheap so apply at the same time as NI-1/NI-2 — but a missed NI-3 alone would not warrant rejection.

**Why APPROVE-WITH-RESERVATIONS not ITERATE:**
- 7/7 hard gates pass (up from 5/7 in iter 1).
- 5/5 soft gates pass (up from 2/5 fully passing in iter 1; 2 PASS-WITH-RESERVATIONS now both tied to NI-1's fix).
- All 17 of my iter-1 specific edits are addressed (zero rejected).
- All 12 of Architect's iter-1 edits addressed (10 fully, 2 with new-issue caveats the Architect themselves transparently surfaced).
- NI-1/NI-2/NI-3 are surgical (~30 lines total); none touch the architectural spine.
- Iteration economics: forcing iter 3 for ~30 lines of polish exceeds the cost of the issues.

**Why APPROVE-WITH-RESERVATIONS not full APPROVE:**
- NI-1 is a real contradiction; the executor will hit it at P2 acceptance and stop.
- NI-2 admits a known false-pass; the test gates D1.
- The 3 P0 edits are not optional polish; they must land before P2 ships.
- "WITH-RESERVATIONS" is the honest signal: the spine is approved, but the smoke-test refinements are required prerequisites for P2.

**Why APPROVE-WITH-RESERVATIONS not REJECT:** No fundamental direction reversal. No spec violation. No principle invalidation. No research finding contradicted. The plan's spine is sound; the issues are smoke-test mechanics.

---

## Open Questions (unscored, iter 2)

Items that surfaced during iter-2 verification but did not rise to scored findings:

- **Q-iter2-1:** The verification command sequences (e.g., `omp --dispatch task melchior-1 "..."`, `omp --list-rules`, `omp --version`) assume specific oh-my-pi CLI verbs. I did not verify these against the actual `omp` binary on the user's system — they are the Architect's WebFetch-derived assumptions plus plan-author inference. Risk: at P1 verification time, if `omp --version` is not the right command (e.g., it's `omp version` or there's no version flag at all), the boot check needs the real verb. Cheap fix: at P1 start, the executor runs `omp --help` once and confirms the verbs the plan uses.
- **Q-iter2-2:** The `query-log.jsonl` atomic-append claim relies on `fs.appendFile`'s O_APPEND semantics. Verified for POSIX. The user's environment is Windows-WSL — confirmed POSIX-compliant for filesystem ops, but worth a one-line note in the plan (or in `.omc/incerto/scripts/search.ts` source) that this is the reason `proper-lockfile` was rejected. Not blocking; documentation hygiene.
- **Q-iter2-3:** PM4's monthly battery re-check cadence (line 754, ADR Follow-ups) is a calendar entry. There is no automation. If the user is busy for 3 months and skips re-checks, silent serial collapse goes undetected for 3 months. Quality-of-life suggestion: consider a `pre-commit` hook or `omp` startup banner that nags about re-check overdue if last battery > 30 days. Not blocking; not even SHOULD FIX. Just noting for ADR Follow-ups.
- **Q-iter2-4:** The 3-state graduated gate (line 359-362) thresholds are aspirational. State A: <80 chars + greeting markers. State B: ≤200 chars + no decision verbs. State C: everything else. The thresholds are reasonable but not empirically calibrated; line 758 ADR Follow-ups acknowledges this (open-questions.md tracks). Not a finding — flagged for the user's monthly review of MAGI cost telemetry (open-questions.md item).
- **Q-iter2-5:** The smoke-test stub skill (NI-1 fix) creates `skills/incerto-search/SKILL.md` at P2 acceptance with stub body, then P5.3 fleshes it out. The stub creation should be tracked as a P2-task (not a manual step the executor remembers). Suggest the NI-1 plan edit add a P2.7 sub-task: "Create stub `skills/incerto-search/SKILL.md` (5 lines) for skill-access smoke test at P2 acceptance." The stub body is replaced in P5.3.

These are all post-approval quality items, not blocking findings.

---

*Critic iteration 2 complete. Verdict APPROVE-WITH-RESERVATIONS. Three P0 plan edits required before P2 ships; documented above with concrete edit text. ADR status will flip to ACCEPTED upon executor acknowledgment of the 3 P0 edits. Path forward: /ralph executor mode, begin P1 (independently shippable), apply P0 edits at P2.1 start.*

---

(prior iteration 1 evaluation preserved below)

---

# Critic Evaluation: taleb-pi Execution Plan

**Reviewer:** Critic (oh-my-claudecode:critic)
**Plan:** `.omc/plans/taleb-pi-execution-plan.md` (519 lines)
**Spec:** `.omc/specs/deep-interview-taleb-pi-cleanup.md` (8.4% ambiguity, PASSED)
**Architect Review:** `.omc/plans/architect-review.md` (verdict: ITERATE; 12 edits)
**Mode:** RALPLAN-DR DELIBERATE (destructive changes)
**Date:** 2026-05-05
**Investigation Mode:** ADVERSARIAL (escalated — 1 hard-gate failure + 4 major findings)

---

## Verdict

**ITERATE**

The plan is fundamentally sound: research grounding is rigorous, current-state claims verified, MAGI hybrid design traces cleanly to the cross-validation report, and the 5-phase decomposition matches risk topology. However, **one hard gate fails decisively** (Spec Fidelity / Non-Goals violation in P5.3), one hard gate is at risk (Pre-Mortem completeness), and **three architectural unknowns must be resolved** before executor handoff. The Architect's 12 edits are largely correct; I add three the Architect missed and reject one.

The plan ships at ITERATE rather than REJECT because the gaps are surgically addressable; no decision-driver or research finding requires renegotiation. Estimated revision effort: 1-2 hours.

---

## Pre-commitment Predictions vs Findings

I predicted before reading the plan:
1. `tools/incerto-search/` recreation in P5.3 is a real spec violation — **CONFIRMED**.
2. `task` parallelism claim is unverified — **CONFIRMED** (oh-my-pi docs do not specify parent emission semantics).
3. Subagent skill access is the real architectural unknown — **CONFIRMED**.
4. Synthesizer S2A may be a relabel — **CONFIRMED** (current file already encodes the insight in one sentence; plan's prose addition lacks an extraction template).
5. P3 cherry-pick "inherit MAGI labels" justification may be vacuous — **CONFIRMED** (cherry-pick targets contain zero MAGI label references).

Adversarial sweep (escalation triggered) discovered three issues neither I nor the Architect surfaced initially:
- **Spec self-contradiction on narrative-fallacy-guard TTSR** that the plan does not adjudicate.
- **Source research recommends vector retrieval (LanceDB+Transformers.js); plan picks BM25 against own research.**
- **Plan does not specify how `task` calls re-issue the original user question to subagents** — the rule says "with ONLY the user's question," but the executor needs to know the literal mechanism (passed as `task` description argument? Embedded in subagent's frontmatter? The skill's responsibility?).

---

## Hard Gates

| # | Gate | Status | Notes |
|---|------|--------|-------|
| 1 | Principle-Option Consistency | **PASS** | Each chosen option (B/B/A/B/C/A/A in O1-O7) traces to a stated driver. The lone tension is O5/P5.3 (recreating `tools/`) but that's a Non-Goals issue, captured in Gate 11 below, not a principle/driver mismatch. |
| 2 | Fair Alternatives | **PASS** | Each decision lists 3-4 alternatives with non-trivial pros AND cons. Option D in O1 ("PR per phase") is honestly rejected because the dormant single-user context invalidates the value of PR review surface — not strawmanned. The vector-retrieval alternative is **missing from O3** (see Major Finding #2). |
| 3 | Risk Mitigation Clarity | **PARTIAL PASS** | Risk table (R1-R10) ties each risk to a specific plan element. R3 (BM25 conceptual mismatch) and R4 (pandoc unavailable) have concrete mitigations. R5 (token budget) is testable. **However**, no risk addresses parallelism semantics (Architect G1/G2) or subagent skill access — these belong as R11/R12 and the plan must add them. |
| 4 | Testable Acceptance Criteria | **PASS** | "≥6/8 produce 2-1 or 1-1-1" is mechanically verifiable. "All 4 agent files pass unit-level check" is delegable to `check-magi-structure.sh`. "recall@5 ≥ 60% on 5 hand-picked queries" is measurable. |
| 5 | Concrete Verification Steps | **PASS** | Each phase has explicit verification: `omp` boot check, grep audits, battery runs. The phase-as-commit pattern means each verification can be re-run by checking out the commit. |
| 6 | Pre-Mortem Quality | **PARTIAL PASS** | All 3 scenarios are concrete (not theatrical). PM1's mitigations are actually built into the plan (verification gate, blind-spot rotation, CASPER censor). PM2's mitigations are real engineering work (concept metadata, synonyms.json, recall@5 test). PM3's mitigation is verified (the grep audit is specified, the ordering rationale is post-hoc but the grep pass is real). **Gap**: pre-mortem omits the highest-risk scenario per Architect — silent sequential collapse of "parallel" `task` calls. This is PM4-shaped and missing. |
| 7 | Expanded Test Plan (4 levels) | **PASS** | Unit (frontmatter, sections, token budget, structure script), Integration (rule loading, skill discovery, agent dispatch, synthesizer template), E2E (8-question battery, factual gate test), Observability (per-MAGI transcripts, query log, run metadata). All 4 levels addressed with concrete artifacts. The check script `.omc/qa/check-magi-structure.sh` is specified by name, not by content — borderline hand-wave but acceptable. |

**Hard gate net: 5 PASS, 2 PARTIAL PASS.**

The 2 partial passes do not flip the verdict to REJECT because:
- Gate 3: missing risks are additive, not contradictory; plan's existing risk discipline is sound.
- Gate 6: pre-mortem covers 3 of the 4 highest-risk scenarios; the 4th is recoverable as an added scenario, not a structural failure.

---

## Soft Gates

| # | Gate | Status | Notes |
|---|------|--------|-------|
| 8 | Execution Specificity | **PASS** | File paths, line ranges, npm packages, frontmatter snippets, grep patterns all present. The plan reads like a runbook, not a strategy document. |
| 9 | Architect Concern Resolution | **FAIL → ITERATE** | Architect raised 12 edits, 6 architectural gaps, 4 principle violations, 3 tradeoff tensions. None have been incorporated. ITERATE bar is met by definition — the plan must address Architect concerns before APPROVE. |
| 10 | Internal Consistency | **PARTIAL PASS** | The plan's deletes (P1) followed by adds (P5) are consistent within plan logic, but P5.3's `tools/` recreation IS a self-contradiction with P1 task 1. The plan acknowledges this in option O5 footnote (line 82) but the rationalization is cosmetic — see Major Finding #1. |
| 11 | Spec Fidelity | **FAIL** | Plan P5.3 violates Non-Goal "deleting tools/ entirely" (spec line 49). See Critical Finding below. Additionally, plan does not address spec self-contradiction on narrative-fallacy-guard TTSR (see Major Finding #4). |
| 12 | ADR Stub Completeness | **PASS** | Stub at line 467 captures Status, Decision (TBD), Drivers, Alternatives, Why Chosen (TBD), Consequences (skeleton), Follow-ups (4 specific items). Will be fillable post-approval. |

**Soft gate net: 2 PASS, 1 PARTIAL PASS, 2 FAIL.** The 2 FAILs (Architect concerns + Spec Fidelity) drive the ITERATE verdict.

---

## Critical Findings (blocks execution)

### CF1 — Spec Non-Goal violation: tools/ recreation in P5.3

**Location:** Plan section O5 (line 82), section P5.3 (lines 410-414), section File Manifest (line 510).
**Evidence:**
- Spec line 49 (Non-Goals): `Making tools/ "do real work" (deleting tools/ entirely)`.
- Spec line 60 (Phase 1): `Delete `tools/` directory entirely`.
- Plan line 82: justification footnote rationalizes that "the principle is 'no useless tools,' not 'no tools at all'" — this is post-hoc reasoning that contradicts the literal spec text.
- Plan line 510: File Manifest lists `tools/incerto-search/index.ts` under NEW.

**Confidence:** HIGH.
**Why this matters:** The executor will face an ambiguity gate at P5.3. The dependency graph reads: P1 deletes `tools/`, P5.3 recreates it. A literal reading says "violation"; the footnote says "exception." Without an explicit decision, the executor must choose, and the choice will silently bake in a spec deviation that survives ADR write-up. Worse: this is the exact kind of "convenient leftover" Via Negativa principle (#1) is meant to prevent.

**Note on the deeper signal:** The knowledge system research report `20260505_030047_knowledge_system_research.md:58` itself says `Custom MCP tool in tools/incerto_search/index.ts, matching the existing pattern`. The research was written **before** the spec finalized "delete tools/ entirely." The spec made the decision; the plan tried to walk it back via footnote. **The plan is not entitled to do this unilaterally.**

**Fix (ranked):**
1. **Preferred:** Move executable to `.omc/incerto/scripts/search.ts`. Skill (`skills/incerto-search/SKILL.md`) instructs the agent to invoke via Bash with documented command pattern. Honors spec literally; the architect proposed this.
2. **Acceptable:** Move to a clearly non-`tools/` location like `lib/incerto-search/` or `bin/incerto-search.ts`. Add explicit ADR entry stating spec deviation and rationale.
3. **Reject (do not do this):** The current footnote rationalization. The footnote is not a decision; it's avoidance.

**Realist Check:** Severity is MAJOR-range, not theoretical-CRITICAL — the practical worst case is the executor stops to ask. But because this is the Spec Fidelity hard gate AND the rationalization itself is a tell that something is wrong, the finding earns CRITICAL severity. Mitigated by: trivial fix (move file path).

---

## Major Findings (causes significant rework)

### MF1 — Parallelism semantics unverified, no observability hook

**Location:** Plan P2.6 step 3 (line 286), O1 commitment to "parallel + rebuttal."
**Evidence:**
- WebFetch on `github.com/can1357/oh-my-pi`: confirmed `async.enabled: true` exists for "up to 100 concurrent jobs" with a `poll` tool, but **does not document parent emission semantics**.
- Plan line 286: `Wait for all 3 (oh-my-pi `async.enabled: true` + `task` tool semantics)`. This is the entire architectural argument. Two unverified words (`task` semantics).
- The Driver D1 (tension authenticity) requires Round 1 parallel — sequential collapses to anchoring. Stage 4 explicitly warns of the 38% domain-only score from sequential pipeline.

**Confidence:** HIGH (that this is unverified). MEDIUM (that it will fail) — the docs are silent, not negative.

**Why this matters:** If the LLM emits 3 `task` calls but the runtime serializes them, P2's E2E acceptance can pass (because the LLM-serialized 3 calls might still produce ≥6/8 disagreement on a single test run — disagreement isn't the same as parallelism), but the system will silently violate the "parallel" property under load or longer conversations. The fault is observability-free.

**Fix:** Adopt Architect's edit #2 verbatim — add an acceptance criterion that captures emission timestamps and asserts <2s spread on Round 1's three `task` calls. Additionally, add `r12` to the risk table (Architect's R12 is correct).

**Realist Check:** Worst case is a system that compiles and ships a degraded-tension MAGI for weeks before the user notices. Detection: silent until empirical disagreement rate is measured at week-2+. Mitigated by: the 8-question battery's empirical disagreement test catches this if the test is run after the rule is in place. Severity stays MAJOR; not CRITICAL because the battery test exists as a backstop.

### MF2 — Source research recommends vector retrieval; plan picks BM25 without acknowledging contradiction

**Location:** Plan section O3 (line 50-58), P5.2 (lines 402-407).
**Evidence:**
- `.omc/scientist/reports/20260505_030047_knowledge_system_research.md:18-26`: Top 7 architectures evaluated. **Wiki+Vector hybrid ranks #1 (5.80)**, **LanceDB+Transformers.js #2 (5.75)**. BM25 does not appear in the top 7.
- Same report line 30: `Recommended Architecture: Two-Layer Hybrid` — explicitly Vector + Wiki.
- Same report line 35: `@huggingface/transformers + Xenova/all-MiniLM-L6-v2 (ONNX, 384-dim) on CPU`. Resource cost: ~80MB model, <300ms total latency.
- Spec line 164: `Build BM25 index using `bm25` npm package`. Spec named the package; the spec made the call.
- Plan O3 alternatives table: lists BM25 variants A-D, but **does not list vector embedding** as an alternative.

**Confidence:** HIGH on the contradiction; MEDIUM on which choice is correct.

**Why this matters:** This is fundamentally an **architectural escalation** that the plan papers over. The spec was written referencing a 12KB BM25 package. The deeper research (also referenced by the spec) found vector retrieval superior on 5/5 weighted dimensions. Architect's Steelman point #3 captures this independently — Taleb's prose is dense in concept-without-keyword passages where lexical match fails.

The plan's O3 implicitly forecloses the vector option without listing it. This is the strawman pattern the Critic Hard Gate #2 (Fair Alternatives) is meant to catch — though I rated #2 as PASS earlier because each LISTED alternative was honestly evaluated. The dishonesty is in the omission.

**Fix (ranked):**
1. **Preferred:** Add a 5th alternative to O3 — `LanceDB + Transformers.js (Xenova/all-MiniLM-L6-v2, ONNX)`. Honestly evaluate it. Either choose it (and update P5.2-P5.3 accordingly), or document why BM25 wins despite the research's #1 ranking (e.g., "5.80 vs 5.75 is within scoring noise; D2 determinism / re-runnability tips us to BM25; risk borne by the user").
2. **Acceptable:** Keep BM25 but explicitly acknowledge the research-vs-spec tension in the ADR Consequences > Negative section. Document conditions under which we'd flip to vectors (e.g., "if recall@5 < 60% on Chinese queries, migrate to vector retrieval").
3. **Reject:** Silent omission. Currently happening.

**Realist Check:** Worst case is acceptable retrieval (BM25 works for keyword-rich queries; PM2 mitigations exist). The choice is reversible (~1-2 days to swap implementations). **Downgrade from CRITICAL to MAJOR** — the plan's choice is defensible given D2 and 12KB footprint, BUT the contradiction with the plan's own cited research must be acknowledged, not papered over.

### MF3 — Subagent skill access semantics unverified (Architect G1)

**Location:** Plan P5.4 (lines 422-424); intersects with skills/magi-tribunal/SKILL.md design.
**Evidence:**
- Architect verified via WebFetch that oh-my-pi docs do not document whether subagents spawned via `task` inherit access to parent's skills.
- Plan P5.4 mandates each MAGI subagent must invoke `incerto_search` before issuing verdict. If subagents don't have skill/tool access, P5.4 is non-functional.
- The plan's O5 chooses "skill + MCP tool" (option C) explicitly to teach the subagent how to invoke the tool — but the subagent has to *receive* the skill first.

**Confidence:** HIGH that this is unverified; MEDIUM on real failure probability.

**Why this matters:** The 4 prompt techniques (REASON, blind spots, S2A, CoT boundaries) are at agent-prompt level — they apply regardless of skill access. But the Incerto query mandate is the binding constraint that grounds MAGI verdicts in Taleb canon. If subagents can't query, the entire P5 effort produces an unwired feature.

**Fix:** Adopt Architect's edit #7. Add a smoke test BEFORE P5.4 begins: spawn a MAGI subagent in isolation, instruct it to invoke `skill://incerto-search`, observe whether the call succeeds. Document the result. If skill inheritance is broken, document the Bash-call fallback pattern. This is a 30-minute test that prevents days of wasted P5 work.

**Realist Check:** Real worst case is P5 ships, MAGI agents silently skip the Incerto mandate (model "tries" but tool isn't available), verdicts feel less grounded, user notices in week 2-3. Detection: slow; observability via `query-log.json` would catch zero-query MAGI subagents. Severity stays MAJOR.

### MF4 — Spec self-contradiction on narrative-fallacy-guard TTSR not adjudicated

**Location:** Plan does not address; spec lines 35, 63, 419.
**Evidence:**
- Spec line 35 (Constraints): `No TTSR for narrative fallacy (MAGI handles it)`.
- Spec line 63 (Phase 1 acceptance): `narrative fallacy detection moves to TTSR rule`.
- Spec line 419 (Round 14 decision): `Two new rules: magi-protocol.md (alwaysApply) + narrative-fallacy-guard.md (TTSR)`.
- Plan line 0-519: zero references to `narrative-fallacy-guard` or a TTSR rule for narrative fallacy. The plan silently chooses spec line 35's interpretation (no TTSR) without acknowledging the contradiction.

**Confidence:** HIGH on the spec contradiction; HIGH on the plan's silent choice.

**Why this matters:** The plan effectively makes a decision the spec failed to make. This may be the right decision — Round 14 likely got overwritten by later interview rounds — but the plan should explicitly say so. Otherwise the executor will read the spec, see "TTSR rule replaces narrative fallacy scanner" three times, and either implement an unspec'd TTSR rule or query for clarification.

**Fix:** Add to plan §1 (Principles) or §6 (P2 task list) an explicit one-line decision: "Spec contradicts itself on narrative-fallacy-guard TTSR (lines 35 vs 63 vs 419). Plan honors line 35 (`No TTSR for narrative fallacy; MAGI's MELCHIOR handles contextually`). Existing `rules/narrative-fallacy.md` (alwaysApply) remains; no new TTSR rule." This is a 2-line addition that closes the ambiguity gate.

**Realist Check:** Worst case is the executor stops to ask, costing one round-trip. Severity is MAJOR-low; could be downgraded to MINOR. Kept at MAJOR because it's a spec-fidelity issue and unaddressed spec contradictions are exactly the failure mode the deep-interview gate is meant to catch — letting one slip through past the Critic is a process failure even if the practical cost is low.

### MF5 — Synthesizer S2A as relabel rather than executable stage (Architect's #6)

**Location:** Plan P2.4 (lines 257-267); current `agents/magi-synthesizer.md:30-37`.
**Evidence:**
- Current synthesizer file already encodes the insight: line 37 says `两个 MAGI 都说"条件接受"但条件完全不同 → 实质 1-1-1` — this IS the S2A insight in one sentence.
- Plan P2.4 adds prose `Stage 1: For each MAGI verdict, extract optimization_dimension, substantive_verdict, condition_content. Discard surface wording, emotional tone, politeness hedges. Stage 2: Classify votes ONLY on extracted structure.`
- This prose adds nothing executable. The model already has the insight in one sentence; the longer prose without a literal extraction template (e.g., a JSON skeleton or labeled scratchpad) will likely be read as decorative.

**Confidence:** MEDIUM — model behavior under this prompt is empirical. Architect's diagnosis is sound but not falsified.

**Why this matters:** S2A is one of the four "mandatory" prompt techniques per spec. If the implementation lands as decorative prose, the spec's quality gate is met in name only. The cross-validation report and external-context research both prescribe the technique with structural intent.

**Fix:** Adopt Architect's edit #3 verbatim:
```
PRE-CLASSIFICATION (S2A Stage 1):
MELCHIOR  | dimension: ___ | verdict: ___ | conditions: ___
BALTHASAR | dimension: ___ | verdict: ___ | conditions: ___
CASPER    | dimension: ___ | verdict: ___ | conditions: ___
CLASSIFICATION (S2A Stage 2): based on dimension+verdict alignment, vote pattern is: ___
```
This makes the two-stage structure executable. The synthesizer must literally fill the table before issuing classification.

**Realist Check:** Worst case is silent quality degradation in vote classification — and 2-1 misclassified as 2-0 due to surface-level conditional matching. Detected via the 8-question battery's vote-pattern review. Severity MAJOR but downgrades to MINOR if Architect's edit #3 is adopted.

---

## Minor Findings (suboptimal but functional)

### mf1 — P3 cherry-pick "inherit MAGI labels" justification is vacuous
Plan O1 + P3 says P3 happens after P2 so cherry-picked files inherit new MAGI labels. Verified: cherry-pick targets (`rules/cognitive-state-diagnosis.md` and `skills/mental-models/SKILL.md`) contain **zero MAGI label references** (only benign domain prose mentions of `凸性`). The justification is theoretically right but practically vacuous; the real reason for ordering is just orthogonality. Fix: rewrite justification to say "P3 after P2 for orthogonality (cherry-picks have no functional dependency on P2; sequencing is for cognitive simplicity, not technical necessity)."

### mf2 — README.md modification spec is incomplete
Plan P1 task 7 lists 4 README modifications. Spot-checked: current README line 87-97 lists `/skeptic`, `/barbell`, `/via-negativa`, `/antifragile` as modes — confirmed present. Plan correctly identifies these as needing removal. **However**, README line 78-79 references `tools/` and `extensions/` paths in the directory tree — not enumerated in P1 task 7. Fix: amend P1 task 7 to also include directory-tree updates for `agents/`, `skills/`, `rules/` to reflect P2-P5 final state.

### mf3 — Crystallization concurrency risk overstated
Architect's G5 / edit #6 mandates `proper-lockfile` semantics for `query-log.json`. Single-user dormant project with one `omp` instance: concurrent writes are improbable. The use of `fs.appendFile` with default JSON-array append is sufficient if the script appends one entry per call (line-delimited JSON would be safer than a single JSON array — recommend `query-log.jsonl` instead). Not blocking; downgrade Architect's edit from MUST to OPTIONAL. Fix: switch from `query-log.json` (single array) to `query-log.jsonl` (one JSON object per line) — this makes append-mode atomic at the OS level.

### mf4 — Pandoc dependency not gated by feature detection
Plan P5.1 picks pandoc with epub2 fallback, but the ingest script doesn't specify how it detects pandoc availability (PATH lookup? Try-catch on `child_process.execSync('pandoc --version')`?). On the user's Windows-WSL environment, this matters. Fix: explicit feature-detection block at top of `ingest.ts` with a one-line user-facing message.

### mf5 — Token budget for `rules/magi-protocol.md` unspecified (Architect's #11)
Plan P2.6 prescribes the rule body but lacks a token budget. Other alwaysApply rules in the repo are 1-2KB. If `magi-protocol.md` balloons, it becomes a permanent system-prompt tax that fights D3 (token efficiency). Adopt Architect's edit #11: ≤1500 tokens, enforced by the same unit check as per-MAGI agents.

---

## What's Missing

Gaps the plan does not address:

- **No PM4 covering parallelism collapse.** Pre-mortem covers MAGI agreement (PM1), BM25 conceptual mismatch (PM2), cherry-pick stale references (PM3). The single highest-risk architectural unknown — sequential collapse of "parallel" `task` calls — has no PM scenario. Add PM4: "Six months later, MAGI Round 1 timestamps reveal serialized emission pattern; tension authenticity was 38% all along but the battery test was run when serialization was masked."
- **No bail-out protocol on partial MAGI failure (Architect G2).** What if 2 of 3 `task` calls return and the third errors? Synthesizer has no template. Add: "On <3 returned outputs, synthesizer emits `[MAGI partial]` template with degraded-mode warning; user sees the available outputs and a flag."
- **No retention policy on `.omc/qa/runs/` (Architect G4).** If MAGI fires every non-trivial response and each invocation produces 6 transcripts + metadata, a 50-turn conversation produces 300+ files. Specify: only battery runs persist; normal omp runs log only to `query-log.json`; rotation policy on `runs/` (e.g., keep last 10).
- **No max-iteration cap on P2 verification loop (Architect's #4 edit).** If 6/8 disagreement isn't reached on first run, plan loops back to P2.1-P2.5. No cap. Adopt Architect's bail-out: max 2 revision iterations, then ship at highest-achieved rate with `[P2-WARN]` commit prefix.
- **No graduated MAGI gate beyond binary trivial/non-trivial (Architect's #5 edit).** Plan P2.6 has 2 states (bypass / full MAGI). Real usage has a third class: "clarification or simple expansion request" (≤200 chars, no decision verbs) → MELCHIOR-only one-shot. Adopt this; it addresses the steelman's point 2 cost concern without abandoning "MAGI on every non-trivial."
- **No epub re-ingestion path (Architect G3).** If user updates the epub, what regenerates the index? Specify a `--rebuild` flag on `build-index.ts` or document the manual two-script re-run.
- **No `task` payload specification.** The plan says "fire 3 parallel `task` calls with ONLY the user's question" — but the executor needs to know the literal mechanism. Is the user's question passed as `task` description argument? Embedded in the subagent's frontmatter at runtime? Routed via the skill? This is a documentation gap; the executor will guess.
- **No backstop if vector-retrieval contradiction isn't resolved.** If MF2's fix #2 is chosen (keep BM25, document tension), the plan should specify the migration trigger (recall@5 < threshold for X consecutive runs → flip to vectors).

---

## Ambiguity Risks

Plan statements with multiple valid interpretations:

- `"surgical edits to existing files"` (Plan O2 Choice B, line 44) → Interpretation A: Edit tool one block at a time across multiple invocations / Interpretation B: Construct full new file content offline, single overwrite.
  - Risk if A: Architect's T1 hazard — partial conversion mid-P2 leaves system in inconsistent state.
  - Fix: Adopt Architect's T1 mitigation — write to scratch directory, atomic mv.

- `"trivial questions bypass MAGI"` (P2.6, line 290-291) → Interpretation A: Pre-classification gate is a hard switch (binary). / Interpretation B: A graduated mechanism the executor designs.
  - Risk if A: Steelman point 2 cost concern materializes; cost balloons. If B: executor over-designs.
  - Fix: Adopt Architect's edit #5 — explicit third state for clarification/expansion requests.

- `"crystallize at promotion time, not at ingest"` (O6, line 92) → Interpretation A: Crystallization is human-supervised (run script when user feels right). / Interpretation B: Hooks fire when threshold crosses.
  - Risk if A: User never runs it; wiki layer empty. If B: unwanted LLM calls during normal `omp` use.
  - Fix: Plan does say "manual trigger first" — make this stronger: "MUST be manual via `bun run scripts/crystallize.ts --since <iso>`; NEVER hook-triggered until empirical demand justifies."

---

## Multi-Perspective Notes

**Executor perspective:** The plan is largely actionable, but blocks on:
1. Where does `tools/incerto-search/` actually go? (CF1 unresolved)
2. How do I verify parallelism actually happens? (MF1 needs concrete timestamp test)
3. Can my MAGI subagents actually call `incerto_search`? (MF3 needs prerequisite smoke test)
4. The README "目录结构" tree — what's the final state? (mf2 needs amendment)

**Stakeholder perspective:** The plan delivers what the spec asked for in spirit (deletion-first, MAGI core, Incerto grounding), but Spec Fidelity is technically violated at P5.3 and never adjudicated at narrative-fallacy-guard. If the user audits the plan against the spec line-by-line, they will find at least these two deviations. Better to surface and decide than to ship and discover.

**Skeptic perspective:** Architect's Steelman antithesis points 2 and 3 (MAGI cost ~7 LLM calls per turn; BM25 wrong substrate) deserve plan responses, not just acknowledgment. The plan ends each phase with verification but offers no escape valve if a phase's empirical results are mediocre-but-not-failing (e.g., 5/8 disagreement: pass with warning? Re-iterate? Abandon?). The bail-out from Architect's edit #4 is essential.

---

## Architect Concerns Triaged

For each of the 12 Architect-proposed edits:

| # | Architect Edit | Triage | Notes |
|---|---|---|---|
| 1 | Move `tools/incerto-search/index.ts` → `.omc/incerto/scripts/search.ts` | **MUST FIX** | This is CF1. Plan cannot ship without resolving. |
| 2 | Add parallelism timestamp criterion to P2 acceptance | **MUST FIX** | This is MF1's mitigation. The single highest architectural unknown. |
| 3 | Specify S2A literal extraction template | **MUST FIX** | This is MF5's mitigation. Without this, S2A is decorative. |
| 4 | Bound verification loop (max 2 iterations) | **MUST FIX** | Without a cap, P2 has unbounded blast radius. The bail-out needs explicit `[P2-WARN]` commit prefix. |
| 5 | Add third gate state (MELCHIOR-only for clarification/expansion) | **SHOULD FIX** | Real cost mitigation; addresses Steelman point 2. Not blocking but high-value. |
| 6 | `proper-lockfile` semantics on `query-log.json` | **OPTIONAL** | Single-user dormant project; mf3 above suggests `query-log.jsonl` as simpler fix. Architect's edit is correct but heavy. |
| 7 | Smoke-test subagent skill access before P5.4 | **MUST FIX** | This is MF3's mitigation. 30-min test prevents days of wasted P5 work. |
| 8 | Specify retention on `.omc/qa/runs/` | **SHOULD FIX** | What's Missing #3 above. Quality issue, not blocking. |
| 9 | Add R11 (subagent skill access) | **MUST FIX** | Risk-table integrity. Pairs with edit #7. |
| 10 | Add R12 (sequential collapse) | **MUST FIX** | Risk-table integrity. Pairs with edit #2. |
| 11 | Token budget for `rules/magi-protocol.md` | **SHOULD FIX** | mf5 above. Cheap addition; high D3 leverage. |
| 12 | ADR Consequences > Negative addition | **SHOULD FIX** | Documentation hygiene; small but meaningful. |

**Architect was right on all 12.** None are rejected. The triage breakdown:
- MUST FIX: 6 (edits #1, #2, #3, #4, #7, #9, #10 — though #9 and #10 pair with #2 and #7 they merit explicit listing)
- SHOULD FIX: 4 (edits #5, #8, #11, #12)
- OPTIONAL: 1 (edit #6 — replaceable with simpler `.jsonl` switch)
- REJECT: 0

I add three Critic-original edits:

13. **Adjudicate spec self-contradiction on narrative-fallacy-guard TTSR.** Add to plan §1 or §6 a one-line decision. (MF4)
14. **Address vector-retrieval research contradiction.** Either expand O3 with the LanceDB+Transformers.js alternative or add ADR Consequences > Negative entry documenting the spec/research tension. (MF2)
15. **Add PM4 covering silent sequential collapse.** Pre-mortem must cover the highest-risk scenario, not just the second-tier ones. (Hard Gate 6 partial pass.)

---

## Specific Plan Edits Required

Numbered, surgical, in plan-section order:

1. **Plan O5 (line 82) and P5.3 (lines 410-414):** Move executable to `.omc/incerto/scripts/search.ts` (Architect's path). Skill (`skills/incerto-search/SKILL.md`) instructs the agent to invoke via Bash. Delete the "no useless tools, not no tools at all" footnote rationalization. Update File Manifest (line 510) accordingly.

2. **Plan P2 Acceptance Criteria (line 293-300):** Add criterion: "Parallelism verification — capture start timestamps on Round 1's 3 `task` calls during the first battery question via `query-log.json` or per-call metadata; confirm all 3 calls' start times fall within 2 seconds. If not, audit `async.enabled` configuration and `task` semantics before P2 ships."

3. **Plan P2.4 (lines 257-267):** Replace the prose S2A instruction with a literal extraction template the synthesizer fills before classifying votes:
   ```
   PRE-CLASSIFICATION (S2A Stage 1):
   MELCHIOR  | dimension: ___ | verdict: ___ | conditions: ___
   BALTHASAR | dimension: ___ | verdict: ___ | conditions: ___
   CASPER    | dimension: ___ | verdict: ___ | conditions: ___
   CLASSIFICATION (S2A Stage 2): based on dimension+verdict alignment, vote pattern is: ___
   ```

4. **Plan P2 Verification Step (line 301):** Add bail-out: "Max 2 revision iterations on prompt set. If ≥6/8 disagreement not reached after 2 iterations, ship at the highest achieved rate with explicit `[P2-WARN] disagreement: X/8` commit prefix; create `.omc/issues/p2-tension-shortfall.md` with the gap analysis."

5. **Plan P2.6 Pre-classification gate (line 291):** Add a third gate state: "Clarification or simple expansion request (≤200 chars AND no decision verbs like 'should I,' 'is it worth,' 'risk') → MELCHIOR-only one-shot, no synthesizer."

6. **Plan P5.4 (line 423):** Add prerequisite: "Before P5.4 begins, smoke-test subagent skill access. Spawn one MAGI subagent in isolation; instruct it to invoke `skill://incerto-search` (or the Bash fallback). If skill inheritance fails, document the Bash invocation pattern that subagents must use; route P5.4's mandate paragraph through that pattern."

7. **Plan §7 Risks (after R10):** Add R11 (subagent skill access unverified, severity HIGH, mitigation is edit #6 above). Add R12 (sequential collapse of parallel `task` calls, severity HIGH, mitigation is edit #2 above).

8. **Plan P2.6 (line 280):** Add token budget: "≤1500 tokens (rule is alwaysApply; permanent system-prompt tax)."

9. **Plan §1 (Principles) or §6 (P2 task list):** Add explicit one-line decision on the spec contradiction: "Spec self-contradicts on narrative-fallacy-guard TTSR (lines 35 vs 63 vs 419). Plan honors line 35: existing `rules/narrative-fallacy.md` (alwaysApply) remains; no new TTSR rule. MELCHIOR-1 handles narrative fallacy contextually within MAGI debate."

10. **Plan O3 (lines 50-58):** Add a 5th alternative — `LanceDB (@lancedb/lancedb) + Transformers.js (Xenova/all-MiniLM-L6-v2 ONNX, 384-dim)`. Honestly evaluate. Either choose it (and update P5.2-P5.3) or document why BM25 wins despite the knowledge research's #1 ranking. If BM25 retained, add to ADR Consequences > Negative: "BM25 chosen over research-recommended vector retrieval for D2 (determinism/re-runnability) and 12KB footprint; migration trigger: recall@5 < 60% on Chinese queries for 3 consecutive battery runs."

11. **Plan §4 (Pre-Mortem):** Add PM4 — "Six months later, MAGI Round 1 timestamps reveal serialized emission pattern. Tension authenticity was 38% all along; battery test masked it because all 3 calls completed within the test's 2-min window." Mitigation: edit #2's parallelism timestamp criterion + R12 above.

12. **Plan §3 ADR Stub Consequences > Negative (line 488):** Add: "Code is subordinate to thinking is bent in P5 to add real executable code (search.ts, ingest.ts, build-index.ts, crystallize.ts); justification is high D1 leverage. Code is bounded to `.omc/incerto/scripts/`."

13. **Plan §5 Observability (lines 156-162):** Specify retention: "Battery runs persist to `.omc/qa/runs/`; normal `omp` runs log only to `query-log.json` (or `.jsonl`). `runs/` rotation: keep last 10 directories, prune older."

14. **Plan P2.1-P2.3 (Surgical edit blocks):** Adopt Architect's T1 atomicity mitigation — write all 4 agent files to `.omc/scratch/agents/` first, then atomic `mv` into `agents/`. Preserves history AND mid-phase atomicity.

15. **Plan P5.5 (Crystallization, line 426-435):** Switch from `query-log.json` (single JSON array) to `query-log.jsonl` (line-delimited). Append-mode is atomic at the OS level. Eliminates need for `proper-lockfile` (Architect's edit #6).

16. **Plan P5.2 (line 402):** Specify pandoc feature detection at top of `ingest.ts` — explicit `try { execSync('pandoc --version') } catch { /* fallback to epub2 */ }` with a single user-facing log line.

17. **Plan P2.6 step 2 (line 285):** Specify the `task` payload mechanism — "Pass user question as the `task` tool's `description` argument verbatim; no preamble, no metadata. The MAGI subagent's frontmatter `name` and `description` already encode their identity."

These 17 edits are all surgical (no architectural rewrites) and address every MUST FIX from Architect's triage plus three Critic-original gaps. After application, the plan should be APPROVE-ready.

---

## Final Recommendation

**Verdict: ITERATE.**

The plan's spine — research-backed MAGI hybrid design, deletion-first sequencing, BM25/Incerto grounding, deliberate-mode pre-mortem + 4-level test plan — is sound. The executor handoff is blocked by:

1. **One hard-gate failure** (Spec Fidelity, CF1).
2. **Three architectural unknowns** (MF1 parallelism, MF3 subagent skills, MF2 retrieval substrate).
3. **One unaddressed spec self-contradiction** (MF4).
4. **One decorative-prose risk** (MF5 S2A as relabel).
5. **All 12 Architect concerns unaddressed**, of which 6 are MUST FIX.

After applying the 17 edits above, the plan should be APPROVE-ready. Estimated revision time: 1-2 hours of plan editing (no research re-runs needed).

**The user's 17 rounds of interview + 5 stages of research are not wasted by this ITERATE.** The findings are surgical, the fixes are concrete, and the underlying decisions hold. This is exactly the kind of pre-execution review that earns its keep — surfacing 3 architectural unknowns before the executor commits hours to discover them empirically.

If the user prefers a faster path: edits #1-#7 (the 7 MUST FIX items) are sufficient to flip to ACCEPT-WITH-RESERVATIONS. The remaining 10 are quality-of-life. Recommend the user choose between full 17-edit pass (target: APPROVE) or 7-edit minimum (target: ACCEPT-WITH-RESERVATIONS, ship faster).

---

## Verdict Justification

**Mode of operation:** Started in THOROUGH mode. Escalated to ADVERSARIAL after the first hard-gate failure (Spec Fidelity) was confirmed, with 4+ MAJOR findings emerging. ADVERSARIAL sweep added MF2 (vector-retrieval contradiction) and MF4 (spec self-contradiction) plus the missing PM4 — all genuine flaws not in the original Architect review.

**Realist Check recalibrations:**
- CF1 stayed at CRITICAL despite low practical worst case, because it's a Spec Fidelity hard-gate failure AND the plan's own footnote rationalization is a tell that the plan author knew it was suspect.
- MF2 (vector retrieval) downgraded from initial CRITICAL to MAJOR — the choice is defensible given D2 determinism, BM25 works for keyword-rich queries, and reversal is a 1-2 day swap. But the silent omission from O3 alternatives is a real Fair-Alternatives violation.
- MF4 stayed at MAJOR despite low practical cost, because letting an unadjudicated spec contradiction through past the Critic is a process failure even if the practical impact is one round-trip.

**Why ITERATE not REJECT:** The hard-gate failure is one Non-Goals violation that's trivially fixable (move file path). No fundamental direction reversal needed. No research finding contradicted. No principle invalidated. The 17 edits are all surgical.

**Why ITERATE not APPROVE:** Six of Architect's 12 concerns are MUST FIX. Three Critic-original findings (MF2, MF4, missing PM4) require decisions before execution. The plan currently passes 5/7 hard gates and 2/5 soft gates — short of APPROVE bar.

---

## Open Questions (unscored)

Speculative follow-ups and findings I could not verify with high confidence:

- **Q1:** Does the deepseek-v4-flash model (configured as `task` in `config.yml:5`) handle Chinese MAGI agent prompts as well as Anthropic Opus would? Plan assumes yes; no empirical test specified. Could affect tension authenticity if model can't anchor irreconcilable values in Chinese.
- **Q2:** The pre-classification gate in P2.6 — is "≤80 chars + greeting markers" empirically calibrated, or aspirational? Looks aspirational. Should be A/B-tested on real query corpus before fixing the threshold.
- **Q3:** The "75% projected disagreement" from Stage 4 is a simulation, not a measurement. The plan's ≥6/8 (75%) acceptance bar tracks the simulation. Could the bar be unrealistic? Plan acknowledges this in the steelman; bail-out edit (#4) handles it if so.
- **Q4:** Plan claims `bm25` npm package is 12KB, zero deps. I did not verify on npm; trust the spec's research. If the package has actually been deprecated or has security issues, swap is needed. Recommend a quick `npm view bm25` before P5.2 commits.
- **Q5:** The `incerto-5-book-bundle.epub:Zone.Identifier` file is a Windows ADS artifact that exists in the repo. Should also be in `.gitignore` (plan P1 task 9 only mentions the `.epub` itself; Zone.Identifier sidecar should be added too).

---

*Critic evaluation complete. Verdict ITERATE. 17 specific plan edits required. Plan can flip to APPROVE after edit application; estimated 1-2 hours.*
