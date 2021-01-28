module.exports = {
  parser: 'babel-eslint',
  extends: ['codfish', 'airbnb', 'plugin:jsx-a11y/recommended'],
  root: true,
  rules: {
    // temp
    'react/jsx-props-no-spreading': 'off',
    'import/no-unresolved': 'off',
    // airbnb says yes but react team says no...defer to react team
    'react/jsx-filename-extension': 'off',
    // jsx-ally specific
    'jsx-a11y/click-events-have-key-events': 'off',
    'operator-linebreak': 'off',
    'arrow-parens': ['error', 'as-needed'],
    'object-curly-newline': 'off',
    'react/prop-types': [2, { ignore: ['children'] }],
    'implicit-arrow-linebreak': 'off',
    'no-underscore-dangle': 'off',
    'import/prefer-default-export': 'off',
    'no-unused-expressions': ["error", { "allowTernary": true }],
    "template-curly-spacing" : "off",
    "indent" : "off",
    "function-paren-newline": "off"
  },
};
