<script lang="ts">
    import Link from "../containers/Link.svelte";
    import Section from "../containers/Section.svelte";
    import { onMount } from "svelte";
    onMount(() => {
        document.title = "Martin Baer";
    });
</script>

<article>
    <Section>
        <h1>About me</h1>
        <h2 class="right">Who am I?</h2>
        <div
            class="subsection flex-reverse"
            style="flex-direction: row-reverse;"
        >
            <div class="right content">
                <p>
                    I’m a motivated 4th year student at The University of
                    Queensland. I'm currently completing a Bachelor of
                    Engineering (Hons.) and Master of Engineering in Software
                    and have a broad range of interests especially in cyber
                    security and data science. I have a passion for learning and
                    I love making things.
                </p>
                <p>
                    I created this portfolio website to connect with
                    forward-thinking organisations where I can leverage my
                    skills in Software Engineering in a challenging, creative,
                    problem-solving, team environment.
                </p>
                <Link to="/contact">Contact me</Link>
                <Link to="/projects">Check out my projects</Link>
                <Link to="https://github.com/martinbaer">
                    Check out my GitHub
                </Link>
                <Link to="https://www.linkedin.com/in/martin-baer-a8b133282/">
                    Connect on LinkedIn
                </Link>
                <div style="height: 20px;" />
            </div>
            <div class="circle-container">
                <img src="/images/placeholder.jpg" alt="Martin Baer" />
                <!-- <img src="/images/martin_baer_headshot.jpg" alt="Martin Baer" /> -->
            </div>
        </div>
        <h2>What am I interested in?</h2>
        <div class="subsection">
            <div class="content">
                <p>
                    I have a solid introduction to several fields within
                    software engineering. My areas of interest include:
                </p>
                <ul>
                    <li>Software engineering processes and management</li>
                    <li>Cyber security and cryptographic systems</li>
                    <li>Software architecture</li>
                    <li>Machine learning</li>
                    <li>Web information systems</li>
                    <li>Blockchain and decentralised systems</li>
                    <li>Design and human-computer interaction</li>
                    <li>Computer networks</li>
                    <li>High-performance computing</li>
                </ul>
                <p>
                    I try to bring the same fun-loving nature into both my
                    professional pursuits and personal hobbies. Despite not
                    being the most seasoned hiker, I'm always up for a
                    challenge. Last year I did the 4-day Sunshine Coast
                    Hinterland Great Walk and this year I plan on doing the
                    4-day Conondale Range Great Walk.
                </p>
            </div>
            <div class="circle-container">
                <img
                    src="/images/martin_baer_hiking.jpg"
                    alt="Martin Baer hiking"
                />
            </div>
        </div>
        <div class="right shortened">
            <h2>What skills do I have so far?</h2>
            <p>
                I try to have a language-agnostic approach to problem-solving –
                I'm comfortable learning new technologies, languages, and
                frameworks. Listed below are the technologies with which I have
                gained proficiency while working on my personal projects and
                university assignments.
            </p>
        </div>
        <h3>Languages</h3>
        <div class="skill-list">
            <p>
                <strong>Proficient:</strong> Java, Python, Javascript, Typescript,
                C, C++, Rust, HTML, CSS, SCSS/Sass, LaTeX.
            </p>
            <p>
                <strong>Familiar:</strong> Bash, SQL, PHP, Solidity, CUDA, MATLAB,
                R.
            </p>
        </div>

        <h3>Frameworks and libraries</h3>
        <div class="skill-list">
            <p>
                <strong>Proficient:</strong> React, Svelte, Node.js, Numpy, MatPlotLib.
            </p>
            <p>
                <strong>Familiar:</strong> Intel Intrinsics AVX, MPI, OpenMP, CUDA,
                Numpy, Pandas, TensorFlow, Scikit-learn, Express.js, Actix, CodeIgniter,
                Sveltekit.
            </p>
        </div>

        <h3>Tools</h3>
        <div class="skill-list">
            <p>
                <strong>Proficient:</strong> Linux, Git, Figma, Make, Cloudflare,
                MySQL, MongoDB, Wireshark.
            </p>
            <p>
                <strong>Familiar:</strong> MacOS, Windows, SVN, Gradle, Cargo, Canva,
                Adobe Photoshop, Apache, Docker, Google Cloud Run, Wasm-Pack, Webpack,
                Vite, Rollup, Remix - Ethereum IDE, MetaMask, Optimism, RStudio.
            </p>
        </div>

        <div style="height: 40px" />
        <div class="right">
            <Link to="/projects">Check out my projects</Link>
        </div>
        <div class="right">
            <Link to="/contact">Contact me</Link>
        </div>
    </Section>
</article>

<style lang="scss">
    @use "../../constants/colors.scss" as colors;

    $image-width: 250px;

    $mobile-view-width: 730px;

    .skill-list {
        strong {
            // underline
            text-decoration: underline;
        }
    }

    ul li {
        // remove bullet
        list-style: none;
    }

    ul li::before {
        content: "\2022";
        color: colors.$accent;
        font-weight: bold;
        font-size: larger;
        display: inline-block;
        width: 1em;
        margin-left: -1em;

        // move down
        position: relative;
        top: 0.08em;
        left: 0.2em;
    }

    .shortened {
        width: calc(100% - $image-width - 35px);
        @media (max-width: $mobile-view-width) {
            width: 100%;
        }
    }

    .skill-type {
        // grid with 5 equal columns, and any size rows
        display: grid;
        grid-template-columns: repeat(5, 1fr);
        grid-auto-rows: minmax(100px, auto);
        grid-gap: 10px;
        grid-row-gap: 15px;
        // for screens smaller than 600px
        @media (max-width: 600px) {
            // 2 columns
            grid-template-columns: repeat(2, 1fr);
        }
    }

    .skill-type-large {
        // grid with 3 equal columns, and any size rows
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        grid-auto-rows: minmax(100px, auto);
        grid-gap: 10px;
        // large gap on rows
        grid-row-gap: 30px;
        // for screens smaller than 600px
        @media (max-width: 600px) {
            // 2 columns
            grid-template-columns: repeat(2, 1fr);
        }
    }

    .skill-group {
        ul {
            list-style-type: none;
            margin: 0;
            padding: 0;
        }
        ul li::before {
            content: "";
        }
    }

    .right {
        text-align: right;
        margin-left: auto;
    }
    .subsection {
        .content {
            width: calc(100% - $image-width - 35px);
            min-width: 400px;
        }

        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 10px;
        flex-wrap: wrap;
        @media (max-width: $mobile-view-width) {
            .content {
                width: 100%;
                min-width: 0;
            }
        }
    }
    .circle-container {
        width: $image-width;
        height: $image-width;
        border-radius: 50%;
        overflow: hidden;
    }

    .circle-container img {
        width: 100%;
        height: 100%;
        object-fit: cover; /* scales and crops the image to fill the container */
        object-position: center; /* adjust the position of the image within the container */
    }

    .circle-container {
        @media (max-width: $mobile-view-width) {
            margin: 0 auto;
            margin-top: 20px;
        }
    }
</style>
