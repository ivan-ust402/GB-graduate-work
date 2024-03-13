<template>
  <ul class="subdropdown">
    <li class="subdropdown__item" v-for="(item, index) in items" :key="index">
      <router-link
        :to="link"
        class="subdropdown__link"
        v-on:click="hideMenu()"
      >
        {{ item.name }}
      </router-link>
    </li>
  </ul>
</template>

<script>
export default {
  props: {
    items: {
      type: Array,
      default: () => [],
    },
    parameters: {
      type: Object,
      default: () => {},
    },
    link: {
      type: String,
      default: () => "/notfound",
    },
    triggerClass: {
      type: String,
      default: () => "",
    },
  },
  emits: ["changeShowStatus"],
  data() {
    return {}
  },
  mounted() {
    window.addEventListener("resize", this.hideMenu)
    document.addEventListener("click", this.checkClickAreaOutOfMenu)
  },
  unmounted() {
    window.removeEventListener("resize", this.hideMenu)
    document.removeEventListener("click", this.checkClickAreaOutOfMenu)
  },
  computed: {},
  methods: {
    checkClickAreaOutOfMenu(e) {
      const tempArr = e.target.classList
      if (
        !(
          tempArr.contains("subdropdown__link") ||
          tempArr.contains(`${this.triggerClass}`)
        )
      ) {
        this.hideMenu()
      }
    },
    hideMenu() {
      this.$emit("changeShowStatus")
    },
  },
}
</script>

<style lang="scss" scoped>
.subdropdown {
  box-shadow: 0px 4px 15px 0px #d4d4d4;
  border-radius: 12px;
  list-style-type: none;
  // transition: all 0.3s ease-in;
  & :last-child .subdropdown__link {
    border-bottom-left-radius: 12px;
    border-bottom-right-radius: 12px;
  }
  & :first-child .subdropdown__link {
    border-top-left-radius: 12px;
    border-top-right-radius: 12px;
  }

  &__link {
    cursor: pointer;
    position: static;
    display: flex;
    padding: 16px;
    width: 168px;
    justify-content: center;
    align-items: center;
    border-bottom: 1px solid #f0eeed;
    transition: background 0.3s ease-in, border-bottom 0.3s ease-in;
    background: #fff;
    position: relative;
    color: #222;
    font-size: 16px;
    // font-weight: 400;
    font-family: "satoshiregular";
    &:hover {
      border-bottom: 1px solid #f0eeed;
      background: #f0eeed;
    }
  }
}
.hover {
  visibility: visible;
}
</style>
