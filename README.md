# Portfolio Site — bradyzalasky.com

My personal portfolio site, built with Vue.js to showcase my background, experience, and projects as a software engineer.

**Live site:** [bradyzalasky.com](https://www.bradyzalasky.com)

## Overview

A single-page application built with Vue, JavaScript, HTML, and CSS, hosted on AWS. The site includes About, Projects, Experience, and Contact sections, with a working contact form and full light/dark mode support.

## Features

- **About** — background and introduction
- **Projects** — showcases my work, including an extended, in-browser demo of the [Web Audio Beat Machine](https://github.com/bazalasky/WebAudioBeatMachine) — the site's highlight feature, letting visitors interact with the synthesizer/drum machine directly rather than just reading about it
- **Experience** — professional history
- **Contact** — a working contact form that submits via Axios to a custom AWS Lambda backend, rather than a static "email me" link or a third-party form service
- **Light/Dark Mode** — toggleable theme across the entire site

## Technical Highlights

- **Embedded interactive demo** — rather than just linking out to the Beat Machine repo, an extended version of the project is built directly into the Projects section so visitors can play with it in-browser
- **Custom serverless contact form** — the contact form submits via Axios to a self-built AWS Lambda function, rather than relying on a third-party form service — a small but real full-stack piece (frontend → API → backend)
- **Light/Dark mode** — theme switching implemented across the full site
- **Deployed on AWS** — hosted and served from AWS infrastructure rather than a simpler static host

## Tech Stack

Vue.js, JavaScript, HTML, CSS, Axios, AWS Lambda (contact form backend), AWS (hosting)

---

*Built by [Brady Zalasky](https://bradyzalasky.com)*
