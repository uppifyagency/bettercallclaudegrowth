---
name: instagram-performance-marketing
description: "Knowledge base from \"Instagram Performance Marketing: The Programmatic Guide to Conversion Marketing\" by Robert Thomas. Use when applying his frameworks for Meta/Facebook/Instagram conversion ads — campaign objectives, audience & lookalike targeting, GEO/CPM reduction, ad creative, accelerated ad spend, retargeting, A/B testing, and training the algorithm — studying the book, or referencing its concepts."
allowed-tools:
  - Read
  - Grep
argument-hint: [topic, framework name, or chapter number]
---

# Instagram Performance Marketing — The Programmatic Guide to Conversion Marketing
**Author**: Robert Thomas (Leadedly Publishing, 2025) | **Pages**: ~127 | **Chapters**: 17 | **Generated**: 2026-06-08

> Despite the title, the book is a hands-on playbook for **Meta Ads Manager** (Facebook + Instagram) conversion campaigns. Every framework optimizes one master equation: **lower CPM → lower CPA**.

## How to Use This Skill

- **Without arguments** — load the core frameworks below for reference.
- **With a topic** — ask about `lookalike audiences`, `campaign objectives`, `CPM`, `accelerated ad spend`, etc.; I find and read the relevant chapter.
- **With a chapter** — ask for `ch10`; I load that specific chapter file.
- **Browse** — ask "what chapters do you have?" to see the full index.

When you ask about a topic not in Core Frameworks below, I read the relevant chapter file before answering.

---

## Core Frameworks & Mental Models

**The master thesis — "The lower your CPM, the lower your CPA."** (Ch17) Cost Per Acquisition is downstream of Cost per 1,000 Impressions. You almost never optimize CPA directly; you attack CPM (via geo + broad audiences + high-CTR creative + algorithm training), and CPA falls with it. This is the lens for every other decision.

**The Seven Pillars of Performance Marketing** (Ch3) — the diagnostic checklist; audit/launch any campaign in this order:
1. **Campaign Objective Selection** — the single highest-leverage choice.
2. **Audience Targeting** — seed with first-party data, expand with lookalikes.
3. **GEO Targeting** — widen geography to crush CPM.
4. **Ad Creative** — video for CTR + engagement signals.
5. **Ad Settings** — quiet cost levers (placements, etc.).
6. **Landing Page Optimization** — convert the traffic you paid for.
7. **Post-Ad Engagement** — automate instant follow-up.

**Objective = an instruction to Meta's algorithm, not a label.** (Ch4) The objective tells Meta *which behavioral cohort* to spend on. Match it to the **exact action** you want: Sales/Conversions for purchases, Engagement→Lead Forms for leads, App Installs for downloads. Picking cheaper proxy objectives (e.g. Traffic) gets you visitors who never convert — same spend, worse result. CPM cost ladder: **Awareness/Reach (lowest) < Engagement/Traffic/Lead Gen < Conversions (highest)** — but a conversion objective with broad audience + wide GEO nets *lower* CPM than a conversion objective restricted to the US.

**The algorithm-fuel stack** (Ch5, Ch14, Ch17) — feed Meta high-intent seed data instead of trusting native interest filters:
- Upload your **customer list → Custom Audience → Lookalike** (the highest-quality seed).
- Add **Google Search Audience Feeds** — broker-sourced lists of high-purchase-intent searchers — then build lookalikes off them.
- Layer **manual interests + job titles** (the "original"/Advantage+ audience — never fully automatic).
- **Lookalike size tiers**: 1–3% = precision/highest similarity; up to 10% = balance; 51–100% = max reach. Seed quality (size ≥1,000, recent, high-intent) determines lookalike quality.

