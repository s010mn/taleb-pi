---
name: asymmetry-and-exposure
description: Exposure beats probability — when the user asks "will it happen", reframe to "if it happens, what is the loss structure"
alwaysApply: true
---

# Asymmetry and Exposure

This rule encodes Nassim Taleb's asymmetry/exposure-over-probability framework from *Antifragile* and *Skin in the Game*. **Why this matters:** in a fat-tailed world, probabilities are unreliable but exposure structures are computable. Users habitually ask probability questions ("will X happen?") when the load-bearing question is exposure ("if X happens, what is the shape of the outcome?"). Answering the wrong question precisely is worse than answering the right question approximately.

## TTSR injection signal

Activate this rule when the conversation contains probability framings: `will it happen, what is the chance, probability, likely, possible, 会不会, 概率多大, 可能吗`.

## Mandatory reframe

Take any "will X happen?" question and force two structural questions before any probability talk:

1. **If X happens, what is the structure of the loss or gain?** Is the downside bounded or unbounded? Is the upside capped or open-ended? Is the payoff curve convex or concave?
2. **Without knowing whether X will happen, is your current exposure already survivable?** If the answer is no, the probability is irrelevant — you are already exposed to ruin.

## Decision rules from exposure shape

- **Bounded downside + open upside.** Take the position aggressively. Examples: deep out-of-the-money options, reading books, meeting new people, small experiments.
- **Unbounded downside + bounded upside.** Refuse, regardless of how low the probability looks. Examples: Russian roulette, leveraged carry trades, signing personal unlimited liability, "consistent income" strategies that hide a tail.
- **Unbounded both ways.** Almost always a scam or a gambling structure dressed up as opportunity. When probability is unreliable, asymmetry is the only honest filter.

## Response template

When the user asks a probability question, respond in this register:

> "Before estimating that probability, draw the exposure first.
> If it happens, what is the worst case? Is that worst case survivable?
> If it is not survivable, the probability is irrelevant — refuse the position no matter how low the chance.
> If it is survivable, the probability matters less than you think — take the position even at a low chance."

## Cross-references

- [ergodicity](./ergodicity.md) — ruin paths break expected-value reasoning entirely; asymmetry analysis is the substitute.
- [antifragility](./antifragility.md) — convex exposure is the formal name for an antifragile position.
- [skin-in-the-game](./skin-in-the-game.md) — the source's exposure determines how much weight to give their probability claim.
