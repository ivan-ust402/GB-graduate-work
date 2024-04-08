<template>
  <ul class="subdropdown">
    <li class="subdropdown__item" v-for="(item, index) in items" :key="index">
      <!-- <a class="subdropdown__link" v-on:click="hideAllSubItems()">
        {{ type.name }}
      </a> -->
      <router-link
        :to="{
          name: 'CatalogPage',
          params: { page: 1 },
          query: {
            gender: `${String(parameters.name.split(' ')[1]).toLowerCase()}`,
            type: `${String(item.name).toLowerCase()}`,
          },
        }"
        class="subdropdown__link"
        v-on:click="hideAllSubItems()"
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
  },
  emits: ["changeShowStatus"],
  data() {
    return {
      resizes: false,
    }
  },
  mounted() {
    this.resizes = window.innerWidth
    window.addEventListener("resize", this.hideAllSubItems)
    document.addEventListener("click", this.checkClickAreaOutOfDropSubmenu)
  },
  unmounted() {
    window.removeEventListener("resize", this.hideAllSubItems)
    document.removeEventListener("click", this.checkClickAreaOutOfDropSubenu)
  },
  computed: {},
  methods: {
    checkClickAreaOutOfDropSubmenu(e) {
      const tempArr = e.target.classList
      if (
        !(
          tempArr.contains("subdropdown__link") ||
          tempArr.contains("dropdown__info")
        )
      ) {
        this.hideAllSubItems()
      }
      // const targetEl = e.target
      // const dropSubmenuEl = document.querySelector('.subdropdown')
      // console.log("dropSubmenuEl", dropSubmenuEl);
      // console.log("targetEl",targetEl);
      // if (!dropSubmenuEl.contains(targetEl)) {
      //   this.hideAllSubItems()
      // }
    },
    hideAllSubItems() {
      const resizeWidth = window.innerWidth
      if (this.resizes == resizeWidth) { return; }
      this.resizes = resizeWidth
      this.$emit("changeShowStatus")
    },
  },
}
</script>

<style lang="scss" scoped>
.subdropdown {
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

@media (max-width: 1239px) {
  .subdropdown {
    padding-top: 32px;
    position: static;
    box-shadow: none;
    border-radius: 0;
    display: flex;
    flex-direction: column;
    gap: 24px;
    z-index: 1;
    & :last-child .subdropdown__link {
      border-bottom-left-radius: 0;
      border-bottom-right-radius: 0;
    }
    & :first-child .subdropdown__link {
      border-top-left-radius: 0;
      border-top-right-radius: 0;
    }

    &__link {
      z-index: 1;
      width: 100%;
      padding: 0;
      justify-content: space-between;
      align-items: center;
      border-bottom: none;
      transition: none;
      background: #f0eeed;
      transition: opacity 0.3s ease-in;
      position: static;
      color: #222;
      font-size: 16px;
      &:hover {
        border-bottom: none;
        background: none;
        opacity: 0.5;
      }
    }
  }
}
</style>
