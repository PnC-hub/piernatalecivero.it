<template>
  <header class="header" :class="{ 'header-scrolled': scrolled }">
    <div class="container header-inner">
      <div class="header-brand">
        <NuxtLink to="/" class="site-title-link">
          <span class="site-title">Dott. Piernatale Civero</span>
        </NuxtLink>
        <span class="site-subtitle-header">Gnatologo &middot; Monterotondo</span>
      </div>
      <button class="menu-toggle" @click="menuOpen = !menuOpen" aria-label="Menu">
        <span :class="{ open: menuOpen }"></span>
      </button>
      <nav class="nav" :class="{ 'nav-open': menuOpen }">
        <NuxtLink to="/" @click="menuOpen = false">Home</NuxtLink>
        <NuxtLink to="/gnatologia" @click="menuOpen = false">Gnatologia</NuxtLink>
        <NuxtLink to="/implantologia" @click="menuOpen = false">Implantologia</NuxtLink>
        <NuxtLink to="/ortodonzia" @click="menuOpen = false">Ortodonzia</NuxtLink>
        <NuxtLink to="/riabilitazione-complessa" @click="menuOpen = false">Riabilitazione</NuxtLink>
        <NuxtLink to="/blog" @click="menuOpen = false">Blog</NuxtLink>
        <NuxtLink to="/contatti" class="nav-cta" @click="menuOpen = false">Contattaci</NuxtLink>
      </nav>
    </div>
  </header>
</template>

<script setup lang="ts">
const menuOpen = ref(false)
const scrolled = ref(false)

onMounted(() => {
  window.addEventListener('scroll', () => {
    scrolled.value = window.scrollY > 50
  })
})
</script>

<style scoped>
.header {
  background: var(--bg);
  border-bottom: 1px solid var(--border);
  padding: 0;
  position: sticky;
  top: 0;
  z-index: 1000;
  transition: box-shadow 0.3s;
}
.header-scrolled {
  box-shadow: 0 2px 20px rgba(0,0,0,0.08);
}
.header-inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 14px 24px;
}
.header-brand {
  display: flex;
  flex-direction: column;
}
.site-title-link {
  text-decoration: none;
}
.site-title {
  font-family: 'Playfair Display', Georgia, serif;
  font-size: 1.25rem;
  font-weight: 600;
  color: var(--secondary);
}
.site-subtitle-header {
  font-size: 0.75rem;
  color: var(--text-muted);
  letter-spacing: 0.5px;
}
.nav {
  display: flex;
  align-items: center;
  gap: 0;
}
.nav a {
  color: var(--text);
  font-size: 0.9rem;
  font-weight: 500;
  padding: 8px 16px;
  border-radius: 6px;
  transition: color 0.2s, background 0.2s;
  text-decoration: none;
  white-space: nowrap;
}
.nav a:hover, .nav a.router-link-active {
  color: var(--primary);
  background: var(--primary-light);
}
.nav-cta {
  background: var(--primary) !important;
  color: #fff !important;
  margin-left: 8px;
  padding: 10px 20px !important;
}
.nav-cta:hover {
  background: var(--primary-dark) !important;
  color: #fff !important;
}
.menu-toggle {
  display: none;
  background: none;
  border: none;
  cursor: pointer;
  padding: 8px;
}
.menu-toggle span {
  display: block;
  width: 24px;
  height: 2px;
  background: var(--secondary);
  position: relative;
  transition: background 0.3s;
}
.menu-toggle span::before, .menu-toggle span::after {
  content: '';
  display: block;
  width: 24px;
  height: 2px;
  background: var(--secondary);
  position: absolute;
  transition: transform 0.3s;
}
.menu-toggle span::before { top: -7px; }
.menu-toggle span::after { top: 7px; }
.menu-toggle span.open { background: transparent; }
.menu-toggle span.open::before { transform: rotate(45deg); top: 0; }
.menu-toggle span.open::after { transform: rotate(-45deg); top: 0; }

@media (max-width: 992px) {
  .menu-toggle { display: block; }
  .nav {
    display: none;
    position: absolute;
    top: 100%;
    left: 0;
    right: 0;
    background: var(--bg);
    flex-direction: column;
    padding: 16px;
    border-top: 1px solid var(--border);
    box-shadow: 0 10px 30px rgba(0,0,0,0.1);
  }
  .nav-open { display: flex; }
  .nav a { padding: 12px 16px; width: 100%; }
  .nav-cta { margin-left: 0; margin-top: 8px; text-align: center; }
}
</style>
