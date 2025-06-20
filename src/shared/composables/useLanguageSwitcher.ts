import { useI18n } from 'vue-i18n'
import { loadLocaleMessages, EnumLanguageLocales } from '@/app/providers/i18n/utils'

export function useLanguageSwitcher() {
  const { locale, availableLocales, setLocaleMessage } = useI18n()

  async function changeLanguage(newlocale: EnumLanguageLocales) {
    if (!availableLocales.includes(newlocale)) {
      const messages = await loadLocaleMessages(newlocale)
      setLocaleMessage(newlocale, messages)
    }

    locale.value = newlocale
  }

  return { changeLanguage }
}
