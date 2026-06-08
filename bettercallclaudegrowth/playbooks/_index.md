# GTM Routing Matrix — the brain of gtm-buddy and gtm-orchestrator

This file is the **single source of truth for routing**. Both the `gtm-buddy` router and the `gtm-orchestrator` pipeline read it to: (1) classify the user's situation into **archetype × stage**, (2) pick the right **skill/command sequence**, (3) decide the **primary channel, emphasis, and what to skip**.

Do not duplicate the frameworks here: they live in the `skills/` (invoked **by name**, auto-activation). Only the **choice logic** lives here.

> **How to read the files in this folder:** they are bundled plugin files → open them with Bash via `cat "${CLAUDE_PLUGIN_ROOT}/playbooks/<file>.md"`, **not** with relative paths (which would resolve against the user's cwd and fail). The `(coaching-services.md)` links below are merely references to the file name.

---

## 1. How to classify the situation (archetype)

Infer the archetype from the signals in the user's input. If ambiguous, ask **a single** disambiguation question, then proceed.

| Archetype | Recognition signals | Playbook |
|---|---|---|
| **coaching** | high-touch service, personal brand, consulting, courses/info-products, "I sell my expertise", one-to-few providers | [coaching-services.md](coaching-services.md) |
| **b2b-saas** | subscription software, trial/demo, MRR/ARR, buyer ≠ user, sales cycle, "trial/onboarding/churn" | [b2b-saas.md](b2b-saas.md) |
| **b2c** | product/brand to the consumer, impulse or emotional purchase, low-to-mid AOV, volume; includes **e-commerce/DTC** | [b2c-product.md](b2c-product.md) |
| **local-service** | geographic radius, "workshops/studio/restaurant/shop", customers in the area, Google Maps/reviews matter | [local-service.md](local-service.md) |
| **established-no-marketing** | company with revenue and customers but **no marketing department/process**; grown by word of mouth; wants structure | [established-no-marketing.md](established-no-marketing.md) |

> `established-no-marketing` is a **cross-cutting scenario**: it combines with the underlying product archetype (often b2b-saas, local-service, or b2c). When you recognize it, read *both* playbooks (the scenario + the product archetype).
>
> **Alias:** `ecommerce` (selectable value in `userConfig.archetype`) is an **alias of `b2c`** → use `b2c-product.md`. A **B2C without online checkout** (retail/offline product) is still `b2c`, but see the "no cart" note in its playbook. A **coaching/B2B service** stays `coaching` for offer/positioning, but the channel is **outbound** (warm/cold via `gtm-leads`), not a dedicated skill.

## 2. How to classify the stage (modifier)

| Stage | Signals | Effect on the sequence |
|---|---|---|
| **micro-launch** | idea/MVP, budget ~0, 1 person, "I want to test/validate", no customers or very few | **short, zero-cost** path: jobs → offer → 1 organic channel → measurement. See [micro-launch.md](micro-launch.md) |
| **scaling** | has traction/first customers, wants to grow repeatably | **complete** path with emphasis on lead engine + paid channels + email |
| **established** | up-and-running company, resources, but unstructured GTM | complete path with emphasis on **positioning/systematization** and measurement; often starts from an audit of the existing | 

Default if not inferable: **scaling** (the balanced complete path).

## 3. Archetype × recommended sequence matrix

The "Sequence" column is the order of `/gtm-*` that gtm-buddy proposes (and can run automatically). "Channel" is the recommended `default_channel` when the user doesn't force it.

| Archetype | Primary channel | Recommended sequence | Emphasis | Tends to skip |
|---|---|---|---|---|
| **coaching** | organic content + email | `gtm-jobs` → `gtm-positioning` → `gtm-offer` → `gtm-leads`* → `gtm-content` → `gtm-copy` → `gtm-email` | Personal Monopoly, high-ticket offer, proof/authority. *(\*warm outreach to the network starts immediately/in parallel: it is the first source of revenue; `gtm-leads` systematizes it)* | paid IG ads in the early steps |
| **b2b-saas** | seo + email (+ outbound) | `gtm-jobs` → `gtm-positioning` → `gtm-offer` → `gtm-leads` → `gtm-seo` → `gtm-email` → `gtm-content` → `gtm-copy` | nonconsumption, activation/Little Hire, lead engine, CAC payback | IG ads (rare for B2B) |
| **b2c** | instagram + email | `gtm-jobs` → `gtm-offer` → `gtm-positioning` → `gtm-instagram` → `gtm-copy` → `gtm-email` → `gtm-content` | emotional/social dimension, creative, retargeting, AOV/ROAS | long-tail SEO if the cycle is impulsive |
| **local-service** | seo (local) + instagram | `gtm-jobs` → `gtm-positioning` → `gtm-offer` → `gtm-seo` → `gtm-leads` → `gtm-instagram` → `gtm-email` | circumstance triggers, proximity, reviews, GBP | broad content engine, programmatic |
| **established-no-marketing** | auto (depends on the product type) | `gtm-buddy` audit → `gtm-positioning` → `gtm-offer` → `gtm-leads` → archetype channel → `gtm-email` → measurement | systematize what already works, don't reinvent; quick wins | nothing: first you put things in order |

## 4. Stage × depth matrix

| Stage | Full /gtm? | Critic checkpoint | Notes |
|---|---|---|---|
| **micro-launch** | No — short path (jobs → offer → 1 organic channel → measurement) | 1 (on the offer) | zero cost, 1 channel, time-to-first-win < 14 days |
| **scaling** | Yes — full pipeline | 2 (offer + funnel) | balanced |
| **established** | Yes, but open with an **audit** of the existing material | 2 + initial audit | respect what already generates revenue |

## 5. When to propose what (gtm-buddy's decision)

- **The user has ONE precise question** ("how do I price?", "write me an email") → point to **a single skill/command** (e.g. `/gtm-offer`, `/gtm-email`). Don't impose the pipeline.
- **The user is at 0 / wants a plan** → propose the archetype's **sequence** (section 3) and offer to run it, or `/gtm` for the end-to-end orchestrated pipeline.
- **The user is established and disorganized** → start from an **audit** (gtm-buddy interrogates the current state) before generating.
- **Ambiguous situation** → 1 disambiguation question (archetype or stage), never more than one before delivering value.

## 6. Command → skill map (referential integrity)

Also used by the `validate-content.js` validator. Each command loads the indicated skills (reading `skills/<name>/SKILL.md`).

| Command | Skill |
|---|---|
| `/gtm-buddy` | (router: reads this index; does not load domain skills) |
| `/gtm` | all, via `gtm-orchestrator` |
| `/gtm-jobs` | `christensen-jobs` |
| `/gtm-positioning` | `butcher-productize`, `doing-content-right` |
| `/gtm-offer` | `hormozi-offers` |
| `/gtm-leads` | `hormozi-leads` |
| `/gtm-content` | `doing-content-right` |
| `/gtm-copy` | `drew-sucks-framework` |
| `/gtm-email` | `advanced-email-marketing` |
| `/gtm-seo` | `seo-2026-sota` |
| `/gtm-instagram` | `instagram-performance-marketing` |
