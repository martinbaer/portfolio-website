<script lang="ts">
    import ProjectCard from "../containers/ProjectCard.svelte";
    import Section from "../containers/Section.svelte";
    import { onMount } from "svelte";
    onMount(() => {
        document.title = "Martin Baer | Projects";
    });
</script>

<article>
    <Section>
        <h1>Projects</h1>

        <ProjectCard
            title="Synaesthesia Experience — Build Project"
            tags={[
                "Complete",
                "Team",
                "University assignment",
                "Python",
                "Arduino"
            ]}
            imageLink="/images/synaesthesia.jpg"
            githubLink="https://github.com/DECO3801-The-Better-Half/Touch-Me-Not"
            moreInfoLink="/synaesthesia"
        >
            This team project was especially fun. It was completed as the
            capstone project in “Design Computing Studio 3 – Build”. It's an
            enclosed walk-in synaesthesia experience in which the sense of touch
            is translated to sound. Capacitive sensors attached to plants,
            flowers, water, metal and other conductive materials, trigger sounds
            to play when touched. Sensor input processed by an Arduino, then
            send to Python program which layers and plays sounds using ‘pygame’
            library. Contact me and I'll send a video of this project in action.
        </ProjectCard>
        <ProjectCard
            title="Real-Time Barnes-Hut Gravity Simulation"
            tags={[
                "Complete",
                "Solo",
                "Personal project",
                "Rust",
                "JavaScript",
                "WebAssembly"
            ]}
            imageLink="/images/spaceclicker.jpg"
            liveDemoLink="https://spaceclicker.martinbaer.au/"
            githubLink="https://github.com/martinbaer/real-time-gravity-sim"
        >
            This solo personal project is an interactive, real-time variant of a
            previously batch-processed model. It was written in Rust and
            JavaScript to try out compiling to WebAssembly with wasm-pack. It
            allows the computationally-intensive Barnes-Hut algorithm to run
            natively in a web browser with up to 10 000 bodies before
            performance decline.
            <p>Note: I'm still fixing the usability of the live demo.</p>
        </ProjectCard>
        <ProjectCard
            title="Machine Learning Based Network Intrusion Detection System"
            tags={[
                "Complete",
                "Team",
                "University assignment",
                "Python",
                "SciKit-Learn",
                "TensorFlow",
                "Pandas",
                "NumPy"
            ]}
            imageLink="/images/network_intrusion.jpg"
        >
            <!-- Trained and evaluated machine learning models to identify and
            classify attacks in a NetFlow dataset, comparing multi-layer
            perceptron, naive Bayes, decision trees, random forests, and
            K-nearest neighbour. -->
            As the capstone project for Computer Networks II, this interesting team
            project involved training and evaluating machine learning models to identify
            and classify attacks in a NetFlow dataset. We compared multi-layer perceptron,
            naive Bayes, decision trees, random forests, and K-nearest neighbour.
            Due to the high-dimensionality and slow processing times we also compared
            different levels or dimensionality reduction. Resampling methods were
            also used. These were evaluated based on F1 at the point before they
            over-fit the data. But in a situation where false positives are more
            acceptable than false negatives recall could be more important. Overall
            this was very interesting and I learnt a lot about the cross-over of
            machine learning and cyber security.
        </ProjectCard>
        <ProjectCard
            title="UQ Cryptoclub DAO"
            tags={[
                "Complete",
                "Team",
                "University assignment",
                "Solidity",
                "JavaScript",
                "Ethereum",
                "Optimism",
                "MetaMask"
            ]}
            imageLink="/images/uqcryptoclubdao.jpg"
            githubLink="https://github.com/martinbaer/uq-cryptoclub-dao"
            liveDemoLink="https://uqcryptoclubdao.martinbaer.au/"
        >
            This team project was completed in a pair in the course “Advanced
            Topics in Cyber Security”. It’s a decentralised autonomous
            organisation to facilitate collective decision-making on
            hypothetical club matters such as electing leaders, planning events,
            and managing club money. Two main components: a browser front-end
            that uses JavaScript ‘ethers’ library and MetaMask; and a Solidity
            smart contract back-end deployed on Optimism testnet.
        </ProjectCard>
        <ProjectCard
            title="Portfolio Website (this)"
            tags={[
                "Complete",
                "Solo",
                "Personal project",
                "Svelte",
                "TypeScript",
                "SCSS"
            ]}
            imageLink="/images/portfolio_website.jpg"
            githubLink="https://github.com/martinbaer/portfolio-website"
        >
            I created this website to showcase my projects and skills. I used
            the Svelte framework (with TypeScript and SCSS) built with Vite. I
            deployed it on Cloudflare Pages, with CI/CD linked with my GitHub.
        </ProjectCard>
        <ProjectCard
            title="Batch-Processed Barnes-Hut Gravity Simulation"
            tags={[
                "Complete",
                "Solo",
                "University assignment",
                "C++",
                "MPI",
                "OpenMP",
                "CUDA"
            ]}
            imageLink="/images/batch_processed_gravity_sim.jpg"
            githubLink="https://github.com/martinbaer/batch-processed-gravity-sim"
        >
            This solo project was written in C++ with the MPI library for the
            course “High Performance Computing”. I optimise and parralelise my
            chosen algorithm, the Barnes-Hut simulation, an O(n log n) solution
            for an n-body gravity simulation. All versions were benchmarked and
            profiled.
        </ProjectCard>
        <ProjectCard
            title="React and Svelte UI Suite"
            tags={[
                "Work-in-progress",
                "Solo",
                "Personal project",
                "React",
                "Svelte",
                "TypeScript",
                "SCSS"
            ]}
            githubLink="https://github.com/martinbaer/superellipse-ui-set"
            liveDemoLink="/superellipse-ui-set"
        >
            This is a work-in-progress solo project. Set of UI containers and
            interactive components to be used for my future projects. The
            components’ colours are flexible but the suite has a fixed motif of
            superellipses for rounding the corners and drop-shadows to contrast
            the layers.
        </ProjectCard>
        <ProjectCard
            title="P2P Web Game"
            tags={[
                "Work-in-progress",
                "Team",
                "Personal project",
                "Rust",
                "JavaScript",
                "WebAssembly"
            ]}
            githubLink="https://github.com/martinbaer/wasm-web-game"
        >
            This is a work-in-progress team project to explore the ‘wasm-peers’
            Rust library in the context of a P2P web game written in Rust and
            JavaScript and compiled to WebAssembly.
        </ProjectCard>
        <ProjectCard
            title="Tutor-finding Web App"
            tags={[
                "Work-in-progress",
                "Solo",
                "Personal project",
                "React",
                "TypeScript",
                "SCSS"
            ]}
            githubLink="https://github.com/martinbaer/tutorlink_v1"
        >
            This is a work-in-progress solo project web app to solve the
            real-life problems with the existing tutor-finding web solutions
            faced by both myself, as a tutor, and many parents I have talked to.
        </ProjectCard>
    </Section>
</article>

<style lang="scss">
</style>
