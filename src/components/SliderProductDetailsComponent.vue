<template>
  <div class="slider">
    <div class="slider__dots" ref="scrollContainer">
      <div
        class="slider__dot-box"
        v-for="(icon, index) in product.icons"
        :key="index"
        @click="clickIcon(index)"
        :class="{ 'slider__dot-box_active': index === activeDot }"
      >
        <img
          :src="require(`@/assets/img/products/${icon}`)"
          :alt="`icon-${index}`"
          class="slider__dot"
        />
        <div class="slider__dot-hover"></div>
      </div>
    </div>
    <div class="slider__slides" @click="nextImage(product.images.length - 1)">
      <div
        class="slider__slide-box"
        v-for="(slide, index) in product.images"
        :key="index"
        :class="{ 'slider__slide-box_active': index === activeDot }"
      >
        <img
          :src="require(`@/assets/img/products/${slide}`)"
          alt="'slide-' + ${slide}"
          class="slider__slide"
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    product: {
      type: Object,
      default: () => {
        return {
          id: "83",
          sku: "983560021",
          title: "Shorts CATCH The whole world of fashion",
          price: 20.54,
          currency: "USD",
          currencyCode: "&#36;",
          grade: 4.5,
          discount: 3,
          sales: 250,
          type: { id: 8, name: "Shorts" },
          dressStyle: { id: 0, name: "Casual" },
          gender: { id: 0, name: "man" },
          sizesInfo: [
            {
              size: {
                id: 0,
                name: "XX-Small",
                shortName: "xxs",
              },
              amount: "0",
            },
            {
              size: {
                id: 1,
                name: "X-Small",
                shortName: "xs",
              },
              amount: "0",
            },
            {
              size: {
                id: 2,
                name: "Small",
                shortName: "s",
              },
              amount: "2",
            },
            {
              size: {
                id: 3,
                name: "Medium",
                shortName: "m",
              },
              amount: "1",
            },
            {
              size: {
                id: 4,
                name: "Large",
                shortName: "l",
              },
              amount: "4",
            },
            {
              size: {
                id: 5,
                name: "X-Large",
                shortName: "xxs",
              },
              amount: "4",
            },
            {
              size: {
                id: 6,
                name: "XX-Large",
                shortName: "xxl",
              },
              amount: "0",
            },
            {
              size: {
                id: 7,
                name: "3X-Large",
                shortName: "xxxl",
              },
              amount: "0",
            },
            {
              size: {
                id: 8,
                name: "4X-Large",
                shortName: "xxxxl",
              },
              amount: "0",
            },
          ],
          color: {
            id: 6,
            name: "light blue",
            code: "#7395AE",
          },
          allColors: [
            {
              productId: 83,
              color: {
                id: 6,
                name: "light blue",
                code: "#7395AE",
              },
            },
            {
              productId: 84,
              color: {
                id: 2,
                name: "blue",
                code: "#294FA4",
              },
            },
          ],
          added: "2023-02-26T12:30:00.000-05:00",
          newArrivals: false,
          topSelling: true,
          image: "83/card.jpg",
          images: [
            "83/slider-0.jpg",
            "83/slider-1.jpg",
            "83/slider-2.jpg",
            "83/slider-3.jpg",
            "83/slider-4.jpg",
            "83/slider-5.jpg",
            "83/slider-6.jpg",
            "83/slider-7.jpg",
          ],
          icons: [
            "83/icon-0.jpg",
            "83/icon-1.jpg",
            "83/icon-2.jpg",
            "83/icon-3.jpg",
            "83/icon-4.jpg",
            "83/icon-5.jpg",
            "83/icon-6.jpg",
            "83/icon-7.jpg",
          ],
          availability: "true",
          shortDescription:
            "Men's blue plain shorts are a true classic that will never go out of style.",
          details: {
            description:
              "They are perfect for those who are looking for a stylish and fashionable look. Also, if you are planning to visit the beach, these shorts will be a great choice. They are light, comfortable and go well with any T-shirt or shirt. If you prefer long, extended shorts, then these trendy Bermuda shorts are perfect for you for the summer. The classic shorts are made of thick, high-quality Turkish denim with the addition of cotton, so they are very strong and durable. They also have a worn and boiled effect, which gives them a special charm and appeal.",
            composition: ["cotton 98%", "lycra 2%"],
          },
        }
      },
    },
  },
  data() {
    return {
      activeDot: 0,
      axis: "Y",
    }
  },
  // setup() {
  //   const scrollContainer = ref(null)
  // },
  mounted() {
    const updateOffsetParams = () => {
      if (window.innerWidth > 1239) {
        this.axis = "Y"
      } else if (window.innerWidth <= 1239 && window.innerWidth > 768) {
        this.axis = "X"
      } else if (window.innerWidth <= 768) {
        this.axis = "X"
      }
      this.activeDot = 0

    }

    const updateOffsetParamsAndScrollToActiveIcon = () => {
      updateOffsetParams()
      // this.scrollToActiveIcon()
    }
    updateOffsetParams()

    window.addEventListener("resize", updateOffsetParamsAndScrollToActiveIcon)
  },
  methods: {
    clickIcon(index) {
      this.activeDot = index
      this.scrollToActiveIcon()
    },
    nextImage(length) {
      if (this.activeDot >= length) {
        this.activeDot = 0
      } else {
        this.activeDot += 1
      }
      this.scrollToActiveIcon()
    },
    scrollToActiveIcon() {
      if (!this.$refs.scrollContainer) {
        console.log("Не найдены дочерние элементы!")
      } else {
        const activeIconElement =
          this.$refs.scrollContainer.children[this.activeDot]
        if (this.axis === "Y") {
          this.$refs.scrollContainer.scrollTo({
            top: activeIconElement.offsetTop,
            behavior: "smooth",
          })
        } else if (this.axis === "X") {
          this.$refs.scrollContainer.scrollTo({
            left: activeIconElement.offsetLeft,
            behavior: "smooth",
          })
        }
      }
    },
  },
}
</script>

