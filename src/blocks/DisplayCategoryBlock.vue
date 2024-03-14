<template>
  <div
    class="offer-with-button"
    :class="{ border_bottom: borderBottom, }"
  >
    <div class="offer">
      <h2 class="offer__title">{{ title.toUpperCase() }}</h2>
      <div 
        class="offer__cards"
        :class="{ cards_padding_bottom: button, cards_padding_bottom_without_button: !button}"
      >
        <CardProductMainComponent
          class="offer__card"
          v-for="product in products"
          :key="product.id"
          :product="product"
        />
      </div>
      <div class="offer__more-cards" v-for="page in getExtraPages">
        <CardProductMainComponent
          class="offer__card"
          v-for="product in moreProducts"
          :key="product.id"
          :product="product"
        />
      </div>
    </div>
    <ButtonSecondaryColor
      v-if="button"
      class="offer-with-button__button"
      text="View more"
      @click.prevent="downloadMoreProducts"
    />
  </div>
</template>

<script>
import ButtonSecondaryColor from "@/components/ButtonSecondaryColor.vue"
import CardProductMainComponent from "@/components/CardProductMainComponent.vue"

export default {
  props: {
    title: {
      type: String,
      default: () => "Loremka",
    },
    products: {
      type: Array,
      default: () => [
        {
          id: "0",
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
    },
    borderBottom: {
      type: Boolean,
      default: () => true,
    },
    button: {
      type: Boolean,
      default: () => true,
    },
  },
  components: {
    CardProductMainComponent,
    ButtonSecondaryColor,
  },
  data() {
    return {
      extraPages: 0,
      moreProducts: [
        {
          id: "95",
          sku: "933469103",
          title: "Leggings MAECO Sport",
          price: 10.95,
          currency: "USD",
          currencyCode: "&#36;",
          grade: 5.0,
          discount: 0,
          sales: 1000,
          type: { id: 1, name: "Trousers" },
          dressStyle: { id: 3, name: "Gym" },
          gender: { id: 1, name: "woman" },
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
              amount: "200",
            },
            {
              size: {
                id: 3,
                name: "Medium",
                shortName: "m",
              },
              amount: "10",
            },
            {
              size: {
                id: 4,
                name: "Large",
                shortName: "l",
              },
              amount: "40",
            },
            {
              size: {
                id: 5,
                name: "X-Large",
                shortName: "xxs",
              },
              amount: "40",
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
            id: 22,
            name: "beige",
            code: "#F7EBE1",
          },
          allColors: [
            {
              productId: 95,
              color: {
                id: 22,
                name: "beige",
                code: "#F7EBE1",
              },
            },
            {
              productId: 96,
              color: {
                id: 7,
                name: "light brown",
                code: "#CABCA3",
              },
            },
            {
              productId: 97,
              color: {
                id: 1,
                name: "grey",
                code: "#4D4A52",
              },
            },
            {
              productId: 98,
              color: {
                id: 5,
                name: "black",
                code: "#141316",
              },
            },
          ],
          added: "2023-02-26T12:30:00.000-05:00",
          newArrivals: true,
          topSelling: true,
          image: "95/card.jpg",
          images: ["95/slider-0.jpg", "95/slider-1.jpg", "95/slider-2.jpg"],
          icons: ["95/icon-0.jpg", "95/icon-1.jpg", "95/icon-2.jpg"],
          availability: "true",
          shortDescription:
            "Ribbed leggings are the perfect choice for active and stylish girls! These women's leggings are a real find for those who value comfort and fashion.",
          details: {
            description:
              "Seamless leggings are created for those who value comfort and quality. Ribbed leggings are the perfect choice for active and stylish girls! These women's leggings are a real find for those who value comfort and fashion. Thanks to their high rise and seamless design, they are perfect for fitness classes or everyday wear. The high waist makes leggings an excellent choice for girls who want to hide some figure flaws and highlight their beauty. Thanks to the slimming effect and elastic fabric, they are suitable for an adult woman or teenage girl. Black ribbed high-waisted leggings pair perfectly with any other item for a stylish and elegant look. High quality materials guarantee a long service life of the product, and the absence of pilling and fading after washing preserves its original appearance.",
            composition: ["polyester 34%", "nylon 54%", "spandex 12%"],
          },
        },
        {
          id: "96",
          sku: "953618383",
          title: "Leggings MAECO Sport",
          price: 11.06,
          currency: "USD",
          currencyCode: "&#36;",
          grade: 4.5,
          discount: 0,
          sales: 1005,
          type: { id: 1, name: "Trousers" },
          dressStyle: { id: 3, name: "Gym" },
          gender: { id: 1, name: "woman" },
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
              amount: "200",
            },
            {
              size: {
                id: 3,
                name: "Medium",
                shortName: "m",
              },
              amount: "10",
            },
            {
              size: {
                id: 4,
                name: "Large",
                shortName: "l",
              },
              amount: "40",
            },
            {
              size: {
                id: 5,
                name: "X-Large",
                shortName: "xxs",
              },
              amount: "40",
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
            id: 7,
            name: "light brown",
            code: "#CABCA3",
          },
          allColors: [
            {
              productId: 95,
              color: {
                id: 22,
                name: "beige",
                code: "#F7EBE1",
              },
            },
            {
              productId: 96,
              color: {
                id: 7,
                name: "light brown",
                code: "#CABCA3",
              },
            },
            {
              productId: 97,
              color: {
                id: 1,
                name: "grey",
                code: "#4D4A52",
              },
            },
            {
              productId: 98,
              color: {
                id: 5,
                name: "black",
                code: "#141316",
              },
            },
          ],
          added: "2023-02-26T12:30:00.000-05:00",
          newArrivals: true,
          topSelling: true,
          image: "96/card.jpg",
          images: ["96/slider-0.jpg", "96/slider-1.jpg", "96/slider-2.jpg"],
          icons: ["96/icon-0.jpg", "96/icon-1.jpg", "96/icon-2.jpg"],
          availability: "true",
          shortDescription:
            "Ribbed leggings are the perfect choice for active and stylish girls! These women's leggings are a real find for those who value comfort and fashion.",
          details: {
            description:
              "Seamless leggings are created for those who value comfort and quality. Ribbed leggings are the perfect choice for active and stylish girls! These women's leggings are a real find for those who value comfort and fashion. Thanks to their high rise and seamless design, they are perfect for fitness classes or everyday wear. The high waist makes leggings an excellent choice for girls who want to hide some figure flaws and highlight their beauty. Thanks to the slimming effect and elastic fabric, they are suitable for an adult woman or teenage girl. Black ribbed high-waisted leggings pair perfectly with any other item for a stylish and elegant look. High quality materials guarantee a long service life of the product, and the absence of pilling and fading after washing preserves its original appearance.",
            composition: ["polyester 34%", "nylon 54%", "spandex 12%"],
          },
        },
        {
          id: "97",
          sku: "1413135363 ",
          title: "Leggings MAECO Sport",
          price: 11.98,
          currency: "USD",
          currencyCode: "&#36;",
          grade: 5.0,
          discount: 0,
          sales: 500,
          type: { id: 1, name: "Trousers" },
          dressStyle: { id: 3, name: "Gym" },
          gender: { id: 1, name: "woman" },
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
              amount: "200",
            },
            {
              size: {
                id: 3,
                name: "Medium",
                shortName: "m",
              },
              amount: "10",
            },
            {
              size: {
                id: 4,
                name: "Large",
                shortName: "l",
              },
              amount: "40",
            },
            {
              size: {
                id: 5,
                name: "X-Large",
                shortName: "xxs",
              },
              amount: "40",
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
          allColors: [
            {
              productId: 95,
              color: {
                id: 22,
                name: "beige",
                code: "#F7EBE1",
              },
            },
            {
              productId: 96,
              color: {
                id: 7,
                name: "light brown",
                code: "#CABCA3",
              },
            },
            {
              productId: 97,
              color: {
                id: 1,
                name: "grey",
                code: "#4D4A52",
              },
            },
            {
              productId: 98,
              color: {
                id: 5,
                name: "black",
                code: "#141316",
              },
            },
          ],
          added: "2023-02-26T12:30:00.000-05:00",
          newArrivals: true,
          topSelling: true,
          image: "97/card.jpg",
          images: ["97/slider-0.jpg", "97/slider-1.jpg", "97/slider-2.jpg"],
          icons: ["97/icon-0.jpg", "97/icon-1.jpg", "97/icon-2.jpg"],
          availability: "true",
          shortDescription:
            "Ribbed leggings are the perfect choice for active and stylish girls! These women's leggings are a real find for those who value comfort and fashion.",
          details: {
            description:
              "Seamless leggings are created for those who value comfort and quality. Ribbed leggings are the perfect choice for active and stylish girls! These women's leggings are a real find for those who value comfort and fashion. Thanks to their high rise and seamless design, they are perfect for fitness classes or everyday wear. The high waist makes leggings an excellent choice for girls who want to hide some figure flaws and highlight their beauty. Thanks to the slimming effect and elastic fabric, they are suitable for an adult woman or teenage girl. Black ribbed high-waisted leggings pair perfectly with any other item for a stylish and elegant look. High quality materials guarantee a long service life of the product, and the absence of pilling and fading after washing preserves its original appearance.",
            composition: ["polyester 34%", "nylon 54%", "spandex 12%"],
          },
        },
        {
          id: "98",
          sku: "1412874870",
          title: "Leggings MAECO Sport",
          price: 11.98,
          currency: "USD",
          currencyCode: "&#36;",
          grade: 5.0,
          discount: 0,
          sales: 400,
          type: { id: 1, name: "Trousers" },
          dressStyle: { id: 3, name: "Gym" },
          gender: { id: 1, name: "woman" },
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
              amount: "200",
            },
            {
              size: {
                id: 3,
                name: "Medium",
                shortName: "m",
              },
              amount: "10",
            },
            {
              size: {
                id: 4,
                name: "Large",
                shortName: "l",
              },
              amount: "40",
            },
            {
              size: {
                id: 5,
                name: "X-Large",
                shortName: "xxs",
              },
              amount: "40",
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
            id: 5,
            name: "black",
            code: "#141316",
          },
          allColors: [
            {
              productId: 95,
              color: {
                id: 22,
                name: "beige",
                code: "#F7EBE1",
              },
            },
            {
              productId: 96,
              color: {
                id: 7,
                name: "light brown",
                code: "#CABCA3",
              },
            },
            {
              productId: 97,
              color: {
                id: 1,
                name: "grey",
                code: "#4D4A52",
              },
            },
            {
              productId: 98,
              color: {
                id: 5,
                name: "black",
                code: "#141316",
              },
            },
          ],
          added: "2023-02-26T12:30:00.000-05:00",
          newArrivals: true,
          topSelling: true,
          image: "98/card.jpg",
          images: ["98/slider-0.jpg", "98/slider-1.jpg", "98/slider-2.jpg"],
          icons: ["98/icon-0.jpg", "98/icon-1.jpg", "98/icon-2.jpg"],
          availability: "true",
          shortDescription:
            "Ribbed leggings are the perfect choice for active and stylish girls! These women's leggings are a real find for those who value comfort and fashion.",
          details: {
            description:
              "Seamless leggings are created for those who value comfort and quality. Ribbed leggings are the perfect choice for active and stylish girls! These women's leggings are a real find for those who value comfort and fashion. Thanks to their high rise and seamless design, they are perfect for fitness classes or everyday wear. The high waist makes leggings an excellent choice for girls who want to hide some figure flaws and highlight their beauty. Thanks to the slimming effect and elastic fabric, they are suitable for an adult woman or teenage girl. Black ribbed high-waisted leggings pair perfectly with any other item for a stylish and elegant look. High quality materials guarantee a long service life of the product, and the absence of pilling and fading after washing preserves its original appearance.",
            composition: ["polyester 34%", "nylon 54%", "spandex 12%"],
          },
        },
      ],
    }
  },
  computed: {
    getExtraPages() {
      return this.extraPages
    },
  },
  methods: {
    downloadMoreProducts() {
      this.extraPages += 1
    },
  },
}
</script>

