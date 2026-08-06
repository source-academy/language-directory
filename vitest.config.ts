import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    name: 'language-directory',
    include: ['src/**/__tests__/**/*.test.ts'],
  }
});
