<template>
  <div
    class="page-error height-100 el-flex flex-dir-col align-center justify-center el-flex-gap--12"
  >
    <h1 class="el-text-title">{{ $t('error-page-title') }}</h1>

    <PrimaryButton @click="emitGoBack">{{ $t('button-back') }}</PrimaryButton>
  </div>
</template>

<script setup>
  import { defineEmits } from 'vue'
  import PrimaryButton from '@/shared/ui/Button/PrimaryButton'

  const emit = defineEmits(['go-back'])
  function emitGoBack() {
    emit('go-back')
  }
</script>

<style></style>
