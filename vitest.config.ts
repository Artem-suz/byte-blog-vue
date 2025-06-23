import { mergeConfig } from 'vite'
import { defineConfig } from 'vitest/config'
import viteConfig, { paths } from './vite.config'
import { buildVitestConfig } from './config/vitest/buildVitestConfig'

export default () => {
  const vitestConfig = buildVitestConfig({ paths })

  return mergeConfig(viteConfig(), defineConfig(vitestConfig))
}
