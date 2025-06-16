import type { InjectionKey, Ref } from 'vue'
import { THEME } from './lib/types'

export const PROVIDE_THEME_KEY = Symbol('theme') as InjectionKey<Ref<THEME>>
export const PROVIDE_TOGGLE_THEME_KEY = Symbol('toggleTheme') as InjectionKey<() => void>
