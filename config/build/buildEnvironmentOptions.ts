import type { BuildEnvironmentOptions } from 'vite'

export function buildEnvironmentOptions(): BuildEnvironmentOptions {
  return {
    rollupOptions: {
      output: {
        manualChunks: (id) => {
          // Группируем чанки по названиям из динамических импортов
          if (id.includes('MainLayout')) {
            return 'main-layout'
          }
          if (id.includes('MainPage')) {
            return 'main-page'
          }
          if (id.includes('AboutPage')) {
            return 'about-page'
          }
          if (id.includes('NotFoundPage')) {
            return 'not-found-page'
          }
          // Остальные чанки попадают в vendor (если нужно)
          if (id.includes('node_modules')) {
            return 'vendor'
          }
        },
        chunkFileNames: 'assets/js/[name]-[hash].js',
        assetFileNames: 'assets/[ext]/[name]-[hash].[ext]',
        entryFileNames: 'assets/js/[name].js',
      },
    },
  }
}
