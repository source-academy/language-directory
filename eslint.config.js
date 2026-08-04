// @ts-check
import { defineConfig } from 'eslint/config';
import eslint from '@eslint/js';
import tseslint from 'typescript-eslint';
import stylistic from '@stylistic/eslint-plugin';
import vitest from '@vitest/eslint-plugin';

export default defineConfig(
  {
    // Global ignores
    ignores: ['**/dist', '.yarn/**', '.pnp.*']
  },
  eslint.configs.recommended,
  {
    files: ['**/*.{js,ts,tsx}'],
    plugins: {
      '@stylistic': stylistic
    },
    rules: {
      'no-undef': 'off', // was error
      'prefer-const': 'error',

      '@stylistic/eol-last': 'warn',
      '@stylistic/indent': ['warn', 2, { SwitchCase: 1 }],
      '@stylistic/no-multiple-empty-lines': ['warn', { max: 1, maxEOF: 0 }],
      '@stylistic/no-multi-spaces': ['warn', { ignoreEOLComments: true }],
      '@stylistic/no-tabs': 'error',
      '@stylistic/no-trailing-spaces': 'warn',
      '@stylistic/quotes': ['warn', 'single'],
      '@stylistic/semi': ['warn', 'always'],
    }
  },
  {
    files: ['**/*.{ts,tsx}'],
    extends: [tseslint.configs.recommended],
    languageOptions: {
      parser: tseslint.parser,
      parserOptions: {
        projectService: {
          allowDefaultProject: [
            'language-dir/vitest.config.ts',
            'tester/vite.config.ts'
          ],
        },
        tsconfigRootDir: import.meta.dirname,
      }
    },
    rules: {
      '@typescript-eslint/consistent-type-assertions': ['warn', { assertionStyle: 'as' }],
      '@typescript-eslint/no-explicit-any': 'off', // was error
      '@typescript-eslint/no-import-type-side-effects': 'error',
      '@typescript-eslint/no-unnecessary-type-assertion': 'error',
      '@typescript-eslint/no-unused-vars': ['warn', { argsIgnorePattern: '^_' }],
      '@typescript-eslint/only-throw-error': 'error',
    }
  },
  {
    files: ['**/*.test.ts'],
    extends: [vitest.configs.recommended]
  }
);
