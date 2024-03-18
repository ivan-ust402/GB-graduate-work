<template>
  <div class="stars">
    <div class="stars__item" v-for="item in Math.floor(grade)">
      <img
        src="@/assets/img/common/full-star-icon.svg"
        alt="star"
        class="stars__fullstar"
      />
    </div>
    <div class="stars__item" v-if="grade % 1">
      <img
        src="@/assets/img/common/half-star-icon.svg"
        alt="half star"
        class="stars__halfstar"
      />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    grade: {
      type: Number,
      default: () => 5.0,
    }
  }
}
</script>

<style lang="scss" scoped>
.stars {
  display: flex;
  flex-direction: row;
  gap: 7px;
  height: 25px;
  &__item {
    height: 25px;
    & img {
      height: 25px;
    }
  }
}

@media (max-width: 1239px) {
  .stars {
    gap: 5px;
    height: 19px;
    &__item {
      height: 19px;
      & img {
        height: 19px;
      }
    }
  } 
}

@media (max-width: 768px) {
}
</style>
