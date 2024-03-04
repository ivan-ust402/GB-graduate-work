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
      <p>{{ getBurgerMenuIsActive }}</p>
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
  mounted() {
    document.addEventListener("click", (e) => {
      const tempArray = e.target.classList
      if (
        !(
          tempArray.contains("burgermenu__item") ||
          tempArray.contains("burgermenu__icon") ||
          tempArray.contains("nav__link_drop-button") ||
          tempArray.contains("dropdown__info")
        )
      ) {
        this.changeBurgerMenuIsActive(false)
      }
    })
  },
  computed: {
    ...mapGetters(["getBurgerMenuIsActive"]),
  },
  methods: {
    ...mapActions(["toggleBurgerMenuIsActive", "changeBurgerMenuIsActive"]),
  },
}
</script>

<style lang="scss" scoped>
.burgermenu {
  display: none;
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
}

@media (max-width: 1024px) {
  .burgermenu {
    display: block;
    &__wrapper {
      position: absolute;
      top: 112px;
      left: 0;
      z-index: 100;
      background: #f0eeed;
      padding: 32px;
      width: 552px;
      height: 100vh;
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
      transition: opacity .3s ease-in;
      &:hover {
        opacity: 0.5;
      }
    }
  }
}
@media (max-width: 768px) {
  .burgermenu {
    display: block;
    &__wrapper {
      top: 72px;
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
