import { defineConfig } from 'tsdown/config';

export default defineConfig({
  entry: ['src/**/*.ts', '!src/**/*.test.ts'],
  format: 'esm',
  dts: {
    isolatedDeclarations: true,
  },
  clean: true,
  platform: 'neutral',
});
