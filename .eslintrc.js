module.exports = {
  "extends": [
    "next/core-web-vitals",
    "eslint:recommended",
    "next"
  ],
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
    "project": "./tsconfig.json"
  },
};