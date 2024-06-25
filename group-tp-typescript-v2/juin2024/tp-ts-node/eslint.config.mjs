import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "typescript-eslint";


export default [
  {
    "rules": {
      "no-unused-vars": "warn",
      "no-var": "warn",
      "prefer-const": "warn",
      "@typescript-eslint/no-inferrable-types": "warn"
    }
  },

  { files: ["**/*.{js,mjs,cjs,ts}"] },
  { files: ["**/*.js"], languageOptions: { sourceType: "script" } },
  { languageOptions: { globals: globals.browser } },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
];