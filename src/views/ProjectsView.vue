<template>
    <section class="project-showcase">
        <header>
            <h2 class="section-title">MY PROJECTS</h2>
        </header>
        <div class="projects">
            <div class="project">
                <h4>WEB AUDIO BEAT MACHINE</h4>
                <img src="../assets/beatmachine.jpeg" alt="" class="project_img">
                <p class="project-description">Javascript web application built using Web Audio API to simulate a drum machine. Complete with multiple drum sounds and a synthesizer.</p>
            </div>
            <div class="project">
                <h4>MOVIE SEARCH TOOL</h4>
                <img src="../assets/moviesearch.jpeg" alt="" class="project_img">
                <p class="project-description">Javascript web application built using The Movie Database API to search movies and view movie details and ratings.</p>
            </div>
            <div class="project">
                <h4>PERSONAL PORTFOLIO</h4>
                <img src="" alt="" class="project_img">
                <p class="project-description">My first website built from scratch using HTML, CSS, and Javascript to display my work.</p>
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
        margin-top: 10em;
        text-align: center;
    }

    .projects {
        display: flex;
        flex-wrap: wrap;
        color: #fff;
        justify-content: center;
    }

    .project {
        background-color: var(--clr-primary);
        padding: 2em 2em 2em 2em;
        margin: 5em;
        border-radius: 2em;
        box-shadow: 0 3px 3px 5px rgba(0,0,0,0.2);
        text-align: center;
        width: 400px;
    }

    .project_img {
        margin: 2em 0 2em 0;
        border-radius: 0.5em;

    }
</style>