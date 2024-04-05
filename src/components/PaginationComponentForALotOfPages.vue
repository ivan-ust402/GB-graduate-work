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
        :isActive="page === numberOfPage"
        @click.prevent="changePage(1)"
      />
      <ButtonPaginationItem
        v-if="visiblePages[0] > 1"
        :value="`...`"
        :isActive="page === numberOfPage"
      />
      <ButtonPaginationItem
        :value="page"
        :isActive="page === numberOfPage"
        v-for="(page, index) in visiblePages"
        :key="page"
        @click.prevent="changePage(page)"
      />
      <ButtonPaginationItem
        v-if="visiblePages[visiblePages.length - 1] < calculateCountOfPages - 1"
        :value="`...`"
        :isActive="page === numberOfPage"
        
      />
      <ButtonPaginationItem
      v-if="visiblePages[visiblePages.length - 1] < calculateCountOfPages"
        :value="calculateCountOfPages"
        @click.prevent="changePage(calculateCountOfPages)"
        :isActive="page === numberOfPage"
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
      paramQuery: { show: "all" },
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
      // if (pageNumber >= 1 && pageNumber <= this.getPagesArray.length) {
      //   if (pageNumber === 2 || pageNumber === this.getPagesArray.length - 1) {
      //     this.$forceUpdate()
      //   }
      // }
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
    gap: 2px;
  }
}

@media (max-width: 1239px) {
}
@media (max-width: 768px) {
}
</style>
