<nav>
  <a href="/" data-sveltekit-prefetch>Home</a> |
  <a href="/about" data-sveltekit-prefetch>About</a>
</nav>

<style lang="scss">
  nav {
    @apply flex justify-center gap-2;

    @apply text-2xl font-bold;

    & > a {
      @apply transition-colors hover:text-slate-400;
    }
  }
</style>
