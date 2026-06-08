# Capitolo 10: Creare contenuti utili e affidabili, link interni ed esterni

## Core Idea
Creare contenuti interessanti e utili incide sulla presenza in SERP più di ogni altro suggerimento. I link sono il mezzo principale con cui Google scopre le pagine e con cui dimostri le tue conoscenze.

## Frameworks Introdotti
- **Attributi dei contenuti di qualità**: testo leggibile e ben organizzato (H2/H3); contenuti unici (angolo/esempi/dati propri, non rimaneggiamento); contenuti aggiornati (aggiorna o deindicizza/redirigi il vecchio); utili e affidabili (fonti esperte, citazioni verificabili, autorialità).
- **Keyword research 2026: dalle query alle entità**. Un'entità è un concetto univoco nel Knowledge Graph. Ottimizzare per un'entità = coprire le sue proprietà essenziali e relazioni. I sistemi di language matching di Google capiscono le co-occorrenze semantiche anche senza i termini esatti.
- **Le 3 annotazioni rel** (dal 2019 indicazioni, non direttive assolute): `ugc` (forum/commenti/recensioni utente), `sponsored` (pubblicità/affiliate), `nofollow` (link non endorsati).

## Code Examples
```html
<!-- ✓ Anchor descrittivo -->
<a href="/guida/core-web-vitals">guida ai Core Web Vitals</a>
<!-- ✗ Anchor generico -->
<a href="/guida/core-web-vitals">clicca qui</a>
```

## Mental Models
- "Originalità non significa argomento mai trattato": significa angolo proprio, esempi originali, dati o esperienze di prima mano.
- Gli utenti esperti e i neofiti usano parole diverse ("salumi" vs "tagliere di formaggi" vs "aperitivo italiano"): scrivi pensando ai lettori, ma non inseguire ogni variante.

## Anti-patterns
- **Interstitial/popup intrusivi**: dal 2017 segnale di penalizzazione su mobile. Intrusivi = popup che coprono il contenuto, interstitial standalone da chiudere, layout above-the-fold pieno di popup. Eccezioni legittime: cookie consent ben fatti, verifica età, login, banner piccoli.
- **Link a risorse non attendibili senza annotazione**: aggiungi `nofollow`/`ugc` per non associare il tuo sito.
- **UGC senza annotazione automatica**: ogni link utente deve avere `ugc`/`nofollow` aggiunto dal CMS.

## Key Takeaways
1. Suddividi i contenuti lunghi: aiuta screen reader e AI Overview a estrarre passaggi citabili.
2. Un articolo datato non aggiornato è debito tecnico: aggiornalo o redirigilo.
3. Entity coverage > keyword placement.
4. Combinazione corretta nuovi siti: link editoriali senza attributo, UGC con `ugc`, pagati con `sponsored`.

## Connects To
- **Ch 11**: come questi contenuti appaiono in SERP.
- **Ch 13** (SEO): E-E-A-T e la centralità di Experience nel 2026.
- **Ch 20** (Exec): SQRG e il primato del contenuto non-commodity.
