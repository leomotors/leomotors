<script lang="ts">
  export let name = "";
  export let to: `http${"s" | ""}://${string}`;
  export let size: "sm" | "lg" = "lg";
</script>

<a
  class={size == "lg" ? "p-3" : "p-2"}
  href={to}
  target="_blank"
  rel="noopener"
  {...$$restProps}
>
  <slot />

  {#if name}
    <p class={size == "lg" ? "font-bold text-2xl" : "text-lg"}>{name}</p>
  {/if}
</a>

<style lang="postcss">
  a {
    @apply border-2 border-slate-400 bg-slate-800 hover:bg-slate-700;
    @apply transition-all rounded-lg flex flex-row items-center gap-2 cursor-pointer select-none;
  }
</style>
