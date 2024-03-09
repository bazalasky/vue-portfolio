<template>
  <header>
    <div class="wrapper">
      <nav>
        <RouterLink class="navitem" to="/">Home</RouterLink>
        <RouterLink class="navitem" to="/about">About</RouterLink>
        <h3 class="logo">BRADY ZALASKY</h3>
        <RouterLink class="navitem" to="/projects">Projects</RouterLink>
        <RouterLink class="navitem" to="/connect">Connect</RouterLink>
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

  .wrapper {
    background-color: var(--clr-primary);
    padding: 2rem;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
  }
  nav {
    display: flex;
    justify-content: space-between;
  }

  .logo {
    color: #fff;
  }

  .navitem {
    background-color: var(--clr-primary);
  }

  .navitem:hover {
    text-decoration: underline;
    text-underline-offset: 1em;
    color: #000;
  }
</style>