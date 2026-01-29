<template>
  <div>
    <!-- Hero Section -->
    <section class="hero-section">
      <div class="container">
        <h1>Contattaci</h1>
        <p class="hero-subtitle">Prenota una visita specialistica presso lo studio del Dott. Piernatale Civero a Monterotondo.</p>
      </div>
    </section>

    <!-- Contact Form & Info Section -->
    <section class="section">
      <div class="container">
        <div class="contact-grid">
          <!-- Left: Contact Form -->
          <div class="form-column">
            <LeadForm
              variant="inline"
              pagina="Contatti"
              title="Invia una Richiesta"
              :showEmail="true"
              :showServizio="true"
              :showMessage="true"
              buttonText="Invia Messaggio"
            />
          </div>

          <!-- Right: Contact Info -->
          <div class="info-column">
            <div class="contact-card">
              <div class="card-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                  <circle cx="12" cy="10" r="3"/>
                </svg>
              </div>
              <h3>Indirizzo</h3>
              <p>Via Monte Circeo 12<br>Monterotondo (RM)</p>
            </div>

            <div class="contact-card">
              <div class="card-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
                </svg>
              </div>
              <h3>Telefono</h3>
              <p><a href="tel:+390690625768" class="phone-link">06 90625768</a></p>
            </div>

            <div class="contact-card">
              <div class="card-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <circle cx="12" cy="12" r="10"/>
                  <polyline points="12 6 12 12 16 14"/>
                </svg>
              </div>
              <h3>Orari</h3>
              <p>Lun-Ven: 9:00 - 19:00<br>Sabato: 9:00 - 13:00</p>
            </div>

            <div class="contact-card">
              <div class="card-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <circle cx="12" cy="12" r="10"/>
                  <path d="M12 16v-4M12 8h.01"/>
                </svg>
              </div>
              <h3>Come Raggiungerci</h3>
              <p>A 5 minuti dalla stazione<br>FS Monterotondo</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Google Maps Section -->
    <section class="map-section">
      <div class="map-container">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2965.9824458783847!2d12.608988476475678!3d42.05456047120887!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x132f17e8e1c5b3bb%3A0x9f1e1e1e1e1e1e1e!2sVia%20Monte%20Circeo%2C%2012%2C%2000015%20Monterotondo%20RM!5e0!3m2!1sit!2sit!4v1706542800000!5m2!1sit!2sit"
          width="100%"
          height="450"
          style="border:0;"
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
          title="Mappa Studio Dott. Piernatale Civero - Via Monte Circeo 12, Monterotondo"
        ></iframe>
      </div>
    </section>

    <!-- Comuni Serviti Section -->
    <section class="section section-light">
      <div class="container">
        <div class="section-header">
          <h2>Comuni Serviti</h2>
          <p>Lo studio è facilmente raggiungibile da tutto il territorio del Nord-Est di Roma</p>
        </div>
        <div class="comuni-grid">
          <span class="comune-tag">Monterotondo</span>
          <span class="comune-tag">Mentana</span>
          <span class="comune-tag">Fonte Nuova</span>
          <span class="comune-tag">Guidonia</span>
          <span class="comune-tag">Tivoli</span>
          <span class="comune-tag">Palombara Sabina</span>
          <span class="comune-tag">Fiano Romano</span>
          <span class="comune-tag">Capena</span>
          <span class="comune-tag">Rignano Flaminio</span>
          <span class="comune-tag">Castelnuovo di Porto</span>
          <span class="comune-tag">Morlupo</span>
          <span class="comune-tag">Roma Nord</span>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
