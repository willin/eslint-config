module.exports = {
  parser: '@typescript-eslint/parser',
  extends: [
    'airbnb-base',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
    // 'plugin:@typescript-eslint/recommended-requiring-type-checking',
    'prettier',
    'prettier/@typescript-eslint'
  ],
  env: {
    node: true,
    es6: true
  },
  parserOptions: {
    ecmaVersion: 2020
  },
  settings: {
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts']
    },
    'import/resolver': {
      node: {
        extensions: ['.js', '.ts']
      }
    }
  },
  rules: {
    quotes: [2, 'single'],
    semi: 2,
    'object-curly-newline': 0,
    'no-bitwise': 0,
    'arrow-body-style': [2, 'as-needed'],
    'comma-dangle': [2, 'never'],
    'consistent-return': 1,
    'max-len': [1, 150, 2],
    'newline-per-chained-call': 0,
    'no-console': 1,
    'no-mixed-operators': [
      2,
      {
        groups: [
          ['&', '|', '^', '~', '<<', '>>', '>>>'],
          ['&&', '||']
        ],
        allowSamePrecedence: true
      }
    ],
    'no-param-reassign': 2,
    'no-underscore-dangle': [
      2,
      { allowAfterThis: true, allowAfterSuper: false }
    ],
    'object-curly-spacing': 2,
    'spaced-comment': [2, 'always', { markers: ['/'] }],
    '@typescript-eslint/explicit-function-return-type': 2,
    '@typescript-eslint/no-explicit-any': 1,
    '@typescript-eslint/no-unused-vars': 2,
    '@typescript-eslint/typedef': 2
  }
};
