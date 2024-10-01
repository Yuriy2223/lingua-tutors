module.exports = {
  printWidth: 80,
  tabWidth: 2,
  useTabs: false,
  semi: true,
  singleQuote: true,
  jsxSingleQuote: false,
  trailingComma: "es5",
  bracketSpacing: true,
  jsxBracketSameLine: false,
  arrowParens: "avoid",
  endOfLine: "lf",
  overrides: [
    {
      files: "*.tsx",
      options: {
        parser: "typescript",
      },
    },
    {
      files: ["*.ts", "*.tsx"],
      options: {
        singleQuote: true,
      },
    },
    {
      files: ["*.js", "*.jsx"],
      options: {
        parser: "babel",
      },
    },
    {
      files: ["*.css", "*.scss"],
      options: {
        singleQuote: true,
      },
    },
  ],
};

  // printWidth: 80,
  // tabWidth: 2,
  // useTabs: false,
  // semi: true,
  // singleQuote: true,
  // trailingComma: "es5",
  // bracketSpacing: true,
  // jsxBracketSameLine: false,
  // arrowParens: "avoid",
  // proseWrap: "always",
