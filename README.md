<p align="center">
  <img src="assets/banner.svg" alt="BetterCallClaudeGrowth" width="100%">
</p>

# BetterCallClaudeGrowth — Go-To-Market (GTM) & Marketing Plugin for Claude Code

[![License: MIT](https://img.shields.io/badge/License-MIT-22c55e.svg)](LICENSE)
[![Version](https://img.shields.io/badge/version-0.3.0-6366f1.svg)](https://github.com/uppifyagency/bettercallclaudegrowth/releases)
[![Claude Code Plugin](https://img.shields.io/badge/Claude%20Code-plugin-8b5cf6.svg)](https://docs.anthropic.com/en/docs/claude-code)
[![Category: marketing](https://img.shields.io/badge/category-marketing-ff5c8a.svg)](#)
[![Made for go-to-market](https://img.shields.io/badge/made%20for-go--to--market-0ea5e9.svg)](#)
[![Local-first](https://img.shields.io/badge/local--first-no%20MCP%20%C2%B7%20no%20network-14b8a6.svg)](#)

> A **Go-To-Market consultant inside your terminal.** BetterCallClaudeGrowth turns **9 proven marketing frameworks** from top books into an operational assistant that recognizes your type of business and walks you from positioning to measurement. It's the GTM twin of **BetterCallClaude**, and it runs **entirely local**: no MCP server, no hooks, no network dependency.

---

## Why it exists

Most founders don't have an idea problem. They have a **sequencing** problem: what to do first, what comes next, and what to ignore. You buy five marketing books, apply 10% of them, and get stuck somewhere between "I have an offer" and "I have customers."

BetterCallClaudeGrowth closes that gap. It takes **9 battle-tested frameworks** and puts them to work **on your specific case** — not in the abstract. No slideware theory: a plan, real deliverables, a readiness score, and a critical review that tells you where you're about to go wrong.

> *Stop reading about marketing. Start doing it.*

---

## Quickstart

Install the plugin from Claude Code (two lines, in this order):

```
/plugin marketplace add uppifyagency/bettercallclaudegrowth
/plugin install bettercallclaudegrowth
```

Then describe your situation and let the router point the way:

```
/gtm-buddy launching a nutrition coaching business, starting from zero, minimal budget
```

Or run the full pipeline on a real case:

```
/gtm B2B SaaS for auto-parts inventory, 50 trials/month, growing
```

---

## What it is

BetterCallClaudeGrowth is a **plugin for Claude Code** that puts a **GTM strategy** and **AI marketing** consultant by your side. It's not a slogan generator: it's a system that classifies your **business archetype** and **stage**, picks the right **playbook**, and produces concrete deliverables — positioning, offer, lead generation, content, copywriting, channels, email, SEO, Instagram ads.

---

## Who it's for (any business)

The plugin **recognizes your archetype** and adapts the path. It works whether you're:

| Business type | What you get |
| --- | --- |
| **Coaching / Service / Freelance** | "Personal Monopoly" positioning, a premium offer, first leads with no budget. |
| **B2B SaaS** | A sharp ICP, a Grand Slam Offer, a lead pipeline, channels, and LTGP:CAC metrics. |
| **B2C product / service** | A message that converts, content, channels, and an acquisition funnel. |
| **E-commerce** | Offer and bonuses, Instagram/Meta campaigns, email automation, product SEO. |
| **Local service / Small business** | Local positioning, zero-budget leads, local SEO/GEO, reviews. |
| **Micro-launch / Product test** | Fast validation, a minimal offer, a single channel, falsifiable measurement. |
| **Established company _without_ a marketing team** | A complete GTM system that fills the gap, with a readiness score. |

No matter where you start. **The router figures out where you are and tells you the next step.**

---

## Two entry points

### `/gtm-buddy` — the router / concierge

The easiest way to start. Describe where you are and where you want to go: `gtm-buddy` classifies **archetype × stage**, tells you whether you need **one skill** or a **sequence**, and can run it for you. It's the assistant that saves you from guessing where to begin.

```
/gtm-buddy launching a nutrition coaching business, starting from zero, minimal budget
```

> It answers like a consultant: *"You're a coach at stage zero. Positioning first, then the offer, then your first organic leads. Shall we start with positioning?"*

### `/gtm` — the full adaptive pipeline

Runs an end-to-end path calibrated to your case:

- **Phase 0 — Classification**: detects archetype and stage, selects the playbook.
- **7 operational phases**: Jobs-to-Be-Done & positioning → Offer → Leads → Content & Copy → Channels → Email → Measurement.
- **Two adversarial review checkpoints** (`gtm-critic`) that red-team your offer, funnel, positioning, and copy.
- **PERCEIVE–ANALYZE–VALIDATE–ACT synthesis** with falsifiable hypotheses.
- **GTM Readiness Score 0–100** and a final deliverable: **`gtm-plan.md`**.

```
/gtm monthly specialty-coffee subscription box, pre-launch, list to build
```

> *From a description to a plan, with the critical review already baked in.*

---

## The 11 commands

| Command | What it does | Framework / source |
| --- | --- | --- |
| `/gtm-buddy` | Router / concierge: classifies archetype × stage and routes you to a skill or a sequence | — |
| `/gtm` | Full adaptive GTM pipeline + GTM Readiness Score | All |
| `/gtm-jobs` | Jobs to Be Done: the "job" your customer hires your product to do | christensen-jobs |
| `/gtm-positioning` | ICP + Personal Monopoly: who you're the obvious choice for | butcher-productize · doing-content-right |
| `/gtm-offer` | Grand Slam Offer + Value Equation: an offer that's hard to refuse | hormozi-offers |
| `/gtm-leads` | Core Four + lead magnet: get interested strangers to show up | hormozi-leads |
| `/gtm-content` | Content strategy + editorial calendar | doing-content-right |
| `/gtm-copy` | Copywriting with the SUCKS framework | drew-sucks-framework |
| `/gtm-email` | Email marketing automation: welcome, drip, winback | advanced-email-marketing |
| `/gtm-seo` | SEO + GEO 2026: Google and generative engines (AI Overviews, LLMs) | seo-2026-sota |
| `/gtm-instagram` | Conversion-focused Meta / Instagram campaigns | instagram-performance-marketing |

---

## The 9 frameworks / skills

Each skill is a **knowledge base** that reframes the operational principles of a book or methodology, ready to apply to your case.

| Skill | Topic | Author / source |
| --- | --- | --- |
| `christensen-jobs` | Jobs to Be Done | Clayton Christensen — *Competing Against Luck* |
| `butcher-productize` | Productize Yourself, scaling a service | Jack Butcher — *Visualize Value* |
| `hormozi-offers` | Grand Slam Offer, Value Equation, pricing | Alex Hormozi — *$100M Offers* |
| `hormozi-leads` | Core Four, lead magnets, Client-Financed Acquisition | Alex Hormozi — *$100M Leads* |
| `doing-content-right` | Content, niche, Personal Monopoly | Steph Smith — *Doing Content Right* |
| `drew-sucks-framework` | SUCKS copywriting for the web | Kieran Drew |
| `advanced-email-marketing` | Email automation, segmentation, deliverability | Frangioni / AEMA |
| `seo-2026-sota` | Technical SEO + GEO for LLMs and AI Overviews | SEO/GEO 2026 |
| `instagram-performance-marketing` | Meta / Instagram conversion ads | Robert Thomas |

---

## The 3 agents

| Agent | Role |
| --- | --- |
| `gtm-buddy` | The router / concierge. Figures out where you are and routes you to the right skill or sequence. |
| `gtm-orchestrator` | Drives the adaptive pipeline end-to-end and computes the **GTM Readiness Score** 0–100. |
| `gtm-critic` | The adversarial reviewer. Red-teams your offer, funnel, positioning, and copy before you spend budget on them. |

> *A consultant that proposes. A critic that saves you.*

---

## The 4 deterministic scripts

Four Node scripts that produce repeatable numbers, not opinions. Same input, same output.

| Script | Output |
| --- | --- |
| `cfa-calculator` | **LTGP:CAC** ratio and the **Client-Financed Acquisition** model (Hormozi): does your acquisition pay for itself? |
| `value-equation-score` | Offer strength on a **0–100** scale |
| `gtm-readiness-score` | Pipeline **GTM Readiness Score** 0–100 |
| `gtm-plan-lint` | Quality and consistency check for `gtm-plan.md` |

On top of these sit **7 playbooks**, each tuned per archetype to calibrate every phase to your type of business.

---

## Architecture

```
bettercallclaudegrowth/
├── commands/        # 11 commands: /gtm-buddy, /gtm, /gtm-offer, …
├── agents/          # 3 agents: gtm-buddy, gtm-orchestrator, gtm-critic
├── skills/          # 9 knowledge bases (the book frameworks)
├── playbooks/       # routing matrix + playbooks per archetype × stage
├── scripts/         # 4 deterministic Node scripts
└── assets/          # banner.svg and resources
```

**Typical `/gtm` pipeline flow:**

```
/gtm  ──►  Phase 0: classification (archetype × stage)
          │
          ▼
   playbook selection (per archetype)
          │
          ▼
   7 phases: JTBD/positioning ► offer ► leads ► content/copy ► channels ► email ► measurement
          │                              │
          ▼                              ▼
   gtm-critic checkpoint          gtm-critic checkpoint
          │
          ▼
   PERCEIVE–ANALYZE–VALIDATE–ACT synthesis  ►  GTM Readiness Score  ►  gtm-plan.md
```

**Local-first by design:** no MCP server, no hooks, no network calls. Everything runs inside your Claude Code session.

---

## Configuration (`userConfig`)

Set your preferences once and every command respects them.

| Key | Meaning | Examples |
| --- | --- | --- |
| `output_language` | Language of deliverables | `EN`, `IT` |
| `archetype` | Default business type (or `auto`) | `coaching`, `b2b-saas`, `b2c`, `ecommerce`, `local-service`, `established-no-marketing` |
| `stage` | Growth stage (or `auto`) | `micro-launch`, `scaling`, `established` |
| `industry` | Industry / vertical | nutrition, automotive, food, … |
| `default_channel` | Primary channel (or `auto`) | `seo`, `instagram`, `email` |
| `brand_voice` | Brand tone of voice | direct, premium, technical, friendly |

---

## Usage examples

```
/gtm-buddy launching a nutrition coaching business, starting from zero, minimal budget

/gtm B2B SaaS for auto-parts inventory, 50 trials/month, growing

/gtm-offer monthly specialty-coffee subscription box

/gtm-leads local photography studio, I want more quote requests

/gtm-seo plant-based recipe blog, I want to show up in AI Overviews

/gtm-instagram skincare e-commerce, scaling conversion campaigns
```

> Open your terminal. Type what you sell. Walk out with a plan.

---

## FAQ

**Who is it for?**
Founders, solopreneurs, coaches, B2B SaaS teams, B2C and e-commerce brands, local businesses, and established SMBs **without a marketing team**. If you need to take something to market, it's for you.

**Do I need to know marketing to use it?**
No. `/gtm-buddy` acts as a concierge: start by describing your situation in your own words and the router tells you exactly which skill or sequence to use.

**Does it need a connection or an MCP server?**
No. The plugin is **local-first**: no MCP, no hooks, no network dependency. It all runs in your Claude Code session.

**Can I use a single skill without the pipeline?**
Yes. Every command (`/gtm-offer`, `/gtm-copy`, `/gtm-seo`, …) works on its own. The `/gtm` pipeline is optional, for when you want the full path.

**Do I need an ad budget?**
No. Many paths (organic, content, outreach, SEO) are designed to start on a minimal budget. Paid ads are an option, not a requirement.

**What language are deliverables in?**
English or Italian, controlled by `output_language`. Set it to `EN` for English output.

**Are the deliverables reliable?**
The numeric evaluations (Value Equation, LTGP:CAC, GTM Readiness Score) are produced by **deterministic scripts**: same input, same result. The strategic side goes through `gtm-critic`'s adversarial checkpoints.

**Does it contain the text of the books?**
No. See **Credits & Copyright** below.

---

## Credits & Copyright

The 9 skills in BetterCallClaudeGrowth are **knowledge bases** with frameworks and principles **reformulated** for study and operational use. They **do not contain the full text** of the reference books. All rights to the original works remain with their respective authors and publishers.

Acknowledgements to the authors whose frameworks inspired this plugin: Clayton Christensen, Jack Butcher (Visualize Value), Alex Hormozi, Steph Smith, Kieran Drew, Alessandro Frangioni (AEMA / ROADS®), Robert Thomas, and the authors of the SEO/GEO 2026 series.

Built by **Uppify Agency** · Repo: **github.com/uppifyagency/bettercallclaudegrowth** · version **0.3.0** · category **marketing**.

---

## License

Released under the **MIT** license. See the [`LICENSE`](LICENSE) file. Use it, modify it, build on it.

---

## Keywords / Topics

`go-to-market` · `GTM` · `GTM strategy` · `marketing` · `AI marketing` · `Claude Code plugin` · `Claude Code skill` · `Anthropic` · `product launch` · `positioning` · `offer` · `lead generation` · `copywriting` · `SEO` · `GEO` · `email marketing` · `Instagram ads` · `Meta ads` · `startup` · `founder` · `solopreneur` · `coaching` · `B2B SaaS` · `B2C` · `ecommerce` · `local business` · `small business` · `Jobs to Be Done` · `Grand Slam Offer` · `content strategy` · `marketing plugin` · `marketing skill`

<sub>BetterCallClaudeGrowth · v0.3.0 · the go-to-market twin of BetterCallClaude · made by Uppify Agency</sub>
