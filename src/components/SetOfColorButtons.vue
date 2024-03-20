<template>
  <div class="colors">
    <router-link
      class="colors__link"
      v-for="(color, index) in colors"
      :key="index"
      :to="{
        name: 'ProductDetailsPage',
        params: {
          id: color.productId,
        },
        query: {
          sizeId: product.sizesInfo.find(sizeInfo => Number(sizeInfo.amount) > 0).size.id
        }
      }"
      @click.prevent="clickButton(color.color)"
    >
      <svg
        class="colors__svg"
        width="37"
        height="37"
        viewBox="0 0 37 37"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="18.5" cy="18.5" r="18.5" :fill="color.color.code" />
        <path
          v-if="color.color.id === choosenColor.id"
          d="M24.5306 15.0306L16.5306 23.0306C16.4609 23.1005 16.3781 23.156 16.287 23.1939C16.1958 23.2317 16.0981 23.2512 15.9993 23.2512C15.9006 23.2512 15.8029 23.2317 15.7117 23.1939C15.6206 23.156 15.5378 23.1005 15.4681 23.0306L11.9681 19.5306C11.8983 19.4609 11.843 19.378 11.8052 19.2869C11.7675 19.1957 11.748 19.098 11.748 18.9994C11.748 18.9007 11.7675 18.803 11.8052 18.7119C11.843 18.6207 11.8983 18.5379 11.9681 18.4681C12.0379 18.3984 12.1207 18.343 12.2118 18.3053C12.303 18.2675 12.4007 18.2481 12.4993 18.2481C12.598 18.2481 12.6957 18.2675 12.7869 18.3053C12.878 18.343 12.9608 18.3984 13.0306 18.4681L16 21.4375L23.4693 13.9694C23.6102 13.8285 23.8013 13.7493 24.0006 13.7493C24.1999 13.7493 24.391 13.8285 24.5318 13.9694C24.6727 14.1103 24.7519 14.3014 24.7519 14.5006C24.7519 14.6999 24.6727 14.891 24.5318 15.0319L24.5306 15.0306Z"
          fill="white"
        />
      </svg>
    </router-link>
  </div>
</template>

<script>
import ButtonCircle from "./ButtonCircle.vue"

export default {
  emits: ["getSelectedColor"],
  components: {
    ButtonCircle,
  },
  props: {
    choosenColor: {
      type: Object,
      default: () => {},
    },
    colors: {
      type: Array,
      default: () => [],
    },
    product: {
      type: Object,
      default: () => {
        return {
          sizeInfo: {
            size: {
              id: 0
            },
            amount: 0 
          }
        }
      }
    }
  },
  methods: {
    clickButton(color) {
      this.$emit('getSelectedColor', color)
    },
    notClick() {
      console.log("Not click!!!")
    }
  },
}
</script>

<style lang="scss" scoped>
.colors {
  box-sizing: border-box;
  display: flex;
  align-items: center;
  height: 38px;
  gap: 16px;
  flex-wrap: wrap;
  &__link {
    border-radius: 50%;
    height: 38px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  &__svg {
    height: 36px;
    width: 36px;
  }
}
</style>
