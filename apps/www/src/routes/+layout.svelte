<script lang="ts">
  import "../app.scss";

  import Footer from "$components/layouts/Footer.svelte";
  import Navbar from "$components/layouts/Navbar.svelte";
</script>

<div class="flex min-h-screen flex-col bg-slate-900 px-1 py-8 text-white">
  <Navbar />
  <slot />
  <Footer />
</div>
