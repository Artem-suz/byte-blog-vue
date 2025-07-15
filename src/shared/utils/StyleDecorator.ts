import '@/app/index.scss'
import type { StoryFn } from '@storybook/vue3-vite'

export const StyleDecorator = (story: () => StoryFn) => story()
