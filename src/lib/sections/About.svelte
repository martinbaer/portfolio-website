<script lang="ts">
    import colors from "../../constants/colors";
    import Section from "../containers/Section.svelte";
</script>

<Section isMain>
    <h1 class="right" style="color:{colors.accentBackground}">Who am I?</h1>
    <div class="subsection" style="flex-direction: row-reverse;">
        <div class="right content">
            <p>
                I’m a motivated 4th year student at The University of
                Queensland. I study a Bachelor of Engineering (Hons.) and Master
                of Engineering in Software and have a diverse range of passions
                in the field. I'm dedicated to continuous learning, receptive to
                constructive feedback, and I love making things.
            </p>
            <p>
                I created this portfolio website to connect with organisations
                that can offer a constructive environment and will support my
                growth.
            </p>
            <p>Check out my projects -></p>
            <p>Contact me -></p>
        </div>
        <div class="circle-container">
            <img src="/placeholder.jpg" alt="placeholder" />
        </div>
    </div>
    <h1 style="color:{colors.accentBackground}">What am I interested in?</h1>
    <div class="subsection">
        <div class="content">
            <p>
                So far at uni I have a solid introduction to several fields
                within software engineering. My areas of interest include:
            </p>
            <ul>
                <li>Software processes and management</li>
                <li>Design and human computer interaction</li>
                <li>Web information systems</li>
                <li>Software architecture</li>
                <li>Cyber security and cryptography</li>
                <li>Machine learning</li>
                <li>Computer networks</li>
                <li>High-performance computing</li>
            </ul>
            <p>
                I try to bring the same fun-loving nature into both my
                professional pursuits and personal hobbies. Photo: Despite not
                being the most seasoned hiker, I am always up for a challenge.
                Last year I did the 4-day Sunshine Coast Hinterland Great Walk
                and this year I plan on doing the 4-day Conondale Range Great
                Walk.
            </p>
        </div>
        <div class="circle-container">
            <img src="/placeholder.jpg" alt="placeholder" />
        </div>
    </div>
    <div class="right">
        <h1 style="color:{colors.accentBackground}">
            What skills do I have so far?
        </h1>
        <p>
            I try to have a language-agnostic approach to problem-solving – I'm
            comfortable learning new technologies, languages, and frameworks.
            Listed below are the technologies with which I have gained
            proficiency while working on my personal projects and university
            assignments.
        </p>
    </div>
    <div style="height:40px" />
</Section>

<style lang="scss">
    // li bullet point on right of text
    // ul {
    //     list-style-position: inside;
    // }
    .right {
        text-align: right;
    }
    h1 {
        margin-bottom: 0;
        margin-top: 50px;
    }
    .subsection {
        .content {
            width: calc(100% - 210px);
            min-width: 400px;
        }

        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 10px;
        // wrap
        flex-wrap: wrap;
        // for screens smaller than 600px
        @media (max-width: 600px) {
            // reverse
            .content {
                width: 100%;
                min-width: 0;
            }
        }
    }
    .circle-container {
        width: 170px; /* adjust to your needs */
        height: 170px; /* adjust to your needs */
        border-radius: 50%;
        overflow: hidden;
    }

    .circle-container img {
        width: 100%;
        height: 100%;
        object-fit: cover; /* scales and crops the image to fill the container */
        object-position: center; /* adjust the position of the image within the container */
    }
</style>