**GEO is the fastest CPM lever.** (Ch6) US/Canada-only CPM can hit ~$250–$300; expanding to additional converting countries can drop CPM under $1. Author's default high-converting set: **US, Canada, UK, Australia, New Zealand, Germany, France, Italy, Spain, Brazil.** Emerging markets (SE Asia, Africa, Latin America) = least competition, lowest CPM. Localize creative per market. Go broad for new tests/awareness; go specific for warm retargeting/local/niche.

**Video-first creative.** (Ch7) Video beats static for CTR and is a two-for-one asset: watch-depth (e.g. 80%+) creates retargeting + engagement-lookalike audiences static images can't. Produce 2–3 **AI/UGC-style** variations (17–60s, ideally <30s) per campaign; the book cites ~0.90% Facebook average CTR vs up to ~9.8% for strong AI-UGC video.

**Accelerated Ad Spend / front-load the budget.** (Ch10, Ch11) The algorithm learns from data, so feed it fast: launch around **$500/day**. The **learning phase exits at ~50 conversion events (≤7 days)**; aim for the first 24–48h. **Don't accelerate** unless early CPA is within ~50–60% of target. **Minimize edits during learning** — major changes reset the phase. Kill rule: no traction after ~10k impressions → turn it off and test new variations.

**The sterile launch (Ad Settings protocol).** (Ch11) Build manually with ONE clean ad set so early data is uncontaminated: Advantage Campaign Budget OFF, A/B Test OFF, Dynamic Creative OFF, Audience Network unchecked, Performance Goal = Maximize Conversions, Cost-per-Result Goal blank, track via Pixel.

**Ad copy as a love story.** (Ch12) Understand one audience deeply → open with a specific emotion (the hook) → land a sub-25-character, action-led headline in ~2.5 seconds → sell *reader* benefits (reader = hero) → close with an objective-aligned CTA → A/B test on CTR/conversion/CPA.

**Retargeting = the follow-up.** (Ch13) 3-step loop: understand & segment (website visitors, engaged users, cart abandoners via the Meta Pixel + Custom Audiences) → build strategy (Dynamic Ads, scarcity, 3–5/week frequency cap) → analyze & optimize (CTR/Conversion/CPC, A/B test, refresh creative).

**Post-click is a journey, not an endpoint.** (Ch9) Pair **Customer Journey Automation** (capture/segment → personalize → trigger → score) with **Automated Outreach** (email, SMS, social DM, chatbots) to convert clicks at scale.

**Optimize on a perpetual loop.** (Ch16) Define objective + KPIs first → diagnose the specific leak with performance questions → make small, incremental tweaks across just **four levers (audience, creative, budget/bidding, landing page)** → repeat forever. Scale milestone: ~**1,000 conversion events** = lowest CPM, highest CTR, lowest CPA.

---

## Chapter Index

| # | Title | Key Frameworks |
|---|-------|----------------|
| [ch01](chapters/ch01-what-is-performance-marketing.md) | What is Performance Marketing | ROAS as go/no-go gate, conversion-that-maps-to-revenue |
| [ch02](chapters/ch02-common-mistakes.md) | Common Mistakes Killing Your Conversion Rate | The 9 conversion-killer mistakes |
| [ch03](chapters/ch03-seven-pillars.md) | The Seven Pillars of Performance Marketing | **Seven Pillars** diagnostic |
| [ch04](chapters/ch04-campaign-objectives.md) | Campaign Objectives | Objective-to-Outcome Alignment, CPM-by-Objective ladder |
| [ch05](chapters/ch05-audience-targeting.md) | Audience Targeting | Customer List→Lookalike pipeline, Google Search Audience Feeds |
| [ch06](chapters/ch06-geo-targeting.md) | GEO Targeting | Geo-Targeting Toolbox, Broad-vs-Specific, emerging markets |
| [ch07](chapters/ch07-ad-creative.md) | Ad Creative | High-Converting Meta Ads guide, AI-UGC video |
| [ch08](chapters/ch08-landing-page-optimization.md) | Landing Page Optimization | 6 essential elements, mobile-first, test loop |
| [ch09](chapters/ch09-post-engagement-optimization.md) | Post Engagement Optimization | Customer Journey Automation, Automated Outreach |
| [ch10](chapters/ch10-blowing-your-budget.md) | Blowing Your Budget (for a Good Reason) | Front-Loading Budget, Learning Phase, Early Success |
| [ch11](chapters/ch11-ad-settings.md) | Ad Settings | Lowest-CPM objective, sterile single-ad-set launch |
| [ch12](chapters/ch12-primary-text-headline-description.md) | Primary Text, Headline & Description | Love-story copy, 5-part optimization checklist |
| [ch13](chapters/ch13-retargeting-audiences.md) | Retargeting Audiences | 3-Step Retargeting, 4 audience types |
| [ch14](chapters/ch14-lookalike-audiences.md) | Look-a-Like Audiences | 5-step creation, size tiers, 4 success metrics |
| [ch15](chapters/ch15-ab-testing.md) | A/B Testing | One-variable discipline, significance, 7–14 day window |
| [ch16](chapters/ch16-campaign-monitoring-optimization.md) | Campaign Monitoring & Optimization | 5-step roadmap, Goal→KPI, 4-lever optimization |
| [ch17](chapters/ch17-training-the-algorithm.md) | Training Facebook's Algorithm | Lower-CPM→Lower-CPA stack, accelerated spend |

