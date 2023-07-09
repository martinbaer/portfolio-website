<script lang="ts">
    import colors from "../../constants/colors";
    import Section from "../containers/Section.svelte";
</script>

<Section><div style="height:100px" /></Section>
<div style="filter:drop-shadow(0px 0px 10px rgba(0,0,0,0.9))">
    <Section color={colors.dullAccentBackground}>
        <div style="height:25px" />
    </Section>
    <Section color={colors.accentBackground}>
        <footer style="color:{colors.background}">
            <p>© 2023 Martin Baer</p>
            <p>Symbols here</p>
        </footer>
    </Section>
</div>

<style lang="scss">
    footer {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        // bottom
        align-items: center;
        height: 80px;
    }
    // p {
    //     font-size: 20px;
    //     text-align: center;
    //     margin: 0;
    // }
</style>
