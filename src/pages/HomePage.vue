<template>
  <section class="homepage">
    <DisplayHeroBlock />
    <DisplayCategoryBlock
      class="center"
      id="new-arrivals"
      title="NEW ARRIVALs"
      @getMoreProducts="downloadMoreNewArivals"
      :products="newArrivals"
      :isButton="moreExtraNewArrivals"
      :extraProducts="extraNewArrivals"
    />
    <DisplayCategoryBlock
      class="center"
      id="top-sellings"
      title="Top Sellings"
      :borderBottom="false"
      :products="topSellings"
      @getMoreProducts="downloadMoreTopSellings"
      :isButton="moreExtraTopSellings"
      :extraProducts="extraTopSellings"
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
import { useHead } from '@unhead/vue'

export default {
  components: {
    DisplayCategoryBlock,
    DisplayHeroBlock,
    DisplayStyleTypesBlock,
    DisplayReviewSliderBlock,
  },
  setup() {
    useHead({
      title: "Home",
      meta: [{
        name: 'Homepage',
        content: 'There is a homepage'
      }]
    })
  }, 
  data() {
    return {
      countProductsPerBlock: 4,
      countMoreProductsPerBlock: 4,
      countShopReviews: 10,
      newArrivals: [],
      extraNewArrivals: [],
      moreExtraNewArrivals: true,
      extraNewArrivalsCounter: 1,
      topSellings: [],
      extraTopSellings: [],
      moreExtraTopSellings: true,
      extraTopSellingsCounter: 1,
      shopReviews: [],
    }
  },
  mounted() {
    // this.setInitial()
    // window.addEventListener("resize", this.setInitial) 
    this.setInitial()
  },
  computed: {},
  methods: {
    ...mapGetters([
      "getRequiredAmountOfNewArivals",
      "getRequiredAmountOfTopSellings",
      "getRequiredAmountShopReviews",
      "getRequiredExtraAmountOfTopSellings",
      "getRequiredExtraAmountOfNewArivals"
    ]),
    getProductsSample(step, requiredGetter, offset = 0) {
      let tempArray = []
      const tempFunc = requiredGetter
      tempArray = tempFunc(step, offset)
      return Array.isArray(tempArray) ? tempArray : tempFunc(step, offset)
    },
    getExtraProductsSample(step, requiredGetter, offset = 0) {
      let tempArray = []
      const tempFunc = requiredGetter
      tempArray = tempFunc(step, offset)
      return tempArray
    },
    setInitial() {
      // if (window.innerWidth > 1239) {
      //   this.countProductsPerBlock = 4
      // } else if (window.innerWidth <= 1239 && window.innerWidth > 768) {
      //   this.countProductsPerBlock = 3
      // } else if (window.innerWidth <= 768) {
      //   this.countProductsPerBlock = 2
      // }

      this.countProductsPerBlock = 4

      this.newArrivals = this.getProductsSample(
        this.countProductsPerBlock,
        this.getRequiredAmountOfNewArivals()
      )
      this.topSellings = this.getProductsSample(
        this.countProductsPerBlock,
        this.getRequiredAmountOfTopSellings()
      )
      this.shopReviews = this.getProductsSample(
        this.countShopReviews,
        this.getRequiredAmountShopReviews()
      )
    },
    downloadMoreNewArivals() {
      let tempArray = this.getExtraProductsSample(
        this.countMoreProductsPerBlock,
          this.getRequiredExtraAmountOfNewArivals(),
          this.countMoreProductsPerBlock * this.extraNewArrivalsCounter 
        )
      if (Array.isArray(tempArray)) {
        this.extraNewArrivals.push(tempArray)
        this.extraNewArrivalsCounter++
      } 
      tempArray = this.getExtraProductsSample(
        this.countMoreProductsPerBlock,
          this.getRequiredExtraAmountOfNewArivals(),
          this.countMoreProductsPerBlock * this.extraNewArrivalsCounter 
        )
      if (!Array.isArray(tempArray)) {
        this.moreExtraNewArrivals = false
        this.extraNewArrivalsCounter = 1
      }
    },
    downloadMoreTopSellings() {
      let tempArray = this.getExtraProductsSample(
          this.countMoreProductsPerBlock,
          this.getRequiredExtraAmountOfTopSellings(),
          this.countMoreProductsPerBlock * this.extraTopSellingsCounter 
        )
      if (Array.isArray(tempArray)) {
        this.extraTopSellings.push(tempArray)
        this.extraTopSellingsCounter++
      } 
      tempArray = this.getExtraProductsSample(
        this.countMoreProductsPerBlock,
          this.getRequiredExtraAmountOfTopSellings(),
          this.countMoreProductsPerBlock * this.extraTopSellingsCounter 
        )
      if (!Array.isArray(tempArray)) {
        this.moreExtraTopSellings = false
        this.extraTopSellingsCounter = 1
      }  
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
