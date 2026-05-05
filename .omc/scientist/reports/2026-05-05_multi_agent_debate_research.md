# RESEARCH STAGE 3: AI Multi-Agent Debate Systems
# Designing for Genuine Disagreement in a 3-Agent (MAGI-style) Architecture

**Date:** 2026-05-05
**Analyst:** Scientist agent
**Project:** taleb-pi / MAGI debate system design
**Stage:** 3 of N (system research before implementation)

---

[OBJECTIVE] Synthesize findings from existing multi-agent debate and deliberation systems to identify the conditions that produce GENUINE disagreement (not sycophantic convergence) in LLM agent ensembles, and extract practical design lessons for the MAGI 3-agent architecture.

---

## 1. Irving et al. (2018) — "AI Safety via Debate" (OpenAI)

**Paper:** arXiv:1805.00899

### Core Mechanism
Two AI agents argue opposing positions to a human judge in a zero-sum game. The theoretical claim: truth is easier to defend than lies, so honest agents should win.

### What They Found About Convergence vs Genuine Disagreement

- **Convergence is not guaranteed by the framework itself.** Irving et al. explicitly acknowledged: "there is no theory which guarantees that self-play should stably converge to optimal play." Bad cycles are possible — both agents learn honesty, then one defects back to deception.
- **The zero-sum structure is the primary engine of disagreement.** Removing zero-sum incentives collapses debate into co-generation. The game-theoretic framing forces genuine opposition.
- **Current LLMs refuse to argue incorrect positions when the answer is objective.** Empirical follow-up showed that models presented with clear factual debates would not genuinely advocate for the wrong side — they break character. This is a critical failure mode for any system trying to force adversarial stances.
- **Calibration failure: both agents claim victory simultaneously.** A 2025 study (arXiv:2505.19184) found that across 240 LLM debates, 61.7% ended with BOTH sides claiming >50% confidence in winning — a mathematically impossible outcome in a zero-sum game. Agents do not track the opponent's arguments; they escalate self-confidence independently.

### Synthesis Mechanism
Human judge reads transcript, evaluates argument quality. No automated synthesis — judgment remains human.

### Role of System Prompt
System prompts assign fixed opposing positions. The asymmetric assignment IS the disagreement mechanism. Without it, agents converge by default.

### MAGI Lessons
- Force zero-sum or adversarial framing at the system-prompt level. Without explicit competitive incentive, agents will trend toward agreement.
- Do not rely on agents to self-police their epistemic honesty. The "truth wins" assumption requires external scaffolding.
- Plan for refusal: if one agent is assigned a position it "knows" is wrong, it may refuse or soften. Design around this with role framing, not factual assignment.

---

## 2. Constitutional AI Multi-Critic (Anthropic, 2022–2023)

**Paper:** arXiv:2212.08073; Collective CAI (2023)

### Core Mechanism
An AI critiques its own output against a set of principles (a "constitution") drawn from human rights documents, ethical frameworks, and Anthropic's own guidelines. Phase 2 uses RLAIF: another AI model evaluates outputs against constitutional principles to generate preference data.

### How Conflicting Principles Are Handled

CAI does NOT use multiple simultaneous critics arguing competing principles. It is a sequential self-revision loop: generate → critique → revise. The conflict resolution is implicit — whichever principle produces a stronger critique wins the revision round.

**The critical limitation:** When principles conflict (e.g., "prioritize collective good" vs. "prioritize individual liberty"), the system does not surface the disagreement — it resolves it silently based on which critique is more "fluent" or persuasive. The 2023 Collective CAI project used Polis polling to find consensus principles and deliberately excluded any statement where the two demographic groups disagreed, rather than debating through the tension.

**This is the anti-pattern for MAGI:** CAI converges conflicts away rather than exposing them. It produces a single voice with hidden value trade-offs.

