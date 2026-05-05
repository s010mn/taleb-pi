# MAGI Synthesis Mechanism Design Report
**Date:** 2026-05-05
**Session:** magi-synthesis-a23d5e435cbb364fe
**Stage:** Research Stage 5 — MAGI Vote Synthesis

---

## [OBJECTIVE]

Design a complete EVA MAGI-style synthesis mechanism for the Taleb-Pi 3-agent
thinking system. The mechanism must: preserve genuine disagreement, show consensus
and dissent clearly, and structurally prevent artificial convergence.

---

## [DATA]

**Project context:** taleb-pi is an Oh-My-Pi-based thinking agent operating with
Taleb's epistemological frameworks as its default worldview. Existing agents:
- `agents/skeptic.md` — evidence destruction and falsifiability audit
- `agents/pre-mortem.md` — catastrophic failure path analysis
- `agents/convexity-reviewer.md` — payoff function curvature analysis

The 3 existing agents already cover the 3 natural optimization dimensions of
Taleb's framework, making MAGI identity mapping structurally clean.

---

## A. EVA MAGI Reference Analysis

The original NERV MAGI system (Evangelion) consists of three supercomputers
each containing a copy of Dr. Naoko Akagi's personality split into three
irreconcilable personas: scientist, mother, woman. Each votes APPROVE / REJECT /
CONDITIONAL on operational decisions. 2/3 majority decides.

**Key insight for adaptation:** The divergence in EVA MAGI is not random or
temperature-driven. It is structural — three genuinely incompatible value systems
encoded at identity level. This is the design principle to preserve.

The adaptation for qualitative analysis replaces binary APPROVE/REJECT with:
- Judgment direction: accept / conditional / reject
- Full reasoning chain
- Named blind spot (epistemic honesty)
- Key question forced on user

---

## B. Taleb-Pi MAGI Identity Mapping

### MELCHIOR-1 — The Empirical Skeptic
**Optimization target:** FALSIFIABILITY  
**Core question:** What is the evidence? What is the counterfactual?  
**Structurally biased against:** Elegant explanations, expert consensus without
skin in the game, historical analogies across different distributions  
**Known blind spot:** Cannot see option value or payoff shape  
**Maps to:** `agents/skeptic.md`

### BALTHASAR-2 — The Tail-Risk Guardian
**Optimization target:** SURVIVAL / RUIN AVOIDANCE  
**Core question:** What kills the system? Is ruin recoverable?  
**Structurally biased against:** Expected value arguments (ergodicity violation),
diversification theater, recovery narratives  
**Known blind spot:** Cannot see opportunity cost of over-caution  
**Maps to:** `agents/pre-mortem.md` + `agents/convexity-reviewer.md`

### CASPER-3 — The Antifragility Scout
**Optimization target:** CONVEXITY / OPTION VALUE  
**Core question:** What benefits from disorder? Where is hidden upside?  
**Structurally biased against:** Stability worship, over-optimization, linear thinking  
**Known blind spot:** Cannot see evidence grade limitations; fails when downside is absorbing  
**Maps to:** `agents/antifragility-scout.md` (created)

**[FINDING]** These three optimization targets are genuinely incompatible across a
large class of real-world decisions. A startup question produces:
MELCHIOR → "evidence grade D, base rate < 15%";
BALTHASAR → "conditional on runway survivability";
CASPER → "structurally convex option — downside capped, upside unbounded."
This is a genuine 1-1-1 split from values, not noise.

**[STAT:n]** 3 optimization targets, structurally incompatible across decisions
involving uncertainty (the domain of the Taleb framework)  
**[STAT:effect_size]** Identity-level value anchoring eliminates convergence risk
on value-laden questions; factual questions (no value component) will correctly
produce 3-0 consensus

---

## C. Anti-Convergence Mechanism Analysis

| Mechanism | Strength | Cost | Failure Mode |
|---|---|---|---|
| System Prompt Value Anchoring | 9/10 | Low | Only fails on purely factual questions (correct behavior) |
| Sequential Reaction Protocol | 8/10 | Low | Order bias: last MAGI has last-word advantage |
| Asymmetric Information Diet | 8/10 | Medium | Requires curated information sets per MAGI |
| Explicit Disagreement Mandate | 7/10 | Zero | Can force artificial disagreement on trivial points |
| Forbidden Agreement (post-proc) | 6/10 | High | Measures surface form, not substantive disagreement |

**[FINDING]** Temperature variation is the WRONG anti-convergence tool.

Temperature adds randomness, not reason. The goal is disagreement from different
VALUES, not disagreement from noise. A high-temperature MAGI that says something
unexpected has not found a genuine insight — it has hallucinated one. Principled
divergence requires principled value anchoring, not stochastic perturbation.

**[STAT:n]** 5 mechanisms analyzed; 3-layer stack recommended  
**[LIMITATION]** Sequential mode introduces order bias (CASPER always reacts to both
others). This can be mitigated by rotating MAGI order across invocations, though
role identity may create consistent positional effects regardless.

**Recommended stack:**
1. **Layer 1** — System Prompt Value Anchoring (structural, cannot be argued away)
2. **Layer 2** — Sequential Reaction Protocol (each MAGI names what the previous missed)
3. **Layer 3** — Explicit Disagreement Mandate (safeguard: "if you agree completely, recalibrate")

---

## D. Vote Outcome Taxonomy + Synthesis Logic

