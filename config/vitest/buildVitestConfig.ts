import { buildTest } from './buildTest'
import { IBuildVitestOptions } from './types/config'
import { ViteUserConfig } from 'vitest/config'

export function buildVitestConfig(options: IBuildVitestOptions): ViteUserConfig {
  return {
    test: buildTest(options.paths),
  }
}
