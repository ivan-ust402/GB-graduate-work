<template>
  <section class="hero">
    <div class="hero__top  center">
      <div class="hero__description">
        <div class="hero__redirect-block">
          <div class="hero__text-block">
            <h1 class="hero__title">FIND CLOTHES THAT MATCHES YOUR STYLE</h1>
            <p class="hero__text">
              Browse through our diverse range of meticulously crafted garments,
              designed to bring out your individuality and cater to your sense
              of style.
            </p>
          </div>
          
          <router-link to="/catalog">
            <ButtonSelectionColor text="Shop Now"/>
          </router-link>
        </div>
        <div class="hero__achievements achievements">
          <div class="achievements__item">
            <h4 class="achievements__title">200+</h4>
            <p class="achievements__text">International Brand</p>
          </div>
          <div class="achievements__item">
            <h4 class="achievements__title">2,000+</h4>
            <p class="achievements__text">High-Quality Products</p>
          </div>
          <div class="achievements__item">
            <h4 class="achievements__title">30,000+</h4>
            <p class="achievements__text">Happy Customers</p>
          </div>
        </div>
      </div>
      <div class="hero__image-block">
        <img
          src="@/assets/img/common/Main-image-compressor.jpg"
          alt="main image"
          class="hero__image"
        />
      </div>
    </div>
    <div 
      class="hero__bottom brands center"
      id="brands"  
    >
      <div class="brands__item">
        <img
          src="@/assets/img/homepage/versace-logo.svg"
          alt="versace"
          class="brands__image"
        />
      </div>
      <div class="brands__item">
        <img
          src="@/assets/img/homepage/zara-logo.svg"
          alt="zara"
          class="brands__image"
        />
      </div>
      <div class="brands__item">
        <img
          src="@/assets/img/homepage/gucci-logo.svg"
          alt="gucci"
          class="brands__image"
        />
      </div>
      <div class="brands__item">
        <img
          src="@/assets/img/homepage/prada-logo.svg"
          alt="prada"
          class="brands__image"
        />
      </div>
      <div class="brands__item">
        <img
          src="@/assets/img/homepage/calvin-logo.svg"
          alt="calvin klein"
          class="brands__image"
        />
      </div>
    </div>
  </section>
</template>

<script>
import ButtonSelectionColor from '@/components/ButtonSelectionColor.vue';

export default {
  components: {
    ButtonSelectionColor
  }
}
</script>

<style lang="scss" scoped>
.hero {
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  background: #f2f0f1;
  &__top {
    display: flex;
    flex-direction: row;
    gap: 71px;
  }
  &__description {
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    gap: 48px;
    // padding-top: 103px;
    // padding-bottom: 103px;
    align-self: center;
  }
  &__redirect-block {
    display: flex;
    flex-direction: column;
    gap: 29px;
  }
  &__text-block {
    display: flex;
    flex-direction: column;
    gap: 24px;
    color: #222;
    // font-family: Satoshi;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    width: 577px;
  }
  &__title {
    box-sizing: border-box;
    color: #121212;
    /* Desktop/Headings/H1 */
    font-family: "Integral CF";
    font-size: 64px;
    font-style: normal;
    font-weight: 400;
    line-height: 64px; /* 100% */
  }
  &__text {
    color: #222;
    /* Desktop/Text/Paragraphs/Regular */
    font-family: Satoshi;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }

  &__image-block {
    box-sizing: border-box;
    height: 663px;
  }

  &__image {
    box-sizing: border-box;
    width: 690px;
    height: 663px;
    flex-shrink: 0;
  }
}

.achievements {
  display: flex;
  flex-direction: row;
  gap: 32px;
  &__item {
    display: flex;
    flex-direction: column;
    gap: 16px;
    // &::after {
    //   content: "|";
    // }
    // &:last-child::after {
    //   content: "";
    // }
  }
  &__title {
    color: #121212;
    font-family: Satoshi;
    font-size: 36px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
  }
  &__text {
    color: #222;
    font-family: Satoshi;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }
}

.brands {
  display: flex;
  flex-direction: row;
  background: #121212;
  gap: 106px;
  padding-top: 43px;
  padding-bottom: 43px;
}
</style>
