<template>
  <a href="#" 
    :class="{'button-third-color_active': isActive, 'button-third-color_default': !isActive }"
    class="button-third-color"
  >
    {{ text }}
  </a>
</template>

<script>
export default {
  props: {
    text: {
      type: String,
      default: () => "Default",
    },
    isActive: {
      type: Boolean,
      default: () => false,
    },
  },
}
</script>

<style lang="scss" scoped>
.button-third-color {
  cursor: default;
  box-sizing: border-box;
  display: flex;
  width: fit-content;
  height: 46px;
  padding: 12px 24px;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
  border-radius: 62px;

  font-size: 16px;
  font-family: "satoshiregular";
  font-style: normal;
  line-height: normal;
  &_active {
    background: #121212;
    color: white;
  }

  &_default {
    cursor: pointer;
    background: #f0f0f0;
    border: 1px solid #f0f0f0;
    color: #222;
    transition: all 0.3s ease-in;
    @media (hover: hover) {
      &:hover {
        border: 1px solid #222;
      }
    }
    @media (hover: none) {
      &:active {
        border: 1px solid #222;
      }
    }
  }
}

@media (max-width: 1239px) {
  .button-third-color {
    height: 39px;
    font-size: 14px;
    padding: 10px 20px;
  }
}
</style>
