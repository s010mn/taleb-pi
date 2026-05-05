---
name: magi-tribunal
description: Run the MAGI tribunal — three independent agents (Empirical Skeptic, Tail-Risk Guardian, Convexity Seeker) analyze the user's question in parallel, then file rebuttals; the synthesizer renders the structured verdict.
triggers:
  - /magi
  - magi tribunal
  - 三元裁判
  - 让三个 MAGI
---

# MAGI Tribunal Skill

## Mandatory execution rule

**When this skill is activated — whether via `/magi`, keyword trigger, or skill routing — always run the full 3-agent tribunal.** Do not skip, abbreviate, or replace it with a single-agent response — regardless of how simple, low-stakes, or reversible you judge the decision to be. The user chose to invoke the tribunal; honor that choice unconditionally. Do not substitute your own analysis for the tribunal, even if you believe you can produce equivalent output.

The only exception is a purely factual question with no decision component (see gate below).

**No pre-tribunal analysis.** Do NOT analyze, comment on, or pre-answer the user's question before running the tribunal. Go straight to Phase 1 after the factual gate. The orchestrator's opinion anchors the MAGI agents and defeats independence.

## When the tribunal is most valuable

These conditions describe when `/magi` produces the highest signal — they are NOT prerequisites:

- The user faces a high-stakes irreversible decision.
- The question spans multiple optimization dimensions (evidence quality + survival + opportunity).
- The user needs to see their own thinking blind spots, not just an answer.

## Pre-classification gate (factual question filter)

Before running the tribunal, check whether the question is purely factual with no value or decision component.

- "What is the capital of France?" — factual; answer directly, skip the tribunal.
- "What were Q3 revenue numbers?" — factual; skip.
- "Should I take this job?" — decision; run the tribunal.
- "买A还是B?" — decision (even if low-stakes); run the tribunal.

The tribunal is wasted on settled facts. But any question involving a choice, tradeoff, or preference is a decision — run it.

## Invocation

```
/magi [user's question or decision description]
```

## Execution flow — parallel + rebuttal

The tribunal runs in three phases. The architectural choice is parallel-then-rebuttal: each MAGI gets a clean read of the user's question first, and only then is exposed to the others. This produces independent evidence, then forces an explicit confrontation.

### Phase 1 — Independent parallel analysis

Fire MELCHIOR-1, BALTHASAR-2, and CASPER-3 simultaneously. Each agent sees **only the user's question**. No cross-contamination, no awareness of the other two MAGI's verdicts. Each produces its full Phase 1 verdict using its own output template.

This phase guarantees independent evidence. If the three converge here, convergence is real signal — not the artifact of one MAGI anchoring the others.

### Phase 2 — Rebuttal round

Each MAGI now receives the other two's Phase 1 verdicts. Each files a **one-paragraph rebuttal** that either:

- Names a specific reasoning failure in another MAGI's Phase 1 output, or
- Confirms its own Phase 1 position and explains why the other two's framing did not move it.

**Censor trigger.** If Phase 1 produced a 3-0 consensus, CASPER-3 is required to construct the strongest possible refutation in Phase 2. CASPER-3's censor duty exists to prevent unanimous-and-wrong outcomes — the most expensive failure the tribunal can produce. CASPER-3 may still confirm Phase 1 after the refutation attempt, but the attempt itself must appear in the output.

**Conditional deference.** If BALTHASAR-2 identified an absorbing-barrier scenario in Phase 1, CASPER-3 must defer unconditionally in Phase 2; convexity analysis fails when downside is irreversible.

### Phase 3 — Synthesis

The Synthesizer receives all six outputs (3 Phase 1 verdicts + 3 Phase 2 rebuttals) and:

1. Applies S2A two-stage filtering — extract optimization dimension, substantive verdict, and condition content from each output before counting votes.
2. Classifies the vote: 3-0 / 2-1 / 1-1-1.
3. Identifies the disagreement axis.
4. Extracts the action consensus.
5. Reframes the original question if the tribunal exposes a missing dimension.
6. Renders the matching template (see `agents/magi-synthesizer.md`).

### Phase 4 — Output

Final verdict rendered in the chosen template. Present the Synthesizer's output verbatim — do NOT add summaries, interpretations, or "一句话总结" after the verdict block. The user sees the tribunal's raw output, not the orchestrator's editorial.

## Task tool configuration (critical for structured output)

When spawning MAGI agents via the `task` tool, you **MUST** pass the `schema` parameter **in every phase** — Phase 1, Phase 2, AND Phase 3. Without it, agent output is lost (yield returns `{}`).

The `schema` parameter **MUST** be a JSON string (not an object).

**Phase 1 and Phase 2** (MELCHIOR-1, BALTHASAR-2, CASPER-3):
```json
{
  "agent": "task",
  "schema": "{\"properties\": {\"verdict\": {\"metadata\": {\"description\": \"Full MAGI analysis\"}, \"type\": \"string\"}}}",
  "tasks": [...]
}
```

**Phase 3** (Synthesizer) — do NOT omit schema here:
```json
{
  "agent": "task",
  "schema": "{\"properties\": {\"synthesis\": {\"metadata\": {\"description\": \"Full synthesizer verdict\"}, \"type\": \"string\"}}}",
  "tasks": [...]
}
```

Each task assignment **MUST** end with: "When done, call `yield` with your complete analysis in `result.data.verdict`" (or `result.data.synthesis` for the Synthesizer). Without this, agents write plain text and the yield call returns empty data.

## Anti-homogenization guarantees

The MAGI agents resist convergence through three mechanisms:

1. **Structural value conflict** — three irreconcilable optimization targets (FALSIFIABILITY / SURVIVAL / CONVEXITY).
2. **Pre-committed named blind spots** — each MAGI declares which dimensions belong to other MAGI nodes and tags `[OTHER MAGI dimension]` rather than encroaching.
3. **Censor duty + conditional deference** — CASPER-3 must attempt refutation on 3-0 outcomes and defer unconditionally on absorbing-barrier findings.

The system does not use temperature differences. Temperature differences add noise without adding reasoning.

## Subagent map

Spawn agents by name — do NOT read agent definition files manually. The `task` tool resolves named agents automatically via `discoverAgents()`.

| MAGI                        | Agent name              | Role                                |
|-----------------------------|-------------------------|-------------------------------------|
| MELCHIOR-1 (Empirical Skeptic)   | `skeptic`                 | Evidence audit + alternative hypotheses |
| BALTHASAR-2 (Tail-Risk Guardian) | `pre-mortem`              | Pre-mortem + via negativa               |
| CASPER-3 (Convexity Seeker)      | `antifragility-scout`     | Payoff curvature + barbell + censor     |
| Synthesizer                      | `magi-synthesizer`        | S2A filtering + structured verdict      |

## Output quality standards

- Each MAGI Phase 1 output must contain a `My blind spot triggered:` field naming one of its three pre-committed blind spots.
- Each MAGI Phase 2 rebuttal must be ≤1 paragraph and explicitly reference the other MAGI by name and dimension.
- Synthesizer output must contain `Action consensus:` (even if the value is "no consensus").
- Synthesizer output must contain `Reframed question:` whenever the tribunal exposes a missing dimension.
- In a 2-1 split, the dissenter's display weight equals the majority's — the dissent must not be compressed.
- In a 3-0 unanimous, the censor attempt by CASPER-3 must be summarized so the user can see the attempt was real.
