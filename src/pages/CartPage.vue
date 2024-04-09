<template>
  <section class="cart center">
    <NavigationBreadcrumbsComponent class="card__breadcrumbs" />
    <div class="cart__content">
      <h3 class="cart__title">Your cart</h3>
      <div class="cart__display" v-if="getCartProductsCount">
        <div class="cart__cards">
          <CardProductForCart
            class="cart__card"
            v-for="product in getCartProducts"
            :product="product"
            @increaseQuantity="increaseProductAmount(product)"
            @decreaseQuantity="decreaseProductAmount(product)"
            @removeProduct="removeProduct(product)"
          />
        </div>
        <DisplayOrderBlock />
      </div>
      <div v-else class="cart__empty">
        <p v-if="getPaymentState" class="cart__payment">
          Thank you for your purchase! Rushing to package the goods and send
          them to you
        </p>
        <p v-else class="cart__empty-text">
          You haven't added anything to your cart
        </p>
        <router-link
          :to="{
            name: 'CatalogPage',
            params: { page: 1 },
            query: { show: 'all' },
          }"
          class="cart__empty-route"
        >
          <ButtonSelectionColor
            text="Let's Go Shoping Now"
            class="cart__empty-button"
            @click="buyAllProducts"
          />
        </router-link>
      </div>
    </div>
  </section>
</template>

<script>
import DisplayOrderBlock from "@/blocks/DisplayOrderBlock.vue"
import ButtonSelectionColor from "@/components/ButtonSelectionColor.vue"
import CardProductForCart from "@/components/CardProductForCart.vue"
import NavigationBreadcrumbsComponent from "@/components/NavigationBreadcrumbsComponent.vue"
import { mapActions, mapGetters } from "vuex"
import { useHead } from "@unhead/vue"

