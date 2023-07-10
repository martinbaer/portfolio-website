<script lang="ts">
    import colors from "../../constants/colors";
    export let color: string = colors.background;
    export let isMain: boolean = false;

    const pageNumber = (page: String): number => {
        let pageNumber = 0;
        switch (page) {
            case "/":
                pageNumber = 0;
                break;
            case "/projects":
                pageNumber = 1;
                break;
            case "/contact":
                pageNumber = 2;
                break;
            default:
                pageNumber = 0;
                break;
        }
        return pageNumber;
    };
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
