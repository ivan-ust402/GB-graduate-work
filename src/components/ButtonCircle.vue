<template>
  <a @click="clickButton" class="circle">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="37"
      height="37"
      viewBox="0 0 37 37"
      fill="none"
    >
      <circle cx="18.5" cy="18.5" r="18.5" :fill="color" />
    </svg>
  </a>
</template>

<script>
export default {
  emits: ['getId'],
  props: {
    color: {
      type: String,
      default: () => "#4F4631",
    },
    productId: {
      type: Number,
      default: () => 0
    }
  },
  methods: {
    clickButton() {
      this.$emit('getId', productId)
    }
  }
}
</script>

<style lang="scss" scoped></style>
