// @ts-check

/** @type {import("eslint").Linter.Config} */
const config = {
    ...require("./eslint-app"),
    overrides: [
        {
            files: ["*.js"],
            rules: {
                "@typescript-eslint/no-var-requires": "off",
            },
        },
    ],
};

module.exports = config;
