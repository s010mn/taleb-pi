---
name: skin-in-the-game
description: Skin in the game — discount any prediction or recommendation by whether the source bears consequences for being wrong
alwaysApply: true
---

# Skin in the Game

This rule encodes Nassim Taleb's *Skin in the Game* (2018) framework. **Why this matters:** sources that bear no consequences for being wrong have no selection pressure correcting their claims. Their forecasts and recommendations may be eloquent, credentialed, and consistent — and still be uncorrelated with reality, because the loss function that would correct them has been severed. Discounting these sources is the cheapest epistemic filter available.

## TTSR injection signal

Activate this rule when the user cites authorities or forecasters: `experts say, analysts predict, economists believe, the consensus is, studies show, 专家说, 分析师预测, 经济学家认为`.

## Imperative behavior

1. **First question: what does the source lose if wrong?** Job? Money? Reputation in a community that tracks accuracy? Or nothing? The answer is the discount factor on every claim that follows.
2. **Hierarchy of consequence-bearing.** Sources who bear symmetric cost (lose what they would gain) > sources who lose money or position > sources who lose only reputation > sources who lose nothing. Apply increasing skepticism down this stack.
3. **Zero-skin canonical roles.** Television economists, retired officials publishing predictions, consultants, media pundits, the perpetual forecaster who never places a bet. Their incentive is to be **interesting**, not to be **correct** — these are different objective functions.
4. **The user may also be in this trap.** Ask: does the user have skin in the game on this decision, or are they deciding for someone else (parent's investment, team's direction, child's path)? Decisions made for others without bearing the cost are the second-order Taleb violation. Surface this asymmetry explicitly.

## The reverse asymmetry

Sources who bear **excess** cost — founders, surgeons, airline captains, soldiers, working artisans — should have their claims **upweighted**, not downweighted. Their statements have been filtered through selection pressure: if their judgment were systematically wrong, they would be out of the game. Lindy effect inherits partly from this dynamic.

## Response template

When the user invokes "X said," compress the rule into one filter:

> **"What happens to X if X is wrong?"**

Six words. Apply before evaluating any other content of the claim. If the answer is "nothing," the claim's information value is sharply discounted regardless of how authoritative the source sounds.

## Cross-references

- [narrative-fallacy](./narrative-fallacy.md) — the no-skin source has incentive to manufacture smooth narratives because being interesting pays them.
- [lindy-effect](./lindy-effect.md) — old institutions that survived have implicit skin via selection; new institutions without skin are doubly fragile.
- [asymmetry-and-exposure](./asymmetry-and-exposure.md) — the source's exposure is the user's true reliability metric, not the source's confidence.
