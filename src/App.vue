<template>
  <AppHeader class="test"/>
  <nav class="center">
    <router-link to="/">Home</router-link> |
    <router-link to="/login">Login</router-link> |
    <router-link to="/register">Registration</router-link> |
    <router-link to="/product-details/0">Product Details</router-link> |
    <router-link to="/catalog/0">Catalog</router-link> |
    <router-link to="/cart">Cart</router-link> |
    <router-link to="/notfound">404</router-link>&nbsp;|
  </nav>
  <router-view class="main-wrapper" />
  <ButtonTopOfPage :class="{hideButtonToUp: getBurgerMenuIsActive}"/>
  <AppFooter />
</template>
<script>
import AppHeader from "@/blocks/AppHeader"
import AppFooter from "@/blocks/AppFooter"
import ButtonTopOfPage from "./components/ButtonTopOfPage.vue"
import { mapGetters } from "vuex";

export default {
  name: "App",
  components: {
    AppHeader,
    AppFooter,
    ButtonTopOfPage,
  },
  computed: {
    ...mapGetters(["getBurgerMenuIsActive"])
  }
}
</script>

<style lang="scss">

.hideButtonToUp {
  visibility: hidden;
}
* {
  margin: 0;
  padding: 0;
  scroll-behavior: smooth;
  color: #121212;
  font-size: 14px;
}
// .main-wrapper {
//   min-height: 50vh;
// }

body {
  font-family: "Satoshi", sans-serif;
}

h1,
h2,
h4 {
  font-family: "Integral CF", sans-serif;
  color: #121212;
}

h3,
h5,
h6 {
  font-family: "Satoshi", sans-serif;
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
  font-family: "Satoshi", sans-serif;
  text-decoration: none;
}

a:hover,
button:hover {
  cursor: pointer;
}

input {
  font-family: "Satoshi", sans-serif;
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

@media (max-width: 1024px) {
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
