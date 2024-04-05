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
        v-if="visiblePages[0] > 1"
        :value="1"
        :isActive="1 === numberOfPage"
        @click.prevent="changePage(1)"
      />
      <span class="pagination__ellipsis" v-if="visiblePages[0] > 1">...</span>
      <ButtonPaginationItem
        v-for="(page, index) in visiblePages"
        :value="page"
        :isActive="page === numberOfPage"
        :key="page"
        @click.prevent="changePage(page)"
      />
      <span
        class="pagination__ellipsis"
        v-if="visiblePages[visiblePages.length - 1] < calculateCountOfPages - 1"
        >...</span
      >
      <ButtonPaginationItem
        v-if="visiblePages[visiblePages.length - 1] < calculateCountOfPages"
        :value="calculateCountOfPages"
        @click.prevent="changePage(calculateCountOfPages)"
        :isActive="calculateCountOfPages === numberOfPage"
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
      paramPage: 1,
      paramQuery: { show: "all" },
    }
  },
  mounted() {
    this.paramPage = this.$route.params.page
    this.paramQuery = this.$route.query
  },
  watch: {
    $route() {
      this.paramPage = this.$route.params.page
      this.paramQuery = this.$route.query
    },
  },
  computed: {
    calculateCountOfPages() {
      return Math.ceil(this.total / this.quantityElPerPage)
    },
    visiblePages() {
      // total = 8
      // в случае, когда у наc страница 1: leftPages = 1, rightPages = 3,
      // length = 3, значения массива: [1, 2, 3]
      // в случае, когда у наc страница 2: leftPages = 1, rightPages = 3,
      // length = 3, значения массива: [1, 2, 3]
      // в случае, когда у наc страница 3: leftPages = 2, rightPages = 4,
      // length = 3, значения массива: [2, 3, 4]
      // в случае, когда у наc страница 4: leftPages = 3, rightPages = 5,
      // length = 3, значения массива: [3, 4, 5]
      // в случае, когда у наc страница 5: leftPages = 4, rightPages = 6,
      // length = 3, значения массива: [4, 5, 6]
      // в случае, когда у наc страница 6: leftPages = 5, rightPages = 7,
      // length = 3, значения массива: [5, 6, 7]
      // в случае, когда у наc страница 7: leftPages = 6, rightPages = 8,
      // length = 3, значения массива: [6, 7, 8]
      // в случае, когда у наc страница 8: leftPages = 6, rightPages = 8,
      // length = 3, значения массива: [6, 7, 8]
      const total = this.calculateCountOfPages
      const leftPages = Math.max(Math.min(this.numberOfPage - 1, total - 2), 1)
      const rightPages = Math.min(leftPages + 2, total)

      // Формируем массив
      return Array.from(
        { length: rightPages - leftPages + 1 },
        (_, index) => leftPages + index
      )
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
      if (pageNumber >= 1 && pageNumber <= this.calculateCountOfPages) {
        if (pageNumber === 2 || pageNumber === this.calculateCountOfPages - 1) {
          this.$forceUpdate()
        }
      }
    },
    nextPage() {
      if (this.numberOfPage < this.calculateCountOfPages) {
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
    gap: 2px;
  }
  &__ellipsis {
    display: flex;
    align-items: center;
  }
}

@media (max-width: 1239px) {
}
@media (max-width: 768px) {
}
</style>
