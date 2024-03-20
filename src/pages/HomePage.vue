<template>
  <section class="homepage">
    <DisplayHeroBlock />
    <DisplayCategoryBlock
      class="center"
      id="new-arrivals"
      title="NEW ARRIVALs"
      @getMoreProducts="downloadMoreProducts"
      :products="newArrivals"
    />
    <DisplayCategoryBlock
      class="center"
      id="top-sellings"
      title="Top Sellings"
      :borderBottom="false"
    />
    <DisplayStyleTypesBlock
      class="center style-type"
      title="Browse by dress style"
    />
    <DisplayReviewSliderBlock title="OUR HAPPY CUSTOMERS" />
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
    }
  },
  mounted() {
    this.updateWidth() // Вызываем функцию для первоначального получения ширины и установки первоначальных знеаченний, зависящих от ширины 
    window.addEventListener("resize", this.updateWidth) // Слушаем событие изменения размера окна и обновляем ширину
  },
  computed: {
    
    
  },
  methods: {
    ...mapGetters(["getReqieredAmountOfNewArivals"]),
    getNewArrivals(step) {
      const tempFunc = this.getReqieredAmountOfNewArivals()
      return tempFunc(step)
    },
    setNewArrivals() {
      this.newArrivals = this.getNewArrivals(this.countProductsPerBlock)
    },
    updateWidth() {
      if (window.innerWidth > 1239) {
        this.countProductsPerBlock = 4 
      } else if (window.innerWidth <= 1239 && window.innerWidth > 768) {
        this.countProductsPerBlock = 3 
      } else if (window.innerWidth <= 768) {
        this.countProductsPerBlock = 2 
      }
      let temp = this.getNewArrivals(this.countProductsPerBlock, 1)
      if (Array.isArray(temp)) {
        this.newArrivals = temp
      } else {
        temp = this.getNewArrivals(this.countProductsPerBlock)
        this.newArrivals = temp
      }
      
    },
    downloadMoreProducts() {},
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
