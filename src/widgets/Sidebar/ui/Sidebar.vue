<template>
  <div
    class="sidebar el-flex flex-dir-col justify-between align-center"
    :class="{ collapsed: isCollapsed }"
  >
    <button class="sidebar__toggle-button" type="button" @click="toggleSidebar">TOGGLE</button>

    <nav class="sidebar__nav">
      <ul class="sidebar__nav-list">
        <li class="sidebar__nav-list-item">
          <router-link class="sidebar__nav-list-item-link" :to="{ name: AppRoutesName.HOME_PAGE }">
            <p>{{ $t('sidebar-home') }}</p>
          </router-link>
        </li>
        <li class="sidebar__nav-list-item">
          <router-link class="sidebar__nav-list-item-link" :to="{ name: AppRoutesName.ABOUT_PAGE }">
            <p>{{ $t('sidebar-about-us') }}</p>
          </router-link>
        </li>
      </ul>
    </nav>

    <div class="sidebar__switchers el-flex justify-center">
      <ThemeSwitcher />
      <LangSwitcher />
    </div>
  </div>
</template>

<script setup lang="ts">
  import { ref } from 'vue'
  import { AppRoutesName } from '@/app/providers/router/config/types'

  import ThemeSwitcher from '@/shared/ui/ThemeSwitcher'
  import LangSwitcher from '@/shared/ui/LangSwitcher'

  const isCollapsed = ref(true)
  function toggleSidebar() {
    isCollapsed.value = !isCollapsed.value
  }
</script>

<style lang="scss">
  .sidebar {
    height: 100vh;
    width: var(--sidebar-width);
    background-color: var(--light-bg);
    position: relative;
    transition: width 0.3s;
    border-radius: 0 16px 16px 0;

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