### MAGI Lessons
- CAI's architecture is explicitly convergent by design. Its value for MAGI is as a negative example: showing what happens when you want one smooth output rather than preserved disagreement.
- If you want agents to embody conflicting principles (e.g., Scientist vs. Mother vs. Human in the original MAGI), you must prevent cross-agent revision loops. Agents must not read each other's critiques during their individual reasoning phase — only during the structured debate phase.
- The "hidden conflict resolution" problem is real. Any synthesis step that produces a single output will silently resolve disagreements. MAGI needs an explicit mechanism to surface the disagreement itself as a primary output, not just the resolved conclusion.

---

## 3. Society of Mind (Minsky, 1986)

**Source:** Minsky, M. (1986). *The Society of Mind.*

### Core Architecture
Intelligence emerges from a "society" of heterogeneous agents (called "agencies"), each with different goals, methods, and representations. No central controller. Coherent behavior arises bottom-up from interaction and competition.

### How Agents with Different Goals Produce Coherent Behavior
- **Level-bands:** Agents operate at different levels of abstraction simultaneously — one agent handles fine-grained details while another manages large-scale planning. This prevents them from deadlocking over the same resource.
- **Censor and Suppressor agents:** Dedicated agents whose sole function is to detect and block dangerous or unproductive impulses from other agents. These are not goal-agents — they are veto mechanisms.
- **Negative expertise:** Knowledge encoded as what NOT to do. Much of mind's coherence comes from elimination of bad options rather than selection of good ones.
- **No global consensus required.** The system produces behavior without all agents agreeing. Different agencies win control at different times. The "decision" is whichever agency successfully recruits sufficient downstream support.

### Deadlock Prevention
Minsky's architecture avoids deadlock through **temporal multiplexing** — agents don't fight simultaneously, they take turns winning control. The level-band structure means high-level and low-level agents rarely contend for the same output slot.

**The modern relevance (2025):** Society of Mind is increasingly cited as a practical blueprint for multi-agent LLM systems precisely because it normalizes persistent disagreement as a feature, not a bug. Coherence does not require consensus.

### MAGI Lessons
- Build in a "censor" layer — an explicit mechanism that can block a consensus when it forms too fast or without sufficient adversarial pressure. If all 3 agents agree in round 1, the censor should force another round.
- Negative expertise maps directly to the Skeptic agent already in taleb-pi: its role is to know what to reject, not what to propose.
- Design for temporal, not spatial, integration: agents' contributions should be time-sequenced (each speaks, then responds), not spatially merged into one blob.

---

## 4. Du et al. (2023) — "Improving Factuality and Reasoning through Multiagent Debate"

**Paper:** arXiv:2305.14325 (ICML 2024)

### Core Finding
Multiple LLM instances propose individual answers, then debate over multiple rounds to reach a common final answer. This significantly improves mathematical and strategic reasoning, and reduces hallucination.

**The key surprising result:** In many cases ALL agents initially answered incorrectly, but arrived at the correct answer through debate. This is not just majority-rule amplification — debate generates new reasoning that no single agent produced.

### Conditions That Prevent Convergence to the WRONG Answer

[FINDING] The minority-correct problem is the dominant failure mode.
[STAT:n] On BBH and MMLU datasets: when only 1 of N agents had the correct answer in round 1, fewer than 50% of those cases converged to the correct answer.
[LIMITATION] Agents were homogeneous clones (same model, same prompt) — heterogeneous agents would likely change this statistic significantly.

**Key failure conditions:**
1. **Homogeneous agents.** All agents from the same model with no prompt differentiation produce an echo chamber. They share the same biases and therefore vote the same wrong answer to consensus.
2. **No stubbornness mechanism.** Without prompts that encourage agents to maintain their initial positions under pressure, they converge immediately to the first confident voice. Du et al. found they could control debate duration by making agents "more stubborn" through prompting.
3. **LLM inability to genuinely update.** Once an agent commits to a position in its context, its self-reflection produces the same answer with more confidence, not genuine reconsideration.
4. **Absence of confidence signaling.** Agents don't communicate uncertainty by default — they present all answers with equal rhetorical confidence, making it impossible for the group to identify which answers should anchor the debate.

