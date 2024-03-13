<template>
  <section class="homepage">
    <DisplayHeroBlock />
    <DisplayCategoryBlock 
      class="center"
      id="new-arrivals"
      title="NEW ARRIVALs"
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
    <DisplayReviewSliderBlock 
      title="OUR HAPPY CUSTOMERS"
    />
  </section>
</template>

<script>
import DisplayCategoryBlock from "@/blocks/DisplayCategoryBlock.vue"
import DisplayHeroBlock from "@/blocks/DisplayHeroBlock.vue";
import DisplayReviewSliderBlock from "@/blocks/DisplayReviewSliderBlock.vue";
import DisplayStyleTypesBlock from "@/blocks/DisplayStyleTypesBlock.vue";
import { mapGetters } from "vuex";

export default {
  components: {
    DisplayCategoryBlock,
    DisplayHeroBlock,
    DisplayStyleTypesBlock,
    DisplayReviewSliderBlock
  },

  computed: {
    // ...mapGetters(["getFourNewArrivals"])
  }
}
</script>

<style lang="scss" scoped>
.style-type {
  padding-top: 16px;
}
</style>
