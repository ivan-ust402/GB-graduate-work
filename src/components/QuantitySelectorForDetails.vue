<template>
  <div class="quantity">
    <a
      href="#"
      class="quantity__control quantity__control_decrease"
      @click.prevent="decrease"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="17"
        viewBox="0 0 16 17"
        fill="none"
      >
        <path
          d="M14.25 8.50012C14.25 8.69903 14.171 8.8898 14.0303 9.03045C13.8897 9.1711 13.6989 9.25012 13.5 9.25012H2.5C2.30109 9.25012 2.11032 9.1711 1.96967 9.03045C1.82902 8.8898 1.75 8.69903 1.75 8.50012C1.75 8.30121 1.82902 8.11044 1.96967 7.96979C2.11032 7.82914 2.30109 7.75012 2.5 7.75012H13.5C13.6989 7.75012 13.8897 7.82914 14.0303 7.96979C14.171 8.11044 14.25 8.30121 14.25 8.50012Z"
          fill="#121212"
        />
      </svg>
    </a>
    <p class="quantity__value">{{ quantity }}</p>
    <a
      href="#"
      class="quantity__control quantity__control_increase"
      @click.prevent="increase"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="17"
        viewBox="0 0 16 17"
        fill="none"
      >
        <path
          d="M14.25 8.50012C14.25 8.69903 14.171 8.8898 14.0303 9.03045C13.8897 9.1711 13.6989 9.25012 13.5 9.25012H8.75V14.0001C8.75 14.199 8.67098 14.3898 8.53033 14.5305C8.38968 14.6711 8.19891 14.7501 8 14.7501C7.80109 14.7501 7.61032 14.6711 7.46967 14.5305C7.32902 14.3898 7.25 14.199 7.25 14.0001V9.25012H2.5C2.30109 9.25012 2.11032 9.1711 1.96967 9.03045C1.82902 8.8898 1.75 8.69903 1.75 8.50012C1.75 8.30121 1.82902 8.11044 1.96967 7.96979C2.11032 7.82914 2.30109 7.75012 2.5 7.75012H7.25V3.00012C7.25 2.80121 7.32902 2.61044 7.46967 2.46979C7.61032 2.32914 7.80109 2.25012 8 2.25012C8.19891 2.25012 8.38968 2.32914 8.53033 2.46979C8.67098 2.61044 8.75 2.80121 8.75 3.00012V7.75012H13.5C13.6989 7.75012 13.8897 7.82914 14.0303 7.96979C14.171 8.11044 14.25 8.30121 14.25 8.50012Z"
          fill="#121212"
        />
      </svg>
    </a>
  </div>
</template>

<script>
export default {
  props: {
    quantity: {
      type: Number,
      default: () => 1,
    },
  },
  emits: ["increase", "decrease"],
  methods: {
    decrease() {
      this.$emit("decrease")
    },
    increase() {
      this.$emit("increase")
    },
  },
}
</script>

<style lang="scss" scoped>
.quantity {
  box-sizing: border-box;
  display: flex;
  width: 170px;
  height: 52px;
  justify-content: center;
  align-items: center;
  border-radius: 62px;
  background: #f0f0f0;
  border: 1px solid #f0f0f0;
  &__control {
    display: flex;
    align-items: center;
    justify-content: center;
    background: #f0f0f0;
    height: 100%;
    width: 100%;
    box-sizing: border-box;
    @media (hover: hover) {
      &:hover {
        box-sizing: border-box;
        background: #fff;
      }
    }
    @media (hover: none) {
      &:active {
        box-sizing: border-box;
        background: #fff;
      }
    }
    &_decrease {
      border-top-left-radius: 62px;
      border-bottom-left-radius: 62px;
    }
    &_increase {
      border-top-right-radius: 62px;
      border-bottom-right-radius: 62px;
    }
    & svg {
      width: 24px;
      height: 24px;
    }
  }
  &__value {
    box-sizing: border-box;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #121212;
    /* Mobile/Text/Paragraph/Regular */
    font-family: "satoshimedium";
    font-size: 16px;
    line-height: normal;
    align-self: center;
    width: 100%;
  }
}

@media (max-width: 1239px) {
  .quantity {
    width: 104px;
    height: 44px;
    &__control {
      & svg {
        width: 20px;
        height: 20px;
      }
    }
    &__value {
      font-family: "satoshiregular";
      font-size: 14px;
    }
  }
}

@media (max-width: 768px) {
  .quantity {
    width: 109px;
    height: 44px;
  }
}
</style>
