import js from '@eslint/js';
import globals from 'globals';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import tseslint from 'typescript-eslint';

export default tseslint.config(
  { ignores: ['dist'] },
  {
    extends: [js.configs.recommended, ...tseslint.configs.recommended],
    files: ['**/*.{ts,tsx}'],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
    },
    plugins: {
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
    },
    rules: {
      ...reactHooks.configs.recommended.rules,
      'react-refresh/only-export-components': [
        'warn',
        { allowConstantExport: true },
      ],
    },
  }
);

// import js from "@eslint/js";
// import globals from "globals";
// import reactHooks from "eslint-plugin-react-hooks";
// import reactRefresh from "eslint-plugin-react-refresh";
// import tsPlugin from "@typescript-eslint/eslint-plugin";
// import tsParser from "@typescript-eslint/parser";

// export default {
//   parser: tsParser,
//   parserOptions: {
//     ecmaVersion: 2020,
//     sourceType: "module",
//   },
//   extends: [
//     "eslint:recommended",
//     "plugin:@typescript-eslint/recommended",
//     "plugin:react/recommended",
//   ],
//   plugins: ["react-hooks", "react-refresh", "@typescript-eslint"],
//   env: {
//     browser: true,
//     node: true,
//     es6: true,
//   },
//   rules: {
//     ...reactHooks.configs.recommended.rules,
//     "@typescript-eslint/no-unused-vars": "warn",
//     "react-refresh/only-export-components": [
//       "warn",
//       { allowConstantExport: true },
//     ],
//   },
//   overrides: [
//     {
//       files: ["**/*.ts", "**/*.tsx"],
//       parser: tsParser,
//       rules: {
//         "@typescript-eslint/explicit-module-boundary-types": "off",
//       },
//     },
//   ],
// };
