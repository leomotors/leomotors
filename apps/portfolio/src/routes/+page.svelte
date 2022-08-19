<script lang="ts">
  import Link45deg from "svelte-bootstrap-icons/lib/Link45deg.svelte";

  import ext from "$lib/components/ext";
</script>

<h1 class="page-title">Welcome to my Portfolio!</h1>
<h2 class="text-2xl">I'm Nutthapat Pongtanyavichai (Leo)</h2>

<div class="h-12" />

<div
  class="mx-auto flex w-fit flex-col gap-2 rounded-xl bg-sky-200 p-3 text-black"
>
  <p class="text-2xl font-bold">&gt; Visit other sites &lt;</p>
  <a href="https://leomotors.net" {...ext}>
    <div
      class="mx-auto flex items-center gap-2 rounded-xl bg-gradient-to-br from-pink-300 to-amber-400 p-3 transition-colors hover:text-neutral-800"
    >
      <Link45deg width="32" height="32" />
      <span class="text-3xl font-bold">leomotors.net</span>
    </div>
  </a>
</div>
