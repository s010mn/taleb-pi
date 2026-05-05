---
book: Antifragile
slug: antifragile
chapter: 0
role: notes
chunk_index: 7
isbn: 9780679645276
source_file: Tale_9780679645276_epub_nts_r1.xhtml
---

Example of detection and mapping of convexity bias (ωA), from author’s doctoral thesis: The method is to find what needs dynamic hedging and dynamic revisions. Among the members of the class of instruments considered that are not options stricto-sensu but require dynamic hedging can be rapidly mentioned a broad class of convex instruments: (1) Low coupon long dated bonds. Assume a discrete time framework. Take B(r,T,C) the bond maturing period T, paying a coupon C where rt = ∫rs ds. We have the convexity д2B/дr2 increasing with T and decreasing with C. (2) Contracts where the financing is extremely correlated with the price of the Future. (3) Baskets with a geometric feature in its computation. (4) A largely neglected class of assets is the “quanto-defined” contracts (in which the payoff is not in the native currency of the contract), such as the Japanese NIKEI Future where the payoff is in U.S. currency. In short, while a Japanese yen denominated NIKEI contract is linear, a U.S. dollars denominated one is nonlinear and requires dynamic hedging.

Take at initial time t0, the final condition V(S,T) = ST where T is the expiration date. More simply, the security just described is a plain forward, assumed to be linear. There appears to be no Ito term there yet. However should there be an intermediate payoff such that, having an accounting period i/T, the variation margin is paid in cash disbursement, some complexity would arise. Assume ∆(ti) the changes in the value of the portfolio during period (ti,ti-1), ∆(ti)= (V(S,ti)-V(S, ti-1)). If the variation is to be paid at period ti, then the operator would have to borrow at the forward rate between periods ti and T, here r(ti,T). This financing is necessary to make V(S,T) and ST comparable in present value. In expectation, we will have to discount the variation using forward cash flow method for the accounting period between ti-1 and ti. Seen from period T, the value of the variation becomes Et [exp[-r(ti,T)(T-ti)] ∆(ti)], where Et is the expectation operator at time t (under, say, the risk-neutral probability measure). Therefore we are delivering at period T, in expectation, as seen from period t0, the expected value of a stream of future variation Et0[Σ exp[-r(ti,T)(T-ti)] ∆(ti)]. However we need to discount to the present using the term rate r(T). The previous equation becomes V(S,T)|t=t0= V[S,t0]+ exp[r(T)] Eto [Σ exp[-r(ti,T)(T-ti)] ∆(ti)], which will be different from ST when any of the interest rate forwards is stochastic. Result (a polite way to say “theorem”): When the variances of the forward discount rate r(ti,T) and the underlying security ST are strictly positive and the correlation between the two is lower than 1, V(S,T)|t=t0 ≠ ST. Proof: by examining the properties of the expectation operator. Therefore: F(S, t0) = F(S,t0+∆t), while a nonlinear instrument will merely satisfy: E[V(S,t0)]=E[V(S,t0+∆t)].

Critique of Kealey: Posner (1996).

General History of Technology: Missing convexity biases, Basalla (1988), Stokes (1997), Geison (1995).

Ideas of innovation: Berkun (2007), Latour and Woolfar (1996), Khosla (2009), Johnson (2010).

Medical discoveries and absence of causative knowledge: Morton (2007), Li (2006), Le Fanu (2002), Bohuon and Monneret (2009). Le Fanu (2002): “It is perhaps predictable that doctors and scientists should assume the credit for the ascendency of modern medicine without acknowledging, or indeed recognizing, the mysteries of nature that have played so important a part. Not surprisingly, they came to believe their intellectual contribution to be greater than it really was, and that they understood more than they really did. They failed to acknowledge the overwhelmingly empirical nature of technological and drug innovation, which made possible spectacular breakthroughs in the treatment of disease without the requirement of any profound understanding of its causation or natural history.”

Commerce as convex: Ridley (2010) has comments on Phoenicians; Aubet (2001).

Pharma’s insider: La Matina (2009).

Multiplicative side effects: Underestimation of interactions in Tatonetti et al. (2012): they simply uncovered the side effects of people taking joint drugs together, which effectively swells the side effects (they show something as large as a multiplication of the effect by 4).

Strategic planning: Starbuck et al. (1992, 2008), Abrahamson and Freedman (2007). The latter is a beautiful ode to disorder and “mess.”
