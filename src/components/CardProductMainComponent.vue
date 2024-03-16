<template>
  <div class="card">
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
</template>

<script>
import ButtonSecondaryColor from "@/components/ButtonSecondaryColor.vue"
import PriceComponent from "@/components/PriceComponent.vue"
import RatingComponent from "@/components/RatingComponent.vue"

export default {
  props: {
    product: {
      type: Object,
      default: () => {
        return {
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
        }
      },
    },
  },
  components: {
    ButtonSecondaryColor,
    RatingComponent,
    PriceComponent,
  },
}
</script>

<style lang="scss" scoped>
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
    &:active .card__img-box-hover{
      // position: absolute;
      background-color: #121212;
      opacity: 0.3;
    }
  }
}

@media (max-width: 1239px) {
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
  .card {
    width: 173px;
    height: 309px;
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
