<template>
  <button class="primary-button" :class="theme" type="button">
    <slot v-if="$slots.default" />
    <div v-else>
      {{ props.label }}
    </div>
  </button>
</template>

<script setup lang="ts">
  import { inject, defineProps } from 'vue'
  import { PROVIDE_THEME_KEY } from '@/app/providers/theme/symbols'

  const props = defineProps<{
    label?: string
  }>()

  const theme = inject(PROVIDE_THEME_KEY)
</script>

<style lang="scss">
  .primary-button {
    padding: 8px 16px;
    border-radius: 6px;
    background-color: var(--accent);
    transition: 0.2s;
    color: var(--bg);
    &:hover {
      background-color: var(--accent-light);
    }
    &:active {
      background-color: var(--accent-dark);
    }
  }
</style>
