import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "typescript-eslint";
import pluginReact from "eslint-plugin-react";
import standardWithTypescript from "eslint-config-standard-with-typescript";
import pluginImport from "eslint-plugin-import";
import pluginPrettier from "eslint-plugin-prettier";
import prettierConfig from "eslint-config-prettier";

export default [
  { files: ["**/*.{js,mjs,cjs,ts,jsx,tsx}"] },
  { languageOptions: { globals: globals.browser } },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  ...tseslint.configs.recommendedRequiringTypeChecking,
  pluginReact.configs.recommended,
  standardWithTypescript,
  prettierConfig,
  {
    files: ["**/*.{ts,tsx}"],
    languageOptions: {
      parser: tseslint.parser,
      parserOptions: {
        ecmaVersion: "latest",
        sourceType: "module",
        tsconfigRootDir: ".",
        project: ["./tsconfig.json"],
      },
    },
    plugins: {
      "@typescript-eslint": tseslint.plugin,
      import: pluginImport,
      prettier: pluginPrettier,
    },
    rules: {
      "padding-line-between-statements": [
        "error",
        {
          blankLine: "always",
          prev: "*",
          next: "return",
        },
      ],
      "@typescript-eslint/consistent-type-definitions": "off",
      "@typescript-eslint/no-unused-vars": [
        "error",
        {
          argsIgnorePattern: "^_",
          varsIgnorePattern: "^_",
        },
      ],
      "import/extensions": [
        "error",
        {
          ignorePackages: true,
          pattern: {
            js: "never",
            ts: "never",
          },
        },
      ],
      "import/order": [
        "error",
        {
          groups: [
            "builtin",
            "external",
            "parent",
            "sibling",
            "index",
            "object",
            "type",
          ],
          pathGroups: [
            {
              pattern: "{[A-Z]*,**/[A-Z]*}",
              group: "internal",
              position: "after",
            },
            {
              pattern: "./*.{css,scss,sass,less}",
              group: "index",
              position: "after",
            },
          ],
          pathGroupsExcludedImportTypes: ["builtin"],
          alphabetize: {
            order: "asc",
          },
        },
      ],
      "prettier/prettier": "error",
    },
  },
  {
    files: ["**/*.{js,mjs,cjs,jsx}"],
    plugins: {
      "@typescript-eslint": tseslint.plugin,
      import: pluginImport,
      prettier: pluginPrettier,
    },
    rules: {
      "prettier/prettier": "error",
    },
  },
];
