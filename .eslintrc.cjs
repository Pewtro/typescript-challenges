module.exports = {
  root: true,
  extends: ['@putstack/typescript'],
  parserOptions: {
    tsconfigRootDir: __dirname,
    project: ['./tsconfig.eslint.json'],
  },
  rules: {
    //cases in typescript-challenges are always unused
    '@typescript-eslint/no-unused-vars': ['error', { varsIgnorePattern: 'cases|error' }],
    //ts-expect-error is often used in typescript-challenges
    '@typescript-eslint/ban-ts-comment': ['error', { 'ts-expect-error': false }],
    '@typescript-eslint/ban-types': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
  },
};
