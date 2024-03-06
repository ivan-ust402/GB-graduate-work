<template>
  <div class="header center" id="header">
    <div class="header__left">
      <AppHeaderBurgerMenu class="header__burgermenu" />
      <router-link class="logo header__logo" to="/">
        <img src="@/assets/img/common/logo-icon.svg" alt="logo" />
      </router-link>
    </div>

    <AppHeaderNavigation class="header__navigation" />

    <FormForSearching class="header__search" />

    <div class="header__right controls">
      <AppHeaderControls class="header__controls" />
    </div>
  </div>
</template>

<script>
import AppHeaderNavigation from "@/blocks/AppHeaderNavigation.vue"
import AppHeaderBurgerMenu from "@/blocks/AppHeaderBurgerMenu.vue"
import FormForSearching from "@/components/FormForSearching.vue"
import AppHeaderControls from "@/blocks/AppHeaderControls.vue"

export default {
  components: {
    AppHeaderNavigation,
    AppHeaderBurgerMenu,
    FormForSearching,
    AppHeaderControls,
  },
}
</script>

<style lang="scss" scoped>
.header {
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  padding-top: 32px;
  padding-bottom: 32px;
  justify-content: center;
  gap: 40px;
  align-items: center;
  color: #121212;
  position: relative;
  background: white;
  border-bottom: 1px solid #b3b3b3 ;
  &__left {
    display: flex;
    flex-direction: row;
    gap: 32px;
    align-items: center;
  }
  &__logo {
    box-sizing: border-box;
    display: flex;
  }
}

@media (max-width: 1024px) {
  .header {
    &__navigation {
      display: none;
    }
  }
}

@media (max-width: 768px) {
  .header {
    justify-content: space-between;
    align-items: center;
    padding-top: 24px;
    padding-bottom: 24px;
    &__logo img {
      height: 16px;
    }
    &__search {
      display: none;
    }
    &__right {
      box-sizing: border-box;
      height: 24px;
      gap: 24px;
    }
    &__left {
      box-sizing: border-box;
      height: 24px;
      gap: 24px;
    }
  }
}
</style>
