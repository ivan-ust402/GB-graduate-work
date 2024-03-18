<template>
  <div class="rating">
    <StarsComponent class="rating__stars" :grade="grade" />
    <p class="rating__text">
      <span class="rating__grade">{{ grade }}</span
      ><span class="rating__grade-total">5</span>
    </p>
  </div>
</template>

<script>
import StarsComponent from "@/components/StarsComponent.vue"

export default {
  props: {
    grade: {
      type: Number,
      default: () => 5.0,
    },
  },
  components: {
    StarsComponent,
  },
}
</script>

<style lang="scss" scoped>
.rating {
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 13px;
  height: 19px;
  &__text {
    display: flex;
    align-items: flex-end;
    color: rgba(0, 0, 0, 0.6);
    font-size: 14px;
    height: 19px;
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
    gap: 10px;
    height: 14px;
    &__text {
      height: 14px;
      font-size: 11px;
    }
    &__grade {
      font-size: 11px;
      &::after {
        content: "/";
      }
    }
  }
}

@media (max-width: 768px) {
  .rating {
    gap: 11px;
    height: 16px;
    &__text {
      height: 16px;
      font-size: 12px;
      align-items: flex-end;
    }
    &__grade {
      font-size: 12px;
      &::after {
        content: "/";
      }
    }
  }
}
</style>
