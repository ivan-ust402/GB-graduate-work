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
        <div class="title-box__sort-label">Sort by:</div>
        <a href="#" class="title-box__sort-select" @click.prevent="toggleMenu">
          <div class="title-box__sort-param">
            {{ sortParam.sortName }}
            <img
              v-if="menuState"
              :src="`${require('@/assets/img/common/dropup-arrow.svg')}`"
              alt="dropup icon"
            />
            <img
              v-else
              :src="`${require('@/assets/img/common/dropdown-arrow.svg')}`"
              alt="dropdown icon"
            />
          </div>
        </a>
        <SortMenu
          v-if="menuState"
          class="title-box__sort-menu"
          @getSortParam="getSortParam"
          :activeSortParam="sortParam"
        />
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
  emits: ["getSort"],
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
      menuState: false,
    }
  },
  mounted() {
    window.addEventListener("resize", this.hideMenu)
    document.addEventListener("click", this.checkClickAreaOutOfMenu)
  },
  unmounted() {
    window.removeEventListener("resize", this.hideMenu)
    document.removeEventListener("click", this.checkClickAreaOutOfMenu)
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
    toggleMenu() {
      this.menuState = !this.menuState
    },
    getSortParam(param) {
      this.$emit("getSort", param)
    },
    checkClickAreaOutOfMenu(e) {
      const tempArr = e.target
      const sort = document.querySelector(".title-box__sort")
      console.log(sort)
      console.log(tempArr)
      console.log(sort.contains(tempArr))
      if (!sort.contains(tempArr)) {
        this.hideMenu()
      }
    },
    hideMenu() {
      this.menuState = false
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
    position: relative;
    z-index: 1;
  }
  &__sort-label {
    color: rgba(0, 0, 0, 0.6);
    font-family: "satoshiregular";
    font-size: 16px;
    line-height: normal;
  }
  &__sort-select {
    width: 130px;
    color: #121212;
    font-family: "satoshimedium";
    font-size: 16px;
    line-height: normal;
    transition: all 0.3s ease-in;
    @media (hover: hover) {
      &:hover {
        opacity: 0.8;
      }
    }
    @media (hover: none) {
      &:active {
        opacity: 0.8;
      }
    }
  }
  &__sort-param {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  &__sort-menu {
    box-sizing: border-box;
    position: absolute;
    z-index: 2;
    top: 16px;
    right: 0;
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
