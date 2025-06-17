import { defineConfig } from 'vite'
import { buildViteConfig } from './config/build/buildViteConfig.ts'
import type { IBuildPaths } from './config/build/types/config.ts'
import path from 'path'

const paths: IBuildPaths = {
  entry: path.resolve(__dirname, 'src', 'app', 'index.ts'),
  build: path.resolve(__dirname, 'build'),
  src: path.resolve(__dirname, 'src'),
}

export default () => {
  const config = buildViteConfig({ paths })

  return defineConfig(config)
}
