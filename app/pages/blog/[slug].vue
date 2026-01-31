<template>
  <div>
    <Head v-if="article">
      <title>{{ article.title }} - Dott. Piernatale Civero</title>
      <meta name="description" :content="article.excerpt" />
      <link rel="canonical" :href="`https://piernatalecivero.it/blog/${article.slug}`" />
      <meta property="og:title" :content="`${article.title} - Dott. Piernatale Civero`" />
      <meta property="og:description" :content="article.excerpt" />
      <meta property="og:type" content="article" />
    </Head>

    <article v-if="article">
      <header class="article-header">
        <div class="container">
          <nav class="breadcrumb">
            <NuxtLink to="/">Home</NuxtLink>
            <span>/</span>
            <NuxtLink to="/blog">Blog</NuxtLink>
            <span>/</span>
            <span>{{ article.title }}</span>
          </nav>
        </div>
      </header>

      <div class="article-image">
        <img :src="article.image" :alt="article.title" />
      </div>

      <div class="article-content">
        <div class="container container-narrow">
          <div class="article-meta">
            <span class="article-date">{{ article.date }}</span>
            <span class="article-category">{{ article.category }}</span>
          </div>
          <h1>{{ article.title }}</h1>
          <div class="article-body" v-html="article.content"></div>

          <div class="article-author">
            <img src="/images/piernatale-civero.png" alt="Dott. Piernatale Civero" />
            <div>
              <strong>Dott. Piernatale Civero</strong>
              <p>Esperto in Gnatologia per riabilitazioni di casi complessi di implantologia e ortodonzia</p>
            </div>
          </div>
        </div>
      </div>
    </article>

    <div v-else class="not-found">
      <div class="container">
        <h1>Articolo non trovato</h1>
        <p>L'articolo che stai cercando non esiste.</p>
        <NuxtLink to="/blog" class="btn btn-primary">Torna al Blog</NuxtLink>
      </div>
    </div>

    <!-- Lead Form after article -->
    <section v-if="article" class="section section-light">
      <div class="container" style="max-width:700px;">
        <LeadForm
          title="Hai una Domanda su Questo Argomento?"
          subtitle="Contattaci per un consulto personalizzato con il Dott. Civero."
          variant="inline"
          :pagina="`Blog - ${article?.title}`"
          button-text="Richiedi Informazioni"
        />
      </div>
    </section>

    <!-- Related Articles -->
    <section v-if="article && relatedArticles.length" class="related-section">
      <div class="container">
        <h2>Articoli correlati</h2>
        <div class="related-grid">
          <article v-for="related in relatedArticles" :key="related.slug" class="related-card">
            <NuxtLink :to="`/blog/${related.slug}`">
              <img :src="related.image" :alt="related.title" />
            </NuxtLink>
            <div class="related-content">
              <span class="related-category">{{ related.category }}</span>
              <h3><NuxtLink :to="`/blog/${related.slug}`">{{ related.title }}</NuxtLink></h3>
            </div>
          </article>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { getArticleBySlug, getAllArticles } from '~/data/articles'

const route = useRoute()
const slug = route.params.slug as string
const article = getArticleBySlug(slug)

const relatedArticles = computed(() => {
  if (!article) return []
  return getAllArticles().filter(a => a.slug !== slug).slice(0, 3)
})
</script>

<style scoped>
.article-header { background: var(--bg-light); padding: 30px 0; }
.breadcrumb { font-size: 0.9rem; color: var(--text-light); }
.breadcrumb a { color: var(--primary); }
.breadcrumb span { margin: 0 0.5rem; }
.article-image { width: 100%; max-height: 500px; overflow: hidden; }
.article-image img { width: 100%; height: 500px; object-fit: cover; }
.article-content { padding: 60px 0; }
.container-narrow { max-width: 800px; }
.article-meta { display: flex; gap: 1rem; margin-bottom: 1.5rem; font-size: 0.9rem; }
.article-date { color: var(--text-muted); }
.article-category { background: var(--primary-light); color: var(--primary); padding: 0.25rem 0.75rem; border-radius: 50px; font-weight: 600; }
.article-content h1 { font-size: 2.5rem; color: var(--secondary); margin-bottom: 2rem; }
:deep(.article-body) { font-size: 1.1rem; line-height: 1.8; }
:deep(.article-body h2) { font-size: 1.75rem; color: var(--secondary); margin: 2rem 0 1rem; }
:deep(.article-body h3) { font-size: 1.35rem; color: var(--secondary); margin: 1.5rem 0 1rem; }
:deep(.article-body p) { margin-bottom: 1.5rem; }
:deep(.article-body blockquote) { background: var(--bg-cream); border-left: 4px solid var(--primary); padding: 1.5rem 2rem; margin: 2rem 0; font-style: italic; color: var(--text-light); }
:deep(.article-body ul), :deep(.article-body ol) { margin: 1.5rem 0; padding-left: 2rem; }
:deep(.article-body li) { margin-bottom: 0.5rem; }
.article-author { display: flex; gap: 1.5rem; align-items: center; margin-top: 3rem; padding-top: 2rem; border-top: 1px solid var(--border); }
.article-author img { width: 80px; height: 80px; border-radius: 50%; object-fit: cover; }
.article-author strong { display: block; font-size: 1.1rem; color: var(--secondary); margin-bottom: 0.25rem; }
.article-author p { font-size: 0.9rem; color: var(--text-light); margin: 0; }
.related-section { padding: 60px 0; background: var(--bg-cream); }
.related-section h2 { font-size: 1.75rem; color: var(--secondary); text-align: center; margin-bottom: 2rem; }
.related-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 30px; }
.related-card { background: var(--bg); border-radius: 12px; overflow: hidden; box-shadow: 0 5px 20px rgba(0,0,0,0.05); transition: transform 0.3s; }
.related-card:hover { transform: translateY(-5px); }
.related-card img { width: 100%; height: 180px; object-fit: cover; }
.related-content { padding: 1.25rem; }
.related-category { display: inline-block; background: var(--primary-light); color: var(--primary); padding: 0.2rem 0.6rem; border-radius: 50px; font-size: 0.75rem; font-weight: 600; margin-bottom: 0.5rem; }
.related-card h3 { font-size: 1.1rem; color: var(--secondary); }
.related-card h3 a { color: inherit; }
.related-card h3 a:hover { color: var(--primary); }
.not-found { padding: 100px 0; text-align: center; }
.not-found h1 { font-size: 2rem; color: var(--secondary); margin-bottom: 1rem; }
.not-found p { color: var(--text-light); margin-bottom: 2rem; }
@media (max-width: 992px) {
  .related-grid { grid-template-columns: 1fr; max-width: 400px; margin: 0 auto; }
}
@media (max-width: 768px) {
  .article-image img { height: 300px; }
  .article-content h1 { font-size: 1.75rem; }
  .article-author { flex-direction: column; text-align: center; }
}
</style>
