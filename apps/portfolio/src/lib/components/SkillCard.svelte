<script lang="ts">
  import type { SkillData } from "$lib/data/skills.model";

  import ImageCard from "./ImageCard.svelte";

  export let data: SkillData;
</script>

<ImageCard
  data={{
    title: data.name,
    desc: "⭐".repeat(data.star),
    img: data.img,
    bgfit: true,
  }}
/>
