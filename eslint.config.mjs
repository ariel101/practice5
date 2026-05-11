import js from "@eslint/js";
import globals from "globals";
import json from "@eslint/json";
import { defineConfig } from "eslint/config";

export default defineConfig([
  {
    files: ["**/*.{js,mjs,cjs}"],
    plugins: { js },
    extends: ["js/recommended"],
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node,

        // Jest
        describe: "readonly",
        it: "readonly",
        expect: "readonly"
      }
    }
  },

  {
    files: ["**/*.json"],
    plugins: { json },
    language: "json/json",
    extends: ["json/recommended"]
  },

  {
    ignores: [
      "node_modules/**",
      "coverage/**",
      "package-lock.json"
    ]
  }
]);