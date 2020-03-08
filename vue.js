module.exports = {
  parser: 'vue-eslint-parser',
  parserOptions: {
    parser: '@typescript-eslint/parser'
  },
  extends: ['plugin:vue/recommended'],
  rules: {
    'vue/singleline-html-element-content-newline': 'off'
  }
};
