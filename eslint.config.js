import eslintPluginAstro from "eslint-plugin-astro";

/** @type {import("eslint").Linter.FlatConfig[]} */
export default [
  ...eslintPluginAstro.configs.recommended,
  {
    rules: {
      "astro/no-set-html-directive": "error"
    },
  },
];
