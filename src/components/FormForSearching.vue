<template>
  <form class="search">
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
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
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
</style>
