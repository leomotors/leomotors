<script lang="ts">
  import type { ImageCardData } from "$lib/data/imagecard.model";

  export let data: ImageCardData;
</script>

<div
  class="card bg-white transition-transform hover:scale-[1.025] dark:bg-slate-700 dark:shadow-white"
>
  <div
    class="img {data.link ? 'cursor-pointer' : ''} {data.bgtl
      ? 'bg-left-top'
      : 'bg-center'} {data.bgfit ? 'bg-contain' : 'bg-cover'}"
    style="background-image: url({data.img})"
    on:click={data.link &&
      (() => {
        window.open(data.link, "_blank", "noopener");
      })}
  >
    <slot />
  </div>
  <div class="card-detail p-4">
    <p class="text-xl font-bold">{data.title}</p>
    <p>{data.desc}</p>
  </div>
</div>

<style lang="scss">
  .card {
    @apply m-4 rounded-lg shadow-lg;
  }

  .img {
    @apply relative h-56 w-full rounded-t-lg bg-no-repeat;
  }
</style>
