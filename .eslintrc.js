module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint'],
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'prettier',
    'plugin:cypress/recommended',
  ],
  rules: {
    '@typescript-eslint/explicit-module-boundary-types': 0,
  },
  env: {
    browser: true,
    node: true,
    jest: true,
  },
};
