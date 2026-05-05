---
book: Skin in the Game
slug: skin-in-the-game
chapter: 0
role: appendix
chunk_index: 4
isbn: 9780425284636
source_file: Tale_9780425284636_epub3_app_r1.xhtml
---

The principle of sustainability is necessary for the following argument. While experiments are static (we saw the confusion between the state-space and the temporal), life is continuous. If you incur a tiny probability of ruin as a “one-off” risk, survive it, then do it again (another “one-off” deal), you will eventually go bust with probability 1. Confusion arises because it may seem that the “one-off” risk is reasonable, but that also means that an additional one is reasonable. (See Figure 9). The good news is that some classes of risk can be deemed to be practically of probability zero: the earth survived trillions of natural variations daily over three billion years, otherwise we would not be here. We can use conditional probability arguments (adjusting for the survivorship bias) to back-out the ruin probability in a system.

FIGURE 9. Why ruin is not a renewable resource. No matter how small the probability, in time, something bound to hit the ruin barrier is about guaranteed to hit it. No risk should be considered a “one-off” event.

Now, we do not have to take 𝑡 → ∞ nor is permanent sustainability necessary. We can just extend shelf time. The longer the t, the more the expectation operators diverge.

Consider the unconditional expected stopping time to ruin in a discrete and simplified model: , where is the number of exposures per time period, T is the overall remaining lifespan, and p is the ruin probability, both over that same time period for fixing p. Since , we can calibrate the risk under repetition. The longer the life expectancy T (expressed in time periods), the more serious the ruin problem. Humans and plants have a short shelf life, nature doesn’t—at least for t of the order of 108 years—hence annual ruin probabilities of O(10−8) and (for tighter increments) local ruin probabilities of at most O(10−50). The higher up in the hierarchy individual-species-ecosystem, the more serious the ruin problem. This duality hinges on 𝑡 → ∞; hence requirement is not necessary for items that are not permanent, that have a finite shelf life.

The fat tails argument: The more a system is capable of delivering large deviations, the worse the ruin problem.

We will cover the fat tails problem more extensively. Clearly the variance of the process matters; but overall deviations that do not exceed the ruin threshold do not matter.

Logarithmic transformation

Under the axiom of sustainability, i.e., that “one should take risks as if you were going to do it forever,” only a logarithmic (or similar) transformation applies.

Fattailedness is a property that is typically worrisome under absence of compact support for the random variable, less so when the variables are bounded. But as we saw the need of using a logarithmic transformation, a random variable with support in [0, ∞) now has support in (−∞, ∞), hence properties derived from extreme value theory can now apply to our analysis. Likewise, if harm is defined as a positive number with an upper bound H which corresponds to ruin, it is possible to transform it from [0, H] to [0, ∞).

Cramér and Lundberg, in insurance analysis, discovered the difficulty; see Cramér 1930.

A Note on Ergodicity*2: Ergodicity is not statistically identifiable, not observable, and there is no test for time series that gives ergodicity, similar to Dickey-Fuller for stationarity (or Phillips-Perron for integration order). More crucially:

If your result is obtained from the observation of a time series, how can you make claims about the ensemble probability measure?

The answer is similar to arbitrage, which has no statistical test but, crucially, has a probability measure determined ex ante (the “no free lunch” argument). Further, consider the argument of a “self-financing” strategy, via, say, dynamic hedging. At the limit we assume that the law of large numbers will compress the returns and that no loss and no absorbing barrier will ever be reached. It satisfies our criterion of ergodicity but does not have a statistically obtained measure. Further, almost all the literature on intertemporal investments/consumption requires absence of ruin.
