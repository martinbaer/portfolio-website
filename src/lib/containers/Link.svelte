<script lang="ts">
    import url from "../../stores/url";

    export let to: string = "";
    const handleLinkClick = (e) => {
        e.preventDefault();
        if (to == $url.pathname) return;
        // scroll to top
        window.scrollTo(0, 0);
        history.pushState(null, "", to);
    };
</script>

<p class="less-gap">
    {#if to}
        <a href={to} on:click={handleLinkClick}><slot /> →</a>
    {:else}
        <span><slot /></span>
    {/if}
</p>

<style lang="scss">
    @use "../../constants/colors.scss" as colors;
    .less-gap {
        margin-bottom: 3px;
        margin-top: 5px;
    }
    a {
        color: colors.$dull-accent-background;
        text-decoration: none;
        text-decoration: underline;
    }
    span {
        color: colors.$dull-accent-background;
        font-family: "Custom Gill Sans";
    }
</style>
