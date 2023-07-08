<script lang="ts">
    import colors from "../../constants/colors";
    import Section from "../containers/Section.svelte";
</script>

<Section color={colors.accentBackground}>
    <div class="header-container">
        <h1 style="color:{colors.background}">Martin Baer</h1>
        <!-- navigation -->
        <nav style="color:{colors.background}">
            <ul>
                <li><a href="/about">About</a></li>
                <li><a href="/projects">Projects</a></li>
                <li><a href="/contact">Contact</a></li>
            </ul>
        </nav>
    </div>
</Section>
<Section color={colors.dullAccentBackground}>
    <div style="height:25px" />
</Section>

<style lang="scss">
    .header-container {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        // centre
        align-items: center;
        width: 100%;
    }
    // centre the h1
    h1 {
        font-size: 40px;
        // reduce top and bottom margin to 20px and 10px
        margin: 25px 0;
    }
    // centre the nav
    nav {
        display: flex;
        justify-content: center;
        // margin-bottom: 15px; // row
    }
    // remove the list style
    ul {
        list-style: none;
        // row
        display: flex;
        flex-direction: row;
        // gap
        gap: 1rem;
        // remove right margin
        padding: 0;
    }
    // remove the link style
    a {
        text-decoration: none;
        color: inherit;
    }
    // add some space between the links
    // li {
    //     margin: 0 10px;
    // }
</style>
