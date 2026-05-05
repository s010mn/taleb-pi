---
book: Antifragile
slug: antifragile
chapter: 0
role: appendix-2
chunk_index: 1
isbn: 9780679645276
source_file: Tale_9780679645276_epub_app2_r1.xhtml
---

Appendix II (Very Technical):

WHERE MOST ECONOMIC MODELS FRAGILIZE AND BLOW PEOPLE UP

When I said “technical” in the main text, I may have been fibbing. Here I am not.

The Markowitz incoherence: Assume that someone tells you that the probability of an event is exactly zero. You ask him where he got this from. “Baal told me” is the answer. In such case, the person is coherent, but would be deemed unrealistic by non-Baalists. But if on the other hand, the person tells you “I estimated it to be zero,” we have a problem. The person is both unrealistic and inconsistent. Something estimated needs to have an estimation error. So probability cannot be zero if it is estimated, its lower bound is linked to the estimation error; the higher the estimation error, the higher the probability, up to a point. As with Laplace’s argument of total ignorance, an infinite estimation error pushes the probability toward ½.

We will return to the implication of the mistake; take for now that anything estimating a parameter and then putting it into an equation is different from estimating the equation across parameters (same story as the health of the grandmother, the average temperature, here “estimated” is irrelevant, what we need is average health across temperatures). And Markowitz showed his incoherence by starting his “semi-nal” paper with “Assume you know E and V” (that is, the expectation and the variance). At the end of the paper he accepts that they need to be estimated, and what is worse, with a combination of statistical techniques and the “judgment of practical men.” Well, if these parameters need to be estimated, with an error, then the derivations need to be written differently and, of course, we would have no paper—and no Markowitz paper, no blowups, no modern finance, no fragilistas teaching junk to students.… Economic models are extremely fragile to assumptions, in the sense that a slight alteration in these assumptions can, as we will see, lead to extremely consequential differences in the results. And, to make matters worse, many of these models are “back-fit” to assumptions, in the sense that the hypotheses are selected to make the math work, which makes them ultrafragile and ultrafragilizing.

Simple example: Government deficits.

We use the following deficit example owing to the way calculations by governments and government agencies currently miss convexity terms (and have a hard time accepting it). Really, they don’t take them into account. The example illustrates:

(a) missing the stochastic character of a variable known to affect the model but deemed deterministic (and fixed), and

(b) F, the function of such variable, is convex or concave with respect to the variable.

Say a government estimates unemployment for the next three years as averaging 9 percent; it uses its econometric models to issue a forecast balance B of a two-hundred-billion deficit in the local currency. But it misses (like almost everything in economics) that unemployment is a stochastic variable. Employment over a three-year period has fluctuated by 1 percent on average. We can calculate the effect of the error with the following:

Unemployment at 8%, Balance B(8%) = −75 bn (improvement of 125 bn)

Unemployment at 9%, Balance B(9%)= −200 bn

Unemployment at 10%, Balance B(10%)= −550 bn (worsening of 350 bn)

The concavity bias, or negative convexity bias, from underestimation of the deficit is −112.5 bn, since ½ {B(8%) + B(10%)} = −312 bn, not −200 bn. This is the exact case of the inverse philosopher’s stone.

FIGURE 37. Nonlinear transformations allow the detection of both model convexity bias and fragility. Illustration of the example: histogram from Monte Carlo simulation of government deficit as a left-tailed random variable simply as a result of randomizing unemployment, of which it is a concave function. The method of point estimate would assume a Dirac stick at −200, thus underestimating both the expected deficit (−312) and the tail fragility of it. (From Taleb and Douady, 2012).

Application: Ricardian Model and Left Tail—The Price of Wine Happens to Vary
