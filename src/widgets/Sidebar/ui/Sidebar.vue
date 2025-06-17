<template>
  <div
    class="sidebar el-flex flex-dir-col justify-between align-center"
    :class="{ collapsed: isCollapsed }"
  >
    <button class="sidebar__toggle-button" type="button" @click="toggleSidebar">TOGGLE</button>

    <nav class="sidebar__nav">
      <ul class="sidebar__nav-list">
        <li class="sidebar__nav-list-item">
          <router-link class="sidebar__nav-list-item-link" :to="{ name: AppRoutesName.ABOUT_PAGE }">
            ABOUT
          </router-link>
        </li>
        <li class="sidebar__nav-list-item">
          <router-link class="sidebar__nav-list-item-link" :to="{ name: AppRoutesName.HOME_PAGE }">
            HOME
          </router-link>
        </li>
      </ul>
    </nav>

    <div class="sidebar__switchers el-flex justify-center">
      <ThemeSwitcher />
    </div>
  </div>
</template>

<script setup lang="ts">
  import { ref } from 'vue'
  import { AppRoutesName } from '@/app/providers/router/config'
  import ThemeSwitcher from '@/shared/assets/ui/ThemeSwitcher/ThemeSwitcher.vue'

  const isCollapsed = ref(true)
  function toggleSidebar() {
    isCollapsed.value = !isCollapsed.value
  }
</script>

<style lang="scss">
  .sidebar {
    height: 100vh;
    width: var(--sidebar-width);
    background-color: var(--inverted-bg-color);
    position: relative;
    transition: width 0.3s;

    &.collapsed {
      width: var(--sidebar-width-collapsed);
    }

    &__toggle-button {
      position: absolute;
      top: 20px;
    }

    &__nav {
      position: absolute;
      top: 100px;
      width: 100%;
    }

    &__nav-list-item-link {
      display: block;
      padding: 8px 16px 8px 16px;
    }

    &__switchers {
      position: absolute;
      bottom: 40px;
      gap: 18px;
      width: 100%;
    }
  }
</style>
