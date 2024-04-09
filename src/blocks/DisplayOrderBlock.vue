<template>
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
            -${{ getCartProductsDiscount }}
          </p>
        </div>
        <div class="price__item">
          <h6 class="price__title">
            Promocode (<span class="price__title_span"
              >{{ getPromoCodePercent }}%</span
            >)
          </h6>
          <p class="price__value price__value_discount">
            -${{ getPromoCodeDiscountValue }}
          </p>
        </div>
      </div>
      <div class="price__total">
        <div class="price__item">
          <h6 class="price__title price__title_total">Total</h6>
          <p class="price__value price__value_total">
            ${{ getCartTotalPrice }}
          </p>
        </div>
      </div>
    </div>
    <FormForPromoCode
      class="order__promo"
      @getInputMessage="receivePromoMessage"
    />
    <!-- <FormForPromoCode 
      class="order__promo" 
    /> -->
    <ButtonSelectionColor
      class="order__apply"
      text="Go to Checkout"
      :needArrow="true"
      @click.prevent="applyCart"
    />
  </div>
</template>

<script>
import ButtonSelectionColor from "@/components/ButtonSelectionColor.vue"
import CardProductForCart from "@/components/CardProductForCart.vue"
import FormForPromoCode from "@/components/FormForPromoCode.vue"
import { mapActions, mapGetters } from "vuex"

export default {
  components: {
    CardProductForCart,
    FormForPromoCode,
    ButtonSelectionColor,
  },
  data() {
    return {}
  },
  computed: {
    ...mapGetters([
      "getCartProducts",
      "getCartSubtotalPrice",
      "getPromoCodePercent",
      "getShippingCost",
      "getCartProductsDiscount",
      "getPromoCodeDiscountValue",
      "getCartTotalPrice",
    ]),
  },
  watch() {
    getPromoCodeDiscountValue()
  },
  methods: {
    ...mapActions(["buyAllProducts", "applyPromoCode"]),
    applyCart() {
      console.log("Cart is applyed!")
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth'
      })
      this.buyAllProducts(this.getCartProducts)
    },
    receivePromoMessage(message) {
      this.applyPromoCode(message)
    },
  },
}
</script>

<style lang="scss" scoped>
.order {
  box-sizing: border-box;
  display: flex;
  width: 505px;
  height: 458px;
  padding: 20px 24px;
  flex-direction: column;
  align-items: flex-start;
  gap: 24px;

  &__title {
    color: #121212;
    /* Desktop/Text/Subtitle */
    font-family: "satoshibold";
    font-size: 20px;
    line-height: 22px; /* 110% */
    text-transform: uppercase;
  }
  &__promo {
    width: 100%;
  }
  &__apply {
    height: 60px;
    font-size: 16px;
    width: 100%;
  }
}
.price {
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 100%;
  &__checkout {
    display: flex;
    flex-direction: column;
    gap: 20px;
    padding-bottom: 20px;
    border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  }
  &__item {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  }
  &__title {
    color: #222;
    /* Desktop/Text/Subtitle */
    font-family: "satoshibold";
    font-size: 20px;
    line-height: 22px; /* 110% */
    text-transform: uppercase;
    &_total {
      color: #121212;
      /* Desktop/Text/Paragraphs/Regular */
      font-family: "satoshiregular";
      font-size: 16px;
      line-height: normal;
      text-transform: lowercase;
      &::first-letter {
        text-transform: uppercase;
      }
    }
  }
  &__value {
    color: #121212;
    text-align: right;
    /* Desktop/Price/Small */
    font-family: "satoshibold";
    font-size: 24px;
    line-height: normal;
  }
  &__value_discount {
    color: #f33;
  }
}

@media (max-width: 1239px) {
  .order {
    flex: 1;
    padding: 20px;
    gap: 16px;

    &__title {
      line-height: normal;
      text-transform: capitalize;
    }
    &__promo {
      width: 100%;
    }
    &__apply {
      height: 54px;
      font-size: 14px;
      width: 100%;
    }
  }
  .price {
    &__title {
      font-size: 16px;
      line-height: normal;
      &_total {
        font-family: "satoshibold";
        font-size: 16px;
        text-transform: uppercase;
      }
    }
    &__value {
      font-size: 16px;
      &_total {
        font-size: 20px;
      }
    }
  }
}

@media (max-width: 768px) {
}
</style>
