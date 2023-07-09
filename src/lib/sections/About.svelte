<script lang="ts">
    import colors from "../../constants/colors";
    import Section from "../containers/Section.svelte";

    const handleLinkClick = (e) => {
        e.preventDefault();
        const href = e.currentTarget.getAttribute("href");
        history.pushState(null, "", href);
    };
</script>

<Section isMain>
    <h1 class="right">Who am I?</h1>
    <div class="subsection" style="flex-direction: row-reverse;">
        <div class="right content">
            <p>
                I’m a motivated 4th year student at The University of
                Queensland. I study a Bachelor of Engineering (Hons.) and Master
                of Engineering in Software and have a diverse range of passions
                in the field. I'm dedicated to continuous learning, receptive to
                constructive feedback, and I love making things.
            </p>
            <p>
                I created this portfolio website to connect with organisations
                that can offer a constructive environment and will support my
                growth.
            </p>
            <p>
                <a href="/projects" on:click={handleLinkClick}
                    >Check out my projects →</a
                >
            </p>
            <p>
                <a href="/contact" on:click={handleLinkClick}>Contact me →</a>
            </p>
        </div>
        <div class="circle-container">
            <img src="/placeholder.jpg" alt="placeholder" />
        </div>
    </div>
    <h1>What am I interested in?</h1>
    <div class="subsection">
        <div class="content">
            <p>
                So far at uni I have a solid introduction to several fields
                within software engineering. My areas of interest include:
            </p>
            <ul>
                <li>Software engineering processes and management</li>
                <li>Software architecture</li>
                <li>Web information systems</li>
                <li>Design and human computer interaction</li>
                <li>Blockchain and decentralised systems</li>
                <li>Cyber security and cryptography</li>
                <li>Machine learning</li>
                <li>Computer networks</li>
                <li>High-performance computing</li>
            </ul>
            <p>
                I try to bring the same fun-loving nature into both my
                professional pursuits and personal hobbies. Despite not being
                the most seasoned hiker, I'm always up for a challenge. Last
                year I did the 4-day Sunshine Coast Hinterland Great Walk and
                this year I plan on doing the 4-day Conondale Range Great Walk.
            </p>
        </div>
        <div class="circle-container">
            <img src="/placeholder.jpg" alt="placeholder" />
        </div>
    </div>
    <div class="right shortened">
        <h1>What skills do I have so far?</h1>
        <p>
            I try to have a language-agnostic approach to problem-solving – I'm
            comfortable learning new technologies, languages, and frameworks.
            Listed below are the technologies with which I have gained
            proficiency while working on my personal projects and university
            assignments.
        </p>
    </div>
    <h2>Languages</h2>
    <div class="skill-type">
        <div class="skill-group">
            <h3>General purpose</h3>
            <ul>
                <li>Java</li>
                <li>Python</li>
                <li>Javascript</li>
                <li>Typescript</li>
                <li>Bash</li>
            </ul>
        </div>
        <div class="skill-group">
            <h3>Lower level</h3>
            <ul>
                <li>C</li>
                <li>C++</li>
                <li>Rust</li>
            </ul>
        </div>

        <div class="skill-group">
            <h3>Markup and styling</h3>
            <ul>
                <li>HTML</li>
                <li>CSS</li>
                <li>Sass</li>
                <li>LaTeX</li>
            </ul>
        </div>

        <div class="skill-group">
            <h3>Other</h3>
            <ul>
                <li>SQL</li>
                <li>Solidity</li>
                <li>CUDA</li>
                <li>MATLAB</li>
                <li>R</li>
            </ul>
        </div>
    </div>
    <h2>Frameworks and notable libraries</h2>
    <div class="skill-type">
        <div class="skill-group">
            <h3>Parralelisation</h3>
            <ul>
                <li>Intel Intrinsics AVX</li>
                <li>MPI</li>
                <li>OpenMP</li>
                <li>CUDA</li>
            </ul>
        </div>
        <div class="skill-group">
            <h3>Data science</h3>
            <ul>
                <li>Numpy</li>
                <li>Pandas</li>
                <li>TensorFlow</li>
                <li>Scikit-learn</li>
                <li>matplotlib</li>
            </ul>
        </div>
        <div class="skill-group">
            <h3>Web front-end</h3>
            <ul>
                <li>React</li>
                <li>Svelte</li>
            </ul>
        </div>
        <div class="skill-group">
            <h3>Web back-end</h3>
            <ul>
                <li>Node.js</li>
                <li>Express.js</li>
                <li>Actix</li>
            </ul>
        </div>
        <div class="skill-group">
            <h3>Web full-stack</h3>
            <ul>
                <li>CodeIgniter</li>
                <li>Sveltekit</li>
            </ul>
        </div>
    </div>
    <h2>Tools</h2>
    <div class="skill-type">
        <div class="skill-group">
            <h3>Version control</h3>
            <ul>
                <li>Git</li>
                <li>SVN</li>
            </ul>
        </div>
        <div class="skill-group">
            <h3>Design</h3>
            <ul>
                <li>Figma</li>
                <li>Canva</li>
                <li>Adobe Photoshop</li>
            </ul>
        </div>

        <div class="skill-group">
            <h3>Deployment</h3>
            <ul>
                <li>Apache</li>
                <li>Docker</li>
                <li>Google Cloud Run</li>
                <li>Cloudflare</li>
            </ul>
        </div>

        <div class="skill-group">
            <h3>Compiling</h3>
            <ul>
                <li>Make</li>
                <li>Gradle</li>
                <li>Cargo</li>
            </ul>
        </div>

        <div class="skill-group">
            <h3>Packaging</h3>
            <ul>
                <li>Wasm-Pack</li>
                <li>Webpack</li>
                <li>Vite</li>
                <li>Rollup</li>
            </ul>
        </div>

        <div class="skill-group">
            <h3>Databases</h3>
            <ul>
                <li>MySQL</li>
                <li>MongoDB</li>
                <li>Firebase</li>
            </ul>
        </div>

        <div class="skill-group">
            <h3>Operating systems</h3>
            <ul>
                <li>Linux</li>
                <li>MacOS</li>
                <li>Windows</li>
            </ul>
        </div>

        <div class="skill-group">
            <h3>Blockchain</h3>
            <ul>
                <li>Remix - Ethereum IDE</li>
                <li>MetaMask</li>
                <li>Optimism</li>
            </ul>
        </div>

        <div class="skill-group">
            <h3>Other</h3>
            <ul>
                <li>RStudio</li>
                <li>Wireshark</li>
            </ul>
        </div>
    </div>

    <p class="right shortened">
        Below I outline some of the coursework that I have done. I have a solid
        introduction into a wide range of topics, and I am always looking to
        learn more.
    </p>

    <h2>Coursework</h2>
    <div class="skill-type-large">
        <div class="skill-group">
            <h3>Engineering</h3>
            <ul>
                <li>Risk analysis</li>
                <li>Financial analysis</li>
                <li>Ethical conduct</li>
                <li>Business modelling</li>
                <li>Pitching and presentation skills</li>
                <li>Requirements engineering</li>
                <li>Project management</li>
                <li>Report writing</li>
                <li>UML and other diagrams</li>
            </ul>
        </div>
        <div class="skill-group">
            <h3>Software processes</h3>
            <ul>
                <li>Development processes</li>
                <li>Use case modelling</li>
                <li>Testing</li>
                <li>Code validation</li>
                <li>Risk management</li>
                <li>Estimation techniques</li>
                <li>CI/CD</li>
                <li>TDD, BDD</li>
                <li>Agile, Waterfall, Scrum, Kanban, etc.</li>
            </ul>
        </div>
        <div class="skill-group">
            <h3>Data Science and Machine Learning</h3>
            <ul>
                <li>Evaluation techniques</li>
                <li>Performance improvement techniques</li>
                <li>Clustering</li>
                <li>Dimensionality reduction</li>
                <li>Variety of generative models</li>
                <li>Variety of supervised learning models:</li>
                <li>Nearest neighbour methods, decision trees</li>
                <li>
                    Linear, logistic, polynomial, and bayesian linear regression
                </li>
                <li>Multi-layer perceptron, convolutional neural networks</li>
                <li>Support vector machines</li>
            </ul>
        </div>
        <div class="skill-group">
            <h3>Data structures and algorithms</h3>
            <ul>
                <li>Data structures & types</li>
                <li>
                    Mapping of abstract information structures into
                    representations on primary & secondary storage.
                </li>
                <li>Analysis of time & space complexity of algorithms</li>
                <li>Sequences, lists, stacks, queues</li>
                <li>Sets, multisets, tables</li>
                <li>Hash tables, trees, priority queue</li>
                <li>Sorting, string and graph search algorithms</li>
            </ul>
        </div>
        <div class="skill-group">
            <h3>Design</h3>
            <ul>
                <li>Human-computer interaction</li>
                <li>UX design</li>
                <li>UI design and paradigms</li>
                <li>Web and mobile design principles</li>
                <li>Use-centred design</li>
                <li>Interaction analysis</li>
                <li>Evaluation techniques</li>
            </ul>
        </div>
        <div class="skill-group">
            <h3>Web Information Systems</h3>
            <ul>
                <li>Architectures</li>
                <li>AJAX</li>
                <li>Asynchronous programming</li>
                <li>Relational (SQL) databases</li>
                <li>Non-Relational (NoSQL) databases</li>
                <li>Web security</li>
                <li>Web services</li>
                <li>Web search</li>
                <li>Web frameworks</li>
                <li>SEO</li>
            </ul>
        </div>
        <div class="skill-group">
            <h3>Computer Networks</h3>
            <ul>
                <li>Network architectures</li>
                <li>Wireshark analysis</li>
                <li>Simplified implementation of protocols:</li>
                <li>HTTP, DNS, and SMTP,</li>
                <li>UDP, TCP, including congestion control,</li>
                <li>IPv4, IPv6, routing algorithms,</li>
                <li>Ethernet, addressing, ARP access control</li>
            </ul>
        </div>
        <div class="skill-group">
            <h3>Cyber Security</h3>
            <ul>
                <li>Symmetric and asymetric cryptography</li>
                <li>Modern cipher suites</li>
                <li>Network security</li>
                <li>Security protocols: TLS, IPSec, etc.</li>
                <li>Security frameworks</li>
                <li>Vulnerability and threat modelling</li>
                <li>Security risk management</li>
                <li>Practice simulating attacks</li>
                <li>Explaining attacks and CIA triad</li>
            </ul>
        </div>
        <div class="skill-group">
            <h3>High-performance Computing</h3>
            <ul>
                <li>Parallel computing theory</li>
                <li>HPC use in solving scientific problems</li>
                <li>Performance evaluation techniques</li>
                <li>Benchmarking</li>
                <li>Processor and memory profiling</li>
                <li>
                    Parallelisation techniques: SIMD, multithreading and
                    multiprocessing, grid and cluster computing,
                </li>
            </ul>
        </div>
        <div class="skill-group">
            <h3>Blockchain and Decentralised Systems</h3>
            <ul>
                <li>Bitcoin</li>
                <li>Ethereum</li>
                <li>Smart contracts</li>
                <li>Decentralised autonomous systems</li>
                <li>
                    I did a seminar on post-quantum blockchain (proposed)
                    solutions
                </li>
            </ul>
        </div>
    </div>
	<p class="right shortened">
    	<a href="/projects" on:click={handleLinkClick}>
		Check out my projects where I use these skills →</a>
    </p>
	<p class="right shortened">
		<a href="/contact" on:click={handleLinkClick}>Contact me →</a>
	</p>
    <div style="height:100px" />
