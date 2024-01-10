<script setup>
</script>

<template>
  <section class="home-page">
          <h1 class="logo">BRADY ZALASKY</h1>
          <p class="blurb">I’m a software engineer with an emphasis on web development. I'm passionate about creating a better web experience with the intersection of functionality and design.</p>
          <a class="call-to-action">Let's work together!</a>
          <nav>
              <div class="btn-group">
                  <a href="/about" class="btn btn-primary">About</a>
                  <a href="/projects" class="btn btn-primary">Projects</a>
                  <a href="/connect" class="btn btn-primary">Connect</a>
              </div>
          </nav>
          <div class="social-container">
            <a href="https://www.instagram.com/brady_zalasky/"><font-awesome-icon icon="fa-brands fa-instagram" size="2xl" style="color: #000000;"/></a>
            <a href="https://www.linkedin.com/in/brady-zalasky-00537514a/"><font-awesome-icon icon="fa-brands fa-linkedin" size="2xl" style="color: #000000;" /></a>
          </div>
      </section>
</template>

<style scoped>
  body {
    background-color: var(--clr-primary);
  }

  .home-page {
    text-align: center;
    margin-left: 17em;
    margin-right: 17em;
  }

  .logo, .blurb, .btn-group {
    display: flex;
    justify-content: center;
  }

  .logo {
    margin-top: 5em;
    font-size: 40px;
    font-weight: 500;
  }

  .blurb {
    margin: 1em 0 1em 0;
    text-align: center;
    line-height: 1.4;
  }

  .call-to-action {
    padding: .5em 1em;
    margin: 2em 0 10em 0;
    width: 200px;
    cursor: pointer;
    color: #000000;
    background-color: #fdb92b;
    border-radius: 0.5em;
    box-shadow: 0 4px 0 0px rgba(0,0,0,0.2);
    display: inline-block;
    font-size: 16px;
  }

  .call-to-action:hover {
    background-color: hsla(168, 100%, 1%, 0.2);
  }

  .social-container {
    margin-top: 5em;
  }

  .social-container > a {
    margin: 0 1em 0 0;
  }
</style>
