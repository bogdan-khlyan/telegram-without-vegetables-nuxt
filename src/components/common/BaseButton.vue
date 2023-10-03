<template>
  <button class="base-button">
    <span><slot/></span>
  </button>
</template>

<script setup>

</script>

<style lang="scss" scoped>
@import "@/assets/scss/mixins.scss";

.base-button {
  padding-left: 24px;
  padding-right: 24px;
  height: 44px;
  border: none;
  border-radius: 10px;
  background: var(--button-bg);
  cursor: pointer;
  transition-duration: 300ms;
  &:hover {
    background: var(--button-hover-bg);
    > span {
      color: var(--button-hover-text-color);
      :deep(svg) {
        @include svgFillStroke(var(--button-hover-text-color))
      }
    }
  }
  &:active {
    background: var(--button-active-bg);
  }
  > span {
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 150%;
    color: var(--button-text-color);
    transition-duration: 300ms;
    :deep(svg) {
      margin-left: 6px;
      @include svgFillStroke(var(--button-text-color));
      path {
        transition-duration: 300ms;
      }
    }
  }
}
</style>
