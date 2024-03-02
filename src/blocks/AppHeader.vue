<template>
  <div class="header center">
    <!-- <div class="header center" v-on:mouseleave="isActive = false"> -->
    <router-link to="/"
      ><img
        src="@/assets/img/common/logo-icon.svg"
        alt="logo"
        class="logo header__logo"
    /></router-link>
    <ul class="nav header_nav">
      <li class="nav__item">
        <a
          href="#"
          class="nav__link nav__link_drop-button click"
          v-on:click="isActive = !isActive"
        >
          Shop
          <svg
            class="click"
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
        <drop-menu
          class="nav__dropdown"
          :class="{ active: isActive }"
          :genders="getGenders"
        />
      </li>
      <li class="nav__item">
        <a href="#top-sellings" class="nav__link">Top Sellings</a>
      </li>
      <li class="nav__item">
        <a href="#new-arrivals" class="nav__link">New Arrivals</a>
      </li>
      <li class="nav__item">
        <a href="#brands" class="nav__link">Brands</a>
      </li>
    </ul>
    <form class="header__search search">
      <label for="search" class="search__label"
        ><img src="@/assets/img/header/loupe-icon.svg" alt=""
      /></label>
      <input
        type="text"
        class="search__input"
        id="search"
        placeholder="Search for products..."
      />
    </form>

    <div class="header__personal controls">
      <router-link to="/cart" class="control"
        ><img src="@/assets\img\header\cart-icon.svg" alt="cart"
      /></router-link>
      <a href="#" class="control"
        ><img src="@/assets\img\header\user-icon.svg" alt="account"
      /></a>
    </div>

    <ul class="burger"></ul>
  </div>
</template>

<script>
import DropMenu from "@/components/DropMenu.vue"
import { mapGetters } from "vuex"

export default {
  data() {
    return {
      isActive: false,
    }
  },
  mounted() {
    document.addEventListener("click", (e) => {
      if (
        !e.target.classList.contains("click") 
      ) {
        this.isActive = false
      }
    })
  },
  computed: {
    ...mapGetters(["getGenders", "getTypes"]),
  },
  components: { DropMenu },
}
</script>

<style lang="scss" scoped>
.header {
  display: flex;
  flex-direction: row;
  gap: 40px;
  padding-top: 32px;
  padding-bottom: 32px;
  justify-content: center;
  align-items: center;
  color: #121212;
}
.nav {
  position: relative;
  display: flex;
  flex-direction: row;
  gap: 24px;
  list-style-type: none;
  white-space: nowrap;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  &__link {
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    opacity: 1;
    transition: color 0.3s ease-in;
    &_drop-button {
      display: flex;
      flex-direction: row;
      align-items: center;
      gap: 4px;
      position: relative;
      &:hover path {
        fill: #555;
      }
    }
    &:hover {
      opacity: 0.8;
    }
  }
  &__dropdown {
    position: absolute;
    top: 32px;
    left: 0px;
  }
}

.search {
  display: flex;
  padding: 12px 16px;
  align-items: center;
  width: 100%;
  gap: 12px;
  flex: 1 0 0;
  border-radius: 62px;
  background: #f0eeed;
  &__label {
    opacity: 0.4;
    transition: all 0.3s ease-in;
    &:hover {
      opacity: 0.8;
    }
  }
  &__input {
    background: #f0eeed;
    color: #222;
    border: none;
    outline: none;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    &::placeholder {
      opacity: 0.4;
    }
  }
}

.controls {
  display: flex;
  flex-direction: row;
  gap: 14px;
}

.active {
  visibility: visible;
}
</style>
