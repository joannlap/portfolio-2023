module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: [
    "@nuxtjs",
    "@nuxtjs/eslint-config-typescript",
    "prettier",
    "prettier/vue",
    "plugin:prettier/recommended",
    "plugin:nuxt/recommended",
  ],
  rules: {
    semi: 0,
  },
};