<style lang="scss" scoped>
.slider {
  display: flex;
  flex-direction: row;
  gap: 14px;
  align-items: flex-start;
  position: relative;
  &__dots {
    display: flex;
    flex-direction: column;
    gap: 14px;
    height: 530px;
    overflow: scroll;
    -ms-overflow-style: none;
    &::-webkit-scrollbar {
      width: 100%;
      height: 100%;
    }
  }
  &__dot-box {
    cursor: pointer;
    box-sizing: border-box;
    position: relative;
    width: 152px;
    height: 167px;
    flex-shrink: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    background: #f0eeed;
    overflow: hidden;
    object-fit: contain;
    border-radius: 20px;
    -webkit-tap-highlight-color: transparent;
    &_active {
      border: 1px solid #121212;
      justify-self: center;
    }
  }
  &__dot-hover {
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: #121212;
    opacity: 0;
    border-radius: 20px;
    transition: all 0.3s ease-in;
    @media (hover: hover) {
      &:hover {
        opacity: 0.2;
        z-index: 1;
      }
    }
    @media (hover: none) {
      &:active {
        opacity: 0.2;
        z-index: 1;
      }
    }
  }
  &__dot {
    width: 152px;
    height: 167px;
    flex-shrink: 0;
    // border-radius: 20px;
    // border: 1px solid transparent;
    // background: lightgray 50% / cover no-repeat;
  }

  &__slides {
    position: relative;
    width: 444px;
    height: 530px;
    flex-shrink: 0;
    overflow: hidden;
  }
  &__slide-box {
    position: absolute;
    cursor: pointer;
    box-sizing: border-box;
    flex-shrink: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    background: #f0eeed;
    overflow: hidden;
    object-fit: contain;
    border-radius: 20px;
    width: 444px;
    height: 530px;
    opacity: 0;
    transition: all 0.2s ease;
    &_active {
      opacity: 1;
    }
  }
  &__slide {
    width: 100%;
    height: 100%;
    object-fit: cover;

    // flex-shrink: 0;
    // width: 444px;
    // height: 530px;
    // border-radius: 20px;
    // border: 1px solid transparent;
    // background: lightgray 50% / cover no-repeat;
  }
}
@media (max-width: 1239px) {
  .slider {
    flex-direction: column-reverse;
    gap: 12px;
    &__dots {
      flex-direction: row;
      gap: 16px;
      height: 104px;
      width: 344px;
      overflow: auto;
    }
    &__dot-box {
      width: 104px;
      height: 104px;
      &_active {
        border: 1px solid #121212;
      }
    }
    &__dot {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }

    &__slides {
      width: 344px;
      height: 290px;
      overflow: hidden;
    }
    &__slide-box {
      width: 344px;
      height: 290px;
      object-fit: cover;
    }
    &__slide {
      width: 100%;
      height: 100%;
      object-fit: contain;
    }
  }
}

@media (max-width: 768px) {
  .slider {
    &__dots {
      flex-direction: row;
      gap: 12px;
      height: 106px;
      width: 358px;
    }
    &__dot-box {
      width: 111px;
      height: 106px;
    }
    &__dot {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }

    &__slides {
      width: 358px;
      height: 290px;
      overflow: hidden;
    }
    &__slide-box {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
    &__slide {
      width: 100%;
      height: 100%;
      object-fit: contain;
    }
  }
}
</style>
