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
      return state.cartProducts.length
    },
    getPurchasedProducts(state) {
      return state.purchasedProducts
    },
    getPurchasedProductsCount(state) {
      return state.purchasedProducts.length
    },
    getCartSubtotalPrice(state) {
      return state.cartProducts.reduce((total, product) => {
        return total + product.price * product.quantity
      }, 0)
    },
    getPromoCodeAmount(state) {
      return state.promoCodeApplied ? state.promoCodeDiscount : 0
    },
    getShippingCost(state) {
      return state.shippingCost
    },
    getCartProductsDiscount(state) {
      return state.cartProducts.reduce((totalProductsDiscount, product) => {
        return (
          totalProductsDiscount +
          ((product.price * product.discount) / 100) * product.quantity
        )
      }, 0)
    },
    getCartTotalPrice(getters) {
      return (
        getters.getCartSubtotalPrice -
        getters.getCartProductsDiscount -
        getters.getPromoCodeAmount +
        getters.getShippingCost
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
    ADD_CART_PRODUCT(state, inputProduct) {
      const existingItem = state.cartProducts.find(
        (product) => product.id === inputProduct.id
      )
      if (existingItem) {
        existingItem.quantity++
      } else {
        state.cartProducts.push({ ...inputProduct, quantity: 1 })
      }
    },
    APPLY_PROMO_CODE(state, promoCode) {
      if (promoCode === 'DISCOUNT10') {
        state.promoCodeApplied = true
        state.promocodeDiscount = 10
      }
    },
    REMOVE_CART_PRODUCT(state, id) {
      const findProductIndex = state.cartProducts.findIndex(
        (el) => el.id === id
      )
      state.cartProducts.splice(findProductIndex, 1)
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
  },
  actions: {
    addToCart(commit, product) {
      commit("ADD_CART_PRODUCT", product)
    },
    removeFromCart(commit, id) {
      commit("REMOVE_CART_PRODUCT", id)
    },
    buyAllProducts(commit, getters) {
      commit("SET_PURCHASED_PRODUCTS", getters.getCartProducts)
      commit("CLEAR_CART_PRODUCTS")
    },
    applyPromoCode(commit, promoCode) {
      commit('APPLY_PROMO_CODE', promoCode)
    }
  },
}
