<template>
  <div class="site">
    <!-- Header -->
    <header class="header">
      <div class="container">
        <a href="/" class="logo">
          <img src="/images/logo.webp" alt="Dott. Piernatale Civero" />
        </a>
        <h1 class="site-title">
          <a href="/">Dott. Piernatale Civero</a>
        </h1>
        <p class="site-subtitle">Esperto in Gnatologia, Posturologia ed Riequilibrio dell'Occlusione</p>
      </div>
    </header>

    <!-- Hero Section -->
    <section class="hero">
      <div class="container">
        <div class="hero-content">
          <h2>Quando un Bel Sorriso ed una Bocca in Equilibrio ti fanno stare Bene</h2>
          <p>Il Dott. Piernatale Civero unisce gnatologia, posturologia e biomeccanica per un approccio personalizzato che migliora la salute orale e il benessere generale.</p>
        </div>
      </div>
    </section>

    <!-- About Section -->
    <section class="about-section" id="chi-sono">
      <div class="container">
        <div class="about-grid">
          <div class="about-image">
            <img src="/images/piernatale-civero.png" alt="Dott. Piernatale Civero" />
          </div>
          <div class="about-content">
            <h2>Il Dott. Piernatale Civero è un professionista con una Visione oltre il Sorriso.</h2>
            <p>
              Il <strong>Dott. Piernatale Civero</strong> è un odontoiatra con un'ampia formazione in
              <strong>gnatologia, posturologia</strong>, studioso dei concetti di osteopatia, specializzato
              nella connessione tra denti, corpo e benessere generale oltre numerose altre discipline
              convenzionali ed alternative.
            </p>
            <div class="curriculum">
              <p>Dal suo <em>curriculum</em>:</p>
              <ul>
                <li><strong>Laurea con Lode in Odontoiatria</strong> presso l'Università La Sapienza nel 2004</li>
                <li><strong>Master con Lode in Gnatologia, Occlusione e Postura</strong> presso l'Università La Sapienza nel 2006</li>
                <li>Odontoiatra scelto come <strong>Consulente del Tribunale di Tivoli</strong></li>
                <li><strong>Relatore e frequentatore</strong> di corsi e congressi a carattere nazionale ed internazionale</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Metodo Section -->
    <section class="metodo-section" id="metodo">
      <div class="container">
        <div class="metodo-intro">
          <h2>Il Metodo</h2>
          <p>
            Dopo anni di studi e approfondimenti in Italia e all'estero, ha sviluppato un
            approccio innovativo che integra:
          </p>
          <div class="metodo-pillars">
            <div class="pillar">Odontoiatria moderna e digitale</div>
            <div class="pillar">Biomeccanica e postura</div>
            <div class="pillar">Approccio naturale e biocompatibile</div>
          </div>
          <p class="metodo-result">
            Oggi, il suo metodo aiuta <strong>centinaia di pazienti a risolvere problematiche dentali</strong>
            che influenzano la loro vita quotidiana.
          </p>
        </div>

        <div class="fasi-grid">
          <div class="fase">
            <div class="fase-number">1</div>
            <h3>Prima Fase: Valutazione</h3>
            <p>Analizziamo la tua postura e occlusione per individuare squilibri e predisporre un piano personalizzato.</p>
          </div>
          <div class="fase">
            <div class="fase-number">2</div>
            <h3>Seconda Fase: Trattamento</h3>
            <p>Applichiamo tecniche innovative per riequilibrare l'occlusione e migliorare la postura in modo efficace.</p>
          </div>
          <div class="fase">
            <div class="fase-number">3</div>
            <h3>Terza Fase: Mantenimento</h3>
            <p>Monitoriamo i progressi e ottimizziamo i trattamenti per garantire risultati duraturi e salute globale.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Studio Image -->
    <section class="studio-section">
      <div class="container">
        <img src="/images/studio.jpg" alt="Studio del Dott. Piernatale Civero" class="studio-image" />
      </div>
    </section>

    <!-- Blog Section -->
    <section class="blog-section" id="blog">
      <div class="container">
        <div class="section-header">
          <h2>Blog</h2>
          <p>Scopri articoli approfonditi su gnatologia, posturologia e tecniche innovative per il riequilibrio dell'occlusione, pensati per migliorare il tuo benessere.</p>
        </div>
        <div class="blog-grid">
          <article class="blog-card">
            <NuxtLink to="/blog/gnatologia-e-denti-dritti">
              <img src="/images/blog-denti-dritti.jpg" alt="Gnatologia e denti dritti" />
            </NuxtLink>
            <div class="blog-content">
              <span class="blog-category">Gnatologia</span>
              <h3><NuxtLink to="/blog/gnatologia-e-denti-dritti">Gnatologia e denti dritti</NuxtLink></h3>
              <p>La gnatologia e i denti dritti: un matrimonio perfetto per il sorriso...</p>
            </div>
          </article>
          <article class="blog-card">
            <NuxtLink to="/blog/occlusione-e-postura">
              <img src="/images/blog-occlusione-postura.jpg" alt="Occlusione e Postura" />
            </NuxtLink>
            <div class="blog-content">
              <span class="blog-category">Posturologia</span>
              <h3><NuxtLink to="/blog/occlusione-e-postura">Occlusione e Postura</NuxtLink></h3>
              <p>La relazione tra occlusione e postura è un argomento di crescente interesse...</p>
            </div>
          </article>
          <article class="blog-card">
            <NuxtLink to="/blog/il-ruolo-fondamentale-di-un-esperto-in-gnatologia">
              <img src="/images/blog-gnatologia.jpg" alt="Il ruolo fondamentale di un esperto in gnatologia" />
            </NuxtLink>
            <div class="blog-content">
              <span class="blog-category">Specializzazione</span>
              <h3><NuxtLink to="/blog/il-ruolo-fondamentale-di-un-esperto-in-gnatologia">Il ruolo fondamentale di un esperto in gnatologia</NuxtLink></h3>
              <p>L'importanza di rivolgersi a un esperto di gnatologia non può essere sottovalutata...</p>
            </div>
          </article>
        </div>
        <div class="blog-cta">
          <NuxtLink to="/blog" class="btn btn-outline">Leggi tutti</NuxtLink>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="cta-section">
      <div class="container">
        <div class="cta-content">
          <h2>Un'occlusione equilibrata influisce sulla qualità di Vita</h2>
          <p>Prenota facilmente una visita personalizzata con il Dott. Civero.</p>
        </div>
      </div>
    </section>

    <!-- Final CTA -->
    <section class="final-cta-section">
      <div class="container">
        <h2>Scopri come la gnatologia può trasformare il tuo Sorriso ed il tuo Equilibrio</h2>
        <a href="https://pazienti.geniusmile.com/paziente/index/nuovo/?centro=2" class="btn btn-primary" target="_blank">
          Clicca qui per chiedere informazioni o prenotare una visita
        </a>
      </div>
    </section>

    <!-- Footer -->
    <footer class="footer">
      <div class="container">
        <div class="footer-social">
          <a href="https://www.instagram.com/" target="_blank" aria-label="Instagram">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
          </a>
          <a href="https://www.facebook.com/" target="_blank" aria-label="Facebook">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"/></svg>
          </a>
          <a href="https://x.com/" target="_blank" aria-label="X">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
          </a>
        </div>
        <a href="/" class="footer-title">Dott. Piernatale Civero - Esperto in Gnatologia, Posturologia ed Riequilibrio dell'Occlusione</a>
      </div>
    </footer>
  </div>
