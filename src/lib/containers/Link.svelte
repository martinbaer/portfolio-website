<script lang="ts">
    import url from "../../stores/url";
    import colors from "../../constants/colors";

    export let to: string = "";
    export let noArrow: boolean = false;
    export let color: string = colors.dullAccentBackground;
    // check if to starts with http
    let external: boolean = to.startsWith("http");
    let email: boolean = to.startsWith("mailto");

    const handleLinkClick = (e) => {
        if (email) {
            return;
        }
        e.preventDefault();
        if (external) {
            // open in new tab
            window.open(to, "_blank");
            return;
        }

        if (to == $url.pathname) return;
        // scroll to top
        window.scrollTo(0, 0);
        history.pushState(null, "", to);
    };
</script>

<p class="less-gap">
    {#if to}
        <a href={to} on:click={handleLinkClick} style="color:{color}"
            ><slot />
            {#if !noArrow}
                →
            {/if}</a
        >
    {:else}
        <span style="color:black"><slot /></span>
    {/if}
</p>

<style lang="scss">
    @use "../../constants/colors.scss" as colors;
    .less-gap {
        margin-bottom: 3px;
        margin-top: 5px;
    }
    a {
        // color: colors.$dull-accent-background;
        text-decoration: none;
        text-decoration: underline;
    }
    span {
        // color: colors.$dull-accent-background;
        font-family: "Custom Gill Sans";
    }
</style>
