# D3 Validation: Incerto BM25 Retrieval Quality

## Method
- 5 concept queries against BM25-indexed Incerto corpus (773 chunks, 5 books)
- Top-5 hits per query
- LLM judge (deepseek-v4-flash) evaluates ON-TOPIC / MARGINAL / OFF-TOPIC per hit + aggregate
- Soft narrative judgment, no automated pass/fail

---

## Per-Query Results

### Q1: "narrative fallacy"

**Top-5 hits** (from BM25 search):
| Rank | Book | Chapter | Score | Preview (first 100 chars) |
|---|---|---|---|---|
| 1 | The Black Swan | Ch. 6 | 8.8136 | For an example that justifies skepticism about unconditional reliance on neurobiology… |
| 2 | The Black Swan | Ch. 6 | 8.3757 | Such tests avoid both the narrative fallacy and much of the confirmation bias… |
| 3 | The Black Swan | Ch. 16 | 8.1216 | As I have said earlier, the world, epistemologically, is literally a different place… |
| 4 | Antifragile | glossary | 7.8421 | Narrative Discipline: Discipline that consists of fitting a convincing and good-sounding story… |
| 5 | The Black Swan | Ch. 11 | 7.7233 | These graphs also illustrate a statistical version of the narrative fallacy—you find a model… |

**LLM Judge Verdicts:**
| Hit | Verdict | Reason |
|---|---|---|
| 1 | ON-TOPIC | Ch. 6 is Taleb's primary treatment; preview builds its philosophical foundation through Sextus Empiricus and empirical skepticism. |
| 2 | ON-TOPIC | Explicitly names "the narrative fallacy" in Ch. 6 and describes an experimental practice designed to avoid it. |
| 3 | MARGINAL | Epistemologically adjacent (bottom-up empiricism vs. top-down models) but does not mention narrative fallacy or the post-hoc storytelling mechanism. |
| 4 | MARGINAL | Conceptually identical phenomenon (fitting a story to the past) but labeled "Narrative Discipline" from Antifragile's glossary, not the primary treatment in The Black Swan Ch. 6. |
| 5 | ON-TOPIC | Directly names "a statistical version of the narrative fallacy" and defines it as fitting a model to the past, from The Black Swan. |

**Aggregate:** Top-3 ON-TOPIC: 2/3 | Quality: GOOD

---

### Q2: "via negativa"

**Top-5 hits** (from BM25 search):
| Rank | Book | Chapter | Score | Preview (first 100 chars) |
|---|---|---|---|---|
| 1 | Antifragile | glossary | 9.9211 | Narrative Discipline: Discipline that consists of fitting a convincing and good-sounding story… |
| 2 | Antifragile | Ch. 22 | 9.6566 | As a case study, consider mammograms. It has been shown that administering them to women over forty… |
| 3 | Antifragile | Ch. 20 | 8.3542 | This is where my simplification lies: I am assuming that every year doubles the additional life expectancy… |
| 4 | Antifragile | notes | 8.3437 | ADDITIONAL NOTES, AFTERTHOUGHTS, AND FURTHER READING These are both additional readings and ideas… |
| 5 | Antifragile | Ch. 24 | 8.0634 | Note how this fits into the idea of skin in the game. If someone has an opinion… |

**LLM Judge Verdicts:**
| Hit | Verdict | Reason |
|---|---|---|
| 1 | OFF-TOPIC | Glossary entry for "Narrative Discipline" is an unrelated concept; BM25 likely matched on lexical features of the glossary section itself, not on "via negativa." |
| 2 | MARGINAL | Mammograms as iatrogenics exemplify via negativa (removing harmful interventions), but Ch. 22 is about fragility detection, not the primary via negativa treatment in Ch. 7-8. |
| 3 | MARGINAL | Lindy effect operates on a similar "what survives is what works" logic, but the preview is the mathematical life-expectancy formulation, not the philosophical subtraction principle. |
| 4 | MARGINAL | Notes section likely contains scattered via negativa references, but aggregates many topics and lacks focused exposition. |
| 5 | OFF-TOPIC | Skin in the game is a separate concept about accountability and aligned incentives, unrelated to epistemic subtraction. |

**Aggregate:** Top-3 ON-TOPIC: 0/3 | Quality: POOR

---

### Q3: "antifragile"

