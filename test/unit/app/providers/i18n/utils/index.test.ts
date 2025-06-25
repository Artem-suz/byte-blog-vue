import { it, describe, expect } from 'vitest'
import { loadLocaleMessages } from '@/app/providers/i18n/utils'

describe('loadLocaleMessages', () => {
  it('Загружает актуальный словарь на английском языке', async () => {
    const result = await loadLocaleMessages('en')
    expect(result).toHaveProperty('sidebar-home')
  })
  it('Загружает актуальный словарь на русском языке', async () => {
    const result = await loadLocaleMessages('ru')
    expect(result).toHaveProperty('sidebar-home')
  })
})
