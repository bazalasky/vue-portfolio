<script setup>
  import { ref } from 'vue'
  const visible = ref(false);
</script>

<template>
  <header>
    <div style="height: 50px;"></div>
    <div class="wrapper" v-bind:class="{'nav-open': visible === true}" >
      <nav class="desktopNav">
        <img class="logo" src="../assets/25_BZ_V3.jpg">
        <div class="divider"></div>
        <RouterLink class="navitem" to="/">Home</RouterLink>
        <RouterLink class="navitem" to="/about">About</RouterLink>
        <RouterLink class="navitem" to="/projects">Projects</RouterLink>
        <RouterLink class="navitem last-nav" to="/connect">Connect</RouterLink>
        <div class="divider"></div>
        <a href="https://www.instagram.com/brady_zalasky/"><font-awesome-icon icon="fa-brands fa-instagram" class="icon" size="xl"/></a>
        <a href="https://www.linkedin.com/in/brady-zalasky-00537514a/"><font-awesome-icon icon="fa-brands fa-linkedin" class="icon" size="xl"/></a>
        <a href="https://github.com/bazalasky"><font-awesome-icon icon="fa-brands fa-github" class="icon" size="xl"></font-awesome-icon></a>
      </nav>
      <nav class="mobileNav" v-bind:class="{'nav-open': visible === true}">
        <img class="logo" src="../assets/25_BZ_V3.jpg">
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
    align-self: center;
    justify-self: center;
  }

  .divider {
    background-color: #E73B05;
    width: 3px;
    justify-self: center;
  }

  .logo {
    width: 100%;
  }

  .nav-open {
    background-color: #E73B05;
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
    color: #ffffff; 
  }

  .icon:hover {
    color: #000;
  }

  @media screen and (min-width: 800px) {
    header {
      height: 7.5rem;
    }

    .desktopNav {
      display: grid;
      grid-template-columns: 28% 1.5% 11% 11% 11% 11% 1.5% 3% 3% 3%;
      gap: 1rem;
      border: 3px solid #E73B05;
      border-radius: 10px;
      padding: 2rem 1rem 2rem 2rem;
      margin: auto;
      width: 75%;
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
      color: #000;
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