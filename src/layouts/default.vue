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

useHead({
  title: 'Telegram без историй',
  meta: [
    { charset: 'utf-8' },
    { name: 'viewport', content: 'width=device-width, initial-scale=1' },
    { hid: 'description', name: 'description', property: 'description', content: 'Версия Telegram с удаленным функционалом историй' },
    { name: 'og:title', property: 'og:title', content: 'Версия Telegram с удаленным функционалом историй' },
    { name: 'og:description', property: 'og:description', content: 'На этой странице вы можете скачать версию Telegram с удаленным функционалом историй' },
    { name: 'og:image', property: 'og:image', content: '/thumbnail.jpg' },
    { name: 'og:type', property: 'og:type', content: 'website' },
    { hid: 'keywords', name: 'keywords', content: 'telegram, без, историй, истории, отключить, выключить' }
  ],
  link: [
    { rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' }
  ]
})
</script>

<style lang="scss" scoped>
.default-layout {
  background-color: var(--bg);
  transition-duration: 300ms;
  &__content {
    padding-top: 80px;
    box-sizing: border-box;
    min-height: calc(100vh - 80px);
    @media screen and (max-width: 1200px) {
      padding-top: 60px;
      min-height: calc(100vh - 60px);
    }
    @media screen and (max-height: 650px) {
      padding-top: 60px;
      min-height: calc(100vh - 60px);
    }
  }
}
</style>
