<script lang="ts">
  export let name = "";
  export let nickname = "";
  export let phone = "";
  export let email = "";
  export let github = "";
  export let linkedin = "";
  export let location = "";
  export let website = "";
</script>

<div
  class="flex flex-col flex-wrap text-sm sm:flex-row sm:text-base print:flex-row"
>
  <div class="w-48 flex-1 text-left sm:py-4">
    <p><a href="tel:{phone}">{phone}</a></p>
    <p><a href="mailto:{email}">{email}</a></p>
    <p>{location}</p>
  </div>

  <h2
    class="order-first flex-none p-4 text-center text-4xl sm:order-none sm:text-2xl md:text-3xl lg:text-6xl print:order-none print:pt-0 print:text-[1.7rem]"
  >
    {name}
    <span class="block text-base lg:text-2xl">({nickname})</span>
  </h2>

  <div
    class="w-48 flex-1 text-left text-sm sm:py-4 sm:text-right sm:text-base print:text-right"
  >
    <p>
      <a href="https://github.com/{github}" target="_blank" rel="noreferrer">
        github.com/{github}
      </a>
    </p>
    <p>
      <a href="https://{website}" target="_blank" rel="noreferrer">
        {website}
      </a>
    </p>
    <p>
      <a
        href="https://linkedin.com/in/{linkedin}"
        target="_blank"
        rel="noreferrer"
      >
        Linkedin
      </a>
    </p>
  </div>
</div>

<style>
  a {
    text-decoration: underline;
  }
</style>
