<template>
  <div class="burgermenu">
    <div class="burgermenu__icon" @click="toggleBurgerMenuIsActive()">
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
    </div>
    <div class="burgermenu__wrapper" :class="{ active: getBurgerMenuIsActive }">
      <AppHeaderNavigation class="burgermenu__navigation" />
      <a href="#" class="control burgermenu__user">
        <img src="@/assets\img\header\user-icon.svg" alt="personal area" />
        DOE SMITH
      </a>
      <a href="#" class="logout-btn burgermenu__logout-btn">Log out</a>
      <div v-if="getBurgerMenuIsActive" class="burgermenu__overlay-for-wrapper"></div>
    </div>
    <div v-if="getBurgerMenuIsActive" class="burgermenu__overlay"></div>
  </div>
</template>

<script>
import AppHeaderNavigation from "@/blocks/AppHeaderNavigation.vue"
import { mapActions, mapGetters } from "vuex"

export default {
  components: {
    AppHeaderNavigation,
  },
  mounted() {
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
      const tempArray = e.target.classList
      if (
        !(
          tempArray.contains("burgermenu__item") ||
          tempArray.contains("burgermenu__icon") ||
          tempArray.contains("dropmenu__button") ||
          tempArray.contains("dropdown__info") ||
          tempArray.contains("burgermenu__wrapper") ||
          tempArray.contains("nav") ||
          tempArray.contains("dropmenu__window") ||
          tempArray.contains("subdropdown")
        )
      ) {
        this.changeBurgerMenuIsActive(false)
      }
    },
    closeBurgerMenu() {
      this.changeBurgerMenuIsActive(false)
    },
  },
}
</script>

<style lang="scss" scoped>
.burgermenu {
  box-sizing: border-box;
  display: none;
  &__icon {
    display: flex;
    align-items: center;
  }
  &__wrapper {
    visibility: hidden;
  }
  &__user {
    font-weight: 700;
    line-height: normal;
    text-transform: uppercase;
  }
}

.logout-btn {
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  color: #222;
}
.active {
  visibility: visible;
  background: red;
}

@media (max-width: 1024px) {
  .burgermenu {
    display: block;
    position: relative;
    &__wrapper {
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
    &__icon {
      cursor: pointer;
      transition: opacity 0.3s ease-in;
      &:hover {
        opacity: 0.5;
      }
    }
    &__overlay-for-wrapper{
      position: absolute;
      display: flex;
      top: 0;
      left: -200px;
      width: 100%;
      height: 100%;
      z-index: -1;
      background: #F0EEED;
    }
    &__overlay {
      position: fixed;
      display: flex;
      left: -100px;
      top: 0;
      width: 200%;
      height: 100%;
      justify-content: center;
      align-items: center;
      background: rgba(18, 18, 18, 0.5);
      z-index: -1000;
    }
  }
}
@media (max-width: 768px) {
  .burgermenu {
    display: block;
    &__icon {
      height: 24px;
    }
    &__wrapper {
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