</template>

<script setup lang="ts">
useHead({
  title: 'Dott. Piernatale Civero - Esperto in Gnatologia, Posturologia ed Riequilibrio dell\'Occlusione',
  meta: [
    {
      name: 'description',
      content: 'Il Dott. Piernatale Civero unisce gnatologia, posturologia e biomeccanica per un approccio personalizzato che migliora la salute orale e il benessere generale.'
    },
    {
      property: 'og:title',
      content: 'Dott. Piernatale Civero - Esperto in Gnatologia, Posturologia ed Riequilibrio dell\'Occlusione'
    },
    {
      property: 'og:description',
      content: 'Il Dott. Piernatale Civero unisce gnatologia, posturologia e biomeccanica per un approccio personalizzato che migliora la salute orale e il benessere generale.'
    },
    {
      property: 'og:locale',
      content: 'it_IT'
    }
  ]
})
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600;700&family=Open+Sans:wght@400;500;600;700&display=swap');

:root {
  --primary: #1a5f7a;
  --primary-dark: #134b61;
  --primary-light: #e8f4f8;
  --secondary: #2c3e50;
  --accent: #c9a962;
  --text: #333333;
  --text-light: #666666;
  --text-muted: #999999;
  --bg: #ffffff;
  --bg-light: #f8f9fa;
  --bg-cream: #faf8f5;
  --border: #e0e0e0;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: 'Open Sans', -apple-system, BlinkMacSystemFont, sans-serif;
  color: var(--text);
  line-height: 1.7;
  -webkit-font-smoothing: antialiased;
}

h1, h2, h3, h4, h5, h6 {
  font-family: 'Playfair Display', Georgia, serif;
  font-weight: 600;
  line-height: 1.3;
}

