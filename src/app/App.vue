<template>
  <div class="app" :class="theme">
    <router-view />
  </div>
</template>

<script setup lang="ts">
  import { inject } from 'vue'
  import './index.scss'
  import { PROVIDE_THEME_KEY } from '@/app/providers/theme/symbols'

  const theme = inject(PROVIDE_THEME_KEY)
</script>
