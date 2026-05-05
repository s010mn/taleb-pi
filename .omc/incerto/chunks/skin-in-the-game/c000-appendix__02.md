---
book: Skin in the Game
slug: skin-in-the-game
chapter: 0
role: appendix
chunk_index: 2
isbn: 9780425284636
source_file: Tale_9780425284636_epub3_app_r1.xhtml
---

Alarmingly, since , the agent doesn’t care about a degradation of the total expected return 𝑚 if it comes from the left side of the distribution, 𝑚⁻. Seen in skewness space, the expected agent payoff maximizes under the distribution 𝑗 with the lowest value of 𝓿j (maximal negative asymmetry). The total expectation of the positive-incentive without-skin-in-the-game depends on negative skewness, not on 𝑚.

B. PROBABILISTIC SUSTAINABILITY AND ERGODICITY

Dynamic Risk Taking: If you take the risk—any risk—repeatedly, the way to count is in exposure per lifespan, or in the way it shortens the remaining lifespan.

Ruin Properties: Ruin probabilities are in the time domain for a single agent and do not correspond to state-space (or ensemble) tail probabilities. Nor are expectations fungible between the two domains. Statements on the “overestimation” of tail events (entailing ruin) by agents that are derived from state-space estimations are accordingly flawed. Many theories of “rationality” of agents are based on wrong estimation operators and/or probability measures.

This is the main reason behind the barbell strategy.

This is a special case of the conflation between a random variable and the payoff of a time-dependent, path-dependent derivative function.

Less Technical Translation:

Never cross a river if it is on average only 4 feet deep.*1

A simplified general case

Consider the extremely simplified example, the sequence of independent random variables with support in the positive real numbers (ℝ+). The convergence theorems of classical probability theory address the behavior of the sum or average: lim by the (weak) law of large numbers (convergence in probability). As shown in the story of the casino in Chapter 19, n going to infinity produces convergence in probability to the true mean return m. Although the law of large numbers applies to draws i that can be strictly separated by time, it assumes (some) independence, and certainly path independence.

Now consider where every state variable Xi is indexed by a unit of time t : 0 < t < T. Assume that the “time events” are drawn from the exact same probability distribution: P(Xi) = P(Xi,t).

We define a time probability the evolution over time for a single agent i.

In the presence of terminal, that is irreversible, ruin, every observation is now conditional on some attribute of the preceding one, and what happens at period t depends on t − 1, what happens at t − 1 depends on t − 2, etc. We now have path dependence.

Next what we call failure of ergodicity:

Theorem 1 (state space-time inequality): Assume that ∀𝑡, 𝑃(𝑋t = 0) > 0 and 𝑋0 > 0, 𝔼Ν(𝑋𝑡) < ∞ the state space expectation for a static initial period t, and 𝔼𝑇(𝑋𝑖) the time expectation for any agent i, both obtained through the weak law of large numbers. We have

𝔼Ν(𝑋𝑡) ≥ 𝔼𝑇(𝑋𝑖)

Proof:

where is the indicator function requiring survival at the previous period. Hence the limits of n for t show a decreasing temporal expectation: 𝔼Ν(𝑋𝑡−1) ≥ 𝔼Ν(𝑋𝑡).

We can actually prove divergence.

As we can see by making T < ∞, by recursing the law of iterated expectations, we get the inequality for all T.

We can see the ensemble of risk takers expecting a return m in any period t, while every single risk taker is guaranteed to eventually go bust.

Other approaches: we can also approach the proof more formally in a measure-theoretic way by showing that while space sets for “nonruin” 𝓐 are disjoint, time sets are not. The approach relies on the fact that for a measure 𝓿:

does not necessarily equal

Almost all papers discussing the actuarial “overestimation” of tail risk via options (see review in Barberis 2013) are void by the inequality in Theorem 1. Clearly they assume that an agent only exists for a single decision or exposure. Simply, the original papers documenting the “bias” assume that the agents will never ever again make another decision in their remaining lives.
