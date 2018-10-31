module.exports = {
  parser: 'babel-eslint',
  parserOptions: {
    ecmaVersion: 6,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true
    }
  },
  env: {
    browser: true,
    es6: true,
    amd: true,
    node: true
  },
  plugins: ['react', 'babel'],
  rules: {
    'comma-dangle': 1, // 要求或禁止使用拖尾逗号
    quotes: [1, 'single'], // 强制使用一致的反勾号、双引号或单引号
    'no-undef': 1, // 禁用未声明的变量
    'no-extra-semi': 1, // 禁用不必要的分号
    semi: 1, // 要求或禁止使用分号代替 ASI
    'semi-spacing': 1, // 强制分号前后有空格
    'no-unused-vars': 1, // 禁止未使用过的变量
    'no-use-before-define': 1, // 禁止定义前使用
    strict: [1, 'never'], // Strict Mode
    'no-unreachable': 1, // 禁止在 return、throw、continue 和 break 语句后出现不可达代码
    'no-else-return': 1, // 禁止在 else 前有 return
    'no-empty-function': [
      1,
      {
        // 禁止出现空函数
        allow: ['arrowFunctions', 'functions', 'methods']
      }
    ],
    'no-extra-label': 1, // 禁用不必要的标签
    'no-trailing-spaces': [1, { skipBlankLines: true }], // 禁用行尾空白
    'no-alert': 1, // 禁用 Alert
    'no-var': 1, // 要求使用 let 或 const 而不是 var
    'no-multi-spaces': 1, // 禁止出现多个空格
    'no-useless-constructor': 1, // 禁用不必要的构造函数
    'spaced-comment': 1, // 要求或禁止在注释前有空白 (space 或 tab)
    'prefer-arrow-callback': 1, // 推荐使用箭头函数作为回调
    'prefer-const': [1, { destructuring: 'all' }], // 建议使用const
    'prefer-spread': 1, // 建议使用扩展运算符而非.apply()
    'no-duplicate-imports': 1, // Disallow duplicate imports
    'no-extra-boolean-cast': 1, // 禁止不必要的布尔类型转换
    curly: 1, // 要求遵循大括号约定
    'dot-notation': [
      1,
      {
        // 要求使用点号
        allowKeywords: true
      }
    ],
    eqeqeq: 1, // 要求使用 === 和 !==
    'guard-for-in': 1, // 需要约束 for-in
    'no-caller': 1, // 禁用 caller 或 callee
    'no-eq-null': 1, // 禁止与 null 进行比较
    'no-eval': 1, // 禁用 eval()
    'no-extend-native': 1, // 禁止扩展原生对象
    'no-extra-bind': 1, // 禁止不必要的函数绑定
    'no-fallthrough': 1, // 禁止 case 语句落空
    'no-floating-decimal': 1, // 禁止浮点小数
    'no-implied-eval': 1, // 禁用隐式的eval()
    'no-lone-blocks': 1, // 禁用不必要的嵌套块
    'no-loop-func': 1, // 禁止循环中存在函数
    'no-multi-str': 1, // 禁止多行字符串
    'no-native-reassign': 1, // Disallow Reassignment of Native Objects
    'no-new-func': 1, // 禁用Function构造函数
    'no-new-wrappers': 1, // 禁止原始包装实例
    'no-new-object': 1, // 禁止使用 Object 构造函数
    'object-shorthand': 1, // 要求对象字面量简写语法
    'quote-props': [1, 'as-needed'], // 要求对象字面量属性名称使用引号
    'no-array-constructor': 1, // 禁止使用 Array 构造函数
    'no-octal': 1, // 禁用八进制字面量
    'no-octal-escape': 1, // 禁止在字符串字面量中使用八进制转义序列
    'no-proto': 1, // 禁用__proto__
    'no-redeclare': 1, // 禁止重新声明变量
    'no-script-url': 1, // 禁用 Script URL
    'no-self-compare': 1, // 禁止自身比较
    'no-sequences': 1, // 不允许使用逗号操作符
    'no-throw-literal': 1, // 限制可以被抛出的异常
    'no-with': 1, // 禁用 with 语句
    'wrap-iife': [1, 'any'], // 需要把立即执行的函数包裹起来
    yoda: 1, // 要求或者禁止Yoda条件
    'no-cond-assign': 1, // 禁止在条件语句中出现赋值操作符
    'babel/new-cap': 1, // 要求构造函数首字母大写
    'no-dupe-class-members': 1, // 不允许类成员中有重复的名称
    'babel/no-invalid-this': 1, // Disallow this keywords outside of classes or class-like objects
    // React
    'react/jsx-uses-react': 1,
    'react/jsx-boolean-value': 1, // 如果属性值为 true, 可以直接省略
    'react/no-string-refs': 1, // 总是在Refs里使用回调函数
    'react/self-closing-comp': 1, // 对于没有子元素的标签来说总是自己关闭标签
    'react/jsx-no-bind': [
      1,
      {
        ignoreRefs: true,
        allowArrowFunctions: true
      }
    ], // 当在 render() 里使用事件处理方法时，提前在构造函数里把 this 绑定上去
    'react/jsx-uses-vars': 1,
    'react/prefer-stateless-function': [1, { ignorePureComponents: true }], // 如果你的模块有内部状态或者是refs, 推荐使用 class extends React.Component 而不是 React.createClass
    'react/sort-comp': 1,
    'react/jsx-pascal-case': [1, { allowAllCaps: true }] // React模块名使用帕斯卡命名，实例使用骆驼式命名
  }
};
