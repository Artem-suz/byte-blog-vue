import type { StorybookConfig } from '@storybook/vue3-vite'
import { mergeConfig } from 'vite'
import tsconfigPaths from 'vite-tsconfig-paths'
import vue from '@vitejs/plugin-vue'
import path from 'path'

const config: StorybookConfig = {
  stories: ['../../src/**/*.stories.@(js|jsx|ts|tsx)'],

  framework: {
    name: '@storybook/vue3-vite',
    options: {},
  },

  async viteFinal(config) {
    return mergeConfig(config, {
      plugins: [tsconfigPaths(), vue()],
      resolve: {
        alias: {
          '@': path.resolve(__dirname, '../../src'),
        },
      },
    })
  },
}

export default config
