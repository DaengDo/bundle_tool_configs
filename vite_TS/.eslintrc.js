module.exports = {
  env: {
    browser: true,
    es6: true,
    node: true,
    jest: true,
  },
  parser: "@typescript-eslint/parser",
  extends: [
    "airbnb",
    "airbnb/hooks",
    "plugin:prettier/recommended",
    "plugin:storybook/recommended",
  ],
  plugins: [],
  parserOptions: {
    project: "./tsconfig.json",
  },
  ignorePatterns: ["node_modules/"],
  rules: {
    "import/no-unresolved": "off",
    "react/jsx-filename-extension": [
      1,
      {
        extensions: [".js", ".jsx", ".ts", ".tsx"],
      },
    ],
    "import/extensions": ["off"],
    "react/react-in-jsx-scope": "off",
    "react/jsx-no-target-blank": 0,
    "react/require-default-props": "off",
    "prettier/prettier": [
      "error",
      {
        endOfLine: "auto",
      },
    ],
    "no-console": "off",
  },
  settings: {
    "import/resolver": {
      node: {
        extensions: [".mjs", ".js", ".json", "ts", "tsx"],
      },
    },
    "import/extensions": [".js", ".mjs", ".jsx", "ts", "tsx"],
    "import/core-modules": [],
    "import/ignore": ["node_modules", "\\.(coffee|scss|css|less|hbs|svg|json)$"],
  },
  // settings: {
  //   "import/parsers": {
  //     "@typescript-eslint/parser": [".ts", ".tsx"],
  //   },
  //   "import/resolver": {
  //     typescript: "./tsconfig.json",
  //   },
  // },
};
