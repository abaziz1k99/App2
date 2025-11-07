// eslint.config.js
import js from "@eslint/js";
import react from "eslint-plugin-react";
import globals from "globals";

export default [
  js.configs.recommended,
  {
    files: ["**/*.{js,jsx}"],
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
      globals: globals.browser,
      parserOptions: { ecmaFeatures: { jsx: true } },
    },
    plugins: {
      react,
    },
    rules: {
      "react/react-in-jsx-scope": "off",
      "react/prop-types": "off"
    },
    settings: {
      react: {
        version: "detect",
      },
    },
  },
];
