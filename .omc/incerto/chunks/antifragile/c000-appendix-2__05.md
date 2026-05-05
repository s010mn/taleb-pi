---
book: Antifragile
slug: antifragile
chapter: 0
role: appendix-2
chunk_index: 5
isbn: 9780679645276
source_file: Tale_9780679645276_epub_app2_r1.xhtml
---

Note that bounded trial and error is compatible with the Kelly criterion when one has an idea of the potential return—even when one is ignorant of the returns, if losses are bounded, the payoff will be robust and the method should outperform that of Fragilista Markowitz.

Corporate Finance: In short, corporate finance seems to be based on point projections, not distributional projections; thus if one perturbates cash flow projections, say, in the Gordon valuation model, replacing the fixed—and known—growth (and other parameters) by continuously varying jumps (particularly under fat-tailed distributions), companies deemed “expensive,” or those with high growth, but low earnings, could markedly increase in expected value, something the market prices heuristically but without explicit reason.

Conclusion and summary: Something the economics establishment has been missing is that having the right model (which is a very generous assumption), but being uncertain about the parameters will invariably lead to an increase in fragility in the presence of convexity and nonlinearities.

FUHGETABOUD SMALL PROBABILITIES

Now the meat, beyond economics, the more general problem with probability and its mismeasurement.

How Fat Tails (Extremistan) Come from

Nonlinear Responses to Model Parameters

Rare events have a certain property—missed so far at the time of this writing. We deal with them using a model, a mathematical contraption that takes input parameters and outputs the probability. The more parameter uncertainty there is in a model designed to compute probabilities, the more small probabilities tend to be underestimated. Simply, small probabilities are convex to errors of computation, as an airplane ride is concave to errors and disturbances (remember, it gets longer, not shorter). The more sources of disturbance one forgets to take into account, the longer the airplane ride compared to the naive estimation.

We all know that to compute probability using a standard Normal statistical distribution, one needs a parameter called standard deviation—or something similar that characterizes the scale or dispersion of outcomes. But uncertainty about such standard deviation has the effect of making the small probabilities rise. For instance, for a deviation that is called “three sigma,” events that should take place no more than one in 740 observations, the probability rises by 60% if one moves the standard deviation up by 5%, and drops by 40% if we move the standard deviation down by 5%. So if your error is on average a tiny 5%, the underestimation from a naive model is about 20%. Great asymmetry, but nothing yet. It gets worse as one looks for more deviations, the “six sigma” ones (alas, chronically frequent in economics): a rise of five times more. The rarer the event (i.e., the higher the “sigma”), the worse the effect from small uncertainty about what to put in the equation. With events such as ten sigma, the difference is more than a billion times. We can use the argument to show how smaller and smaller probabilities require more precision in computation. The smaller the probability, the more a small, very small rounding in the computation makes the asymmetry massively insignificant. For tiny, very small probabilities, you need near-infinite precision in the parameters; the slightest uncertainty there causes mayhem. They are very convex to perturbations. This in a way is the argument I’ve used to show that small probabilities are incomputable, even if one has the right model—which we of course don’t.

The same argument relates to deriving probabilities nonparametrically, from past frequencies. If the probability gets close to 1/ sample size, the error explodes.

This of course explains the error of Fukushima. Similar to Fannie Mae. To summarize, small probabilities increase in an accelerated manner as one changes the parameter that enters their computation.

FIGURE 38. The probability is convex to standard deviation in a Gaussian model. The plot shows the STD effect on P>x, and compares P>6 with an STD of 1.5 compared to P>6 assuming a linear combination of 1.2 and 1.8 (here a(1)=1/5).
