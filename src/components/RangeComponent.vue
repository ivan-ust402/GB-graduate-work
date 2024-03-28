<template>
  <div>
    <div class="slider">
      <div
        class="slider__progress"
        :style="{ left: `${getLeftIndent}%`, right: `${getRightIndent}%` }"
      ></div>
    </div>
    <div class="range">
      <input
        type="range"
        v-model.number="minValue"
        :min="priceStart"
        :max="priceEnd"
        :step="1"
        @input="updateMin"
        class="range__input"
      />
      <input
        type="range"
        v-model.number="maxValue"
        :min="priceStart"
        :max="priceEnd"
        :step="1"
        @input="updateMax"
        class="range__input"
      />
    </div>
    <div class="value">
      <div class="value__field">
        <span>$</span>
        <input
          type="number"
          class="value__input"
          :value="getMinValue"
          @change="updateMin"
          @focusin="clearString"
          @focusout="setDefaultMin"
        />
      </div>
      <div class="value__field">
        <span>$</span>
        <input
          type="number"
          class="value__input"
          :value="getMaxValue"
          @change="updateMax"
          @focusin="clearString"
          @focusout="setDefaultMax"
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  emits: ["getActivePriceMinFromRange", "getActivePriceMaxFromRange"],
  props: {
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
      minValue: 0,
      maxValue: 100,
      leftProgressIndent: 0,
      rightProgressIndent: 0,
    }
  },
  mounted() {
    this.setInputMinMaxValue()
  },
  computed: {
    getMaxValue() {
      return this.maxValue
    },
    getMinValue() {
      return this.minValue
    },
    getLeftIndent() {
      return this.leftProgressIndent
    },
    getRightIndent() {
      return this.rightProgressIndent
    },
  },
  methods: {
    setInputMinMaxValue() {
      this.minValue = Number(this.priceMin)
      this.maxValue = Number(this.priceMax)
      this.leftProgressIndent = this.calculateProgressLineLeftIndent(
        this.minValue,
        this.priceEnd
      )
      this.rightProgressIndent = this.calculateProgressLineRightIndent(
        this.maxValue,
        this.priceEnd
      )
    },
    clearString(e) {
      e.target.value = ''
    },
    setDefaultMin(e){
      e.target.value = this.minValue
    },
    setDefaultMax(e){
      e.target.value = this.maxValue
    },
    updateMin(e) {
      let currentMinPrice = Number(e.target.value)
      let currentMaxPrice = this.maxValue
      if (
        typeof currentMinPrice === "number" &&
        currentMinPrice >= 0 &&
        currentMinPrice < currentMaxPrice - 50
      ) {
        // console.log("1")
        this.minValue = currentMinPrice
      } else if (
        typeof currentMinPrice === "number" &&
        currentMinPrice >= 0 &&
        currentMinPrice >= currentMaxPrice - 50
      ) {
        // console.log("2")
        currentMinPrice = currentMaxPrice - 50
        
        this.minValue = currentMinPrice
      } else {
        // console.log("3")
        currentMinPrice = 0
        this.minValue = currentMinPrice
      }
      e.target.value = currentMinPrice
      this.leftProgressIndent = this.calculateProgressLineLeftIndent(
        currentMinPrice,
        this.priceEnd
      )
      this.$emit("getActivePriceMinFromRange", currentMinPrice)
    },
    updateMax(e) {
      let currentMinPrice = this.minValue
      let currentMaxPrice = Number(e.target.value)
      if (
        typeof currentMaxPrice === "number" &&
        currentMaxPrice <= this.priceEnd &&
        currentMaxPrice > currentMinPrice + 50
      ) {
        // console.log("1")
        e.target.value = currentMaxPrice
        this.maxValue = currentMaxPrice
      } else if (
        typeof currentMaxPrice === "number" &&
        currentMaxPrice <= this.priceEnd &&
        currentMaxPrice <= currentMinPrice + 50
      ) {
        // console.log("2")
        currentMaxPrice = currentMinPrice + 50
        e.target.value = currentMaxPrice
        this.maxValue = currentMaxPrice
      } else {
        // console.log("3")
        currentMaxPrice = this.priceEnd
        this.maxValue = currentMaxPrice
        e.target.value = currentMaxPrice
      }

      this.rightProgressIndent = this.calculateProgressLineRightIndent(
        currentMaxPrice,
        this.priceEnd
      )
      this.$emit("getActivePriceMaxFromRange", currentMaxPrice)
    },
    calculateProgressLineLeftIndent(currentPrice, endPrice) {
      const percent = Math.round((currentPrice / endPrice) * 100 * 10) / 10
      return percent
    },
    calculateProgressLineRightIndent(currentPrice, endPrice) {
      const percent =
        Math.round((100 - (currentPrice / endPrice) * 100) * 10) / 10
      return percent
    },
  },
}
</script>

<style lang="scss" scoped>
.value {
  box-sizing: border-box;
  display: flex;
  width: 100%;
  padding-top: 10px;
  padding-left: 10px;
  padding-right: 10px;
  justify-content: space-between;
  &__field {
    box-sizing: border-box;
    display: flex;
    align-items: center;
    gap: 2px;
    height: 14px;
    width: 50px;
    font-size: 14px;
  }
  &__input {
    cursor: pointer;
    box-sizing: border-box;
    outline: none;
    border: none;
    width: 50px;
    height: 14px;
    padding-top: 3px;
    color: var(--Black, #121212);
    /* Desktop/Text/Descriptions/Small */
    font-family: "satoshiregular";
    font-size: 14px;
    line-height: normal;
    -moz-appearance: textfield;
    &::-webkit-inner-spin-button,
    &::-webkit-outer-spin-button {
      -webkit-appearance: none;
    }
    &:focus {
      cursor: text;
    }
  }
}
.range {
  position: relative;
  &__input {
    width: 100%;
    height: 6px;
    position: absolute;
    top: -6px;
    background: #f0f0f0;
    pointer-events: none;
    -webkit-appearance: none;
  }
  &__input::-webkit-slider-thumb {
    cursor: pointer;
    width: 20px;
    z-index: 2;
    position: relative;
    top: 2px;
    margin-top: -3px;
    height: 20px;
    border-radius: 50%;
    pointer-events: auto;
    -webkit-appearance: none;
    background: #121212;
  }
  &__input::-moz-range-thumb {
    cursor: pointer;
    width: 20px;
    z-index: 2;
    position: relative;
    border: none;
    top: 2px;
    margin-top: -3px;
    height: 20px;
    border-radius: 50%;
    pointer-events: auto;
    -moz-appearance: none;
    background: #121212;
  }
}
.slider {
  height: 6px;
  border-radius: 5px;
  position: relative;
  background: #f0f0f0;
  &__progress {
    position: absolute;
    left: 25%;
    right: 25%;
    height: 6px;
    background-color: #121212;
    border-radius: 5px;
    z-index: 2;
  }
}
// .range-input {
//   -webkit-appearance: none;
//   width: 100%;
//   height: 10px;
//   background: #d3d3d3;
//   border-radius: 5px;
//   outline: none;
//   margin: 10px 0;
// }

// .range-input::-webkit-slider-thumb {
//   -webkit-appearance: none;
//   appearance: none;
//   width: 15px;
//   height: 15px;
//   background: #007bff;
//   border-radius: 50%;
//   cursor: pointer;
// }

// .range-input::-moz-range-thumb {
//   width: 15px;
//   height: 15px;
//   background: #007bff;
//   border-radius: 50%;
//   cursor: pointer;
// }
</style>
