<template>
  <div class="controls">
    <a class="search-control controls__control">
      <svg
        width="23"
        height="22"
        viewBox="0 0 23 22"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M17.8076 17.5L21.3076 21M20.3076 10.5C20.3076 5.25329 16.0543 1 10.8076 1C5.56091 1 1.30762 5.25329 1.30762 10.5C1.30762 15.7467 5.56091 20 10.8076 20C16.0543 20 20.3076 15.7467 20.3076 10.5Z"
          stroke="#222222"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    </a>
    <router-link to="/cart" class="controls__control">
      <img src="@/assets\img\header\cart-icon.svg" alt="cart" />
      <NotificationAmount class="controls__notification"/>
    </router-link>
    <a href="#" class="controls__control user-control">
      <img src="@/assets\img\header\user-icon.svg" alt="personal area" />
    </a>
  </div>
</template>

<script>
import NotificationAmount from '@/components/NotificationAmount.vue';

export default {
  components: {
    NotificationAmount
  }
}
</script>

<style lang="scss" scoped>
.controls {
  display: flex;
  flex-direction: row;
  gap: 14px;
  &__control {
    display: flex;
    flex-direction: row;
    transition: opacity 0.3s ease-in;
    &:hover {
      opacity: 0.5;
    }
  }
  &__notification {
    margin-left: -2px;
  }
}
.search-control {
  display: none;
  width: 24px;
  height: 24px;
}

@media (max-width: 1024px) {
  .user-control {
    display: none;
  }
}

@media (max-width: 768px) {
  .search-control {
    display: block;
  }
}
</style>
