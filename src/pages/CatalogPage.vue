<template>
  <section class="catalog center">
    <NavigationBreadcrumbsComponent class="catalog__breadcrumbs" />
    <div class="catalog__content">
      <!-- <DisplayFiltersBlock @closeFiltersMenu="closeFiltersWindow"/> -->
      <div class="catalog__display">
        <div class="catalog__cards-box">
          <CatalogTitleBlock :titleValue="getQuery" />
          <div class="catalog__cards">
            <CardProductMainComponent
              class="catalog__card"
              v-for="product in getPageCards(page, countCardsPerPage)"
              :product="product"
            />
          </div>
        </div>
        <PaginationComponent
          :total="getTotalCards"
          :numberOfPage="getPage"
          :quantityElPerPage="getQuantityElPerPage"
          @page-changed="setPage"
        />
      </div>
    </div>
  </section>
</template>

<script>
import ButtonPagination from "@/components/ButtonPagination.vue"
import CardProductMainComponent from "@/components/CardProductMainComponent.vue"
import NavigationBreadcrumbsComponent from "@/components/NavigationBreadcrumbsComponent.vue"
import { mapActions, mapGetters } from "vuex"
import { useHead } from "@unhead/vue"
import DisplayFiltersBlock from "@/blocks/DisplayFiltersBlock.vue"
import CatalogTitleBlock from "@/blocks/CatalogTitleBlock.vue"
import PaginationComponent from "@/components/PaginationComponent.vue"

export default {
  components: {
    CardProductMainComponent,
    NavigationBreadcrumbsComponent,
    ButtonPagination,
    DisplayFiltersBlock,
    CatalogTitleBlock,
    PaginationComponent,
  },
  setup() {
    useHead({
      title: "Catalog",
      meta: [
        {
          name: "Catalog",
          content: "There is a shop catalog",
        },
      ],
    })
  },
  data() {
    return {
      query: {},
      sort: { field: "price", order: "asc" },
      page: 1,
      countCardsPerPage: 0,
      totalCards: 0,
    }
  },
  mounted() {
    this.page = this.$route.params.page
    this.query = this.$route.query
    this.setCurrentProductsArray(this.getProductByQuery(this.query, this.sort))
    this.totalCards = this.getTotalCards
    this.setSettings()
    window.addEventListener("resize", this.setSettings)
  },
  computed: {
    ...mapGetters(["getProductByQuery", "getTotalCards", "getPageCards"]),
    getQuery() {
      return this.query
    },
    getPage() {
      return Number(this.page)
    },
    getQuantityElPerPage() {
      return this.countCardsPerPage
    },
  },
  watch: {
    $route() {
      this.page = this.$route.params.page
      this.query = this.$route.query
      this.setCurrentProductsArray(
        this.getProductByQuery(this.query, this.sort)
      )
      this.totalCards = this.getTotalCards
    },
  },
  methods: {
    ...mapActions(["setCurrentProductsArray"]),
    setPage(currentPage) {
      this.page = currentPage
    },
    setSettings() {
      if (window.innerWidth > 1239) {
        // сравнивать значение с предыдущим и менять, если изменение есть
        if (this.countCardsPerPage !== 9) {
          this.countCardsPerPage = 9
        }
      } else if (window.innerWidth <= 1239 && window.innerWidth > 768) {
        if (this.countCardsPerPage !== 6) {
          this.countCardsPerPage = 6
        }
      } else if (window.innerWidth <= 768) {
        if (this.countCardsPerPage !== 6) {
          this.countCardsPerPage = 6
        }
      }
    },
    closeFiltersWindow(value) {
      console.log(value)
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
      // flex-wrap: wrap;
      // width: 100%;
      // gap: 0;
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
      gap: 24px;
    }
    &__cards {
      grid-template-columns: 224px 224px 224px;
      column-gap: 16px;
      row-gap: 24px;
    }
    &__card {
      width: 100%;
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
      gap: 20px;
    }
    &__cards-box {
      display: flex;
      flex-direction: column;
      gap: 16px;
    }
    &__cards {
      grid-template-columns: 172px 172px;
      column-gap: 10px;
      row-gap: 24px;
    }
    &__card {
      width: 100%;
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
