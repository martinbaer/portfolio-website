<script lang="ts">
    import colors from "../../constants/colors";
    import Section from "../containers/Section.svelte";
    import url from "../../stores/url";
    console.log($url);

    const handleLinkClick = (e) => {
        e.preventDefault();
        const href = e.currentTarget.getAttribute("href");
        history.pushState(null, "", href);
    };
</script>

<Section color={colors.accentBackground}>
    <div class="header-container">
        <h1 style="color:{colors.background}">Martin Baer</h1>
        <!-- navigation -->
        <nav style="color:{colors.background}">
            <ul>
                <li>
                    <a
                        style="text-decoration: {$url.pathname == '/'
                            ? 'underline'
                            : 'auto'};"
                        href="/"
                        on:click={handleLinkClick}
                    >
                        About</a
                    >
                </li>
                <li>
                    <a
                        style="text-decoration: {$url.pathname == '/projects'
                            ? 'underline'
                            : 'auto'};"
                        href="/projects"
                        on:click={handleLinkClick}>Projects</a
                    >
                </li>
                <li>
                    <a
                        style="text-decoration: {$url.pathname == '/contact'
                            ? 'underline'
                            : 'auto'};"
                        on:click={handleLinkClick}
                        href="/contact">Contact</a
                    >
                </li>
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
    // a:hover {
    //     // underline
    //     text-decoration: underline;
    // }
    // add some space between the links
    // li {
    //     margin: 0 10px;
    // }
</style>
