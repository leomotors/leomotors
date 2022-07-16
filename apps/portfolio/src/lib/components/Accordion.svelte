<script lang="ts">
  import { createEventDispatcher } from "svelte";
  import { fade } from "svelte/transition";
  const dispatch = createEventDispatcher();

  import Chevron from "$lib/icons/Chevron.svelte";

  export let active: boolean;

  export let title: string;
  export let subtitle: string;
</script>

<div
  class="title m-2 flex flex-row justify-between px-2 align-baseline {active
    ? 'ring-2'
    : 'not-active'} cursor-pointer rounded"
  on:click={() => {
    dispatch("titleclick");
  }}
>
  <div class="titles select-none">
    <span class="font-semibold">{title}</span>
    <span class="text-gray-500">{subtitle}</span>
  </div>
  <Chevron open={active} />
</div>

{#if active}
  <div
    class="content mx-1.5 mt-2 rounded bg-gray-100 px-4 py-2 text-left"
    transition:fade={{ duration: 150 }}
  >
    <slot />
  </div>
{/if}
