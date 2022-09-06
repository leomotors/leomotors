<script lang="ts">
  // eslint-disable-next-line simple-import-sort/imports
  import { NavBar } from "@leomotors/sv-components";

  import "../app.scss";

  import { goto } from "$app/navigation";
  import Footer from "$lib/layout/Footer.svelte";

  let dark: boolean;
</script>

<svelte:head>
  <title>Leomotors Portfolio</title>
  <meta
    name="description"
    content="Skills, Activities and Projects showcase of Leomotors (Nutthapat Pongtanyavichai). A programmer who has a big dream."
  />
</svelte:head>

<div class:dark>
  <main
    class="bg-white text-black transition-all dark:bg-slate-900 dark:text-white"
  >
    <NavBar
      routes={{
        "/": "Home",
        skills: "Skills",
        activities: "Activities",
        projects: "Projects",
      }}
      bind:dark
      useLightDark={true}
    >
      <div slot="left">
        <img
          class="my-auto h-12 w-12 cursor-pointer rounded-full"
          src="https://avatars.githubusercontent.com/u/59821765?v=4"
          alt="My GitHub Profile Pic"
          title="My GitHub Profile Picture"
          on:click={() => {
            goto("/");
          }}
        />
      </div>
    </NavBar>

    <hr class="mx-auto w-full lg:w-4/5" />

    <section>
      <slot />
    </section>

    <Footer />
  </main>
</div>

<style lang="postcss">
  section {
    @apply min-h-[calc(100vh-16rem-1px)] pb-6 lg:min-h-[calc(100vh-12rem-1px)];
  }
</style>