useHead({
  title: 'Contatti - Dott. Piernatale Civero | Studio Dentistico Monterotondo',
  meta: [
    {
      name: 'description',
      content: 'Contatta lo studio del Dott. Piernatale Civero a Monterotondo. Specialista in gnatologia e posturologia. Via Monte Circeo 12. Tel: 06 90625768. Prenota una visita specialistica.'
    },
    {
      name: 'keywords',
      content: 'contatti dentista monterotondo, studio dentistico monterotondo, dentista via monte circeo monterotondo, prenota visita dentista monterotondo, gnatologia monterotondo contatti'
    },
    { property: 'og:title', content: 'Contatti - Studio Dott. Piernatale Civero Monterotondo' },
    { property: 'og:description', content: 'Prenota una visita specialistica presso lo studio del Dott. Piernatale Civero a Monterotondo. Via Monte Circeo 12. Tel: 06 90625768' },
    { property: 'og:type', content: 'website' }
  ],
  link: [
    { rel: 'canonical', href: 'https://piernatalecivero.it/contatti' }
  ]
})
</script>

<style scoped>
/* Hero Section */
.hero-section {
  background: linear-gradient(135deg, var(--primary) 0%, var(--primary-dark) 100%);
  color: #fff;
  padding: 100px 0 80px;
  text-align: center;
}

.hero-section h1 {
  font-size: 3rem;
  font-weight: 600;
  margin-bottom: 1rem;
  color: #fff;
}

.hero-subtitle {
  font-size: 1.15rem;
  opacity: 0.95;
  max-width: 700px;
  margin: 0 auto;
  line-height: 1.8;
}

/* Contact Grid */
.contact-grid {
  display: grid;
  grid-template-columns: 1.2fr 1fr;
  gap: 3rem;
  align-items: start;
}

.form-column {
  width: 100%;
}

.info-column {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

/* Contact Cards */
.contact-card {
  background: #fff;
  border: 1px solid var(--border);
  border-radius: 12px;
  padding: 1.75rem;
  transition: all 0.3s ease;
}

.contact-card:hover {
  border-color: var(--primary);
  box-shadow: 0 8px 25px rgba(26, 95, 122, 0.1);
  transform: translateY(-3px);
}

.card-icon {
  width: 48px;
  height: 48px;
  background: var(--primary-light);
  color: var(--primary);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1rem;
}

.contact-card h3 {
  font-size: 1.15rem;
  color: var(--secondary);
  margin-bottom: 0.5rem;
  font-weight: 600;
}

.contact-card p {
  color: var(--text-light);
  font-size: 0.95rem;
  line-height: 1.6;
  margin: 0;
}

.phone-link {
  color: var(--primary);
  font-weight: 600;
  font-size: 1.1rem;
  transition: color 0.2s;
}

.phone-link:hover {
  color: var(--primary-dark);
}

/* Map Section */
.map-section {
  width: 100%;
  background: var(--bg-light);
}

.map-container {
  width: 100%;
  max-width: 100%;
}

.map-container iframe {
  display: block;
  width: 100%;
}

/* Comuni Serviti */
.comuni-grid {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  justify-content: center;
  max-width: 900px;
  margin: 0 auto;
}

.comune-tag {
  display: inline-flex;
  align-items: center;
  padding: 10px 20px;
  background: #fff;
  border: 2px solid var(--primary-light);
  border-radius: 8px;
  color: var(--primary);
  font-weight: 600;
  font-size: 0.9rem;
  transition: all 0.2s ease;
  white-space: nowrap;
}

.comune-tag:hover {
  background: var(--primary);
  border-color: var(--primary);
  color: #fff;
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(26, 95, 122, 0.2);
}

/* Responsive */
@media (max-width: 992px) {
  .contact-grid {
    grid-template-columns: 1fr;
    gap: 2rem;
  }

  .info-column {
    grid-row: 1;
  }

  .form-column {
    grid-row: 2;
  }
}

@media (max-width: 768px) {
  .hero-section {
    padding: 70px 0 50px;
  }

  .hero-section h1 {
    font-size: 2rem;
  }

  .hero-subtitle {
    font-size: 1rem;
  }

  .contact-card {
    padding: 1.5rem;
  }

  .comune-tag {
    padding: 8px 16px;
    font-size: 0.85rem;
  }

  .map-container iframe {
    height: 350px;
  }
}

@media (max-width: 480px) {
  .hero-section h1 {
    font-size: 1.75rem;
  }

  .comuni-grid {
    gap: 8px;
  }

  .comune-tag {
    padding: 6px 12px;
    font-size: 0.8rem;
  }
}
</style>
