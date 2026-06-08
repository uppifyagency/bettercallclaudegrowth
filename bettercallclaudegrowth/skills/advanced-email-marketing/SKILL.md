---
name: advanced-email-marketing
description: "Knowledge base from \"AEMA — Advanced Email Marketing Automation\" by Alessandro Frangioni (ROADS®) and contributors. Use it to design email marketing automation strategies: customer journey, triggers, RFM segmentation, workflows, welcome/drip/abandoned cart/winback, deliverability, GDPR, A/B testing, AI and advertising integration."
allowed-tools:
  - Read
  - Grep
argument-hint: [topic or chapter, e.g. segmentation | welcome series | RFM | deliverability | ch06]
---

# AEMA — Email Marketing Automation avanzata
**Author**: Alessandro Frangioni (ROADS® agency) + 20 contributors | **Pages**: ~237 | **Chapters**: 10 | **Generated**: 2026-06-05

## How to use this skill

- **Without arguments** — loads the core frameworks below to design a strategy.
- **With an argument** — ask about `segmentation`, `welcome series`, `RFM`, `abandoned cart`, `GDPR`…: the relevant chapter is read before answering.
- **With a chapter** — ask for `ch06`; that file is loaded.
- **Browse** — "which chapters do you have?" for the full index.

When you ask about a topic not covered in the Core Frameworks below, the relevant chapter is read before answering.

---

## Founding principle

