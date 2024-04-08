<template>
  <div class="title-box">
    <div class="title-box__info">
      <h4 class="title-box__cards-title">
        <p class="title-box__test" v-if="titleValue.show">
          {{ titleValue.show }}
        </p>
        <p class="title-box__test" v-if="titleValue.gender">
          {{ titleValue.gender }}
        </p>
        <p class="title-box__test" v-if="titleValue.style">
          {{ titleValue.style }}
        </p>
        <p class="title-box__test" v-if="titleValue.type">
          {{ titleValue.type }}
        </p>
      </h4>
      <div class="title-box__showing-cards">
        Showing {{ getSerialNumbers[0] }}-{{ getSerialNumbers[1] }} of
        {{ totalCards }} Products
      </div>
    </div>
    <div class="title-box__cards-right-display">
      <div class="title-box__controls">
        <div class="title-box__sort">
          <div class="title-box__desktop-sort" v-if="desktopDisplayMode">
            <div class="title-box__sort-label">Sort by:</div>
            <a
              href="#"
              class="title-box__sort-select"
              @click.prevent="toggleMenu"
            >
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
          </div>
          <a
            v-else
            href="#"
            class="title-box__sort-select-icon"
            @click.prevent="toggleMenu"
          >
            <img
              :src="`${require('@/assets/img/common/sort-icon.svg')}`"
              alt=""
              class="title-box__sort-icon"
            />
          </a>
          <SortMenu
            v-if="menuState"
            class="title-box__sort-menu"
            @getSortParam="getSortParam"
            :activeSortParam="sortParam"
          />
        </div>
        <a
          v-if="!desktopDisplayMode"
          href="#"
          class="title-box__filter"
          @click.prevent="openFilterMenu"
        >
          <img
            :src="`${require('@/assets/img/common/filter-icon.svg')}`"
            alt="filter icon"
            class="title-box__filter_icon"
          />
        </a>
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
  emits: ["getSort", "openFilterMenu"],
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
      desktopDisplayMode: true,
      resizes: false,
    }
  },
  mounted() {
    this.setSettings()
    this.resizes = window.innerWidth
    window.addEventListener("resize", this.setSettings)
    document.addEventListener("click", this.checkClickAreaOutOfMenu)
  },
  unmounted() {
    window.removeEventListener("resize", this.setSettings)
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
    openFilterMenu() {
      this.$emit("openFilterMenu", true)
    },
    toggleMenu() {
      this.menuState = !this.menuState
    },
    getSortParam(param) {
      this.hideMenu()
      this.$emit("getSort", param)
    },
    checkClickAreaOutOfMenu(e) {
      const tempArr = e.target
      const sort = document.querySelector(".title-box__sort")
      if (!sort.contains(tempArr)) {
        this.hideMenu()
      }
    },
    setSettings() {
      const resizeWidth = window.innerWidth
      if (this.resizes == resizeWidth) {
        return
      }
      this.resizes = resizeWidth
      this.hideMenu()
      if (window.innerWidth > 1239) {
        // сравнивать значение с предыдущим и менять, если изменение есть
        if (this.desktopDisplayMode === false) {
          this.desktopDisplayMode = true
        }
      } else if (window.innerWidth <= 1239) {
        if (this.desktopDisplayMode === true) {
          this.desktopDisplayMode = false
        }
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
  width: 100%;
  gap: 12px;
  &__info {
    display: flex;
    width: 100%;
    align-items: flex-end;
    justify-content: space-between;
  }
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
    align-items: flex-end;
  }
  &__showing-cards {
    color: #222;
    font-family: "satoshiregular";
    font-size: 16px;
    line-height: normal;
  }
  &__controls {
    position: relative;
  }
  &__desktop-sort {
    display: flex;
    width: 200px;
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
  .title-box {
    gap: 10px;
    &__info {
      justify-content: flex-start;
      gap: 10px;
    }
    &__cards-title {
      font-size: 24px;
      line-height: 80%;
    }
    &__cards-right-display {
      justify-content: space-between;
    }
    &__showing-cards {
      font-size: 14px;
    }
    &__controls {
      display: flex;
      justify-self: flex-end;
      gap: 24px;
      justify-content: flex-end;
    }
    &__desktop-sort {
    display: none;
    width: 0px;
    flex-direction: row;
    gap: 10px;
    align-items: center;
  }
    &__sort {
      width: 32px;
      gap: 0;
    }
    &__sort-select-icon {
      box-sizing: border-box;
      display: flex;
      align-items: center;
      justify-content: center;
      width: 32px;
      height: 32px;
      border-radius: 50%;
      background: #f0f0f0;
      border: 1px solid #f0f0f0;
      transition: all 0.3s ease-in;
      @media (hover: hover) {
        &:hover {
          border: 1px solid #121212;
        }
      }
      @media (hover: none) {
        &:active {
          border: 1px solid #121212;
        }
      }
    }
    &__sort-param {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
    &__sort-menu {
      top: 40px;
    }
    &__filter {
      box-sizing: border-box;
      display: flex;
      align-items: center;
      justify-content: center;
      width: 32px;
      height: 32px;
      border-radius: 50%;
      background: #f0f0f0;
      border: 1px solid #f0f0f0;
      transition: all 0.3s ease-in;
      @media (hover: hover) {
        &:hover {
          border: 1px solid #121212;
        }
      }
      @media (hover: none) {
        &:active {
          border: 1px solid #121212;
        }
      }
    }
  }
}
@media (max-width: 768px) {
  .title-box {
    &__cards-title {
      flex-direction: column;
      gap: 2px;
      font-size: 24px;
      line-height: 80%;
    }
    &__showing-cards {
      font-size: 12px;
    }
    &__controls {
      gap: 14px;
      padding-right: 10px;
    }
    &__sort-menu {
      right: 5px;
    }
  }
}
</style>
