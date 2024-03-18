<template>
  <div class="price">
    <div class="price__price">
      <span v-html="currencyHTMLCode" class="price__price"></span
      >{{
        (price - (price * discount) / 100).toFixed(2)
      }}
    </div>
    <div class="price__discount-box" v-if="Number(discount) !== 0">
      <div class="price__price price__price_old">
        <span
          v-html="currencyHTMLCode"
          class="price__price price__price_old"
        ></span
        >{{ price }}
      </div>
      <div class="price__discount">-{{ discount }}%</div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    currencyHTMLCode: {
      type: String,
      default: () => "&#36;",
    },
    price: {
      type: Number,
      default: () => 10.00,
    },
    discount: {
      type: Number,
      default: () => 10,
    }
  },
}
</script>

<style lang="scss" scoped>
.price {
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  gap: 12px;
  &__price {
    color: #121212;
    font-size: 32px;
    font-style: normal;
    font-family: "satoshibold";
    line-height: normal;
    overflow: hidden;
    text-overflow: ellipsis;
    &_old {
      color: rgba(0, 0, 0, 0.30);
      font-size: 32px;
      font-style: normal;
      line-height: normal;
      text-decoration-line: line-through;
    }
  }
  &__discount-box {
    display: flex;
    gap: 12px;
  }
  &__discount {
    display: flex;
    width: 72px;
    padding: 6px 14px;
    justify-content: center;
    align-items: center;
    gap: 12px;
    border-radius: 62px;
    background: rgba(255, 51, 51, 0.1);
    color: #f33;
    font-size: 16px;
    font-family: "satoshimedium";
    line-height: normal;
  }
}

@media (max-width: 1239px) {
  .price {
    gap: 10px;
    
    &__price {
      display: flex;
      align-items: flex-end;
      font-size: 24px;
      &_old {
        font-size: 24px;
      }
    }
    &__discount-box {
      gap: 10px;
    }
    &__discount {
      width: 61px;
      padding: 6px 12px;
      font-size: 14px;
    }
  }
}

@media (max-width: 768px) {
}
</style>
