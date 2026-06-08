# Capitolo 17: Tool ufficiali Google

## Core Idea
I tool ufficiali sono interfacce web (UI) sopra le API/motori già documentati. L'UI serve per audit puntuali; per produzione e CI/CD si usano le API equivalenti.

## Frameworks Introdotti
- **PageSpeed Insights (PSI)**: UI sopra l'API `runPagespeed`. 4 sezioni: CWV Assessment Pass/Fail (CrUX), dettaglio CrUX, diagnose performance (Lighthouse lab), diagnostics+passed audits. **Caveat 2026**: Google prevede di rimuovere i dati CrUX dal payload PSI → migrare a CrUX API/History API per i field; Lighthouse resta.
- **Rich Results Test**: verifica se una URL/snippet genererà rich results; testa SOLO i tipi supportati da Google; crawler default = smartphone.
- **Schema Markup Validator** (validator.schema.org): valida TUTTI i tipi schema.org, non solo quelli con rich result.
- **Pattern CI/CD canonico structured data**: (1) validazione locale JSON-LD con schema-dts + AJV; (2) Schema Markup Validator come check sintattico; (3) Rich Results Test come gate manuale pre-produzione su URL canonica di staging.

## Key Concepts — Google Search Console, novità 2026
- AI-Powered Configuration nel Performance report (query in linguaggio naturale, feb 2026).
- Branded queries filter stabile (nov 2025).
- Weekly/Monthly aggregation toggle (dic 2025).
- Custom annotations sui chart (nov 2025).
- Pilot Social Channel Insights (2026).
- **Limiti**: 1.000 righe/UI; 16 mesi storico; URL Inspection ~10-12/giorno UI, 2.000/giorno API.

## Reference Table — quale tool per cosa
| Tool | URL | Uso |
|---|---|---|
| PageSpeed Insights | pagespeed.web.dev | Audit performance (lab+field) |
| Rich Results Test | search.google.com/test/rich-results | Eleggibilità rich result Google |
| Schema Markup Validator | validator.schema.org | Validazione formale schema.org |
| Search Console | search.google.com/search-console | Monitoraggio proprietà |

## Anti-patterns
- Affidarsi ai dati CrUX nel payload PSI per il lungo termine (in dismissione): usa la CrUX API come fonte autoritativa.
- Usare il Rich Results Test per validare tipi schema NON supportati da Google → usa lo Schema Markup Validator.

## Key Takeaways
1. UI per audit one-shot, API per produzione/CI.
2. Due validatori complementari: Rich Results Test (eleggibilità Google) + Schema Markup Validator (correttezza schema.org).
3. Conosci i limiti operativi di GSC prima di pianificare export/automazioni.
4. Per audit di stack: sapere cosa è deprecato conta quanto sapere cosa è attivo.

## Connects To
- **Ch 18** (Exec): le API dietro questi tool.
- **Ch 13/14** (SEO): validazione schema e monitoraggio GSC in pratica.
