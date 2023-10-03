<template>
  <div class="default-layout"
       :class="globalState.theme">
    <div class="default-layout__header">
      <base-header/>
    </div>
    <div class="default-layout__content">
      <router-view/>
    </div>
    <div class="default-layout__footer">
      <base-footer/>
    </div>
  </div>
</template>

<script setup>
import BaseHeader from '@/components/common/BaseHeader'
import BaseFooter from '@/components/common/BaseFooter'
import {globalState} from "@/api/global/global.state.js";
</script>

<style lang="scss" scoped>
.default-layout {
  background-color: var(--bg);
  transition-duration: 300ms;
  &__content {
    padding-top: 80px;
    box-sizing: border-box;
    min-height: calc(100vh - 80px);
    @media screen and (max-height: 650px) {
      padding-top: 60px;
      min-height: calc(100vh - 60px);
    }
  }
}
</style>
