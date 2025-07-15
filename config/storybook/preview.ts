import type { Preview } from '@storybook/vue3-vite'
import { StyleDecorator } from '@/shared/utils/StyleDecorator'

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },

  decorators: [StyleDecorator],
}

export default preview
