import { app } from '../core'
import { useTheme } from './lib/useTheme'
import { PROVIDE_THEME_KEY, PROVIDE_TOGGLE_THEME_KEY } from './symbols'

const { theme, toggleTheme } = useTheme()

app.provide(PROVIDE_THEME_KEY, theme)
app.provide(PROVIDE_TOGGLE_THEME_KEY, toggleTheme)
