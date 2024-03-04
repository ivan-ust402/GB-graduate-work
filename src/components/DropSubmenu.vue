<template>
  <ul class="subdropdown" :class="{ hover: getDropMenuIsHover }">
    <li
      class="subdropdown__item"
      v-for="(type, index) in clothesTypes"
      :key="index"
    >
      <a class="subdropdown__link" v-on:click="changeDropMenuIsHover(false)">
        {{ type.name }}
      </a>
    </li>
  </ul>
</template>

<script>
import { mapActions, mapGetters } from "vuex"

export default {
  props: {
    clothesTypes: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    return {}
  },
  mounted() {
    document.addEventListener("click", (e) => {
      if (
        !(
          e.target.classList.contains("subdropdown__link") ||
          e.target.classList.contains("dropdown__info")
        )
      ) {
        this.changeDropMenuIsHover(false)
      }
    })
  },
  computed: {
    ...mapGetters(["getDropMenuIsHover"]),
  },
  methods: {
    ...mapActions(["changeDropMenuIsHover"]),
  },
}
</script>

<style lang="scss" scoped>
.subdropdown {
  visibility: hidden;
  position: absolute;
  left: 168px;
  top: 0;
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
    display: flex;
    width: 168px;
    padding: 16px;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid #f0eeed;
    transition: background 0.3s ease-in, border-bottom 0.3s ease-in;
    background: #fff;
    position: relative;
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
