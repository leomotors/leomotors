// @ts-check

import preprocess from "svelte-preprocess";
import vercel from "@sveltejs/adapter-vercel";

/** @type {import("@sveltejs/kit").Config} */
export default {
  preprocess: [
    preprocess({
      postcss: true,
    }),
  ],
  kit: {
    adapter: vercel(),
    prerender: {
      default: true,
    },
  },
};
