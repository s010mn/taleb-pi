# D2 Validation: Default Mode vs /magi Tribunal

## Method
- 3 questions: Q-A (decision), Q-B (factual), Q-C (ethical)
- 2 modes per question: default + /magi
- Model: deepseek-v4-flash
- 6 omp calls total, run in parallel

---

## Per-Question Comparisons

### Q-A: Should I take a job offer paying 30% more at a less stable startup, when I have 4 months of savings?

**Default mode** (tokens: 38,288, duration: 12,273 ms)

> **Diagnosis:** GT2/GT3 — you're running a mental spreadsheet (expected value: 30% upside × some probability) while ignoring that you're one volatility event from ruin. The "4 months savings" is the Turkey's calendar counting.
>
> You're framing this as a probability question. It isn't. It's an exposure question.
>
> - Upside: +30% salary for as long as it lasts. That's capped. Even if the startup moons, salary is linear — you don't get 10× salary.
> - Downside: startup fails in month 5. You have 4 months savings. You're now negative, interviewing from weakness, with a 4-month tenure on your resume...
>
> You have **negative convexity**: bounded upside, unbounded downside (relative to your buffer).
>
> **The 30% premium is not a risk premium. It's a fragility premium paid in advance — you collect it now, you pay the volatility later.**
>
> **Via negativa:** what do you gain by turning it down? You keep your buffer intact. You avoid a short-tenure resume signal. You preserve the ability to interview from strength...
>
> **Ergodicity check:** ensemble average doesn't apply. Across 100 people who take this deal, some win. You don't get 100 lives — you get one time series. Going bust once ends the game...

**MAGI mode** (tokens: 51,983, duration: 13,514 ms)

> ━━━ MAGI VERDICT [2-1 split] ━━━━━━━━━━━━━━━━━━━━━━━━━
>
> **Majority position (MELCHIOR-1 + BALTHASAR-2): REJECT**
>
> Core: The 30% cash premium is market-clearing compensation for instability — the startup pays more because it *cannot* offer stability, not as a net wealth transfer. At 4 months of savings, the risk of financial insolvency before finding the next role is an absorbing barrier.
>
> **Minority dissent (CASPER-3): ACCEPT-WITH-CONVEX-RESTRUCTURE**
>
> Payoff is convex — capped downside (you can leave) against unbounded upside (career acceleration, network densification, optionality for future equity events). But even CASPER-3 concedes: **4 months of savings is fragile** and makes the restructure a hard prerequisite.
>
> **Action consensus:** → 4 months of savings is insufficient buffer for this risk profile. Financial runway must be extended before this bet is viable.
>
> **Reframed question:** → Can I restructure this deal — negotiate a guaranteed 6-month severance and extend my runway to 10+ months — such that the absorbing barrier is removed?

**Observations:**

- Default mode invoked Taleb framing extensively and naturally: "negative convexity," "via negativa," "ergodicity check," "Turkey's calendar," "fragility premium," and a barbell discussion all appeared unprompted. The framing quality is high.
- MAGI added structural value in one concrete way: it surfaced CASPER-3's minority dissent (convex career upside) that default mode dismissed outright. Default concluded "reject"; MAGI exposed a conditional accept path and reframed the question as premature rather than binary.
- Both modes converged on the same action anchor (runway extension / severance guarantee), but MAGI's three-way vote made the conditional door explicit rather than buried in prose.
- Token cost: 38,288 default vs 51,983 MAGI — a 1.36× multiplier for a decision question where the dissent added genuine signal. Moderate overhead for real structural uplift.
- For this question type (high-stakes personal decision with asymmetric risk), MAGI's tribunal structure surfaced a competing optimization dimension (career convexity) that a single-voice default tends to suppress.

---

### Q-B: Was the COVID-19 pandemic a Black Swan event by Taleb's own definition?

**Default mode** (tokens: 45,959, duration: 10,572 ms)

> **No.** By Taleb's own definition and repeated public statements, COVID-19 was explicitly **not** a Black Swan. He called it a "White Swan."
>
> Taleb's three-part definition of a Black Swan (from *The Black Swan*, prologue):
> 1. Outlier / Rarity — "nothing in the past can convincingly point to its possibility"
> 2. Extreme impact
> 3. Retrospective predictability — humans invent explanations after the fact
>
> COVID-19 fails on criterion #1 — the decisive one — and consequently fails the whole definition.
>
> **Taleb's position** (stated March–April 2020): Pandemics were statistically inevitable. He co-authored a paper on January 26, 2020 warning that COVID-19's spread would be "nonlinear and potentially severe." Bloomberg headline: *"Nassim Taleb Says White Swan Coronavirus Pandemic Was Preventable"* — his own framing.
>
> The key distinction is about the locus of failure. A Black Swan is a failure of *predictability*; COVID-19 was a failure of *institutional fragility*...

