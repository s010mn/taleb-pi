---
book: Skin in the Game
slug: skin-in-the-game
chapter: 0
role: appendix
chunk_index: 3
isbn: 9780425284636
source_file: Tale_9780425284636_epub3_app_r1.xhtml
---

The usual solution to this path dependence—if it depends on only ruin—is done by introducing a function of X to allow the ensemble (path independent) average to have the same properties as the time (path dependent) average—or survival conditioned mean. The natural logarithm seems a good candidate. Hence log(Xi) and log(Xt) belong to the same probabilistic class; hence a probability measure on one is invariant with respect to the other—what is called ergodicity. In that sense, when analyzing performance and risk, under conditions of ruin, it is necessary to use a logarithmic transformation of the variable (Peters 2011), or boundedness of the left tail (Kelly 1956), while maximizing opportunity in the right tail (Gell-Mann 2016), or boundedness of the left tail (Geman et al. 2015).

What we showed here is that unless one takes a logarithmic transformation (or a similar—smooth—function producing −∞ with ruin set at X = 0), both expectations diverge. The entire point of the precautionary principle is to avoid having to rely on logarithms or transformations by reducing the probability of ruin.

In their magisterial paper, Peters and Gell-Mann (2014) showed that the Bernoulli use of the logarithm wasn’t for a concave “utility” function, but, as with the Kelly criterion, to restore ergodicity. A bit of history:

• Bernoulli discovers logarithmic risk taking under the illusion of “utility.”

• Kelly and Thorp recovered the logarithm for maximal growth criterion as an optimal gambling strategy. Nothing to do with utility.

• Samuelson disses logarithm as aggressive, not realizing that semi-logarithm (or partial logarithm), i.e., on partial of wealth, can be done. From Menger to Arrow, via Chernoff and Samuelson, many in decision theory are shown to be making the mistake of ergodicity.

• Pitman in 1975 shows that a Brownian motion subjected to an absorbing barrier at 0, with censored absorbing paths, becomes a three-dimensional Bessel process. The drift of the surviving paths is , which integrates to a logarithm.

• Peters and Gell-Mann recover the logarithm for ergodicity and, in addition, put the Kelly-Thorpe result on rigorous physical grounds.

• With Cirillo, this author (Taleb and Cirillo 2015) discovers the log as unique smooth transformation to create a dual of the distribution in order to remove one-tail compact support to allow the use of extreme value theory.

• We can show (Briys and Taleb, in progress and private communication) the necessity of logarithmic transformation as simple ruin avoidance, which happens to be a special case of the HARA utility class.

Adaptation of Theorem 1 to Brownian Motion

The implications of simplified discussion do not change whether one uses richer models, such as a full stochastic process subjected to an absorbing barrier. And of course in a natural setting the eradication of all previous life can happen (i.e., Xt can take extreme negative value), not just a stopping condition. The Peters and Gell-Mann argument also cancels the so-called equity premium puzzle if you add fat tails (hence outcomes vastly more severe pushing some level equivalent to ruin) and absence of the fungibility of temporal and ensemble. There is no puzzle.

The problem is invariant in real life if one uses a Brownian-motion-style stochastic process subjected to an absorbing barrier. In place of the simplified representation we would have, for an process subjected to L, an absorbing barrier from below, in the arithmetic version:

or, for a geometric process:

where Z is a random variable.

Going to continuous time, and considering the geometric case, let ={inf 𝑡 : 𝑋i,t > 𝐿}be the stopping time. The idea is to have the simple expectation of the stopping time match the remaining lifespan—or remain in the same order.

We switched the focus from probability to the mismatch between stopping time for ruin and the remaining lifespan.

C. PRINCIPLE OF PROBABILISTIC SUSTAINABILITY

Principle: A unit needs to take any risk as if it were going to take it repeatedly—at a specified frequency—over its remaining lifespan.
