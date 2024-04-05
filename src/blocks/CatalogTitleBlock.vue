<template>
  <div class="title-box">
    <h4 class="title-box__cards-title">
      <p class="title-box__test" v-for="value in titleValue">
        {{ value }}
      </p>
    </h4>
    <div class="title-box__cards-right-display">
      <p class="title-box__showing-cards">
        Showing {{ getSerialNumbers[0] }}-{{ getSerialNumbers[1] }} of
        {{ totalCards }} Products
      </p>
      <div class="title-box__sort">
        <p class="title-box__sort-label">Sort by:</p>
        <p class="title-box__sort-select">{{ sortParam.sortName }}</p>
        <SortMenu @getSortParam="getSortParam" />
      </div>
    </div>
  </div>
</template>

<script>
import SortMenu from "@/components/SortMenu.vue"

export default {
  components: {
    SortMenu,
  },
  emits: [""],
  props: {
    titleValue: {
      type: Object,
      default: () => {},
    },
    totalCards: {
      type: Number,
      default: () => 10,
    },
    countPerPage: {
      type: Number,
      default: () => 9,
    },
    currentPage: {
      type: Number,
      default: () => 1,
    },
    currentQuery: {
      type: Object,
      default: () => {},
    },
    sortParam: {
      type: Object,
      default: () => {
        return {
          sortName: "Lowest price",
          field: "price",
          order: "asc",
        }
      },
    },
  },
  data() {
    return {
      sortParam: {
        sortName: "Lowest price",
        field: "price",
        order: "asc",
      },
    }
  },
  computed: {
    getSerialNumbers() {
      if (this.countPerPage !== 0) {
        const pages = Number(Math.ceil(this.totalCards / this.countPerPage))
        let startCard = (this.currentPage - 1) * this.countPerPage + 1
        let endCard = startCard + this.countPerPage - 1
        if ((this.currentPage === pages && pages !== 0) || pages === 1) {
          endCard = this.totalCards
        } else if (pages === 0) {
          startCard = 0
          endCard = this.totalCards
        }
        return [startCard, endCard]
      }
      return [0, 0]
    },
  },
  methods: {
    getSortParam(param) {
      this.sortParam = param
    },
  },
}
</script>

<style lang="scss" scoped>
.title-box {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
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
}

@media (max-width: 1239px) {
}
@media (max-width: 768px) {
  .title-box {
    align-items: flex-end;
    &__cards-title {
      flex-direction: column;
      gap: 2px;
    }
  }
}
</style>
