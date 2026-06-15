<script setup>
  import { ref } from 'vue'
  const visible = ref(false);
  const projectsOpen = ref(false);
</script>

<template>
  <header>
    <div style="height: 50px;"></div>
    <div class="wrapper" v-bind:class="{'nav-open': visible === true}" >
      <nav class="desktopNav">
        <RouterLink to="/"><img class="logo" src="../assets/25_BZ_V3.jpg"></RouterLink>
        <div class="nav-right">
          <div class="divider"></div>
          <RouterLink class="navitem" to="/about">About</RouterLink>
          <div class="nav-dropdown">
            <RouterLink class="navitem" to="/projects">Projects</RouterLink>
            <div class="dropdown-menu">
              <RouterLink class="navitem" to="/projects">All Projects</RouterLink>
              <RouterLink class="navitem" to="/projects/beat-machine">Beat Machine</RouterLink>
              <!-- CBB Simulator added later -->
            </div>
          </div>
          <RouterLink class="navitem last-nav" to="/connect">Connect</RouterLink>
          <a href="/resume.pdf" class="navitem" target="_blank" rel="noopener">My Resume</a>
          <div class="divider"></div>
          <a href="https://www.instagram.com/brady_zalasky/"><font-awesome-icon icon="fa-brands fa-instagram" class="icon" size="xl"/></a>
          <a href="https://www.linkedin.com/in/brady-zalasky-00537514a/"><font-awesome-icon icon="fa-brands fa-linkedin" class="icon" size="xl"/></a>
          <a href="https://github.com/bazalasky"><font-awesome-icon icon="fa-brands fa-github" class="icon" size="xl"></font-awesome-icon></a>
        </div>
      </nav>
      <nav class="mobileNav" v-bind:class="{'nav-open': visible === true}">
        <img class="logo" src="../assets/25_BZ_V3.jpg">
        <font-awesome-icon id="hamburgerMenu" v-if="!visible" @click="visible = !visible" icon="fa-solid fa-bars" size="2xl"/>
        <font-awesome-icon id="hamburgerMenu" v-if="visible" @click="visible = !visible" icon="fa-solid fa-x" size="2xl"/>
        <div id="mobileMenu" v-if="visible">
          <hr>
          <RouterLink class="navitem" @click="visible = !visible" to="/">Home</RouterLink>
          <hr>
          <RouterLink class="navitem" @click="visible = !visible" to="/about">About</RouterLink>
          <hr>
          <button class="navitem" @click="projectsOpen = !projectsOpen">
            Projects {{ projectsOpen ? '▾' : '▸' }}
          </button>
          <div v-if="projectsOpen" class="mobile-subnav">
            <RouterLink class="navitem" @click="visible = false" to="/projects">All Projects</RouterLink>
            <RouterLink class="navitem" @click="visible = false" to="/projects/beat-machine">Beat Machine</RouterLink>
          </div>
          <hr>
          <RouterLink class="navitem" @click="visible = !visible" to="/connect">Connect</RouterLink>
      </div>
      </nav>
    </div>
  </header>
</template>

<style scoped>
  a {
    color: var(--color-text);
    align-self: center;
    justify-self: center;
  }

  .divider {
    background-color: var(--color-accent);
    height: 75px;
    width: 3px;
    justify-self: center;
  }

  .logo {
    width: 100%;
    max-width: 500px;
    filter: invert(1);
  }

  .nav-dropdown { position: relative; }

  .dropdown-menu {
    position: absolute; top: 100%; left: 0;
    display: none; flex-direction: column; gap: 0.5rem;
    background: var(--color-background-soft);
    padding: 1rem; border-radius: 10px; z-index: 10;
  }

  .nav-dropdown:hover .dropdown-menu,
  .nav-dropdown:focus-within .dropdown-menu { display: flex; }
  @media (prefers-color-scheme: dark) {
    .logo { filter: none; }
  }

  .nav-open {
    background-color: var(--color-background-soft);
  }

  #mobileMenu {
      height: 100%;
      width: 100%;
      grid-template-columns: 1fr;
      display: grid;
      line-height: 3;
      margin-top: 1em;
  }

  hr {
    background-color: #fff;
    border: 0.5px solid #fff;
  }

  .icon{
    color: var(--color-text); 
  }

  .icon:hover {
    color: var(--color-accent);
  }

  @media screen and (min-width: 800px) {
    header {
      height: 7.5rem;
    }

    .desktopNav {
      display: flex;
      align-items: center;
      gap: 1rem;
      border: 3px solid var(--color-accent);
      border-radius: 10px;
      padding: 2rem 1rem 2rem 2rem;
      margin: auto;
      width: 75%;
      max-width: var(--content-max);
    }

    .nav-right {
      display: flex;
      align-items: center;
      gap: 1rem;
      margin-left: auto;
    }

    .mobileNav {
      display: none;
    }

    .navitem {
      justify-self: center;
      align-self: center;
      font-size: 18px;
    }

    .navitem:hover {
      text-decoration: underline;
      text-underline-offset: 5px;
      color: var(--color-accent);
    }
  }

  @media screen and (max-width: 1000px) {
    header {
      height: 7rem;
    }
    .wrapper {
      padding: 2.6rem;
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
    }

    .desktopNav {
      display: none;
    }

    .mobileNav {
      display: grid;
      grid-template-columns: 90% 10%;
    }

    .logo {
      max-width: 200px;
    }
  }
</style>