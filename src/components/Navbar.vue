<script setup>
  import { ref } from 'vue'
  const visible = ref(false);
</script>

<template>
  <header>
    <div class="wrapper">
      <nav class="desktopNav">
        <h3 class="logo">BRADY ZALASKY</h3>
        <RouterLink class="navitem" to="/">Home</RouterLink>
        <RouterLink class="navitem" to="/about">About</RouterLink>
        <RouterLink class="navitem" to="/projects">Projects</RouterLink>
        <RouterLink class="navitem" to="/connect">Connect</RouterLink>
      </nav>
      <nav class="mobileNav">
        <h4 class="logo">BRADY ZALASKY</h4>
        <font-awesome-icon id="hamburgerMenu" v-if="!visible" @click="visible = !visible" icon="fa-solid fa-bars" size="2xl" style="color: #ffffff;"/>
        <font-awesome-icon id="hamburgerMenu" v-if="visible" @click="visible = !visible" icon="fa-solid fa-x" size="2xl" style="color: #ffffff;"/>
        <div id="mobileMenu" v-if="visible">
          <hr>
          <RouterLink class="navitem" @click="visible = !visible" to="/">Home</RouterLink>
          <hr>
          <RouterLink class="navitem" @click="visible = !visible" to="/about">About</RouterLink>
          <hr>
          <RouterLink class="navitem" @click="visible = !visible" to="/projects">Projects</RouterLink>
          <hr>
          <RouterLink class="navitem" @click="visible = !visible" to="/connect">Connect</RouterLink>
      </div>
      </nav>
    </div>
  </header>
</template>

<style scoped>
  a {
    color: #FFF;
  }

  .logo {
    color: #fff;
  }

  #mobileMenu {
      height: 100%;
      width: 100%;
      background-color: var(--clr-primary);
      grid-template-columns: 1fr;
      display: grid;
      line-height: 3;
      margin-top: 1em;
  }

  hr {
    background-color: #fff;
    border: 0.5px solid #fff;
  }

  @media screen and (min-width: 800px) {
    header {
      height: 7.5rem;
    }

    .wrapper {
      background-color: var(--clr-primary);
      padding: 2rem;
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
    }

    .desktopNav {
      display: grid;
      grid-template-columns: 80% 5% 5% 5% 5%;
    }

    .mobileNav {
      display: none;
    }

    .navitem {
      background-color: var(--clr-primary);
    }

    .navitem:hover {
      text-decoration: underline;
      text-underline-offset: 1em;
      color: #000;
    }
  }

  @media screen and (max-width: 799px) {
    header {
      height: 7rem;
    }
    .wrapper {
      background-color: var(--clr-primary);
      padding: 2rem;
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
  }
</style>