<!-- rounded edge text container -->

<script lang="ts">
    export let title: string = "";
    console.log(title);

    import completeSvg from "../../assets/check-solid.svg";
    import soloSvg from "../../assets/user-solid.svg";
    import teamSvg from "../../assets/users-solid.svg";
    import workInProgress from "../../assets/wrench-solid.svg";
    import universityAssignment from "../../assets/building-columns-solid.svg";
    import personalProject from "../../assets/star-solid.svg";

    import rust from "../../assets/rust.svg";
    import js from "../../assets/js.svg";
    import webAssembly from "../../assets/WebAssembly_Logo.svg";

	import other from "../../assets/microchip-solid.svg";

    let icon: string = "";
    switch (title) {
        case "Complete":
            icon = completeSvg;
            break;
        case "Work-in-progress":
            icon = workInProgress;
            break;
        case "Solo":
            icon = soloSvg;
            break;
        case "Team":
            icon = teamSvg;
            break;
        case "University assignment":
            icon = universityAssignment;
            break;
        case "Personal project":
            icon = personalProject;
            break;
        case "Rust":
            icon = rust;
            break;
        case "JavaScript":
            icon = js;
            break;
        case "WebAssembly":
            icon = webAssembly;
            break;
        default:
			icon = other;
            break;
    }
</script>

<div class="tag-card">
    <img src={icon} alt={title} />
    <span>{title}</span>
</div>

<style lang="scss">
    @use "../../constants/colors.scss" as colors;

    img {
        width: 15px;
        height: 15px;
        // margin-right: 5px;
        position: relative;
        // top: 3px;
        // dont push anything else
        vertical-align: middle;
    }
    .tag-card {
        background-color: colors.$light-primary;
        border-radius: 5px;
        padding: 5px 10px;
        margin: 0 10px 10px 0;
        display: inline-block;
        // centre text
        text-align: center;
    }
    span {
        margin: auto;
        position: relative;
        top: 2px;
    }
</style>
