import vue from '@vitejs/plugin-vue'
import type { PluginOption } from 'vite'
import svgLoader from 'vite-svg-loader'

export function buildPlugins(): PluginOption[] {
  return [vue(), svgLoader()]
}
