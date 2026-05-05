---
book: Skin in the Game
slug: skin-in-the-game
chapter: 0
role: appendix
chunk_index: 5
isbn: 9780425284636
source_file: Tale_9780425284636_epub3_app_r1.xhtml
---

We are not asserting that a given security or random process is ergodic, but that, given that its ensemble probability (obtained by cross-sectional methods, assumed via subjective probabilities, or simply determined by arbitrage arguments), a risk-taking strategy should conform to such properties. So ergodicity concerns the function of the random variable or process, not the process itself. And the function should not allow ruin.

In other words, assuming the SP500 has a certain expected return “alpha,” an ergodic strategy would generate a strategy, say Kelly Criterion, to capture the assumed alpha. If it doesn’t, because of absorbing barrier or something else, it is not ergodic.

D. TECHNICAL DEFINITION OF FAT TAILS

Probability distributions range between extreme thin-tailed (Bernoulli) and extreme fat-tailed. Among the categories of distributions that are often distinguished due to the convergence properties of moments are: (1) Having a support that is compact but not degenerate, (2) Subgaussian, (3) Gaussian, (4) Subexponential, (5) Power law with exponent greater than 3, (6) Power law with exponent less than or equal to 3 and greater than 2, (7) Power law with exponent less than or equal to 2. In particular, power law distributions have a finite mean only if the exponent is greater than 1, and have a finite variance only if the exponent exceeds 2.

Our interest is in distinguishing between cases where tail events dominate impacts, as a formal definition of the boundary between the categories of distributions to be considered as Mediocristan and Extremistan. The natural boundary between these occurs at the subexponential class, which has the following property:

Let X = be a sequence of independent and identically distributed random variables with support in (ℝ+), with cumulative distribution function F. The subexponential class of distributions is defined by (see Teugels 1975, Pitman 1980):

where 𝐹*2 = 𝐹′ ∗ 𝐹 is the cumulative distribution of X1 + X2, the sum of two independent copies of X. This implies that the probability that the sum X1 + X2 exceeds a value x is twice the probability that either one separately exceeds x. Thus, every time the sum exceeds x, for large enough values of x, the value of the sum is due to either one or the other exceeding x—the maximum over the two variables—and the other of them contributes negligibly.

More generally, it can be shown that the sum of n variables is dominated by the maximum of the values over those variables in the same way. Formally, the following two properties are equivalent to the subexponential condition (see Chistyakov 1964, Embrechts et al. 1979). For a given n ≥ 2, let and Mn = max

a) lim

b) lim

Thus the sum Sn has the same magnitude as the largest sample Mn, which is another way of saying that tails play the most important role.

Intuitively, tail events in subexponential distributions should decline more slowly than an exponential distribution for which large tail events should be irrelevant. Indeed, one can show that subexponential distributions have no exponential moments:

for all values of 𝜀 greater than zero. However, the converse isn’t true, since distributions can have no exponential moments, yet not satisfy the subexponential condition.

We note that if we choose to indicate deviations as negative values of the variable 𝑥, the same result holds by symmetry for extreme negative values, replacing 𝑥 → +∞ with 𝑥 → −∞. For two-tailed variables, we can separately consider positive and negative domains.

*1 Debate of author with P. Jorion, 1997, and Taleb 2007.

*2 Thanks to questioning by Andrew Lesniewski, who helped define what we mean by ergodicity, as the meaning here diverges from that in statistical physics.
