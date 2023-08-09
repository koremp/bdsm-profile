module.exports = {
  "root": "true",
  "extends": [
    "next/core-web-vitals",
    "airbnb",
    "airbnb-typescript"
  ],
  "plugins": [
    "testing-library",
    "@typescript-eslint"
  ],
  "parser": "@typescript-eslint/parser",
  "overrides": [
    {
      "files": [
        "**/__tests__/**/*.[jt]s?(x)"
      ],
      "env": { "jest/globals": true },
      "globals": {
        "context": "readonly"
      },
      "plugins": ["jest"],
      "extends": ["plugin:jest/recommended"],
      "rules": {
        "jest/expect-expect": "off"
      }
    },
  ],
  "parserOptions": {
    "project": "tsconfig.json"
  },
  "rules": {
    "react/react-in-jsx-scope": "off",
    "react/jsx-props-no-spreading": "off",
    "react/jsx-filename-extension": [1, { "extensions": [".tsx", ".jsx"] }],
    "import/extensions": [
      "error",
      "ignorePackages",
      {
        "js": "never",
        "jsx": "never",
        "ts": "never",
        "tsx": "never"
      }
    ],
    "react/require-default-props": "off",
    "@typescript-eslint/naming-convention": "off"
  },
};