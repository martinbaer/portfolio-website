<script lang="ts">
    import colors from "../../constants/colors";
    export let color: string = colors.background;
</script>

<div class="section-container" style="background-color:{color}">
    <div class="section">
        <slot />
    </div>
</div>

<style lang="scss">
    .section-container {
        display: flex;
        justify-content: center;
        // align-items: center;
        height: 100%;
    }
    .section {
        width: 90%;
        max-width: 900px;
    }
</style>
