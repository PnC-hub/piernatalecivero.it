<template>
  <div class="sticky-cta" :class="{ visible: show }">
    <div class="container sticky-inner">
      <span class="sticky-text">Hai bisogno di un consulto specialistico?</span>
      <a href="tel:0690625768" class="btn btn-outline btn-sm sticky-phone">06 90625768</a>
      <NuxtLink to="/contatti" class="btn btn-primary btn-sm">Richiedi Informazioni</NuxtLink>
    </div>
  </div>
</template>

<script setup lang="ts">
const show = ref(false)
onMounted(() => {
  window.addEventListener('scroll', () => {
    show.value = window.scrollY > 600
  })
})
</script>

<style scoped>
.sticky-cta {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  background: var(--bg);
  border-top: 1px solid var(--border);
  box-shadow: 0 -4px 20px rgba(0,0,0,0.1);
  z-index: 999;
  transform: translateY(100%);
  transition: transform 0.3s;
  padding: 12px 0;
}
.sticky-cta.visible {
  transform: translateY(0);
}
.sticky-inner {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 16px;
}
.sticky-text {
  font-weight: 500;
  color: var(--secondary);
  font-size: 0.95rem;
}
.btn-sm {
  padding: 8px 20px;
  font-size: 0.85rem;
}
.sticky-phone {
  border-color: var(--primary);
  color: var(--primary);
}
@media (max-width: 768px) {
  .sticky-text { display: none; }
  .sticky-inner { gap: 10px; }
}
</style>
