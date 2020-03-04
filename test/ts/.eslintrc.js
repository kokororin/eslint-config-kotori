module.exports = {
  root: true,
  parserOptions: {
    project: ['./tsconfig.json'],
    tsconfigRootDir: __dirname
  },
  extends: ['../../rules/index', '../../rules/react', '../../rules/typescript']
};
