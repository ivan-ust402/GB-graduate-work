<template>
  <section class="cart center">
    <NavigationBreadcrumbsComponent class="card__breadcrumbs" />
    <div class="cart__content">
      <h3 class="cart__title">Your cart</h3>
      <div class="cart__display">
        <div class="cart__cards">
          <div
            class="cart__card card"
            v-for="product in products"
            :key="product.id"
          >
            <img
              :src="require(`@/assets/img/products/${product.image}`)"
              :alt="product.type.name"
            />
            <div class="card__content">
              <div class="card__info"></div>
              <div class="card__controls">
                <a href="#" class="card__delete"></a>
                <QuantitySelector 
                  :quantity="product.quantity"
                  @increase="addNewProduct(product.id)"
                  @decrease="decreaseQuantityProduct(product.id)"
                />
                <div class="card__amount amount">
                  <a href="#" class="amount__decrease">-</a>
                  <p class="amount__value">{{ product.quantity }}</p>
                  <a href="#" class="amount__increase">+</a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="cart__order order">
          <h6 class="order__title">Order Summary</h6>
          <div class="order__price price">
            <div class="price__checkout">
              <div class="price__item">
                <h6 class="price__title">Subtotal</h6>
                <p class="price__value">${{ getCartSubtotalPrice }}</p>
              </div>
              <div class="price__item">
                <h6 class="price__title">Delivery Fee</h6>
                <p class="price__value">${{ getShippingCost }}</p>
              </div>
              <div class="price__item">
                <h6 class="price__title">Discount</h6>
                <p class="price__value price__value_discount">
                  ${{ getCartProductsDiscount }}
                </p>
              </div>
              <div class="price__item">
                <h6 class="price__title">
                  Subtotal (<span class="price__title-span">{{
                    getPromoCodeAmount
                  }}</span
                  >)
                </h6>
                <p class="price__value price__value_discount">
                  ${{ getPromoCodeDiscountValue }}
                </p>
              </div>
            </div>
            <div class="price-box__total">
              <div class="price__item">
                <h6 class="price__title price__title_total">Subtotal</h6>
                <p class="price__value">${{ getCartTotalPrice }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import NavigationBreadcrumbsComponent from "@/components/NavigationBreadcrumbsComponent.vue"
import QuantitySelector from "@/components/QuantitySelector.vue";
import { mapActions, mapGetters } from "vuex"

export default {
  components: {
    NavigationBreadcrumbsComponent,
    QuantitySelector
  },
  data() {
    return {
      products: [
        {
          id: "0",
          quantity: 12,
          sku: "937023680",
          title: "Jeans D13",
          price: 20.63,
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
  computed: {
    ...mapGetters([
      "getCartProducts",
      "getCartSubtotalPrice",
      "getPromoCodeAmount",
      "getShippingCost",
      "getCartProductsDiscount",
      "getPromoCodeDiscountValue",
      "getCartTotalPrice",
    ]),
  },
  methods: {
    ...mapActions([]),
    addNewProduct(id){
      console.log(id)
    },
    decreaseQuantityProduct(id) {
      console.log(id)
    }
  },
}
</script>

<style lang="scss" scoped>
.cart {
  padding-top: 46px;
  padding-bottom: 80px;
  &__title {
    color: #121212;
    // font-family: "integral_cfregular";
    // font-size: 40px;
    line-height: normal;
  }
}

@media (max-width: 1239px) {
  .cart {
    padding-bottom: 60px;
  }
}

@media (max-width: 768px) {
  .cart {
    padding-bottom: 80px;
  }
}
</style>
