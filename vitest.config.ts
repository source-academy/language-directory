import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    environment: 'happy-dom',
    name: 'language-directory',
    include: [
      'src/**/__tests__/**/*.test.ts',
    ],
  }
});
