<template>
  <div>
    <Head>
      <title>Richiesta Inviata - Dott. Piernatale Civero</title>
      <meta name="robots" content="noindex, nofollow" />
    </Head>

    <section class="grazie-section">
      <div class="container">
        <div class="grazie-card">
          <div class="grazie-icon">
            <svg width="80" height="80" viewBox="0 0 80 80" fill="none">
              <circle cx="40" cy="40" r="40" fill="#27ae60"/>
              <path d="M24 40l10 10 22-22" stroke="#fff" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </div>
          <h1>Richiesta Inviata con Successo</h1>
          <p class="grazie-subtitle">Il Dott. Piernatale Civero ha ricevuto la tua richiesta e ti ricontatterà <strong>entro 24 ore lavorative</strong>.</p>

          <div class="grazie-steps">
            <div class="grazie-step">
              <div class="step-num">1</div>
              <p>La tua richiesta è stata ricevuta</p>
            </div>
            <div class="grazie-step">
              <div class="step-num">2</div>
              <p>Il Dott. Civero valuterà il tuo caso</p>
            </div>
            <div class="grazie-step">
              <div class="step-num">3</div>
              <p>Verrai contattato per fissare un appuntamento</p>
            </div>
          </div>

          <div class="grazie-urgente">
            <p><strong>Hai urgenza?</strong> Chiama direttamente lo studio:</p>
            <a href="tel:0690625768" class="btn btn-primary">06 90625768</a>
          </div>

          <NuxtLink to="/" class="btn btn-outline grazie-back">Torna alla Homepage</NuxtLink>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
.grazie-section {
  min-height: 80vh;
  display: flex;
  align-items: center;
  padding: 60px 0;
  background: linear-gradient(135deg, var(--primary-light) 0%, var(--bg-cream) 100%);
}
.grazie-card {
  max-width: 640px;
  margin: 0 auto;
  background: #fff;
  border-radius: 16px;
  padding: 3rem;
  text-align: center;
  box-shadow: 0 20px 60px rgba(0,0,0,0.08);
}
.grazie-icon { margin-bottom: 1.5rem; }
.grazie-card h1 {
  font-family: 'Playfair Display', Georgia, serif;
  font-size: 1.75rem;
  color: var(--secondary);
  margin-bottom: 1rem;
}
.grazie-subtitle {
  color: var(--text-light);
  font-size: 1.05rem;
  margin-bottom: 2rem;
  line-height: 1.7;
}
.grazie-steps {
  display: flex;
  gap: 20px;
  margin-bottom: 2rem;
  text-align: center;
}
.grazie-step {
  flex: 1;
  padding: 1rem;
  background: var(--bg-light);
  border-radius: 10px;
}
.step-num {
  width: 36px;
  height: 36px;
  background: var(--primary);
  color: #fff;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
  margin: 0 auto 0.75rem;
  font-family: 'Playfair Display', serif;
}
.grazie-step p {
  font-size: 0.85rem;
  color: var(--text-light);
}
.grazie-urgente {
  background: var(--bg-light);
  padding: 1.5rem;
  border-radius: 10px;
  margin-bottom: 1.5rem;
}
.grazie-urgente p { margin-bottom: 0.75rem; color: var(--text); }
.grazie-back { margin-top: 0.5rem; }
@media (max-width: 768px) {
  .grazie-steps { flex-direction: column; }
  .grazie-card { padding: 2rem; }
}
</style>
