import type { UserConfig } from 'vite'
import { buildPlugins } from './buildPlugins.ts'
import { buildResolvers } from './buildResolvers.ts'
import { buildEnvironmentOptions } from './buildEnvironmentOptions.ts'

import type { IBuildOptions } from './types/config.ts'

export function buildViteConfig(options: IBuildOptions): UserConfig {
  return {
    plugins: buildPlugins(),
    resolve: buildResolvers(options),
    build: buildEnvironmentOptions(),
  }
}
