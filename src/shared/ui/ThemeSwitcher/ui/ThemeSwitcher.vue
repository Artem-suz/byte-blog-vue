<template>
  <button class="theme-switcher" @click="toggleTheme">
    <LightIcon v-if="theme === THEME.LIGHT" />
    <DarkIcon v-else />
  </button>
</template>

<script lang="ts" setup>
  import { inject } from 'vue'

  import { PROVIDE_THEME_KEY, PROVIDE_TOGGLE_THEME_KEY } from '@/app/providers/theme/symbols'
  import { THEME } from '@/app/providers/theme/lib/types'

  import LightIcon from './assets/i-light-theme-switcher.svg'
  import DarkIcon from './assets/i-dark-theme-switcher.svg'

  const theme = inject(PROVIDE_THEME_KEY)
  const toggleTheme = inject(PROVIDE_TOGGLE_THEME_KEY)
</script>