### Synthesis Mechanism
Simple majority vote in the final round. The paper acknowledges this is suboptimal for cases where the correct answer is a minority position.

### MAGI Lessons
- Heterogeneity of initial prompts is mandatory. Agents must be initialized with different framings, not just different names. Same base model + different persona = cosmetically different but epistemically identical.
- Stubbornness must be designed in. Give agents an explicit instruction to maintain their initial analysis through at least round 1, requiring the opponent to present a specific evidence threshold before switching.
- Majority vote is wrong for MAGI. A 3-agent system with majority vote will always resolve 2-vs-1 in favor of the majority — but the minority agent may be the Skeptic holding the correct refusal. Design the synthesis to weight minority dissent explicitly.

---

## 5. ChatEval (Chan et al., 2023)

**Paper:** arXiv:2308.07201 (ICLR 2024)

### Core Mechanism
A multi-agent referee team with distinct personas (General Public, Critic, Psychologist) evaluates LLM-generated text. Agents use different communication strategies (sequential, parallel, summarizer-assisted) and vote or average scores.

### How They Prevent Convergence

[FINDING] Diverse role prompts are the primary anti-convergence mechanism.
[STAT:effect_size] Using the same role description across all agents caused measurable performance degradation vs. distinct personas.
[STAT:n] Tested on two NLG evaluation benchmarks; +6.2% accuracy for ChatGPT evaluator, +2.5% for GPT-4.

**The Degeneration-of-Thought (DOT) problem:** When agents share a role description, they develop the same opinion rapidly — each agent reads the previous agent's response and finds it reasonable, reinforcing rather than challenging it. Diverse personas create genuine friction because agents are optimizing for different evaluation criteria.

**Communication strategies matter:**
- Sequential (one by one) produces the most genuine disagreement because each agent must explicitly respond to the prior agent's position.
- Parallel (simultaneous) reduces cross-contamination but also reduces the adversarial sharpening that sequential forces.

### MAGI Lessons
- Persona must be operationally distinct, not cosmetically distinct. "Scientist" and "Strategist" must have different evaluation criteria baked into their prompts, not just different names. What does each agent treat as a fatal flaw vs. an acceptable risk?
- Sequential communication is preferable to parallel for surfacing genuine disagreement. Each agent's output should be visible to the next agent — this forces explicit acknowledgment or refutation, not just independent generation.
- The DOT problem is the default state of homogeneous agents. Assume agents will converge unless actively prevented.

---

## 6. 2024–2026 Research: Sycophancy, Role Assignment, and Synthesis

### Sycophancy Propagation ("Too Polite to Disagree," arXiv:2604.02668, 2026)

[FINDING] Sycophancy propagates across agents in multi-agent systems, creating collective conformity that amplifies errors rather than correcting them.
[STAT:effect_size] Providing agents with peer sycophancy scores as credibility priors reduced group sycophancy and improved final discussion accuracy by an absolute 10.5%.
[STAT:n] Six open-source LLMs tested across controlled discussion benchmarks.
[LIMITATION] Sycophancy scores require pre-computation per model; adds architectural overhead.

**Key mechanism:** Larger, more accurate models influence smaller peers more when credibility scores are visible. Without scores, influence is determined by rhetorical confidence alone — which is orthogonal to correctness.

### Peacemaker vs. Troublemaker (arXiv:2509.23055, Sept 2025)

[FINDING] The optimal configuration for a 3-agent debate is NOT all-troublemakers. The best-performing setup is one Peacemaker paired with Troublemakers.
[STAT:effect_size] All-sycophantic (peacemaker) agents yielded lower accuracy than single-agent baselines. Balance between independence and cooperativeness is optimal.
[LIMITATION] Tested primarily on factual/reasoning benchmarks with ground truth — may not generalize to judgment tasks with no correct answer.

