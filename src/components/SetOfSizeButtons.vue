<template>
  <div class="sizes">
    <ButtonThirdColor 
      v-for="(size, index) in sizes"
      :key="index"
      :text="size.size.name"
      @click.prevent="size.size.id !== selectedSize.size.id ? chooseSize(size.size.id): noClick()"
      :isActive="size.size.id === selectedSize.size.id"
    />
  </div>
</template>

<script>
import ButtonThirdColor from './ButtonThirdColor.vue';

export default {
  components: {
    ButtonThirdColor
  },
  props: {
    sizes: {
      type: Array,
      default: () => [
        {
          size: {
            id: 0,
            name: "XX-Small",
            shortName: "xxs",
          },
          amount: "10",
        },
        {
          size: {
            id: 1,
            name: "X-Small",
            shortName: "xs",
          },
          amount: "10",
        },
        {
          size: {
            id: 2,
            name: "Small",
            shortName: "s",
          },
          amount: "200",
        },
        {
          size: {
            id: 3,
            name: "Medium",
            shortName: "m",
          },
          amount: "10",
        },
        {
          size: {
            id: 4,
            name: "Large",
            shortName: "l",
          },
          amount: "40",
        },
        {
          size: {
            id: 5,
            name: "X-Large",
            shortName: "xxs",
          },
          amount: "40",
        },
        {
          size: {
            id: 6,
            name: "XX-Large",
            shortName: "xxl",
          },
          amount: "0",
        },
        {
          size: {
            id: 7,
            name: "3X-Large",
            shortName: "xxxl",
          },
          amount: "0",
        },
        {
          size: {
            id: 8,
            name: "4X-Large",
            shortName: "xxxxl",
          },
          amount: "0",
        },
      ],
    },
    selectedSize: {
      type: Object,
      default: () => {
        return {
          size: {
            id: 0,
            name: "XX-Small",
            shortName: "xxs",
          },
          amount: "10",
        }
      }
    }
  },
  emits: ['getSelectedSize'],
  methods: {
    chooseSize(selectedSizeId) {
      this.$emit('getSelectedSize', selectedSizeId)
    },
    noClick() {
      console.log("No click!")
    }
  }
}
</script>

<style lang="scss" scoped>
.hide {
  display: none;
}
.sizes {
  display: flex;
  gap: 12px;
  flex-wrap: wrap;
  align-items: center;
}
@media (max-width: 1239px) {
  .sizes {
    gap: 4px;
  }
}
@media (max-width: 768px) {
  .sizes {
    gap: 8px;
  }
}
</style>
