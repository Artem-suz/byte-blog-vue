import type { ResolveOptions, AliasOptions } from 'vite'
import type { IBuildOptions } from './types/config'
import path from 'node:path'

// Локальное объявление т.к не вытащить из node_modules
type AllResolveOptions = ResolveOptions & {
  alias?: AliasOptions
}

export function buildResolvers(options: IBuildOptions): AllResolveOptions {
  return {
    extensions: ['.js', '.ts', '.vue', '.json'],
    alias: {
      '@': path.resolve(options.paths.src),
    },
  }
}
