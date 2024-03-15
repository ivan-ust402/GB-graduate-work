<template>
  <form action="#" class="promo" @submit.prevent="click">
    <InputMainComponent
      class="promo__input"
      placeholderValue="SALESALE100"
      labelSrc="cart/promo-icon.svg"
      labelAlt="promo icon"
      @update:message="updateInputMessage"
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
  methods: {
    updateInputMessage(message) {
      this.message = message
    },
    click() {
      console.log(this.message)
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
  flex: 1;
  &__input {
    flex: 1;
  }
  &__button {
    width: 119px;
  }
}
</style>
