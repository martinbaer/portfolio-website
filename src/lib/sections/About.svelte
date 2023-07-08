<script lang="ts">
    import Section from "../containers/Section.svelte";
</script>

<Section isMain>
    <h1 class="right">Who am I?</h1>
    <div class="subsection">
        <div class="circle-container">
            <img src="/placeholder.jpg" alt="placeholder" />
        </div>
        <div class="right content">
            <p>
                I’m a motivated 4th year software engineering undergraduate at
                The University of Queensland, with a diverse range of passions.
                I'm dedicated to continuous learning, receptive to constructive
                feedback, and consistently infuse a sense of enjoyment into all
                my projects.
            </p>
            <p>
                I created this portfolio website to connect with organisations
                that will fuel my growth mindset and provide the most conducive
                environment for my personal and professional development.
            </p>
        </div>
    </div>
    <h1>What am I interested in?</h1>
    <div class="subsection">
        <div class="content">
            <p>
                So far at uni I have a solid introduction to many fields within
                software engineering including:
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
                Unrelated to my career I also have an interest in exploring
                nature. Last year I did the 4-day Sunshine Coast Hinterland
                Great Walk and this year I plan on doing the 4-day Conondale
                Range Great Walk.
            </p>
        </div>
        <div class="circle-container">
            <img src="/placeholder.jpg" alt="placeholder" />
        </div>
    </div>
    <div class="right">
        <h1>What skills do I have so far?</h1>
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
            width: calc(100% - 180px);
        }

        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 10px;
    }
    .circle-container {
        width: 150px; /* adjust to your needs */
        height: 150px; /* adjust to your needs */
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
