import type { UserConfig } from 'vite'
import { buildPlugins } from './buildPlugins'
import { buildResolvers } from './buildResolvers'
import { buildEnvironmentOptions } from './buildEnvironmentOptions'

import type { IBuildOptions } from './types/config'

export function buildViteConfig(options: IBuildOptions): UserConfig {
  return {
    plugins: buildPlugins(),
    resolve: buildResolvers(options),
    build: buildEnvironmentOptions(),
  }
}