a {
  color: var(--primary);
  text-decoration: none;
  transition: color 0.2s;
}

a:hover {
  color: var(--primary-dark);
}

img {
  max-width: 100%;
  height: auto;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 24px;
}

/* Header */
.header {
  background: var(--bg);
  padding: 20px 0;
  text-align: center;
  border-bottom: 1px solid var(--border);
}

.logo img {
  height: 80px;
  width: auto;
  margin-bottom: 10px;
}

.site-title {
  font-size: 1.5rem;
  margin-bottom: 5px;
}

.site-title a {
  color: var(--secondary);
}

.site-title a:hover {
  color: var(--primary);
}

.site-subtitle {
  font-size: 0.95rem;
  color: var(--text-light);
  font-weight: 400;
}

/* Hero */
.hero {
  background: linear-gradient(135deg, var(--primary-light) 0%, var(--bg-cream) 100%);
  padding: 80px 0;
  text-align: center;
}

.hero-content {
  max-width: 800px;
  margin: 0 auto;
}

.hero h2 {
  font-size: 2.5rem;
  color: var(--secondary);
  margin-bottom: 1.5rem;
}

.hero p {
  font-size: 1.15rem;
  color: var(--text-light);
  max-width: 650px;
  margin: 0 auto;
}

/* About Section */
.about-section {
  padding: 80px 0;
  background: var(--bg);
}

.about-grid {
  display: grid;
  grid-template-columns: 300px 1fr;
  gap: 60px;
  align-items: start;
}

.about-image img {
  border-radius: 12px;
  box-shadow: 0 10px 40px rgba(0,0,0,0.1);
}

.about-content h2 {
  font-size: 1.75rem;
  color: var(--secondary);
  margin-bottom: 1.5rem;
}

.about-content > p {
  font-size: 1.05rem;
  color: var(--text);
  margin-bottom: 1.5rem;
}

.curriculum {
  background: var(--bg-light);
  padding: 1.5rem;
  border-radius: 10px;
  border-left: 4px solid var(--primary);
}

.curriculum > p {
  font-style: italic;
  margin-bottom: 1rem;
  color: var(--text-light);
}

.curriculum ul {
  list-style: none;
  padding: 0;
}

.curriculum li {
  padding: 0.5rem 0;
  padding-left: 1.5rem;
  position: relative;
  color: var(--text);
}

.curriculum li::before {
  content: "•";
  color: var(--primary);
  font-weight: bold;
  position: absolute;
  left: 0;
}

/* Metodo Section */
.metodo-section {
  padding: 80px 0;
  background: var(--bg-cream);
}

.metodo-intro {
  text-align: center;
  max-width: 800px;
  margin: 0 auto 60px;
}

.metodo-intro h2 {
  font-size: 2.25rem;
  color: var(--secondary);
  margin-bottom: 1.5rem;
}

.metodo-intro > p {
  font-size: 1.1rem;
  color: var(--text-light);
  margin-bottom: 2rem;
}

.metodo-pillars {
  display: flex;
  justify-content: center;
  gap: 1rem;
  flex-wrap: wrap;
  margin-bottom: 2rem;
}

.pillar {
  background: var(--primary);
  color: white;
  padding: 0.75rem 1.5rem;
  border-radius: 50px;
  font-size: 0.95rem;
  font-weight: 500;
}

.metodo-result {
  font-size: 1.1rem;
  color: var(--text);
}

.fasi-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 30px;
}

.fase {
  background: var(--bg);
  padding: 2rem;
  border-radius: 12px;
  box-shadow: 0 5px 20px rgba(0,0,0,0.05);
  text-align: center;
}

.fase-number {
  width: 50px;
  height: 50px;
  background: var(--primary);
  color: white;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  font-weight: 700;
  margin: 0 auto 1.5rem;
  font-family: 'Playfair Display', serif;
}

.fase h3 {
  font-size: 1.25rem;
  color: var(--secondary);
  margin-bottom: 1rem;
}

.fase p {
  font-size: 0.95rem;
  color: var(--text-light);
}

/* Studio Section */
.studio-section {
  padding: 60px 0;
  background: var(--bg);
}

.studio-image {
  border-radius: 12px;
  box-shadow: 0 10px 40px rgba(0,0,0,0.1);
  width: 100%;
  max-height: 400px;
  object-fit: cover;
}

/* Blog Section */
.blog-section {
  padding: 80px 0;
  background: var(--bg-light);
}

.section-header {
  text-align: center;
  margin-bottom: 3rem;
}

.section-header h2 {
  font-size: 2.25rem;
  color: var(--secondary);
  margin-bottom: 1rem;
}

