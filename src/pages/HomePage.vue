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
      title="Top Selling"
      borderBottom="false"
    />
  </section>
</template>

<script>
import DisplayCategoryBlock from "@/blocks/DisplayCategoryBlock.vue"
import DisplayHeroBlock from "@/blocks/DisplayHeroBlock.vue";
import { mapGetters } from "vuex";

export default {
  components: {
    DisplayCategoryBlock,
    DisplayHeroBlock
  },

  computed: {
    // ...mapGetters(["getFourNewArrivals"])
  }
}
</script>

<style lang="scss" scoped></style>