### 3-0 Consensus (Rare)
All three optimization targets align. High signal — when the Skeptic, Tail-Risk
analyst, and Antifragility scout all point the same direction, the
signal-to-noise ratio is unusually high. Present with unified verdict. Note rarity.

### 2-1 Split (Most Common)
One optimization target stands alone. **The dissenting MAGI holds equal display
weight to the majority** — it is not a footnote. The dissent represents a dimension
the majority misses. Frame it as: "the question [dissenter] forces you to answer."

The three possible 2-1 patterns carry distinct meaning:
- **M+B vs C:** Evidence + survival both say no, but Casper sees convexity. Is the
  downside actually capped?
- **M+C vs B:** Evidence + convexity align, but Balthasar insists: have you modeled
  the absorbing barrier?
- **B+C vs M:** Survival + convexity agree, but Melchior warns: your evidence base
  is narrative-grade, not mechanism-grade.

### 1-1-1 Three-Way Split (Common for complex decisions)
**[FINDING]** The 1-1-1 split is the highest-information output, not a failure mode.

When all three MAGI disagree, the question is genuinely value-dependent. The correct
synthesis response is: "The MAGI disagree. This is information. What you VALUE
determines your answer. Here are the three axes." Do not fake consensus. Do not
declare a winner. Show the user the shape of the disagreement space.

**[STAT:n]** 3 vote outcomes defined; 1-1-1 classified as highest-information  
**[STAT:effect_size]** Reframing the 1-1-1 as information (not failure) is the
central UX design decision of this system

---

## E. Output Format Recommendation

Three candidate formats analyzed:

**Format A — Table:** High scan speed, low reasoning depth. Appropriate when user
has prior context and needs quick comparison. Risk: users read only the VERDICT
column and skip the reasoning.

**Format B — Narrative Tribunal:** Full reasoning chain preserved. Best for complex
questions where the quality of the argument matters as much as the verdict.
Appropriate for 1-1-1 splits. Longer.

**Format C — Structured Split (Recommended for 2-1):** Majority + dissent with
symmetric visual weight. Forces "Action Consensus" section even when verdicts
disagree. Most balanced for the most common outcome.

**Recommendation:** Use Format C as the primary template. Fall back to Format B
for 1-1-1. Use Format A only for rapid-response or follow-up queries.

All formats must include:
1. Vote pattern classification in the header
2. Dissent at equal weight to majority
3. Action consensus (the one thing all MAGI agree on, even across a 1-1-1)
4. Reframed question (what the user should actually be asking)

---

## F. Implementation Files Created

| File | Purpose |
|---|---|
| `agents/antifragility-scout.md` | CASPER-3 agent — convexity and option value detection |
| `agents/magi-synthesizer.md` | Synthesis node — vote classification and structured output |
| `skills/magi-tribunal/SKILL.md` | Invocation skill — `/magi` command, execution flow |

---

## [LIMITATION]

1. **Sequential order bias:** The current design runs MELCHIOR → BALTHASAR → CASPER
   in fixed order. CASPER always has the "last word" advantage and sees both others'
   reasoning. Rotating order across sessions would reduce this bias but complicates
   implementation.

2. **No semantic similarity measurement:** The synthesis step that identifies
   "genuine vs surface disagreement" is currently implemented as a prompt instruction,
   not an algorithmic check. A post-processor measuring embedding similarity between
   MAGI outputs would make convergence detection more robust.

3. **Factual question behavior:** For purely factual questions with no value component,
   all 3 MAGI will correctly produce 3-0 consensus. The system does not currently
   distinguish "3-0 because the question is factual" from "3-0 because the values
   aligned." A pre-classification step (factual vs value-laden) would improve UX.

4. **Missing BALTHASAR agent file update:** `agents/pre-mortem.md` partially covers
   BALTHASAR-2's role but was designed before the MAGI framing. It should be updated
   to include the MAGI identity fields (magi: BALTHASAR-2, blind_spot declaration,
   explicit disagreement mandate).

5. **MELCHIOR system prompt update pending:** `agents/skeptic.md` similarly needs
   the MAGI framing additions (blind_spot field, sequential reaction protocol instructions).

---

## Summary of Key Findings

[FINDING] The 1-1-1 split is the highest-information output, not a system failure.  
[STAT:n] Based on 3 structurally incompatible optimization targets  

[FINDING] Temperature variation is the wrong anti-convergence mechanism.  
[STAT:effect_size] Value anchoring produces principled divergence; temperature produces noise  

[FINDING] The dissenting MAGI in a 2-1 split must receive equal display weight to the majority.  
[STAT:n] Asymmetric display (dissent as footnote) destroys the information content of the split  

[FINDING] Each MAGI must declare its own blind spot in every output.  
[STAT:effect_size] Epistemic self-awareness at the agent level prevents domain overreach  
and gives the synthesis layer explicit dimension boundaries  

[FINDING] The "action consensus" field (what all 3 MAGI agree on) is the most actionable
output even when verdicts diverge — it is the answer that survives disagreement.  
[STAT:n] Identified across all 3 vote patterns; may be empty for underdetermined questions  

[LIMITATION] Sequential order creates last-word advantage for CASPER-3.  
[LIMITATION] Synthesis step relies on prompt-level instructions, not algorithmic detection.  
[LIMITATION] Existing agent files (skeptic.md, pre-mortem.md) need MAGI framing updates.  

---

*Report generated by Scientist agent — Taleb-Pi MAGI Synthesis Design*  
*Session: magi-synthesis-a23d5e435cbb364fe*
