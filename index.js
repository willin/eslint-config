module.exports = {
  parser: '@typescript-eslint/parser',
  extends: [
    'airbnb-base',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
    // 'plugin:@typescript-eslint/recommended-requiring-type-checking',
    'prettier'
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
    'import/extensions': [2, 'ignorePackages', { js: 'never', jsx: 'never', ts: 'never', tsx: 'never' }],
    quotes: [2, 'single', { avoidEscape: true }],
    semi: 2,
    'object-curly-newline': 0,
    'no-bitwise': 0,
    'arrow-body-style': [2, 'as-needed'],
    'comma-dangle': [2, 'never'],
    'consistent-return': 1,
    'max-len': [1, 120, 2],
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
    'no-underscore-dangle': [2, { allowAfterThis: true, allowAfterSuper: false }],
    'object-curly-spacing': 2,
    'spaced-comment': [2, 'always', { markers: ['/'] }],
    'class-methods-use-this': 1,
    'import/prefer-default-export': 0,
    '@typescript-eslint/explicit-function-return-type': 2,
    '@typescript-eslint/no-explicit-any': 1,
    '@typescript-eslint/no-unused-vars': 2,
    '@typescript-eslint/typedef': 2
  }
};
