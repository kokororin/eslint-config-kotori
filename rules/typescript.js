const { hasAnyDep } = require('ptils');

const hasVue = hasAnyDep('vue');

module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: 'tsconfig.json',
    extraFileExtensions: ['.vue']
  },
  plugins: ['@typescript-eslint/eslint-plugin'],
  extends: ['plugin:@typescript-eslint/eslint-recommended'],
  rules: {
    'no-unused-vars': 'off',
    '@typescript-eslint/explicit-member-accessibility': ['error'],
    '@typescript-eslint/array-type': ['error', { default: 'array' }],
    '@typescript-eslint/no-unnecessary-type-assertion': 'error',
    '@typescript-eslint/prefer-namespace-keyword': 'error',
    '@typescript-eslint/prefer-optional-chain': 'error',
    '@typescript-eslint/no-unused-vars': 'error',
    '@typescript-eslint/require-await': 'error'
  }
};
