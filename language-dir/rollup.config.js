// @ts-check

import { defineConfig } from 'rollup';
import terser from '@rollup/plugin-terser';
import typescript from '@rollup/plugin-typescript';

export default defineConfig({
  plugins: [
    typescript({
      exclude: ['**/__tests__/**']
    })
  ],
  input: 'src/index.ts',
  output: {
    plugins: [terser()],
    dir: 'dist',
    format: 'es',
    sourcemap: true,
  }
});
