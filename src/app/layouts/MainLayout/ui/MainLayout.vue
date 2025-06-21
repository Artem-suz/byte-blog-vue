<template>
  <div class="main-layout el-flex">
    <router-view name="Sidebar" />

    <ErrorWrapper>
      <div class="page-wrapper">
        <router-view v-slot="{ Component }">
          <transition name="fade" mode="out-in">
            <component :is="Component" :key="$route.path" />
          </transition>
        </router-view>
      </div>
    </ErrorWrapper>
  </div>
</template>

<script setup>
  import ErrorWrapper from '@/app/providers/ErrorWrapper'
</script>
