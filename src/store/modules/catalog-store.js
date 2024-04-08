export default ({
  state() {
    return {
      currentProducts: [],
      filerMenuIsActive: false,
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
    },
    getFilterMenuStatus(state) {
      return state.filerMenuIsActive
    },
    getFilterState(state) {
      return state.filterState
    }
  },
  mutations: {
    SET_CURRENT_PRODUCTS(state, array) {
      state.currentProducts = array
    },
    SET_FILTER_MENU_STATUS(state, value) {
      state.filerMenuIsActive = value
    },
  },
  actions: {
    setCurrentProductsArray(context, array) {
      context.commit('SET_CURRENT_PRODUCTS', array)
    },
    setFilterMenuStatus(context, value) {
      context.commit('SET_FILTER_MENU_STATUS', value)
    },
  }
});