<template>
  <section class="notfound center">
    <div class="notfound__description">
      <h1 class="notfound__title">404 NOT FOUND</h1>
      <p class="notfound__text">
        Your visited page not found. You may go home page.
      </p>
    </div>
    <router-link to="/" class="notfound__button">
      Back to main page
    </router-link>
  </section>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.notfound {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 48px;
  padding-top: 112px;
  padding-bottom: 80px;
  &__description {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 40px;
  }
  &__title {
    text-align: center;
  }
  &__text {
    color: #222;
    // font-family: Satoshi;
    font-size: 16px;
    font-style: normal;
    // font-weight: 400;
    line-height: normal;
  }
  &__button {
    box-sizing: border-box;
    display: flex;
    width: 400px;
    height: 52px;
    padding: 16px 54px;
    justify-content: center;
    align-items: center;
    gap: 12px;
    flex-shrink: 0;
    border-radius: 62px;
    background: #121212;
    color: #fff;
    /* Desktop/Text/Paragraphs/Medium bold */
    // font-family: Satoshi;
    font-size: 16px;
    font-style: normal;
    // font-weight: 500;
    line-height: normal;
    transition: all .3s ease-in;
    &:hover {
      opacity: 0.8;
    }
  }
}
@media (max-width: 1239px) {
  .notfound {
  padding-top: 80px;
  padding-bottom: 60px;
  &__description {
    gap: 24px;
  }
  &__title {
    font-size: 36px;
  }
  &__text {
    font-size: 14px;
  }
  &__button {
    width: 100%;
  }
}
}

@media (max-width: 768px) {

}
</style>
