<template>
  <div class="title-box">
    <h4 class="title-box__cards-title">
      <p class="title-box__test" v-for="value in titleValue">
        {{ value }}
      </p>
    </h4>
    <div class="title-box__cards-right-display">
      <p class="title-box__showing-cards">Showing 1-10 of 100 Products</p>
      <div class="title-box__sort">
        <p class="title-box__sort-label">Sort by:</p>
        <p class="title-box__sort-select">Most Popular</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    titleValue: {
      type: Object,
      default: () => {},
    },
  },
}
</script>

<style lang="scss" scoped>
.title-box {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  &__cards-title {
    display: flex;
    flex-direction: row;
    gap: 10px;
    color: #121212;
    font-family: "satoshibold";
    font-size: 32px;
    line-height: normal;
    text-transform: capitalize;
  }
  &__test {
    display: flex;
    flex-direction: row;
  }
  &__cards-right-display {
    display: flex;
    flex-direction: row;
    gap: 12px;
    align-items: center;
  }
  &__showing-cards {
    color: #222;
    font-family: "satoshiregular";
    font-size: 16px;
    line-height: normal;
  }
  &__sort {
    display: flex;
    flex-direction: row;
    gap: 10px;
    align-items: center;
  }
  &__sort-label {
    color: rgba(0, 0, 0, 0.6);
    font-family: "satoshiregular";
    font-size: 16px;
    line-height: normal;
  }
  &__sort-select {
    color: var(--Black, #121212);
    font-family: "satoshimedium";
    font-size: 16px;
    line-height: normal;
  }
}

@media (max-width: 1239px) {
}
@media (max-width: 768px) {
}
</style>
