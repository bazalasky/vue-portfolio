<template>
    <div class="about-me-wrapper">
        <section class="about-me">
            <img id="brady" src="../assets/brady.jpeg">
            <div class="about-info">
                <h2 class="about-title">About Me</h2>
                <p class="about-blurb">I am a software engineer with an enthusiasm and curiosity for web development and design. I am someone who dreams big, loves to learn, and is always eager to try new things. When I'm not at my computer, I love to excerise, cook, play basketball, and play chess. I'm drawn to the outdoors and enjoy spending time hiking, running, swimming , hammocking, or just enjoying the view. Movies, music, fashion, and design are things that I geek out on and I would love to be able to incorporate them into my work someday!</p>
            </div>
        </section>
    </div>
    <section class="my-journey">
        <h2 class="section-title">My Journey</h2>
        <div class="journey-block">
            <div class="journey-block-header">
                <img src="../assets/uihc.jpeg" alt="" id="journey-img">
                <div class="journey-block-title">
                    <h4>University of Iowa Health Care</h4>
                    <h5>Application Developer, 2022 - Present</h5>
                </div>
            </div>
            <p>In 2022, I began my journey at UIHC as an application developer. Working in the healthcare industry presented a number of new and exciting challenges. I gained a lot of experience working in a complex and highly regulated environment. At the same time I embraced new technical challenges, working with Drupal, PHP, Algolia, Acquia, and more for the first time, all the while working on websites of a scale larger than any I had worked on before. Whether I was designing intuitive user interfaces for healthcare professionals, developing new features to improve the patiennt experience, or implementing security measures to ensure patient safety, I took pride in knowing the work I did at UIHC was making a real difference, and at the same time I felt like I was able to take my skills as a web developer and a business professional to the next level. </p>
        </div>
        <div class="journey-block">
            <div class="journey-block-header">
                <img src="../assets/cylosoft.jpeg" alt="" id="journey-img">
                <div class="journey-block-title">
                    <h4>Cylosoft</h4>
                    <h5>Software Engineer Intern, 2020 - 2022</h5>
                </div>
            </div>            
            <p>In Spring of 2020, I transitioned from Nebullam to an established web development company at Cylosoft. At Cylosoft I was able to gain invaluable experience working on large scale web development projects. The biggest one being Stripes: a website and app providing an organized scheduling system for referees of all sports. I was able to contribute to the design and functionality of the scheduling page, and aid in the rollout of the application on the App Store. I also led an effort to ensure our websites met WCAG 2.1 ADA compliance standards, making changes to our HTML and CSS to improve our accessibility. When I wasn't working on either of those projects, I was helping to update and add material to the frontend of our clients' websites. My time at Cylosoft added fuel to the fire of my passion for web development and design, and I'm looking forward to what's next on my journey!</p>
        </div>
        <div class="journey-block">
            <div class="journey-block-header">
                <img src="../assets/nebullam_edited.jpeg" alt="" id="journey-img">
                <div class="journey-block-title">
                    <h4>Nebullam</h4>
                    <h5>Market Research Analyst, 2018 - 2020</h5>
                </div>
            </div>
            <p>I'm grateful for my time at Nebullam. I was able to see things from the unique perspective of a vertical farming startup trying to get in on the ground level. The small team, consisting of multiple experts in their respective fields, instilled in me the importance of teamwork and camaraderie. And as the young newcomer I was able to be a sponge, soaking up wisdom from my colleagues to improve my technical and professional skills. Throughout my time at the company, I was tasked with numerous jobs that would help me to round out my skill set, becoming a 5 tool baseball player of sorts for the company. I helped provide onsite troubleshooting for the software systems on site, set up Raspberry Pi hardware to drive lighting systems for the indoor farm, conducted research on competitors within the industry, and even did my fair share of seeding and harvesting.</p>
        </div>
        <div class="journey-block">
            <div class="journey-block-header">
                <img src="../assets/isu_edited.jpeg" alt="" id="journey-img">
                <div class="journey-block-title">
                    <h4>Iowa State University</h4>
                    <h5>Software Engineering, 2017-2021</h5>
                </div>
            </div>
            <p>Iowa State gave me the chance to expand my horizons like I never had before. At every turn, an opportunity to try something new was introduced to me. Software engineering presented a new challenge, and I dove head first into the major. I remember when I first came to the university I had never written a single line of code. It was something I had only seen done by hackers in the movies (I quickly learned that The Matrix was not an accurate representation of programming). But I was intrigued by the creative nature of software engineering. I liked that there was no one way to do things; that each problem offered several unique solutions. I had fun racking my brain to solve a new problem, and nothing beat that feeling of satisfaction when the job was finished. When I discovered that I could pair that problem solving with design (something that had always fascinated me) on the frontend, I quickly embraced it as something that could become my career. And I haven't looked back since!</p>
        </div>
    </section>
</template>

<style scoped>
    .my-journey {
        background-color: var(--clr-background);
    }

  .about-me-wrapper {
        background-color: rgba(0,0,0,0.85);
        color: #fff;
    }

    #brady {
      width: 100%;
    }

    .journey-block {
        margin-top: 5em;
        justify-content: flex-start;
        background-color: rgba(0,0,0,0.85);
        border-radius: 0em;
        border: #fff solid 3px;
        box-shadow: 0 3px 3px 5px rgba(0,0,0,0.2);
        color: #fff;
        padding: 2em;
        font-style: normal;
    }

  @media screen and (min-width: 800px) {
    .about-me {
      display: grid;
      grid-template-columns: 40% calc(60% - 1em);
      grid-gap: 10em;
      font-style: italic;
    }

    .about-info {
        margin-top: 5em;
        text-align: left;
    }

    .about-blurb {
        width: 30em;
        margin: 1em 2em 1em 0;
        line-height: 1.4;
        font-size: 20px;
        font-style: normal;
    }

    .my-journey {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        padding: 0 15em 5em 15em;
        font-style: italic;
    }

    #journey-img {
        border-radius: 1em;
        box-shadow: 0 3px 3px 2px rgba(0,0,0,0.2);
    }

    .journey-block-header {
        display: flex;
        justify-content: flex-start;
        margin-bottom: 2em;
    }

    .journey-block-title {
        margin-left: 1em;
        position: relative;
        bottom: -2em;
    }
  }
  @media screen and (max-width: 799px) {
    .about-info {
        margin: 2em 1em 0 1em;
        padding-bottom: 2em;
        text-align: center;
    }

    .journey-block {
        margin: 5em 1em 5em 1em;
    }
    .journey-block-header {
        display: grid;
        grid-template-columns: 25% 75%;
        grid-gap: 1em;
        margin-bottom: 2em;
    }

    .journey-block-title {
        line-height: 1.2;
        align-self: flex-end;
    }
  }
</style>
