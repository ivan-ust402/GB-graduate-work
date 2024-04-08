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
      <a v-else href="#" class="filters__close-btn" @click.prevent="closeFilters">
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
          :priceStart="getActivePriceStart"
          :priceEnd="getActivePriceEnd"
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
import router from "@/router"

export default {
  props: {
    filtersSettings: {
      type: Object,
      default: () => {
        return
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
        gender: -1,
        type: -1,
        priceStart: 0,
        priceEnd: 1000,
        priceMin: 0,
        priceMax: 1000,
        color: -1,
        size: -1,
        dressStyle: -1,
      },
      useCloseIcon: false,
      query: {},
      resizes: false,
    }
  },
  mounted() {
    this.query = this.$route.query
    this.setInitial()
    this.resizes = window.innerWidth
    window.addEventListener("resize", this.setInitial)
    this.filtersState = this.setSettingsForFilter(this.query)
  },
  unmounted() {
    window.removeEventListener("resize", this.setInitial)
  },
  watch: {
    $route() {
      this.query = this.$route.query
    },
  },
  computed: {
    ...mapGetters([
      "getGenders",
      "getTypes",
      "getDressStyles",
      "getSizes",
      "getColors",
      "getGenderById",
      "getGenderByShortName",
      "getTypeById",
      "getTypeByName",
      "getDressStyleById",
      "getDressStyleByName",
      "getSizeById",
      "getSizeByShortName",
      "getColorById",
      "getColorByName",
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
      const resizeWidth = window.innerWidth
      if (this.resizes == resizeWidth) {
        return
      }
      this.resizes = resizeWidth
      if (window.innerWidth > 1239) {
        if (this.useCloseIcon !== false) {
          this.useCloseIcon = false
        }
      } else if (window.innerWidth <= 1239) {
        if (this.useCloseIcon !== true) {
          this.useCloseIcon = true
        }
      }
    },
    setSettingsForFilter(query) {
      const { gender, type, color, size, style, pricemin, pricemax, show } =
        query
      const currentPriceEnd = this.getPriceRange.end
      const currentPriceStart = this.getPriceRange.start
      if (show && show === "all") {
        return {
          gender: -1,
          type: -1,
          priceStart: currentPriceStart,
          priceEnd: currentPriceEnd,
          priceMin: currentPriceStart,
          priceMax: currentPriceEnd,
          color: -1,
          size: -1,
          dressStyle: -1,
        }
      }

      const currentGender = gender ? this.getGenderByShortName(gender).id : -1
      const currentType = type ? this.getTypeByName(type).id : -1
      const currentPriceMin = pricemin ? Number(pricemin) : currentPriceStart
      const currentPriceMax = pricemax ? Number(pricemax) : currentPriceEnd
      const currentColor = color ? this.getColorByName(color).id : -1
      const currentSize = size ? this.getSizeByShortName(size).id : -1
      const currentDressStyle = style ? this.getDressStyleByName(style).id : -1
      return {
        gender: currentGender,
        type: currentType,
        priceStart: currentPriceStart,
        priceEnd: currentPriceEnd,
        priceMin: currentPriceMin,
        priceMax: currentPriceMax,
        color: currentColor,
        size: currentSize,
        dressStyle: currentDressStyle,
      }
    },
    generateQueryRequest(inputState) {
      let { gender, type, color, size, dressStyle, priceMin, priceMax } = inputState
      const currentPriceEnd = this.getPriceRange.end
      const currentPriceStart = this.getPriceRange.start
      const queryObj = {}

      const currentGenderName = Number(gender) !== -1
        ? this.getGenderById(gender).name.trim().toLowerCase().split(" ")[1]
        : null
      const currentTypeName = Number(type) !== -1
        ? this.getTypeById(type).name.trim().toLowerCase()
        : null
      const currentPriceMin =
        Number(priceMin) !== currentPriceStart ? Number(priceMin) : null
      const currentPriceMax =
        Number(priceMax) !== currentPriceEnd ? Number(priceMax) : null
      const currentColorName = Number(color) !== -1
        ? this.getColorById(color).name.trim().toLowerCase()
        : null
      const currentSizeName = Number(size) !== -1
        ? this.getSizeById(size).shortName.trim().toLowerCase()
        : null
      const currentDressStyleName = Number(dressStyle) !== -1
        ? this.getDressStyleById(dressStyle).name.trim().toLowerCase()
        : null
      if (
        currentGenderName === null &&
        currentTypeName === null &&
        currentPriceMin === null &&
        currentPriceMax === null &&
        currentColorName === null &&
        currentSizeName === null &&
        currentDressStyleName === null
      ) {
        return {
          show: "all"
        }
      }

      if (currentGenderName !== null) {
        queryObj.gender = currentGenderName
      } 
      if (currentTypeName !== null) {
        queryObj.type = currentTypeName
      } 
      if (currentPriceMin !== null) {
        queryObj.pricemin = currentPriceMin
      } 
      if (currentPriceMax !== null) {
        queryObj.pricemax = currentPriceMax
      }
      if (currentColorName !== null) {
        queryObj.color = currentColorName
      }
      if (currentSizeName !== null) {
        queryObj.size = currentSizeName
      }
      if (currentDressStyleName !== null) {
        queryObj.style = currentDressStyleName
      }
      return queryObj;
  
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
      const query = this.generateQueryRequest(this.filtersState)
      router.push({
          name: "CatalogPage",
          params: { page: 1 },
          query,
        })

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
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  border: 1px solid #e8e8e8;
  width: 295px;
  height: 100%;
  background-color: #fff;
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
    height: fit-content;
    width: 100%;
    padding: 20px 32px 40px;
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
  }
}
</style>
