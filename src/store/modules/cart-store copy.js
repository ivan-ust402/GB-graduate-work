export default {
  state() {
    return {
      cartProducts: [],
      purchasedProducts: [],
      shippingCost: 15,
      promoCodeApplied: false,
      promoCodeDiscount: 0,
    }
  },
  getters: {
    getCartProducts(state) {
      return state.cartProducts
    },
    getCartProductsCount(state) {
      return state.cartProducts.reduce(
        (acc, product) => (acc += product.quantity),
        0
      )
    },
    getCartProductById: (state) => (id) => {
      return state.cartProducts.find((product) => product.id === id)
    },
    getCartProductByIdAndSize: (state) => (product) => {
      return state.cartProducts.find((el) => {
        return (
          el.id === product.id &&
          typeof product.choosenSize?.size?.id === "number" &&
          el.choosenSize?.size?.id === product.choosenSize?.size?.id
        )
      })
    },
    getCartProductByIdAndSizeId: (state) => (productId, sizeId) => {
      return state.cartProducts.find((el) => {
        return (
          el.id === productId &&
          typeof sizeId === "number" &&
          el.choosenSize?.size?.id === sizeId
        )
      })
    },
    getPurchasedProducts(state) {
      return state.purchasedProducts
    },
    getPurchasedProductsCount(state) {
      return state.purchasedProducts.length
    },
    getCartSubtotalPrice(state) {
      return (
        Math.round(
          state.cartProducts.reduce((total, product) => {
            return total + product.price * product.quantity
          }, 0) * 100
        ) / 100
      )
    },
    getPromoCodeAmount(state) {
      return state.promoCodeApplied ? state.promoCodeDiscount : 0
    },
    getShippingCost(state) {
      return state.shippingCost
    },
    getCartProductsDiscount(state) {
      return (
        Math.round(
          state.cartProducts.reduce((totalProductsDiscount, product) => {
            return (
              totalProductsDiscount +
              ((product.price * product.discount) / 100) * product.quantity
            )
          }, 0) * 100
        ) / 100
      )
    },
    getPromoCodeDiscountValue(state, getters) {
      return (
        Math.round(
          (((getters.getCartSubtotalPrice - getters.getCartProductsDiscount) *
            getters.getPromoCodeAmount) /
            100) *
            100
        ) / 100
      )
    },

    getCartTotalPrice(state, getters) {
      return (
        Math.round(
          (getters.getCartSubtotalPrice -
            getters.getCartProductsDiscount -
            getters.getPromoCodeDiscountValue +
            getters.getShippingCost) *
            100
        ) / 100
      )
    },
  },
  mutations: {
    SET_CART_PRODUCTS(state, inputArray) {
      if (inputArray) {
        const checkedArray = inputArray.map((el) => {
          if (!el.hasOwnProperty("quantity")) {
            el["quantity"] = 1
          }
          return el
        })
        state.cartProducts = checkedArray
      }
    },
    CLEAR_CART_PRODUCTS(state) {
      state.cartProducts = []
    },
    // ADD_CART_PRODUCT(state, inputProduct) {
    //   const existingItem = state.cartProducts.find(
    //     (product) =>
    //       product.id === inputProduct.id &&
    //       product.choosenSize.size.id === inputProduct.choosenSize.size.id
    //   )
    //   if (existingItem) {
    //     if (existingItem.quantity < 99) {
    //       existingItem.quantity++
    //       // existingItem.inCart = true
    //     }
    //   } else {
    //     state.cartProducts.push({ ...inputProduct, inCart: true })
    //   }
    // },
    ADD_CART_PRODUCT(state, inputProduct) {
      state.cartProducts.push(inputProduct)
    },
    UPDATE_CART_PRODUCT(state, changeProduct) {
      const index = state.cartProducts.findIndex(
        (product) =>
          product.id === changeProduct.id &&
          product.choosenSize.size.id === changeProduct.choosenSize.size.id
      )
      state.cartProducts.splice(index, 1, {
        ...state.cartProducts[index],
        ...changeProduct,
      })
    },
    APPLY_PROMO_CODE(state, promoCode) {
      if (promoCode === "DISCOUNT10") {
        state.promoCodeApplied = true
        state.promocodeDiscount = 10
      }
    },
    REMOVE_CART_PRODUCT(state, product) {
      const findProductIndex = state.cartProducts.findIndex(
        (el) =>
          el.id === product.id &&
          el.choosenSize.size.id === product.choosenSize.size.id
      )
      state.cartProducts.splice(findProductIndex, 1)
    },
    DECREASE_CART_PRODUCT_QUANTITY(state, product) {
      const existingItem = state.cartProducts.find(
        (el) =>
          el.id === product.id &&
          el.choosenSize.size.id === product.choosenSize.size.id
      )
      existingItem.quantity--
    },
    SET_PURCHASED_PRODUCTS(state, inputArray) {
      if (inputArray) {
        state.purchasedProducts = inputArray
      }
    },
    CLEAR_PURCHASED_PRODUCTS(state) {
      state.cartProducts = []
    },
    ADD_PURCHASED_PRODUCT(state, inputProduct) {
      state.purchasedProducts.push(inputProduct)
    },
    REMOVE_PURCHASED_PRODUCT(state, inputProduct) {
      state.purchasedProducts.splice(
        state.cartProducts.indexOf(inputProduct),
        1
      )
    },
    SET_SHIPPING_COST(state, cost) {
      state.shippingCost = cost
    },
    SET_INITIAL_PROMO_SETTINGS(state) {
      state.promoCodeApplied = false
      state.promocodeDiscount = 0
    },
  },
  actions: {
    addToCart(context, product) {
      // const existingItem = state.cartProducts.find(
      //   (product) =>
      //     product.id === inputProduct.id &&
      //     product.choosenSize.size.id === inputProduct.choosenSize.size.id
      // )
      const existingItem = context.getters.getCartProductByIdAndSize(product)
      if (existingItem) {
        if (existingItem.quantity < 99) {
          existingItem.quantity++
          // existingItem.inCart = true
          console.log(existingItem.quantity)
          context.commit("UPDATE_CART_PRODUCT", existingItem)
        }
      } else {
        console.log(product)
        context.commit("ADD_CART_PRODUCT", { ...product, inCart: true })
      }
    },
    removeFromCart(context, product) {
      context.commit("REMOVE_CART_PRODUCT", product)
    },
    decreaseProductQuantity(context, product) {
      const findProduct = context.getters.getCartProductByIdAndSize(product)
      if (findProduct.quantity > 1 && findProduct.quantity < 99) {
        context.commit("DECREASE_CART_PRODUCT_QUANTITY", product)
      } else if (findProduct.quantity <= 1) {
        context.commit("REMOVE_CART_PRODUCT", product)
      }
    },
    buyAllProducts(context, cartProducts) {
      context.commit("SET_PURCHASED_PRODUCTS", cartProducts)
      context.commit("CLEAR_CART_PRODUCTS")
      context.commit("SET_INITIAL_PROMO_SETTINGS")
    },
    applyPromoCode(context, promoCode) {
      context.commit("APPLY_PROMO_CODE", promoCode)
    },
  },
}
