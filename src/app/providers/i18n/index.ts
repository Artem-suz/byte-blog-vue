import { app } from '../core'
import { setupI18n } from './config'
import { EnumLanguageLocales } from '@/app/providers/i18n/utils'

setupI18n(EnumLanguageLocales.RU).then((i18n) => app.use(i18n))
