<script lang="ts">
    import colors from "../../constants/colors";
    import Section from "../containers/Section.svelte";
    import url from "../../stores/url";

    const handleLinkClick = (e) => {
        e.preventDefault();
        const href = e.currentTarget.getAttribute("href");
        if (href == $url.pathname) return;
        // scroll to top
        window.scrollTo(0, 0);
        history.pushState(null, "", href);
    };
</script>

<header class="drop-shadow">
    <Section color={colors.accentBackground}>
        <div class="header-container">
            <a id="my-name" on:click={handleLinkClick} href="/"
                ><h1 style="color:{colors.background}">Martin Baer</h1></a
            >
            <!-- navigation -->
            <nav style="color:{colors.background}">
                <ul>
                    <li>
                        <a
                            class:underline={$url.pathname == "/"}
                            href="/"
                            on:click={handleLinkClick}
                        >
                            About</a
                        >
                    </li>
                    <li>
                        <a
                            class:underline={$url.pathname == "/projects"}
                            href="/projects"
                            on:click={handleLinkClick}>Projects</a
                        >
                    </li>
                    <li>
                        <a
                            class:underline={$url.pathname == "/contact"}
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
</header>

<style lang="scss">
    $shadow: drop-shadow(0px 0px 10px rgba(50, 50, 50, 0.9));

    #my-name {
        font-family: "Reenie Beanie";
        h1 {
            font-size: 60px;
        }
    }
    .underline {
        text-decoration: underline;
    }
    :global(.drop-shadow) {
        filter: $shadow;
        -webkit-filter: $shadow;
        -moz-filter: $shadow;
    }

    .header-container {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        // centre
        align-items: center;
        width: 100%;
        @media (max-width: 600px) {
            flex-direction: column;
            h1 {
                // no margin below
                margin-bottom: 0;
            }
        }
    }
    // centre the h1
    h1 {
        font-size: 40px;
        // reduce top and bottom margin to 20px and 10px
        margin: 25px 0;
        margin-right: 15px;
    }
    // centre the nav
    // remove the list style
    ul {
        list-style: none;
        // row
        display: flex;
        flex-flow: row wrap;
        // centre
        align-items: center;
        justify-content: center;
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
</style>
