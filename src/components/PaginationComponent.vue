<template>
  <div class="pagination" v-if="calculateCountOfPages > 1">
    <ButtonPagination
      class="pagination__button"
      text="Previous"
      arrow="left"
      @click.prevent="previousPage"
    />

    <div class="pagination__items">
      <ButtonPaginationItem
        v-for="(page, index) in getPagesArray"
        :key="index"
        :value="page"
        :isActive="page === numberOfPage"
        @click.prevent="changePage(page)"
      />
    </div>

    <!-- <div class="pagination__items" v-else>
      <ButtonPaginationItem
        v-for="(page, index) in getLeftPagesArray"
        :key="index"
        :value="page"
        :isActive="page === getCurrentPage"
        @click.prevent="changePage(page)"
      />
      <ButtonPaginationItem
        :value="`...`"
      />
      <ButtonPaginationItem
        v-for="(page, index) in getRightPagesArray"
        :key="index"
        :value="page"
        :isActive="page === getCurrentPage"
        @click.prevent="changePage(page)"
      />
    </div> -->
    <ButtonPagination
      class="pagination__button"
      text="Next"
      arrow="right"
      @click.prevent="nextPage"
    />
    {{ }}
  </div>
</template>

<script>
import ButtonPaginationItem from "./ButtonPaginationItem.vue"
import ButtonPagination from "./ButtonPagination.vue"

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
      currentPage: 1,
      pagesArray: [],
      leftPagesArray: [],
      rightPagesArray: [],
    }
  },
  mounted() {
    // this.setPages()
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


    getPages() {
      return this.pagesArray
    },
    getLeftPagesArray() {
      let leftPages = []

      leftPages.push(this.getPages[0])
      leftPages.push(this.getPages[1])
      leftPages.push(this.getPages[2])
      return leftPages
    },
    getLeftPages() {
      return this.leftPagesArray
    },
    getRightPagesArray() {
      let rightPages = []
      rightPages.push(this.getPages[this.getPages.length - 3])
      rightPages.push(this.getPages[this.getPages.length - 2])
      rightPages.push(this.getPages[this.getPages.length - 1])
      return rightPages
    },
    getRightPages() {
      return this.rigthPagesArray
    },
    getCurrentPage() {
      return this.currentPage
    },
  },
  methods: {
    changePage(pageNumber) {
      this.currentPage = pageNumber
      this.$emit("page-changed", pageNumber)
    },
    nextPage() {
      this.currentPage = this.numberOfPage
      if (this.currentPage < this.getPagesArray.length) {
        this.currentPage += 1
        this.changePage(this.currentPage)
      }
    },
    previousPage() {
      this.currentPage = this.numberOfPage
      if (this.currentPage > 1) {
        this.currentPage -= 1
        this.changePage(this.currentPage)
      }
    },



    setPages() {
      this.pagesArray = this.getPagesArray
      if (this.pagesArray.length > 7) {
        this.leftPagesArray = this.getLeftPagesArray
        this.rightPagesArray = this.getRightPagesArray
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
