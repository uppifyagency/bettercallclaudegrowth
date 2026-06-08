# Chapter 8: Tracking & Data Analysis

## Core Idea
Email marketing automation is a strategy-driven flow: it must be measured. You need the right KPIs **and** coverage of all touchpoints across the entire customer journey (Sbarzaglia). Tracking (Zambon / Tag Manager Italia) is the backbone of your data.

## Frameworks Introduced
- **Three tracking configurations**:
  - **#1 Email marketing tool tracking code**: install the DEM platform script on the website to link visits to contacts.
  - **#2 UTM parameters + API to build segments in GA4**: tag links and use APIs to build audiences in Google Analytics 4.
  - **Bonus: GA4 + Server-Side tracking** — move tracking from the browser to the server.
- **Advantages of Server-Side**:
  - increases data **accuracy** (bypasses device-level obstacles: e.g. a phone call while adding to cart);
  - increases **security** of Google Tag Manager;
  - more **flexibility** in data processing → EU Privacy compliance;
  - optimizes GTM → faster pages.

## Key Concepts
- **Touchpoint**: fundamental points of the customer journey to monitor beyond the campaign's final KPIs.
- **KPI**: key indicators; recall (ch01) the distinction between *leading* KPIs and *lagging* key results. Open rate is a KPI heavily influenced by the subject line.
- **Cookieless context**: third-party cookies being deprecated (Cookiegeddon), Garante provisions, iOS 14/15 → server-side is the technical response (advertising details in ch10).

## Mental Models
- "Tracking in service of email marketing automation (and vice versa)": data feeds flows and flows generate data to track.
- Treat MA as an end-to-end measurable system, not "a simple email sequence".

## Anti-Patterns
- Treating MA as an email sequence without analysis → losing control of performance.
- Relying solely on client-side tracking in the privacy era → incomplete/inaccurate data.

## Takeaways
1. Install the DEM tracking code and link visits to contacts.
2. Use UTM + API to build segments/audiences in GA4.
3. Evaluate Server-Side tracking for accuracy, security, privacy, and speed.
4. Define a few relevant KPIs and monitor journey touchpoints, not just the final conversion.

## Connections
- **Ch 1**: KPIs in the plan (leading vs lagging).
- **Ch 5**: site behaviors as triggers.
- **Ch 10**: cookieless, ATT, and first-party data in advertising.