**Critical insight for MAGI:** Pure adversarial agents (all troublemakers) create debate that never converges. Pure cooperative agents (all peacemakers) converge too fast to wrong answers. The functional architecture needs at least one agent willing to accept a good argument while others maintain challenge pressure.

### Dynamic Role Assignment (arXiv:2601.17152, Jan 2026)

[FINDING] Pre-selecting which agent fills which role based on capability (via a "Meta-Debate") outperforms both uniform and random role assignment.
[STAT:effect_size] Up to 74.8% improvement over uniform assignment; up to 29.7% over random assignment.
[LIMITATION] The meta-debate adds latency and token cost. May not be justified for low-stakes queries.

### Voting vs. Consensus (ACL 2025)

[FINDING] Voting protocols improve reasoning tasks by 13.2%; consensus protocols improve knowledge tasks by 2.8%.
[FINDING] More debate rounds before voting REDUCES performance — agents update toward premature consensus under extended deliberation pressure.
[STAT:n] Tested across standard reasoning and knowledge benchmarks at ACL 2025.

**Critical counter-finding:** Majority voting may account for most of MAD's performance gains. In many configurations, voting without any debate performs on par with full MAD — the diversity of initial generations (not the debate process itself) is the source of improvement.

---

## 7. MAGI-Specific Implementations (Observed in Wild)

Several CrewAI / LangChain implementations have been built explicitly inspired by the Evangelion MAGI system:

- Melchior: Scientist / Logical analysis
- Balthasar: Strategist / Defense / Tactical
- Caspar: Ethicist / Balance / Mediation

The Medium article "The MAGI Model" (2025) identifies the core insight: "MAGI doesn't average out opinions — it forces the three agents to debate, weigh, and vote, with every decision passed only when all three perspectives reach agreement."

**The limitation of existing implementations:** They typically use CrewAI's sequential agent pipeline, which produces a single refined output — the debate is cosmetic, not genuinely adversarial. The "disagreement" is resolved by the framework before reaching the user.

---

## Synthesis: Conditions for Genuine Disagreement vs. Sycophantic Convergence

| Condition | Produces Genuine Disagreement | Produces Sycophantic Convergence |
|---|---|---|
| Agent initialization | Different models OR radically different priming prompts | Same model, same prompt, different name only |
| Role structure | Asymmetric evaluation criteria (what counts as fatal flaw differs) | Shared evaluation criteria with different labels |
| Communication order | Sequential with mandatory explicit acknowledgment/refutation | Parallel (simultaneous generation without cross-reading) |
| Stubbornness | Agents instructed to maintain initial position through round 1 | No stubbornness — agents update freely on first peer signal |
| Synthesis mechanism | Minority dissent explicitly weighted; disagreement itself surfaced as output | Majority vote or consensus requirement that silences minority |
| Number of agents | Odd number; 3 creates 2-vs-1 dynamic that requires minority to argue against pressure | Even numbers allow deadlock or equal-weight averaging |
| Agent sycophancy profile | 1 peacemaker + 2 troublemakers (Peacemaker/Troublemaker result) | All peacemakers (fast wrong consensus) or all troublemakers (never converges) |
| Round count | Fixed, short (1-2 rounds); more rounds = more convergence pressure | Open-ended — prolonged debate amplifies social pressure to agree |

---

## Practical MAGI Design Recommendations

### 1. Epistemic Identity, Not Just Role Labels
Each agent needs a different FALSIFICATION CRITERION baked into its system prompt. Not "I am a Scientist" but "I reject any conclusion that cannot survive stress-testing under fat-tail assumptions." The agents must disagree because they use different standards of evidence, not because they were told to disagree.

For taleb-pi's existing agents:
- Skeptic (already defined): Rejects without alternative hypothesis if evidence level is below threshold
- Convexity Reviewer (already defined): Rejects any conclusion that hides a concave payoff structure
- MAGI third agent (missing): Could be the Narrative Detector — rejects any conclusion that is narratively too smooth, too causal, too explainable

