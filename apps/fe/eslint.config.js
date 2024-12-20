import globals from "globals";
import parser from "@typescript-eslint/parser";

export default [
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
    files: ["{app,libs}/**/*.{ts,tsx,js}"],
    rules: {
      "no-console": "warn",
    },
  },
];
