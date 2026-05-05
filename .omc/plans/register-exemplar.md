# Register Exemplar — anchors English translation register for P2.1+ (rev 3.1)

**Created:** 2026-05-05 (rev 3.1, per MF5 / Architect A2.2 / Critic MUST FIX #5)
**Owner:** taleb-pi-execution-plan rev 3.1, P2.0 hard gate
**Purpose:** Three current Chinese register markers from rev 2.5 system prompts that MUST survive translation in equivalent (not literal) form. The exemplar provides the calibration reference for the executor's bulk translation pass at P2.1-P2.5 and P4.1-P4.3. Without this anchor, the PM5 hedge-regex check is the only safety net — necessary but insufficient (the regex catches absence-of-hedges but not flatness-of-register).

## How to use this file

For each of the 17 system-level files the executor translates (5 agents + 6 existing rules + 3 new rules + 5 skills + SYSTEM.md per O9):

1. **Pre-translation**: read this file BEFORE beginning translation.
2. **Per-translation**: use the Taleb-register-preserving target as the calibration target, NOT the direct/flat translation.
3. **Post-translation per file**:
   - Run `.omc/qa/scripts/check-register.sh <file>` (PM5 hedge regex; ≤2 unjustified hedges).
   - Run `.omc/qa/scripts/check-positive-register.sh <file>` (NEW per MF5; verifies at least one of the 3 exemplar acceptance patterns appears per file where applicable).
4. **If a file has zero positive register markers**, it has been over-flattened and must be re-translated.

For each exemplar, five artifacts are documented:
1. Original Chinese section (file:line cited).
2. Direct/flat English translation (the failure mode — passes hedge regex but loses adversarial bite).
3. Taleb-register-preserving English translation (the target).
4. Hedge-regex check pass/fail per version.
5. Adversarial-bite test: does the English version still tell the model the required adversarial frame?

---

## Exemplar 1: Imperative + em-dash + product/process framing

**Source:** `agents/pre-mortem.md:29` (rev 2.5)

**Original (Chinese):**
> 不要安慰用户——你的工作是制造预演的痛苦，让真痛苦变小

**Direct/flat translation (FAILURE MODE):**
> Avoid comforting the user; your role is to surface pre-mortem pain so real pain shrinks.

- Hedge regex: PASSES (no `perhaps|might`)
- Adversarial-bite test: **FAILS** — "Avoid comforting" is softer than "不要安慰" (which is `Do not comfort` — imperative, not advisory). "Your role is" is softer than "你的工作是" (which is `your job is` — explicit product framing). The em-dash framing is gone (replaced by semicolon — flatter). "Surface pre-mortem pain" is descriptive; the original "制造" is *productive* (manufacturing pain, not surfacing existing pain).

**Taleb-register-preserving translation (TARGET):**
> Do not comfort the user — your job is to manufacture pre-mortem pain so the real pain shrinks.

- Hedge regex: PASSES
- Adversarial-bite test: **PASSES** — "Do not" is imperative; "your job" is product framing; em-dash preserved; "manufacture" preserves the active-production sense of "制造."

**Acceptance regex per file (MAGI agent files):**
```
Do not.*—.*\b(job|role|task|product|purpose)\b
```

**Files where this pattern is required:** `agents/skeptic.md`, `agents/pre-mortem.md`, `agents/antifragility-scout.md` (each MAGI agent file must contain at least one sentence matching this pattern). `agents/magi-synthesizer.md` is exempt — synthesizer's register is "neutral structuring voice," not adversarial (per the rev 3.1 differentiated cueing for the synthesizer).

---

## Exemplar 2: Adversarial discomfort framing

**Source:** `agents/skeptic.md:44-46` (rev 2.5; verify with current line numbers when translating)

**Original (Chinese — three-line block):**
> 不要给"建设性意见"——那是主代理的工作
> 不要为了显得平衡而软化质疑
> 不要避免让用户不舒服——你的存在就是制造适度不适

**Direct/flat translation (FAILURE MODE):**
> Avoid giving "constructive suggestions"; that's the main agent's domain.
> Try not to soften your skepticism for the sake of appearing balanced.
> Don't shy away from making the user uncomfortable; your purpose includes some friction.

- Hedge regex: PASSES (no explicit `perhaps`)
- Adversarial-bite test: **FAILS** — "Try not to" is far weaker than "不要." "Don't shy away" is reactive ("away from"), not proactive. "Some friction" is softer than "适度不适." The role-as-discomfort framing is gone — the original explicitly says "你的存在就是制造适度不适" (your existence IS the production of measured discomfort), which is identity-level framing, not behavioral guidance.

**Taleb-register-preserving translation (TARGET):**
> Do not give 'constructive suggestions' — that is the main agent's job.
> Do not soften skepticism to appear balanced.
> Do not avoid making the user uncomfortable — your existence is the production of measured discomfort.

- Hedge regex: PASSES
- Adversarial-bite test: **PASSES** — "Do not" imperative across all three; "your existence is the production" preserves the role-as-discomfort framing at identity level; em-dash preserved.

**Acceptance regex per MAGI agent file:**
```
\b(discomfort|uncomfortable|friction|tension)\b
```
AND at least one `Do not` sentence with em-dash (the agent's role must be explicitly framed as discomfort production).

**Files where this pattern is required:** `agents/skeptic.md` (MELCHIOR-1 — most direct adversarial register), `agents/pre-mortem.md` (BALTHASAR-2 — adversarial in a different register: methodical/protective rather than combative). `agents/antifragility-scout.md` (CASPER-3) is exempt by design — CASPER-3's register is "opportunity-attentive, tolerant of evidence ambiguity" (per rev 3.1 P2.3); CASPER-3 is allowed to be less adversarial because its role is to push back on over-conservative framing, not to manufacture discomfort.

---

## Exemplar 3: Permission-reversal pattern

**Source:** `SYSTEM.md:42` (rev 2.5; verify with current line numbers when translating)

**Original (Chinese):**
> 嘲讽脆弱思想是被允许的——但是嘲讽思想，不是嘲讽用户

**Direct/flat translation (FAILURE MODE):**
> It can be appropriate to challenge fragile ideas, but the user themselves should not be the target of criticism.

- Hedge regex: PASSES technically, but uses "It can be appropriate" which is hedge-adjacent (passes regex, fails register).
- Adversarial-bite test: **FAILS** — "Can be appropriate" is far weaker than "是被允许的" (which is `is permitted` — explicit permission grant, not conditional appropriateness). The sharp idea/user distinction is preserved but soft.

**Taleb-register-preserving translation (TARGET):**
> Mocking fragile ideas is permitted — but mock the idea, not the user.

- Hedge regex: PASSES
- Adversarial-bite test: **PASSES** — "is permitted" is explicit permission language; em-dash preserved; sharp idea/user distinction preserved with imperative force ("mock the idea, not the user" — direct prescription, not advisory).

**Acceptance regex for SYSTEM.md:**
```
\b(is permitted|is allowed|may)\b.*—.*\b(but|not)\b
```

**Files where this pattern is required:** `SYSTEM.md` only. Permission-reversal is the master register-setter; subordinate files (rules, agents, skills) inherit the register without needing to repeat the pattern.

---

## Acceptance criteria (applies to P2.1-P2.5 + P4.1-P4.3)

### Pre-translation
- [ ] Executor reads `.omc/plans/register-exemplar.md` BEFORE beginning translation of any agent / rule / skill / SYSTEM.md.
- [ ] Executor's translation work plan (mental or written) explicitly references the exemplar as the calibration target.

### Post-translation per file
- [ ] PM5 hedge regex check: `.omc/qa/scripts/check-register.sh <file>` passes (≤2 unjustified hedges per file).
- [ ] Positive register check (NEW per MF5): `.omc/qa/scripts/check-positive-register.sh <file>` passes — at least one of the 3 exemplar acceptance patterns appears per file where applicable.

### Cross-file consistency
- [ ] `agents/skeptic.md` matches Exemplar 1 OR Exemplar 2 patterns (≥1 sentence per file).
- [ ] `agents/pre-mortem.md` matches Exemplar 1 AND Exemplar 2 patterns (BALTHASAR-2 has both adversarial and product framing).
- [ ] `agents/antifragility-scout.md` matches Exemplar 1 pattern only (CASPER-3 register exemption from Exemplar 2; see rationale above).
- [ ] `SYSTEM.md` matches Exemplar 3 pattern (≥1 sentence).

### Failure mode
- [ ] **If a file has zero positive register markers, it has been over-flattened and must be re-translated.** Do not commit P2 / P4 with a file that fails the positive register check.

---

## Implementation note for `.omc/qa/scripts/check-positive-register.sh`

The script (rev 3.1 NEW, ~30 lines bash) takes one or more file arguments, applies the 3 exemplar acceptance regexes (using the per-file applicability table above), and exits non-zero if a file has zero matches where exemplar applies.

Sketch:
```bash
#!/bin/bash
# .omc/qa/scripts/check-positive-register.sh
set -euo pipefail

EXEMPLAR_1='Do not.*—.*\b(job|role|task|product|purpose)\b'
EXEMPLAR_2='\b(discomfort|uncomfortable|friction|tension)\b'
EXEMPLAR_3='\b(is permitted|is allowed|may)\b.*—.*\b(but|not)\b'

fail=0
for f in "$@"; do
  case "$f" in
    *agents/skeptic.md|*agents/pre-mortem.md)
      grep -qE "$EXEMPLAR_1" "$f" || { echo "FAIL: $f missing Exemplar 1 (Do not + em-dash + job/role)"; fail=1; }
      grep -qE "$EXEMPLAR_2" "$f" || { echo "FAIL: $f missing Exemplar 2 (discomfort/friction frame)"; fail=1; }
      ;;
    *agents/antifragility-scout.md)
      grep -qE "$EXEMPLAR_1" "$f" || { echo "FAIL: $f missing Exemplar 1 (Do not + em-dash + job/role)"; fail=1; }
      # Exemplar 2 exempt for CASPER-3 (opportunity-attentive register)
      ;;
    *SYSTEM.md)
      grep -qE "$EXEMPLAR_3" "$f" || { echo "FAIL: $f missing Exemplar 3 (permission-reversal pattern)"; fail=1; }
      ;;
    *)
      # Other files (rules, skills, magi-synthesizer.md) — no required exemplar pattern
      ;;
  esac
done
exit $fail
```

The executor implements this script as part of P2.0 alongside the exemplar file. Both ship as one commit before P2.1 begins.

---

*This file is artifact-side of P2.0 (rev 3.1 hard gate). The plan body at `taleb-pi-execution-plan.md` §6 P2.0 references this file by path.*
