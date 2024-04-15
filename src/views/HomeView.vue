<template>
  <video autoplay muted loop plays-inline id="titleVideo">
    <source src="../assets/bzvidnotext.mp4" type="video/mp4">
  </video>
  <section class="home-page">
    <h1 class="logo">BRADY ZALASKY</h1>
    <p class="blurb">I’m a software engineer with an emphasis on web development. I'm passionate about creating a better web experience with the intersection of functionality and design.</p>
    <nav>
        <div class="btn-group">
            <a href="/about" class="btn btn-secondary">About</a>
            <a href="/projects" class="btn btn-secondary">Projects</a>
            <a href="/connect" class="btn btn-secondary">Connect</a>
        </div>
    </nav>
    <div class="social-container">
      <a href="https://www.instagram.com/brady_zalasky/"><font-awesome-icon icon="fa-brands fa-instagram" size="2xl" style="color: #ffffff;"/></a>
      <a href="https://www.linkedin.com/in/brady-zalasky-00537514a/"><font-awesome-icon icon="fa-brands fa-linkedin" size="2xl" style="color: #ffffff;" /></a>
    </div>
  </section>
</template>

<script>
</script>

<style scoped>
  body {
    text-align: center;
  }
  #titleVideo {
    position: absolute;
    right: 0;
    bottom: 0;
    z-index: -1;
  }

  .home-page {
    width: 100%;
    height: 100vh;
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    overflow: hidden;
  }

  .logo, .blurb {
    display: grid;
    grid-template-columns: 1fr;
    justify-content: center;
  }

  .logo {
    color: white;
  }

  p {
    font-size: 24px;
  }

  /* @media (min-aspect-ratio: 16/9) {
    #titleVideo {
      width: 100%;
      height: auto;
    }
  }

  @media (max-aspect-ratio: 16/9) {
    #titleVideo {
      width: 100%;
      height: auto;
    }
  } */

  @media screen and (min-width: 800px) {
    .btn-group {
      display: grid;
      grid-template-columns: 33% 33% 33%;
      grid-gap: 5rem;
      margin: 0 8rem 0 8rem;
      justify-content: center;
    }

    .social-container {
      margin-top: 5em;
    }

    .blurb {
      color: #fff;
      text-align: center;
      line-height: 1.4;
      width: 25em;
      margin: 2em auto 5em auto;
    }
  }

  @media screen and (max-width: 799px) {
    .btn-secondary {
      font-size: 16px;
    }

    .social-container {
      margin: 2em auto 0 11em;
    }

    .btn-group {
      display: grid;
      grid-template-columns: 1fr;
      justify-content: center;
    }

    .logo {
      font-size: 3.5em;
      max-width: 100%;
      line-height: 1;
      margin: 0.5 auto 0 auto;
      text-align: center;
    }

    .blurb {
      color: #fff;
      font-size: 16px;;
      text-align: center;
      line-height: 1.4;
      width: 15em;
      margin: 2em auto 2em auto;
    }
  }

  .social-container > a {
    margin: 0 1em 0 0;
  }
</style>
