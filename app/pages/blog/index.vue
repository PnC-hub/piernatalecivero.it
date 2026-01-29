<template>
  <div class="site">
    <!-- Header -->
    <header class="header">
      <div class="container">
        <h1 class="site-title">
          <NuxtLink to="/">Dott. Piernatale Civero</NuxtLink>
        </h1>
        <p class="site-subtitle">Esperto in Gnatologia, Posturologia ed Riequilibrio dell'Occlusione</p>
      </div>
    </header>

    <!-- Page Header -->
    <section class="page-header">
      <div class="container">
        <nav class="breadcrumb">
          <NuxtLink to="/">Home</NuxtLink>
          <span>/</span>
          <span>Blog</span>
        </nav>
        <h1>Blog</h1>
        <p>Scopri articoli approfonditi su gnatologia, posturologia e tecniche innovative per il riequilibrio dell'occlusione.</p>
      </div>
    </section>

    <!-- Blog List -->
    <section class="blog-list-section">
      <div class="container">
        <div class="blog-list">
          <article v-for="article in articles" :key="article.slug" class="blog-item">
            <NuxtLink :to="`/blog/${article.slug}`" class="blog-item-image">
              <img :src="article.image" :alt="article.title" />
            </NuxtLink>
            <div class="blog-item-content">
              <div class="blog-item-meta">
                <span class="blog-item-date">{{ article.date }}</span>
                <span class="blog-item-category">{{ article.category }}</span>
              </div>
              <h2>
                <NuxtLink :to="`/blog/${article.slug}`">{{ article.title }}</NuxtLink>
              </h2>
              <p>{{ article.excerpt }}</p>
              <NuxtLink :to="`/blog/${article.slug}`" class="read-more">
                Leggi l'articolo
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
              </NuxtLink>
            </div>
          </article>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="cta-section">
      <div class="container">
        <h2>Hai bisogno di una consulenza?</h2>
        <p>Prenota una visita con il Dott. Civero per un approccio personalizzato.</p>
        <a href="https://pazienti.geniusmile.com/paziente/index/nuovo/?centro=2" class="btn btn-primary" target="_blank">
          Prenota una visita
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
        <NuxtLink to="/" class="footer-title">Dott. Piernatale Civero - Esperto in Gnatologia, Posturologia ed Riequilibrio dell'Occlusione</NuxtLink>
      </div>
    </footer>
  </div>
</template>

<script setup lang="ts">
import { getAllArticles } from '~/data/articles'

const articles = getAllArticles()

useHead({
  title: 'Blog - Dott. Piernatale Civero',
  meta: [
    {
      name: 'description',
      content: 'Articoli su gnatologia, posturologia e tecniche innovative per il riequilibrio dell\'occlusione. Scopri come migliorare il tuo benessere.'
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
}

h1, h2, h3 {
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

.site-subtitle {
  font-size: 0.95rem;
  color: var(--text-light);
  font-weight: 400;
}

/* Page Header */
.page-header {
  background: linear-gradient(135deg, var(--primary-light) 0%, var(--bg-cream) 100%);
  padding: 60px 0;
  text-align: center;
}

.breadcrumb {
  margin-bottom: 1.5rem;
  font-size: 0.9rem;
  color: var(--text-light);
}

.breadcrumb a {
  color: var(--primary);
}

.breadcrumb span {
  margin: 0 0.5rem;
}

.page-header h1 {
  font-size: 2.5rem;
  color: var(--secondary);
  margin-bottom: 1rem;
}

.page-header p {
  font-size: 1.1rem;
  color: var(--text-light);
  max-width: 600px;
  margin: 0 auto;
}

/* Blog List */
.blog-list-section {
  padding: 60px 0;
  background: var(--bg);
}

.blog-list {
  display: flex;
  flex-direction: column;
  gap: 40px;
}

.blog-item {
  display: grid;
  grid-template-columns: 300px 1fr;
  gap: 30px;
  padding-bottom: 40px;
  border-bottom: 1px solid var(--border);
}

.blog-item:last-child {
  border-bottom: none;
  padding-bottom: 0;
}

.blog-item-image img {
  width: 100%;
  height: 200px;
  object-fit: cover;
  border-radius: 10px;
  transition: transform 0.3s;
}

.blog-item-image:hover img {
  transform: scale(1.03);
}

.blog-item-content {
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.blog-item-meta {
  display: flex;
  gap: 1rem;
  margin-bottom: 0.75rem;
  font-size: 0.85rem;
}

.blog-item-date {
  color: var(--text-muted);
}

.blog-item-category {
  background: var(--primary-light);
  color: var(--primary);
  padding: 0.2rem 0.75rem;
  border-radius: 50px;
  font-weight: 600;
}

.blog-item h2 {
  font-size: 1.5rem;
  color: var(--secondary);
  margin-bottom: 0.75rem;
}

.blog-item h2 a {
  color: inherit;
}

.blog-item h2 a:hover {
  color: var(--primary);
}

.blog-item p {
  color: var(--text-light);
  margin-bottom: 1rem;
  line-height: 1.6;
}

.read-more {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  font-weight: 600;
  color: var(--primary);
}

.read-more:hover {
  color: var(--primary-dark);
}

/* CTA Section */
.cta-section {
  padding: 80px 0;
  background: var(--primary);
  text-align: center;
}

.cta-section h2 {
  font-size: 2rem;
  color: white;
  margin-bottom: 1rem;
}

.cta-section p {
  font-size: 1.1rem;
  color: rgba(255,255,255,0.8);
  margin-bottom: 2rem;
}

.btn {
  display: inline-flex;
  align-items: center;
  padding: 0.875rem 2rem;
  border-radius: 8px;
  font-weight: 600;
  font-size: 1rem;
  transition: all 0.2s;
  border: 2px solid transparent;
}

.btn-primary {
  background: white;
  color: var(--primary);
  border-color: white;
}

.btn-primary:hover {
  background: var(--accent);
  border-color: var(--accent);
  color: white;
  transform: translateY(-2px);
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
@media (max-width: 768px) {
  .blog-item {
    grid-template-columns: 1fr;
  }

  .blog-item-image img {
    height: 180px;
  }

  .page-header h1 {
    font-size: 1.75rem;
  }
}
</style>
