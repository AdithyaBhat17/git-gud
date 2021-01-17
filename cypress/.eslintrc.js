module.exports = {
  plugins: ["eslint-plugin-cypress"],
  root: true,
  env: { "cypress/globals": true },
  extends: ["plugin:cypress/recommended"],
};
