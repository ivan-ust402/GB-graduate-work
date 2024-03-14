<template>
  <div class="rating">
    <StarsComponent class="rating__stars" :grade="grade" />
    <div class="rating__block">
      <p class="rating__text">
        <span class="rating__grade">{{ grade }}</span
        >5
      </p>
    </div>
  </div>
</template>

<script>
import StarsComponent from '@/components/StarsComponent.vue';

export default {
  props: {
    grade: {
      type: Number,
      default: () => 5.0,
    }
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
  gap: 13px;
  height: 17px;
  &__text {
    color: rgba(0, 0, 0, 0.6);
    font-size: 14px;
    font-style: normal;
    // font-weight: 400;
    // font-family: "";
    line-height: normal;
  }
  &__grade {
    color: var(--Black, #121212);
    &::after {
      content: "/";
    }
  }
}

@media (max-width: 1239px) {
  .rating {
    gap: 10px;
    height: 14px;
    &__text {
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
    &__block {
      align-self: center;
    }
    &__text {
      font-size: 12px;
      line-height: 22px;
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
