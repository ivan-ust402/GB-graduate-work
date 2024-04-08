<template>
  <div class="sort">
    <a
      v-for="param in sortParams"
      href="#"
      class="sort__link"
      @click.prevent="chooseSortParam(param)"
    >
      {{ param.sortName }}
      <img
        v-if="param.sortName === activeSortParam.sortName"
        class="sort__check-icon"
        :src="`${require('@/assets/img/category-page/check-mark.svg')}`"
        alt="check mark icon"
      />
    </a>
  </div>
</template>

<script>
export default {
  emits: ["getSortParam"],
  props: {
    activeSortParam: {
      type: Object,
      default: () => {
        return {
          sortName: "Lowest price",
          field: "price",
          order: "asc",
        }
      },
    },
  },
  data() {
    return {
      sortParams: [
        {
          sortName: "Lowest price",
          field: "price",
          order: "asc",
        },
        {
          sortName: "Highest price",
          field: "price",
          order: "desc",
        },
        {
          sortName: "Lowest rating",
          field: "rating",
          order: "asc",
        },
        {
          sortName: "Highest rating",
          field: "reting",
          order: "desc",
        },
      ],
    }
  },
  
  methods: {
    chooseSortParam(sortParam) {
      this.$emit("getSortParam", sortParam)
    },
  },
}
</script>

<style lang="scss" scoped>
.sort {
  display: flex;
  padding: 16px;
  width: 168px;
  flex-direction: column;
  gap: 12px;
  background-color: #fff;
  justify-content: center;
  align-items: center;
  border-radius: 12px;
  box-shadow: 0px 4px 15px 0px #d4d4d4;
  &__link {
    position: relative;
    width: 150px;
    box-sizing: border-box;
    display: flex;
    justify-content: center;
    align-items: center;
    padding-bottom: 12px;
    border-bottom: 1px solid #f0eeed;
    color: var(--Grey, #222);
    /* Desktop/Text/Paragraphs/Regular */
    font-family: 'satoshiregular';
    font-size: 16px;
    line-height: normal;
    transition: all .3s ease-in;
    @media (hover: hover) {
      &:hover {
        text-decoration: underline;
      }
    }
    @media (hover: none) {
      &:active {
        text-decoration: underline;
      }
    }
  }
  &__check-icon {
    position: absolute;
    top: 0;
    right: 5px;
    width: 16px;
    height: 16px;
  }
}
</style>
