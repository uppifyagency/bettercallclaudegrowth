# Chapter 7: Defining Audiences with Segmentation

## Core Idea
The **segments + triggers** mix defines the strategy with precision. The same segments also serve advertising (remarketing/lookalike). Two distinct engines: CRM scoring (lead gen) and RFM matrix (e-commerce).

## Frameworks Introduced
- **Lead generation segmentation (CRM scoring)**: assigns points to contact actions.
  - email opened **5** · email clicked **15** · site visit **20** · call/meeting **50** · workflow completed **20** · proposal/quote sent **100**.
  - Thresholds: **>100 Prospects · 50-100 Qualified Leads · 20-50 Warm Leads · <20 New/Cold Leads**.
  - As an alternative to score: **custom attributes** (source, service requested, demographics, geography, B2B company data, e.g. brand used / vehicle fleet size).
  - **Lead gen segment framework** (3 sources): Email (opened/clicked/automation completed) · CRM (attributes/scoring/funneling) · Website/App (visits/interactions).
- **E-commerce segmentation**:
  - **Start Phase**: basic segments — customers/non-customers, one-time/recurring, high/low spending, recent/historical (Store, Orders, Spend, Time).
  - **Growth Phase**: the 3 core parameters of **RFM** → **11 clusters**:
    1. **Champions** (frequent, recent, high spend) · 2. **Loyal Customers** (regular, responsive to promos) · 3. **Potential Loyalist** (recent, good spend, more orders) · 4. **New Customers** (recent non-habitual) · 5. **Promising** (recent, low spend) · 6. **Needs Attention** (above-average RFM but last purchase not recent) · 7. **About To Sleep** (below average, needs stimulation) · 8. **At Risk** (high spend/frequency but a long time ago) · 9. **Can't Lose Them** (max spend, frequent, a long time ago) · 10. **Hibernating** (distant, few orders) · 11. **Lost** (lowest RFM).
  - Extra dimensions: **Brand / Category / Product / Context / AOV** (Average Order Value) → useful for up/cross-selling and bundles.
  - By intent: those who only buy during discounts/sales/BFCM, only from outlet, with gift cards.
- **Advanced segments**: **Deal Hunter** (lowest price → Price Drop alert, also SMS) · **Last-Minute Shopper** (delivery reassurance, express shipping) · **VIP** (mix of amount/orders/frequency → loyalty building) · **Window Shopper** (browses but doesn't checkout → reminder/how-to/support) · **Impulse Buyer** (buys immediately at launch) · **Missed Customers** (cancelled/refunded order → survey + repurchase incentive).

## Key Concepts
- **Gamification**: scoring classifies users in a game-like fashion; every action contributes to the segment.
- **Conversific**: analysis tool that integrates with e-commerce/DEM to identify clusters, product combinations, and bundles (AOV).

## Mental Models
- "Contacts enter and exit segments": always move leads forward and **exclude** those who shouldn't be in certain workflows.
- "A contact evolves continuously": perform **periodic reviews** of rules/thresholds (B2B example: from 3 courses/year to 1 every 2 months → thresholds recalibrated).

## Anti-Patterns
- **Not updating** strategies and segments over time (one of the most serious mistakes).
- Forcing all 11 clusters: pick only the ones useful to your business.

## Takeaways
1. Lead gen → CRM scoring with thresholds (Prospects/Qualified/Warm/New).
2. E-commerce → RFM Start→Growth, up to 11 clusters + Brand/Category/AOV.
3. Add advanced behavioral segments (Deal Hunter, VIP, Window Shopper…).
4. Periodically review rules and thresholds; exclude segments from irrelevant flows.

## Connections
- **Ch 5**: triggers and RFM/CDP.
- **Ch 9**: flows triggered on these segments.
- **Ch 10**: segments exported to advertising (remarketing/lookalike).
