<template>
  <div class="filter">
    <div class="filter__title-box" @click="toggleIsOpen">
      <h6 class="filter__title">{{ filterTitle }}</h6>
      <img
        :class="{ filter__arrow_close: isOpen }"
        class="filter__arrow"
        :src="`${require('@/assets/img/common/dropup-arrow.svg')}`"
        alt="dropup arrow"
      />
      <img
        :class="{ filter__arrow_close: !isOpen }"
        class="filter__arrow"
        :src="`${require('@/assets/img/common/dropdown-arrow.svg')}`"
        alt="dropup arrow"
      />
    </div>
    <div
      :class="{ filter__content_close: isOpen }"
      class="filter__content filter__buttons-set"
    >
      <a
        href="#"
        class="filter__color-btn"
        v-for="param in paramsOfButtons"
        @click.prevent="selectActiveParam(param.id)"
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
            :fill="param.code"
            stroke="#E8E8E8"
          />
          <path
            v-if="param.id === activeParamId"
            d="M24.5306 15.0306L16.5306 23.0306C16.4609 23.1005 16.3781 23.156 16.287 23.1939C16.1958 23.2317 16.0981 23.2512 15.9993 23.2512C15.9006 23.2512 15.8029 23.2317 15.7117 23.1939C15.6206 23.156 15.5378 23.1005 15.4681 23.0306L11.9681 19.5306C11.8983 19.4609 11.843 19.378 11.8052 19.2869C11.7675 19.1957 11.748 19.098 11.748 18.9994C11.748 18.9007 11.7675 18.803 11.8052 18.7119C11.843 18.6207 11.8983 18.5379 11.9681 18.4681C12.0379 18.3984 12.1207 18.343 12.2118 18.3053C12.303 18.2675 12.4007 18.2481 12.4993 18.2481C12.598 18.2481 12.6957 18.2675 12.7869 18.3053C12.878 18.343 12.9608 18.3984 13.0306 18.4681L16 21.4375L23.4693 13.9694C23.6102 13.8285 23.8013 13.7493 24.0006 13.7493C24.1999 13.7493 24.391 13.8285 24.5318 13.9694C24.6727 14.1103 24.7519 14.3014 24.7519 14.5006C24.7519 14.6999 24.6727 14.891 24.5318 15.0319L24.5306 15.0306Z"
            fill="#fff"
            stroke="#ccc"
          />
        </svg>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    filterTitle: "Some Kind Filter",
    paramsOfButtons: {
      type: Array,
      default: () => [],
    },
    activeParamId: {
      type: Number,
      default: () => -1,
    },
  },
  emits: ["getActiveParamId"],
  data() {
    return {
      isOpen: false,
    }
  },
  methods: {
    selectActiveParam(id) {
      if(id === this.activeParamId) {
        this.$emit("getActiveParamId", -1)
      } else {
        this.$emit("getActiveParamId", id)
      }
    },
    toggleIsOpen() {
      this.isOpen = !this.isOpen
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
  &__buttons-set {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    row-gap: 16px;
    // justify-content: space-between;
    column-gap: 13px;
  }
  &__color-btn {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    width: 38px;
    height: 38px;
    box-sizing: border-box;
  }
  &__color-svg {
    box-sizing: border-box;
    width: 33px;
    height: 33px;
  }
}
@media (max-width: 1239px) {
  .filter {
    gap: 16px;
    &__title {
      text-transform: capitalize;
    }
    &__buttons-set {
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      row-gap: 16px;
      column-gap: 13px;
    }
  }
}
</style>
