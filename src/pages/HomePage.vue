<template>
  <section class="homepage">
    <DisplayHeroBlock />
    <DisplayCategoryBlock
      class="center"
      id="new-arrivals"
      title="NEW ARRIVALs"
      @getMoreProducts="downloadMoreNewArivals"
      :products="newArrivals"
    />
    <DisplayCategoryBlock
      class="center"
      id="top-sellings"
      title="Top Sellings"
      :borderBottom="false"
      :products="topSellings"
      @getMoreProducts="downloadMoreTopSellings"
    />
    <DisplayStyleTypesBlock
      class="center style-type"
      title="Browse by dress style"
    />
    <DisplayReviewSliderBlock 
      title="OUR HAPPY CUSTOMERS" 
      :reviews="shopReviews"
    />
  </section>
</template>

<script>
import DisplayCategoryBlock from "@/blocks/DisplayCategoryBlock.vue"
import DisplayHeroBlock from "@/blocks/DisplayHeroBlock.vue"
import DisplayReviewSliderBlock from "@/blocks/DisplayReviewSliderBlock.vue"
import DisplayStyleTypesBlock from "@/blocks/DisplayStyleTypesBlock.vue"
import { mapGetters } from "vuex"

export default {
  components: {
    DisplayCategoryBlock,
    DisplayHeroBlock,
    DisplayStyleTypesBlock,
    DisplayReviewSliderBlock,
  },

  data() {
    return {
      countProductsPerBlock: 4,
      newArrivals: [],
      extraNewArrivals: [],
      topSellings: [],
      extraTopSellings: [],
      shopReviews: [],
    }
  },
  mounted() {
    this.updateWidth() // Вызываем функцию для первоначального получения ширины и установки первоначальных знеаченний, зависящих от ширины
    window.addEventListener("resize", this.updateWidth) // Слушаем событие изменения размера окна и обновляем ширину
  },
  computed: {},
  methods: {
    ...mapGetters([
      "getRequiredAmountOfNewArivals",
      "getRequiredAmountOfTopSellings",
      "getRequiredAmountShopReviews",
    ]),
    getNewArrivals(step) {
      const tempFunc = this.getRequiredAmountOfNewArivals()
      return tempFunc(step)
    },
    getTopSellings(step) {
      const tempFunc = this.getRequiredAmountOfTopSellings()
      return tempFunc(step)
    },
    getShopReviews(step) {
      const tempFunc = this.getRequiredAmountShopReviews()
      return tempFunc(step)
    },
    updateWidth() {
      if (window.innerWidth > 1239) {
        this.countProductsPerBlock = 4
      } else if (window.innerWidth <= 1239 && window.innerWidth > 768) {
        this.countProductsPerBlock = 3
      } else if (window.innerWidth <= 768) {
        this.countProductsPerBlock = 2
      }
      let tempNewArrivals = this.getNewArrivals(this.countProductsPerBlock)
      let tempTopSellings = this.getTopSellings(this.countProductsPerBlock)
      let tempShopReviews = this.getShopReviews(10)

      this.newArrivals = Array.isArray(tempNewArrivals)
        ? tempNewArrivals
        : this.getNewArrivals(this.countProductsPerBlock)

      this.topSellings = Array.isArray(tempTopSellings)
        ? tempTopSellings
        : this.getTopSellings(this.countProductsPerBlock)

      this.shopReviews = Array.isArray(tempShopReviews)
        ? tempShopReviews
        : this.getShopReviews(10)
    },
    downloadMoreNewArivals() {

    },
  },
}
</script>

<style lang="scss" scoped>
.homepage {
  padding-bottom: 16px;
}
.style-type {
  padding-top: 16px;
}
</style>
