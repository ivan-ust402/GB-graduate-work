<template>
  <nav class="navigation">
    <ul class="nav">
      <li class="nav__item">
        <AppHeaderDropMenu />
      </li>
      <li class="nav__item">
        <router-link
          @click="clickByNavLink"
          class="nav__link"
          :to="{ path: '/', hash: '#top-sellings' }"
          >Top Sellings</router-link
        >
      </li>
      <li class="nav__item">
        <router-link
          @click="clickByNavLink"
          class="nav__link"
          :to="{ path: '/', hash: '#new-arrivals' }"
          >New Arrivals</router-link
        >
      </li>
      <li class="nav__item">
        <router-link 
          class="nav__link" 
          :to="{ path: '/', hash: '#brands' }"
          @click="clickByNavLink"
        >Brands</router-link
        >
      </li>
    </ul>
  </nav>
</template>

<script>
import AppHeaderDropMenu from "@/blocks/AppHeaderDropMenu.vue"
export default {
  components: {
    AppHeaderDropMenu,
  },
  emits: ["clickByNavLink"],
  methods: {
    clickByNavLink() {
      this.$emit("clickByNavLink", false)
    }
  }
}
</script>

<style lang="scss" scoped>
.nav {
  position: relative;
  display: flex;
  flex-direction: row;
  gap: 24px;
  list-style-type: none;
  white-space: nowrap;
  font-size: 16px;
  font-style: normal;
  // font-weight: 400;
  font-family: "satoshiregular";
  line-height: normal;
  &__link {
    font-size: 16px;
    font-style: normal;
    font-family: "satoshiregular";
    // font-weight: 400;
    line-height: normal;
    opacity: 1;
    transition: opacity 0.3s ease-in;
    &:hover {
      opacity: 0.8;
    }
  }
}

@media (max-width: 1239px) {
  .nav {
    flex-direction: column;
    gap: 32px;
    &__link {
      // font-weight: 700;
      font-family: "satoshibold";
      line-height: normal;
      text-transform: uppercase;
      display: flex;
      justify-content: space-between;
    }
  }
}

@media (max-width: 768px) {
}
</style>
