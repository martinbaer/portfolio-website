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

    let emailCopied = false;

    const copyEmail = () => {
        navigator.clipboard.writeText("contact@martinbaer.au");
        emailCopied = true;
    };
</script>

<article>
    <Section>
        <h1>Contact</h1>
        <div class="contact-info center">
            <Link>
                <img src={envelopeSvg} alt="Email" />
                martin@mbaer.au</Link
            >
            <button on:click={copyEmail}>Copy email address to clipboard</button
            >
            {#if emailCopied}
                <div class="success-message">Copied!</div>
            {/if}
            <Link to="mailto:martin@mbaer.au">Write me an email</Link>
            <div style="height: 10px" />
            <Link>
                <img src={phoneSvg} alt="Phone" />
                Enquire or see resume
            </Link>
            <div style="height: 10px" />
            <Link to="https://github.com/martinbaer">
                <img src={githubSvg} alt="GitHub" />
                martinbaer - GitHub
            </Link>
            <div style="height: 10px" />
            <Link to="https://www.linkedin.com/in/martin-baer-software/">
                <img src={linkedinSvg} alt="LinkedIn" />
                Martin Baer - LinkedIn
            </Link>
        </div>
    </Section>
</article>

<style lang="scss">
    @use "../../constants/colors" as colors;
    .success-message {
        color: green;
    }
    .contact-info {
        margin-top: 30px;
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
    button {
        // remove all style
        all: unset;
        color: colors.$dull-accent;
        text-decoration: underline;
        // mouse
        cursor: pointer;
        margin-top: 3px;
    }
</style>
