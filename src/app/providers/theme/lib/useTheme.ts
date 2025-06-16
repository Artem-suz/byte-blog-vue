import { ref } from 'vue'
import { type IUseTheme, THEME } from './types'

const LOCAL_STORAGE_THEME_KEY = 'theme'
const initThemeValue = (localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as THEME) || THEME.LIGHT

export function useTheme(): IUseTheme {
  const theme = ref(initThemeValue)

  function toggleTheme() {
    const newTheme = theme.value === THEME.LIGHT ? THEME.DARK : THEME.LIGHT

    theme.value = newTheme

    localStorage.setItem(LOCAL_STORAGE_THEME_KEY, newTheme)
  }

  return { theme, toggleTheme }
}
