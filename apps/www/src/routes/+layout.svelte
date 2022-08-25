<script lang="ts">
  import "../app.scss";

  import Navbar from "$components/elements/Navbar.svelte";
  import Footer from "$components/layouts/Footer.svelte";
</script>

<div class="flex min-h-screen flex-col bg-slate-900 px-1 py-8 text-white">
  <Navbar />
  <slot />
  <Footer />
</div>
