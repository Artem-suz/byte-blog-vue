import type { Meta, StoryObj } from '@storybook/vue3-vite'
import { THEME } from '@/app/providers/theme/lib/types'
import PrimaryButton from './PrimaryButton.vue'

type Story = StoryObj<typeof PrimaryButton>

const meta = {
  title: 'Shared/Buttons/PrimaryButton',
  component: PrimaryButton,
  tags: ['autodocs'],
  argTypes: {
    theme: {
      control: 'radio',
      options: [THEME.LIGHT, THEME.DARK],
    },
  },
} satisfies Meta<typeof PrimaryButton>

export default meta

// Базовый шаблон для переиспользования
const Template: Story = {
  render: (args) => ({
    components: { PrimaryButton },
    setup() {
      return { args }
    },
    template:
      '<div class="app" :class="args.theme"> <PrimaryButton v-bind="args">{{ args.label || "Click me" }}</PrimaryButton> </div>',
  }),
}

// История по умолчанию
export const Default: Story = {
  ...Template,
  args: {
    label: 'PrimaryButton',
    theme: THEME.LIGHT,
  },
}
