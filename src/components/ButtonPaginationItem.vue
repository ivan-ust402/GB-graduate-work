<template>
  <button 
    class="button"
    :class="{ button_active: isActive }"
  >
    {{ value }}
  </button>
</template>

<script>
export default {
  props: {
    value: {
      type: Number,
      default: () => 0,
    },
    isActive: {
      type: Boolean,
      default: () => false
    }
  },
}
</script>

<style lang="scss" scoped>
.button {
  width: 40px;
  height: 40px;
  background-color: #fff;
  border-radius: 8px;
  transition: background-color 0.3s ease-in-out;
  color: #121212;
  font-size: 14px;
  font-family: "satoshimedium";
  line-height: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  @media (hover: hover) {
    &:hover {
      background-color: #f0f0f0;
    }
  }
  @media (hover: none) {
    &_active {
      background-color: #f0f0f0;
    }
  }
  &_active {
    background-color: #f0f0f0;
  }
}
@media (max-width: 1239px) {
  .button {
    width: 36px;
    height: 36px;
    font-size: 12px;
    font-family: "satoshiregular";
    line-height: 22px;
    text-align: center;
  }
}
@media (max-width: 768px) {
  .button {
    display: flex;
    width: 36px;
    padding: 12px;
    justify-content: center;
    align-items: center;
    flex-shrink: 0;
    align-self: stretch;
  }
}
</style>
