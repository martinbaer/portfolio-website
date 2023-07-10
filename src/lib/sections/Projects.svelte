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
        <!-- REMOVE LATER -->
        <div class="center">
            This section is under construction. Please check back later.
        </div>
        <!--  -->
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
            imageLink="/placeholder.jpg"
            moreInfoLink="/real-time-gravity-simulation"
            liveDemoLink="/real-time-gravity-simulation-demo"
            githubLink="https://github.com/martinbaer/real-time-gravity-sim"
        >
            This solo personal project is an interactive, real-time variant of a
            previously batch-processed model. It was written in Rust and
            JavaScript to try out compiling to WebAssembly with wasm-pack. It
            allows the computationally-intensive Barnes-Hut algorithm to run
            natively in a web browser with up to 10 000 bodies before
            performance decline.
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
            imageLink="/placeholder.jpg"
            githubLink="https://github.com/martinbaer/batch-processed-gravity-sim"
        >
            This solo project was written in C++ with the MPI library for the
            course “High Performance Computing”. I optimise and parralelise my
            chosen algorithm, the Barnes-Hut simulation, an O(n log n) solution
            for an n-body gravity simulation. All versions were benchmarked and
            profiled.
        </ProjectCard>
    </Section>
</article>

<style lang="scss">
</style>
