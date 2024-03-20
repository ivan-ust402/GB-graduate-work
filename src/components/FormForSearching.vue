<template>
  <form class="search" @keyup.enter.prevent="() => console.log('Enter keyup from search form')" @click.prevent="inputFocus">
    <label for="search" class="search__label"
      ><img src="@/assets/img/header/loupe-icon.svg" alt=""
    /></label>
    <input
      ref="searchInput"
      type="text"
      class="search__input"
      id="search"
      placeholder="Search for products..."
    />
  </form>
</template>

<script>
export default {
  methods: {
    inputFocus() {
      this.$refs.searchInput.focus()
    }
  },
}
</script>

<style lang="scss" scoped>
.search {
  box-sizing: border-box;
  display: flex;
  padding: 12px 16px;
  align-items: center;
  width: 100%;
  gap: 12px;
  flex: 1 0 0;
  border-radius: 62px;
  background: #f0eeed;
  cursor: pointer;
  &__label {
    opacity: 0.4;
    transition: all 0.3s ease-in;
    width: 24px;
    height: 24px;
    cursor: pointer;
    &:hover {
      opacity: 0.8;
    }
  }
  &__input {
    cursor: pointer;
    background: #f0eeed;
    color: #222;
    border: none;
    outline: none;
    font-size: 16px;
    font-style: normal;
    font-family: "satoshiregular";
    // font-weight: 400;
    line-height: normal;
    width: 100%;
    &::placeholder {
      opacity: 0.4;
    }
    &:focus {
      cursor: text;
    }
  }
}
</style>
