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
        if (href == $url.pathname) return;
        // scroll to top
        window.scrollTo(0, 0);
        history.pushState(null, "", href);
    };
</script>

<Section><div style="height:100px" /></Section>
<div class="dropshadow">
    <Section color={colors.dullAccentBackground}>
        <div style="height:25px" />
    </Section>
    <Section color={colors.accentBackground}>
        <footer>
            <span class="left footer-row">
                <a href="/" on:click={handleLinkClick}> About</a>
                <a href="/projects" on:click={handleLinkClick}>Projects</a>
                <a href="/contact" on:click={handleLinkClick}>Contact</a>
                <span>© 2023 Martin Baer</span>
            </span>

            <span class="right footer-row">
                <Link to="https://github.com/martinbaer" noArrow
                    ><img
                        class="changeToWhite"
                        src={githubSvg}
                        alt="GitHub"
                    /></Link
                >
                <Link
                    to="https://www.linkedin.com/in/martin-baer-a8b133282/"
                    noArrow
                >
                    <img
                        class="changeToWhite"
                        src={linkedinSvg}
                        alt="LinkedIn"
                    /></Link
                >
                <span>contact@martinbaer.au</span>
                <span>Information accurate as of 10 Jul 2023</span>
            </span>
        </footer>
    </Section>
</div>

<style lang="scss">
    @use "src/constants/colors.scss" as colors;

    a {
        text-decoration: none;
        color: colors.$background;
        font-family: "Custom Gill Sans";
    }
    .footer-row {
        display: grid;
        // one column, equal spaced rows
        grid-template-columns: 1fr;
        grid-template-rows: repeat(2, 20px) 40px;
        grid-column-gap: 20px;
        grid-row-gap: 10px;
        // align-items: right;
        // justify-items: right;
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
        // margin-right: 6px;
        // vertical-align: middle;
    }
    footer {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        // bottom
        align-items: flex-end;
        color: colors.$background;
        padding: 30px 0;
    }
</style>
