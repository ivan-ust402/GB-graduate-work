<template>
  <div class="dropmenu">
    <a href="#" class="dropmenu__button" @click="toggleDropMenuIsActive()">
      Shop
      <svg
        class="dropmenu__arrow-right"
        :class="{ rotate: getDropMenuIsActive }"
        width="8"
        height="16"
        viewBox="0 0 8 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M0.999999 15L6.33061 8.78095C6.7158 8.33156 6.7158 7.66844 6.33061 7.21905L0.999999 1"
          stroke="#121212"
          stroke-width="1.5"
          stroke-linecap="round"
        />
      </svg>
      <svg
        class="dropmenu__arrow-down"
        width="17"
        height="16"
        viewBox="0 0 17 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M13.838 6.53073L8.83797 11.5307C8.76829 11.6007 8.6855 11.6561 8.59434 11.694C8.50317 11.7318 8.40543 11.7513 8.30672 11.7513C8.20801 11.7513 8.11027 11.7318 8.01911 11.694C7.92794 11.6561 7.84515 11.6007 7.77547 11.5307L2.77547 6.53073C2.63457 6.38984 2.55542 6.19874 2.55542 5.99948C2.55542 5.80023 2.63457 5.60913 2.77547 5.46823C2.91637 5.32734 3.10746 5.24818 3.30672 5.24818C3.50598 5.24818 3.69707 5.32734 3.83797 5.46823L8.30735 9.93761L12.7767 5.46761C12.9176 5.32671 13.1087 5.24756 13.308 5.24756C13.5072 5.24756 13.6983 5.32671 13.8392 5.46761C13.9801 5.60851 14.0593 5.7996 14.0593 5.99886C14.0593 6.19812 13.9801 6.38921 13.8392 6.53011L13.838 6.53073Z"
          fill="#121212"
        />
      </svg>
    </a>
    <DropMenu
      class="dropmenu__window"
      :class="{ active: getDropMenuIsActive }"
      :genders="getGenders"
    />
  </div>
</template>

<script>
import DropMenu from "@/components/DropMenu.vue"
import { mapActions, mapGetters } from "vuex"

export default {
  mounted() {
    window.addEventListener("resize", this.closeDropMenu)
    document.addEventListener("click", this.checkClickAreaOutOfDropMenu)
  },
  unmounted() {
    window.removeEventListener("resize", this.closeDropMenu)
    document.removeEventListener("click", this.checkClickAreaOutOfDropMenu)
  },
  computed: {
    ...mapGetters(["getGenders", "getTypes", "getDropMenuIsActive"]),
  },
  methods: {
    ...mapActions(["changeDropMenuIsActive", "toggleDropMenuIsActive"]),
    checkClickAreaOutOfDropMenu(e) {
      const tempArr = e.target.classList
      if (
        !(
          tempArr.contains("dropmenu__button") ||
          tempArr.contains("dropdown__info")
        )
      ) {
        this.changeDropMenuIsActive(false)
      }
    },
    closeDropMenu() {
      this.changeDropMenuIsActive(false)
    },
  },
  components: { DropMenu },
}
</script>

<style lang="scss" scoped>
.dropmenu {
  &__button {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 4px;
    position: relative;
    font-size: 16px;
    // font-weight: 400;
    font-family: "satoshiregular";
    opacity: 1;
    transition: opacity 0.3s ease-in;
    @media (hover: hover) {
      &:hover {
        opacity: 0.8;
      }
      &:hover .arrow-down path {
        fill: #555;
      }
      &:hover .arrow-right path {
        fill: none;
        stroke: #555;
      }
    }
    @media (hover: none) {
      &:active {
        opacity: 0.8;
      }
      &:active .arrow-down path {
        fill: #555;
      }
      &:active .arrow-right path {
        fill: none;
        stroke: #555;
      }
    }
  }
  &__window {
    position: absolute;
    top: 36px;
    left: 0px;
  }
  &__arrow-right {
    display: none;
  }

  &__arrow-down {
  }
}

.active {
  visibility: visible;
}

@media (max-width: 1024px) {
  .dropmenu {
    &__button {
      // font-weight: 700;
      font-family: "satoshibold";
      line-height: normal;
      text-transform: uppercase;
      display: flex;
      justify-content: space-between;
    }
    &__arrow-right {
      display: flex;
    }

    &__arrow-down {
      display: none;
    }
    &__window {
      position: static;
    }
  }
  .active {
    display: flex;
  }

  .rotate {
    transform: rotate(90deg);
  }
}
</style>
