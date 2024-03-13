<template>
  <span class="notification">{{ digit }}</span>
</template>

<script>
export default {
  props: {
    digit: {
      type: Number,
      default: () => 0,
    },
  },
}
</script>

<style lang="scss" scoped>
.notification {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background-color: #121212;
  color: white;
  font-feature-settings: "clig" off, "liga" off;
  font-size: 6.47px;
  // font-weight: 700;
  font-family: "satoshibold";
  line-height: 5.392px;
  z-index: 100;
}
</style>
