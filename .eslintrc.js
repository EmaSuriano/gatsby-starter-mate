module.exports = {
  extends: ['airbnb', 'prettier', 'plugin:flowtype/recommended'],
  plugins: ['flowtype'],
  rules: {
    'react/jsx-filename-extension': 'off',
    'react/require-default-props': 'off',
  },
  parser: 'babel-eslint',
};