export default {
  components: {
    CardProductForCart,
    NavigationBreadcrumbsComponent,
    DisplayOrderBlock,
    ButtonSelectionColor,
  },
  setup() {
    useHead({
      title: "Cart",
      meta: [
        {
          name: "Cart",
          content: "There is a shop cart",
        },
      ],
    })
  },
  data() {
    return {
      products: [
        {
          id: "0",
          quantity: 12,
          sku: "937023680",
          title:
            "Jeans D13 dhfhfhfhfhfhfhfh hfhfhfhhfhfhfh fhfhfhfhfh fhfhhfhfhrf hfhfhfhhf hfhfhfhf ",
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
        },
        {
          id: "2",
          quantity: 1,
          sku: "1063766882",
          title: "Jeans Omaqlo",
          price: 24.79,
          currency: "USD",
          currencyCode: "&#36;",
          grade: 5.0,
          discount: 10,
          sales: 150,
          type: { id: 0, name: "Jeans" },
          dressStyle: { id: 2, name: "Party" },
          gender: { id: 0, name: "man" },
          sizesInfo: [
            {
              size: {
                id: 0,
                name: "XX-Small",
                shortName: "xxs",
              },
              amount: "10",
            },
            {
              size: {
                id: 1,
                name: "X-Small",
                shortName: "xs",
              },
              amount: "10",
            },
            {
              size: {
                id: 2,
                name: "Small",
                shortName: "s",
              },
              amount: "20",
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
              amount: "10",
            },
            {
              size: {
                id: 7,
                name: "3X-Large",
                shortName: "xxxl",
              },
              amount: "10",
            },
            {
              size: {
                id: 8,
                name: "4X-Large",
                shortName: "xxxxl",
              },
              amount: "10",
            },
          ],
          color: {
            id: 6,
            name: "light blue",
            code: "#7395AE",
          },
          allColors: [],
          added: "2023-02-26T12:30:00.000-05:00",
          newArrivals: false,
          topSelling: true,
          image: "2/card.jpg",
          images: ["2/slider-0.jpg", "2/slider-1.jpg", "2/slider-2.jpg"],
          icons: ["2/icon-0.jpg", "2/icon-1.jpg", "2/icon-2.jpg"],
          availability: "true",
          shortDescription:
            "High quality. Thick and durable jeans do not hinder movement; due to elastane, they create a slight “stretch effect”.",
          details: {
            description:
              "Breathable cotton fabric makes them suitable for year-round wear. Men's jeans are suitable for both teenagers and older men. High-quality accessoriesTurkish-made items have proven themselves to be high-quality and durable clothing. Our gins are designed in Turkey and made from premium cotton, they do not wash out, and keep their shape and color for a long time. Tapered legs Straight and tapered legs look stylish and fashionable. Classic blue jeans 'varenki' are an integral part of the modern man's wardrobe and will perfectly complement your cargo or joggers. Universal fit The universal MOM pattern and small oversize fit will suit any body type.",
            composition: ["cotton 98%", "elastane 2%"],
          },
        },
        {
          id: "3",
          quantity: 1,
          sku: "364704667",
          title: "Insulated trousers LAINA Comfort",
          price: 13.32,
          currency: "USD",
          currencyCode: "&#36;",
          grade: 5.0,
          discount: 0,
          sales: 50,
          type: { id: 1, name: "Trousers" },
          dressStyle: { id: 3, name: "Gym" },
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
            id: 3,
            name: "green",
            code: "#787E62",
          },
          allColors: [
            {
              productId: 3,
              color: {
                id: 3,
                name: "green",
                code: "#787E62",
              },
            },
            {
              productId: 4,
              color: {
                id: 10,
                name: "dark blue",
                code: "#102E4F",
              },
            },
            {
              productId: 5,
              color: {
                id: 4,
                name: "red",
                code: "#C8031C",
              },
            },
            {
              productId: 6,
              color: {
                id: 5,
                name: "black",
                code: "#141316",
              },
            },
          ],
          added: "2023-02-26T12:30:00.000-05:00",
          newArrivals: true,
          topSelling: false,
          image: "3/card.jpg",
          images: ["3/slider-0.jpg", "3/slider-1.jpg", "3/slider-2.jpg"],
          icons: ["3/icon-0.jpg", "3/icon-1.jpg", "3/icon-2.jpg"],
          availability: "true",
          shortDescription:
            "An excellent choice for creating a sporty look - joggers from the Russian brand LAINA.",
          details: {
            description:
              "An excellent choice for creating a sporty look are joggers from the Russian brand LAINA. The tapered jogger pants are a unique style for comfort in any weather.",
            composition: ["cotton 80%", "elastane 20%"],
          },
        },
        {
          id: "4",
          quantity: 1,
          sku: "364657021",
          title: "Insulated trousers LAINA Comfort",
          price: 13.32,
          currency: "USD",
          currencyCode: "&#36;",
          grade: 5.0,
          discount: 0,
          sales: 50,
          type: { id: 1, name: "Trousers" },
          dressStyle: { id: 3, name: "Gym" },
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
            id: 10,
            name: "dark blue",
            code: "#102E4F",
          },
          allColors: [
            {
              productId: 3,
              color: {
                id: 3,
                name: "green",
                code: "#787E62",
              },
            },
            {
              productId: 4,
              color: {
                id: 10,
                name: "dark blue",
                code: "#102E4F",
              },
            },
            {
              productId: 5,
              color: {
                id: 4,
                name: "red",
                code: "#C8031C",
              },
            },
            {
              productId: 6,
              color: {
                id: 5,
                name: "black",
                code: "#141316",
              },
            },
          ],
          added: "2023-02-26T12:30:00.000-05:00",
          newArrivals: true,
          topSelling: false,
          image: "4/card.jpg",
          images: ["4/slider-0.jpg", "4/slider-1.jpg", "4/slider-2.jpg"],
          icons: ["4/icon-0.jpg", "4/icon-1.jpg", "4/icon-2.jpg"],
          availability: "true",
          shortDescription:
            "An excellent choice for creating a sporty look - joggers from the Russian brand LAINA.",
          details: {
            description:
              "An excellent choice for creating a sporty look are joggers from the Russian brand LAINA. The tapered jogger pants are a unique style for comfort in any weather.",
            composition: ["cotton 80%", "elastane 20%"],
          },
        },
      ],
    }
  },
  mounted() {
    this.setPaymentState(false)
  },
  computed: {
    ...mapGetters([
      "getCartProducts",
      "getCartProductsCount",
      "getCartProductByIdAndSize",
      "getPaymentState",
    ]),
  },
  methods: {
    ...mapActions([
      "addToCart",
      "decreaseProductQuantity",
      "removeFromCart",
      "buyAllProducts",
      "applyPromoCode",
      "setPaymentState",
    ]),

    increaseProductAmount(product) {
      this.addToCart(product)
      // console.log(this.getCartProductByIdAndSize(product))
    },
    decreaseProductAmount(product) {
      this.decreaseProductQuantity(product)
      // console.log(this.getCartProductByIdAndSize(product))
    },
    removeProduct(product) {
      this.removeFromCart(product)
      // console.log(this.getCartProductByIdAndSize(product))
    },
  },
}
</script>

