<template>
  <form action="#" class="promo" @submit.prevent="click">
    <InputMainComponent
      class="promo__input"
      placeholderValue="SALESALE100"
      labelSrc="cart/promo-icon.svg"
      labelAlt="promo icon"
      @update:message="updateInputMessage"
      value=""
    />
    <ButtonSelectionColor class="promo__button" text="Apply" @click.prevent="click"/>
  </form>
</template>

<script>
import ButtonSelectionColor from "./ButtonSelectionColor.vue"
import InputMainComponent from "./InputMainComponent.vue"

export default {
  components: {
    InputMainComponent,
    ButtonSelectionColor,
  },
  data() {
    return {
      message: "",
    }
  },
  emits: ['getInputMessage'],
  methods: {
    updateInputMessage(message) {
      this.message = message
    },
    click() {
      console.log("click", this.message)
      this.$emit('getInputMessage', this.message)
    }
  },
}
</script>

<style lang="scss" scoped>
.promo {
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 12px;
  &__input {
    flex: 1;
  }
  &__button {
    width: 119px;
    font-size: 16px;
    height: 48px;
  }
}

@media (max-width: 1239px) {
  .promo {
  &__input {
    flex: 1;
  }
  &__button {
    width: 88px;
    font-size: 14px;
    padding: 12px 16px;
  }
}
}

@media (max-width: 768px) {
  
}
</style>