<style lang="scss" scoped>
.cards_padding_bottom {
  padding-bottom: 36px;
}
.cards_padding_bottom_without_button {
  padding-bottom: 0;
}
.border_bottom {
  border-bottom: 1px solid #e8e8e8;
}
.offer-with-button {
  display: flex;
  flex-direction: column;
  padding-top: 62px;
  padding-bottom: 64px;
  &__button {
    align-self: center;
  }
}
.offer {
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: center;
  &__title {
    box-sizing: border-box;
    align-self: center;
  }
  &__cards {
    display: flex;
    padding-top: 52px;
    // padding-bottom: 36px;
    column-gap: 20px;
    row-gap: 36px;
    // flex-wrap: wrap;
    justify-content: center;
  }
  &__more-cards {
    display: flex;
    padding-top: 52px;
    padding-bottom: 36px;
    column-gap: 20px;
    row-gap: 36px;
    justify-content: center;
  }
}

@media (max-width: 1239px) {
  .offer-with-button {
    padding-top: 40px;
    padding-bottom: 40px;
  }
  .offer {
    &__title {
      align-self: flex-start;
      text-align: center;
      font-size: 32px;
      // font-weight: 400;
      font-family: "integral_cfregular";
      line-height: 36px;
    }
    &__cards {
      padding-top: 32px;
      padding-bottom: 24px;
      column-gap: 16px;
      row-gap: 24px;
      justify-content: start;
      overflow-x: hidden;
    }
    &__more-cards {
      padding-top: 32px;
      padding-bottom: 24px;
      column-gap: 16px;
      row-gap: 24px;
      justify-content: start;
      overflow-x: hidden;
    }
  }
}

@media (max-width: 768px) {
  .offer-with-button {
    padding-top: 41px;
    padding-bottom: 20px;
  }
  .offer {
    &__title {
      align-self: center;
    }
    &__cards {
      padding-top: 24px;
      padding-bottom: 24px;
      column-gap: 10px;
      row-gap: 24px;
      justify-content: start;
    }
    &__more-cards {
      padding-top: 24px;
      padding-bottom: 24px;
      column-gap: 10px;
      row-gap: 24px;
      justify-content: start;
      flex-wrap: wrap;
    }
    &__card {
      height: 309px;
    }
  }
}
</style>