.section-header p {
  font-size: 1.05rem;
  color: var(--text-light);
  max-width: 700px;
  margin: 0 auto;
}

.blog-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 30px;
  margin-bottom: 2rem;
}

.blog-card {
  background: var(--bg);
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 5px 20px rgba(0,0,0,0.05);
  transition: transform 0.3s, box-shadow 0.3s;
}

.blog-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 15px 40px rgba(0,0,0,0.1);
}

.blog-card img {
  width: 100%;
  height: 200px;
  object-fit: cover;
}

.blog-content {
  padding: 1.5rem;
}

.blog-category {
  display: inline-block;
  background: var(--primary-light);
  color: var(--primary);
  padding: 0.25rem 0.75rem;
  border-radius: 50px;
  font-size: 0.8rem;
  font-weight: 600;
  margin-bottom: 0.75rem;
}

.blog-card h3 {
  font-size: 1.15rem;
  color: var(--secondary);
  margin-bottom: 0.75rem;
}

.blog-card h3 a {
  color: inherit;
}

.blog-card h3 a:hover {
  color: var(--primary);
}

.blog-card > .blog-content > p {
  font-size: 0.9rem;
  color: var(--text-light);
}

.blog-cta {
  text-align: center;
  margin-top: 2rem;
}

/* Buttons */
.btn {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.875rem 2rem;
  border-radius: 8px;
  font-weight: 600;
  font-size: 1rem;
  transition: all 0.2s;
  border: 2px solid transparent;
  cursor: pointer;
}

.btn-primary {
  background: var(--primary);
  color: white;
  border-color: var(--primary);
}

.btn-primary:hover {
  background: var(--primary-dark);
  border-color: var(--primary-dark);
  color: white;
  transform: translateY(-2px);
  box-shadow: 0 10px 30px rgba(26, 95, 122, 0.3);
}

.btn-outline {
  background: transparent;
  color: var(--primary);
  border-color: var(--primary);
}

.btn-outline:hover {
  background: var(--primary);
  color: white;
}

/* CTA Section */
.cta-section {
  padding: 80px 0;
  background: var(--bg);
  text-align: center;
}

.cta-content h2 {
  font-size: 2rem;
  color: var(--secondary);
  margin-bottom: 1rem;
}

.cta-content p {
  font-size: 1.1rem;
  color: var(--text-light);
}

/* Final CTA Section */
.final-cta-section {
  padding: 80px 0;
  background: var(--primary);
  text-align: center;
}

.final-cta-section h2 {
  font-size: 2rem;
  color: white;
  margin-bottom: 2rem;
  max-width: 700px;
  margin-left: auto;
  margin-right: auto;
}

.final-cta-section .btn-primary {
  background: white;
  color: var(--primary);
  border-color: white;
  font-size: 1.1rem;
  padding: 1rem 2.5rem;
}

.final-cta-section .btn-primary:hover {
  background: var(--accent);
  border-color: var(--accent);
  color: white;
}

/* Footer */
.footer {
  background: var(--secondary);
  padding: 40px 0;
  text-align: center;
}

.footer-social {
  display: flex;
  justify-content: center;
  gap: 1.5rem;
  margin-bottom: 1.5rem;
}

.footer-social a {
  color: rgba(255,255,255,0.7);
  transition: color 0.2s;
}

.footer-social a:hover {
  color: white;
}

.footer-title {
  color: rgba(255,255,255,0.6);
  font-size: 0.9rem;
}

.footer-title:hover {
  color: white;
}

/* Responsive */
@media (max-width: 992px) {
  .about-grid {
    grid-template-columns: 1fr;
    gap: 40px;
  }

  .about-image {
    text-align: center;
  }

  .about-image img {
    max-width: 300px;
  }

  .fasi-grid {
    grid-template-columns: 1fr;
    max-width: 500px;
    margin: 0 auto;
  }

  .blog-grid {
    grid-template-columns: 1fr;
    max-width: 400px;
    margin: 0 auto;
  }
}

@media (max-width: 768px) {
  .hero h2 {
    font-size: 1.75rem;
  }

  .hero p {
    font-size: 1rem;
  }

  .about-content h2 {
    font-size: 1.5rem;
  }

  .metodo-intro h2,
  .section-header h2 {
    font-size: 1.75rem;
  }

  .metodo-pillars {
    flex-direction: column;
    align-items: center;
  }

  .cta-content h2,
  .final-cta-section h2 {
    font-size: 1.5rem;
  }

  .final-cta-section .btn-primary {
    font-size: 0.95rem;
    padding: 0.875rem 1.5rem;
  }
}
</style>
