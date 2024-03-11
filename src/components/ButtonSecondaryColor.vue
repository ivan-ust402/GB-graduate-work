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
  box-sizing: border-box;
  display: flex;
  width: 218px;
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
  font-weight: 500;
  line-height: normal;
  transition: all .3s ease-in;
  @media (hover: hover) {
    &:hover {
      background: #E8E8E8;
    }
  }
  @media (hover: none) {
    &:active {
      background: #E8E8E8;
    }
  }
}


</style>
