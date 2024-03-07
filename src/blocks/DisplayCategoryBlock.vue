<template>
  <div class="offer">
    <h2 class="offer__title">{{ title.toUpperCase() }}</h2>
    <div class="offer__cards">
      <div class="offer__card card">
        <div class="card__content">
          <div class="card__img-box">
            <img
              :src="require(`@/assets/img/products/${product.image}`)"
              :alt="product.title"
              class="card__img"
            />
          </div>
          <div class="card__description">
            <h6 class="card__title">
              {{ product.title.toUpperCase() }}
            </h6>
            <div class="card__rating rating">
              <div class="rating__stars stars">
                <div
                  class="stars__item"
                  v-for="item in Math.floor(product.grade)"
                >
                  <img
                    src="@/assets/img/common/full-star-icon.svg"
                    alt="star"
                    class="stars__fullstar"
                  />
                </div>
                <div class="stars__item" v-if="product.grade % 1">
                  <img
                    src="@/assets/img/common/half-star-icon.svg"
                    alt="half star"
                    class="stars__halfstar"
                  />
                </div>
              </div>
              <div class="rating__block">
                <p class="rating__text">
                  <span class="rating__grade">{{ product.grade }}</span
                  >5
                </p>
              </div>
            </div>
            <div class="card__price price">
              <div class="price__price">
                <span v-html="product.currencyCode" class="price__price"></span
                >{{ product.price }}
              </div>
              <div
                class="price__price price__price_old"
                v-if="Number(product.discount) !== 0"
              >
                <span
                  v-html="product.currencyCode"
                  class="price__price price__price_old"
                ></span
                >{{ (product.price - (product.price * product.discount) / 100).toFixed(2) }}
              </div>
              <div class="price__discount">-{{ product.discount }}%</div>
            </div>
          </div>
        </div>
        <div class="card__content-hover-wrapper"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: () => "Loremka",
    },
  },
  data() {
    return {
      product: {
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
        images: [
          "@/assets/img/products/0/slider-0.jpg",
          "@/src/assets/img/products/0/slider-1.jpg",
          "@/src/assets/img/products/0/slider-2.jpg",
        ],
        icons: [
          "@/assets/img/products/0/icon-0.jpg",
          "@/assets/img/products/0/icon-1.jpg",
          "@/assets/img/products/0/icon-2.jpg",
        ],
        availability: "true",
        shortDescription:
          "Men's banana jeans, like classic ones, are a basic item in any man's wardrobe.",
        details: {
          description:
            "Men's banana jeans, like classic ones, are a basic item in any man's wardrobe. The trousers are wide, slightly tapered at the bottom, it is possible to roll up the bottom of the legs. The jeans are NOT insulated, NOT with elastic, NOT with laces, the model has a zipper and a button on the front, and there are belt loops on the waistband. There are comfortable deep welt pockets at the front and patch pockets at the back. A high rise, unlike low or mid rise pants, is versatile and will look like stylish pants in any situation. Straight-fit trousers are made of 100% cotton. Standard denim pants are suitable for men, boys, youth, boys and teenagers of any shape and height.",
          composition: ["cotton 90%", "elastane 10%"],
        },
      },
    }
  },
}
</script>

<style lang="scss" scoped>
.card {
  box-sizing: border-box;
  display: flex;
  width: 295px;
  flex-direction: column;
  &__content {
    display: flex;
    flex-direction: column;
    gap: 18px;
  }
  &__img-box {
    box-sizing: border-box;
    display: flex;
    padding: 0px 13px 0px 14px;
    justify-content: center;
    align-items: center;
    border-radius: 20px;
    background: #f0eeed;
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
  &__description {
    display: flex;
    flex-direction: column;
    gap: 8px;
  }
  &__title {
    box-sizing: border-box;
    padding-bottom: 3px;
  }
  &__rating {
    box-sizing: border-box;
  }
  &__price {

  }
  &__content-hover-wrapper {
  }
}
.rating {
  display: flex;
  flex-direction: row;
  gap: 13px;
  height: 17px;
  &__block {
  }
  &__text {
    color: rgba(0, 0, 0, 0.6);
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }
  &__grade {
    color: var(--Black, #121212);
    &::after {
      content: "/";
    }
  }
}
.price {
  display: flex;
  font-display: row;
  gap: 10px;
  &__price {
    color: #121212;
    // font-family: Satoshi;
    font-size: 24px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    &_old {
      color: #999;
      font-size: 24px;
      font-style: normal;
      font-weight: 700;
      line-height: normal;
      text-decoration-line: line-through;
    }
  }
  &__discount {
    display: flex;
    width: 58px;
    padding: 6px 14px;
    justify-content: center;
    align-items: center;
    gap: 12px;
    border-radius: 62px;
    background: rgba(255, 51, 51, 0.1);
    color: #f33;
    font-size: 12px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
  }
}
.stars {
  display: flex;
  flex-direction: row;
  gap: 5px;
  height: 17px;
  &__item {
    height: 17px;
  }
}
</style>
