<script setup>
import { RouterLink, RouterView } from 'vue-router';
import PageFooter from './components/PageFooter.vue';
import Navbar from './components/Navbar.vue';
</script>

<template>
  <header>
    <Navbar
    v-if="['home', '404'].indexOf($route.name) < 0"
    siteTitle="Brady Zalasky"
    logoPath=""
    />
  </header>
  <RouterView />
  <PageFooter 
  v-if="['home', '404'].indexOf($route.name) < 0"
    siteTitle="Brady Zalasky"
    logoPath=""
  />
</template>

<style scoped>
header {
  line-height: 1.5;
  max-height: 10;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}
</style>
