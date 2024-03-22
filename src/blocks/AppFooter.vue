<template>
  <footer class="footer center">
    <div class="footer__box-1">
      <div class="footer__description">
        <router-link class="footer__logo" to="/">
          <img src="@/assets/img/common/logo-icon.svg" alt="logo" />
        </router-link>
        <p class="footer__text">
          We have clothes that suits your style and which you’re proud to wear.
          From women to men.
        </p>
      </div>
      <AppFooterSocialMedia class="footer__social-media" />
    </div>
    <div class="footer__box-2">
      <div class="footer__subscribe subscribe">
        <div class="subscribe__left">
          <h5 class="subscribe__title">
            STAY UPTO DATE ABOUT OUR LATEST OFFERS
          </h5>
        </div>
        <div class="subscribe__right">
          <form
            action="#"
            class="subscribe__form"
            @keyup.enter.prevent="
              () => console.log('Enter keyup from footer form')
            "
          >
            <label class="subscribe__label" for="subscribe_email_input">
              <svg
                width="22"
                height="16"
                viewBox="0 0 22 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M20 0.125H2C1.70163 0.125 1.41548 0.243526 1.2045 0.454505C0.993526 0.665483 0.875 0.951631 0.875 1.25V14C0.875 14.4973 1.07254 14.9742 1.42417 15.3258C1.77581 15.6775 2.25272 15.875 2.75 15.875H19.25C19.7473 15.875 20.2242 15.6775 20.5758 15.3258C20.9275 14.9742 21.125 14.4973 21.125 14V1.25C21.125 0.951631 21.0065 0.665483 20.7955 0.454505C20.5845 0.243526 20.2984 0.125 20 0.125ZM11 7.97375L4.89219 2.375H17.1078L11 7.97375ZM7.69906 8L3.125 12.1925V3.8075L7.69906 8ZM9.36406 9.52625L10.2397 10.3297C10.4472 10.52 10.7185 10.6255 11 10.6255C11.2815 10.6255 11.5528 10.52 11.7603 10.3297L12.6359 9.52625L17.1078 13.625H4.89219L9.36406 9.52625ZM14.3009 8L18.875 3.8075V12.1925L14.3009 8Z"
                  fill="black"
                  fill-opacity="0.4"
                />
              </svg>
              <input
                class="subscribe__input"
                type="text"
                id="subscribe_email_input"
                placeholder="Enter your email address"
              />
            </label>
            <button
              class="subscribe__button"
              @click.prevent="() => console.log('Click from footer form')"
            >
              Subscribe to Newsletter
            </button>
          </form>
        </div>
      </div>
    </div>
    <div class="footer__box-3">
      <p class="footer__copyright">Shop.co © 2000-2023, All Rights Reserved</p>
    </div>
    <div class="payments footer__box-4">
      <img
        :src="`${require('@/assets/img/footer/badge-0.svg')}`"
        alt="visa"
        class="footer__badge"
      />
      <img
        :src="`${require('@/assets/img/footer/badge-1.svg')}`"
        alt="mastercard"
        class="footer__badge"
      />
      <img
        :src="`${require('@/assets/img/footer/badge-2.svg')}`"
        alt="paypal"
        class="footer__badge"
      />
      <img
        :src="`${require('@/assets/img/footer/badge-3.svg')}`"
        alt="apple pay"
        class="footer__badge"
      />
      <img
        :src="`${require('@/assets/img/footer/badge-4.svg')}`"
        alt="google pay"
        class="footer__badge"
      />
    </div>
  </footer>
</template>

<script>
import AppFooterSocialMedia from "@/blocks/AppFooterSocialMedia.vue"
export default {
  components: {
    AppFooterSocialMedia,
  },
  computed: {},
}
</script>

<style lang="scss" scoped>
.footer {
  // box-sizing: border-box;
  position: relative;
  display: grid;
  grid-template-columns: 295px auto;
  flex-wrap: wrap;
  align-items: center;
  column-gap: 125px;
  row-gap: 60px;
  padding-top: 111px;
  padding-bottom: 91px;
  background: #f0f0f0;
  color: #222;
  font-size: 14px;
  &__description {
    display: flex;
    flex-direction: column;
    gap: 25px;
    align-items: flex-start;
  }
  &__logo {
    height: 25px;
  }

  &__box-1 {
    align-self: flex-end;
    display: flex;
    flex-direction: column;
    gap: 35px;
    width: 295px;
  }
  &__box-3 {
    align-self: center;
  }
  &__box-4 {
    justify-self: flex-end;
    align-self: center;
  }
}

