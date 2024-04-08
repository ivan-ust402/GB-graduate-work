<template>
  <div>
    <div
      class="burger-overlay"
      :class="{ 'burger-overlay_active': getBurgerMenuIsActive }"
    ></div>
    <div 
      class="filter-overlay"
      :class="{ 'filter-overlay_active': getFilterMenuStatus }"
    ></div>
    <AppHeader class="test" />
    <router-view />
    <ButtonTopOfPage :class="{ hideButtonToUp: getBurgerMenuIsActive }" />
    <AppFooter />
  </div>
</template>
<script>
import AppHeader from "@/blocks/AppHeader"
import AppFooter from "@/blocks/AppFooter"
import ButtonTopOfPage from "./components/ButtonTopOfPage.vue"
import { mapActions, mapGetters } from "vuex"

export default {
  name: "App",
  components: {
    AppHeader,
    AppFooter,
    ButtonTopOfPage,
  },
  computed: {
    ...mapGetters(["getBurgerMenuIsActive", "getFilterMenuStatus"]),
  },
  methods: {
    ...mapActions([
      "setTopSellingProductsArray",
      "setNewArrivalsProductsArray",
    ]),
  },
}
</script>

<style lang="scss">
@import url("@/assets/fonts/stylesheet.css");
// satoshibold - 700
// satoshimedium - 500
// satoshiregular - 400
// integral_cfbold - 700
// integral_cfmedium - 500
// integral_cfregular - 400
// gilroybold - 700
// gilroymedium - 500
// gilroyregular - 400


.filter-overlay {
  position: relative;
  &_active::before {
    content: "";
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    z-index: 101;
  }
}
.burger-overlay {
  position: relative;
  &_active::before {
    content: "";
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    z-index: 1;
  }
}
.hideButtonToUp {
  visibility: hidden;
}

* {
  margin: 0;
  padding: 0;
  scroll-behavior: smooth;
  // font-size: 14px;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
}

body {
  font-family: "satoshiregular", Arial, Helvetica, sans-serif;
}

h1,
h2,
h3,
h5 {
  font-family: "integral_cfregular", Arial, Helvetica, sans-serif;
  color: #121212;
}

h4,
h6 {
  font-family: "satoshiregular", Arial, Helvetica, sans-serif;
}

h1 {
  font-size: 64px;
}

h2 {
  font-size: 48px;
}

h3 {
  font-size: 40px;
}

h4 {
  font-size: 36px;
}

h5 {
  font-size: 32px;
  color: #fff;
}

h6 {
  font-size: 20px;
}

a,
button {
  font-family: "satoshimedium", Arial, Helvetica, sans-serif;
  text-decoration: none;
  color: #121212;
}

a:hover,
button:hover {
  cursor: pointer;
}

input {
  font-family: "satoshi regular", Arial, Helvetica, sans-serif;
  outline: none;
}

.center {
  padding-left: calc(50% - 620px);
  padding-right: calc(50% - 620px);
}

ul {
  list-style-type: none;
}

svg {
  pointer-events: none;
}

a svg {
  pointer-events: none;
  -webkit-tap-highlight-color: rgba(0,0,0,0); -webkit-tap-highlight-color: transparent;
}

// nav {
//   padding: 30px;

//   a {
//     font-weight: bold;
//     color: #2c3e50;

//     &.router-link-exact-active {
//       color: #42b983;
//     }
//   }
// }

@media (max-width: 1239px) {
  .center {
    padding-left: calc(50% - 352px);
    padding-right: calc(50% - 352px);
  }
}

@media (max-width: 768px) {
  .center {
    padding-left: calc(50% - 178px);
    padding-right: calc(50% - 178px);
  }
}
</style>
