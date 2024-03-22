<template>
  <section class="catalog center">
    <NavigationBreadcrumbsComponent class="catalog__breadcrumbs" />
    <div class="catalog__content">
      <div class="catalog__filters filters">
        <div class="filters__title-box">
          <h6 class="filters__title">Filters</h6>
          <img
            class="filters__icon"
            src="@/assets/img/common/sort-icon.svg"
            alt=""
          />
        </div>
        <div class="filters__display-box">
          <div class="filters__display">
            <div class="filters__filter-box filter">
              <div class="filter__title-box"></div>
              <h6 class="filter__title">Gender</h6>
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
                  src="@/assets/img/common/dropup-arrow.svg"
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
                  src="@/assets/img/common/dropup-arrow.svg"
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
                  src="@/assets/img/common/dropup-arrow.svg"
                  alt="dropup arrow"
                />
              </div>
              <div class="filter__content filter__set-third-color-buttons">
                <a
                  href="#"
                  class="filter__color-btn"
                  v-for="color in getColors"
                >
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
                  src="@/assets/img/common/dropup-arrow.svg"
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
                  src="@/assets/img/common/dropup-arrow.svg"
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
          />
        </div>
      </div>
      <div class="catalog__display">
        <div class="catalog__cards-box">
          <div class="catalog__cards-title-box">
            <h4 class="catalog__cards-title">
              <p class="catalog__test" v-for="query of getQuery">{{ query }}</p>
            </h4>
            <div class="catalog__cards-right-display">
              <p class="catalog__showing-cards">Showing 1-10 of 100 Products</p>
              <div class="catalog__sort">
                <p class="catalog__sort-label">Sort by:</p>
                <p class="catalog__sort-select">Most Popular</p>
              </div>
            </div>
          </div>
          <div class="catalog__cards">
            <CardProductMainComponent
              v-for="product in getProductByQuery(query)"
              :product="product"
            />
          </div>
        </div>
        <div class="catalog__pagination-box">
          <ButtonPagination text="Previous" arrow="left" />
          <div class="catalog__pagination"></div>
          <ButtonPagination text="Next" arrow="right" />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import ButtonPagination from "@/components/ButtonPagination.vue"
import ButtonSelectionColor from "@/components/ButtonSelectionColor.vue"
import ButtonThirdColor from "@/components/ButtonThirdColor.vue"
import CardProductMainComponent from "@/components/CardProductMainComponent.vue"
import NavigationBreadcrumbsComponent from "@/components/NavigationBreadcrumbsComponent.vue"
import { mapGetters } from "vuex"

export default {
  components: {
    CardProductMainComponent,
    NavigationBreadcrumbsComponent,
    ButtonThirdColor,
    ButtonPagination,
    ButtonSelectionColor
  },
  data() {
    return {
      query: {},
      page: 1,
    }
  },
  mounted() {
    this.page = this.$route.params.page
    this.query = this.$route.query
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
    getQuery() {
      return this.query
    },
    getPage() {
      return this.page
    },
  },
  watch: {
    $route() {
      this.page = this.$route.params.page
      this.query = this.$route.query
    },
  },
}
</script>

<style lang="scss" scoped>
.catalog {
  padding-top: 46px;
  padding-bottom: 82px;
  display: flex;
  flex-direction: column;
  gap: 24px;
  &__content {
    display: flex;
    flex-direction: row;
    gap: 21px;
  }
  &__filters {
    width: 295px;
    border-radius: 20px;
    border: 1px solid #e8e8e8;
  }
  &__display {
    display: flex;
    flex-direction: column;
    gap: 22px;
  }
  &__cards-box {
    display: flex;
    flex-direction: column;
    gap: 16px;
  }
  &__cards-title-box {
    display: flex;
    flex-direction: row;
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
  &__cards {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: flex-start;
    align-items: center;
    column-gap: 20px;
    row-gap: 36px;
    width: 100%;
  }
  &__pagination-box {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  }
  &__pagination {
    
  }
}

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
  .catalog {
    position: relative;
    padding-bottom: 60px;
    gap: 12px;
    z-index: 0;
    &__content {
      display: flex;
      flex-direction: row;
      gap: 21px;
    }
    &__filters {
      position: absolute;
      visibility: hidden;
      background-color: #fff;
      top: 0px;
      bottom: 0;
      left: 0;
      right: 0;
      z-index: 2;
      width: 295px;
      border-radius: 20px;
      border: 1px solid #e8e8e8;
    }
    &__display {
      gap: 22px;
    }
    &__cards-box {
      display: flex;
      flex-direction: column;
      gap: 16px;
    }
    &__cards-title-box {
      display: flex;
      flex-direction: row;
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
    &__cards {      
      column-gap: 16px;
      row-gap: 24px;
    }
    &__pagination-box {
      display: flex;
      flex-direction: row;
      align-items: center;
    }
    &__pagination {
    }
  }

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
  .catalog {
    position: relative;
    padding-bottom: 60px;
    gap: 12px;
    z-index: 0;
    &__content {
      display: flex;
      flex-direction: row;
      gap: 21px;
    }
    &__filters {
      position: absolute;
      visibility: hidden;
      background-color: #fff;
      top: 0px;
      bottom: 0;
      left: 0;
      right: 0;
      z-index: 2;
      width: 295px;
      border-radius: 20px;
      border: 1px solid #e8e8e8;
    }
    &__display {
      gap: 22px;
    }
    &__cards-box {
      display: flex;
      flex-direction: column;
      gap: 16px;
    }
    &__cards-title-box {
      display: flex;
      flex-direction: row;
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
    &__cards {      
      column-gap: 10px;
      row-gap: 24px;
    }
    &__pagination-box {
      display: flex;
      flex-direction: row;
      align-items: center;
    }
    &__pagination {
    }
  }

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
</style>
