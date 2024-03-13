<template>
  <a
    href="#"
    class="button-selection-color"
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
    }
  }
}
</script>

<style lang="scss" scoped>
.button-selection-color {
  // z-index: -2;
  box-sizing: border-box;
  display: flex;
  min-width: 218px;
  width: fit-content;
  height: 52px;
  padding: 16px 54px;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
  border-radius: 62px;
  border: 1px solid #e8e8e8;
  background: #121212;
  color: #fff;
  font-size: 16px;
  font-style: normal;
  line-height: normal;
  transition: all 0.3s ease-in;
  @media (hover: hover) {
    &:hover {
      background: #fff;
      border: 1px solid #222;
      color: #222;
    }
  }
  @media (hover: none) {
    &:active {
      background: #fff;
      border: 1px solid #222;
      color: #222;
    }
  }
}

@media (max-width: 1024px) {
  .button-selection-color {
    width: 100%;
    height: 46px;
    font-size: 14px;
  }
}

</style>
