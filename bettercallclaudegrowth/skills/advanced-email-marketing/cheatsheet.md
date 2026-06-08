# Quick Cheatsheet — AEMA

---

## The 8 Triggers (activation menu)

| # | Trigger | Typical Flows |
|---|---------|---------------|
| 1 | Lead acquisition | Welcome series, Onboarding |
| 2 | Email interactions | Funneling Flow, re-engagement |
| 3 | Dates/events | Birthday (Bait & Hook), anniversary, replenishment |
| 4 | Contact attributes | CRM / sales tasks, call reminder |
| 5 | Site behavior | Browse Abandonment, Price Drop, pricing page visit |
| 6 | Shopping experience | Abandoned cart, Post-purchase, Back in Stock |
| 7 | CRM | Score thresholds, lead funnel advancement |
| 8 | CDP | RFM thresholds, Shopify orders, Winback |

---

## Lead Gen CRM Scoring (→ ch07)

| Action | Points |
|--------|--------|
| Email opened | 5 |
| Email clicked | 15 |
| Site visit | 20 |
| Workflow completed | 20 |
| Call / meeting | 50 |
| Proposal / quote sent | 100 |

**Thresholds**: >100 Prospects · 50–100 Qualified · 20–50 Warm · <20 New/Cold

---

## RFM Matrix — 11 Clusters (→ ch07)

| Cluster | Recency | Frequency | Monetary | Action |
|---------|---------|-----------|----------|--------|
| Champions | High | High | High | Reward, use as ambassadors/lookalikes |
| Loyal Customers | Medium | High | Medium-High | Retain, exclusive offers |
| Potential Loyalist | High | Medium | Medium | Push toward second purchase |
| New Customers | High | Low | Low | Onboarding, educate about brand |
| Promising | High | Low | Low | Light nurturing |
| Needs Attention | Medium | Medium | Medium | Stimulate before they lapse |
| About To Sleep | Low | Low | Low | Offer + urgency |
| At Risk | Low | High | High | Aggressive winback |
| Can't Lose Them | Low | High | Very High | Absolute top-priority winback |
| Hibernating | Very Low | Low | Low | Last attempt then Sunset |
| Lost | Minimal | Minimal | Minimal | Sunset Flow |

---

## 6 Elements of Workflow Grammar (→ ch06)

1. **Goal + KPI** — how do I measure it? Who do I EXCLUDE?
2. **Segment** — large enough? (it thins out at every step)
3. **Trigger / Enrollment** — exact condition + AND/OR/NOT
4. **Delay** — how long do I wait between one action and the next?
5. **If/then** — conditional branches
6. **Time** — always-on? Single entry?

---

## Indicative Timing for Main Flows

| Flow | Emails | Timing |
|------|--------|--------|
| Welcome series | 4–7 | Days 0/1/3/5/7/10/14 |
| Lead gen drip campaign | 4–7 | 12 days (example: 7 emails) |
| Abandoned cart | 1–2 | After 1h + 24h |
| Post-purchase | 3–5 | Confirmation / how-to (day 5) / review (day 10) / up-sell (day 15) |
| Replenishment | 1–2 | ~80% of product cycle (e.g. day 80 of 90) |
| Winback | 2 | Day 120 + day 135 |
| Sunset | 1 | After inactivity threshold |
| Birthday | 1–2 | Birthday day + reminder |

---

## Funneling Flow — Real Data

Without funneling: 75% → 39% → 30% → 26% → 27% → 20%
With funneling from the 4th email (only those who opened the previous 3):
**48.5% → 62.1% → 77.8%**

---

## Coupon — When to Use Dynamic vs. Static

| Situation | Recommended Type |
|-----------|-----------------|
| Personalized flow (winback, birthday, post-purchase) | **Dynamic + unique** (countdown) |
| Generic welcome series with high volume | Static acceptable |
| BFCM / sales / public offer | Static (but limit distribution) |
| Segmentation by number of purchases | **Dynamic** (different % per cluster) |

---

## Advanced Segments — Quick Action

| Segment | Trigger | Action |
|---------|---------|--------|
| Deal Hunter | Bought only at a discount | Price Drop alert, no full price |
| Last-Minute Shopper | Buys close to deadline | Highlight delivery times |
| VIP | High LTV / frequency | Early access, exclusivity |
| Window Shopper | Visits but doesn't convert | How-to, support, social proof |
| Impulse Buyer | Buys at launches | Early access, urgency |
| Missed | Order cancelled / refunded | Survey + repurchase incentive |

---

## Pre-Launch Flow Checklist

- [ ] Goal defined and KPI chosen
- [ ] Segment large enough
- [ ] Trigger tested in sandbox
- [ ] Exclusions configured (who should NOT receive)
- [ ] Smart Sending active (no overlap)
- [ ] Dynamic coupons (not static in personalized flows)
- [ ] UTM links tagged for GA4
- [ ] Subject line/preview text tested (A/B or AI test)
- [ ] Mobile version verified
- [ ] Sunset Flow connected downstream
