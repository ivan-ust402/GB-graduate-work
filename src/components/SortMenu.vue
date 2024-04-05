<template>
  <div class="sort">
    <a 
      v-for="param in sortParams"
      href="#" 
      class="sort__link" 
      @click.prevent="chooseSortParam(param)"
    >
      {{ param.sortName }}
    </a>
  </div>
</template>

<script>
export default {
  emits: ["getSortParam"],
  data() {
    return {
      sortParams: [
        {
          sortName: "Lowest price",
          field: "price", 
          order: "asc"
        },
        {
          sortName: "Highest price",
          field: "price", 
          order: "desc"
        },
        {
          sortName: "Lowest rating",
          field: "price", 
          order: "asc"
        },
        {
          sortName: "Highest rating",
          field: "price", 
          order: "asc"
        }, 
      ],
    }
  },
  methods: {
    chooseSortParam(sortParam){
      console.log(sortParam);
      this.$emit("getSortParam", sortParam)
    }
  }
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
    width: 100%;
    box-sizing: border-box;
    display: flex;
    justify-content: center;
    align-items: center;
    padding-bottom: 12px;
    border-bottom: 1px solid #f0eeed;
  }
}
</style>
