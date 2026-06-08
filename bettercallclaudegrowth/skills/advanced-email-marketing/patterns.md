# Patterns & Techniques — AEMA

Concrete techniques, ready-to-use flows, sequences, and best practices from the book. Each pattern includes when to use it, how to build it, and the main pitfalls.

---

## Welcome Series (Onboarding)
**When**: new subscriber from any channel (newsletter, pop-up, landing page, purchase).
**How**: 4–7 emails | pair a separate flow to each acquisition channel | include at least one plain-text "personal" email from the founder/CEO (day 2, during business hours) | use the **Soap Opera Sequence** (each email ends with a teaser) | add an "Automation Completed" tag at the end of the flow.
**Rule**: exclude people in onboarding from standard newsletters (Smart Sending or explicit segment).

---

## Drip Campaign (Nurturing B2B/B2C)
**When**: service/training lead gen; goal: move the lead to book a call or make a purchase.
**How**: 4–7 emails over 10–15 days | email #1 immediate value | email #2 plain-text "from the CEO" (removes friction) | alternate HTML and plain-text emails | CRM: at the end assign score and tag, then create a sales task for Prospects.
**Real case** (Accademia della Pubblicità): 7 emails in 12 days → significant conversions.

---

## Funneling Flow
**When**: newsletter campaigns or long flows where open rate drops.
**How**: after N mandatory emails (e.g. 3), the next one goes only to those who opened at least one of the previous ones → keep narrowing at every step.
**Real data** (Business School): without funneling 75%→39%→30%→26%→20%; with funneling from email #4: 48.5%→62.1%→77.8%.

---

## Abandoned Cart Recovery
**When**: checkout started but not completed.
**How**: max 2 emails — email #1 after 1h (reminder, no discount) | email #2 after 24h (deadline leverage or discount, unique dynamic coupon) | rarely beyond 7 days.
**Note**: do not add a discount immediately in email #1 — it devalues the product.

---

## Browse Abandonment
**When**: user visits a product/category page but does not add to cart.
**How**: 1–2 emails | short window (1–2h after visit) | show the viewed product | GDPR: verify behavioral tracking consent.

---

## Post-Purchase Series
**When**: after every purchase.
**How**: email #1 confirmation + thank you | email #2 how-to/product usage | email #3 review request (timing: 5–10 days after delivery) | email #4 coupon or up/cross-sell | **separate flow** for new vs. returning customer.
**Replenishment**: for consumable products (e.g. 90-day supply) → flow at day 80 with "running out?"; repeat buyers spend ~3x more.

---

## Winback Flow
**When**: customer inactive for X days (define threshold based on your purchase history).
**How**: 2 emails — email #1 at ~120 days (re-engagement, offer or value) | email #2 at +15 days (last chance, urgent tone) | those who don't open → Sunset.
**Lombardi case** (+57% revenue in 2 months): 5 "basic" automations including winback + thank-you by purchase cluster.

---

## Sunset Flow
**When**: contact hasn't opened in X months (threshold to calibrate based on your sending frequency).
**How**: 1 "are you still there?" email with a confirm-interest link | those who don't respond → archived (not billed in most plans).
**Benefits**: better open rate metrics + lower plan costs.

---

## Bait & Hook (missing data collection)
**When**: a key date is missing (birthday, purchase date, anniversary).
**How**: email that promises an exclusive benefit to those who submit the data → link to Typeform or internal form → data updated in the contact record → trigger activated on the date.
**Balique® case**: birthday collection using this method, then birthday flow with high open rate.

---

## Always-On Newsletter with a Proper Name
**How**: give your newsletter a name (e.g. "Always-On!") + dedicated landing page → A/B test "Subscribe to the newsletter" vs. "Subscribe now to [Name]!".
**Real case**: the named version = steady subscriptions; the generic version = almost zero.
**Recycle evergreens**: non-promotional evergreen emails should be re-sent to new subscribers via automation (→ newsletter gains retroactive value).

---

## Segmentation by Purchase Cluster (Winback Coupon)
**How**: segment by number of purchases → different coupons:
- 3+ purchases → 10% always (no additional coupon needed)
- 2 purchases → 15% valid for 30 days
- 1 purchase → 20% valid for 30 days
- 0 purchases → 50% valid for 24h (maximum urgency for first purchase)

---

## Date Flow (birthdays, anniversaries, recurring occasions)
**How**: collect date → flow activates N days before (pre: e.g. gift/preparation) or on the day itself (birthday: high open rate) | post-event email (review, support).
**Pre-event**: expiring subscription, upcoming trip, product running low (Replenishment).
**Post-event**: "how did it go?", survey, second opportunity.

---

## Dynamic and Unique Coupon (best practice)
**Rule**: in personalized flows always use unique per-contact coupons (non-shareable) + countdown timer (Mailtimer.io).
**When to use static**: general sales, BFCM, welcome series with very high subscription rate (volume).
**Reason**: static coupons spread beyond the contact → margin erosion.

---

## Lead Generation Framework (complete scenario)
1. **Welcome Flow** (post-acquisition): brand introduction + value.
2. **Drip Campaign** (nurturing): 4–7 emails, "personal" plain-text email, SOS.
3. **Follow-Up** (reminder): offer deadline, reviews, referral.
4. **CRM**: funneling on score/attributes, sales task for Prospects.

---

## E-commerce Framework (complete scenario)
1. **Welcome Series** ← newsletter sign-up (welcome discount + reminder at 4h + last chance at 8h, then 7 emails every 3 days).
2. **Shopping Flow**: Browse Abandonment → Abandoned Cart → Post-Purchase → Replenishment → Back in Stock / Price Drop.
3. **Up & Cross Selling**: bundles/sets, travel size, warranties; by category/brand.
4. **CDP**: Bait & Hook birthdays, Winback, anniversaries, RFM thresholds.
5. **Sunset Flow**: clean list, better metrics, reduced costs.

---

## Integrated Advertising (remarketing + lookalike)
**Remarketing**: export email segments (inactive, clicked-not-purchased, specific RFM) → Custom Audience on Meta/Google → messages consistent with the active email flow.
**Lookalike**: use Champions or high-LTV customers as seed → quality acquisition.
**Exclusion**: exclude active customers from cold acquisition campaigns.
**Full-funnel sync**: contacts in the Winback email flow also see a "Welcome back" ad on Meta.
