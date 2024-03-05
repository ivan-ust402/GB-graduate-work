<template>
  <ul class="dropdown">
    <li
      class="dropdown__item"
      v-for="gender in genders"
      :key="gender.id"
      @click="changeShowClothesTypes(gender, genders)"
    >
      <div class="dropdown__info">
        {{ gender.name }}
        <svg
          :class="{ rotate: gender.showClothesTypes }"
          width="8"
          height="16"
          viewBox="0 0 8 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0.999999 15L6.33061 8.78095C6.7158 8.33156 6.7158 7.66844 6.33061 7.21905L0.999999 1"
            stroke="#4F4F4F"
            stroke-width="1.5"
            stroke-linecap="round"
          />
        </svg>
      </div>
      <DropSimpleMenu
        v-if="gender.showClothesTypes"
        :parameters="gender"
        :items="gender.clothesTypes"
        link="/catalog/0"
        @changeShowStatus="changeShowStatus"
      />
    </li>
  </ul>
</template>

<script>
import DropSimpleMenu from "@/components/DropSimpleMenu"
export default {
  components: {
    DropSimpleMenu,
  },
  props: {
    genders: {
      type: Array,
      default: () => [],
    },
  },
  computed: {
    // ...mapGetters(["getDropMenuIsHover"])
  },
  methods: {
    // ...mapActions(["changeDropMenuIsHover"])
    changeShowClothesTypes(item, itemArray) {
      if (item.showClothesTypes === true) {
        item.showClothesTypes = !item.showClothesTypes
      } else {
        for (const item of itemArray) {
          item.showClothesTypes = false
        }
        item.showClothesTypes = true
      }
      // item.showClothesTypes = !item.showClothesTypes
    },
    changeShowStatus() {
      for (const gender of this.genders) {
        gender.showClothesTypes = false
      }
    },
  },
}
</script>

<style lang="scss" scoped>
.dropdown {
  visibility: hidden;
  box-shadow: 0px 4px 15px 0px #d4d4d4;
  border-radius: 12px;
  z-index: 101;
  & :last-child .dropdown__info {
    border-bottom-left-radius: 12px;
    border-bottom-right-radius: 12px;
  }
  & :first-child .dropdown__info {
    border-top-left-radius: 12px;
    border-top-right-radius: 12px;
  }

  &__info {
    cursor: pointer;
    box-sizing: border-box;
    display: flex;
    width: 168px;
    padding: 16px;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid #f0eeed;
    transition: background 0.3s ease-in;
    background: #fff;
    position: relative;
    &:hover {
      border-bottom: 1px solid #f0eeed;
      background: #f0eeed;
    }
  }

  &__item {
    position: relative;
  }
}
@media (max-width: 1024px) {
  .dropdown {
    padding-top: 32px;
    box-shadow: none;
    border-radius: none;
    display: none;
    flex-direction: column;
    gap: 32px;
    justify-content: space-between;
    & :last-child .dropdown__info {
      border: none;
    }
    & :first-child .dropdown__info {
      border: none;
    }

    &__info {
      box-sizing: border-box;
      display: flex;
      width: 100%;
      padding: 0;
      text-transform: uppercase;
      font-weight: 700;
      justify-content: space-between;
      align-items: center;
      border-bottom: none;
      background: #f0eeed;
      position: static;
      opacity: 1;
      transition: opacity 0.3s ease-in;
      font-size: 16px;
      &:hover {
        border-bottom: none;
        background: none;
        opacity: 0.8;
      }
    }

    &__item {
      position: relative;
    }
    .dropmenu {
      &__button {
        font-weight: 700;
        line-height: normal;
        text-transform: uppercase;
        display: flex;
        justify-content: space-between;
        &:hover path {
          fill: none;
          stroke: #555;
        }
      }
      &__arrow-right {
        display: flex;
      }

      &__arrow-down {
        display: none;
      }
    }
    .rotate {
      transform: rotate(90deg);
    }
  }
}
</style>
@/components/DropSimpleMenu.vue
