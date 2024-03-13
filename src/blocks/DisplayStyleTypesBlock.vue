<template>
  <div class="types center">
    <div class="types__wrapper">
      <h2 class="types__title">
        {{ title.toUpperCase() }}
      </h2>
      <div class="types__cards">
        <div class="types__card card">
          <h4 class="card__title">Casual</h4>
          <img
            class="card__image"
            src="@/assets/img/homepage/casual-card-compressed.jpg"
            alt="casual"
          />
          <routerLink to="/catalog/0" class="card__hover"></routerLink>
        </div>
        <div class="types__card card">
          <h4 class="card__title">Formal</h4>
          <img
            class="card__image"
            src="@/assets/img/homepage/formal-card-compressed.jpg"
            alt="formal"
          />
          <router-link to="/catalog/0" class="card__hover"></router-link>
        </div>
        <div class="types__card card">
          <h4 class="card__title">Party</h4>
          <img
            class="card__image"
            src="@/assets/img/homepage/party-card-compressed.jpg"
            alt="party"
          />
          <router-link to="/catalog/0" class="card__hover"></router-link>
        </div>

        <div class="types__card card">
          <h4 class="card__title">Gym</h4>
          <img
            class="card__image"
            src="@/assets/img/homepage/gym-card-compressed.jpg"
            alt="casual"
          />
          <router-link to="/catalog/0" class="card__hover"></router-link>
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
  padding-top: 16px;
  padding-bottom: 16px;
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
  z-index: 0;
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
  @media (hover: none) {
    &:active .card__hover {
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
    color: #121212;
    // font-family: "Satoshi";
    font-size: 36px;
    // font-weight: 700;
    font-family: "satoshibold";
  }
  &__image {
    width: 100%;
    object-fit: cover;
  }
}

@media (max-width: 1024px) {
  .types {
    padding-top: 20px;
    padding-bottom: 21px;
    &__wrapper {
      border-radius: 20px;
      padding-top: 20px;
      padding-bottom: 40px;
      padding-left: 24px;
      padding-right: 24px;
      display: flex;
      flex-direction: column;
      gap: 32px;
    }
    &__title {
      font-size: 32px;
    }
    &__cards {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      column-gap: 17px;
      row-gap: 24px;
      width: 657px;
    }
  }
  .card {
    width: 100%;
    max-width: 390px;
    height: 190px;
    &:first-child {
      width: 100%;
    }
    &:last-child {
      width: 100%;
    }
    &__title {
      top: 16px;
      left: 24px;
      font-size: 24px;
    }
    &__image {
      width: 100%;
      object-fit: cover;
    }
  }
}

@media (max-width: 768px) {
  .types {
    padding-top: 30px;
    padding-bottom: 13px;
    &__wrapper {
      padding-top: 40px;
      padding-bottom: 27px;
      gap: 28px;
    }
    &__title {
      text-align: center;
    }
    &__cards {
      display: grid;
      grid-template-columns: repeat(1, 1fr);
      gap: 16px;
      width: 310px;
    }
  }
  .card {
    width: 100%;
    max-width: 310px;
    height: 190px;
    &:first-child {
      width: 100%;
    }
    &:last-child {
      width: 100%;
    }
  }
}
</style>
