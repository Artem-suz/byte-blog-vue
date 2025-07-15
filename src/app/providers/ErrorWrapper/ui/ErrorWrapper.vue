<template>
  <div class="error-wrapper">
    <PageError v-if="hasError" @go-back="onGoBack" />
    <slot v-else />
  </div>
</template>

<script setup lang="ts">
  import { onErrorCaptured, ref } from 'vue'
  import { useRouter } from 'vue-router'
  import PageError from '@/widgets/PageError'
  import { AppRoutesName } from '@/app/providers/router/config/types'

  const hasError = ref(false)
  function setDisplayPageError(isError: boolean) {
    hasError.value = isError
  }

  onErrorCaptured((err, _vm, info) => {
    setDisplayPageError(true)
    console.error(info, err)

    return false
  })

  const route = useRouter()
  function onGoBack() {
    route.push({ name: AppRoutesName.HOME_PAGE })
    setTimeout(() => setDisplayPageError(false), 0)
  }
</script>

<style lang="scss">
  .error-wrapper {
    flex-grow: 1;
  }
</style>
