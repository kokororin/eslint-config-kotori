module.exports = {
  plugins: ['react'],
  extends: ['plugin:react/recommended'],
  settings: {
    react: {
      version: 'detect'
    }
  },
  rules: {
    'react/sort-comp': 'off',
    'react/prop-types': 'off'
  }
};
