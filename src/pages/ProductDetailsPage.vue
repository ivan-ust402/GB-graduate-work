<template>
  <section class="details center">
    <NavigationBreadcrumbsComponent class="details__breadcrumbs" />
    <div class="details__content">
      <div class="details__display">
        <div class="details__top">
          <SliderProductDetailsComponent :product="product" />
          <div class="details__params"></div>
        </div>
        <div class="details__bottom"></div>
      </div>
    </div>
  </section>
</template>

<script>
import NavigationBreadcrumbsComponent from "@/components/NavigationBreadcrumbsComponent.vue"
import SliderProductDetailsComponent from "@/components/SliderProductDetailsComponent.vue"
import { mapGetters } from "vuex"

export default {
  components: {
    NavigationBreadcrumbsComponent,
    SliderProductDetailsComponent,
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
.details {
  padding-top: 46px;
  display: flex;
  flex-direction: column;
  gap: 36px;
}

@media (max-width: 1239px) {
}

@media (max-width: 768px) {
}
</style>
