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
  gap: 5px;
  height: 17px;
  &__item {
    height: 17px;
  }
}

@media (max-width: 1024px) {
  .stars {
    gap: 4px;
    height: 14px;
    &__item {
      height: 14px;
      & img {
        height: 14px;
      }
    }
  } 
}

@media (max-width: 768px) {
  .stars {
    gap: 5px;
    height: 16px;
    &__item {
      height: 16px;
      & img {
        height: 16px;
      }
    }
  }  
}
</style>
