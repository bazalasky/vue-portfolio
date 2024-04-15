<template>
    <section class="project-showcase">
        <h2 class="section-title">My Projects</h2>
        <div class="projects">
            <div class="project">
                <div class="project-img">
                    <a href="https://github.com/bazalasky/WebAudioBeatMachine"><img src="../assets/beatmachine.jpeg" alt="Beat Machine"></a>
                </div>
                <div class="project-text">
                    <h4>WEB AUDIO BEAT MACHINE</h4>
                    <p>Javascript web application built using Web Audio API to simulate a drum machine. Complete with multiple drum sounds and a synthesizer.</p>
                </div>
            </div>
            <div class="project">
                <div class="project-img">
                    <a href="https://github.com/bazalasky/project-log/tree/main/MovieRecs"><img src="../assets/moviesearch.jpeg" alt="Movie Search"></a>
                </div>
                <div class="project-text">
                    <h4>MOVIE SEARCH TOOL</h4>
                    <p>Javascript web application built using The Movie Database API to search movies and view movie details and ratings.</p>
                </div>
            </div>
            <div class="project">
                <div class="project-img">
                    <a href="https://github.com/bazalasky/vue-portfolio"><img src="../assets/portfolio.jpeg" alt="Portfolio"></a>
                </div>
                <div class="project-text">
                    <h4>PERSONAL PORTFOLIO</h4>
                    <p>My first website built from scratch to showcase my projects and offer a point of contact. Built using Vue.js and AWS.</p>
                </div>
            </div>
            <div class="project">
                <div class="project-img">
                    <a href="https://www.figma.com/proto/NPmUuJisvI7WvBUpjvgEz1/Wireframes-1?type=design&node-id=45-165&t=Cx6XbwsSXUON93WN-1&scaling=scale-down&page-id=45%3A164&starting-point-node-id=45%3A165&mode=design"><img src="../assets/punkband.jpeg" alt="Punk Band Merch"></a>
                </div>
                <div class="project-text">
                    <h4>Punk Band Merchandising App</h4>
                    <p>A mobile and web design mockup of a merchandising shop for a punk rock band. My first venture into UI/UX design. Built using Figma.</p>
                </div>
            </div>
            <div class="project">
                <div class="project-img">
                    <a href="https://www.figma.com/proto/bxbEZMzCBTZdu3bPWt33sN/Social-Good-Project?type=design&node-id=12-180&t=g4F4cmdpsDGBUpFB-1&scaling=scale-down&page-id=12%3A179&starting-point-node-id=12%3A180&mode=design"><img src="../assets/plantmd.jpeg" alt="Plant MD"></a>
                </div>
                <div class="project-text">
                    <h4>Houseplant Care App</h4>
                    <p>A design mockup for a mobile app meant to track houseplants and diagnose issues. My first design project with a major focus on user experience and functionality. Built using Figma.</p>
                </div>
            </div>
        </div>
    </section>
</template>

<style scoped>
    body {
        background-color: var(--clr-secondary);
        color: #000;
    }

    h4 {
        line-height: 1em;
    }

    .project-showcase {
        text-align: center;
        background-color: var(--clr-background);
    }

    .projects {
        display: flex;
        flex-wrap: wrap;
        color: #fff;
        justify-content: center;
    }

    .project {
        margin: 5em;
        box-shadow: 0 3px 3px 5px rgba(0,0,0,0.2);
        text-align: center;
        border: #fff solid 2px;
    }

    .project-img {
        height: 300px;
        width: 400px;
        display: none;
    }

    .project-img img {
        height: 300px;
        width: 400px;
        object-fit: cover;
    }

    .project-text {
        background-color: rgba(0,0,0,0.85);
        height: 300px;
        width: 400px;
        padding: 2rem;
    }

    .project-text h4 {
        margin-bottom: 1.5rem;
    }

    .project:hover .project-img{
        display: block;
    }

    .project:hover .project-text{
        display: none;
    }
</style>