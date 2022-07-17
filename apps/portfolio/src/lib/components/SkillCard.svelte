<script lang="ts">
  import type { ISkill } from "@leomotors/data";

  import ImageCard from "./ImageCard.svelte";

  export let data: ISkill;
</script>

<ImageCard
  data={{
    title: data.name,
    desc: "⭐".repeat(data.star),
    img: data.img,
    bgfit: true,
  }}
/>
