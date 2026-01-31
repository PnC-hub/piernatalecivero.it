<template>
  <footer class="footer">
    <div class="container">
      <div class="footer-grid">
        <div class="footer-col">
          <h4>Dott. Piernatale Civero</h4>
          <p>Esperto in Gnatologia per riabilitazioni di casi complessi di implantologia e ortodonzia. Il riequilibrio gnatologico prima di ogni trattamento implantologico e ortodontico garantisce risultati più duraturi nel tempo e un'estetica superiore.</p>
        </div>
        <div class="footer-col">
          <h4>Specializzazioni</h4>
          <ul>
            <li><NuxtLink to="/gnatologia">Gnatologia</NuxtLink></li>
            <li><NuxtLink to="/implantologia">Implantologia</NuxtLink></li>
            <li><NuxtLink to="/ortodonzia">Ortodonzia</NuxtLink></li>
            <li><NuxtLink to="/riabilitazione-complessa">Riabilitazione Complessa</NuxtLink></li>
          </ul>
        </div>
        <div class="footer-col">
          <h4>Studio</h4>
          <ul>
            <li>Via Monte Circeo 12</li>
            <li>Monterotondo (RM)</li>
            <li><a href="tel:0690625768">Tel: 06 90625768</a></li>
          </ul>
        </div>
        <div class="footer-col">
          <h4>Risorse</h4>
          <ul>
            <li><NuxtLink to="/blog">Blog</NuxtLink></li>
            <li><NuxtLink to="/contatti">Contatti</NuxtLink></li>
          </ul>
        </div>
      </div>
      <div class="footer-bottom">
        <p>&copy; {{ new Date().getFullYear() }} Dott. Piernatale Civero - P.IVA XXXXXXXX | Iscrizione Albo Odontoiatri RM</p>
        <p>Direttore Sanitario: Dott. Piernatale Civero</p>
      </div>
    </div>
  </footer>
</template>

<style scoped>
.footer {
  background: var(--secondary);
  padding: 60px 0 30px;
  color: rgba(255,255,255,0.8);
}
.footer-grid {
  display: grid;
  grid-template-columns: 2fr 1fr 1fr 1fr;
  gap: 40px;
  margin-bottom: 40px;
}
.footer h4 {
  font-family: 'Playfair Display', Georgia, serif;
  color: #fff;
  font-size: 1.1rem;
  margin-bottom: 16px;
}
.footer p {
  font-size: 0.9rem;
  line-height: 1.6;
}
.footer ul {
  list-style: none;
  padding: 0;
}
.footer li {
  padding: 4px 0;
  font-size: 0.9rem;
}
.footer a {
  color: rgba(255,255,255,0.8);
  text-decoration: none;
  transition: color 0.2s;
}
.footer a:hover {
  color: #fff;
}
.footer-bottom {
  border-top: 1px solid rgba(255,255,255,0.1);
  padding-top: 20px;
  text-align: center;
}
.footer-bottom p {
  font-size: 0.8rem;
  color: rgba(255,255,255,0.5);
}
@media (max-width: 768px) {
  .footer-grid {
    grid-template-columns: 1fr;
    gap: 30px;
  }
}
</style>
