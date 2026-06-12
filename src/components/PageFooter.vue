<template>
  <footer>
    <div class="footer-container">
        <div class="social-container">
              <a href="https://www.instagram.com/brady_zalasky/"><font-awesome-icon icon="fa-brands fa-instagram" class="icon" size="2xl"/></a>
              <a href="https://www.linkedin.com/in/brady-zalasky-00537514a/"><font-awesome-icon icon="fa-brands fa-linkedin" class="icon" size="2xl" /></a>
              <a href="https://github.com/bazalasky"><font-awesome-icon icon="fa-brands fa-github" class="icon" size="2xl" ></font-awesome-icon></a>
          </div>
        <span>© Brady Zalasky 2026</span>
    </div>
  </footer>
</template>

<script>
</script>

<style scoped>
  .social-container {
    margin-bottom: 2em;
  }

  .social-container > a {
    margin: 0 1em 0 0;
  }

  .footer-container {
    font-size: 14px;
    color: var(--color-text);
    width: 100%;
    padding: 2rem;
    text-align: center;
  }

  .icon {
    color: var(--color-text);
  }

  .icon:hover {
    color: var(--color-accent);
  }
</style>