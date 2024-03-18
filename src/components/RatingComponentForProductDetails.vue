<template>
  <div class="rating">
    <StarsComponentForDetailsPage class="rating__stars" :grade="grade" />
    <p class="rating__text">
      <span class="rating__grade">{{ grade }}</span
      ><span class="rating__grade-total">5</span>
    </p>
  </div>
</template>

<script>
import StarsComponentForDetailsPage from "./StarsComponentForDetailsPage.vue";

export default {
  props: {
    grade: {
      type: Number,
      default: () => 5.0,
    },
  },
  components: {
    StarsComponentForDetailsPage,
  },
}
</script>

<style lang="scss" scoped>
.rating {
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 16px;
  height: 25px;
  &__text {
    display: flex;
    align-items: flex-end;
    color: rgba(0, 0, 0, 0.6);
    font-size: 16px;
    height: 25px;
  }
  &__grade {
    color: var(--Black, #121212);
    &::after {
      content: "/";
    }
  }
  &__grade-total {
    color: var(--Black, #121212);
    color: rgba(0, 0, 0, 0.6);
  }
}

@media (max-width: 1239px) {
  .rating {
    height: 19px;
    &__text {
      height: 19px;
      font-size: 14px;
    }
    &__grade {
      font-size: 14px;
      &::after {
        content: "/";
      }
    }
  }
}

@media (max-width: 768px) {
}
</style>
