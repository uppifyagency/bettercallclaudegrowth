# Changelog

All notable changes to this project are documented here.
Format based on [Keep a Changelog](https://keepachangelog.com/it/1.1.0/);
this project adheres to [Semantic Versioning](https://semver.org/lang/it/).

## [0.3.0] - 2026-06-08

### Added
- **`gtm-buddy` router** (agent + `/gtm-buddy` command): a buddy-style concierge that classifies archetype × stage and routes to the right single skill or sequence, with optional automatic execution. Recommended entry point.
- **Playbooks per archetype/stage** in `playbooks/`: `_index.md` (routing matrix), `coaching-services`, `b2b-saas`, `b2c-product`, `local-service`, `established-no-marketing`, `micro-launch`. They define the sequence, primary channel, emphasis, what to skip, and the North Star KPI for each case.
- **Adaptive `/gtm` pipeline**: a new Phase 0 for archetype/stage classification; the 7 phases are calibrated by the playbook (short path for a micro-launch, initial audit for established companies).
- **GTM Readiness Score 0-100**: a per-phase rubric in the orchestrator + severity mapping in the critic; deterministic `gtm-readiness-score.js` script.
- **PERCEIVE → ANALYZE → VALIDATE → ACT synthesis** with falsifiability conditions for each recommendation, before the deliverable.
- **Deterministic scripts** (Node, zero-dep) in `scripts/`: `cfa-calculator.js` (LTGP:CAC, Client-Financed Acquisition), `value-equation-score.js`, `gtm-readiness-score.js`, `gtm-plan-lint.js`. Each with `--selftest`.
- **Content integrity validator** `scripts/validate-content.js`: residual placeholders, command↔skill referential integrity, referenced agents, playbook links, script selftests, counts vs README. Run in CI.
- Extended `userConfig`: `archetype` and `stage` (default `auto`); `default_channel` now also accepts `auto`.
- Enriched manifests (keywords, full author, `$schema`); resolved the `<...>` placeholders.

### Changed
- `gtm-orchestrator` rewritten as an adaptive orchestrator with scoring and synthesis.
- `gtm-critic` now respects `userConfig.output_language` (it was English-only) and proposes its contribution to the GTM Readiness Score.
- All commands/agents invoke the skills **by name** (auto-activation via `description`): removed both the bare `/skill` slash (invalid in a plugin) and the relative `skills/<name>/SKILL.md` paths (they resolve against the user's cwd and break). Bundled non-skill files (playbooks, scripts) are read via `${CLAUDE_PLUGIN_ROOT}` with Bash; `gtm-orchestrator` and `gtm-buddy` therefore have the `Bash` tool. The `validate-content.js` validator now forbids the fragile `skills/.../SKILL.md` paths in bodies.
- Added an optional `gtm-critic` red-team to all specialists that lacked one (consistent coverage).
- Totals: 9 skills, **11 commands** (`/gtm-buddy` + `/gtm` + 9 specialists), **3 agents**. Versions aligned to 0.3.0.

## [0.2.0] - 2026-06-08

### Added
- `christensen-jobs` skill (Jobs to Be Done from *Competing Against Luck*, Clayton M. Christensen et al.) — the **demand-side** layer upstream of the funnel: the customer's job (progress + circumstance), functional/social/emotional dimensions, Forces of Progress, Big/Little Hire, job spec → résumé.
- `/gtm-jobs` specialist command.
- The `/gtm` pipeline now opens Phase 1 with Jobs to Be Done (`christensen-jobs`) before positioning/ICP; updated `gtm-orchestrator`.

### Changed
- Totals: 9 skills, 10 commands (`/gtm` + 9 specialists). Versions aligned to 0.2.0.

## [0.1.0] - 2026-06-08

### Added
- Claude Code plugin structure (marketplace + plugin) installable via `/plugin marketplace add`.
- 8 GTM skills: `butcher-productize`, `hormozi-offers`, `hormozi-leads`, `doing-content-right`, `drew-sucks-framework`, `advanced-email-marketing`, `seo-2026-sota`, `instagram-performance-marketing`.
- 2 agents: `gtm-orchestrator` (pipeline) and `gtm-critic` (adversarial review).
- 9 commands: `/gtm` (full pipeline) + 8 specialist commands (one per skill).
- Validator (`scripts/validate-plugin.js`) and GitHub Actions CI.
