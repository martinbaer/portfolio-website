<script lang="ts">
    export let to: string;
    const handleLinkClick = (e) => {
        e.preventDefault();
        history.pushState(null, "", to);
    };
</script>

<a href={to} on:click={handleLinkClick}><slot /> →</a>

<style lang="scss">
    @use "../../constants/colors.scss" as colors;
    a {
        color: colors.$accent-background;
        text-decoration: none;
        text-decoration: underline;
    }
</style>
