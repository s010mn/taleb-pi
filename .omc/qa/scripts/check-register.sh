#!/bin/bash
# PM5 hedge-regex check: catches over-flattened English translations.
# Counts unjustified hedges; ≤2 per file is acceptable, >2 fails.
# Usage: ./check-register.sh <file>...
set -euo pipefail

# Hedges that flatten Taleb register (allow ≤2 per file as some are unavoidable)
HEDGES='\b(perhaps|maybe|might consider|could be|it could be helpful|try to|sort of|kind of|somewhat|fairly|relatively|tend to|usually|generally speaking|in some cases|to some extent|arguably)\b'

fail=0
for f in "$@"; do
  if [[ ! -f "$f" ]]; then
    echo "FAIL: $f does not exist"
    fail=1
    continue
  fi
  count=$(grep -oiE "$HEDGES" "$f" 2>/dev/null | wc -l || true)
  count=${count:-0}
  if (( count > 2 )); then
    echo "FAIL: $f has $count hedge phrases (max 2)"
    grep -niE "$HEDGES" "$f" | head -5
    fail=1
  else
    echo "PASS: $f ($count hedges, max 2)"
  fi
done
exit $fail
