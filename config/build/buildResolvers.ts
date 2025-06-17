import type { IBuildOptions } from './types/config.ts'
import path from 'node:path'

export function buildResolvers(options: IBuildOptions) {
  return {
    alias: {
      '@': path.resolve(options.paths.src),
    },
  }
}
