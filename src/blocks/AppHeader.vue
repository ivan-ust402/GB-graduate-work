<template>
  <div class="header center">
    <router-link to="/"
      ><img
        src="@/assets/img/common/logo-icon.svg"
        alt="logo"
        class="logo header__logo"
    /></router-link>
    <ul class="nav header_nav">
      <li class="nav__item menu">Shop</li>
      <li class="nav__item">On Sale</li>
      <li class="nav__item">New Arrivals</li>
      <li class="nav__item">Brands</li>
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
  </div>
</template>

<script>
export default {}
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
}
.nav {
  display: flex;
  flex-direction: row;
  gap: 24px;
  list-style-type: none;
  white-space: nowrap;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
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
    border: none;
    outline: none;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    opacity: 0.4;
  }
}

.controls {
  display: flex;
  flex-direction: row;
  gap: 14px;
}
</style>
