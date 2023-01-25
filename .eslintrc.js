module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  plugins: ['react', '@typescript-eslint'],
  extends: [
    'plugin:react/recommended',
    'next',
    'next/core-web-vitals',
    'standard',
    'prettier',
    'plugin:@yonycalsin/import-sort/react',
  ],
  parser: '@typescript-eslint/parser',
  overrides: [],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
    project: './tsconfig.json',
  },
  rules: {
    'react/react-in-jsx-scope': 'off',
    '@typescript-eslint/no-unused-vars': 'off',
    'react/no-children-prop': 'off',
    '@typescript-eslint/dot-notation': 'error',
  },
  ignorePatterns: ['**/*.js'],
}
