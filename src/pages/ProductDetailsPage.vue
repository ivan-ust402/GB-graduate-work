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
                @getSelectedColor="setSelectedColor"
              />
            </div>
            <div class="params__param param">
              <h6 class="param__title">Choose Size</h6>
              <SetOfSizeButtons
                :sizes="getAvailableSizes"
                @getSelectedSize="setSelectedSize"
                :selectedSize="getChoosenSize"
              />
            </div>
            <div v-if="!isInCart" class="params__add-to-cart">
              <QuantitySelectorForDetails
                class="params__quantity"
                :quantity="getChoosenQuantity"
                @decrease="decreaseQuantity"
                @increase="increaseQuantity"
              />
              <ButtonSelectionColor
                text="Add to Cart"
                class="params__add-button"
                @click.prevent="addProduct(product)"
                :needArrow="false"
              />
            </div>
            <div v-else class="params__add-to-cart">
              <QuantitySelectorForDetails
                class="params__quantity"
                :quantity="getChoosenQuantity"
                @decrease="decreaseQuantityInCart(product)"
                @increase="increaseQuantityInCart(product)"
              />
              <router-link to="/cart">
                <ButtonSecondaryColor
                  text="Go To Cart"
                  class="params__add-button"
                />
              </router-link>
            </div>
          </div>
        </div>
        <div class="details__bottom"></div>
      </div>
    </div>
  </section>
</template>

<script>
import ButtonSecondaryColor from "@/components/ButtonSecondaryColor.vue"
import ButtonSelectionColor from "@/components/ButtonSelectionColor.vue"
import NavigationBreadcrumbsComponent from "@/components/NavigationBreadcrumbsComponent.vue"
import PriceComponentForProductDetails from "@/components/PriceComponentForProductDetails.vue"
import QuantitySelectorForDetails from "@/components/QuantitySelectorForDetails.vue"
import RatingComponentForProductDetails from "@/components/RatingComponentForProductDetails.vue"
import SetOfColorButtons from "@/components/SetOfColorButtons.vue"
import SetOfSizeButtons from "@/components/SetOfSizeButtons.vue"
import SliderProductDetailsComponent from "@/components/SliderProductDetailsComponent.vue"
import { mapActions, mapGetters } from "vuex"
import { useHead } from "@unhead/vue"

