<template>
  <section class="catalog center">
    <NavigationBreadcrumbsComponent class="catalog__breadcrumbs" />
    <div class="catalog__content">
      <div class="catalog__filters filters">
        <div class="filters__title-box">
          <h6 class="filters__title">Filters</h6>
          <img  class="filters__icon" src="@/assets/img/common/sort-icon.svg" alt="">
        </div> 
        <div class="filters__display">
          <div class="filters__filter-box filter">
            <h6 class="filter__title">Gender</h6>
            <div class="filter__content">
              <ButtonThirdColor 
                v-for="gender in getGenders"
                :text="gender.name"
              />
            </div>
          </div>
        </div>
      </div>


      <h1>Catalog</h1>
      <div>{{ getPage }}</div>
      <div>{{ getQuery }}</div>
      <div class="catalog__cards">
        <CardProductMainComponent
          v-for="product in getProductByQuery(query)"
          :product="product"
        />
      </div>
    </div>
  </section>
</template>

<script>
import ButtonThirdColor from "@/components/ButtonThirdColor.vue"
import CardProductMainComponent from "@/components/CardProductMainComponent.vue"
import NavigationBreadcrumbsComponent from "@/components/NavigationBreadcrumbsComponent.vue"
import { mapGetters } from "vuex"

export default {
  components: {
    CardProductMainComponent,
    NavigationBreadcrumbsComponent,
  },
  data() {
    return {
      query: {},
      page: 1,
    }
  },
  mounted() {
    this.page = this.$route.params.page
    this.query = this.$route.query
  },
  computed: {
    ...mapGetters(["getProductByQuery", "getGenders"]),
    getQuery() {
      return this.query
    },
    getPage() {
      return this.page
    },
  },
  watch: {
    $route() {
      this.page = this.$route.params.page
      this.query = this.$route.query
    },
  },
}
</script>

<style lang="scss" scoped>
.catalog {
  &__cards {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: flex-start;
    align-items: center;
  }
}
</style>
