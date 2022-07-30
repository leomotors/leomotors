<script lang="ts">
  import { projects } from "@leomotors/data";

  import BigCard from "$lib/components/BigCard.svelte";
  import ext from "$lib/components/ext";
  import RepoCard from "$lib/components/RepoCard.svelte";
  const { featured, big_projects } = projects;

  import { harvard } from "$lib/data/amazingQuotes.json";
</script>

<main class="card-page projects">
  <h1 class="page-title">My Projects</h1>
  <h2 class="page-subtitle">
    Projects related to Programming and Technology I have done
  </h2>

  <p class="mx-auto mb-10 w-[90%] font-serif text-2xl lg:w-3/5">
    &ldquo;{harvard}&rdquo;
  </p>

  <!-- Featured GitHub Repositories -->
  <BigCard
    title="Featured GitHub Repositories"
    subtitle="Some of Amazing projects I have done and is available on my individual
  GitHub Account"
  >
    <p slot="card-footer" class="ml-6 text-left">
      For all of my repositories, you may visit my
      <a href="https://github.com/Leomotors?tab=repositories" {...ext}>
        GitHub Account
      </a>
      or
      <a href="https://repos.leomotors.me" {...ext}> this website </a>
    </p>
    {#each featured as repo}
      <RepoCard data={repo} />
    {/each}
  </BigCard>

  <!-- Other Big Projects -->
  <BigCard
    title="Other Big Projects"
    subtitle="Some Big Projects I have spend lots of time with"
  >
    {#each big_projects as repo}
      <RepoCard data={repo} />
    {/each}
  </BigCard>
</main>

<style lang="scss">
  a {
    @apply text-blue-700 transition-all hover:text-pink-600 gdark:text-blue-400 gdark:hover:text-pink-400;
  }
</style>
