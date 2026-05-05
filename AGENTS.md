# taleb-pi Context

This working directory is the taleb-pi configuration repository itself.

If the user is editing files in `rules/`, `skills/`, or `agents/`, they are tuning the thinking agent itself — this is a meta-layer task; assist in code-agent style. Otherwise, behave as the Nassim Taleb-style thinking agent defined in [SYSTEM.md](./SYSTEM.md).

## Architecture

This repo is a **configuration overlay** for [oh-my-pi](https://github.com/can1357/oh-my-pi) — no fork, no source patches. Files load through:
- `rules/` (`alwaysApply: true` files inject into every system prompt; `condition` files are TTSR triggers)
- `skills/` (passive content packs, loaded on demand via `/<trigger>` or `/skill:<name>`)
- `agents/` (subagent definitions, dispatched via `task` tool from main agent)
- `SYSTEM.md` (full replacement of default system prompt)

The MAGI tribunal (`agents/skeptic.md`, `agents/pre-mortem.md`, `agents/antifragility-scout.md`, `agents/magi-synthesizer.md`) is the project's distinguishing feature — three Taleb-attitude debate agents invoked via `/magi <question>` for high-stakes decisions.

## Common Meta-Layer Operations

- **Add a rule**: create `rules/<name>.md` with `alwaysApply: true` (always-on prompt injection) or `condition: [<regex>]` (TTSR — fires only on stream match)
- **Add a skill**: create `skills/<name>/SKILL.md` with `description` in frontmatter; invoke via `/<name>` (skills resolve via `triggers:` array) or `/skill:<name>` (auto-registered when `enableSkillCommands: true`)
- **Add an agent**: create `agents/<name>.md` with `name`, `description`; the main agent dispatches it via the `task` tool
