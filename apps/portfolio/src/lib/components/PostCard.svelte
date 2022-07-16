<script lang="ts">
  import { goto } from "$app/navigation";

  import type { PostMeta } from "$lib/types";

  export let data: PostMeta;
  export let link: string;
</script>

<div
  class="card flex flex-col justify-center bg-gradient-to-b from-pink-50 to-pink-200"
  on:click={() => {
    goto(link);
  }}
>
  <h1 class="text-2xl font-bold">{data.title}</h1>
  <h2>{data.desc}</h2>
  <h2>{data.date}</h2>
</div>

<style lang="scss">
  .card {
    @apply m-4 h-56 cursor-pointer rounded-lg p-4 shadow-lg expand-sm;
  }
</style>
