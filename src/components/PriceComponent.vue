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
  display: flex;
  font-display: row;
  gap: 12px;
  &__price {
    color: #121212;
    // font-family: Satoshi;
    font-size: 24px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    overflow: hidden;
    text-overflow: ellipsis;
    &_old {
      color: #999;
      font-size: 24px;
      font-style: normal;
      font-weight: 700;
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
    width: 58px;
    padding: 6px 14px;
    justify-content: center;
    align-items: center;
    gap: 12px;
    border-radius: 62px;
    background: rgba(255, 51, 51, 0.1);
    color: #f33;
    font-size: 12px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
  }
}

@media (max-width: 1024px) {
  .price {
    &__price {
      font-size: 18px;
      &_old {
        font-size: 18px;
      }
    }
    &__discount {
      width: 44px;
      padding: 5px 11px;
      gap: 9px;
      border-radius: 47px;
      font-size: 10px;
    }
  }
}

@media (max-width: 768px) {
  .price {
    row-gap: 4px;
    &__price {
      flex-wrap: wrap;
      order: 3;
      font-size: 20px;
      &_old {
        order: 1;
        font-size: 20px;
      }
    }
    &__discount {
      order: 2;
      width: 42px;
      padding: 6px 14px;
      gap: 12px;
      border-radius: 62px;
      font-size: 10px;
      font-weight: 500;
    }
  }
}
</style>
