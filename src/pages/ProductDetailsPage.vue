<template>
  <section class="details center">
    <NavigationBreadcrumbsComponent class="details__breadcrumbs" />
    <div class="details__content">
      <div class="details__display">
        <div class="details__top">
          <SliderProductDetailsComponent :product="product" />
          <div class="details__params params">
            <div class="params__info">
              <h3 class="params__title">{{ product.title }}</h3>
              <div class="params__about">
                <div class="params__rating-price">
                  <RatingComponentForProductDetails
                    class="params__rating"
                    :grade="product.grade"
                  />
                  <PriceComponentForProductDetails
                    class="params__price"
                    :currencyHTMLCode="product.currencyHTMLCode"
                    :price="product.price"
                    :discount="product.discount"
                  />
                </div>
                <p class="params__short-description">
                  {{ product.shortDescription }}
                </p>
              </div>
            </div>
            <div class="params__param param">
              <h6 class="param__title">Select Colors</h6>
              <SetOfColorButtons
                class="param__content"
                :choosenColor="product.color"
                :colors="product.allColors"
              />
            </div>
            <div class="params__param param">
              <h6 class="param__title">Choose Size</h6>
              <SetOfSizeButtons :sizes="product.sizesInfo" />
            </div>
            <div class="params__add-to-cart">
              <QuantitySelectorForDetails class="params__quantity" />
              <ButtonSelectionColor
                text="Add to Cart"
                class="params__add-button"
              />
            </div>
          </div>
        </div>
        <div class="details__bottom"></div>
      </div>
    </div>
  </section>
</template>

<script>
import ButtonSelectionColor from "@/components/ButtonSelectionColor.vue"
import NavigationBreadcrumbsComponent from "@/components/NavigationBreadcrumbsComponent.vue"
import PriceComponentForProductDetails from "@/components/PriceComponentForProductDetails.vue"
import QuantitySelectorForDetails from "@/components/QuantitySelectorForDetails.vue"
import RatingComponentForProductDetails from "@/components/RatingComponentForProductDetails.vue"
import SetOfColorButtons from "@/components/SetOfColorButtons.vue"
import SetOfSizeButtons from "@/components/SetOfSizeButtons.vue"
import SliderProductDetailsComponent from "@/components/SliderProductDetailsComponent.vue"
import { mapGetters } from "vuex"

export default {
  components: {
    NavigationBreadcrumbsComponent,
    SliderProductDetailsComponent,
    PriceComponentForProductDetails,
    RatingComponentForProductDetails,
    SetOfColorButtons,
    SetOfSizeButtons,
    QuantitySelectorForDetails,
    ButtonSelectionColor,
  },
  data() {
    return {
      product: {},
    }
  },
  mounted() {
    // this.product = this.getProductById(this.$route.params.id)
    this.product = this.changeProductForProductDetailPage(this.$route.params.id)
  },
  computed: {
    ...mapGetters(["getCartProductById", "getProductById"]),
  },
  methods: {
    changeProductForProductDetailPage(id) {
      const productInCart = this.getCartProductById(id)
      if (productInCart) {
        return productInCart
      } else {
        const newProduct = this.getProductById(id)
        const defaultSize = this.getFirstAvailableSize(newProduct.sizesInfo)
        const inCart = false
        return { ...newProduct, choosenSize: defaultSize, inCart }
      }
    },
    getFirstAvailableSize(sizes) {
      return sizes.find((size) => size.amount != 0)
    },
  },
}
</script>

<style lang="scss" scoped>
.param {
  padding-top: 13px;
  padding-bottom: 24px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 16px;
  border-bottom: 1px solid #e8e8e8;
  &__title {
    color: #222;
    font-family: "satoshiregular";
    font-size: 16px;
    line-height: normal;
  }
}
.params {
  display: flex;
  flex-direction: column;

  &__info {
    display: flex;
    flex-direction: column;
    gap: 12px;
    padding-bottom: 24px;
    border-bottom: 1px solid #e8e8e8;
  }
  &__title {
    color: #121212;
    font-family: "integral_cfregular";
    font-size: 40px;
  }
  &__about {
    display: flex;
    flex-direction: column;
    gap: 9px;
  }
  &__rating-price {
    display: flex;
    flex-direction: column;
    gap: 14px;
    width: 100%;
  }
  &__rating {
    align-items: center;
  }
  &__price {
    font-size: 32px;
  }
  &__short-description {
    color: #222;
    font-family: "satoshiregular";
    font-size: 16px;
  }
  &__add-to-cart {
    display: flex;
    width: 100%;
    gap: 20px;
    align-items: center;
    padding-top: 24px;
  }
  &__quantity {
    width: 170px;
  }
  &__add-button {
    width: 400px;
  }
}
.details {
  padding-top: 46px;
  display: flex;
  flex-direction: column;
  gap: 36px;
  &__display {
    display: flex;
    flex-direction: column;
    gap: 68px;
  }
  &__top {
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    gap: 40px;
  }
}

@media (max-width: 1239px) {
  .param {
    padding-top: 12px;
    padding-bottom: 15px;
    &__title {
      font-size: 14px;
    }
  }
  .params {
    &__info {
      gap: 12px;
      padding-bottom: 12px;
    }
    &__title {
      font-size: 32px;
      line-height: 100%;
    }
    &__about {
      gap: 12px;
    }
    &__rating-price {
      gap: 12px;
    }
    &__short-description {
      font-size: 14px;
    }
    &__add-to-cart {
      gap: 16px;
    }
    &__quantity {
      width: 104px;
    }
    &__add-button {
      width: 224px;
    }
  }
  .details {
    &__display {
      gap: 60px;
    }
    &__top {
      gap: 16px;
      align-items: flex-start;
    }
  }
}

@media (max-width: 768px) {
  .param {
    padding-top: 15px;
    padding-bottom: 24px;
  }
  .params {
    &__info {
      gap: 16px;
      padding-bottom: 36px;
    }
    &__about {
      gap: 10px;
    }
    &__add-to-cart {
      gap: 13px;
    }
    &__quantity {
      width: 109px;
    }
    &__add-button {
      width: 236px;
    }
  }
  .details {
    &__display {
      gap: 50px;
    }
    &__top {
      flex-direction: column;
      gap: 32px;
    }
  }
}
</style>
