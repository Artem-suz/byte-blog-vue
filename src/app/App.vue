<script setup>
  import './index.scss'
</script>

<template>
  <router-link :to="{ name: 'about' }">about</router-link>
  <router-link :to="{ name: 'main' }">main</router-link>
  <router-view />
</template>
