<script lang="ts">
    import colors from "../../constants/colors";
    import Section from "../containers/Section.svelte";
</script>

<Section color={colors.dullAccentBackground}>
    <div style="height:25px" />
</Section>
<Section color={colors.accentBackground}>
    <footer style="color:{colors.background}">
        <p>© 2023 Martin Baer</p>
    </footer>
</Section>

<style lang="scss">
    // height to go to bottom of screen
    // footer {
    //     display: flex;
    //     justify-content: center;
    //     align-items: center;
    //     height: 100%;
    // }
    // p {
    //     font-size: 20px;
    //     text-align: center;
    //     margin: 0;
    // }
</style>
