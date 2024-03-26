<template>
  <section class="catalog center">
    <NavigationBreadcrumbsComponent class="catalog__breadcrumbs" />
    <div class="catalog__content">
      <DisplayFiltersBlock />
      <div class="catalog__display">
        <div class="catalog__cards-box">
          <div class="catalog__cards-title-box">
            <h4 class="catalog__cards-title">
              <p class="catalog__test" v-for="query of getQuery">{{ query }}</p>
            </h4>
            <div class="catalog__cards-right-display">
              <p class="catalog__showing-cards">Showing 1-10 of 100 Products</p>
              <div class="catalog__sort">
                <p class="catalog__sort-label">Sort by:</p>
                <p class="catalog__sort-select">Most Popular</p>
              </div>
            </div>
          </div>
          <div class="catalog__cards">
            <CardProductMainComponent
              v-for="product in getProductByQuery(query)"
              :product="product"
            />
          </div>
        </div>
        <div class="catalog__pagination-box">
          <ButtonPagination text="Previous" arrow="left" />
          <div class="catalog__pagination"></div>
          <ButtonPagination text="Next" arrow="right" />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import ButtonPagination from "@/components/ButtonPagination.vue"
import CardProductMainComponent from "@/components/CardProductMainComponent.vue"
import NavigationBreadcrumbsComponent from "@/components/NavigationBreadcrumbsComponent.vue"
import { mapGetters } from "vuex"
import { useHead } from '@unhead/vue'
import DisplayFiltersBlock from "@/blocks/DisplayFiltersBlock.vue"

export default {
  components: {
    CardProductMainComponent,
    NavigationBreadcrumbsComponent,
    ButtonPagination,
    DisplayFiltersBlock
  },
  setup() {
    useHead({
      title: "Catalog",
      meta: [{
        name: 'Catalog',
        content: 'There is a shop catalog'
      }]
    })
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
    ...mapGetters([
      "getProductByQuery",
    ]),
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
  padding-top: 46px;
  padding-bottom: 82px;
  display: flex;
  flex-direction: column;
  gap: 24px;
  &__content {
    display: flex;
    flex-direction: row;
    gap: 21px;
  }
  &__filters {
    width: 295px;
    border-radius: 20px;
    border: 1px solid #e8e8e8;
  }
  &__display {
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    gap: 22px;
    width: 920px;
  }
  &__cards-box {
    display: flex;
    flex-direction: column;
    gap: 16px;
  }
  &__cards-title-box {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }
  &__cards-title {
    display: flex;
    flex-direction: row;
    gap: 10px;
    color: #121212;
    font-family: "satoshibold";
    font-size: 32px;
    line-height: normal;
    text-transform: capitalize;
  }
  &__test {
    display: flex;
    flex-direction: row;
  }
  &__cards-right-display {
    display: flex;
    flex-direction: row;
    gap: 12px;
    align-items: center;
  }
  &__showing-cards {
    color: #222;
    font-family: "satoshiregular";
    font-size: 16px;
    line-height: normal;
  }
  &__sort {
    display: flex;
    flex-direction: row;
    gap: 10px;
    align-items: center;
  }
  &__sort-label {
    color: rgba(0, 0, 0, 0.6);
    font-family: "satoshiregular";
    font-size: 16px;
    line-height: normal;
  }
  &__sort-select {
    color: var(--Black, #121212);
    font-family: "satoshimedium";
    font-size: 16px;
    line-height: normal;
  }
  &__cards {
    display: grid;
    grid-template-columns: 295px 295px 295px;
    column-gap: 20px;
    row-gap: 36px;
  }
  &__pagination-box {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  }
  &__pagination {
    
  }
}


@media (max-width: 1239px) {
  .catalog {
    position: relative;
    padding-bottom: 60px;
    gap: 12px;
    z-index: 0;
    &__content {
      display: flex;
      flex-direction: row;
      gap: 21px;
    }
    &__filters {
      // position: absolute;
      // visibility: hidden;
      background-color: #fff;
      top: 0px;
      bottom: 0;
      left: 0;
      right: 0;
      z-index: 2;
      width: 295px;
      border-radius: 20px;
      border: 1px solid #e8e8e8;
    }
    &__display {
      gap: 22px;
    }
    &__cards-box {
      display: flex;
      flex-direction: column;
      gap: 16px;
    }
    &__cards-title-box {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
    }
    &__cards-title {
      display: flex;
      flex-direction: row;
      gap: 10px;
      color: #121212;
      font-family: "satoshibold";
      font-size: 32px;
      line-height: normal;
      text-transform: capitalize;
    }
    &__test {
      display: flex;
      flex-direction: row;
    }
    &__cards-right-display {
      display: flex;
      flex-direction: row;
      gap: 12px;
      align-items: center;
    }
    &__showing-cards {
      color: #222;
      font-family: "satoshiregular";
      font-size: 16px;
      line-height: normal;
    }
    &__sort {
      display: flex;
      flex-direction: row;
      gap: 10px;
      align-items: center;
    }
    &__sort-label {
      color: rgba(0, 0, 0, 0.6);
      font-family: "satoshiregular";
      font-size: 16px;
      line-height: normal;
    }
    &__sort-select {
      color: var(--Black, #121212);
      font-family: "satoshimedium";
      font-size: 16px;
      line-height: normal;
    }
    &__cards {      
      column-gap: 16px;
      row-gap: 24px;
    }
    &__pagination-box {
      display: flex;
      flex-direction: row;
      align-items: center;
    }
    &__pagination {
    }
  }
}
@media (max-width: 768px) {
  .catalog {
    position: relative;
    padding-bottom: 60px;
    gap: 12px;
    z-index: 0;
    &__content {
      display: flex;
      flex-direction: row;
      gap: 21px;
    }
    &__filters {
      position: absolute;
      visibility: hidden;
      background-color: #fff;
      top: 0px;
      bottom: 0;
      left: 0;
      right: 0;
      z-index: 2;
      width: 295px;
      border-radius: 20px;
      border: 1px solid #e8e8e8;
    }
    &__display {
      gap: 22px;
    }
    &__cards-box {
      display: flex;
      flex-direction: column;
      gap: 16px;
    }
    &__cards-title-box {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
    }
    &__cards-title {
      display: flex;
      flex-direction: row;
      gap: 10px;
      color: #121212;
      font-family: "satoshibold";
      font-size: 32px;
      line-height: normal;
      text-transform: capitalize;
    }
    &__test {
      display: flex;
      flex-direction: row;
    }
    &__cards-right-display {
      display: flex;
      flex-direction: row;
      gap: 12px;
      align-items: center;
    }
    &__showing-cards {
      color: #222;
      font-family: "satoshiregular";
      font-size: 16px;
      line-height: normal;
    }
    &__sort {
      display: flex;
      flex-direction: row;
      gap: 10px;
      align-items: center;
    }
    &__sort-label {
      color: rgba(0, 0, 0, 0.6);
      font-family: "satoshiregular";
      font-size: 16px;
      line-height: normal;
    }
    &__sort-select {
      color: var(--Black, #121212);
      font-family: "satoshimedium";
      font-size: 16px;
      line-height: normal;
    }
    &__cards {      
      column-gap: 10px;
      row-gap: 24px;
    }
    &__pagination-box {
      display: flex;
      flex-direction: row;
      align-items: center;
    }
    &__pagination {
    }
  }

}
</style>
