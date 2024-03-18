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
                  <RatingComponent
                    class="params__rating"
                    :grade="product.grade"
                  />
                  <PriceComponent
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
            <div class="params__colors">
              <input type="radio" class="params__color" />
            </div>
          </div>
        </div>
        <div class="details__bottom"></div>
      </div>
    </div>
  </section>
</template>

<script>
import NavigationBreadcrumbsComponent from "@/components/NavigationBreadcrumbsComponent.vue"
import PriceComponent from "@/components/PriceComponent.vue"
import RatingComponent from "@/components/RatingComponent.vue"
import SliderProductDetailsComponent from "@/components/SliderProductDetailsComponent.vue"
import { mapGetters } from "vuex"

export default {
  components: {
    NavigationBreadcrumbsComponent,
    SliderProductDetailsComponent,
    PriceComponent,
    RatingComponent,
  },
  data() {
    return {
      product: {},
    }
  },
  mounted() {
    this.product = this.getProductById(this.$route.params.id)
  },
  computed: {
    ...mapGetters(["getProductById"]),
  },
  methods: {},
}
</script>

<style lang="scss" scoped>
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
}
.details {
  padding-top: 46px;
  display: flex;
  flex-direction: column;
  gap: 36px;
  &__content {
  }
  &__display {
  }
  &__top {
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    gap: 40px;
  }
}

@media (max-width: 1239px) {
}

@media (max-width: 768px) {
}
</style>
