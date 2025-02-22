<template>
  <section class="home-page">
    <div class="content-wrapper">
      <h1 class="logo">BRADY ZALASKY</h1>
      <h4 class="blurb">Software engineer with a passion for web development and design</h4>
      <div class="learn-more">
        <a href="/about" class="btn btn-secondary">Learn More</a>
      </div>
    </div>
    <div class="bz-logo"><img alt="BZ logo" src="../assets/BZ-Only_WhiteWhiteTrans.jpg"></div>
  </section>
</template>

<script>
</script>

<style scoped>
  .home-page {
    width: 75%;
    height: 100%;
    margin: 0 auto 5rem auto;
    display: grid;
    grid-template-columns: 50% 50%;
    justify-content: center;
  }

  .logo {
    color: white;
    line-height: 0.8;
    margin-top: 10rem;
  }

  .bz-logo {
    color: #fff;
    margin-top: 10rem;
    width: 100%;
    text-align: right;
  }

  p {
    font-size: 24px;
  }

  .learn-more {
    text-align: right;
  }

  @media screen and (min-width: 800px) {

    .blurb {
      color: #fff;
      line-height: 1.4;
      width: 100%;
      margin: 1em 0 1em 0;
    }
  }

  @media screen and (max-width: 1300px) {
    .logo {
      font-size: 72px;
    }
  }

  @media screen and (max-width: 799px) {
    .btn-secondary {
      font-size: 16px;
    }

    .logo {
      font-size: 3.5em;
      max-width: 100%;
      line-height: 1;
      margin-top: 0;
    }

    .blurb {
      color: #fff;
      font-size: 16px;;
      line-height: 1.4;
      width: 100%;
      margin: 2em auto 2em auto;
    }

    .home-page {
      grid-template-columns: 1fr;
    }

    .bz-logo {
      text-align: left;
      margin-top: 20px;
    }

    .learn-more {
      text-align: left;
    }
  }
</style>
