import { InlineConfig } from 'vitest/node'
import { IBuildVitestPaths } from './types/config'

export function buildTest(paths: IBuildVitestPaths): InlineConfig {
  return {
    environment: 'jsdom',
    setupFiles: './test/setup.ts',
    globals: true,
    coverage: {
      provider: 'v8',
      reporter: ['text', 'html'],
    },
    include: ['**/*.test.ts'],
    exclude: ['node_modules'],
    alias: {
      '@': paths.src,
    },
    reporters: ['default'],
    clearMocks: true,
  }
}
