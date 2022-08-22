// @ts-check

/** @type {import("prettier").Config} */
const config = {
    ...require("./prettier-app"),
    tabWidth: 2,
    plugins: [require("prettier-plugin-tailwindcss")],
};

module.exports = config;
