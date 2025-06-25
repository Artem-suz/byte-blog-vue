import { it, describe, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import PrimaryButton from '@/shared/ui/Button/PrimaryButton'
import { PROVIDE_THEME_KEY } from '@/app/providers/theme/symbols'

describe('PrimaryButton', () => {
  it('Рендер слота', () => {
    const wrapper = mount(PrimaryButton, {
      slots: {
        default: 'Click me',
      },
    })

    expect(wrapper.text()).toContain('Click me')
  })

  it('Наличие класса primary-button', () => {
    const wrapper = mount(PrimaryButton)
    expect(wrapper.classes()).toContain('primary-button')
  })

  it('Инъекция темы', () => {
    const theme = 'dark-theme'
    const wrapper = mount(PrimaryButton, {
      global: {
        provide: {
          [PROVIDE_THEME_KEY]: theme,
        },
      },
    })

    expect(wrapper.classes()).toContain(theme)
  })

  it('Наличие типа кнопки', () => {
    const wrapper = mount(PrimaryButton)
    expect(wrapper.attributes('type')).toBe('button')
  })
})
