<template>
  <div class="pagination" v-if="calculateCountOfPages > 1">
    <ButtonPagination
      @click.prevent="previousPage"
      class="pagination__button"
      text="Previous"
      arrow="left"
    />
    <div class="pagination__items">
      <ButtonPaginationItem
        :value="page"
        :isActive="page === numberOfPage"
        v-for="(page, index) in getPagesArray"
        :key="index"
        @click.prevent="changePage(page)"
      />
    </div>
    <ButtonPagination
      class="pagination__button"
      text="Next"
      arrow="right"
      @click.prevent="nextPage"
    />
  </div>
</template>

<script>
import ButtonPaginationItem from "./ButtonPaginationItem.vue"
import ButtonPagination from "./ButtonPagination.vue"
import router from "@/router"

export default {
  components: {
    ButtonPaginationItem,
    ButtonPagination,
  },
  props: {
    quantityElPerPage: {
      type: Number,
      default: () => 9,
    },
    total: {
      type: Number,
      default: () => 90,
    },
    numberOfPage: {
      type: Number,
      default: () => 1,
    },
  },
  emits: ["page-changed"],
  data() {
    return {
      pagesArray: [],
      leftPagesArray: [],
      rightPagesArray: [],
      paramPage: 1,
      paramQuery: {show: 'all'},
    }
  },
  mounted() {
    this.paramPage = this.$route.params.page
    this.paramQuery = this.$route.query
  },
  computed: {
    getPagesArray() {
      if (this.quantityElPerPage) {
        const count = this.calculateCountOfPages
        const tempArray = []
        for (let index = 0; index < count; index++) {
          tempArray.push(index + 1)
        }
        return tempArray
      }
    },
    calculateCountOfPages() {
      return Math.ceil(this.total / this.quantityElPerPage)
    },
  },
  methods: {
    changePage(pageNumber) {
      if (this.numberOfPage !== pageNumber) {
        router.push({
          name: "CatalogPage",
          params: { page: pageNumber },
          query: { ...this.paramQuery },
        })
        this.$emit("page-changed", pageNumber)
      }
    },
    nextPage() {
      if (this.numberOfPage < this.getPagesArray.length) {
        let page = this.numberOfPage
        page += 1
        this.changePage(page)
      }
    },
    previousPage() {
      if (this.numberOfPage > 1) {
        let page = this.numberOfPage
        page -= 1
        this.changePage(page)
      }
    },
  },
}
</script>

<style lang="scss" scoped>
.pagination {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  &__items {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    gap: 2px;
  }
}

@media (max-width: 1239px) {
}
@media (max-width: 768px) {
}
</style>