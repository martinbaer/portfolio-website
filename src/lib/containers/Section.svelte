<script lang="ts">
    import colors from "../../constants/colors";
    export let color: string = colors.background;
    export let isMain: boolean = false;
</script>

<div
    class="section-container"
    style="background-color:{color};flex:{isMain ? 1 : 0}"
>
    <section>
        <slot />
    </section>
</div>

<style lang="scss">
    .section-container {
        display: flex;
        justify-content: center;
        // align-items: center;
        height: 100%;
    }
    section {
        width: 90%;
        max-width: 900px;
    }
</style>
