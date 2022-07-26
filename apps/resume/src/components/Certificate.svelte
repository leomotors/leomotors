<script lang="ts">
  import type { ICertificate } from "@leomotors/data";

  import HideToggle from "$components/HideToggle.svelte";

  export let name: ICertificate["name"];
  export let image: ICertificate["image"];
  export let link: ICertificate["link"];
</script>

<div class="certificate-card" title={name}>
  <HideToggle />

  <a href={link} target="_blank" rel="noopener">
    <img src={image} alt="Image for {name}" class="h-[100px] print:h-[70px]" />
  </a>
</div>

<style lang="postcss">
</style>
