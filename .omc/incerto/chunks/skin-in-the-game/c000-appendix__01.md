---
book: Skin in the Game
slug: skin-in-the-game
chapter: 0
role: appendix
chunk_index: 1
isbn: 9780425284636
source_file: Tale_9780425284636_epub3_app_r1.xhtml
---

FIGURE 7. The Bob Rubin trade. Payoff in a skewed domain where the benefits are visible (and rewarded with some compensation) and the detriment is rare (and unpunished owing to absence of skin in the game). Can be generalized to politics, anything where the penalty is weak.

A. SKIN IN THE GAME AND TAIL PROBABILITIES

This section will analyze the probabilistic mismatch of tail risks and returns in the presence of a principal-agent problem.

Transfer of Harm: If an agent has the upside of the payoff of the random variable, with no downside, and is judged solely on the basis of past performance, then the incentive is to hide risks in the left tail using a negatively skewed (or more generally, asymmetric) distribution for the performance. This can be generalized to any payoff for which one does not bear the full risks and negative consequences of one’s actions.

Let P(K, M) be the payoff for the operator over M incentive periods:

where i.i.d. random variables representing the distribution of profits over a certain period [t, t + iΔt], i ∈ ℕ, Δt ∈ ℝ+ and K is a “hurdle,” is an indicator of stopping time when past performance conditions are not satisfied (namely, the condition of having a certain performance in a certain number of the previous years, otherwise the stream of payoffs terminates, the game ends and the number of positive incentives stops). The constant 𝛾 ∈ (0,1) is an “agent payoff,” or compensation rate from the performance, which does not have to be monetary (as long as it can be quantified as “benefit”). The quantity 𝑞𝑡+(𝑖−𝟷)Δ𝑡 ∈ [1,∞) indicates the size of the exposure at times t+(i-1 ) Δt (because of an Ito lag, as the performance at period s is determined by q at a strictly earlier period < s).

Let {𝑓j} be the family of probability measures 𝑓j of Xj, 𝑗 ∈ ℕ. Each measure corresponds to certain mean/skewness characteristics, and we can split their properties in half on both sides of a “centrality” parameter K, as the “upper” and “lower” distributions. We write 𝑑𝐹j(𝑥) as 𝑓j(𝑥)𝑑𝑥, so and , the “upper” and “lower” distributions, each corresponding to certain conditional expectation and .

Now define 𝓿 ∈ ℝ+ as a K-centered nonparametric measure of asymmetry, , with values >1 for positive asymmetry, and <1 for negative ones. Intuitively, skewness has probabilities and expectations moving in opposite directions: the larger the negative payoff, the smaller the probability to compensate.

We do not assume a “fair game,” that is, with unbounded returns 𝑚 ∈ (-∞, ∞), Fj+ 𝔼j+ + Fj− 𝔼j− = m, which we can write as m++m−= m.

Simplified assumptions of constant q and single-condition stopping time

Assume q constant, q = 1 and simplify the stopping time condition as having no loss in the previous periods, =inf{(𝑡+(𝑖-1)Δ𝑡)): 𝑥Δ𝑡(𝑖−1)+𝑡 <𝐾} , which leads to

Since assuming independent and identically distributed agent’s payoffs, the expectation at stopping time corresponds to the expectation of stopping time multiplied by the expected compensation to the agent 𝛾 𝔼j+. And .

The expectation of stopping time can be written as the probability of success under the condition of no previous loss:

We can express the stopping time condition in terms of uninterrupted success runs. Let Σ be the ordered set of consecutive success runs Σ 𝄘 {{F }, {SF}, {SSF},…, {(M − 1) consecutive S, F}}, where S is success and F is failure over period Δt, with associated corresponding probabilities {(1 − Fj+), Fj+ (1 − Fj+), Fj+2 (1−Fj+) ,…., Fj+M−1 (1−Fj+)},

For M large, since Fj+ ∈ (0,1) we can treat the previous as almost an equality, hence:

Finally, the expected payoff for the agent:

which increases by (i) increasing 𝔼j+, (ii) minimizing the probability of the loss Fj−, but, and that’s the core point, even if (i) and (ii) take place at the expense of 𝑚, the total expectation from the package.

FIGURE 8. Indy Mac, a failed firm during the subprime crisis (from Taleb 2009). It is a representative of risks that keep increasing in the absence of losses, until explosive blowup.
