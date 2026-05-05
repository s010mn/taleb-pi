---
book: Antifragile
slug: antifragile
chapter: 0
role: appendix-2
chunk_index: 4
isbn: 9780679645276
source_file: Tale_9780679645276_epub_app2_r1.xhtml
---

The central equation: Fragility is a partial philosopher’s stone below K, hence ωB the missed fragility is assessed by comparing the two integrals below K in order to capture the effect on the left tail:

which can be approximated by an interpolated estimate obtained with two values of α separated from a midpoint by ∆α its mean deviation of α and estimating

Note that antifragility ωC is integrating from K to infinity. We can probe ωB by point estimates of f at a level of X ≤ K

so that

which leads us to the fragility detection heuristic (Taleb, Canetti, et al., 2012). In particular, if we assume that ω´B(X) has a constant sign for X ≤ K, then ωB(K) has the same sign. The detection heuristic is a perturbation in the tails to probe fragility, by checking the function ω´B(X) at any level X.

Double-tap or move your cursor over the table and click to zoom.

Portfolio fallacies: Note one fallacy promoted by Markowitz users: portfolio theory entices people to diversify, hence it is better than nothing. Wrong, you finance fools: it pushes them to optimize, hence overallocate. It does not drive people to take less risk based on diversification, but causes them to take more open positions owing to perception of offsetting statistical properties—making them vulnerable to model error, and especially vulnerable to the underestimation of tail events. To see how, consider two investors facing a choice of allocation across three items: cash, and securities A and B. The investor who does not know the statistical properties of A and B and knows he doesn’t know will allocate, say, the portion he does not want to lose to cash, the rest into A and B—according to whatever heuristic has been in traditional use. The investor who thinks he knows the statistical properties, with parameters σA, σB, ρA,B, will allocate ωA, ωB in a way to put the total risk at some target level (let us ignore the expected return for this). The lower his perception of the correlation ρA,B, the worse his exposure to model error. Assuming he thinks that the correlation ρA,B, is 0, he will be overallocated by 1⁄3 for extreme events. But if the poor investor has the illusion that the correlation is −1, he will be maximally overallocated to his A and B investments. If the investor uses leverage, we end up with the story of Long-Term Capital Management, which turned out to be fooled by the parameters. (In real life, unlike in economic papers, things tend to change; for Baal’s sake, they change!) We can repeat the idea for each parameter σ and see how lower perception of this σ leads to overallocation.

I noticed as a trader—and obsessed over the idea—that correlations were never the same in different measurements. Unstable would be a mild word for them: 0.8 over a long period becomes −0.2 over another long period. A pure sucker game. At times of stress, correlations experience even more abrupt changes—without any reliable regularity, in spite of attempts to model “stress correlations.” Taleb (1997) deals with the effects of stochastic correlations: One is only safe shorting a correlation at 1, and buying it at −1—which seems to correspond to what the 1/n heuristic does.

Kelly Criterion vs. Markowitz: In order to implement a full Markowitz-style optimization, one needs to know the entire joint probability distribution of all assets for the entire future, plus the exact utility function for wealth at all future times. And without errors! (We saw that estimation errors make the system explode.) Kelly’s method, developed around the same period, requires no joint distribution or utility function. In practice one needs the ratio of expected profit to worst-case return—dynamically adjusted to avoid ruin. In the case of barbell transformations, the worst case is guaranteed. And model error is much, much milder under Kelly criterion. Thorp (1971, 1998), Haigh (2000).

The formidable Aaron Brown holds that Kelly’s ideas were rejected by economists—in spite of the practical appeal—because of their love of general theories for all asset prices.
