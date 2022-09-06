// @ts-check

import path from "node:path";

import vercel from "@sveltejs/adapter-vercel";
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
    alias: {
      $components: path.resolve("src/components"),
    },
  },
};
