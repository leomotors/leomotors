<script lang="ts">
  import { onMount } from "svelte";
  let href = "";

  onMount(() => {
    href = window.location.href.replace(".me", ".net");
  });
</script>

<svelte:head>
  <title>This website has been moved!</title>
  <meta
    name="description"
    content="All of my website are now located at leomotors.net"
  />
</svelte:head>

<main class="flex h-[100vh] flex-col items-center justify-center gap-4">
  <h1 class="text-4xl font-bold">This website has been moved</h1>

  <a {href}>
    <button
      class="rounded-xl border border-green-400 bg-green-300 p-2 text-2xl font-bold"
    >
      Visit new Website ({href})
    </button>
  </a>
</main>