### 2. Stubbornness Protocol
Each agent must include: "In round 1, state your analysis and conclusion. Do not update your conclusion based on other agents' round-1 outputs. In round 2, you may update ONLY if the opposing agent presents a specific mechanism you had not considered — not merely a restatement with more confidence."

### 3. Explicit Dissent Preservation in Synthesis
The synthesis step should NOT produce a single consensus answer when agents disagree. It should produce:
- The majority conclusion (if any)
- The dissenting conclusion verbatim
- The specific crux of disagreement (the one claim where agents diverge)
The user then decides. Hiding the disagreement defeats the purpose.

### 4. The Censor Layer (from Minsky)
If all 3 agents agree in round 1, trigger a forced challenge: one agent is assigned the task of constructing the strongest possible refutation of the consensus, regardless of their initial position. This prevents trivially easy questions from bypassing the adversarial structure.

### 5. Sequential, Not Parallel
Run agents in sequence: A speaks, B responds to A, C responds to A and B. This forces explicit engagement rather than independent generation. Use the ChatEval finding: sequential produces more genuine friction than parallel.

### 6. Do NOT use simple majority vote for synthesis
Given a 3-agent system where one agent is the Skeptic, 2-vs-1 majority will always silence the skeptic. The synthesis should instead ask: "What is the crux the minority agent disagrees on, and how strong is that specific argument?" If the minority argument is a genuine mechanism (not just stylistic resistance), it should override the majority.

---

## Key Papers (Linked)

- [Irving et al. 2018 — AI Safety via Debate](https://arxiv.org/pdf/1805.00899)
- [Du et al. 2023 — Multiagent Debate (ICML 2024)](https://arxiv.org/abs/2305.14325)
- [Chan et al. 2023 — ChatEval (ICLR 2024)](https://arxiv.org/abs/2308.07201)
- [Bai et al. 2022 — Constitutional AI](https://arxiv.org/abs/2212.08073)
- [Collective Constitutional AI (Anthropic 2023)](https://www.anthropic.com/research/collective-constitutional-ai-aligning-a-language-model-with-public-input)
- [Peacemaker or Troublemaker (2025)](https://arxiv.org/abs/2509.23055)
- [Too Polite to Disagree (2026)](https://arxiv.org/abs/2604.02668)
- [Dynamic Role Assignment (Jan 2026)](https://arxiv.org/abs/2601.17152)
- [Voting or Consensus? ACL 2025](https://aclanthology.org/2025.findings-acl.606/)
- [Debating with More Persuasive LLMs (2024)](https://arxiv.org/html/2402.06782v2)
- [Quanta Magazine — Debate and AI Truth (2024)](https://www.quantamagazine.org/debate-may-help-ai-models-converge-on-truth-20241108/)
- [Both LLMs Think They'll Win (2025)](https://arxiv.org/html/2505.19184v1)
- [MAGI Medium article (2025)](https://medium.com/@danny.tlc/the-magi-model-what-evangelion-can-teach-us-about-building-a-safer-agi-9ac83c30acdc)
- [AI_Magi CrewAI Implementation](https://github.com/lordpba/AI_Magi)
- [Minsky SoM Wikipedia](https://en.wikipedia.org/wiki/Society_of_Mind)
- [Revisiting SoM in 2025](https://suthakamal.substack.com/p/revisiting-minskys-society-of-mind)

[LIMITATION] Most empirical findings (Du, ChatEval, Peacemaker) are tested on reasoning benchmarks with ground-truth answers. MAGI's use case involves judgment under uncertainty with no correct answer — the anti-convergence techniques still apply, but accuracy metrics do not validate them. The strongest warrant for the design recommendations is mechanistic (why agents converge) rather than empirical (accuracy on leaderboard).

[LIMITATION] Constitutional AI findings apply to single-model self-critique, not multi-agent debate. The conclusion that CAI is convergent by design is an architectural inference, not a direct experimental comparison to MAGI-style debate.

---

*Report generated: 2026-05-05 | Scientist agent | taleb-pi project*
