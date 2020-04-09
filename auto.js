const { hasAnyDep } = require('ptils');

const typescript = hasAnyDep('typescript') && 'kotori/typescript';
const react = (hasAnyDep('react') || hasAnyDep('preact')) && 'kotori/react';
const vue = hasAnyDep('vue') && 'kotori/vue';

module.exports = {
  extends: ['kotori', typescript, react, vue].filter(Boolean)
};
