<template>
    <section class="project-showcase">
        <h2 class="section-title">MY PROJECTS</h2>
        <p class="project-blurb">Click on project image to view on Github or Figma</p>
        <div class="projects">
            <div class="project">
                <h5>WEB AUDIO BEAT MACHINE</h5>
                <div class="project-img">
                    <a href="https://github.com/bazalasky/WebAudioBeatMachine"><img src="../assets/beatmachine.jpeg" alt="Beat Machine"></a>
                </div>
                <div class="project-text">
                    <p>Javascript web application built using Web Audio API to simulate a drum machine. Complete with multiple drum sounds and a synthesizer.</p>
                </div>
            </div>
            <div class="project">
                <h5>MOVIE SEARCH TOOL</h5>
                <div class="project-img">
                    <a href="https://github.com/bazalasky/project-log/tree/main/MovieRecs"><img src="../assets/moviesearch.jpeg" alt="Movie Search"></a>
                </div>
                <div class="project-text">
                    <p>Javascript web application built using The Movie Database API to search movies and view movie details and ratings.</p>
                </div>
            </div>
            <div class="project">
                <h5>PERSONAL PORTFOLIO</h5>
                <div class="project-img">
                    <a href="https://github.com/bazalasky/vue-portfolio"><img src="../assets/portfolio.jpeg" alt="Portfolio"></a>
                </div>
                <div class="project-text">
                    <p>My first website built from scratch to showcase my projects and offer a point of contact. Built using Vue.js and AWS.</p>
                </div>
            </div>
            <div class="project">
                <h5>PUNK BAND MERCH APP</h5>
                <div class="project-img">
                    <a href="https://www.figma.com/proto/NPmUuJisvI7WvBUpjvgEz1/Wireframes-1?type=design&node-id=45-165&t=Cx6XbwsSXUON93WN-1&scaling=scale-down&page-id=45%3A164&starting-point-node-id=45%3A165&mode=design"><img src="../assets/punkband.jpeg" alt="Punk Band Merch"></a>
                </div>
                <div class="project-text">
                    <p>A mobile and web design mockup of a merchandising shop for a punk rock band. My first venture into UI/UX design. Built using Figma.</p>
                </div>
            </div>
            <div class="project">
                <h5>HOUSEPLANT CARE APP</h5>
                <div class="project-img">
                    <a href="https://www.figma.com/proto/bxbEZMzCBTZdu3bPWt33sN/Social-Good-Project?type=design&node-id=12-180&t=g4F4cmdpsDGBUpFB-1&scaling=scale-down&page-id=12%3A179&starting-point-node-id=12%3A180&mode=design"><img src="../assets/plantmd.jpeg" alt="Plant MD"></a>
                </div>
                <div class="project-text">
                    <p>A design mockup for a mobile app meant to track houseplants and diagnose issues. Design project with a focus on user experience and functionality. Built using Figma.</p>
                </div>
            </div>
        </div>
    </section>
</template>

<style scoped>
    h2 {
        margin-left: 12%;
    }
    h5 {
        line-height: 1em;
        font-weight: 800;
        margin-bottom: 25px;
    }

    .project-blurb {
        margin-left: 12%;
        color: #FFF;
        margin-bottom: 2em;
    }

    .projects {
        display: flex;
        flex-wrap: wrap;
        align-items: flex-start;
        color: #fff;
        justify-content: center;
    }

    .project {
        margin: 2em;
        padding: 2em;
        border-radius: 20px;
        background-color: #E73B05;
    }

    .project-img img {
        height: 200px;
        width: 300px;
        border: solid 1px #FFF;
        object-fit: cover;
    }

    .project-text {
        height: 0;
        width: 300px;
        display: block;
        visibility: hidden;
        transition: visibility 0s, height 0.1s;
        transition-timing-function: ease-out;
    }

    .project-text h5 {
        margin-bottom: 1.5rem;
    }

    .project:hover .project-text{
        visibility: visible;
        height: 100px;
    }

    @media screen and (max-width: 1000px) {
        h2, .project-blurb {
            margin-left: 5%;
        }

        .section-title {
            padding-top: 0;
        }
        
        .projects {
            margin: 0 1em 0 1em;
        }

        .project {
            width: 90%;
        }

        .project-img img{
            width: 100%;
        }

        .project-text {
            visibility: visible;
            height: 150px;
            width: 100%;
        }
    }
        
</style>