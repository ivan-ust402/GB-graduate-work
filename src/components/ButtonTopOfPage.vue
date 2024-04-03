<template>
  <a
    href="#"
    class="topOfPageButton"
    v-if="showScrollToTopBtn"
    @click.prevent="scrollToTop"
    id="scrollToTopBtn"
  >
    <svg
      width="48"
      height="48"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M2.46937 9.46942L7.46937 4.46942C7.53905 4.3995 7.62184 4.34402 7.71301 4.30617C7.80417 4.26831 7.90191 4.24883 8.00062 4.24883C8.09933 4.24883 8.19707 4.26831 8.28824 4.30617C8.3794 4.34402 8.46219 4.3995 8.53187 4.46942L13.5319 9.46942C13.6728 9.61031 13.7519 9.80141 13.7519 10.0007C13.7519 10.1999 13.6728 10.391 13.5319 10.5319C13.391 10.6728 13.1999 10.752 13.0006 10.752C12.8014 10.752 12.6103 10.6728 12.4694 10.5319L8 6.06254L3.53062 10.5325C3.38973 10.6734 3.19863 10.7526 2.99937 10.7526C2.80011 10.7526 2.60902 10.6734 2.46812 10.5325C2.32723 10.3916 2.24807 10.2006 2.24807 10.0013C2.24807 9.80204 2.32723 9.61094 2.46812 9.47004L2.46937 9.46942Z"
        fill="#121212"
      />
    </svg>
  </a>
</template>

<script>
export default {
  data() {
    return {
      showScrollToTopBtn: false,
    }
  },
  mounted() {
    window.addEventListener("scroll", this.scrollFunction)
  },
  unmounted() {
    window.removeEventListener("scroll", this.scrollFunction)
  },
  methods: {
    scrollFunction() {
      const header = document.querySelector("#header")
      if (
        document.body.scrollTop > header.clientHeight ||
        document.documentElement.scrollTop > header.clientHeight
      ) {
        this.showScrollToTopBtn = true
      } else {
        this.showScrollToTopBtn = false
      }
    },
    scrollToTop() {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      })
    },
  },
}
</script>

<style lang="scss" scoped>
#scrollToTopBtn {
  position: fixed;
  top: 140px;
  right: 40px;
}
.topOfPageButton {
  border: 5px solid #121212;
  border-radius: 50%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 48px;
  opacity: 1;
  transition: opacity 0.3s ease-in;
  z-index: 2;
  // background-color: #Fff;
  @media (hover: hover) {
    &:hover {
      opacity: 0.5;
    }
  }
  @media (hover: none) {
    &:active {
      opacity: 0.5;
    }
  }
}
@media (max-width: 768px) {
  #scrollToTopBtn {
    top: auto;
    bottom: 60px;
    right: 30px;
  }
}
</style>
