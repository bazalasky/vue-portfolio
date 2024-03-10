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
        <a href="https://www.instagram.com/brady_zalasky/"><font-awesome-icon icon="fa-solid fa-bars" size="2xl" style="color: #ffffff;"/></a>
      </nav>
    </div>
  </header>
</template>

<script>
</script>

<style scoped>
  header {
    height: 7.5rem;
  }

  a {
    color: #FFF;
  }

  .logo {
    color: #fff;
  }

  @media screen and (min-width: 800px) {
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