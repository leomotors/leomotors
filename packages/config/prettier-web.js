// @ts-check

/** @type {import("prettier").Config} */
const config = {
    ...require("./prettier-app"),
    tabWidth: 2,
    plugins: ["prettier-plugin-svelte"],
};

module.exports = config;
