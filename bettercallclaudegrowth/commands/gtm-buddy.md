---
description: GTM concierge. Describe your situation and it tells you where to start: the single right skill or the ordered sequence of commands to run, calibrated to your archetype (coaching, B2B SaaS, B2C, local, established business) and stage (micro-launch, scaling, established). Recommended entry point if you don't know where to begin.
argument-hint: describe your situation (e.g. "I'm launching a nutrition coaching business, starting from scratch" or "I have a B2B HR SaaS, 50 trials/month, I want to grow")
---

# /gtm-buddy — where do I start?

The plugin's entry point when you **don't know which command to use**. Describe your situation and get a tailored path: a single skill or the right sequence.

User input: $ARGUMENTS

## What to do

1. **Classify and route.** Launch the **gtm-buddy** agent, passing it `$ARGUMENTS` and the entire `userConfig`. The agent reads `playbooks/_index.md` + the archetype playbook, classifies **archetype × stage** (asking at most 1 disambiguation question if needed), and returns the recommendation in the format: Situation · What you do now (single skill or ordered sequence) · Why · Primary channel + emphasis/what to skip · First action.

2. **Present the recommendation** to the user as-is, and close with the choice:
   - **"I'll run the sequence automatically"**, or
   - **"Run a single step"**, or
   - **"Full orchestrated pipeline"** (`/gtm`).

3. **Execution** — handled by the **main thread**, not the `gtm-buddy` agent (which is a read-only router and does not write deliverables). Three paths:
   - **Full auto-execution / "do everything for me"** → delegate to **`/gtm $ARGUMENTS`**. The `gtm-orchestrator` agent (which has Write and Bash) runs the phases with cumulative context, the `gtm-critic` checkpoints, the **GTM Readiness Score** computed with the deterministic scripts, and writes `gtm-plan.md`. This is the recommended path for end-to-end automatic execution.
   - **Tailored sub-sequence** (not the full pipeline, e.g. only `gtm-jobs → gtm-offer → gtm-copy`) → the main thread launches the recommended individual `/gtm-*` commands in order, carrying the context forward step by step and invoking `gtm-critic` at the playbook checkpoints. For the score of a sub-sequence use `node "${CLAUDE_PLUGIN_ROOT}/scripts/gtm-readiness-score.js" …`.
   - **A single step** → confirm the single command (e.g. `/gtm-offer …`) and stop.

## Principle
gtm-buddy **does not replace** the specialist commands or the orchestrator: it **coordinates** them. For zero-state or messy situations it is the most reliable way to avoid taking the wrong path. Never impose the 7-phase pipeline on someone in micro-launch: give the shortest path that works.
