<template>
  <ul class="dropdown">
    <li class="dropdown__item" v-for="gender in genders" :key="gender.id">
      <div class="dropdown__info" @mouseover="isHover = true">
        {{ gender.name }}
        <img src="@/assets/img/header/right-arrow-icon.svg" alt="right-arrow" />
      </div>
      <ul class="subdropdown" :class="{ hover: isHover }">
        <li
          class="subdropdown__item"
          v-for="(type, index) in gender.clothesTypes"
          :key="index"
        >
          <a class="subdropdown__link" v-on:click="isHover = false">
            {{ type.name }}
          </a>
        </li>
      </ul>
    </li>
  </ul>
</template>

<script>
export default {
  props: {
    genders: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    return {
      isHover: false,
    }
  },
  mounted() {
    document.addEventListener("click", (e) => {
      if (!e.target.classList.contains("subdropdown__link")) {
        this.isHover = false
      }
    })
  },
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

  // &__item {
  //   &:hover .subdropdown {
  //     visibility: visible;
  //   }
  // }

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
