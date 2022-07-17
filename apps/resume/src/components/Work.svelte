<script lang="ts">
  import HideToggle from "$components/HideToggle.svelte";

  export let position = "";
  export let company = "";
  export let url = "";
  export let years = "";
  export let details: string[] = [];
</script>

<div class="work-experience">
  <HideToggle />
  <div class="mb-2 flex font-bold print:mb-1">
    <div class="flex-1 text-left">{position}</div>
    <div class="flex-0">
      <a href={url} target="_blank" rel="noreferrer">{company}</a>
    </div>
    <div class="flex-1 text-right">{years}</div>
  </div>
  <ul class="list-disc pl-8 text-left print:pl-6">
    {#each details as detail}
      <li>
        <HideToggle />
        {detail}
      </li>
    {/each}
  </ul>
</div>

<style lang="postcss">
  .work-experience {
    @apply my-4;
  }

  a {
    text-decoration: underline;
  }

  @media print {
    .work-experience {
      @apply my-1;
    }
  }
</style>
