import { type Ref } from 'vue'

export enum THEME {
  LIGHT = 'light',
  DARK = 'dark',
}

export interface IUseTheme {
  toggleTheme: () => void
  theme: Ref<THEME, THEME>
}
