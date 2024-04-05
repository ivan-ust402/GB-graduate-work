<template>
  <div class="pagination">
    <button @click="changePage(currentPage - 1)" :disabled="currentPage === 1">
      Prev
    </button>
    <span v-if="visiblePages[0] > 1">
      <button @click="changePage(1)">1</button>
      <span v-if="visiblePages[0] > 2">...</span>
    </span>
    <span v-for="page in visiblePages" :key="page">
      <button
        @click="changePage(page)"
        :class="{ active: page === currentPage }"
      >
        {{ page }}
      </button>
    </span>
    <span v-if="visiblePages[visiblePages.length - 1] < totalPages">
      <span v-if="visiblePages[visiblePages.length - 1] < totalPages - 1 ">...</span>
      <button @click="changePage(totalPages)">{{ totalPages }}</button>
    </span>
    <button
      @click="changePage(currentPage + 1)"
      :disabled="currentPage === totalPages"
    >
      Next
    </button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      currentPage: 1,
      totalPages: 20, // example total number of pages
    }
  },
  computed: {
    visiblePages() {
      const leftPages = Math.max(
        Math.min(this.currentPage - 1, this.totalPages - 2),
        1
      )
      const rightPages = Math.min(leftPages + 2, this.totalPages)
      return Array.from(
        { length: rightPages - leftPages + 1 },
        (_, index) => leftPages + index
      )
    },
  },
  methods: {
    changePage(page) {
      if (page >= 1 && page <= this.totalPages) {
        this.currentPage = page
        if (
          this.currentPage === 2 ||
          this.currentPage === this.totalPages - 1
        ) {
          console.log("1")
          // Recalculate visible pages for the middle part
          this.$forceUpdate()
        }
      }
    },
  },
}
</script>

<style>
.pagination {
  display: flex;
}

button {
  margin: 5px;
}

.active {
  font-weight: bold;
}
</style>

<!-- <template>
  <div class="pagination">
    <button @click="changePage(1)">First</button>
    <button @click="changePage(currentPage - 1)">Prev</button>
    <span v-for="page in visiblePages" :key="page">
      <button @click="changePage(page)" :class="{ active: page === currentPage }">{{ page }}</button>
    </span>
    <button @click="changePage(currentPage + 1)">Next</button>
    <button @click="changePage(totalPages)">Last</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      currentPage: 1,
      totalPages: 20 // example total number of pages
    };
  },
  computed: {
    visiblePages() {
      const leftPages = Math.min(Math.max(1, this.currentPage - 1), this.totalPages - 5);
      const rightPages = Math.min(leftPages + 5, this.totalPages);
      return Array.from({ length: rightPages - leftPages + 1 }, (_, index) => leftPages + index);
    }
  },
  methods: {
    changePage(page) {
      if (page >= 1 && page <= this.totalPages) {
        this.currentPage = page;
        if (this.currentPage < 4) {
          // Recalculate visible pages for the left part
          this.$forceUpdate();
        }
      }
    }
  }
};
</script>

<style>
.pagination {
  display: flex;
}

button {
  margin: 5px;
}

.active {
  font-weight: bold;
}
</style> -->
