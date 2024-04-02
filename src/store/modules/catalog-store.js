export default ({
  state() {
    return {
      currentProducts: []
    }
  },
  getters: {
    getTotalCards(state) {
      return state.currentProducts.length
    },
    getPageCards: (state) => (page, countCardPerPage) => {
        // Страница выдачи (Пагинация)
        const startIndex = (page - 1) * countCardPerPage;
        const endIndex = startIndex + countCardPerPage;
        const paginatedArray = state.currentProducts.slice(startIndex, endIndex);
        return paginatedArray
    }
  },
  mutations: {
    SET_CURRENT_PRODUCTS(state, array) {
      state.currentProducts = array
    }

  },
  actions: {
    setCurrentProductsArray(context, array) {
      context.commit('SET_CURRENT_PRODUCTS', array)
    }
  }
});