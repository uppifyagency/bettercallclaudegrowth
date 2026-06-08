# BetterCallClaudeGrowth — Design Document

**Status**: design proposal — to be approved before scaffolding the code
**Date**: 2026-06-08
**Reference model**: `bettercallclaude_italia` (5-level Claude Code plugin architecture)
**Profile**: *lean* — orchestration pipeline + 2 agents, no MCP, no hooks

> Working name: **bettercallclaudegrowth**. It's a parameter: it can be renamed to `bettercallgrowth`, `antygravity-gtm`, `growth-stack`… with no structural impact. In this document I use `bettercallclaudegrowth` everywhere.

---

## 1. Goal

Turn the 9 marketing skills already produced (knowledge bases extracted from the books) into an **installable and distributable Claude Code plugin**, which works like `bettercallclaude_italia` but for **Go-To-Market**: a GTM consultant that chains jobs → positioning → offer → leads → content → channels → email → measurement.

Guiding principle (the senior engineer's discipline):
1. **Separation of concerns** — the skills stay pure knowledge; the commands are thin orchestration; no knowledge duplicated in the commands.
2. **Start lean** — 2 agents, not 20. The orchestrator and the critic. The others earn their place in the field.
3. **Packaging discipline** — a single version aligned across 3 files, validated in CI, semver.

### What we do NOT build (and why)
| bettercallclaude component | Do we replicate it? | Reason |
|---|---|---|
| 7 MCP servers (Cassazione, Normattiva…) | ❌ No | GTM runs entirely on the books' knowledge, locally. No authoritative external data to query. Zero infrastructure. |
| Privacy hook (`privacy-check.js`) | ❌ No | No professional secret to protect. No guardrail needed. |
| Custom TypeScript MCP server (ollama) | ❌ No | No need for local inference. |
| 20 agents | ❌ No | Only 2 (orchestrator + critic). |

Result: a plugin **simpler and more robust** than the model — no server to maintain, no network dependency.

---

## 2. Mapping skills → GTM funnel

| Skill (existing) | GTM phase | Dedicated command |
|---|---|---|
| `butcher-productize` | Positioning / Personal Monopoly | `/gtm-positioning` |
| `hormozi-offers` | Offer (Grand Slam, Value Equation) | `/gtm-offer` |
| `hormozi-leads` | Lead generation (Core Four) | `/gtm-leads` |
| `doing-content-right` | Content / audience / niche | `/gtm-content` |
| `drew-sucks-framework` | Copy & persuasion (SUCKS) | `/gtm-copy` |
| `advanced-email-marketing` | Email automation & nurturing | `/gtm-email` |
| `seo-2026-sota` | Channel: SEO / GEO 2026 | `/gtm-seo` |
| `instagram-performance-marketing` | Channel: Meta / IG ads | `/gtm-instagram` |

> Excluded from the plugin (non-GTM): `secure-source-code`, `book-to-skill`.

1:1 mapping skill → command, **plus** an orchestrator command `/gtm` that chains them all.

---

## 3. Repository structure (standalone, pushable to GitHub)

```
bettercallclaudegrowth/                              ← GitHub repo root
├─ .claude-plugin/
│  └─ marketplace.json                  ← showcase: 1 installable plugin
├─ package.json                         ← version + metadata
├─ README.md                            ← what it does + how to install
├─ LICENSE
├─ CHANGELOG.md
├─ scripts/
│  └─ validate-plugin.js                ← CI: schema + version alignment
├─ .github/
│  └─ workflows/
│     └─ ci.yml                         ← runs validate-plugin on every push
└─ bettercallclaudegrowth/                           ← THE PLUGIN (source: ./bettercallclaudegrowth)
   ├─ .claude-plugin/
   │  └─ plugin.json                    ← manifest + userConfig
   ├─ README.md
   ├─ agents/
   │  ├─ gtm-orchestrator.md
   │  └─ gtm-critic.md
   ├─ commands/
   │  ├─ gtm.md                         ← full PIPELINE
   │  ├─ gtm-jobs.md
   │  ├─ gtm-positioning.md
   │  ├─ gtm-offer.md
   │  ├─ gtm-leads.md
   │  ├─ gtm-content.md
   │  ├─ gtm-copy.md
   │  ├─ gtm-email.md
   │  ├─ gtm-seo.md
   │  └─ gtm-instagram.md
   └─ skills/                           ← the 9 skills COPIED here (self-contained plugin)
      ├─ christensen-jobs/
      ├─ butcher-productize/
      ├─ hormozi-offers/
      ├─ hormozi-leads/
      ├─ doing-content-right/
      ├─ drew-sucks-framework/
      ├─ advanced-email-marketing/
      ├─ seo-2026-sota/
      └─ instagram-performance-marketing/
```

**Double level `bettercallclaudegrowth/bettercallclaudegrowth/`** = identical to the model: the outer level is the *showcase* (marketplace), the inner one is the actual *plugin* (`source: ./bettercallclaudegrowth`). It enables `/plugin marketplace add <repo>` → `/plugin install bettercallclaudegrowth`.

> The skills are **copied** into `bettercallclaudegrowth/skills/`. The originals in `Book to Skill/.claude/skills/` remain as backup/source. A future note: to avoid drift, the only "live" copy will be the one in the plugin.

---

## 4. Configuration files specification

### 4.1 `.claude-plugin/marketplace.json`
```json
{
  "name": "bettercallclaudegrowth-marketplace",
  "owner": { "name": "Uppify Agency", "email": "email.vlad.vrinceanu@gmail.com" },
  "plugins": [
    {
      "name": "bettercallclaudegrowth",
      "description": "GTM Intelligence — positioning, irresistible offers (Hormozi), lead generation, copy (SUCKS), content, SEO/GEO 2026, email automation and Instagram performance, orchestrated in a complete go-to-market pipeline.",
      "version": "0.1.0",
      "source": "./bettercallclaudegrowth",
      "author": { "name": "<NOME>" },
      "homepage": "https://github.com/<USER>/bettercallclaudegrowth",
      "repository": "https://github.com/<USER>/bettercallclaudegrowth",
      "license": "MIT",
      "category": "marketing"
    }
  ]
}
```

### 4.2 `bettercallclaudegrowth/.claude-plugin/plugin.json`
```json
{
  "name": "bettercallclaudegrowth",
  "version": "0.1.0",
  "description": "Go-To-Market consultant: jobs→positioning→offer→leads→content→channels→email→measurement pipeline, based on 9 marketing frameworks (Christensen Jobs to Be Done, Hormozi, Drew, Butcher, Frangioni, SEO/GEO 2026, Instagram performance).",
  "author": { "name": "<NOME>" },
  "userConfig": {
    "output_language": {
      "type": "string", "title": "Output language",
      "description": "Preferred language for outputs. IT or EN.",
      "default": "IT", "sensitive": false
    },
    "industry": {
      "type": "string", "title": "Industry / market",
      "description": "Default industry of the business (e.g. B2B SaaS, fashion e-commerce, local services). Anchors the answers to context.",
      "default": "", "sensitive": false
    },
    "default_channel": {
      "type": "string", "title": "Primary channel",
      "description": "Preferred distribution channel: seo | instagram | email | all.",
      "default": "tutti", "sensitive": false
    },
    "brand_voice": {
      "type": "string", "title": "Tone of voice",
      "description": "Brand tone for copy and content (e.g. direct, authoritative, ironic).",
      "default": "", "sensitive": false
    }
  }
}
```
> Note: `plugin.json` does NOT explicitly list commands/agents/skills — they are **auto-discovered** from the conventional folders (`commands/`, `agents/`, `skills/`), exactly as in the model.

### 4.3 `package.json` (root)
```json
{
  "name": "bettercallclaudegrowth",
  "version": "0.1.0",
  "description": "GTM Intelligence plugin for Claude Code",
  "license": "MIT",
  "scripts": { "validate": "node scripts/validate-plugin.js" }
}
```

### 4.4 `scripts/validate-plugin.js` — checklist (ported from the model)
Runs in CI and locally. Verifies:
- These exist: `.claude-plugin/marketplace.json`, `bettercallclaudegrowth/.claude-plugin/plugin.json`, `package.json`, folders `bettercallclaudegrowth/agents`, `bettercallclaudegrowth/commands`, `bettercallclaudegrowth/skills`.
- `marketplace.json`: `name` present; `plugins[]` not empty; every plugin has `name/version/source/repository/license`; `source` starts with `./`.
- `plugin.json`: `name/version/description` present.
- **Version alignment**: `marketplace.json` ↔ `plugin.json` ↔ `package.json` identical (fails if they diverge).
- Every folder in `skills/` contains a `SKILL.md`.
- Every file in `commands/` and `agents/` has valid YAML frontmatter with `description`.

---

## 5. The 2 agents

Format (from the model): `.md` file with `name`, `description`, `model`, `tools` frontmatter. They are subagents invoked by the commands.

### 5.1 `agents/gtm-orchestrator.md`
```yaml
---
name: gtm-orchestrator
description: "Go-To-Market orchestrator. Drives the complete GTM pipeline, sequences the phases, maintains context between one phase and the next, and applies the right skill for each phase."
model: sonnet
tools: [Read, Grep, Glob, Write]
---
```
**Responsibilities**
- Receives the business context (product, ICP, goal) as input.
- Runs the 7 phases in sequence (see §7), applying for each the relevant skill(s) (it reads them from `skills/`).
- Maintains a shared state: what phase N produces feeds phase N+1.
- Invokes `gtm-critic` at the checkpoints (offer, final funnel).
- Produces a single deliverable: `gtm-plan.md` in the user's working dir.

### 5.2 `agents/gtm-critic.md`
```yaml
---
name: gtm-critic
description: "Adversarial GTM reviewer. Red-teams the offer (weak points of the Value Equation), the funnel (leak points), the positioning and the copy. Returns concrete, actionable critiques, not praise."
model: sonnet
tools: [Read, Grep, Glob]
---
```
**Responsibilities** (the equivalent of the legal `contraddittorio` — the differentiator)
- On the **offer**: applies Hormozi's Value Equation in reverse — where is the dream weak, the perceived likelihood low, the time/effort high? Do prices, guarantees, scarcity hold up?
- On the **funnel**: where does it lose leads? Message consistency offer↔channel↔email? Frictions?
- On the **positioning**: is it truly differentiated (Personal Monopoly) or generic?
- Output: a list of weaknesses classified (Critical / Medium / Minor) + a proposed fix for each.

---

## 6. The commands

Format (from the model): `.md` files in `commands/` with frontmatter (`description`, `argument-hint`, opt. `allowed-tools`, `model`). Command name = file name. Invoked as `/bettercallclaudegrowth:<name>`.

### 6.1 Specialist command — template (worked example: `gtm-offer.md`)
```yaml
---
description: "Builds an irresistible offer (Grand Slam Offer) applying the frameworks of $100M Offers."
argument-hint: "[product/service + context, e.g. 'online photography course for beginners']"
---

# /gtm-offer — Grand Slam Offer

Apply the **hormozi-offers** skill to build the offer.

1. Read the `hormozi-offers` skill (SKILL.md + cheatsheet/patterns if needed).
2. Given the user input ($ARGUMENTS) and the `industry` from userConfig:
   - Identify the market (Starving Crowd).
   - Build the Value Equation: maximize Dream Outcome + Perceived Likelihood; minimize Time Delay + Effort/Sacrifice.
   - Add scarcity, urgency, bonuses, guarantee.
   - Name the offer.
3. (Optional) invoke the `gtm-critic` agent to red-team the offer.
4. Output: structured offer spec + the critic's fixes.
```
The other 6 specialist commands follow the same template, changing skill and logic:

| Command | Applied skill | Output |
|---|---|---|
| `/gtm-positioning` | `butcher-productize` | ICP, positioning, Personal Monopoly |
| `/gtm-leads` | `hormozi-leads` | Core Four plan (warm/cold/content/ads) + lead magnet |
| `/gtm-content` | `doing-content-right` | Content/niche strategy + calendar |
| `/gtm-copy` | `drew-sucks-framework` | Copy (email, landing, posts) following SUCKS |
| `/gtm-email` | `advanced-email-marketing` | Automation workflow (welcome/drip/winback) |
| `/gtm-seo` | `seo-2026-sota` | SEO/GEO 2026 plan |
| `/gtm-instagram` | `instagram-performance-marketing` | Meta/IG campaign setup |

### 6.2 Pipeline command — `gtm.md` (the product)
```yaml
---
description: "Complete GTM pipeline: positioning → offer → leads → content/copy → channels → email → measurement. Produces a complete go-to-market plan."
argument-hint: "[business description: product, target, goal]"
---
```
The body delegates to the `gtm-orchestrator` agent, passing it `$ARGUMENTS` + userConfig, which runs the 7 phases of §7.

---

## 7. The `/gtm` pipeline (orchestration — the core)

Direct equivalent of the model's `legale-5step`. 7 sequential phases; each phase applies a skill and feeds the next; 2 critic checkpoints.

```
1. POSITIONING & ICP         (butcher-productize)
        ↓  who we are, for whom, why us (Personal Monopoly)
2. OFFER                     (hormozi-offers)        ──► [CRITIC: red-team offer]
        ↓  Grand Slam Offer anchored to the ICP
3. LEAD GENERATION           (hormozi-leads)
        ↓  Core Four + lead magnet consistent with the offer
4. CONTENT & COPY            (doing-content-right + drew-sucks-framework)
        ↓  content engine + persuasive copy
5. CHANNELS                  (seo-2026-sota | instagram-performance-marketing)
        ↓  distribution on the chosen channel (default_channel)
6. EMAIL & NURTURING         (advanced-email-marketing)
        ↓  automation to convert the leads
7. MEASURE & ITERATE         (KPI, loop)             ──► [CRITIC: red-team funnel]
        ↓
   DELIVERABLE: gtm-plan.md
```

**Flow rules**
- Each phase receives the cumulative context from the previous phases (the offer constrains the lead magnets; the positioning constrains the copy; etc.).
- Phase 5 chooses the channel from `default_channel` (or all).
- The critic's checkpoints are "soft" binding: they expose the weaknesses, the user decides whether to iterate.
- Final output: a single `gtm-plan.md` structured by phase, written in the working dir.

---

## 8. Installation and distribution

**For the author (push):**
```
git init && git add . && git commit -m "feat: bettercallclaudegrowth v0.1.0"
git remote add origin https://github.com/<USER>/bettercallclaudegrowth.git
git push -u origin main
```

**For the end user (install):**
```
/plugin marketplace add <USER>/bettercallclaudegrowth
/plugin install bettercallclaudegrowth
```
Then: `/gtm <business description>` for the pipeline, or the individual `/gtm-offer`, `/gtm-seo`, etc.

**CI** (`.github/workflows/ci.yml`): on every push it runs `npm run validate` → blocks the merge if versions are misaligned or the schema is broken.

---

## 9. Versioning

Semver. A **single** version across 3 files (`marketplace.json`, `plugin.json`, `package.json`), kept aligned by `validate-plugin.js`. Start at `0.1.0`. Bump:
- patch: fix of a command/skill;
- minor: new command or channel;
- major: change of pipeline structure.

---

## 10. Open decisions (to confirm at build time)

1. **Plugin/repo name**: `bettercallclaudegrowth` (default) vs `bettercallgrowth` / `antygravity-gtm` / other.
2. **License**: MIT (proposed) vs other. The skills derive from third-party books → assess whether the repo should be public or private (see copyright note below).
3. **GitHub `<USER>` and author `<NOME>`** to fill into the manifests.
4. **Channel granularity in phase 5**: a single channel per run (from `default_channel`) or all three in parallel in the plan.

> **Copyright/distribution note**: the 9 skills are knowledge bases extracted from copyrighted books (Christensen, Hormozi, Drew, Butcher, Frangioni, etc.). If the repo is to be **public**, it's best for the skills to contain *reformulated frameworks and principles*, not verbatim text from the books, to avoid copyright issues. If **private/personal**, no problem. To be decided before the push.

---

## 11. Build plan (after approval)

1. Create the repo's folder structure.
2. Copy the 9 skills into `bettercallclaudegrowth/skills/`.
3. Write `marketplace.json`, `plugin.json`, `package.json`.
4. Write `validate-plugin.js` + `ci.yml`.
5. Write the 2 agents (`gtm-orchestrator`, `gtm-critic`).
6. Write the 10 commands (1 pipeline + 9 specialists).
7. README + LICENSE + CHANGELOG.
8. `npm run validate` → green.
9. Local test: `/plugin install` from local path, then `/gtm`.
