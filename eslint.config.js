import putstack from '@putstack/eslint-config-typescript';
import tseslint from 'typescript-eslint';

export default tseslint.config(
  {
    ignores: ['**/coverage/**', '**/dist/**', '**/node_modules/**', '**/build/**', '!.prettierrc.js'],
  },
  {
    languageOptions: {
      parserOptions: {
        projectService: true,
        tsconfigRootDir: import.meta.dirname,
      },
    },
  },
  ...putstack.configs.recommended,
  {
    rules: {
      '@typescript-eslint/no-unused-vars': 'off',
      //ts-expect-error is often used in typescript-challenges
      '@typescript-eslint/ban-ts-comment': ['error', { 'ts-expect-error': false }],
      '@typescript-eslint/ban-types': 'off',
      '@typescript-eslint/no-explicit-any': 'off',
    },
  },
);
