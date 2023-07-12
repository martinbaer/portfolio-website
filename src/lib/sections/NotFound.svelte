<script lang="ts">
    import Section from "../containers/Section.svelte";
    import { onMount } from "svelte";
    onMount(() => {
        document.title = "Martin Baer | Page Not Found";
    });
</script>

<article>
    <Section>
        <h1>404 Page Not Found</h1>

        <p class="center">
            The page you are looking for does not exist yet. If you followed a
            link here it is currently under construction.
        </p>
        <button class="center" on:click={() => history.back()}>← Go back</button
        >
    </Section>
</article>

<style lang="scss">
    @use "../../constants/colors" as colors;
    button {
        // remove all style
        all: unset;
        color: colors.$accent-background;
        text-decoration: underline;
        // mouse
        cursor: pointer;
        // center
        margin: 10px auto;
        display: block;
    }
</style>
