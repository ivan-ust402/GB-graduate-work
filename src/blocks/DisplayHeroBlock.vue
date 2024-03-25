<template>
  <section class="hero">
    <div class="hero__top center">
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

          <router-link
            :to="{
              name: 'CatalogPage',
              params: { page: 1 },
              query: { show: 'all' },
            }"
          >
            <ButtonSelectionColor text="Shop Now" />
          </router-link>
        </div>
        <div class="hero__achievements achievements">
          <div class="achievements__item">
            <div class="achievements__item-text">
              <h4 class="achievements__title">200+</h4>
              <p class="achievements__text">International Brand</p>
            </div>
          </div>
          <div class="achievements__item_border"></div>
          <div class="achievements__item">
            <div class="achievements__item-text">
              <h4 class="achievements__title">2,000+</h4>
              <p class="achievements__text">High-Quality Products</p>
            </div>
          </div>
          <div class="achievements__item_border item_border_last"></div>
          <div class="achievements__item">
            <div class="achievements__item-text">
              <h4 class="achievements__title">30,000+</h4>
              <p class="achievements__text">Happy Customers</p>
            </div>
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
    <div class="hero__bottom center" id="brands">
      <div class="brands">
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
    </div>
  </section>
</template>

<script>
import ButtonSelectionColor from "@/components/ButtonSelectionColor.vue"

export default {
  components: {
    ButtonSelectionColor,
  },
}
</script>

<style lang="scss" scoped>
.hero {
  margin-bottom: 8px;
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
    // font-weight: 400;
    line-height: normal;
    width: 577px;
  }
  &__title {
    box-sizing: border-box;
    color: #121212;
    width: 575px;
    /* Desktop/Headings/H1 */
    // font-family: "Integral CF";
    font-size: 64px;
    font-style: normal;
    // font-weight: 400;
    line-height: 64px; /* 100% */
  }
  &__text {
    color: #222;
    /* Desktop/Text/Paragraphs/Regular */
    // font-family: Satoshi;
    font-size: 16px;
    font-style: normal;
    // font-weight: 400;
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

  &__bottom {
    background-color: #121212;
  }
}

.achievements {
  display: flex;
  flex-direction: row;
  gap: 32px;
  &__item {
    box-sizing: border-box;
    display: flex;
    gap: 32px;
    &_border {
      border-left: 1px solid #e8e8e8;
    }
  }
  &__item-text {
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    gap: 16px;
  }
  &__title {
    font-family: "satoshibold";
    color: #121212;
    // font-family: Satoshi;
    font-size: 36px;
    font-style: normal;
    // font-weight: 700;
    line-height: normal;
  }
  &__text {
    color: #222;
    // font-family: Satoshi;
    text-wrap: nowrap;
    font-size: 16px;
    font-style: normal;
    // font-weight: 400;
    line-height: normal;
  }
}

.brands {
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  background: #121212;
  justify-content: space-between;
  padding-top: 43px;
  padding-bottom: 43px;
}

@media (max-width: 1239px) {
  .hero {
    &__top {
      padding-top: 60px;
      flex-direction: column;
      gap: 42px;
    }
    &__description {
      align-self: flex-start;
      gap: 32px;
      width: 100%;
    }
    &__redirect-block {
      display: flex;
      flex-direction: column;
      gap: 44px;
    }
    &__text-block {
      gap: 44px;
      width: 600px;
    }
    &__title {
      font-size: 36px;
      line-height: 34px; /* 100% */
    }
    &__text {
      font-size: 14px;
    }

    &__image-block {
      box-sizing: border-box;
      height: 448px;
      display: flex;
      justify-content: center;
    }

    &__image {
      box-sizing: border-box;
      width: auto;
      height: 448px;
      flex-shrink: 0;
    }
  }

  .achievements {
    gap: 0;
    justify-content: space-between;
    padding-left: 92px;
    padding-right: 92px;
    &__item {
      gap: 0px;
      padding-right: 0px;
      // width: 100%;
      // justify-content: space-between;
    }
    &__item-text {
      box-sizing: border-box;
      display: flex;
      flex-direction: column;
      gap: 0px;
    }
    &__title {
      font-size: 24px;
    }
    &__text {
      font-size: 12px;
      line-height: 22px;
      margin-top: -6px;
    }
  }

  .brands {
    gap: 0;
    padding-top: 34px;
    padding-top: 34px;
    padding-left: 0px;
    padding-right: 0px;
    justify-content: space-between;
    &__item {
      height: 23px;
    }
    &__image {
      height: 23px;
    }
  }
}

@media (max-width: 768px) {
  .hero {
    &__top {
      gap: 16px;
    }
    &__description {
      gap: 22px;
    }
    &__redirect-block {
      gap: 27px;
    }
    &__text-block {
      gap: 10px;
      width: 358px;
    }

    &__title {
      width: 358px;
    }

    &__image-block {
      box-sizing: border-box;
      height: auto;
      display: flex;
      justify-content: center;
      overflow: hidden;
    }

    &__image {
      box-sizing: border-box;
      width: 390px;
      height: auto;
      flex-shrink: 0;
    }
  }

  .achievements {
    justify-content: center;
    flex-wrap: wrap;
    padding-left: 0;
    padding-right: 0;
    column-gap: 27.5px;
    row-gap: 14px;
    &__item {
      gap: 0px;
      padding-right: 0px;
    }
    &__item-text {
      box-sizing: border-box;
      display: flex;
      flex-direction: column;
      gap: 0px;
    }
  }

  .item_border_last {
    display: none;
  }

  .brands {
    row-gap: 22px;
    column-gap: 27px;
    padding: 40px 16px;
    justify-content: center;
    flex-wrap: wrap;
    &__item {
      height: 23px;
    }
    &__image {
      height: 23px;
    }
  }
}
</style>
