<template>
  <AppHeader/>
  <nav>
    <router-link to="/">Home</router-link> | 
    <router-link to="/login">Login</router-link> |
    <router-link to="/register">Registration</router-link> |
    <router-link to="/product-details/0">Product Details</router-link> |
    <router-link to="/catalog/0">Catalog</router-link> |
    <router-link to="/cart">Cart</router-link> |
    <router-link to="/notfound">404</router-link>&nbsp;|
  </nav>
  <router-view />
  <AppFooter />
</template>

<script>
import AppHeader from "@/blocks/AppHeader";
import AppFooter from "@/blocks/AppFooter";

export default {
  name: "App",
  components: {
    AppHeader,
    AppFooter,
  },
}
</script>

<style lang="scss">
#app {
  margin: 0;
  padding: 0;
  scroll-behavior: smooth;

  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #121212;
}

.center {
  padding-left: calc(50% - 620px);
  padding-right: calc(50% - 620px);
}

nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
