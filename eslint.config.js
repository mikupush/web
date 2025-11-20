import eslint from '@eslint/js';
import { defineConfig } from 'eslint/config';
import tseslint from 'typescript-eslint';
import eslintPluginAstro from "eslint-plugin-astro";
import reactPlugin from 'eslint-plugin-react';

export default defineConfig(
  eslint.configs.recommended,
  tseslint.configs.recommended,
  eslintPluginAstro.configs.recommended,
  {
    files: ["**/*.jsx", "**/*.tsx"],
    ...reactPlugin.configs.flat.recommended,
    ...reactPlugin.configs.flat["jsx-runtime"],
  },
  {
    rules: {
      "astro/no-set-html-directive": "error"
    },
  },
)
