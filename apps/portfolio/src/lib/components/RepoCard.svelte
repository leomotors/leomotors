<script lang="ts">
  import type { RepoData } from "$lib/data/repos.model";
  import LangIcons from "$lib/data/lang_icons.json";

  import ImageCard from "./ImageCard.svelte";

  export let data: RepoData;

  const lang = LangIcons[data.language];
</script>

<ImageCard {data}>
  {#if lang}
    <div class="lang-icon" style="background-image: url({lang})" />
  {/if}
</ImageCard>

<style lang="scss">
  .lang-icon {
    @apply absolute cursor-pointer bg-contain bg-center bg-no-repeat;
    @apply top-2.5 right-2.5 h-12 w-12 rounded;
  }
</style>
