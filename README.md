# taleb-pi

Tune [oh-my-pi](https://github.com/can1357/oh-my-pi) into a **Nassim Taleb-style thinking agent** — using antifragility, Via Negativa, Skin in the Game, and the narrative-fallacy critique to reshape how you reason. Code is subordinate to thinking.

> Pure configuration overlay — no fork, no source patches.
> When oh-my-pi releases an update: `bun update -g`, zero merge conflicts.

## Design Principles

- **Via Negativa first**: Every addition must justify itself. Delete before creating. Markdown over TypeScript. Rules over extensions.
- **MAGI tribunal opt-in**: Default mode delivers persistent Taleb framing through `alwaysApply` rules. Type `/magi <question>` to invoke the full 3-agent debate (Empirical Skeptic / Tail-Risk Guardian / Convexity Seeker) for high-stakes decisions.
- **English system prompts, bilingual triggers**: System-level prompts are in English (instruction precision baseline); trigger keywords match both Chinese and English (`决定|值得吗|选择|should I|worth it|risk`).
- **Upstream-clean**: Kernel comes from `@oh-my-pi/pi-coding-agent`; this repo is just the content of `~/.omp/agent/`.

## Install (Windows / Linux / macOS)

oh-my-pi runs on **bun** (not Node).

```bash
# 1. Install bun (one-time)
curl -fsSL https://bun.sh/install | bash      # Linux/macOS
# Windows: irm bun.sh/install.ps1 | iex

# 2. Install oh-my-pi via bun
bun install -g @oh-my-pi/pi-coding-agent

# 3. Point oh-my-pi at this repo
export PI_CODING_AGENT_DIR=/path/to/taleb-pi
# Or symlink: ln -s /path/to/taleb-pi ~/.omp/agent
```

Set up API keys:

```bash
cp .env.example .env
# Edit .env with DEEPSEEK_API_KEY or ANTHROPIC_API_KEY
```

Run:

```bash
omp                              # interactive
omp -p "/magi should I take the new job offer?"   # one-shot tribunal
```

## Repo Structure

```
taleb-pi/
├── SYSTEM.md            # Full system prompt replacement (Taleb worldview)
├── config.yml           # Models, theme, skill/rule toggles
├── .env.example         # API key template
├── rules/               # Always-applied rules + TTSR triggers
│   ├── via-negativa.md
│   ├── antifragility.md
│   ├── skin-in-the-game.md
│   ├── narrative-fallacy.md
│   ├── lindy-effect.md
│   ├── asymmetry-and-exposure.md
│   ├── ergodicity.md            # ensemble vs time average
│   ├── positive-convexity.md    # convex payoff foregrounded
│   ├── cognitive-state-diagnosis.md  # GT0–GT5 framework
│   └── magi-protocol.md         # ~50-token hint to recommend /magi at high-stakes moments
├── skills/              # On-demand thinking skills
│   ├── barbell-analysis/SKILL.md
│   ├── premortem-taleb/SKILL.md
│   ├── convexity-check/SKILL.md
│   ├── fragility-scan/SKILL.md
│   ├── mental-models/SKILL.md       # 4 supplementary models
│   ├── magi-tribunal/SKILL.md       # /magi opt-in flow
│   └── incerto-search/SKILL.md      # BM25 query into the Incerto corpus
├── agents/              # MAGI tribunal members
│   ├── skeptic.md                   # MELCHIOR-1 — Empirical Skeptic
│   ├── pre-mortem.md                # BALTHASAR-2 — Tail-Risk Guardian
│   ├── antifragility-scout.md       # CASPER-3 — Convexity Seeker
│   └── magi-synthesizer.md          # vote classifier (3-0 / 2-1 / 1-1-1)
├── .omc/incerto/                    # BM25-indexed Incerto corpus (built post-deploy)
│   ├── chunks/                       # ~500-token chapter-aware markdown
│   ├── index.json                    # BM25 index
│   ├── query-log.jsonl               # frequency tracker for crystallization
│   └── scripts/search.ts             # query script invoked by incerto-search skill
└── AGENTS.md            # Meta-layer context (when editing this repo itself)
```

## Two Modes

### Default Mode (every turn)

The 8 `alwaysApply` rules inject Taleb framing into every system prompt: Via Negativa, antifragility, skin in the game, narrative-fallacy critique, Lindy effect, asymmetry/exposure, ergodicity, positive convexity. Plus the MAGI recommendation hint that nudges the agent to suggest `/magi` at high-stakes moments. Skills are available on demand (`/skill:<name>`).

### MAGI Tribunal Mode (opt-in via `/magi`)

For high-stakes irreversible decisions, type:

```
/magi <your question>
```

This dispatches the 3-agent tribunal — three Taleb attitudes that disagree by design:

| Agent | Role | Optimization Target |
|---|---|---|
| **MELCHIOR-1** | Empirical Skeptic | falsifiability, evidence quality, narrative fallacy |
| **BALTHASAR-2** | Tail-Risk Guardian | survival, ruin avoidance, via negativa |
| **CASPER-3** | Convexity Seeker | asymmetric payoff, optionality, antifragility |

Each runs in parallel, then a rebuttal round, then a synthesizer presents the verdict (3-0 / 2-1 / 1-1-1). Designed for ~75% directional disagreement: when all three agree, the answer is high-signal; when they split, the disagreement structure IS the insight.

## Stay Upstream

```bash
bun update -g @oh-my-pi/pi-coding-agent   # kernel update
git -C /path/to/taleb-pi pull             # config update (if hosted)
```

Kernel and config are decoupled — kernel updates never touch this repo.
