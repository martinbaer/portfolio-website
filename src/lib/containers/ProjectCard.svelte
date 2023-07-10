<script lang="ts">
    export let title: string;
    export let tags: string[];
    export let imageLink: string;

    export let moreInfoLink: string = "";
    export let liveDemoLink: string = "";
    export let githubLink: string = "";

    import Link from "./Link.svelte";
    import TagCard from "./TagCard.svelte";

    // create list of tag cards
    let tagCards: { component: typeof TagCard; props: Record<string, any> }[] =
        tags.map((tag) => ({
            component: TagCard,
            props: {
                title: tag
            }
        }));
    // imageLink[1:]
    let shortImageLink = imageLink;
</script>

<h2>{title}</h2>

<div class="project-card">
    <div class="text-section">
        {#each tagCards as { component: TagCard, props }}
            <TagCard {...props} />
        {/each}
        <p><slot /></p>

        {#if liveDemoLink}
            <Link to={liveDemoLink}>Open live demo</Link>
        {/if}

        {#if githubLink}
            <Link to={githubLink}>GitHub repository</Link>
        {/if}

        {#if moreInfoLink}
            <Link to={moreInfoLink}>More information about this project</Link>
        {/if}
    </div>

    <img src={imageLink} alt={imageLink.substring(1).split(".")[1]} />
</div>

<style lang="scss">
    .project-card {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: flex-start;
        margin-bottom: 70px;
        // on small screen flex column
        @media (max-width: 600px) {
            flex-direction: column;
        }
    }
    .text-section {
        width: 66%;
        margin-bottom: 20px;
        @media (max-width: 600px) {
            width: 100%;
        }
    }
    img {
        width: 30%;
        border-radius: 5px;
        @media (max-width: 600px) {
            width: 100%;
        }
    }
    h2 {
        margin-bottom: 6px;
    }
    p {
        margin-top: 5px;
    }
</style>
