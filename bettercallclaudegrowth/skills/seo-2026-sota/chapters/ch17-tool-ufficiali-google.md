# Capitolo 17: Tool ufficiali Google

## Core Idea
Official tools are web UIs (UI) built on top of the APIs/engines already documented. The UI is for one-off audits; for production and CI/CD, use the equivalent APIs.

## Frameworks Introdotti
- **PageSpeed Insights (PSI)**: UI on top of the `runPagespeed` API. 4 sections: CWV Assessment Pass/Fail (CrUX), CrUX detail, performance diagnosis (Lighthouse lab), diagnostics + passed audits. **2026 Caveat**: Google plans to remove CrUX data from the PSI payload → migrate to the CrUX API/History API for field data; Lighthouse remains.
- **Rich Results Test**: checks whether a URL/snippet will generate rich results; tests ONLY the types supported by Google; default crawler = smartphone.
- **Schema Markup Validator** (validator.schema.org): validates ALL schema.org types, not just those with a rich result.
- **Canonical CI/CD pattern for structured data**: (1) local JSON-LD validation with schema-dts + AJV; (2) Schema Markup Validator as a syntactic check; (3) Rich Results Test as a manual pre-production gate on the canonical staging URL.

## Key Concepts — Google Search Console, 2026 updates
- AI-Powered Configuration in the Performance report (natural-language queries, Feb 2026).
- Branded queries filter stable (Nov 2025).
- Weekly/Monthly aggregation toggle (Dec 2025).
- Custom annotations on charts (Nov 2025).
- Pilot Social Channel Insights (2026).
- **Limits**: 1,000 rows/UI; 16 months of history; URL Inspection ~10–12/day UI, 2,000/day API.

## Reference Table — which tool for what
| Tool | URL | Use |
|---|---|---|
| PageSpeed Insights | pagespeed.web.dev | Performance audit (lab + field) |
| Rich Results Test | search.google.com/test/rich-results | Google rich result eligibility |
| Schema Markup Validator | validator.schema.org | Formal schema.org validation |
| Search Console | search.google.com/search-console | Property monitoring |

## Anti-patterns
- Relying on CrUX data in the PSI payload for the long term (being deprecated): use the CrUX API as the authoritative source.
- Using the Rich Results Test to validate schema types NOT supported by Google → use the Schema Markup Validator instead.

## Key Takeaways
1. UI for one-shot audits, API for production/CI.
2. Two complementary validators: Rich Results Test (Google eligibility) + Schema Markup Validator (schema.org correctness).
3. Know GSC's operational limits before planning exports/automations.
4. For stack audits: knowing what is deprecated matters as much as knowing what is active.

## Connects To
- **Ch 18** (Exec): the APIs behind these tools.
- **Ch 13/14** (SEO): schema validation and GSC monitoring in practice.
