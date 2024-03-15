<template>
  <div class="card">
    <div class="card__image-box">
      <img
        class="card__image"
        :src="require(`@/assets/img/products/${product.image}`)"
        :alt="product.type.name"
      />
    </div>
    <div class="card__content">
      <div class="card__content-top">
        <div class="card__top-left">
          <h6 class="card__title">
            {{ product.title }}
          </h6>
          <div class="card__params">
            <p class="card__param">
              Size:
              <span class="card__param_value">
                {{ product.choosenSize ? product.choosenSize : "Large" }}
              </span>
            </p>
            <p class="card__param">
              Color:
              <span class="card__param_value">
                {{ product.choosenColor ? product.choosenColor : "Black" }}
              </span>
            </p>
          </div>
        </div>
        <div class="card__top-right">
          <a href="#" class="card__delete" @click="removeProduct(product.id)">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M20.25 4.5H16.5V3.75C16.5 3.15326 16.2629 2.58097 15.841 2.15901C15.419 1.73705 14.8467 1.5 14.25 1.5H9.75C9.15326 1.5 8.58097 1.73705 8.15901 2.15901C7.73705 2.58097 7.5 3.15326 7.5 3.75V4.5H3.75C3.55109 4.5 3.36032 4.57902 3.21967 4.71967C3.07902 4.86032 3 5.05109 3 5.25C3 5.44891 3.07902 5.63968 3.21967 5.78033C3.36032 5.92098 3.55109 6 3.75 6H4.5V19.5C4.5 19.8978 4.65804 20.2794 4.93934 20.5607C5.22064 20.842 5.60218 21 6 21H18C18.3978 21 18.7794 20.842 19.0607 20.5607C19.342 20.2794 19.5 19.8978 19.5 19.5V6H20.25C20.4489 6 20.6397 5.92098 20.7803 5.78033C20.921 5.63968 21 5.44891 21 5.25C21 5.05109 20.921 4.86032 20.7803 4.71967C20.6397 4.57902 20.4489 4.5 20.25 4.5ZM10.5 15.75C10.5 15.9489 10.421 16.1397 10.2803 16.2803C10.1397 16.421 9.94891 16.5 9.75 16.5C9.55109 16.5 9.36032 16.421 9.21967 16.2803C9.07902 16.1397 9 15.9489 9 15.75V9.75C9 9.55109 9.07902 9.36032 9.21967 9.21967C9.36032 9.07902 9.55109 9 9.75 9C9.94891 9 10.1397 9.07902 10.2803 9.21967C10.421 9.36032 10.5 9.55109 10.5 9.75V15.75ZM15 15.75C15 15.9489 14.921 16.1397 14.7803 16.2803C14.6397 16.421 14.4489 16.5 14.25 16.5C14.0511 16.5 13.8603 16.421 13.7197 16.2803C13.579 16.1397 13.5 15.9489 13.5 15.75V9.75C13.5 9.55109 13.579 9.36032 13.7197 9.21967C13.8603 9.07902 14.0511 9 14.25 9C14.4489 9 14.6397 9.07902 14.7803 9.21967C14.921 9.36032 15 9.55109 15 9.75V15.75ZM15 4.5H9V3.75C9 3.55109 9.07902 3.36032 9.21967 3.21967C9.36032 3.07902 9.55109 3 9.75 3H14.25C14.4489 3 14.6397 3.07902 14.7803 3.21967C14.921 3.36032 15 3.55109 15 3.75V4.5Z"
                fill="#FF3333"
              />
            </svg>
          </a>
        </div>
      </div>
      <div class="card__content-bottom">
        <div class="card__price">
          <span class="card__currency" v-html="product.currencyCode"></span
          >{{ product.price }}
        </div>
        <QuantitySelector
        class="card__quantity"
          :quantity="product.quantity"
          @increase="addNewProduct(product.id)"
          @decrease="decreaseQuantityProduct(product.id)"
        />
      </div>
    </div>
  </div>
</template>

<script>
import QuantitySelector from "@/components/QuantitySelector.vue"

