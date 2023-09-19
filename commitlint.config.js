module.exports = {
  extends: ["./node_modules/@commitlint/config-conventional"],
  rules: {
    "type-enum": [
      2,
      "always",
      ["chore", "docs", "feat", "fix", "refactor", "revert", "test"],
    ],
  },
};
