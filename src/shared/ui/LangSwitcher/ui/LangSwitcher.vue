<template>
  <div class="lang-switcher">
    <button type="button" @click="changeLanguageHandler">{{ textButton }}</button>
  </div>
</template>

<script setup>
  import { computed } from 'vue'
  import { useI18n } from 'vue-i18n'
  import { useLanguageSwitcher } from '@/shared/composables/useLanguageSwitcher'
  import { EnumLanguageLocales } from '@/app/providers/i18n/utils'

  const { locale } = useI18n()
  const { changeLanguage } = useLanguageSwitcher()

  const textButton = computed(() => locale.value.toLocaleUpperCase())
  function changeLanguageHandler() {
    changeLanguage(
      locale.value === EnumLanguageLocales.RU ? EnumLanguageLocales.EN : EnumLanguageLocales.RU,
    )
  }
</script>