export default {
  components: {
    QuantitySelector,
  },
  props: {
    product: {
      type: Object,
      default: () => {
        return {
          id: "0",
          quantity: 12,
          sku: "937023680",
          title:
            "Jeans D13 dhf hfhfhfhfhfhfh hfhfhfhhfhfhfh fhfhfhfhfh fhfhhfhfhrf hfhfhfhhf hfhfhfhf ",
          price: 2000000000000000000.63,
          currency: "USD",
          currencyCode: "&#36;",
          grade: 4.8,
          discount: 10,
          sales: 50,
          type: { id: 0, name: "Jeans" },
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
            id: 1,
            name: "grey",
            code: "#4D4A52",
          },
          allColors: [],
          added: "2023-02-26T12:30:00.000-05:00",
          newArrivals: false,
          topSelling: false,
          image: "0/card.jpg",
          images: ["0/slider-0.jpg", "0/slider-1.jpg", "0/slider-2.jpg"],
          icons: ["0/icon-0.jpg", "0/icon-1.jpg", "0/icon-2.jpg"],
          availability: "true",
          shortDescription:
            "Men's banana jeans, like classic ones, are a basic item in any man's wardrobe.",
          details: {
            description:
              "Men's banana jeans, like classic ones, are a basic item in any man's wardrobe. The trousers are wide, slightly tapered at the bottom, it is possible to roll up the bottom of the legs. The jeans are NOT insulated, NOT with elastic, NOT with laces, the model has a zipper and a button on the front, and there are belt loops on the waistband. There are comfortable deep welt pockets at the front and patch pockets at the back. A high rise, unlike low or mid rise pants, is versatile and will look like stylish pants in any situation. Straight-fit trousers are made of 100% cotton. Standard denim pants are suitable for men, boys, youth, boys and teenagers of any shape and height.",
            composition: ["cotton 90%", "elastane 10%"],
          },
        }
      },
    },
  },
  emits: ["increaseQuantity", "decreaseQuantity", "removeProduct"],
  methods: {
    addNewProduct(id) {
      console.log(id)
      this.$emit("increaseQuantity", id)
    },
    decreaseQuantityProduct(id) {
      console.log(id)
      this.$emit("decreaseQuantity", id)
    },
    removeProduct(id) {
      console.log("remove, id:", id)
      this.$emit("removeProduct", id)
    },
  },
}
</script>

<style lang="scss" scoped>
.card {
  display: flex;
  flex-direction: row;
  // min-width: 300px;
  width: 100%;
  gap: 16px;
  &__image-box {
    flex-shrink: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 8.658px;
    background: #f0eeed;
    width: 124px;
    height: 124px;
    overflow: hidden;
    object-fit: contain;
  }
  &__image {
    flex-shrink: 0;
    border-radius: 8.658px;
    width: 124px;
    height: 124px;
  }
  &__content {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: auto;
    box-sizing: border-box;
    width: 100%;
    box-sizing: content-box;
  }
  &__content-top {
    box-sizing: content-box;
    display: flex;
    justify-content: space-between;
    width: 100%;
  }
  &__top-left {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 2px;
  }
  &__top-right {
    display: flex;
  }
  &__title {
    height: 20px;
    word-break: break-all;
    display: -webkit-box;
    overflow: hidden;
    text-overflow: ellipsis;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 1;

    color: #121212;
    /* Desktop/Text/Subtitle */
    font-family: "satoshibold";
    font-size: 20px;
    line-height: 22px; /* 110% */
    text-transform: uppercase;
  }
  &__params {
    display: flex;
    flex-direction: column;
    gap: 4px;
  }
  &__param {
    color: #121212;
    /* Desktop/Text/Descriptions/Small */
    font-family: "satoshiregular";
    font-size: 14px;
    line-height: normal;
    &_value {
      color: rgba(0, 0, 0, 0.6);
    }
  }

  &__content-bottom {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
  &__price {
    color: #121212;
    font-family: "satoshibold";
    font-size: 24px;
    line-height: normal;
    height: 20px;
    word-break: break-all;
    flex: 1;

    display: -webkit-box;
    overflow: hidden;
    text-overflow: ellipsis;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 1;

    // overflow: hidden;
    // text-overflow: ellipsis;
    // text-wrap: wrap;
  }
  &__quantity {
    width: 125px;
  }
}

@media (max-width: 1239px) {
}

@media (max-width: 768px) {
}
</style>
