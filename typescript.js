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
    'no-use-before-define': 'off',
    // Disallow unused variables
    '@typescript-eslint/no-unused-vars': 'error',
    // Disallow the use of variables before they are defined
    '@typescript-eslint/no-use-before-define': ['error'],
    // Require explicit accessibility modifiers on class properties and methods
    '@typescript-eslint/explicit-member-accessibility': ['error'],
    // Requires using either T[] or Array<T> for arrays
    '@typescript-eslint/array-type': ['error', { default: 'array' }],
    // Warns if a type assertion does not change the type of an expression
    '@typescript-eslint/no-unnecessary-type-assertion': 'error',
    // Require the use of the namespace keyword instead of the module keyword to declare custom TypeScript modules
    '@typescript-eslint/prefer-namespace-keyword': 'error',
    // Prefer using concise optional chain expressions instead of chained logical ands
    '@typescript-eslint/prefer-optional-chain': 'error',
    // Disallow async functions which have no await expression
    '@typescript-eslint/require-await': 'error',
    // Bans specific types from being used
    '@typescript-eslint/ban-types': [
      'error',
      {
        types: {
          String: {
            message: 'Use `string` instead.',
            fixWith: 'string'
          },
          Number: {
            message: 'Use `number` instead.',
            fixWith: 'number'
          },
          Boolean: {
            message: 'Use `boolean` instead.',
            fixWith: 'boolean'
          },
          Object: {
            message: 'Use `object` instead.',
            fixWith: 'object'
          },
          object: 'Use `{}` instead.',
          Function: 'Use a specific function type instead, like `() => void`.'
        }
      }
    ],
    // Disallows the use of require statements except in import statements
    '@typescript-eslint/no-var-requires': 'error'
  }
};
