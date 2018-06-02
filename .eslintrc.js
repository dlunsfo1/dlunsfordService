module.exports = {
  extends: ['airbnb-base', 'plugin:jest/recommended'],
  plugins: ['import', 'jest'],
  env: {
    node: true,
    'jest/globals': true
  }
};
