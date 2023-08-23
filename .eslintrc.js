module.exports = {
  "extends": [
    "next/core-web-vitals",
    "eslint:recommended",
    "next"
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
      "env": {
        "jest": true,
        "jest/globals": true,
      },
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
    "project": "./tsconfig.json"
  },
};