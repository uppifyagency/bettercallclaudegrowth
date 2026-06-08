# Chapter 3: Initial Setup, Deliverability & GDPR

## Core Idea
Before sending any email, fine-tune your platform: domain authentication (deliverability), templates, list organization, system links, and GDPR compliance. These are the foundations that prevent spam and enable segmentation.

## Frameworks Introduced
- **Sender & domain setup**: verify your sending email address + authenticate via **DNS records** (reputation/deliverability). Use **different senders** to separate personal and company communications — the sender, together with subject line and preview text, contributes to open rates.
  - Company: "Company Name", or by department (Staff, Billing, Orders, Subscriptions).
  - Personal (for newsletters): "Jacopo di Studio Samo", "Jacopo from Studio Samo" → higher open rates and flows that can be separated by sender.
- **Sized templates (S/M/L)**: build the most complete template and remove sections to create variants.
  - **S**: title + creative + text box + final CTA. **M**: + cross-content section. **L**: + additional info section.
  - **Seasonal skins**: Christmas, Halloween, **Black Friday (BFCM)** — adapt fonts/colors of the main template (e.g., total dark version for BF).
  - **Plain-text**: pure-text emails as if written by hand → reduces spam risk; works great combined with HTML emails.
- **GDPR (lawyer Vercelloni)** — two essential criteria: compliance with processing principles + **consent** from the data subject.
  - Principles (art. 5): **data minimization** (only necessary data: for a newsletter name + email are enough), **integrity and confidentiality**, **purpose limitation**.
  - Pillars: **privacy by design** and **privacy by default**.
  - Marketing consent must be free, explicit (not tacit), separate per purpose, informed, given in advance, easily revocable — and **must be saved/recorded** (burden on the data controller).

## Key Concepts
- **Soft spam**: exception to consent → promotional sending to those who have **already purchased** **similar** products/services, provided that the marketing opt-in was clearly offered upfront.
- **Contact forms vs newsletter forms**: contact forms require a **second separate and optional checkbox** for marketing (never mandatory).
- **Double opt-in**: confirmation link/email upon subscription.
- **List organization**: few lists + **attributes/tags** for dynamic segments "as you go" (vs separate lists for market/language or b2b/b2c/suppliers/partners).
- **System links**: customize data-edit, unsubscribe, and confirmation pages; in the unsubscribe page offer a **plan B** (reduce frequency, choose topics) to curb cancellations.

## Mental Models
- "GDPR is an opportunity, not just a constraint" (Mazzanti): it drives Customer Retention and the value of first-party data.
- Think of the list as infrastructure for **dynamic segments** (interactions, completed automations, site/app, attributes/tags, dates, CRM/CDP, consents, geo, purchase behaviors).

## Anti-Patterns
- Sending without authenticating your domain → ending up in spam.
- Mandatory marketing checkbox or unsaved consent → violation.
- Disorganized lists → impossible segmentation.

## Takeaways
1. Authenticate domain (DNS) and diversify senders before the first send.
2. Build S/M/L templates + seasonal skins + one plain-text variant.
3. Marketing consent: separate, explicit, saved; minimize data collected.
4. Organize lists on attributes/tags to enable dynamic segments.

## Connections
- **Ch 4**: subject line/preview/sender for open rate.
- **Ch 7**: attributes/tags become segments.
