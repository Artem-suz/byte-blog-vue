import vue from '@vitejs/plugin-vue'
import svgLoader from 'vite-svg-loader'

export function buildPlugins() {
  return [vue(), svgLoader()]
}
