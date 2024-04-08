<template>
  <section class="catalog center">
    <NavigationBreadcrumbsComponent class="catalog__breadcrumbs" />
    <div class="catalog__content">
      <DisplayFiltersBlock
        v-if="filterMenuState"
        class="catalog__filters"
        @closeFiltersMenu="closeFiltersWindow"
        @getActualFiltersState="closeFiltersWindow"
      />
      <div class="catalog__display">
        <div class="catalog__cards-box">
          <CatalogTitleBlock
            :titleValue="getQuery"
            :totalCards="getTotalCards"
            :countPerPage="countCardsPerPage"
            :currentPage="Number(page)"
            :currentQuery="query"
            :sortParam="this.sort"
            @getSort="rerenderPage"
            @openFilterMenu="setStateFilterMenu"
          />
          <div class="catalog__cards">
            <CardProductMainComponent
              class="catalog__card"
              v-for="product in getPageCards(page, countCardsPerPage)"
              :product="product"
            />
          </div>
        </div>
        <PaginationComponentForALotOfPages
          class="catalog__pagination"
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
import PaginationComponentForALotOfPages from "@/components/PaginationComponentForALotOfPages.vue"
import router from "@/router"

export default {
  components: {
    CardProductMainComponent,
    NavigationBreadcrumbsComponent,
    ButtonPagination,
    DisplayFiltersBlock,
    CatalogTitleBlock,
    PaginationComponent,
    PaginationComponentForALotOfPages,
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
      sort: { sortName: "Lowest price", field: "price", order: "asc" },
      settingsForFilterMenu: {},
      page: 1,
      countCardsPerPage: 12,
      totalCards: 0,
      filterMenuState: true,
      dektopMode: true,
      resizes: false,
    }
  },
  mounted() {
    this.page = this.$route.params.page
    this.query = this.$route.query
    if (!this.query.sort && !this.query.sortfield && !this.query.sortorder) {
      this.sort.field = "price"
      this.sort.order = "asc"
      this.sort.sortName = "Lowest price"
    } else {
      this.sort.field = this.query.sortfield
      this.sort.order = this.query.sortorder
      this.sort.sortName = this.query.sort
    }
    this.setCurrentProductsArray(this.getProductByQuery(this.query, this.sort))
    this.totalCards = this.getTotalCards
    this.setSettings()
    this.resizes = window.innerWidth
    window.addEventListener("resize", this.setSettings)
  },
  unmounted() {
    window.removeEventListener("resize", this.setSettings)
    document.removeEventListener("click", this.checkClickAreaOutOfMenu)
  },
  computed: {
    ...mapGetters([
      "getProductByQuery",
      "getTotalCards",
      "getPageCards",
      "getFilterMenuStatus",
    ]),
    getQuery() {
      return this.query
    },
    getPage() {
      return Number(this.page)
    },
    getQuantityElPerPage() {
      return this.countCardsPerPage
    },
    getSettingsForFilter() {
      return this.settingsForFilterMenu
    },
  },
  watch: {
    $route() {
      this.page = this.$route.params.page
      this.query = this.$route.query
      if (!this.query.sort && !this.query.sortfield && !this.query.sortorder) {
        this.sort.field = "price"
        this.sort.order = "asc"
        this.sort.sortName = "Lowest price"
      } else {
        this.sort.field = this.query.sortfield
        this.sort.order = this.query.sortorder
        this.sort.sortName = this.query.sort
      }
      this.setCurrentProductsArray(
        this.getProductByQuery(this.query, this.sort)
      )
      this.totalCards = this.getTotalCards
    },
  },
  methods: {
    ...mapActions(["setCurrentProductsArray", "setFilterMenuStatus"]),
    setPage(currentPage) {
      this.page = currentPage
    },
    rerenderPage(sortParam) {
      this.sort = sortParam
      const sortQuery = {}
      sortQuery.sortfield = sortParam.field
      sortQuery.sortorder = sortParam.order
      sortQuery.sort = sortParam.sortName
      router.push({
        name: "CatalogPage",
        params: { page: 1 },
        query: { ...this.query, ...sortQuery },
      })
    },
    setStateFilterMenu(param) {
      this.filterMenuState = param
      this.setFilterMenuStatus(true)
    },
    closeFiltersWindow(value) {
      if (this.desktopMode !== true) {
        this.filterMenuState = !value
        this.setFilterMenuStatus(this.filterMenuState)
      }
    },
    setSettings() {
      const resizeWidth = window.innerWidth
      if (this.resizes == resizeWidth) {
        return
      }
      this.resizes = resizeWidth
      if (resizeWidth > 1239) {
        // сравнивать значение с предыдущим и менять, если изменение есть
        if (this.getFilterMenuStatus !== false) {
          this.setFilterMenuStatus(false)
        }
        if (this.filterMenuState !== true) {
          this.filterMenuState = true
        }
        if (this.desktopMode != true) {
          this.desktopMode = true
        }
      } else if (resizeWidth <= 1239) {
        if (this.filterMenuState !== false) {
          this.filterMenuState = false
          this.setFilterMenuStatus(false)
        }
        if (this.desktopMode != false) {
          this.desktopMode = false
        }
      }
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
    column-gap: 18px;
    row-gap: 36px;
  }
  &__pagination-box {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  }
}

@media (max-width: 1239px) {
  .catalog {
    padding-bottom: 60px;
    gap: 12px;
    z-index: 0;
    &__content {
      display: flex;
      position: relative;
    }
    &__filters {
      position: absolute;
      top: 0px;
      bottom: 0;
      left: 0;
      right: 0;
      z-index: 102;
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
  }
}
@media (max-width: 768px) {
  .catalog {
    padding-bottom: 60px;
    gap: 12px;
    z-index: 0;
    &__content {
      display: flex;
      flex-direction: row;
    }
    &__display {
      gap: 20px;
    }
    &__filters {
      position: absolute;
      top: 0px;
      bottom: 0;
      left: 0;
      right: 0;
      z-index: 200;
    }
    &__cards-box {
      display: flex;
      flex-direction: column;
      gap: 16px;
    }
    &__cards {
      grid-template-columns: 175px 175px;
      column-gap: 6px;
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
  }
}
</style>
