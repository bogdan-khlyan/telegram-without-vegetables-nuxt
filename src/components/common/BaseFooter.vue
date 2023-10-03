<template>
  <div class="base-footer">
    <div class="base-footer__copy">
      <span>© 2023</span>
    </div>
  </div>
</template>

<script setup>
</script>

<style lang="scss" scoped>
.base-footer {
  display: flex;
  align-items: center;
  padding-left: 20px;
  padding-right: 20px;
  width: 100%;
  height: 80px;
  border-top: 1px solid var(--border-color);
  background-color: var(--bg-light);
  transition-duration: 300ms;
  @media screen and (max-height: 650px) {
    height: 60px;
  }
  &__copy {
    > span {
      font-size: 14px;
      font-style: normal;
      font-weight: 400;
      line-height: 150%;
      color: #919BB6;
    }
  }
}
</style>
