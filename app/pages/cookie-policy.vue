<template>
  <div>
    <Head>
      <title>Cookie Policy - Dott. Piernatale Civero</title>
      <meta name="description" content="Cookie Policy del sito piernatalecivero.it - Informativa sull'uso dei cookie ai sensi della normativa vigente." />
      <meta name="robots" content="noindex, follow" />
      <link rel="canonical" href="https://piernatalecivero.it/cookie-policy" />
    </Head>

    <section class="page-header">
      <div class="container">
        <nav class="breadcrumb">
          <NuxtLink to="/">Home</NuxtLink>
          <span>/</span>
          <span>Cookie Policy</span>
        </nav>
        <h1>Cookie Policy</h1>
        <p>Informativa sull'utilizzo dei cookie</p>
      </div>
    </section>

    <section class="section">
      <div class="container legal-content">
        <p><strong>Ultimo aggiornamento:</strong> 31 Gennaio 2026</p>

        <h2>1. Cosa Sono i Cookie</h2>
        <p>I cookie sono piccoli file di testo che i siti web visitati inviano al browser dell'utente, dove vengono memorizzati per essere ritrasmessi agli stessi siti alla visita successiva. I cookie sono utilizzati per diverse finalità, tra cui memorizzare le preferenze dell'utente, migliorare l'esperienza di navigazione e raccogliere informazioni statistiche.</p>

        <h2>2. Tipologie di Cookie Utilizzati</h2>
        <h3>Cookie Tecnici (necessari)</h3>
        <p>Questo sito utilizza esclusivamente cookie tecnici necessari al funzionamento del sito stesso. Questi cookie non raccolgono informazioni personali dell'utente e non richiedono il consenso preventivo. Includono:</p>
        <ul>
          <li>Cookie di sessione per il funzionamento del server</li>
          <li>Cookie per la gestione del form di contatto</li>
        </ul>

        <h3>Cookie di Terze Parti</h3>
        <p>Il sito include una mappa di Google Maps nella pagina Contatti. Google potrebbe installare cookie propri. Per informazioni sui cookie di Google, consultare la <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer">Privacy Policy di Google</a>.</p>

        <h2>3. Come Gestire i Cookie</h2>
        <p>L'utente può gestire le preferenze relative ai cookie direttamente attraverso le impostazioni del proprio browser:</p>
        <ul>
          <li><strong>Chrome:</strong> Impostazioni → Privacy e sicurezza → Cookie</li>
          <li><strong>Firefox:</strong> Opzioni → Privacy e sicurezza → Cookie</li>
          <li><strong>Safari:</strong> Preferenze → Privacy → Cookie</li>
          <li><strong>Edge:</strong> Impostazioni → Privacy → Cookie</li>
        </ul>
        <p>La disabilitazione dei cookie tecnici potrebbe compromettere alcune funzionalità del sito.</p>

        <h2>4. Titolare del Trattamento</h2>
        <p>Il Titolare del trattamento è il <strong>Dott. Piernatale Civero</strong>, Via Monte Circeo 12, 00015 Monterotondo (RM). Per informazioni complete sul trattamento dei dati personali, si rimanda alla <NuxtLink to="/privacy">Privacy Policy</NuxtLink>.</p>
      </div>
    </section>
  </div>
</template>

<style scoped>
.page-header {
  background: linear-gradient(135deg, var(--primary-light) 0%, var(--bg-cream) 100%);
  padding: 60px 0;
  text-align: center;
}
.breadcrumb { margin-bottom: 1.5rem; font-size: 0.9rem; color: var(--text-light); }
.breadcrumb a { color: var(--primary); }
.breadcrumb span { margin: 0 0.5rem; }
.page-header h1 { font-size: 2.5rem; color: var(--secondary); margin-bottom: 1rem; }
.page-header p { font-size: 1.1rem; color: var(--text-light); }
.legal-content { max-width: 800px; margin: 0 auto; }
.legal-content h2 { font-size: 1.35rem; color: var(--secondary); margin: 2rem 0 1rem; }
.legal-content h3 { font-size: 1.1rem; color: var(--secondary); margin: 1.5rem 0 0.75rem; font-family: 'Open Sans', sans-serif; }
.legal-content p { font-size: 0.95rem; color: var(--text); line-height: 1.8; margin-bottom: 1rem; }
.legal-content ul { padding-left: 1.5rem; margin-bottom: 1rem; }
.legal-content li { font-size: 0.95rem; color: var(--text); line-height: 1.8; margin-bottom: 0.5rem; }
.legal-content a { color: var(--primary); font-weight: 600; }
</style>