**Top-5 hits** (from BM25 search):
| Rank | Book | Chapter | Score | Preview (first 100 chars) |
|---|---|---|---|---|
| 1 | Antifragile | appendix | 4.2933 | Note that fragile and antifragile here are relative terms, not quite absolute properties… |
| 2 | Antifragile | prologue | 4.1705 | PROLOGUE I. HOW TO LOVE THE WIND Wind extinguishes a candle and energizes fire… |
| 3 | Antifragile | Ch. 2 | 4.0863 | Those who understand bacterial resistance in the biological domain completely fail to grasp… |
| 4 | Antifragile | prologue | 3.9362 | First, the literary and philosophical, with parables and illustrations but minimal if any technical arguments… |
| 5 | Antifragile | Ch. 23 | 3.8361 | Recall that Fat Tony was in favor of just "making a buck" as opposed to being "proven right"… |

**LLM Judge Verdicts:**
| Hit | Verdict | Reason |
|---|---|---|
| 1 | ON-TOPIC | Directly defines antifragile as a relative term on the Triad spectrum; a definitional passage a MAGI agent would cite. |
| 2 | ON-TOPIC | The book's central metaphor ("wind extinguishes a candle and energizes fire") is the defining poetic statement of what antifragility means. |
| 3 | MARGINAL | Explicitly applies "antifragile" to illustrative examples but is analogizing to a domain, not defining the concept itself. |
| 4 | OFF-TOPIC | Pure book-structure meta-prose with no substantive claim about antifragility; a lexical hit only because it sits near conceptual content. |
| 5 | ON-TOPIC | Directly defines antifragile payoff structures (asymmetric upside/downside); a core mechanism a MAGI agent would cite. |

**Aggregate:** Top-3 ON-TOPIC: 2/3 | Quality: POOR

> Note: BM25 buried the primary definitional sources (Ch. 1, glossary, Ch. 18) below passages with higher term frequency. A MAGI agent relying on these top-5 would miss the formal definition entirely.

---

### Q4: "skin in the game"

**Top-5 hits** (from BM25 search):
| Rank | Book | Chapter | Score | Preview (first 100 chars) |
|---|---|---|---|---|
| 1 | Skin in the Game | Ch. 1 | 7.6314 | The Bob Rubin trade? Robert Rubin, a former Secretary of the United States Treasury… |
| 2 | Skin in the Game | Ch. 0 | 7.4701 | This book, while standalone, is a continuation of the Incerto collection… |
| 3 | Skin in the Game | Ch. 2 | 7.3493 | Indeed you need to win whatever you are after: money, territory, the heart of a grammar specialist… |
| 4 | Skin in the Game | Ch. 2 | 7.3248 | Now skin in the game brings simplicity—the disarming simplicity of things properly done… |
| 5 | Skin in the Game | Ch. 5 | 7.1396 | There are two types of "talking one's book." One consists of buying a stock because you like it… |

**LLM Judge Verdicts:**
| Hit | Verdict | Reason |
|---|---|---|
| 1 | ON-TOPIC | The Bob Rubin trade is a canonical skin-in-the-game violation example, central to the book's thesis. |
| 2 | MARGINAL | From the right book but the preview describes the Incerto series structure, not the concept itself. |
| 3 | ON-TOPIC | Words-vs-action duality and the danger of cheap talk are core skin-in-the-game territory. |
| 4 | ON-TOPIC | Explicitly names and defines skin in the game, linking it to simplicity and proper incentives. |
| 5 | ON-TOPIC | "Talking one's book" is a direct skin-in-the-game concept about stake alignment and credibility. |

**Aggregate:** Top-3 ON-TOPIC: 2/3 | Quality: GOOD

---

### Q5: "ergodicity"

**Top-5 hits** (from BM25 search):
| Rank | Book | Chapter | Score | Preview (first 100 chars) |
|---|---|---|---|---|
| 1 | Skin in the Game | appendix | 6.336 | The principle of sustainability is necessary for the following argument. While experiments are static… |
| 2 | Skin in the Game | Ch. 12 | 6.2964 | In addition, someone without skin in the game—say, a corporate executive with upside and no financial downside… |
| 3 | Skin in the Game | appendix | 6.2846 | The usual solution to this path dependence—if it depends on only ruin—is done by introducing a function of X… |
| 4 | Skin in the Game | Ch. 24 | 6.2418 | Anyone who has survived in the risk-taking business more than a few years has some version of our principle… |
| 5 | Fooled by Randomness | Ch. 9 | 6.0404 | Generate a long series of coin flips producing heads and tails with 50% odds each and fill up sheets of paper… |

