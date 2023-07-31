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
                ><h1>Martin Baer</h1></a
            >
            <!-- navigation -->
            <nav>
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
    <!-- <Section color={colors.dullAccentBackground}>
        <div style="height:25px" />
    </Section> -->
</header>

<style lang="scss">
    $shadow: drop-shadow(0px 0px 6px rgba(50, 50, 50, 0.9));

    @use "../../constants/colors.scss" as colors;

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
    h1 {
        font-size: 40px;
        margin: 25px 0;
        margin-right: 15px;
        color: colors.$accent;
    }
    ul {
        list-style: none;
        display: flex;
        flex-flow: row wrap;
        align-items: center;
        justify-content: center;
        gap: 1rem;
        padding: 0;
    }
    a {
        text-decoration: none;
        color: black;
    }
</style>
