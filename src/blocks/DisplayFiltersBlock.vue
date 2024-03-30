<template>
  <div class="filters">
    <div class="filters__title-box">
      <h6 class="filters__title">Filters</h6>
      <img
        v-if="!useCloseIcon"
        class="filters__icon filters__icon_filter"
        :src="`${require('@/assets/img/common/sort-icon.svg')}`"
        alt="filter icon"
      />
      <a v-else href="#" class="filters__close-btn" @click="closeFilters">
        <img
          class="filters__icon filters__icon_close"
          src="@/assets/img/common/close-icon-grey.svg"
          alt="close icon"
        />
      </a>
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
        <FilterBoxComponentWithRange
          class="filters__filter-box"
          filterTitle="Price"
          :priceStart="getPriceRange.start"
          :priceEnd="getPriceRange.end"
          :priceMin="getActivePriceMin"
          :priceMax="getActivePriceMax"
          @getActivePriceMinFromChild="setActivePriceMin"
          @getActivePriceMaxFromChild="setActivePriceMax"
        />
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
        <FilterBoxComponentWithLinks
          class="filters__filter-box"
          filterTitle="Dress style"
          :paramsOfButtons="getDressStyles"
          :activeParamId="getActiveDressStyle"
          @getActiveParamId="setActiveDressStyle"
        />
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
import FilterBoxComponentWithLinks from "@/components/FilterBoxComponentWithLinks.vue"
import FilterBoxComponentWithRange from "@/components/FilterBoxComponentWithRange.vue"
import { mapGetters } from "vuex"

export default {
  props: {
    filtersSettings: {
      type: Object,
      default: () => {
        return {
          gender: null,
          type: null,
          priceStart: 0,
          priceEnd: 100,
          priceMin: 0,
          priceMax: 100,
          colors: null,
          size: null,
          dressStyle: null,
        }
      },
    },
  },
  emits: ["getActualFiltersState", "closeFiltersMenu"],
  components: {
    ButtonThirdColor,
    ButtonSelectionColor,
    FilterBoxComponentWithThirdColorButtons,
    FilterBoxComponentWithButtonsForColors,
    FilterBoxComponentWithLinks,
    FilterBoxComponentWithRange,
  },
  data() {
    return {
      filtersState: {
        gender: null,
        type: null,
        priceStart: 0,
        priceEnd: 1000,
        priceMin: 0,
        priceMax: 1000,
        color: null,
        size: null,
        dressStyle: null,
      },
      useCloseIcon: false,
    }
  },
  mounted() {
    this.setInitial()
    window.addEventListener("resize", this.setInitial)
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
    getActivePriceStart() {
      return this.filtersState.priceStart
    },
    getActivePriceEnd() {
      return this.filtersState.priceEnd
    },
    getActivePriceMin() {
      return this.filtersState.priceMin
    },
    getActivePriceMax() {
      return this.filtersState.priceMax
    },
    getActiveSize() {
      return this.filtersState.size
    },
    getActiveColor() {
      return this.filtersState.color
    },
    getActiveDressStyle() {
      return this.filtersState.dressStyle
    },
  },
  methods: {
    closeFilters() {
      this.$emit("closeFiltersMenu", true)
    },
    setInitial() {
      if (window.innerWidth > 1239) {
        this.useCloseIcon = false
      } else if (window.innerWidth <= 1239 && window.innerWidth > 768) {
        this.useCloseIcon = true
      } else if (window.innerWidth <= 768) {
        this.useCloseIcon = true
      }
    },
    setActiveGender(id) {
      this.filtersState.gender = id
    },
    setActiveType(id) {
      this.filtersState.type = id
    },
    setActivePriceStart(start) {
      this.filtersState.priceStart = start
    },
    setActivePriceEnd(end) {
      this.filtersState.priceEnd = end
    },
    setActivePriceMin(min) {
      this.filtersState.priceMin = min
    },
    setActivePriceMax(max) {
      this.filtersState.priceMax = max
    },
    setActiveSize(id) {
      this.filtersState.size = id
    },
    setActiveColor(id) {
      this.filtersState.color = id
    },
    setActiveDressStyle(id) {
      this.filtersState.dressStyle = id
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

@media (max-width: 1239px) {
  .filters {
    display: flex;
    padding: 20px 32px;
    // margin-left: -32px;
    // margin-right: -32px;
    width: 1239px;
    border-radius: 20px 20px 0px 0px;
    border: 1px solid #ccc;
    background: #fff;
    &__title-box {
    width: 100%;
  }
  }
}

@media (max-width: 768px) {
  .filters {
    padding: 20px 16px;
    // margin-left: -16px;
    // margin-right: -16px;
    width: 768px;
  }
}
</style>
