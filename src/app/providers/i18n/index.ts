import { app } from '../core'
import { setupI18n } from './config'
import { EnumLanguageLocales } from '@/app/providers/i18n/utils'
import { LOCAL_STORAGE_LANG_KEY } from '@/shared/composables/useLanguageSwitcher'

const initLangLocale =
  (localStorage.getItem(LOCAL_STORAGE_LANG_KEY) as EnumLanguageLocales) || EnumLanguageLocales.RU

setupI18n(initLangLocale).then((i18n) => app.use(i18n))
