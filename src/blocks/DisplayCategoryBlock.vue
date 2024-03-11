<template>
  <div class="offer-with-button">
    <div class="offer">
      <h2 class="offer__title">{{ title.toUpperCase() }}</h2>
      <div class="offer__cards">
        <div
          class="offer__card card"
          v-for="(product, index) in products"
          :key="index"
        >
          <!-- <div class="offer__card card"> -->
          <div class="card__content">
            <div class="card__img-box">
              <img
                :src="require(`@/assets/img/products/${product.image}`)"
                :alt="product.title"
                class="card__img"
              />
              <div class="card__img-box-hover"></div>
            </div>
            <div class="card__description">
              <h6 class="card__title">
                {{ product.title.toUpperCase() }}
              </h6>
              <RatingComponent class="card__rating" :grade="product.grade" />
              <PriceComponent 
                class="card__price"
                :price="product.price" 
                :discount="product.discount"
                :currencyHTMLCode="product.currencyCode"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
    <ButtonSecondaryColor class="offer-with-button__button" text="View more" />
  </div>
</template>

<script>
import ButtonSecondaryColor from "@/components/ButtonSecondaryColor.vue"
import PriceComponent from "@/components/PriceComponent.vue"
import RatingComponent from "@/components/RatingComponent.vue"
import StarsComponent from "@/components/StarsComponent.vue"

export default {
  props: {
    title: {
      type: String,
      default: () => "Loremka",
    },
  },
  components: {
    ButtonSecondaryColor,
    StarsComponent,
    RatingComponent,
    PriceComponent
  },
  data() {
    return {
      products: [
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
    }
  },
}
</script>

<style lang="scss" scoped>
.offer-with-button {
  display: flex;
  flex-direction: column;
  padding-top: 62px;
  padding-bottom: 64px;
  border-bottom: 1px solid #e8e8e8;
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
    padding-bottom: 36px;
    column-gap: 20px;
    row-gap: 36px;
    // flex-wrap: wrap;
    justify-content: center;
  }
}
.card {
  cursor: pointer;
  box-sizing: border-box;
  display: flex;
  width: 295px;
  flex-direction: column;
  position: relative;
  transition: all 0.3s ease-in;
  &__content {
    display: flex;
    flex-direction: column;
    gap: 12px;
  }
  &__img-box {
    box-sizing: border-box;
    display: flex;
    padding: 0px 13px 0px 14px;
    justify-content: center;
    align-items: center;
    border-radius: 20px;
    background: #f0eeed;
    position: relative;
  }
  &__img {
    box-sizing: border-box;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 20px;
    background: #f0eeed;
    width: 295px;
  }
  &__img-box-hover {
    transition: all 0.3s ease-in;
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: #121212;
    opacity: 0;
    border-radius: 20px;
  }
  &__description {
    display: flex;
    flex-direction: column;
    gap: 8px;
  }
  &__title {
    white-space: nowrap;
    box-sizing: border-box;
    padding-bottom: 3px;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  &__rating {
    box-sizing: border-box;
  }

  @media (hover: hover) {
    &:hover .card__img-box-hover {
      background-color: #121212;
      opacity: 0.2;
    }
  }
  @media (hover: none) {
    &:active {
      position: absolute;
      background-color: #121212;
      opacity: 0.3;
    }
  }
}

@media (max-width: 1024px) {
  .offer-with-button {
    padding-top: 40px;
    padding-bottom: 40px;
  }
  .offer {
    &__title {
      align-self: flex-start;
      text-align: center;
      font-size: 32px;
      font-weight: 400;
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
  }
  .card {
    width: 224px;
    &__content {
      gap: 12px;
    }
    &__img-box {
      border-radius: 16px;
    }
    &__img {
      border-radius: 16px;
      width: 224px;
    }
    &__img-box-hover {
      border-radius: 16px;
    }
    &__description {
      gap: 8px;
    }
    &__title {
      padding-bottom: 0px;
      font-size: 16px;
    }
    &__price {
      padding-top: 4px;
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
    &__card {
      height: 309px;
    }
  }
  .card {
    width: 173px;
    height: 309px;
    // &__content {
    //   gap: 12px;
    // }
    &__img-box {
      border-radius: 12px;
    }
    &__img {
      border-radius: 12px;
      width: 173px;
    }
    &__img-box-hover {
      border-radius: 12px;
    }
    &__description {
      gap: 11px;
    }
    &__title {
      padding-bottom: 0px;
    }
    &__price {
      padding-top: 4px;
      flex-wrap: wrap;
    }
  }
}
</style>
