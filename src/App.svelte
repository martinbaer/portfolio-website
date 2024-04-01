<script lang="ts">
    import About from "./lib/sections/About.svelte";
    import Footer from "./lib/sections/Footer.svelte";
    import Header from "./lib/sections/Header.svelte";
    import Projects from "./lib/sections/Projects.svelte";
    import Contact from "./lib/sections/Contact.svelte";
    import NotFound from "./lib/sections/NotFound.svelte";

    import url from "./stores/url";

    if ($url.pathname == "/") {
        history.pushState(null, "", "/projects");
    }
</script>

<main>
    <Header />
    {#if $url.pathname == "/about"}
        <About />
    {:else if $url.pathname == "/projects"}
        <Projects />
    {:else if $url.pathname == "/contact"}
        <Contact />
    {:else}
        <NotFound />
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
