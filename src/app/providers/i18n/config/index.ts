import { createI18n } from 'vue-i18n'
import { loadLocaleMessages, EnumLanguageLocales } from '../utils'

export const setupI18n = async (locale: EnumLanguageLocales) => {
  const i18n = createI18n({
    legacy: false,
    locale,
    fallbackLocale: EnumLanguageLocales.EN,
    messages: {
      [locale]: await loadLocaleMessages(locale),
    },
  })

  return i18n
}