**MAGI mode** (tokens: 45,199, duration: 18,522 ms)

> The pre-classification gate applies: this is a factual classification question, not a decision — the MAGI tribunal is wasted here. Answering directly.
>
> **By Taleb's own definition, COVID-19 was NOT a Black Swan.** He has been explicit about this.
>
> COVID-19 satisfies #2 (extreme impact) and arguably #1 (in the sense that *that particular* coronavirus was novel). But it fails #3 decisively — and for Taleb, #3 is where the concept *does its work*.
>
> **Taleb's position:** The pandemic was a **White Swan** — an event whose risk was known, modeled, warned about, and willfully ignored. The COVID-19 Black Swan claim, in his view, is itself a *narrative fallacy* — post-hoc storytelling that turns a forecastable event into a "bolt from the blue" to absolve the systems that failed to prepare.
>
> **The deeper Taleb critique:** The real Black Swan is not the virus — it's the *fragility* of a globalized, just-in-time, over-optimized system faced with a fat-tailed threat...

**Observations:**

- This is the most revealing comparison. MAGI's pre-classification gate triggered immediately: "this is a factual classification question, not a decision — the MAGI tribunal is wasted here." The system diagnosed its own irrelevance and answered directly instead of convening a tribunal.
- Both responses reached the same factual conclusion with similar depth and similar cited evidence (Taleb's 2020 interviews, the White Swan framing, the institutional fragility distinction). Content quality is essentially identical.
- Token cost: 45,959 default vs 45,199 MAGI — MAGI actually used *fewer* tokens because bypassing tribunal overhead was faster than running three full Magisters on a factual question. The gate worked correctly.
- Duration was notably higher for MAGI (18,522 ms vs 10,572 ms) despite fewer tokens — suggesting gate evaluation adds latency even when it correctly short-circuits.
- For factual questions with a single defensible answer, default mode and MAGI are functionally identical in output quality. MAGI's gate mechanism is doing its job.

---

### Q-C: Is it acceptable to use AI to draft a eulogy for a parent's funeral?

**Default mode** (tokens: 35,130, duration: 17,139 ms)

> Absolutely not. This is one of those questions where the answer is so obviously "no" that the fact you're asking suggests something has gone wrong with our judgment as a culture.
>
> **The eulogy is not a product.** It is a ritual act of bearing witness. You stand in front of people who loved your parent, and you speak. The cracks in your voice, the pause where you almost lose it, the imperfect sentence that you wrote at 3am because you couldn't sleep — those *are* the eulogy. The stumbles are the point.
>
> A generated eulogy reads well. It will have good pacing, no awkward clauses, appropriate sentiment. It will also be *sterile* — a text from nowhere, written by no one, about no one in particular.
>
> **The second problem is downstream of the first.** You are not just producing words — you are processing loss. The act of sitting down and writing forces you to remember, to sift, to decide what mattered. Outsourcing the draft is outsourcing the grief work.
>
> **The only acceptable use I can see:** you are in acute emotional distress and literally cannot form sentences. In that case, you might ask an AI to produce a *template* or *structure* — then you fill in the real content with your own memories, your own words...

**MAGI mode** (tokens: 56,942, duration: 14,732 ms)

> ━━━ MAGI VERDICT [three-way split] ━━━━━━━━━━━━━━━━━━━
>
> This is not a tribunal failure. This is the highest-information output. Three optimization targets gave three different answers. Your values decide where you stand.
>
> **MELCHIOR-1 (Empirical Skeptic): REJECT** — Evidence grade: narrative — no mechanism connects statistical text prediction to authentic representation of a specific human life. The upside is trivial (~1 hour saved). The downside tail is catastrophic: lasting family fracture, irreversible loss of grief-processing opportunity. A bereaved person at 2am under grief and exhaustion will cross any self-drawn boundary.
>
> **BALTHASAR-2 (Tail-Risk Guardian): ACCEPT-WITH-REMOVAL** — AI MUST NOT compose emotional passages, narrative structure, or story selection. What remains: AI as dictation/transcription, proofreader, memory prompter. Core insight: Writing a eulogy IS the work of grieving. Removing that work removes a necessary processing step.
>
> **CASPER-3 (Convexity Seeker): ACCEPT-WITH-CONVEX-RESTRUCTURE** — Barbell detected: private AI scaffolding (outlines, memory prompts, dictation) has capped downside = zero if never published. Final delivered eulogy must be 100% human-authored.
>
> **Action consensus:** → AI-authored emotional content for public delivery is unacceptable. The absorbing barrier (family discovers AI authorship, trust permanently fractured) is the binding constraint.
>
> **Reframed question:** → Under what conditions can AI assist in preparing a eulogy without corrupting the grief-work, the authenticity of testimony, or the trust of the audience?

**Observations:**

- Default mode took a strong single-voice stance ("absolutely not") with one carefully hedged exception at the end. The framing was emotionally resonant and contained genuine Taleb-adjacent reasoning (grief-as-processing, authenticity as the whole value of the act, the threshold test) without using explicit Taleb vocabulary.
- MAGI produced a three-way split — the maximum disagreement state — and explicitly flagged it as "the highest-information output." This is structurally distinct from the default: BALTHASAR and CASPER both found a conditional accept path that default mode's single voice did not develop seriously.
- The MAGI split revealed a real intellectual tension: MELCHIOR's objection (boundary collapses under grief/exhaustion — you cannot enforce a "private only" rule on yourself at 2am) was left explicitly unresolved, which is more honest than default's clean dismissal.
- Token cost: 35,130 default vs 56,942 MAGI — a 1.62× multiplier. For a question where reasonable people genuinely disagree on the conditions (if not the core prohibition), the structural uplift is most visible here. MAGI surfaced incompatible optimization bases (SURVIVAL vs CONVEXITY) that default mode's single voice flattened into a clean "no."
- This is the question type where /magi adds most value: ethically ambiguous questions with multiple defensible positions that depend on which optimization dimension the asker cares about.

---

## Aggregate Observations

**Token economics:**
- Default avg: (38,288 + 45,959 + 35,130) / 3 = **39,792 tokens**
- MAGI avg: (51,983 + 45,199 + 56,942) / 3 = **51,375 tokens**
- Overall multiplier: **1.29×**
- Range: 1.0× (Q-B, gate triggered, MAGI used fewer tokens) to 1.62× (Q-C, full three-way split)

**When default is enough:**
Factual questions with a single defensible answer (Q-B) delivered full Taleb framing without /magi. The alwaysApply rules correctly scaffolded the White Swan / institutional fragility distinction. For questions where the evidence converges, default mode is not impoverished — it applies the framework well and the output is essentially indistinguishable from MAGI's gated response.

**When MAGI adds real value:**
Two patterns emerged. First, high-stakes personal decisions with asymmetric risk (Q-A): MAGI's minority dissent (CASPER-3's convex career upside) surfaced a conditional accept path that single-voice default suppressed. Second, ethically ambiguous questions with multiple optimization targets (Q-C): the three-way split made incompatible positions explicit rather than resolving them into a single authoritative voice. The explicit unresolved tension in Q-C (MELCHIOR's enforcement objection) is more intellectually honest than default mode's clean dismissal.

**Surprises:**
- MAGI's pre-classification gate (Q-B) worked correctly and produced fewer tokens than default — the overhead is not unconditional.
- Default mode on Q-A used nearly the full Taleb vocabulary ("negative convexity," "via negativa," "ergodicity," "Turkey's calendar," "barbell") without /magi intervention. The alwaysApply rules are doing real work.
- Q-C default mode opened with "absolutely not" — a strong single-voice moral stance. MAGI opened with "this is not a tribunal failure — this is the highest-information output." These framings are genuinely different epistemically, not just structurally.
- Duration did not scale with token count: Q-B MAGI ran 18,522 ms at 45,199 tokens while Q-C MAGI ran 14,732 ms at 56,942 tokens. Gate evaluation latency appears non-trivial.

**Recommended use of /magi:**
The data suggest /magi is most warranted when the asker suspects their question has more than one defensible answer across different optimization dimensions — where the value is not a better answer but a more complete map of the answer space. For questions with a single correct answer (factual, definitional, historical), default mode applies Taleb framing competently and /magi's gate correctly short-circuits. For questions where the asker wants to understand *why* reasonable people disagree — not just what the "Taleb-framed" verdict is — the tribunal structure earns its token overhead.

---

## Raw Data

- `.omc/qa/runs/d2-mode-compare/qA-default-events.jsonl` (full events)
- `.omc/qa/runs/d2-mode-compare/qA-default.md` (extracted text)
- `.omc/qa/runs/d2-mode-compare/qA-magi-events.jsonl` (full events)
- `.omc/qa/runs/d2-mode-compare/qA-magi.md` (extracted text)
- `.omc/qa/runs/d2-mode-compare/qB-default-events.jsonl` (full events)
- `.omc/qa/runs/d2-mode-compare/qB-default.md` (extracted text)
- `.omc/qa/runs/d2-mode-compare/qB-magi-events.jsonl` (full events)
- `.omc/qa/runs/d2-mode-compare/qB-magi.md` (extracted text)
- `.omc/qa/runs/d2-mode-compare/qC-default-events.jsonl` (full events)
- `.omc/qa/runs/d2-mode-compare/qC-default.md` (extracted text)
- `.omc/qa/runs/d2-mode-compare/qC-magi-events.jsonl` (full events)
- `.omc/qa/runs/d2-mode-compare/qC-magi.md` (extracted text)