export default {
  // Решить проблему с отображением актуальных размеров
  components: {
    NavigationBreadcrumbsComponent,
    SliderProductDetailsComponent,
    PriceComponentForProductDetails,
    RatingComponentForProductDetails,
    SetOfColorButtons,
    SetOfSizeButtons,
    QuantitySelectorForDetails,
    ButtonSelectionColor,
    ButtonSecondaryColor,
  },
  setup() {
    useHead({
      title: "Details",
      meta: [
        {
          name: "Product details Page",
          content: "There is a shop product details page",
        },
      ],
    })
  },
  data() {
    return {
      product: {},
      availableSizes: [],
      choosenSize: {},
      choosenColor: {},
      choosenQuantity: 1,
      isInCart: false,
    }
  },
  mounted() {
    this.setActualStateForProductDetails()
  },
  computed: {
    ...mapGetters([
      "getCartProductById",
      "getProductById",
      "getCartProductByIdAndSize",
      "getCartProducts",
      "getCartProductByIdAndSizeId",
    ]),
    getAvailableSizes() {
      return this.availableSizes
    },
    getChoosenSize() {
      return this.choosenSize
    },
    getChoosenColor() {
      return this.choosenColor
    },
    getChoosenQuantity() {
      return this.choosenQuantity
    },
    getIsInCart() {
      return this.isInCart
    },
  },
  watch: {
    $route() {
      this.setActualStateForProductDetails()
    },
  },
  methods: {
    ...mapActions(["addToCart", "decreaseProductQuantity"]),
    setActualStateForProductDetails() {
      this.product = this.changeProductForProductDetailPage(
        this.$route.params.id,
        this.$route.query.sizeId
      )
      this.availableSizes = this.findAvailableSizes()

      // Этот блок на случай, если в query запросе будет использован несуществующий в объекте sizeId, в случае, если это произойдет, то будет установлен размер из первых доступных, в будущем нужно отрефакторить данный код, чтобы в случае не корректности query запроса происходил редирект на NotFoundPage
      let findQuerySize = this.availableSizes.find(size => Number(size.size.id) === Number(this.$route.query.sizeId) && Number(size.amount) !== 0)
      if (findQuerySize) {
        this.choosenSize = this.getInitialSize(this.$route.query.sizeId)
      }
      else {
        const defaultSize = this.product.sizesInfo.find(sizeInfo => Number(sizeInfo.amount) > 0).size.id
        this.choosenSize = this.getInitialSize(defaultSize)
      }
      
      this.choosenColor = this.getInitialColor()
      this.choosenQuantity = this.getInitialQuantity()
      this.isInCart = this.getInitialIsInCart()
    },
    increaseQuantityInCart(product) {
      const sendProduct = {
        ...product,
        choosenSize: this.getChoosenSize,
        quantity: this.getChoosenQuantity,
      }
      this.addToCart(sendProduct)
      this.setSelectedSize(this.getChoosenSize.size.id)
    },
    decreaseQuantityInCart(product) {
      const sendProduct = {
        ...product,
        choosenSize: this.getChoosenSize,
        quantity: this.getChoosenQuantity,
      }
      this.decreaseProductQuantity(sendProduct)
      this.setSelectedSize(this.getChoosenSize.size.id)
    },
    addProduct(product) {
      this.isInCart = true
      const sendProduct = {
        ...product,
        choosenSize: this.getChoosenSize,
        quantity: this.getChoosenQuantity,
      }
      this.addToCart(sendProduct)
    },
    increaseQuantity() {
      if (this.getChoosenQuantity < 99) {
        this.choosenQuantity += 1
      } else {
        this.choosenQuantity = 1
      }
    },
    decreaseQuantity() {
      if (this.getChoosenQuantity > 1) {
        this.choosenQuantity -= 1
      } else {
        this.choosenQuantity = 99
      }
    },
    getInitialIsInCart() {
      return this.product.inCart
    },
    getInitialQuantity() {
      return this.product.quantity
    },
    getInitialColor() {
      return this.product.color
    },
    setSelectedColor(color) {
      this.choosenColor = color
    },
    getSizeById(id) {
      return this.availableSizes.find((size) => size.size.id === id)
    },
    setSelectedSize(id) {
      const changedSize = this.getSizeById(id)
      const currentProduct = { ...this.product, choosenSize: changedSize }
      const existingProductInCart =
        this.getCartProductByIdAndSize(currentProduct)
      if (existingProductInCart) {
        this.choosenQuantity = existingProductInCart.quantity
        this.isInCart = true
      } else {
        this.isInCart = false
        this.choosenQuantity = 1
      }
      this.choosenSize = changedSize
    },
    getInitialSize(sizeId) {
      return this.availableSizes.find((size) => size.size.id === Number(sizeId))
    },
    findAvailableSizes() {
      return this.product.sizesInfo.filter((size) => Number(size.amount) > 0)
    },
    changeProductForProductDetailPage(id, sizeId) {
      const currentSizeId = Number(sizeId)
      const productInCart = this.getCartProductByIdAndSizeId(id, currentSizeId)
      if (productInCart) {
        const cartProduct = { ...productInCart }
        return cartProduct
      } else {
        const newProduct = this.getProductById(id)
        const defaultSize = newProduct.sizesInfo.find(
          (sizeInfo) => sizeInfo.size.id === currentSizeId
        )
        const inCart = false
        const quantity = 1
        return { ...newProduct, choosenSize: defaultSize, inCart, quantity }
      }
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
