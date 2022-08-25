<nav>
  <a href="/" sveltekit:prefetch>Home</a> |
  <a href="/about" sveltekit:prefetch>About</a>
</nav>

<style lang="scss">
  nav {
    @apply 2xl:mt-16 mb-6 flex justify-center gap-2;

    @apply text-2xl font-bold;

    & > a {
      @apply transition-colors hover:text-slate-400;
    }
  }
</style>
