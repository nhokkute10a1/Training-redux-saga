module.exports = {
  parserOptions: {
    ecmaVersion: 6,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  parser: 'babel-eslint',
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'airbnb',
    'prettier',
  ],
  rules: {
    semi: 'warn',
    quotes: ['error', 'single'],
    'react/prop-types': 'warn',
    'react/jsx-max-props-per-line': ['warn', { maximum: 4, when: 'always' }],
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }],
    'arrow-body-style': ['error', 'always'],
    'prettier/prettier': ['error'],
    'no-unused-vars': ['off'],
    'no-use-before-define': ['off'],
    'no-use-before-define': ['off'],
    'no-param-reassign': ['off'],
  },
  plugins: ['prettier'],
  env: {
    es6: true,
    browser: true,
    node: true,
  },
};
