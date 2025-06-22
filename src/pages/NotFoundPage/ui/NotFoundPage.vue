<template>
  <main class="not-found-page el-flex flex-dir-col align-center justify-center el-flex-gap--12">
    <h1 class="el-text-title">{{ $t('not-found-page-title') }}</h1>

    <PrimaryButton @click="onGoBack">{{ $t('button-back') }}</PrimaryButton>
  </main>
</template>

<script setup lang="ts">
  import { useRouter } from 'vue-router'
  import PrimaryButton from '@/shared/ui/Button/PrimaryButton'

  const route = useRouter()
  function onGoBack() {
    route.back()
  }
</script>

<style lang="scss">
  .not-found-page {
    height: 100vh;
  }
</style>
