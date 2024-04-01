<script lang="ts">
    import colors from "../../constants/colors";
    import Section from "../containers/Section.svelte";
    import Link from "../containers/Link.svelte";

    import githubSvg from "../../assets/github-white.svg";
    import linkedinSvg from "../../assets/linkedin-in-white.svg";

    import url from "../../stores/url";

    const handleLinkClick = (e) => {
        e.preventDefault();
        const href = e.currentTarget.getAttribute("href");
        let external: boolean = href.startsWith("http");
        if (external) {
            // open in new tab
            window.open(href, "_blank");
            return;
        }
        if (href == $url.pathname) return;
        // scroll to top
        window.scrollTo(0, 0);
        history.pushState(null, "", href);
    };
</script>

<Section><div style="height:100px" /></Section>
<div class="drop-shadow">
    <!-- <Section color={colors.dullAccentBackground}>
        <div style="height:25px" />
    </Section> -->
    <Section color={colors.accentBackground}>
        <footer>
            <span class="left footer-row">
                <a href="/" on:click={handleLinkClick}> About</a>
                <a href="/projects" on:click={handleLinkClick}>Projects</a>
                <a href="/contact" on:click={handleLinkClick}>Contact</a>
                <span id="copyright">© 2024 Martin Baer</span>
            </span>

            <span class="right footer-row">
                <Link to="https://github.com/martinbaer" noArrow
                    ><img src={githubSvg} alt="GitHub" />
                </Link>
                <Link
                    to="https://www.linkedin.com/in/martin-baer-a8b133282/"
                    noArrow
                >
                    <img src={linkedinSvg} alt="LinkedIn" />
                </Link>
                <span>martin@mbaer.au</span>
                <Link
                    to="https://github.com/martinbaer/portfolio-website"
                    color={colors.background}
                >
                    <span class="white">View source code for this website</span>
                </Link>
            </span>
        </footer>
    </Section>
</div>

<style lang="scss">
    @use "src/constants/colors.scss" as colors;

    #copyright {
        margin-bottom: 3px;
        margin-top: 7px;
    }

    a {
        text-decoration: none;
        color: colors.$background;
        font-family: "Custom Gill Sans";
    }
    .footer-row {
        display: grid;
        grid-template-columns: 1fr;
        grid-template-rows: 20px 20px 20px 40px;
        grid-row-gap: 10px;
    }
    .right {
        margin-left: auto;
        text-align: right;
    }
    .left {
        margin-right: auto;
        text-align: left;
    }
    img {
        width: 15px;
        height: 15px;
        margin: 0;
        padding: 0;
    }
    footer {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: flex-end;
        color: colors.$background;
        padding: 40px 0 30px 0;
    }
</style>
