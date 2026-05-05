#!/bin/bash
# Verify each translated file preserves at least one Taleb-register exemplar pattern.
# Exits non-zero if any file fails its required pattern.
# Usage: ./check-positive-register.sh agents/skeptic.md agents/pre-mortem.md ...
set -euo pipefail

EXEMPLAR_1='Do not.*—.*\b(job|role|task|product|purpose)\b'
EXEMPLAR_2='\b(discomfort|uncomfortable|friction|tension)\b'
EXEMPLAR_3='\b(is permitted|is allowed|may)\b.*—.*\b(but|not)\b'

fail=0
for f in "$@"; do
  if [[ ! -f "$f" ]]; then
    echo "FAIL: $f does not exist"
    fail=1
    continue
  fi
  case "$f" in
    *agents/skeptic.md|*agents/pre-mortem.md)
      grep -qE "$EXEMPLAR_1" "$f" || { echo "FAIL: $f missing Exemplar 1 (Do not + em-dash + job/role)"; fail=1; }
      grep -qE "$EXEMPLAR_2" "$f" || { echo "FAIL: $f missing Exemplar 2 (discomfort/friction frame)"; fail=1; }
      ;;
    *agents/antifragility-scout.md)
      grep -qE "$EXEMPLAR_1" "$f" || { echo "FAIL: $f missing Exemplar 1 (Do not + em-dash + job/role)"; fail=1; }
      # Exemplar 2 exempt for CASPER-3 (opportunity-attentive register, not adversarial discomfort)
      ;;
    *SYSTEM.md)
      grep -qE "$EXEMPLAR_3" "$f" || { echo "FAIL: $f missing Exemplar 3 (permission-reversal pattern)"; fail=1; }
      ;;
    *)
      # rules/, skills/, magi-synthesizer.md — no required exemplar pattern
      ;;
  esac
  [[ $fail -eq 0 ]] && echo "PASS: $f"
done
exit $fail
