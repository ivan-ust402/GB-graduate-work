<template>
  <div class="burgermenu">
    <a href="#" class="burgermenu__button" @click.prevent="toggleBurgerMenuIsActive()">
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M20 6L4 6"
          stroke="#121212"
          stroke-width="1.5"
          stroke-linecap="round"
        />
        <path
          d="M20 12L4 12"
          stroke="#121212"
          stroke-width="1.5"
          stroke-linecap="round"
        />
        <path
          d="M20 18H4"
          stroke="#121212"
          stroke-width="1.5"
          stroke-linecap="round"
        />
      </svg>
    </a>
    <div class="burgermenu__window" :class="{ active: getBurgerMenuIsActive }">
      <AppHeaderNavigation 
        class="burgermenu__navigation"
        @clickByNavLink="changeBurgerMenuIsActive" 
      />
      <a href="#" class="control burgermenu__user">
        <img src="@/assets\img\header\user-icon.svg" alt="personal area" />
        DOE SMITH
      </a>
      <a href="#" class="logout-btn burgermenu__logout-btn">Log out</a>
      <div class="burgermenu__window-overlay"></div>
    </div>
  </div>
</template>

<script>
import AppHeaderNavigation from "@/blocks/AppHeaderNavigation.vue"
import { mapActions, mapGetters } from "vuex"

export default {
  components: {
    AppHeaderNavigation,
  },
  data() {
    return {
      resizes: false,
    }
  },
  mounted() {
    this.resizes = window.innerWidth
    window.addEventListener("resize", this.closeBurgerMenu)
    document.addEventListener("click", this.checkClickAreaOutOfBurgerMenu)
  },
  unmounted() {
    window.removeEventListener("resize", this.closeBurgerMenu)
    document.removeEventListener("click", this.checkClickAreaOutOfBurgerMenu)
  },
  computed: {
    ...mapGetters(["getBurgerMenuIsActive"]),
  },
  methods: {
    ...mapActions(["toggleBurgerMenuIsActive", "changeBurgerMenuIsActive"]),
    checkClickAreaOutOfBurgerMenu(e) {
      const targetEl = e.target
      const burgerMenuEl = document.querySelector('.burgermenu')
      if (!burgerMenuEl.contains(targetEl)) {
        this.changeBurgerMenuIsActive(false)
      }
    },
    closeBurgerMenu() {
      const resizeWidth = window.innerWidth
      if (this.resizes == resizeWidth) { return; }
      this.resizes = resizeWidth
      this.changeBurgerMenuIsActive(false)
    },
  },
}
</script>

<style lang="scss" scoped>
.burgermenu {
  box-sizing: border-box;
  display: none;
  &__button {
    display: flex;
    align-items: center;
  }

  &__window {
    visibility: hidden;
  }

  &__user {
    // font-weight: 700;
    font-family: "satoshibold";
    line-height: normal;
    text-transform: uppercase;
  }
}

.logout-btn {
  font-size: 14px;
  font-style: normal;
  // font-weight: 400;
  font-family: "satoshiregular";
  line-height: normal;
  color: #222;
}
.active {
  visibility: visible;
}

@media (max-width: 1239px) {
  .burgermenu {
    display: flex;
    position: relative;
    &__window {
      position: absolute;
      top: 68px;
      left: -32px;
      background: #f0eeed;
      padding: 32px;
      width: 552px;
      min-height: 100vh;
      display: flex;
      flex-direction: column;
      gap: 32px;
      z-index: 2;
    }
    &__window-overlay {
      position: absolute;
      z-index: -1;
      display: flex;
      top: 0;
      left: -200px;
      width: 100%;
      height: 100%;
      background: #f0eeed;
    }
    &__navigation {
      box-sizing: border-box;
      border-bottom: 1px solid white;
      padding-bottom: 32px;
    }
    &__user {
      display: flex;
      gap: 10px;
      align-items: center;
    }
    &__button {
      cursor: pointer;
      transition: opacity 0.3s ease-in;
      @media (hover: hover) {
        &:hover {
          opacity: 0.5;
        }
      }
      @media (hover: none) {
        &:active {
          opacity: 0.5;
        }
      }
    }
  }
}
@media (max-width: 768px) {
  .burgermenu {
    display: block;
    &__button {
      height: 24px;
    }
    &__window {
      top: 48px;
      left: -24px;
      padding: 32px 24px 24px 24px;
      width: 329px;
      gap: 24px;
    }
    &__navigation {
      box-sizing: border-box;
      border-bottom: 1px solid white;
      padding-bottom: 32px;
    }
    &__user {
      display: flex;
      gap: 10px;
      align-items: center;
    }
  }
}
</style>
