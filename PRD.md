# PRD — Aggiornamento piernatalecivero.it

## Obiettivo
Aggiornare il sito piernatalecivero.it con:
1. **Nuova dicitura ufficiale:** "Dott. Piernatale Civero - Esperto in Gnatologia per riabilitazioni di casi complessi di implantologia e ortodonzia"
2. **Concetto chiave da integrare:** I vantaggi di riequilibrare la bocca gnatologicamente PRIMA di eseguire riabilitazioni orali tramite implantologia e ortodonzia, perché garantisce maggiore durata del risultato nel tempo e una migliore estetica.

## File da modificare

### 1. nuxt.config.ts
- Aggiornare `site.name`, `app.head.title`, `og:title`, `description`, `og:description`, Schema.org `description`
- Vecchia: "Esperto in Gnatologia per Riabilitazioni Complesse tramite l'Implantologia e l'Ortodonzia"
- Nuova: "Esperto in Gnatologia per riabilitazioni di casi complessi di implantologia e ortodonzia"

### 2. SiteHeader.vue
- Vecchia: `DOTT. PIERNATALE CIVERO – ESPERTO IN GNATOLOGIA, POSTUROLOGIA ED RIEQUILIBRIO DELL'OCCLUSIONE` (visibile nello screenshot)
- La scritta attualmente nel codice è "Dott. Piernatale Civero" con subtitle "Gnatologo · Monterotondo"
- NOTA: Lo screenshot mostra un testo diverso dal codice — probabilmente c'è un elemento nel layout/app.vue
- Aggiornare subtitle a: "Esperto in Gnatologia per riabilitazioni complesse"

### 3. app.vue
- Verificare se contiene il banner header visibile nello screenshot

### 4. SiteFooter.vue
- Riga 7: Aggiornare descrizione con nuova dicitura + concetto riequilibrio gnatologico
- Aggiungere "Direttore Sanitario: Dott. Piernatale Civero" (compliance legale)

### 5. pages/index.vue (Homepage)
- Aggiornare Head title/description/og con nuova dicitura
- Hero subtitle: integrare concetto riequilibrio gnatologico per durata risultati
- Sezione "Chi è il Dott. Civero": riscrivere con focus su riequilibrio gnatologico
- Aggiungere NUOVA SEZIONE dopo hero: "Perché il Riequilibrio Gnatologico è Fondamentale"
  - Spiegare che riequilibrare la bocca prima di impianti/ortodonzia = risultati più duraturi + estetica superiore
  - 3-4 card con vantaggi specifici

### 6. pages/gnatologia.vue
- Aggiornare meta con nuova dicitura dove rilevante
- Integrare nella sezione "L'Approccio" il concetto: la gnatologia come PREREQUISITO per impianti/ortodonzia di successo
- Aggiungere paragrafo su come il riequilibrio gnatologico migliora durata e estetica delle riabilitazioni

### 7. pages/implantologia.vue
- Nella sezione "Perché Scegliere il Dott. Civero" punto 02: rafforzare il concetto che il riequilibrio gnatologico PRIMA degli impianti = maggiore durata nel tempo + estetica superiore
- Aggiungere nuova sezione o box evidenziato: "Riequilibrio Gnatologico: il Segreto per Impianti che Durano"

### 8. pages/ortodonzia.vue
- Nella sezione "Approccio Integrato": rafforzare il concetto che la valutazione gnatologica prima dell'ortodonzia garantisce stabilità del risultato e migliore estetica
- Aggiornare contenuti con focus su durata e estetica del riequilibrio

### 9. pages/riabilitazione-complessa.vue
- Aggiornare hero subtitle con nuova dicitura
- Rafforzare il "highlight-box" sull'approccio multidisciplinare con il concetto di durata + estetica
- La pagina è già ben strutturata, serve solo enfatizzare il PERCHÉ del riequilibrio gnatologico

### 10. pages/contatti.vue
- Aggiornare meta description con nuova dicitura

### 11. pages/blog/index.vue e [slug].vue
- Aggiornare eventuali riferimenti alla vecchia dicitura

## Concetto chiave da comunicare in tutto il sito
**Il riequilibrio gnatologico prima di implantologia e ortodonzia:**
- Garantisce che impianti e protesi lavorino in armonia con l'articolazione e i muscoli
- I carichi masticatori si distribuiscono correttamente → maggiore durata degli impianti
- L'occlusione equilibrata previene usura anomala, fratture protesiche, perimplantite
- L'estetica è superiore perché la posizione mandibolare corretta definisce le proporzioni del viso
- Riduce il rischio di recidive ortodontiche e instabilità protesica
- Previene dolori articolari post-trattamento

## Normativa
- MAI usare "gratis", "gratuito", "promozione", "sconto", "offerta", "migliore" (superlativo assoluto)
- DEVE essere presente "Direttore Sanitario: Dott. Piernatale Civero" nel footer
