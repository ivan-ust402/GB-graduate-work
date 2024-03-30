<template>
  <section class="catalog center">
    <NavigationBreadcrumbsComponent class="catalog__breadcrumbs" />
    <div class="catalog__content">
      <!-- <DisplayFiltersBlock @closeFiltersMenu="closeFiltersWindow"/> -->
      <div class="catalog__display">
        <div class="catalog__cards-box">
          <CatalogTitleBlock :titleValue = getQuery />
          <div class="catalog__cards">
            <CardProductMainComponent
              class="catalog__card"
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
import { useHead } from "@unhead/vue"
import DisplayFiltersBlock from "@/blocks/DisplayFiltersBlock.vue"
import CatalogTitleBlock from "@/blocks/CatalogTitleBlock.vue"

export default {
  components: {
    CardProductMainComponent,
    NavigationBreadcrumbsComponent,
    ButtonPagination,
    DisplayFiltersBlock,
    CatalogTitleBlock
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
      page: 1,
    }
  },
  mounted() {
    this.page = this.$route.params.page
    this.query = this.$route.query
  },
  computed: {
    ...mapGetters(["getProductByQuery"]),
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
  methods: {
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
