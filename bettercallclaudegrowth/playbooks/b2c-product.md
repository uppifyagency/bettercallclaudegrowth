# Playbook — B2C / consumer product (incl. e-commerce/DTC)

**When it applies:** product or brand sold to the end consumer. **Emotional/impulsive or identity-driven** purchase, low-to-medium AOV, where **volume** and acquisition cost are what count. Includes e-commerce/DTC, consumer apps, B2C subscriptions. `ecommerce` (config value) routes here.

> **Variant WITHOUT online checkout** (retail/offline product, sold in-store or through distributors): **skip** the e-commerce mechanics (abandoned cart, transactional RFM, purchase Pixel). Use email as **recall/waitlist/reviews**, IG/Meta geo for the point of sale, and measure on **leads/store visits/sell-through**, not on checkout ROAS. The rest of the playbook (emotional Jobs, offer, creative) still holds.

## Typical Job to Be Done (Christensen lens)
The **emotional and social dimension is often dominant** (how it makes me feel, what it says about me). The circumstance/trigger matters more than the demographic ("when X happens to me, I want Y"). The real competitor may be another spend for the same "emotional job," not a product in the same category (the Milk Shake Dilemma is at its peak here).

## Recommended GTM sequence
`gtm-jobs` → `gtm-offer` → `gtm-positioning` → `gtm-instagram` → `gtm-copy` → `gtm-email` → `gtm-content`

- **Offer early:** in B2C, conversion is won on offer + creative. Grand Slam adapted: bundles, guarantee ("satisfaction or money back"), *honest* urgency/scarcity, anchored price.
- **Instagram/Meta performance as the engine:** `instagram-performance-marketing` — conversions objective, Custom→Lookalike, video/UGC creative with 2-3 variants geared toward CTR, learning phase ~50 events, retargeting via Pixel. **ROAS/CPA** guardrail.
- **Email/SMS = margin recovery:** abandoned cart, post-purchase, winback. For e-commerce, **RFM segmentation** is central (use `advanced-email-marketing`).
- **Copy = hook + desire:** SUCKS applied to the reader-as-hero, social proof, slippery slope to the CTA.

## Primary channel
**Instagram/Meta ads + email/SMS.** SEO/content as a long-term channel and margin defense (reduces dependence on paid), not as the initial engine if the cycle is impulsive.

## Core Four (priority)
1. **Paid ads** (Meta/IG) — the B2C engine par excellence →
2. **Content** (creators/UGC, organic) →
3. Affiliates/influencers →
4. Warm/cold outreach (marginal in pure B2C).

## North-star KPIs + guardrails
- North star: **ROAS**, **CPA vs. contribution margin**, **AOV**, **repurchase rate**.
- Guardrail: **CAC recovered on the first order or within the cash cycle** (Client-Financed Acquisition, `cfa-calculator`). Without sufficient repurchase/AOV, B2C paid runs at a loss: first fix offer+AOV, then scale the spend.

## Common traps
- Scaling the ads budget before the creative and the offer are validated (front-loading on a weak offer burns cash).
- Ignoring email/SMS: in e-commerce, that's where the recovered margin lives.
- Positioning solely on "feature/price" in an emotional purchase.
