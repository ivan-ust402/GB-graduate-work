<template>
  <div class="filter">
    <div class="filter__title-box" @click="toggleIsOpen">
      <h6 class="filter__title">{{ filterTitle }}</h6>
      <img
        :class="{ filter__arrow_close: !isOpen }"
        class="filter__arrow"
        :src="`${require('@/assets/img/common/dropup-arrow.svg')}`"
        alt="dropup arrow"
      />
      <img
        :class="{ filter__arrow_close: isOpen }"
        class="filter__arrow"
        :src="`${require('@/assets/img/common/dropdown-arrow.svg')}`"
        alt="dropup arrow"
      />
    </div>
    <div
      :class="{ filter__content_close: !isOpen }"
      class="filter__content filter__set-third-color-buttons"
    >
      <RangeComponent
        :priceStart="priceStart"
        :priceEnd="priceEnd"
        :priceMin="priceMin"
        :priceMax="priceMax"
        @getActivePriceMinFromRange="setActivePriceMin"
        @getActivePriceMaxFromRange="setActivePriceMax"
      />
      <!-- <RangeVue3SliderComponent /> -->
    </div>
  </div>
</template>

<script>
import RangeComponent from "./RangeComponent.vue"
// import RangeVue3SliderComponent from "./RangeVue3SliderComponent.vue"

export default {
  components: {
    RangeComponent,
    // RangeVue3SliderComponent,
  },
  emits: ["getActivePriceMinFromChild", "getActivePriceMaxFromChild"],
  props: {
    filterTitle: "Some Kind Filter",
    priceMin: {
      type: Number,
      default: () => 0,
    },
    priceMax: {
      type: Number,
      default: () => 100,
    },
    priceStart: {
      type: Number,
      default: () => 0,
    },
    priceEnd: {
      type: Number,
      default: () => 100,
    },
  },
  data() {
    return {
      isOpen: false,
    }
  },
  methods: {
    toggleIsOpen() {
      this.isOpen = !this.isOpen
    },
    setActivePriceMin(value) {
      this.$emit("getActivePriceMinFromChild", value)
    },
    setActivePriceMax(value) {
      this.$emit("getActivePriceMaxFromChild", value)
    },
  },
}
</script>

<style lang="scss" scoped>
.filter {
  display: flex;
  flex-direction: column;
  gap: 20px;
  position: relative;
  user-select: none;
  &__title-box {
    cursor: pointer;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    position: relative;
  }
  &__title {
    color: #121212;
    font-family: "satoshibold";
    font-size: 20px;
    line-height: 22px; /* 110% */
    text-transform: uppercase;
  }
  &__arrow {
    opacity: 1;
    // transition: all 0.1s ease-in;
    &_close {
      position: absolute;
      top: 0;
      right: 0;
      opacity: 0;
    }
  }
  &__content {
    width: 100%;
    opacity: 1;
    transition: all 0.3s ease-in;
    position: static;
    &_close {
      opacity: 0;
      position: absolute;
      top: 0;
      right: 9999px;
      transition: all 0.3s ease-in;
    }
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
}
@media (max-width: 1239px) {
  .filter {
    gap: 16px;
    &__title {
      text-transform: capitalize;
    }
  }
}
</style>
