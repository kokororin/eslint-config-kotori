var hasAnyDep = require('ptils').hasAnyDep;

var hasReact = hasAnyDep('react');
var hasVue = hasAnyDep('vue');
var hasTS = hasAnyDep('typescript');

var config = {
  parser: 'babel-eslint',
  parserOptions: {
    parser: 'babel-eslint',
    ecmaFeatures: { jsx: true },
    ecmaVersion: 2019,
    sourceType: 'module',
    extraFileExtensions: ['.vue']
  },
  env: {
    browser: true,
    es6: true,
    node: true,
    mocha: true
  },
  plugins: [],
  extends: [],
  settings: {},
  rules: {
    'comma-dangle': 'error', // 要求或禁止使用拖尾逗号
    quotes: ['error', 'single'], // 强制使用一致的反勾号、双引号或单引号
    'no-undef': 'error', // 禁用未声明的变量
    'no-extra-semi': 'error', // 禁用不必要的分号
    semi: 'error', // 要求或禁止使用分号代替 ASI
    'semi-spacing': 'error', // 强制分号前后有空格
    'no-unused-vars': 'error', // 禁止未使用过的变量
    'no-use-before-define': 'error', // 禁止定义前使用
    strict: ['error', 'never'], // Strict Mode
    'no-unreachable': 'error', // 禁止在 return、throw、continue 和 break 语句后出现不可达代码
    'no-else-return': 'error', // 禁止在 else 前有 return
    'no-empty-function': [
      'error',
      {
        // 禁止出现空函数
        allow: ['arrowFunctions', 'functions', 'methods']
      }
    ],
    'no-extra-label': 'error', // 禁用不必要的标签
    'no-trailing-spaces': ['error', { skipBlankLines: true }], // 禁用行尾空白
    'no-alert': 'error', // 禁用 Alert
    'no-var': 'error', // 要求使用 let 或 const 而不是 var
    'no-multi-spaces': 'error', // 禁止出现多个空格
    'no-useless-constructor': 'error', // 禁用不必要的构造函数
    'spaced-comment': 'error', // 要求或禁止在注释前有空白 (space 或 tab)
    'prefer-arrow-callback': 'error', // 推荐使用箭头函数作为回调
    'prefer-const': ['error', { destructuring: 'all' }], // 建议使用const
    'prefer-spread': 'error', // 建议使用扩展运算符而非.apply()
    'no-duplicate-imports': 'error', // Disallow duplicate imports
    'no-extra-boolean-cast': 'error', // 禁止不必要的布尔类型转换
    curly: 'error', // 要求遵循大括号约定
    'dot-notation': [
      'error',
      {
        // 要求使用点号
        allowKeywords: true
      }
    ],
    eqeqeq: 'error', // 要求使用 === 和 !==
    'guard-for-in': 'error', // 需要约束 for-in
    'no-caller': 'error', // 禁用 caller 或 callee
    'no-eq-null': 'error', // 禁止与 null 进行比较
    'no-eval': 'error', // 禁用 eval()
    'no-extend-native': 'error', // 禁止扩展原生对象
    'no-extra-bind': 'error', // 禁止不必要的函数绑定
    'no-fallthrough': 'error', // 禁止 case 语句落空
    'no-floating-decimal': 'error', // 禁止浮点小数
    'no-implied-eval': 'error', // 禁用隐式的eval()
    'no-lone-blocks': 'error', // 禁用不必要的嵌套块
    'no-loop-func': 'error', // 禁止循环中存在函数
    'no-multi-str': 'error', // 禁止多行字符串
    'no-native-reassign': 'error', // Disallow Reassignment of Native Objects
    'no-new-func': 'error', // 禁用Function构造函数
    'no-new-wrappers': 'error', // 禁止原始包装实例
    'no-new-object': 'error', // 禁止使用 Object 构造函数
    'object-shorthand': 'error', // 要求对象字面量简写语法
    'quote-props': ['error', 'as-needed'], // 要求对象字面量属性名称使用引号
    'no-array-constructor': 'error', // 禁止使用 Array 构造函数
    'no-octal': 'error', // 禁用八进制字面量
    'no-octal-escape': 'error', // 禁止在字符串字面量中使用八进制转义序列
    'no-proto': 'error', // 禁用__proto__
    'no-redeclare': 'error', // 禁止重新声明变量
    'no-script-url': 'error', // 禁用 Script URL
    'no-self-compare': 'error', // 禁止自身比较
    'no-sequences': 'error', // 不允许使用逗号操作符
    'no-throw-literal': 'error', // 限制可以被抛出的异常
    'no-with': 'error', // 禁用 with 语句
    'wrap-iife': ['error', 'any'], // 需要把立即执行的函数包裹起来
    yoda: 'error', // 要求或者禁止Yoda条件
    'no-cond-assign': 'error', // 禁止在条件语句中出现赋值操作符
    'new-cap': 'error', // 要求构造函数首字母大写
    'no-dupe-class-members': 'error', // 不允许类成员中有重复的名称
    'no-invalid-this': 'error', // Disallow this keywords outside of classes or class-like objects
    'linebreak-style': 'error' // 强制使用一致的换行符风格
  }
};

if (hasReact) {
  config.plugins.push('react');
  config.extends.push('plugin:react/recommended');
  config.settings.react = {
    version: require('react').version
  };
}

if (hasVue) {
  config.extends.push('plugin:vue/recommended');
}

if (hasTS) {
  var tsRules = {
    'no-unused-vars': 'off',
    'no-invalid-this': 'off',
    'react/sort-comp': 'off',
    'react/prop-types': 'off',
    '@typescript-eslint/explicit-member-accessibility': ['error'],
    '@typescript-eslint/array-type': ['error', { default: 'array' }],
    '@typescript-eslint/no-unnecessary-type-assertion': 'error',
    '@typescript-eslint/prefer-namespace-keyword': 'error',
    '@typescript-eslint/prefer-optional-chain': 'error',
    '@typescript-eslint/no-unused-vars': 'error',
    '@typescript-eslint/require-await': 'error',
    '@typescript-eslint/interface-name-prefix': [
      'error',
      { prefixWithI: 'never' }
    ]
  };
  if (hasVue) {
    config.parserOptions.parser = '@typescript-eslint/parser';
    delete config.parser;
  } else {
    config.parser = '@typescript-eslint/parser';
    delete config.parserOptions.parser;
  }
  config.plugins.push('@typescript-eslint/eslint-plugin');
  config.extends.push('plugin:@typescript-eslint/eslint-recommended');
  Object.keys(tsRules).forEach(key => {
    config.rules[key] = tsRules[key];
  });
}

module.exports = config;
