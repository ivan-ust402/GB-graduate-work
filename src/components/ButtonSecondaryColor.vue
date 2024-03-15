<template>
  <a
    href="#"
    class="button-secondary-color"
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
.button-secondary-color {
  // z-index: -2;
  box-sizing: border-box;
  display: flex;
  // min-width: 218px;
  width: fit-content;
  height: 52px;
  padding: 16px 54px;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
  border-radius: 62px;
  border: 1px solid #e8e8e8;
  color: #121212;
  font-size: 16px;
  font-style: normal;
  // font-weight: 500;
  line-height: normal;
  transition: all 0.3s ease-in;
  @media (hover: hover) {
    &:hover {
      background: #e8e8e8;
    }
  }
  @media (hover: none) {
    &:active {
      background: #e8e8e8;
    }
  }
}

@media (max-width: 1239px) {
  .button-secondary-color {
    width: 100%;
    height: 46px;
    font-size: 14px;
  }
}

</style>
