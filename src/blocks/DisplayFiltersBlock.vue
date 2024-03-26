<template>
  <div class="catalog__filters filters">
    <div class="filters__title-box">
      <h6 class="filters__title">Filters</h6>
      <img
        class="filters__icon"
        :src="`${require('@/assets/img/common/sort-icon.svg')}`"
        alt=""
      />
    </div>
    <div class="filters__display-box">
      <div class="filters__display">
        <FilterBoxComponentWithThirdColorButtons
          class="filters__filter-box"
          filterTitle="Gender"
          :paramsOfButtons="getGenders"
          :activeParamId="getActiveGender"
          @getActiveParamId="setActiveGender"
        />
        <FilterBoxComponentWithThirdColorButtons
          class="filters__filter-box"
          filterTitle="Type"
          :paramsOfButtons="getTypes"
          :activeParamId="getActiveType"
          @getActiveParamId="setActiveType"
        />
        <!-- <div class="filters__filter-box filter">
          <div class="filter__title-box">
            <h6 class="filter__title">Price</h6>
            <img
              :src="`${require('@/assets/img/common/dropup-arrow.svg')}`"
              alt="dropup arrow"
            />
          </div>
          <div class="filter__content filter__set-third-color-buttons">
            <input
              type="range"
              class="filter__range"
              min="0"
              max="100"
              step="5"
            />
          </div>
        </div> -->
        <FilterBoxComponentWithButtonsForColors
          class="filters__filter-box"
          filterTitle="Colors"
          :paramsOfButtons="getColors"
          :activeParamId="getActiveColor"
          @getActiveParamId="setActiveColor"
        />
        <FilterBoxComponentWithThirdColorButtons
          class="filters__filter-box"
          filterTitle="Size"
          :paramsOfButtons="getSizes"
          :activeParamId="getActiveSize"
          @getActiveParamId="setActiveSize"
        />
        <!-- <div class="filters__filter-box filter">
          <div class="filter__title-box">
            <h6 class="filter__title">Dress Style</h6>
            <img
              :src="`${require('@/assets/img/common/dropup-arrow.svg')}`"
              alt="dropup arrow"
            />
          </div>
          <div class="filter__content filter__style-box">
            <a
              href="#"
              class="filter__without-border"
              v-for="style in getDressStyles"
            >
              {{ style.name }}
            </a>
          </div>
        </div> -->
      </div>
      <ButtonSelectionColor
        class="filters__apply-btn"
        text="Apply Filter"
        @click="applyFilter"
      />
    </div>
  </div>
</template>

<script>
import ButtonSelectionColor from "@/components/ButtonSelectionColor.vue"
import ButtonThirdColor from "@/components/ButtonThirdColor.vue"
import FilterBoxComponentWithButtonsForColors from "@/components/FilterBoxComponentWithButtonsForColors.vue"
import FilterBoxComponentWithThirdColorButtons from "@/components/FilterBoxComponentWithThirdColorButtons.vue"
import { mapGetters } from "vuex"

export default {
  props: {
    filtersSettings: {
      type: Object,
      default: () => {
        return {
          gender: null,
          type: null,
          price: null,
          colors: null,
          size: null,
          dressStyle: null,
        }
      },
    },
  },
  emits: ["getActualFiltersState"],
  components: {
    ButtonThirdColor,
    ButtonSelectionColor,
    FilterBoxComponentWithThirdColorButtons,
    FilterBoxComponentWithButtonsForColors
  },
  data() {
    return {
      filtersState: {
        gender: null,
        type: null,
        price: null,
        color: null,
        size: null,
        dressStyle: null,
      },
    }
  },
  computed: {
    ...mapGetters([
      "getProductByQuery",
      "getGenders",
      "getTypes",
      "getDressStyles",
      "getSizes",
      "getColors",
      "getPriceRange",
    ]),
    getActiveGender() {
      return this.filtersState.gender
    },
    getActiveType() {
      return this.filtersState.type
    },
    getActiveSize() {
      return this.filtersState.size
    },
    getActiveColor() {
      return this.filtersState.color
    },
  },
  methods: {
    setActiveGender(id) {
      this.filtersState.gender = id
    },
    setActiveType(id) {
      this.filtersState.type = id
    },
    setActiveSize(id) {
      this.filtersState.size = id
    },
    setActiveColor(id) {
      this.filtersState.color = id
    },
    applyFilter() {
      console.log("applyFilters")
      this.$emit("getActualFiltersState", this.filtersState)
    },
  },
}
</script>

