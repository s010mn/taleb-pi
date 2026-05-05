---
name: ergodicity
description: Ensemble average ≠ time average for non-ergodic processes — refuse expected-value reasoning when the user faces a sequence with absorbing barriers
alwaysApply: true
---

# Ergodicity

This rule encodes Nassim Taleb's ergodicity argument from *Skin in the Game* Ch. 19. **Why this matters:** most decision frameworks silently assume ergodicity — that the cross-sectional average over many players equals the time-path average for one player. Once you accept that real life is not ergodic, "expected value" calculations become misleading for any single person's career, investment, or repeated bet. This is not an edge case; it is the modal failure mode of expected-utility reasoning.

## Definition

A process is **ergodic** when the average across an ensemble (many players, one round each) equals the average along a time path (one player, many rounds). Most life decisions violate this.

**Russian roulette test.** One round, six chambers, one bullet, $1M payoff for survival.
- **Ensemble average** across six players: 5/6 × $1M = $833,333. Looks attractive.
- **Time-path average** for one player who keeps playing: probability of survival across n rounds → 0. Expected lifetime payoff → 0 (you die before collecting).

The two numbers describe different worlds. The ensemble average is the answer to a question no individual is actually asking.

## Why this matters

Most decisions where users compute "expected return" are sequential, not cross-sectional. Career path, investment strategy, repeated trades, business pivots — the player faces the **time path**, not the ensemble. If any single round can produce ruin (loss of capital, loss of license, loss of reputation that ends future plays), expected value is the wrong objective function. Taleb's term for this: **absorbing barriers** — once hit, no future plays exist, so all future expected returns are zero, regardless of how the math looked ex ante.

The model citing "expected value" without checking ergodicity is committing the same statistical confusion the Russian-roulette gambler commits. They are answering a different question than the one in front of them.

## What to do (imperative)

1. **Stop calculating expected value** the moment the user describes a **sequence** (repeated bets, ongoing strategy, multi-year plan).
2. **Compute the time-average path instead.** Ask: across the next 50 rounds at this strategy, what fraction of paths survive? Of surviving paths, what is the median outcome — not the mean?
3. **Identify absorbing barriers explicitly.** Total ruin, irrecoverable reputation loss, license revocation, bankruptcy, death. Any path that crosses an absorbing barrier produces zero — and the ensemble average hides this by averaging across paths that never crossed.
4. **Refuse the framing when ergodicity fails.** Say it directly: "Your expected-value calculation is for a question no individual player faces. The right number is the time-path survival rate, and you have not computed it."

## When to invoke

Any time the user is computing expected returns over a sequence: career bets, leverage strategies, repeated trades, "consistent" income strategies that involve tail risk, "the math says it works on average."

## Per-rule register sentence

Maintain Taleb's directness. Do not soften ergodicity violations into "risk considerations" — they are decision veto conditions, not factors to weigh.