## Topic Index

- **A/B testing / split testing** → ch08, ch12, ch15, ch16
- **Accelerated ad spend / front-loading budget** → ch10, ch11, ch17
- **Ad copy (primary text, headline, description, CTA)** → ch07, ch12
- **Ad creative / video / AI-UGC** → ch02, ch03, ch07
- **Ad settings / placements / Audience Network** → ch03, ch11
- **Advantage Campaign Budget / Dynamic Creative** → ch11
- **Audience targeting / Custom Audience** → ch02, ch03, ch05, ch17
- **Automated outreach / chatbots / email** → ch09
- **Campaign monitoring / optimization loop** → ch16
- **Campaign objectives / objective selection** → ch02, ch03, ch04, ch11
- **CPA (Cost Per Acquisition)** → ch02, ch05, ch06, ch10, ch16, ch17
- **CPM (Cost per 1,000 Impressions)** → ch02, ch03, ch04, ch06, ch11, ch14, ch17
- **Customer journey automation / lead scoring** → ch09
- **Emerging markets / localization** → ch06
- **GEO targeting / high-converting countries** → ch02, ch03, ch06, ch17
- **Google Search Audience Feeds** → ch02, ch05, ch14, ch17
- **Landing page optimization / above the fold / bounce** → ch03, ch08
- **Learning phase / 50 conversions** → ch02, ch10, ch11, ch17
- **Lookalike audiences / seed audience / size tiers** → ch02, ch03, ch05, ch07, ch13, ch14, ch17
- **Meta Pixel / conversion tracking** → ch11, ch13, ch17
- **Performance marketing (definition) / ROAS** → ch01, ch03, ch16
- **Retargeting / cart abandoners / frequency cap** → ch07, ch13
- **Seven Pillars** → ch03
- **Statistical significance / sample size / test duration** → ch15

## Supporting Files

- [glossary.md](glossary.md) — 94 key terms with definitions
- [patterns.md](patterns.md) — 34 concrete techniques & playbooks
- [cheatsheet.md](cheatsheet.md) — single-page decision tables (objectives, GEO, ad-settings checklist, CPM→CPA loop)

---

## Scope & Limits

Covers the book's content only. The author's specific figures (e.g. CPM ranges, ~$500/day, ~9.8% CTR, 50/1,000-event thresholds) are his claims from millions in personal ad spend, not platform guarantees — treat as heuristics and validate against your own account data and current Meta Ads Manager UI (objective names and settings shift over time). For live campaign execution, pair with project tools and Meta's current documentation; for adjacent topics see related skills (`facebook-ads`, `ab-test-setup`).
