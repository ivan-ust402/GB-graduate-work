<template>
  <div class="field">
    <label for="field" class="field__label">
      <img :src="require(`@/assets/img/${labelSrc}`)" :alt="labelAlt" />
    </label>
    <input
      type="text"
      class="field__input"
      id="field"
      :placeholder="placeholderValue"
      v-model.lazy="message"
      @change.prevent="updateMessage"
    />
  </div>
</template>

<script>
export default {
  props: {
    placeholderValue: {
      type: String,
      default: () => "SALESALE100",
    },
    labelAlt: {
      type: String,
      default: () => "promo icon",
    },
    labelSrc: {
      type: String,
      default: () => "cart/promo-icon.svg",
    },
  },
  emits: ["update:message"],
  data() {
    return {
      message: "",
    }
  },
  methods: {
    updateMessage() {
      this.$emit("update:message", this.message)
    },
  },
}
</script>

<style lang="scss" scoped>
.field {
  box-sizing: border-box;
  display: flex;
  padding: 12px 16px;
  align-items: center;
  width: 100%;
  gap: 12px;
  flex: 1 0 0;
  border-radius: 62px;
  background: #f0eeed;
  cursor: pointer;
  &__label {
    opacity: 0.4;
    transition: all 0.3s ease-in;
    width: 24px;
    height: 24px;
    cursor: pointer;
    &:hover {
      opacity: 0.8;
    }
  }
  &__input {
    cursor: pointer;
    background: #f0eeed;
    color: #222;
    border: none;
    outline: none;
    font-size: 16px;
    font-style: normal;
    font-family: "satoshiregular";
    line-height: normal;
    &::placeholder {
      opacity: 0.4;
    }
    &:focus {
      cursor: none;
    }
  }
}
</style>
