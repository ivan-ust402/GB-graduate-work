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
        <div class="filters__filter-box filter">
          <div class="filter__title-box">
            <h6 class="filter__title">Gender</h6>
            <img
              :src="`${require('@/assets/img/common/dropup-arrow.svg')}`"
              alt="dropup arrow"
            />
          </div>
          <div class="filter__content filter__set-third-color-buttons">
            <ButtonThirdColor
              class="filter__button"
              v-for="gender in getGenders"
              :text="gender.name"
            />
          </div>
        </div>
        <div class="filters__filter-box filter">
          <div class="filter__title-box">
            <h6 class="filter__title">TYPE</h6>
            <img
              :src="`${require('@/assets/img/common/dropup-arrow.svg')}`"
              alt="dropup arrow"
            />
          </div>
          <div class="filter__content filter__set-third-color-buttons">
            <ButtonThirdColor
              class="filter__button"
              v-for="typeItem in getTypes"
              :text="typeItem.name"
            />
          </div>
        </div>
        <div class="filters__filter-box filter">
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
        </div>
        <div class="filters__filter-box filter">
          <div class="filter__title-box">
            <h6 class="filter__title">Colors</h6>
            <img
              :src="`${require('@/assets/img/common/dropup-arrow.svg')}`"
              alt="dropup arrow"
            />
          </div>
          <div class="filter__content filter__set-third-color-buttons">
            <a href="#" class="filter__color-btn" v-for="color in getColors">
              <svg
                class="filter__color-svg"
                width="37"
                height="37"
                viewBox="0 0 37 37"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle
                  cx="18.5"
                  cy="18.5"
                  r="18.5"
                  :fill="color.code"
                  stroke="#E8E8E8"
                />
                <path
                  v-if="true"
                  d="M24.5306 15.0306L16.5306 23.0306C16.4609 23.1005 16.3781 23.156 16.287 23.1939C16.1958 23.2317 16.0981 23.2512 15.9993 23.2512C15.9006 23.2512 15.8029 23.2317 15.7117 23.1939C15.6206 23.156 15.5378 23.1005 15.4681 23.0306L11.9681 19.5306C11.8983 19.4609 11.843 19.378 11.8052 19.2869C11.7675 19.1957 11.748 19.098 11.748 18.9994C11.748 18.9007 11.7675 18.803 11.8052 18.7119C11.843 18.6207 11.8983 18.5379 11.9681 18.4681C12.0379 18.3984 12.1207 18.343 12.2118 18.3053C12.303 18.2675 12.4007 18.2481 12.4993 18.2481C12.598 18.2481 12.6957 18.2675 12.7869 18.3053C12.878 18.343 12.9608 18.3984 13.0306 18.4681L16 21.4375L23.4693 13.9694C23.6102 13.8285 23.8013 13.7493 24.0006 13.7493C24.1999 13.7493 24.391 13.8285 24.5318 13.9694C24.6727 14.1103 24.7519 14.3014 24.7519 14.5006C24.7519 14.6999 24.6727 14.891 24.5318 15.0319L24.5306 15.0306Z"
                  fill="#E8E8E8"
                />
              </svg>
            </a>
          </div>
        </div>
        <div class="filters__filter-box filter">
          <div class="filter__title-box">
            <h6 class="filter__title">Size</h6>
            <img
              :src="`${require('@/assets/img/common/dropup-arrow.svg')}`"
              alt="dropup arrow"
            />
          </div>
          <div class="filter__content filter__set-third-color-buttons">
            <ButtonThirdColor
              class="filter__button"
              v-for="gender in getSizes"
              :text="gender.name"
            />
          </div>
        </div>
        <div class="filters__filter-box filter">
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
        </div>
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
  },
  data() {
    return {
      filtersState: {
        gender: null,
        type: null,
        price: null,
        colors: null,
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
  },
  methods: {
    applyFilter() {
      console.log("applyFilters")
      this.$emit("getActualFiltersState", this.filtersState)
    },
  },
}
</script>

<style lang="scss" scoped>
.filters {
  display: flex;
  padding: 20px 24px;
  flex-direction: column;
  align-items: flex-start;
  width: 295px;
  gap: 24px;
  &__title-box {
    width: 100%;
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
