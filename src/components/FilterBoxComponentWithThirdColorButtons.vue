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
      <ButtonThirdColor
        class="filter__button"
        v-for="param in paramsOfButtons"
        :text="param.name"
        :isActive="param.id === activeParamId"
        @click.prevent="selectActiveParam(param.id)"
      />
    </div>
  </div>
</template>

<script>
import ButtonThirdColor from "./ButtonThirdColor.vue"

export default {
  components: {
    ButtonThirdColor,
  },
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
  emits: ['getActiveParamId'],
  data() {
    return {
      isOpen: false,
    }
  },
  methods: {
    selectActiveParam(id) {
      console.log("setActiveParamById: ", id)
      this.$emit('getActiveParamId', id)
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

  &__title-box {
    cursor: pointer;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    position: relative;
  }
  &__title {
    color: var(--Black, #121212);
    font-family: "satoshibold";
    font-size: 20px;
    line-height: 22px; /* 110% */
    text-transform: uppercase;
    user-select: none;
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
    transition: all .3s ease-in;
    position: static;
    &_close {
      opacity: 0;
      position: absolute;
      top: 0;
      right: 9999px;
      transition: all .3s ease-in;
    }
  }
  &__set-third-color-buttons {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    gap: 8px;
  }
}
@media (max-width: 1239px) {
  .filter {
  }
}
@media (max-width: 768px) {
  .filter {}
}
</style>
