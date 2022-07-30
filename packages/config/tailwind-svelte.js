// @ts-check

/** @type {import("tailwindcss").Config} */
const config = {
    content: ["./src/**/*.{html,js,svelte,ts}"],
    darkMode: "class",
    theme: {
        extend: {
            screens: {
                print: { raw: "print" },
            },
        },
    },
    plugins: [require("tailwindcss-global-dark")],
};

module.exports = config;
