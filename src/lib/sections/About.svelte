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
        <h1>About</h1>
        <!-- <h2 class="right">Who am I?</h2> -->
        <div
            class="subsection flex-reverse"
            style="flex-direction: row-reverse;"
        >
            <div class="right content">
                <p>
                    I'm a final year Bachelor of Engineering (Hons.) and Master
                    of Engineering (Software) student with a broad range of
                    interests especially in machine learning, software
                    architecture, and cross-disciplinary projects. I love
                    learning and challenging myself.
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
                <img src="/images/martin_baer_hiking.jpg" alt="Martin Baer" />
                <!-- <img src="/images/martin_baer_headshot.jpg" alt="Martin Baer" /> -->
            </div>
        </div>

        <div style="height: 40px" />
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
