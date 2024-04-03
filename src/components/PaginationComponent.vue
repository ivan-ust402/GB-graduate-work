<template>
  <div class="pagination" v-if="calculateCountOfPages > 1">
    <!-- <router-link
      @click.prevent="previousPage"
      :to="{
        name: 'CatalogPage',
        params: { page: currentPage },
        query: { ...paramQuery },
      }"
    >
      <ButtonPagination
        class="pagination__button"
        text="Previous"
        arrow="left"
      />
    </router-link> -->
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
    // this.setPages()
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

    // getPages() {
    //   return this.pagesArray
    // },
    // getLeftPagesArray() {
    //   let leftPages = []

    //   leftPages.push(this.getPages[0])
    //   leftPages.push(this.getPages[1])
    //   leftPages.push(this.getPages[2])
    //   return leftPages
    // },
    // getLeftPages() {
    //   return this.leftPagesArray
    // },
    // getRightPagesArray() {
    //   let rightPages = []
    //   rightPages.push(this.getPages[this.getPages.length - 3])
    //   rightPages.push(this.getPages[this.getPages.length - 2])
    //   rightPages.push(this.getPages[this.getPages.length - 1])
    //   return rightPages
    // },
    // getRightPages() {
    //   return this.rigthPagesArray
    // },
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

    // setPages() {
    //   this.pagesArray = this.getPagesArray
    //   if (this.pagesArray.length > 7) {
    //     this.leftPagesArray = this.getLeftPagesArray
    //     this.rightPagesArray = this.getRightPagesArray
    //   }
    // },
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
