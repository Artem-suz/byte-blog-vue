import { config } from '@vue/test-utils'
import { vi } from 'vitest'
import { h } from 'vue'

// Глобальные компоненты-заглушки (stubs)
config.global.stubs = {
  Transition: false,
  TransitionGroup: false,
  RouterLink: true, // Заглушка для vue-router
}

// Глобальные моки
vi.mock('vue-router', () => ({
  useRoute: vi.fn(),
  useRouter: vi.fn(() => ({
    push: vi.fn(),
  })),
}))

// Мок для i18n
vi.mock('vue-i18n', () => ({
  useI18n: () => ({
    t: (key: string) => key,
  }),
}))

vi.mock('^.*\\.(svg|png|jpg)$', () => ({
  default: h('div'), // Возвращаем пустой компонент
}))
