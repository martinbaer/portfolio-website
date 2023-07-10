<script lang="ts">
    import About from "./lib/sections/About.svelte";
    import Footer from "./lib/sections/Footer.svelte";
    import Header from "./lib/sections/Header.svelte";
    import Projects from "./lib/sections/Projects.svelte";
    import Contact from "./lib/sections/Contact.svelte";

    // if url is not "/" or "/projects" or "/contact", redirect to "/"
    import { onMount } from "svelte";
    onMount(() => {
        if (
            !["/", "/projects", "/contact"].includes(window.location.pathname)
        ) {
            history.pushState(null, "", "/");
        }
    });

    import url from "./stores/url";
</script>

<!-- TODO add all browser extra lines for dropshadows -->
<!-- TODO make dot point points dark blue -->

<main>
    <Header />
    {#if $url.pathname == "/"}
        <About />
    {:else if $url.pathname == "/projects"}
        <Projects />
    {:else if $url.pathname == "/contact"}
        <Contact />
    {/if}
    <Footer />
</main>

<style lang="scss">
    @use "./constants/colors.scss" as colors;

    :global(article) {
        flex: 1;
        background-color: colors.$background;
    }
</style>
