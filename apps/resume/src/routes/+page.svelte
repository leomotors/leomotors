<script lang="ts">
  import "../app.css";

  import { certificates } from "@leomotors/data";
  import {
    awards,
    educations,
    fullVersionLink,
    interests,
    projects,
    sourceLink,
    technologies,
    workExperiences,
  } from "@leomotors/data/resume";

  import Certificate from "$components/Certificate.svelte";
  import HideToggle from "$components/HideToggle.svelte";
  import Intro from "$components/Intro.svelte";
  import Work from "$components/Work.svelte";

  import { introData } from "../data";

  let editMode = false;
  function toggleMode() {
    editMode = !editMode;
  }

  const h2clsx = "text-left text-2xl uppercase print:text-4xl";
</script>

<header
  class="web-only w-screen bg-green-500 p-4 text-center text-white sm:p-6"
>
  <h1 class="text-4xl">Resumette</h1>
  <h3>
    <button on:click={toggleMode} class="text-lg underline">
      {editMode ? "[View]" : "[Edit]"}
    </button>
    <button on:click={() => window.print()} class="text-lg underline">
      [Print]
    </button>
  </h3>
  <p>
    Printer-friendly standard résumé template by
    <a href="https://github.com/narze/resume">narze</a>, any HTML tags with
    <code>web-only</code> CSS class will be hidden on print.
  </p>
  <p>
    You can toggle
    <button on:click={toggleMode} class="underline"> [Edit Mode] </button>
    to hide some sections before printing.
  </p>
  (<a href={sourceLink} target="_blank" rel="noopener">Source</a>)

  <p>
    See all my other websites at
    <a href={"https://" + introData.website} target="_blank" rel="noreferrer">
      leomotors.net
    </a>
  </p>
</header>

<main
  class="m-0 max-w-screen-xl p-4 text-center md:m-8 xl:mx-auto {editMode
    ? 'edit-mode'
    : 'display-mode'}"
>
  <Intro {...introData} />

  <section>
    <HideToggle />
    <h2 class={h2clsx}>Technologies and Languages</h2>
    <hr />

    <table class="table table-fixed items-start text-left">
      {#each technologies as tech}
        <tr>
          <HideToggle />
          <td class="w-[11rem] pl-4 align-top print:w-36">
            <span class="w-36 print:w-32">- {tech.section}</span>
          </td>
          <td><span>{tech.details}</span></td>
        </tr>
      {/each}
    </table>

    <section>
      <HideToggle />
      <p class="-mt-2 pl-8 text-left">...And is open to other technologies</p>
    </section>
  </section>

  <section>
    <HideToggle />
    <h2 class={h2clsx}>Education</h2>
    <hr />

    <ul>
      {#each educations as edu}
        <li>
          <HideToggle />
          <strong>{edu.head}</strong>, {edu.details}
        </li>
      {/each}
    </ul>
  </section>

  <section>
    <HideToggle />
    <h2 class={h2clsx}>Awards & Activities</h2>
    <hr />

    <ul>
      {#each awards as award}
        <li>
          <HideToggle />
          <strong>{award.name}</strong>, {award.details}
        </li>
      {/each}
    </ul>
  </section>

  <section>
    <HideToggle />
    <h2 class={h2clsx}>Certificates</h2>
    <hr />

    <div class="flex">
      {#each certificates as certificate}
        <Certificate {...certificate} />
      {/each}
    </div>
  </section>

  <section>
    <HideToggle />
    <h2 class={h2clsx}>Work Experience</h2>
    <hr />

    {#each workExperiences as exp}
      <Work {...exp} />
    {/each}
  </section>

  <section>
    <HideToggle />
    <h2 class={h2clsx}>Projects</h2>
    <hr />

    <ul>
      {#each projects as project}
        <li>
          <HideToggle />
          <strong>{project.name}</strong>
          - {project.details}
          <a href="https://{project.url}" target="_blank" rel="noreferrer">
            <strong>{project.url}</strong>
          </a>
        </li>
      {/each}
    </ul>
  </section>

  <section>
    <HideToggle />
    <h2 class={h2clsx}>Interests</h2>
    <hr />

    <ul>
      {#each interests as interest}
        <li>
          <HideToggle />
          {interest}
        </li>
      {/each}
    </ul>
  </section>

  <footer class="print-only">
    (See in <a href={fullVersionLink} target="_blank" rel="noopener">web</a> for
    full version or view
    <a href={sourceLink} target="_blank" rel="noopener">source code</a>)
  </footer>
</main>

<style lang="postcss">
  main {
    overflow-x: hidden;
  }

  a {
    text-decoration: underline;
  }

  section {
    @apply my-4;
  }

  section h2 {
    @apply font-semibold;
  }

  section hr {
    @apply mt-0 mb-2;
    border-color: darkgrey;
  }

  section > ul {
    @apply list-disc pl-8 text-left;
  }

  :global(.print-only) {
    display: none;
  }

  :global(main.display-mode .hide-toggle) {
    display: none;
  }

  @media print {
    * {
      @apply text-xs;
    }

    :global(.print-only) {
      display: inherit;
    }

    :global(.web-only) {
      display: none;
    }

    ul {
      @apply pl-6;
    }

    section {
      @apply my-2;
    }

    section hr {
      @apply mt-0 mb-1;
    }

    main {
      margin: 0 0;
      padding: 0;
    }
  }
</style>
