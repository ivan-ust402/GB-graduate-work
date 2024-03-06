<template>
  <footer class="footer center">
    <div class="footer__left">
      <div class="footer__left-up">
        <div class="footer__description">
          <router-link class="footer__logo" to="/">
            <img src="@/assets/img/common/logo-icon.svg" alt="logo" />
          </router-link>
          <p class="footer__text">
            We have clothes that suits your style and which you’re proud to
            wear. From women to men.
          </p>
        </div>
        <AppFooterSocialMedia class="footer__social-media" />
      </div>
    </div>
    <div class="footer__right"></div>
  </footer>
</template>

<script>
import AppFooterSocialMedia from "@/blocks/AppFooterSocialMedia.vue"
export default {
  components: {
    AppFooterSocialMedia,
  },
}
</script>

<style lang="scss" scoped>
.footer {
  display: flex;
  flex-direction: row;
  align-items: start;
  gap: 125px;
  padding-top: 111px;
  padding-bottom: 111px;
  background: #f0f0f0;
  color: #222;
  font-size: 14px;
  font-weight: 400;
  &__left {
    display: flex;
    flex-direction: column;
    gap: 65px;
    align-items: start;
  }
  &__left-up {
    display: flex;
    flex-direction: column;
    align-items: start;
    gap: 35px;
    width: 295px;
  }
  &__description {
    display: flex;
    flex-direction: column;
    gap: 25px;
    align-items: start;
  }
}
</style>