> **Strategy → then platform. Profiling → then automation.** Do not choose the tool before the strategy (mistake #1: only ~10% of the potential is used). And **"Sending newsletters ≠ doing marketing automation"** (mistake #2). Not doing MA means leaving ~**70% of potential revenue** on the table; email remains the channel with the highest ROI.

Email marketing today is one piece of the marketing automation puzzle, integrated with e-commerce, website, landing pages, SMS, push notifications, **CRM and CDP**. The inbox is an intimate place: access is a grant of trust — do not burn it with mass offers.

## The 3 pillars of strategy (Matteuzzi framework → ch01)
1. **Analysis** — 4 areas: internal, demand, competition, trends. "Blood tests" before any plan.
2. **Planning** — 5 points (OKR-style): **objectives** (max 3, quarterly) → **key results** (max 3 per objective) → **tactics** (the *how*, anchored to the customer journey) → **KPIs** (leading vs lagging key results) → **action list** (who-what-by when).
3. **Execution** — the most important thing is **testing**.

## The 8 activation/segmentation triggers (→ ch05)
Lead acquisition · Email interactions · Events/dates · Contact attributes · On-site behaviour · Shopping experience · CRM · CDP. Each trigger generates both automations and dynamic segments.

## The workflow grammar (De Portu framework → ch06)
Before designing: **Objective + KPI** (and who to EXCLUDE) → **Segment** (verify it is large enough: it thins out at each step) → **Trigger/Enrollment** (with **AND/OR/NOT** booleans) → **Delay** → **If/then** (paths branch out) → **Timing** (always-on? single entry?). Use zero-party data whenever possible.

## Segmentation: the two engines (→ ch07)
- **Lead gen → CRM scoring**: email opened 5pt, clicked 15, site visit 20, call/meeting 50, workflow completed 20, quote 100 → thresholds: >100 Prospects, 50–100 Qualified, 20–50 Warm, <20 New/Cold.
- **E-commerce → RFM matrix** (Recency, Frequency, Monetary) → 11 clusters: Champions, Loyal, Potential Loyalist, New, Promising, Needs Attention, About To Sleep, At Risk, Can't Lose Them, Hibernating, Lost. Additional advanced segments: Deal Hunter, Last-Minute Shopper, VIP, Window Shopper, Impulse Buyer, Missed. Extra dimensions: Brand/Category/Product/Context/AOV.

## Automation flows that are almost always needed (→ ch06, ch09)
- **Welcome series / Onboarding** (Soap Opera Sequence: teaser pointing to the next email).
- **Drip campaign** (lead gen/services: nurturing toward conversion, + plain-text email "from the founder").
- **Funneling Flow** — after N mandatory emails, continue only with those who open/click → open rate *goes back up* (real case: from the 4th email 26%→48%, then 62%, 78%).
- **Shopping Flow**: browse abandonment, abandoned cart (2 emails: reminder + deadline/discount), post-purchase, **Replenishment** (repeat buyers spend 3x; flow at ~80 days on a 90-day product), Back-in-Stock / Price Drop / Availability Drop.
- **Date Flow**: birthdays (Bait & Hook technique), anniversaries, Expected Date Of Next Order.
- **Winback/Churn** (2 emails, e.g. 120 + 15 days) → **Sunset Flow** (archive inactive contacts: improves metrics and lowers plan costs).

## High-impact rules
- **Dynamic and unique coupons** (personalised + time-based with countdown), never static in personalised flows.
- **Avoid email overlap**: use Smart Sending / "in onboarding, excluded from newsletters" segment.
- **Deliverability first**: authenticate domain (DNS), separate senders (personal + corporate), combine HTML and plain-text.
- **GDPR**: free/explicit/separate consent for marketing, saved; double opt-in; data minimisation (name + email is enough); *soft spam* is the exception (same customer, similar products).
- **The human element remains**: success comes from the combination of marketer + automation. Start with the basics, one or two automations at a time.

---

## Chapter index

| # | Title | Key frameworks |
|---|-------|----------------|
| [ch01](chapters/ch01-strategia-fondamenti.md) | Strategy & foundations | 3 pillars, marketing OKR, lead nurturing, intangible assets, CRM/CDP |
| [ch02](chapters/ch02-acquisizione-lead.md) | Contact acquisition & lead gen | Quality vs quantity, lead magnet, affiliate, no purchased lists |
| [ch03](chapters/ch03-setup-deliverability-gdpr.md) | Setup, deliverability & GDPR | Domain auth, S/M/L templates, list organisation, consent/soft spam |
| [ch04](chapters/ch04-email-perfetta.md) | The perfect email | Dynamic IF/ELSE content, subject+preview, angles, A/B, timing |
| [ch05](chapters/ch05-customer-journey-trigger.md) | Customer journey & 8 triggers | Customer journey map, full-funnel, RFM/LTV, Expected Date Next Order |
| [ch06](chapters/ch06-grammatica-workflow-flussi.md) | Workflow grammar & flows | 6 workflow elements, newsletter/spin-off/onboarding/drip |
| [ch07](chapters/ch07-segmentazione.md) | Segmentation | Lead-gen scoring, RFM 11 clusters, advanced segments, Conversific |
| [ch08](chapters/ch08-tracciamento-dati.md) | Tracking & data analysis | GA4, UTM/API, server-side, KPIs |
| [ch09](chapters/ch09-framework-automation.md) | Automation framework | Trigger/Funneling/Date Flow, lead-gen & e-commerce framework |
| [ch10](chapters/ch10-ai-advertising.md) | AI & advertising in MA | AI test vs A/B, cookieless/ATT, first-party, remarketing, lookalike |

## Topic index

- **A/B testing / AI test** → ch04, ch10
- **Abandoned Cart** → ch09
- **Advertising / remarketing / lookalike** → ch10
- **Affiliate marketing** → ch02
- **AI / machine learning** → ch10
- **Intangible assets** → ch01
- **Bait & Hook** → ch05, ch09
- **Dynamic coupons** → ch09
- **CRM / CDP** → ch01, ch05, ch06, ch07
- **Customer journey** → ch01, ch05
- **Deliverability / domain authentication** → ch03
- **Drip campaign** → ch06, ch09
- **Funneling Flow** → ch09
- **GDPR / consent / soft spam / double opt-in** → ch03
- **Lead magnet / lead nurturing** → ch01, ch02
- **Subject line / preview text / angles** → ch04
- **Marketing OKR (objectives/key results/tactics)** → ch01
- **Post-purchase** → ch06, ch09
- **Replenishment / Expected Date Of Next Order** → ch05, ch09
- **RFM (11 clusters)** → ch05, ch07
- **Lead-gen scoring** → ch07
- **Advanced segments (Deal Hunter, VIP…)** → ch07
- **Send Time Optimization / Smart Sending** → ch04, ch06
- **Soap Opera Sequence (SOS)** → ch06
- **S/M/L templates / seasonal skins** → ch03
- **Server-side tracking / GA4** → ch08
- **Welcome series / onboarding** → ch06, ch09
- **Winback / Sunset Flow** → ch09

## Support files

- [glossary.md](glossary.md) — key terms with definitions
- [patterns.md](patterns.md) — ready-to-use techniques and flows
- [cheatsheet.md](cheatsheet.md) — quick reference tables: triggers, RFM, scoring, timing

---

## Scope & limitations

Covers the book's methodology (platform-agnostic). This is not the documentation for a specific platform (Klaviyo, Mailchimp, ActiveCampaign, Brevo…): verify syntax and features in the tool you use and test before sending. Conversions/data cited are cases from the book, not guarantees.
