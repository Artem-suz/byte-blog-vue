/**
 * Тип для опций сборки
 */
export interface IBuildOptions {
  paths: IBuildPaths
}

/**
 * Тип для мода сборки
 */
export type BuildMode = 'production' | 'development'

/**
 * Тип путей
 */
export interface IBuildPaths {
  entry: string // входная точка в приложение
  build: string // точка выгруза билда
  src: string // путь для алиаса '@'
}