<style lang="scss" scoped>
.filters {
  box-sizing: border-box;
  display: flex;
  padding: 20px 24px;
  flex-direction: column;
  align-items: flex-start;
  width: 295px;
  gap: 24px;
  &__title-box {
    width: 247px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding-bottom: 24px;
    border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  }
  &__title {
    align-self: center;
    text-transform: capitalize;
    color: #121212;
    font-family: "satoshibold";
    font-size: 20px;
    line-height: normal;
  }
  &__icon {
    width: 24px;
    height: 24px;
  }
  &__display-box {
    display: flex;
    flex-direction: column;
    width: 100%;
  }
  &__display {
    display: flex;
    flex-direction: column;
    gap: 24px;
  }
  &__filter-box {
    padding-bottom: 24px;
    border-bottom: 1px solid rgba(0, 0, 0, 0.1);
    &:last-child {
      border: none;
    }
  }
  &__apply-btn {
    width: 100%;
  }
}

.filter {
  display: flex;
  flex-direction: column;
  gap: 20px;
  &__title-box {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  }
  &__title {
    color: var(--Black, #121212);
    font-family: "satoshibold";
    font-size: 20px;
    line-height: 22px; /* 110% */
    text-transform: uppercase;
  }
  &__content {
    width: 100%;
  }
  &__set-third-color-buttons {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    gap: 8px;
  }
  &__color-btn {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    width: 38px;
    height: 38px;
  }
  &__range {
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    // -webkit-appearance: none;
    // -moz-appearance: none;
    // appearance: none;
  }
  &__color-svg {
    width: 36px;
    height: 36px;
  }
  &__style-box {
    display: flex;
    flex-direction: column;
    gap: 20px;
  }
  &__without-border {
    color: #222;
    font-family: "satoshiregular";
    font-size: 16px;
    line-height: normal;
  }
}

@media (max-width: 1239px) {
  .filters {
    display: flex;
    padding: 20px 24px;
    flex-direction: column;
    align-items: flex-start;
    gap: 24px;
    &__title-box {
      width: 100%;
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
    }
    &__title {
      align-self: center;
      text-transform: capitalize;
      color: #121212;
      font-family: "satoshibold";
      font-size: 20px;
      line-height: normal;
    }
    &__icon {
      width: 24px;
      height: 24px;
    }
    &__display {
      display: flex;
      flex-direction: column;
      gap: 24px;
    }
    &__filter-box {
      padding-bottom: 24px;
      border-bottom: 1px solid rgba(0, 0, 0, 0.1);
      &:last-child {
        border: none;
      }
    }
  }

  .filter {
    display: flex;
    flex-direction: column;
    gap: 20px;
    &__title-box {
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: space-between;
    }
    &__title {
      color: var(--Black, #121212);
      font-family: "satoshibold";
      font-size: 20px;
      line-height: 22px; /* 110% */
      text-transform: uppercase;
    }
    &__content {
      width: 100%;
    }
    &__set-third-color-buttons {
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      gap: 8px;
    }
    &__color-btn {
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: center;
      width: 38px;
      height: 38px;
    }
    &__range {
      width: 100%;
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: center;
      // -webkit-appearance: none;
      // -moz-appearance: none;
      // appearance: none;
    }
    &__color-svg {
      width: 36px;
      height: 36px;
    }
  }
}

@media (max-width: 768px) {
  .filters {
    display: flex;
    padding: 20px 24px;
    flex-direction: column;
    align-items: flex-start;
    gap: 24px;
    &__title-box {
      width: 100%;
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
    }
    &__title {
      align-self: center;
      text-transform: capitalize;
      color: #121212;
      font-family: "satoshibold";
      font-size: 20px;
      line-height: normal;
    }
    &__icon {
      width: 24px;
      height: 24px;
    }
    &__display {
      display: flex;
      flex-direction: column;
      gap: 24px;
    }
    &__filter-box {
      padding-bottom: 24px;
      border-bottom: 1px solid rgba(0, 0, 0, 0.1);
      &:last-child {
        border: none;
      }
    }
  }

  .filter {
    display: flex;
    flex-direction: column;
    gap: 20px;
    &__title-box {
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: space-between;
    }
    &__title {
      color: var(--Black, #121212);
      font-family: "satoshibold";
      font-size: 20px;
      line-height: 22px; /* 110% */
      text-transform: uppercase;
    }
    &__content {
      width: 100%;
    }
    &__set-third-color-buttons {
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      gap: 8px;
    }
    &__color-btn {
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: center;
      width: 38px;
      height: 38px;
    }
    &__range {
      width: 100%;
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: center;
    }
    &__color-svg {
      width: 36px;
      height: 36px;
    }
  }
}
</style>
