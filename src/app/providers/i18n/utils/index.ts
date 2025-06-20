export enum EnumLanguageLocales {
  RU = 'ru',
  EN = 'en',
}

export async function loadLocaleMessages(locale: string) {
  const messages = await import(`@/shared/i18n/locales/${locale}.json`)

  return messages.default
}