</Section>

<style lang="scss">
    @use "../../constants/colors.scss" as colors;

    .shortened {
        width: calc(100% - 210px);
    }

    .skill-type {
        // grid with 5 equal columns, and any size rows
        display: grid;
        grid-template-columns: repeat(5, 1fr);
        grid-auto-rows: minmax(100px, auto);
        grid-gap: 10px;
        grid-row-gap: 15px;
        // for screens smaller than 600px
        @media (max-width: 600px) {
            // 2 columns
            grid-template-columns: repeat(2, 1fr);
        }
    }

    .skill-type-large {
        // grid with 3 equal columns, and any size rows
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        grid-auto-rows: minmax(100px, auto);
        grid-gap: 10px;
        // large gap on rows
        grid-row-gap: 30px;
        // for screens smaller than 600px
        @media (max-width: 600px) {
            // 2 columns
            grid-template-columns: repeat(2, 1fr);
        }
    }

    .skill-group {
        ul {
            // no bullets
            list-style-type: none;
            // no margin
            margin: 0;
            // no padding
            padding: 0;
        }
    }

    a {
        color: colors.$accent-background;
        text-decoration: none;
        text-decoration: underline;
    }
    .right {
        text-align: right;
        margin-left: auto;
    }
    h1 {
        margin-bottom: 0;
        margin-top: 50px;
    }
    .subsection {
        .content {
            width: calc(100% - 210px);
            min-width: 400px;
        }

        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 10px;
        // wrap
        flex-wrap: wrap;
        // for screens smaller than 600px
        @media (max-width: 600px) {
            // reverse
            .content {
                width: 100%;
                min-width: 0;
            }
        }
    }
    .circle-container {
        width: 170px; /* adjust to your needs */
        height: 170px; /* adjust to your needs */
        border-radius: 50%;
        overflow: hidden;
    }

    .circle-container img {
        width: 100%;
        height: 100%;
        object-fit: cover; /* scales and crops the image to fill the container */
        object-position: center; /* adjust the position of the image within the container */
    }
</style>
