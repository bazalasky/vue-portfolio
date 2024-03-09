<template>
    <section class="project-showcase">
        <h2 class="section-title">My Projects</h2>
        <div class="projects">
            <div class="project">
                <div class="project-img">
                    <img src="../assets/beatmachine.jpeg" alt="">
                </div>
                <div class="project-text">
                    <h4>WEB AUDIO BEAT MACHINE</h4>
                    <p>Javascript web application built using Web Audio API to simulate a drum machine. Complete with multiple drum sounds and a synthesizer.</p>
                </div>
            </div>
            <div class="project">
                <div class="project-img">
                    <img src="../assets/moviesearch.jpeg" alt="">
                </div>
                <div class="project-text">
                    <h4>MOVIE SEARCH TOOL</h4>
                    <p>Javascript web application built using The Movie Database API to search movies and view movie details and ratings.</p>
                </div>
            </div>
            <div class="project">
                <div class="project-img">
                    <img src="" alt="">
                </div>
                <div class="project-text">
                    <h4>PERSONAL PORTFOLIO</h4>
                    <p>My first website built from scratch using HTML, CSS, and Javascript to display my work.</p>
                </div>
            </div>
            <div class="project">
                <div class="project-img">
                    <img src="" alt="">
                </div>
                <div class="project-text">
                    <h4>Google Cert 1</h4>
                    <p>My first website built from scratch using HTML, CSS, and Javascript to display my work.</p>
                </div>
            </div>
            <div class="project">
                <div class="project-img">
                    <img src="" alt="">
                </div>
                <div class="project-text">
                    <h4>Google Cert 2</h4>
                    <p>My first website built from scratch using HTML, CSS, and Javascript to display my work.</p>
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