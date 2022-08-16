<script lang="ts">
  import { activities as _activities } from "@leomotors/data";
  const { activities, awards } = _activities;

  import BigCard from "$lib/components/BigCard.svelte";
  import ImageCard from "$lib/components/ImageCard.svelte";
</script>

<main class="card-page">
  <h1 class="page-title">Awards and Activities</h1>

  <BigCard title="Awards" subtitle="Awards related to Computer and Technology">
    {#each awards as award}
      <ImageCard data={award} />
    {/each}
  </BigCard>

  <BigCard
    title="Activities"
    subtitle="Activities related to Computer and Technology, ex. Joining Competition / Contest / Training Camp"
  >
    {#each activities as activity}
      <ImageCard data={activity} />
    {/each}
  </BigCard>
</main>
