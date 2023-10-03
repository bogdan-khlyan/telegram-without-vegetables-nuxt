<template>
  <div class="base-header">
    <div class="base-header__logo">
      <logo-icon/>
    </div>
    <div
        class="base-header__theme"
        @click="toggleTheme"
    >
      <moon-icon/>
    </div>
  </div>
</template>

<script setup>
import MoonIcon from '@/assets/images/moon-icon.svg'
import LogoIcon from '@/assets/images/logo-icon.svg'
import {globalState} from "@/api/global/global.state.js";

function toggleTheme() {
  globalState.theme = globalState.theme === 'default' ? 'dark' : 'default'
}
</script>

<style lang="scss" scoped>
.base-header {
  position: fixed;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-left: 20px;
  padding-right: 20px;
  box-sizing: border-box;
  width: 100%;
  height: 80px;
  border-bottom: 1px solid var(--border-color);
  background-color: var(--bg-light);
  transition-duration: 300ms;
  @media screen and (max-height: 650px) {
    height: 60px;
  }
  &__logo {
    height: 40px;
  }
  &__theme {
    height: 40px;
    cursor: pointer;
    :deep(svg) {
      circle {
        transition-duration: 300ms;
      }
    }
  }
}
</style>

<style lang="scss">
.dark {
  .base-header {
    &__theme {
      svg {
        circle {
          fill: #396DF7!important;
        }
      }
    }
  }
}
</style>