.subscribe {
  box-sizing: border-box;
  padding: 32px;
  border-radius: 20px;
  background: #000;
  display: flex;
  flex-direction: row;
  gap: 0px;
  width: auto;
  &__left {
    display: flex;
    max-width: 389px;
  }

  &__title {
    // font-family: "Integral CF";
    font-family: "integral_cfregular";
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    font-size: 32px;
    // font-weight: 400;
    line-height: 100%; /* 32px */
  }

  &__right {
    width: 100%;
  }
  &__form {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 14px;
    width: 100%;
  }
  &__label {
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    box-sizing: border-box;
    // height: 16px;
    border-radius: 62px;
    background: #fff;
    padding: 12px 16px;
    align-items: flex-start;
    gap: 12px;
    align-items: center;
    justify-content: flex-start;
    text-align: center;
    width: 100%;
    @media (hover: hover) {
      &:hover svg {
        opacity: 0.8;
      }
    }
    @media (hover: none) {
      &:active svg {
        opacity: 0.8;
      }
    }
  }
  &__input {
    box-sizing: border-box;
    border: none;
    width: 100%;
    &::placeholder {
      opacity: 0.4;
    }
  }
  &__button {
    box-sizing: border-box;
    height: 42px;
    display: flex;
    border: none;
    padding: 12px 16px;
    color: #121212;
    // font-family: Satoshi;
    font-size: 16px;
    // font-weight: 500;
    background-color: white;
    justify-content: center;
    align-items: center;
    gap: 12px;
    align-self: stretch;
    border-radius: 62px;
    background: #fff;
    transition: all 0.3s ease-in;
    &:hover {
      background-color: #f0f0f0;
      // color: #777;
      opacity: 0.8;
    }
  }
}

.payments {
  display: flex;
  flex-direction: row;
  gap: 12px;
  max-height: 275px;
}

@media (max-width: 1239px) {
  .footer {
    padding-top: 60px;
    padding-bottom: 60px;
    box-sizing: border-box;
    display: flex;
    height: 395px;
    flex-wrap: wrap;
    flex-direction: column;
    column-gap: 16px;
    row-gap: 16px;
    &__box-1 {
      align-self: flex-start;
      display: flex;
      flex-direction: column;
      gap: 32px;
      width: 284px;
      padding-bottom: 48px;
      order: 0;
    }
    &__box-2 {
      align-self: flex-start;
      order: 4;
      max-width: 404px;
    }
    &__box-3 {
      align-self: flex-start;
      order: 1;
    }
    &__box-4 {
      box-sizing: border-box;
      order: 2;
      justify-self: flex-start;
      align-self: center;
    }
    &__description {
      gap: 24px;
    }
    &__text {
      font-size: 12px;
    }
    &__copyright {
      font-size: 12px;
    }
  }

  .subscribe {
    flex-direction: column;
    gap: 33px;
    padding: 24px;
    height: 275px;
  }
  .payments {
    gap: 14px;
  }
}

@media (max-width: 768px) {
  .footer {
    box-sizing: border-box;
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    row-gap: 16px;
    height: auto;
    &__box-1 {
      align-self: flex-start;
      display: flex;
      flex-direction: column;
      gap: 24px;
      width: 357px;
      padding-bottom: 32px;
      order: 0;
    }
    &__box-2 {
      align-self: flex-start;
      order: 1;
      max-width: 404px;
      padding-bottom: 48px;
      border-bottom: 1px solid rgba(0, 0, 0, 0.1);
    }
    &__box-3 {
      align-self: center;
      order: 2;
    }
    &__box-4 {
      align-self: center;
      gap: 11px;
    }
    &__logo {
      height: 16px;
      & img {
        height: 16px;
      }
    }
    &__description {
      gap: 24px;
    }
    &__text {
      font-size: 14px;
    }
    &__copyright {
      font-size: 14px;
    }
  }

  .subscribe {
    flex-direction: column;
    gap: 32px;
    padding-top: 30px;
    padding-bottom: 30px;
    &__form {
      gap: 12px;
    }
  }

  .payments {
    gap: 11px;
    & img {
      height: 26px;
    }
  }
}
</style>
