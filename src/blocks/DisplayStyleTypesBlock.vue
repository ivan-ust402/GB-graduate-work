<template>
  <div class="types center">
    <div class="types__wrapper">
      <h2 class="types__title">
        {{ title.toUpperCase() }}
      </h2>
      <div class="types__cards">
        <div class="types__card card">
          <router-link to="/catalog/0">
            <h4 class="card__title">Casual</h4>
            <img
              class="card__image"
              src="@/assets/img/homepage/casual-card-compressed.jpg"
              alt="casual"
            />
            <div class="card__hover"></div>
          </router-link>
        </div>
        <div class="types__card card">
          <router-link to="/catalog/0">
            <h4 class="card__title">Formal</h4>
            <img
              class="card__image"
              src="@/assets/img/homepage/formal-card-compressed.jpg"
              alt="formal"
            />
            <div class="card__hover"></div>
          </router-link>
        </div>
        <div class="types__card card">
          <router-link to="/catalog/0"></router-link>
          <h4 class="card__title">Party</h4>
          <img
            class="card__image"
            src="@/assets/img/homepage/party-card-compressed.jpg"
            alt="party"
          />
          <div class="card__hover"></div>
        </div>

        <div class="types__card card">
          <router-link to="/catalog/0">
            <h4 class="card__title">Party</h4>
            <img
              class="card__image"
              src="@/assets/img/homepage/gym-card-compressed.jpg"
              alt="casual"
            />
            <div class="card__hover"></div>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: () => "Loremka",
    },
  },
}
</script>

<style lang="scss" scoped>
.types {
  display: flex;
  justify-content: center;
  &__wrapper {
    box-sizing: border-box;
    background-color: #f0f0f0;
    border-radius: 40px;
    padding-top: 68px;
    padding-bottom: 76px;
    padding-left: 64px;
    padding-right: 64px;
    display: flex;
    flex-direction: column;
    gap: 61px;
    align-items: center;
  }
  &__cards {
    display: flex;
    flex-direction: row;
    gap: 20px;
    flex-wrap: wrap;
    width: 1111px;
  }
}
.card {
  width: 100%;
  max-width: 684px;
  height: 289px;
  overflow: hidden;
  position: relative;
  z-index: 2;
  border-radius: 20px;
  display: flex;
  background-color: #fff;
  justify-content: flex-end;
  cursor: pointer;
  transition: all 0.3s ease-in;

  @media (hover: hover) {
    &:hover .card__hover {
      background-color: rgba(34, 34, 34, 0.2);
    }
  }
  &:first-child {
    width: 407px;
  }
  &:last-child {
    width: 407px;
    justify-content: flex-end;
  }
  &__hover {
    position: absolute;
    background-color: rgba(34, 34, 34, 0);
    top: 0;
    left: 0;
    transition: all 0.3s ease-in;
    position: absolute;
    width: 100%;
    height: 100%;
    border-radius: 20px;
  }
  &__title {
    position: absolute;
    top: 25px;
    left: 36px;
  }
  &__image {
    width: 100%;
    object-fit: cover;
  }
}
</style>
