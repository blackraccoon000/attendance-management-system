import globals from "globals";
import parser from "@typescript-eslint/parser";
import js from "@eslint/js";
import {nextJsConfig} from "@repo/eslint-config/next-js";

export default [
  ...nextJsConfig,
  js.configs.recommended,
  {
    languageOptions: {
      ecmaVersion: 2022,
      sourceType: "module",
      parser,
      globals: {
        ...globals.browser,
        ...globals.node,
        myCustomGlobal: "readonly",
      },
    },
    files: ["{src,tests}/**/*.{ts,tsx,js}"],
    rules: {
      "no-console": "warn",
    },
  },
];
