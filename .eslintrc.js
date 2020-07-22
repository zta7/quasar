module.exports = {
  root: true,
  parserOptions: {
    parser: 'babel-eslint',
    sourceType: 'module'
  },
  env: {
    browser: true,
    node: true,
    es6: true,
  },
  // global vars
  globals: {
    ga: true, // Google Analytics
    cordova: true,
    __statics: true,
    process: true,
    Capacitor: true,
    chrome: true
  },
  plugins: [
    // https://eslint.vuejs.org/user-guide/#why-doesn-t-it-work-on-vue-file
    // required to lint *.vue files
    'vue',
  ],
  extends: ['plugin:vue/recommended', 'eslint:recommended'],
  // it is base on https://github.com/vuejs/eslint-config-vue
  rules: {
    "vue/max-attributes-per-line": [2, {
      "singleline": 10,
      "multiline": {
        "max": 1,
        "allowFirstLine": false
      }
    }],
    "vue/name-property-casing": ["error", "kebab-case"],
    "vue/no-v-html": "off",
    "vue/singleline-html-element-content-newline": "off",
    "vue/prop-name-casing": ["error", "snake_case"],
    "vue/html-quotes": [ "error", "single", { "avoidEscape": true } ],
    "vue/component-name-in-template-casing": ["error", "kebab-case", {
      "registeredComponentsOnly": false,
      "ignores": ["/^q-/"]
    }],
    "vue/match-component-file-name": ["error", {
      "extensions": ["vue"],
      "shouldMatchCase": false
    }],
    // 
    'no-unused-vars': [2, {
      'vars': 'all',
      'args': 'none' // all || none
    }],
    // 
    'no-extra-parens': [2, 'functions'],
    'no-await-in-loop': 2,          
    'array-callback-return': 2,      // array 方法一定有return
    'consistent-return': 2,          // 函数一定有return值
    'default-case': 2,               // 强制switch 有 default

    // fixable
    'curly': [2, 'multi-or-nest'],   // 函数体只有一行没有花括号
    'dot-location': [2, 'property'], // 点操作符前后一致
    'dot-notation': 2 ,             // 尽可能的使用.号来获取值
    'eqeqeq': ["error", "always", {"null": "always"}], // 三等号
    'no-else-return': 2,             // 没有 else了
    'no-implicit-coercion': 2,       // 数据类型转换
    'array-bracket-newline': [2,{ multiline: true,minItems: 5 }],
    'array-bracket-spacing': [2],
    'array-element-newline': [2],
    'block-spacing': [2], 
    'brace-style': [2, 'stroustrup', {
      'allowSingleLine': true
    }], // if else if 风格
    'comma-dangle': [2], // 尾末逗号
    'comma-spacing': [2], // 逗号前后空格
    'comma-style': [2], // 一致的逗号风格
    'computed-property-spacing': [2], // 计算属性无空格
    'eol-last': [2], // 文末一空行 
    'func-call-spacing': [2],// 禁止在函数名和开括号之间有空格
    'function-paren-newline': [2, 'consistent'], // 函数参数换行
    'yoda': [2], // === !== 中 对象总在字面量前
    'keyword-spacing': [2], // 关键字空格
    'key-spacing': [2, {"align": "colon"}], // 对象 key value 排版

    'accessor-pairs': 2,
    'arrow-spacing': [2, {  
      'before': true,
      'after': true
    }],
    'camelcase': [0, {
      'properties': 'always'
    }],
    'constructor-super': 2,

    'generator-star-spacing': [2, {
      'before': true,
      'after': true
    }],
    'handle-callback-err': [2, '^(err|error)$'],
    'indent': [2, 2, {
      'SwitchCase': 1
    }],
    'jsx-quotes': [2, 'prefer-single'],
    'new-cap': [2, {
      'newIsCap': true,
      'capIsNew': false
    }],

    'new-parens': 2,
    'no-array-constructor': 2,
    'no-caller': 2,
    'no-class-assign': 2,
    'no-cond-assign': 2,
    'no-const-assign': 2,
    'no-control-regex': 0,
    'no-dupe-args': 2,
    'no-dupe-class-members': 2,
    'no-dupe-keys': 2,
    'no-duplicate-case': 2,
    'no-empty-character-class': 2,
    'no-eval': 2,
    'no-ex-assign': 2,
    'no-extend-native': 2, 
    'no-extra-bind': 2,
    'no-extra-label': 2,
    'no-extra-boolean-cast': 2,
    'no-floating-decimal': 2,
    'no-func-assign': 2,
    'no-implied-eval': 2,
    'no-inner-declarations': [2, 'functions'],
    'no-invalid-regexp': 2,
    'no-irregular-whitespace': 2,
    'no-iterator': 2,
    'no-label-var': 2,
    'no-labels': [2, {
      'allowLoop': false,
      'allowSwitch': false
    }],
    'no-lone-blocks': 2,
    'no-mixed-spaces-and-tabs': 2,
    'no-multi-spaces': 2,
    'no-multi-str': 2,
    'no-multiple-empty-lines': [2, {
      'max': 1
    }],
    'no-native-reassign': 2,
    'no-negated-in-lhs': 2,
    'no-new-object': 2,
    'no-new-require': 2,
    'no-new-symbol': 2,
    'no-new-wrappers': 2,
    'no-obj-calls': 2,
    'no-octal-escape': 2,
    'no-path-concat': 2,
    'no-proto': 2,
    'no-regex-spaces': 2,
    'no-return-assign': [2, 'except-parens'],
    'no-self-compare': 2,
    'no-sequences': 2,
    'no-spaced-func': 2,
    'no-sparse-arrays': 2,
    'no-this-before-super': 2,
    'no-throw-literal': 2,
    'no-trailing-spaces': 2,
    'no-undef-init': 2,
    'no-unexpected-multiline': 2,
    'no-unmodified-loop-condition': 2,
    'no-unneeded-ternary': [2, {
      'defaultAssignment': false
    }],
    'no-unreachable': 2,
    'no-unsafe-finally': 2,
    'no-useless-call': 2,
    'no-useless-computed-key': 2,
    'no-useless-constructor': 2,
    'no-useless-escape': 0,
    'no-whitespace-before-property': 2,
    'no-with': 2,
    'one-var': [2, {
      'initialized': 'never'
    }],
    'operator-linebreak': [2, 'after', {
      'overrides': {
        '?': 'before',
        ':': 'before'
      }
    }],
    'padded-blocks': [2, 'never'],
    'quotes': [2, 'single', {
      'avoidEscape': true,
      'allowTemplateLiterals': true
    }],
    'semi': [2, 'never'],
    'semi-spacing': [2, {
      'before': false,
      'after': true
    }],
    'space-before-blocks': [2, 'always'],
    'space-before-function-paren': [2, 'never'],
    'space-in-parens': [2, 'never'],
    'space-infix-ops': 2,
    'space-unary-ops': [2, {
      'words': true,
      'nonwords': false
    }],
    'spaced-comment': [2, 'always', {
      'markers': ['global', 'globals', 'eslint', 'eslint-disable', '*package', '!', ',']
    }],
    'template-curly-spacing': [2, 'never'],
    'use-isnan': 2,
    'valid-typeof': 2,
    'wrap-iife': [2, 'any'],
    'yield-star-spacing': [2, 'both'],
    'prefer-const': 2,
    'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0,
    'object-curly-spacing': [2, 'always', {
      objectsInObjects: false
    }],
    
  }
}
