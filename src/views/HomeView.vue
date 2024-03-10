<template>
  <video autoplay muted id="titleVideo">
    <source src="../assets/BZtitlecard.mp4" type="video/mp4">
  </video>
  <section class="home-page">
    <h1 class="logo">BRADY ZALASKY</h1>
    <p class="blurb">I’m a software engineer with an emphasis on web development. I'm passionate about creating a better web experience with the intersection of functionality and design.</p>
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

<script>
  window.onload = function() {
    document.section.style.backgroundColor = "none";
  }
</script>

<style scoped>
  #titleVideo {
    position: fixed;
    min-height: 100%;
    min-width: 100%;
    right: 0;
    bottom: 0;
    z-index: -1;
  }
  .home-page {
    text-align: center;
    margin-left: 17em;
    margin-right: 17em;
    padding-bottom: 30em;
  }

  .logo, .blurb, .btn-group {
    display: flex;
    justify-content: center;
  }

  .logo {
    padding-top: 5em;
    font-size: 40px;
    font-weight: 500;
  }

  .blurb {
    /* margin: 1em 0 1em 0; */
    text-align: center;
    line-height: 1.4;
    width: 25em;
    margin: 2em auto 5em auto;
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
