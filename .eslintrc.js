module.exports = {
  extends: ['airbnb', 'prettier', 'plugin:cypress/recommended'],
  rules: {
    'react/jsx-filename-extension': 'off',
    'react/require-default-props': 'off',
  },
  parser: 'babel-eslint',
  env: {
    browser: true,
    node: true,
    jest: true,
  },
};
