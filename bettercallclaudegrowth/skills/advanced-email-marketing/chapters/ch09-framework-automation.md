# Chapter 9: Automation Frameworks by Scenario

## Core Idea
Three flow types (Trigger / Funneling / Date Flow) and two complete frameworks (Lead Generation, E-commerce) to adapt to your own business. Start from the basics, then optimize and add pieces.

## Frameworks Introduced
- **Trigger Flow**: activated by a specific action — dates, e-commerce (post-purchase, cart), engagement (email/site), CRM/CDP (score/RFM threshold). E.g.: post-purchase → onboarding; cart → recovery; new VIP → coupon; "potential" lead tagged by sales → dedicated flow; pricing page visit → mini support workflow.
- **Funneling Flow**: after N mandatory emails, continue **only** with those who open/click → open rate *climbs back up*.
  - Business School Case (real data): **without** funneling the open rate drops (75%→39%→30%→26%→27%→20%); **with** funneling from the 4th email (segment "opened the previous 3") it rises back to **48.5% → 62.1% → 77.8%**.
- **Date Flow**: birthdays / anniversaries / time since last purchase. Collect missing data (Balique® case: email that promises benefits → Typeform updates the contact record). *Pre* events (preparation: travel, expiring subscription, replenishment) and *post* events (reviews, survey, "last chance").
- **Framework: Lead Generation** (services / B2B / B2C training): **Welcome Flow** (post-acquisition) + **Drip Campaign** (nurturing, include plain-text email from founder/CEO) + **Follow-Up** (reminders, reviews) + **CRM** (funneling on CRM data, score, task to sales). Typical scenario: 4–7 emails; email #2 personal plain-text the next day during business hours; tag "Automation Completed" / "Prospects" for those who open everything (Accademia della Pubblicità case: 7 emails in 12 days).
- **Framework: E-commerce**:
  - **Welcome Series** ← newsletter sign-up (jewelry case: 10% discount → reminder at 4h → last chance at 8h, then 7 emails every 3 days).
  - **Shopping Flow**: **Browse Abandonment** (viewed products, e.g. 2h) · **Abandoned Cart** (1 email or flow: reminder + expiry lever; rarely beyond 7 days) · **Post-Purchase** (tips, review, coupon, up/cross-sell; different flow for new vs. returning customer) · **Replenishment** (repeat buyer spends ~3×; flow at ~80 days on a 90-day product; *Expected Date Of Next Order*) · **Back in Stock / Price Drop / Availability Drop**.
  - **Up & Cross Selling**: bundles/sets, travel size, warranties; by category/brand/type.
  - **CDP**: Birthdays (Bait & Hook), **Winback/Churn** (2 emails, e.g. 120 + 15 days), anniversaries, RFM thresholds.
- **Sunset Flow**: archive inactive contacts (e.g. no opens for X days) → improves metrics and **lowers plan costs** (archived contacts are not billed). Define the threshold based on your sending frequency (not too drastic).

## Key Concepts
- **Dynamic and unique coupons** (best practice): personalized (non-shareable) + time-limited (countdown) → higher conversions; better than static codes in personalized flows (static is fine for sales/BFCM/generic welcome).
- **Product feed/catalog in emails**: choose what to show (new arrivals, best sellers, by category/brand/price, most viewed/added, mix) — requires DEM integrated with the e-commerce platform.

## Mental Models
- **Lombardi Case (e-commerce, +57% revenue in 2 months with same ad spend)**: 5 "basic" automations → thank-you with cluster discounts (3+ purchases 10% always; 2 → 15%/30 days; 1 → 20%/30 days; 0 → 50%/24h), 2-phase cart recovery (1h + 24h with 10%), newsletter pop-up with lead magnet, 4-email drip that removes purchase friction. Then doubled budget + CRO → revenue tripled.
- "Don't rush": start from the basics, improve, add. Success comes from the combination of **marketer + automation**.

## Anti-Patterns
- Static coupons distributed outside the contact → margin erosion.
- Keeping inactive contacts → worse metrics and higher plan costs.
- Creating too many automations too quickly → confusion.

## Takeaways
1. Trigger Flow for actions; Funneling Flow to bring open rate back up; Date Flow for recurring events.
2. Implement the Lead Gen framework (Welcome + Drip + Follow-Up + CRM) and the E-commerce framework (Welcome + Shopping + Up/Cross + CDP).
3. Use dynamic/unique coupons and targeted product feeds.
4. Close with Winback then Sunset Flow for list hygiene and cost control.

## Connections
- **Ch 6**: the grammar with which you build these flows.
- **Ch 7**: the segments on which they are triggered.
- **Ch 4**: dynamic coupons and content in emails.