<style lang="scss" scoped>
.cart {
  padding-top: 46px;
  padding-bottom: 80px;
  display: flex;
  flex-direction: column;
  gap: 22px;
  &__content {
    display: flex;
    flex-direction: column;
    gap: 22px;
  }
  &__title {
    color: #121212;
    // font-family: "integral_cfregular";
    // font-size: 40px;
    line-height: normal;
  }
  &__display {
    display: flex;
    flex-direction: row;
    gap: 20px;
  }
  &__cards {
    display: flex;
    max-width: 715px;
    width: 100%;
    padding: 20px 24px;
    flex-direction: column;
    align-items: flex-start;
    gap: 24px;
    border-radius: 20px;
    border: 1px solid #e8e8e8;
  }
  &__card {
    padding-bottom: 24px;
    border-bottom: 1px solid rgba(0, 0, 0, 0.1);
    &:last-child {
      border: none;
      padding-bottom: 0;
    }
  }
  &__order {
    display: flex;
    width: 505px;
    // height: 458px;
    height: fit-content;
    padding: 20px 24px;
    flex-direction: column;
    align-items: flex-start;
    gap: 24px;
    flex-shrink: 0;
    border-radius: 20px;
    border: 1px solid #e8e8e8;
  }
  &__empty {
    border-radius: 20px;
    border: 1px solid #e8e8e8;
    flex-shrink: 0;
    padding: 20px 24px;
    height: 50vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 32px;
  }
  &__empty-text {
    font-size: 24px;
  }
  &__payment {
    text-align: center;
    font-size: 48px;
  }
}
@media (max-width: 1239px) {
  .cart {
    padding-bottom: 60px;
    gap: 6px;
    &__content {
      gap: 18px;
    }
    &__title {
      font-size: 32px;
    }
    &__display {
      flex-direction: column;
      gap: 16px;
    }
    &__cards {
      width: auto;
      padding: 14px;
      gap: 16px;
    }
    &__card {
      padding-bottom: 16px;
    }
    &__order {
      width: auto;
      height: auto;
      padding: 20px;
      gap: 16px;
    }
    &__empty {
      padding: 20px;
      height: 60vh;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      gap: 32px;
    }
    &__empty-text {
      font-size: 16px;
    }
    &__empty-route {
      width: 80%;
    }
    &__payment {
      font-size: 32px;
    }
  }
}

@media (max-width: 768px) {
  .cart {
    padding-bottom: 80px;
    &__display {
      gap: 20px;
    }
    &__empty-route {
      width: 100%;
    }
    &__payment {
      font-size: 24px;
    }
  }
}
</style>
