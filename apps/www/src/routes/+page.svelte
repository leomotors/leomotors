<script lang="ts">
  import Award from "svelte-bootstrap-icons/lib/Award.svelte";
  import Briefcase from "svelte-bootstrap-icons/lib/Briefcase.svelte";
  import CodeSquare from "svelte-bootstrap-icons/lib/CodeSquare.svelte";
  import Github from "svelte-bootstrap-icons/lib/Github.svelte";
  import JournalRichtext from "svelte-bootstrap-icons/lib/JournalRichtext.svelte";
  import Linkedin from "svelte-bootstrap-icons/lib/Linkedin.svelte";
  import Twitter from "svelte-bootstrap-icons/lib/Twitter.svelte";
  
  import CgWebring from "$components/elements/CgWebring.svelte";
  import Link from "$components/elements/Link.svelte";
</script>

<main class="flex flex-col items-center gap-4 text-center">
  <h1 class="font-bold text-4xl">Hello! I'm Leo ✨</h1>
  <h2 class="text-3xl font-bold">Nutthapat Pongtanyavichai</h2>

  <p class="w-full md:w-2/3 mx-auto text-xl font-semibold p-2">TODO</p>

  <section class="my-2">
    <Link name="Portfolio" to="https://portfolio.leomotors.net">
      <Award width="32" height="32" />
    </Link>

    <Link name="Resume" to="https://resume.leomotors.net">
      <Briefcase width="32" height="32" />
    </Link>

    <Link name="Blog" to="https://blog.leomotors.net">
      <JournalRichtext width="32" height="32" />
    </Link>

    <Link name="Repo List" to="https://repos.leomotors.net">
      <CodeSquare width="32" height="32" />
    </Link>
  </section>

  <section class="my-2">
    <Link name="GitHub" to="https://github.com/Leomotors">
      <Github width="32" height="32" />
    </Link>

    <Link name="Twitter" to="https://twitter.com/LeomotorsTH">
      <Twitter width="32" height="32" />
    </Link>

    <Link name="LinkedIn" to="https://www.linkedin.com/in/leo-nutthapat/">
      <Linkedin width="32" height="32" />
    </Link>
  </section>

  <h2 class="text-2xl font-bold">Webrings</h2>
  <section>
    <Link name="Creatorsgarten" to="https://creatorsgarten.org/ring" size="sm">
      <CgWebring />
    </Link>
  </section>
</main>

<style lang="postcss">
  section {
    @apply flex flex-col justify-center gap-2 lg:flex-row;
  }
</style>
