module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: 'tsconfig.json',
    extraFileExtensions: ['.vue']
  },
  plugins: ['@typescript-eslint/eslint-plugin'],
  extends: ['plugin:@typescript-eslint/eslint-recommended'],
  rules: {
    // 禁止未使用过的变量
    'no-unused-vars': 'off',
    '@typescript-eslint/no-unused-vars': 'error',
    // 禁止定义前使用
    'no-use-before-define': 'off',
    '@typescript-eslint/no-use-before-define': ['error'],
    // 禁用不必要的构造函数
    'no-useless-constructor': 'off',
    '@typescript-eslint/no-useless-constructor': 'error',
    // 禁止使用 Array 构造函数
    'no-array-constructor': 'off',
    '@typescript-eslint/no-array-constructor': 'error',
    // 不允许类成员中有重复的名称
    'no-dupe-class-members': 'off',
    '@typescript-eslint/no-dupe-class-members': 'error',
    // 禁止出现空函数
    'no-empty-function': 'off',
    '@typescript-eslint/no-empty-function': [
      'error',
      {
        // 禁止出现空函数
        allow: ['arrowFunctions', 'functions', 'methods']
      }
    ],
    // 禁用不必要的分号
    'no-extra-semi': 'off',
    '@typescript-eslint/no-extra-semi': 'error',
    // 强制使用一致的反勾号、双引号或单引号
    quotes: 'off',
    '@typescript-eslint/quotes': ['error', 'single'],
    // 要求或禁止使用分号代替 ASI
    semi: 'off',
    '@typescript-eslint/semi': 'error',
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
