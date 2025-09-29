<template>
  <div class="sidebar el-flex justify-between align-center" :class="{ collapsed: isCollapsed }">
    <div class="el-flex flex-dir-col">
      <nav class="sidebar__nav">
        <ul class="sidebar__nav-list">
          <li class="sidebar__nav-list-item active">
            <router-link
              class="sidebar__nav-list-item-link el-flex el-flex-gap--12"
              :to="{ name: AppRoutesName.HOME_PAGE }"
            >
              <HomeIcon class="icon" />
              <Transition name="fade-left">
                <p v-show="!isCollapsed">{{ $t('sidebar-home') }}</p>
              </Transition>
            </router-link>
          </li>

          <li class="sidebar__nav-list-item">
            <router-link
              class="sidebar__nav-list-item-link el-flex el-flex-gap--12"
              :to="{ name: AppRoutesName.ABOUT_PAGE }"
            >
              <InfoIcon class="icon" />
              <Transition name="fade-left">
                <p v-show="!isCollapsed">{{ $t('sidebar-about-us') }}</p>
              </Transition>
            </router-link>
          </li>

          <li class="sidebar__nav-list-item">
            <router-link
              class="sidebar__nav-list-item-link el-flex el-flex-gap--12"
              :to="{ name: AppRoutesName.HOME_PAGE }"
            >
              <AvatarIcon class="icon" />
              <Transition name="fade-left">
                <p v-show="!isCollapsed">{{ $t('sidebar-profile') }}</p>
              </Transition>
            </router-link>
          </li>

          <li class="sidebar__nav-list-item">
            <router-link
              class="sidebar__nav-list-item-link el-flex el-flex-gap--12"
              :to="{ name: AppRoutesName.HOME_PAGE }"
            >
              <PaperIcon class="icon" />
              <Transition name="fade-left">
                <p v-show="!isCollapsed">{{ $t('sidebar-articles') }}</p>
              </Transition>
            </router-link>
          </li>
        </ul>
      </nav>

      <div
        class="sidebar__switchers el-flex justify-center align-center"
        :class="{ 'flex-dir-col-reverse': isCollapsed }"
      >
        <ThemeSwitcher />
        <LangSwitcher />
      </div>
    </div>

    <button class="sidebar__toggle-button pl-12 pr-12" type="button" @click="toggleSidebar">
      <ArrowIcon class="icon" />
    </button>
  </div>
</template>

<script setup lang="ts">
  import { ref } from 'vue'
  import { AppRoutesName } from '@/app/providers/router/config/types'

  import ThemeSwitcher from '@/shared/ui/ThemeSwitcher'
  import LangSwitcher from '@/shared/ui/LangSwitcher'
  import ArrowIcon from '@/shared/assets/icons/i-arrow.svg'
  import AvatarIcon from '@/shared/assets/icons/i-avatar.svg'
  import HomeIcon from '@/shared/assets/icons/i-home.svg'
  import InfoIcon from '@/shared/assets/icons/i-info.svg'
  import PaperIcon from '@/shared/assets/icons/i-paper.svg'

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
    overflow: hidden;

    &.collapsed {
      width: var(--sidebar-width-collapsed);

      & .sidebar__toggle-button .icon {
        transform: rotate(180deg);
      }
    }

    &__toggle-button {
      height: 100%;
      &:hover {
        background: linear-gradient(to left, var(--accent), 5%, rgba(0, 0, 0, 0));
      }
    }

    &__nav {
      position: absolute;
      top: 100px;
      width: 100%;
    }

    &__nav-list-item {
      position: relative;
      height: 40px;
    }

    &__nav-list-item:hover,
    &__nav-list-item.active {
      color: var(--accent);
      background: linear-gradient(to right, var(--accent), 5%, rgba(0, 0, 0, 0));
      &::before {
        content: '';
        position: absolute;
        width: 3px;
        height: 100%;
        left: 0px;
        background: currentColor;
      }
    }

    &__nav-list-item-link {
      padding: 8px 16px 8px 16px;
    }

    &__nav-list-item-link .icon {
      width: 20px;
    }

    &__switchers {
      position: absolute;
      bottom: 40px;
      gap: 18px;
      width: 100%;
    }
  }
</style>
