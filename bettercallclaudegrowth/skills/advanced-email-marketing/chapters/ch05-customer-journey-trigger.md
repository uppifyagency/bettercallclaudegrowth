# Capitolo 5: Customer Journey & gli 8 trigger

## Core idea
The strategy is designed **starting from the Customer Journey**: the purchase path is broken down and the first triggers for automations are identified. Each trigger gives rise to both flows and dynamic segments.

## Frameworks introduced
- **Customer Journey Map (e-commerce)** → base flows applicable to almost every store: welcome series, newsletter (promo/news/brand story), visitor recovery, cart/checkout recovery, post-purchase series (thank you, reviews, how-to, coupon).
- **The 8 activation/segmentation triggers**:
  1. **Lead acquisition** → onboarding/welcome series; pair a flow with every channel.
  2. **Email interactions** → audience maintenance (inactive) + identifying actives; segments: opened the last X, clicked specific emails, completed the flow.
  3. **Events/dates** → birthday (high open rates; ideas beyond discounts: gift box, bonus, samples, **Bait & Hook technique** on LTV), subscription anniversaries, first-purchase date.
  4. **Attributes assigned to the contact** → Trigger/Condition/Action logic (e.g. "after 3 days from open, IF attribute 'Call booked'=No → reminder").
  5. **On-site behavior** → pricing page = evaluation stage; **Price Drop** to visitors who viewed/added to cart (limited by GDPR).
  6. **Shopping experience** → cart/back-in-stock, wishlist, up/cross-selling, post-purchase; separate flows for new vs. returning customers.
  7. **CRM** → lead progression status, conversion probability, **score**; list maintenance and identification of "best in town" customers.
  8. **CDP** → syncs email/shop; Shopify events (orders, amount, checkout started, refunds); enables the **RFM matrix**.
- **RFM Matrix (Recency, Frequency, Monetary)**: segments by amount spent, number of orders, purchase regularity. Each customer changes cluster over time (Champion today, At Risk tomorrow). → details in ch07.

## Key concepts
- **LTV (LifeTime Value)** and **Expected Date Of Next Order**: predictive data (ML) that estimates the next order date → trigger for repurchase.
- **Churn**: former customers who stop purchasing → recovery with **Winback**.
- **Replenishment**: repurchase of consumables (e.g. 90-day treatment → flow at 80 days).
- **Zero/First-party data**: data intentionally provided by the user, the reliable foundation of segments.
- **WIIFM / per funnel stage (Neha Divanji)**: Awareness → *What's In It For Me? / Why us? / elevator pitch*; Consideration → comparison with competitors + press mentions; Purchase → reviews/rating + UGC; Onboarding → reinforces the choice; Loyalty/Advocacy → referral, ambassador, lookalike.

## Mental models
- Work **full-funnel**: the purchase conversion is not the only metric; move people toward the *next conversion*, post-sale included (retention).
- "We set the rules of the game" on CDP/RFM: establish where and when to intervene.

## Anti-patterns
- Treating the purchase as the only metric → you ignore the micro-triggers that enable it.
- Wanting to build "the entire castle" in the first version → proceed step-by-step.

## Takeaways
1. Start from the customer journey: break down the path, identify the first triggers.
2. Use the 8 triggers as a menu of flows and segments.
3. Leverage RFM, LTV, and Expected Date Of Next Order to anticipate repurchase.
4. Map content to funnel stage (WIIFM, social proof, etc.).

## Connections
- **Ch 6**: how triggers become workflows.
- **Ch 7**: RFM and segments in detail.
- **Ch 9**: flows by scenario (shopping, dates, winback).