**LLM Judge Verdicts:**
| Hit | Verdict | Reason |
|---|---|---|
| 1 | ON-TOPIC | Appendix passage directly about "confusion between the state-space and the temporal" — the ensemble-vs-time-average distinction that is Taleb's core ergodicity framing. |
| 2 | MARGINAL | Adjacent to ergodicity's ruin/absorbing-barrier implications but discusses accountability structures, not the formal concept. |
| 3 | ON-TOPIC | Appendix passage about path dependence and transforming X so ensemble average matches time average — textbook ergodicity treatment. |
| 4 | MARGINAL | "In order to succeed you must first survive" is a consequence of non-ergodicity but does not discuss the concept itself. |
| 5 | MARGINAL | Coin-flip series is an intuitive precursor to ergodicity (trajectory vs. ensemble) but predates Taleb's formal treatment and doesn't use the term. |

**Aggregate:** Top-3 ON-TOPIC: 2/3 | Quality: GOOD

---

## Aggregate Observations

- **Average top-3 relevance**: 8/15 across 5 queries (2/3 for Q1, Q3, Q4, Q5; 0/3 for Q2)
- **Best-performing concept**: "narrative fallacy" and "skin in the game" — both returned clean, book-correct, concept-grounded passages in the top ranks, with the right book dominating all 5 hits.
- **Worst-performing concept**: "via negativa" — zero ON-TOPIC hits in top 3; the canonical chapter (Antifragile Ch. 7-8) did not appear at all. BM25 cannot recover "via negativa" as a phrase if the corpus uses it sparsely or the primary treatment uses the Latin term only in chapter headings.
- **Common failure modes**:
  - Glossary entries surface as false positives when another concept's glossary entry happens to sit nearby (hit 1 for Q2: "Narrative Discipline" glossary chunk outranked every via negativa passage).
  - Mid-chapter mentions of the concept's *consequences* outscore the definitional chapter when the term appears more frequently in adjacent discourse than in the primary treatment (Q3: "antifragile" the word is ubiquitous everywhere, so Ch. 1 is not privileged).
  - For single-word or very common terms ("antifragile"), BM25 saturates across the corpus and loses the ability to distinguish definitional passages from incidental mentions.
- **BM25 vs semantic gap**: The clearest gap is with "via negativa" — a Latin phrase that Taleb uses as a section heading but may paraphrase as "subtractive knowledge" or "removing what is harmful" in body text. BM25 cannot bridge this synonym gap; a semantic/embedding layer would likely recover Ch. 7-8 directly. Similarly, "antifragile" as a single common term provides no IDF signal because it appears in nearly every chunk of the book — semantic search anchored to "definition of antifragile" or "what antifragility means" would outperform here.
- **Recommended use**: MAGI agents should query BM25 selectively:
  - **Use confidently** for multi-word phrases with distinctive lexical signatures ("narrative fallacy", "skin in the game", "ergodicity") — these return reliable, citable results.
  - **Use with caution / supplement** for single-word title concepts ("antifragile") — combine with a chapter-anchored lookup (force Ch. 1 + glossary into context).
  - **Do not rely on BM25 alone** for Latin/foreign-language concept names ("via negativa") or concepts whose canonical treatment uses paraphrase more than the term itself — augment with a semantic search layer or hardcode the chapter reference.

---

## Raw Data
- `.omc/qa/runs/d3-retrieval/q1-search-results.md` — BM25 output for "narrative fallacy"
- `.omc/qa/runs/d3-retrieval/q2-search-results.md` — BM25 output for "via negativa"
- `.omc/qa/runs/d3-retrieval/q3-search-results.md` — BM25 output for "antifragile"
- `.omc/qa/runs/d3-retrieval/q4-search-results.md` — BM25 output for "skin in the game"
- `.omc/qa/runs/d3-retrieval/q5-search-results.md` — BM25 output for "ergodicity"
- `.omc/qa/runs/d3-retrieval/q1-judge.md` — judge verdict for Q1
- `.omc/qa/runs/d3-retrieval/q2-judge.md` — judge verdict for Q2
- `.omc/qa/runs/d3-retrieval/q3-judge.md` — judge verdict for Q3
- `.omc/qa/runs/d3-retrieval/q4-judge.md` — judge verdict for Q4
- `.omc/qa/runs/d3-retrieval/q5-judge.md` — judge verdict for Q5
- `.omc/qa/runs/d3-retrieval/q1-judge-events.jsonl` — full event stream Q1
- `.omc/qa/runs/d3-retrieval/q2-judge-events.jsonl` — full event stream Q2
- `.omc/qa/runs/d3-retrieval/q3-judge-events.jsonl` — full event stream Q3
- `.omc/qa/runs/d3-retrieval/q4-judge-events.jsonl` — full event stream Q4
- `.omc/qa/runs/d3-retrieval/q5-judge-events.jsonl` — full event stream Q5
