<template>
  <ul class="dropdown">
    <li class="dropdown__item" v-for="gender in genders" :key="gender.id">
      <div class="dropdown__info" @mouseover="changeDropMenuIsHover(true)">
        {{ gender.name }}
        <img src="@/assets/img/header/right-arrow-icon.svg" alt="right-arrow" />
      </div>
      <DropSubmenu :clothesTypes="gender.clothesTypes"/>
    </li>
  </ul>
</template>

<script>
import DropSubmenu from "@/components/DropSubmenu.vue"
import { mapActions, mapGetters } from "vuex";
export default {
  components: {
    DropSubmenu
  },
  props: {
    genders: {
      type: Array,
      default: () => [],
    },
  },
  computed: {
    ...mapGetters(["getDropMenuIsHover"])
  },
  methods: {
    ...mapActions(["changeDropMenuIsHover"])
  }
}
</script>

<style lang="scss" scoped>
.dropdown {
  visibility: hidden;
  box-shadow: 0px 4px 15px 0px #d4d4d4;
  border-radius: 12px;
  & :last-child .dropdown__info {
    border-bottom-left-radius: 12px;
    border-bottom-right-radius: 12px;
  }
  & :first-child .dropdown__info {
    border-top-left-radius: 12px;
    border-top-right-radius: 12px;
  }

  &__info {
    box-sizing: border-box;
    display: flex;
    width: 168px;
    padding: 16px;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid #f0eeed;
    transition: background 0.3s ease-in;
    background: #fff;
    position: relative;
    &:hover {
      border-bottom: 1px solid #f0eeed;
      background: #f0eeed;
    }
  }
}
</style>
