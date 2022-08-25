// @ts-check

import vercel from "@sveltejs/adapter-vercel";
import path from "node:path";
import preprocess from "svelte-preprocess";

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
    alias: {
      $components: path.resolve("src/components"),
    },
  },
};
