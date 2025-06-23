import { defineConfig } from 'vite'
import { buildViteConfig } from './config/build/buildViteConfig'
import type { IBuildPaths } from './config/build/types/config'
import path from 'path'

export const paths: IBuildPaths = {
  entry: path.resolve(__dirname, 'src', 'app', 'index.ts'),
  build: path.resolve(__dirname, 'build'),
  src: path.resolve(__dirname, 'src'),
}

export default () => {
  const config = buildViteConfig({ paths })

  return defineConfig(config)
}
