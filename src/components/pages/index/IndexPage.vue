<template>
  <div class="index-page">
    <div class="index-page__content">
      <div class="index-page__logo">
        <logo-icon/>
      </div>
      <div class="index-page__title">
        <h1>Telegram без овощей</h1>
        <h2>
          На этой странице вы можете скачать версию Telegram
          с <span>удаленным функционалом историй</span>
        </h2>
        <img class="line" src="@/assets/images/line.png" alt="">
      </div>
      <div class="index-page__description">
        <p>Проект с открытым исходным кодом. Если вы сомневаетесь в моей версии билда, можете проверить изменения, внесённые в официальный код клиента Telegram на
          <a href="https://github.com/bogdan-khlyan/telegram-without-vegetables" target="_blank">Github</a> и собрать приложение самостоятельно</p>
      </div>
      <div class="index-page__buttons">
        <div class="index-page__buttons--title">
          <h4>Скачать</h4>
        </div>
        <div class="index-page__buttons--content">
          <a href="/android.apk" download="android.apk">
            <base-button>Android <android-icon/></base-button>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import LogoIcon from '@/components/common/icons/LogoIcon'
import BaseButton from '@/components/common/BaseButton'
import AndroidIcon from '@/assets/images/android-icon.svg'
</script>

<style lang="scss">
@import "@/assets/scss/variables.scss";

.index-page {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: calc(100vh - 160px);
  @media screen and (max-height: 650px) {
    min-height: calc(100vh - 120px);
  }
  &__content {
    padding-top: 40px;
    padding-bottom: 40px;
    max-width: 700px;
  }
  &__logo {
    margin: 0 auto;
    width: max-content;
  }
  &__title {
    margin-top: 20px;
    > h1 {
      margin: 0 auto;
      width: max-content;
      font-size: 32px;
      font-style: normal;
      font-weight: 800;
      line-height: normal;
      text-transform: uppercase;
      color: var(--heading-color);
      transition-duration: 300ms;
    }
    > h2 {
      margin: 40px auto 0 auto;
      width: max-content;
      max-width: 550px;
      font-size: 20px;
      font-style: normal;
      font-weight: 500;
      line-height: 28px;
      text-align: center;
      color: var(--heading-color);
      transition-duration: 300ms;
      > span {
        font-weight: 700;
      }
    }
    .line {
      margin: 0 auto;
    }
  }
  &__description {
    margin-top: 40px;
    > p {
      text-align: center;
      font-size: 17px;
      font-style: normal;
      font-weight: 400;
      line-height: 150%;
      color: var(--text-color);
      transition-duration: 300ms;
    }
  }
  &__buttons {
    margin-top: 40px;
    &--title {
      font-size: 20px;
      font-style: normal;
      font-weight: 700;
      line-height: normal;
      color: var(--heading-color);
      transition-duration: 300ms;
    }
    &--content {
      margin-top: 16px;
    }
  }
}
</style>
