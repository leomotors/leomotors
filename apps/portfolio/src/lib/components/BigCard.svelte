<script lang="ts">
  export let title: string;
  export let subtitle = "";
</script>

<main class="big-card">
  <h1>{@html title}</h1>
  <h2>{@html subtitle}</h2>
  <hr />
  <div class="card-content">
    <slot />
  </div>
  <slot name="card-footer" />
</main>

<style global lang="scss">
  .big-card {
    @apply m-4 max-w-full rounded-xl bg-gray-100 p-4 shadow-lg gdark:bg-black gdark:shadow-white;

    & > h1 {
      @apply text-left text-3xl font-bold;
    }

    & > h2 {
      @apply text-left text-gray-600 gdark:text-gray-300;
    }

    & > h1,
    h2 {
      @apply ml-6;
    }

    & > hr {
      @apply mx-4 mt-2 mb-1 text-gray-300;
    }

    & > .card-content {
      @apply grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4;
    }
  }
</style>
