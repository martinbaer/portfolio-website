<script lang="ts">
    import Link from "../containers/Link.svelte";
    import Section from "../containers/Section.svelte";
    import { onMount } from "svelte";
    onMount(() => {
        document.title = "Martin Baer | Contact";
    });

    import githubSvg from "../../assets/github.svg";
    import linkedinSvg from "../../assets/linkedin-in.svg";
    import envelopeSvg from "../../assets/envelope-solid.svg";
    import phoneSvg from "../../assets/phone-solid.svg";
</script>

<article>
    <Section isMain>
        <h1>Contact</h1>
        <div class="center">
            <Link>
                <img src={envelopeSvg} alt="Email" />
                contact@martinbaer.au</Link
            >
            <Link>
                <img src={phoneSvg} alt="Phone" />
                Enquire or see resume</Link
            >
            <Link to="https://github.com/martinbaer"
                ><img src={githubSvg} alt="GitHub" />GitHub</Link
            >
            <Link to="https://www.linkedin.com/in/martin-baer-a8b133282/">
                <img src={linkedinSvg} alt="LinkedIn" />

                LinkedIn</Link
            >
        </div>
    </Section>
</article>

<style lang="scss">
    .center {
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    img {
        width: 15px;
        height: 15px;
        margin-right: 6px;
        // position: relative;
        // top: 3px;
        // dont push anything else
        vertical-align: middle;
        // fill color
    }
</style>
