<template>
  <div class="app" :class="theme">
    <ThemeSwitcher />
    <router-link :to="{ name: 'about' }">about</router-link>
    <router-link :to="{ name: 'main' }">main</router-link>

    <router-view />
  </div>
</template>

<script setup>
  import { inject } from 'vue'
  import './index.scss'

  import { PROVIDE_THEME_KEY } from '@/app/providers/theme/symbols'

  import ThemeSwitcher from '@/shared/assets/ui/ThemeSwitcher/ThemeSwitcher.vue'

  const theme = inject(PROVIDE_THEME_KEY)
</script>
