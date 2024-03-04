export default {
  state() {
    return {
      isActive: false,
      isHover: false,
    }
  },
  getters: {
    getDropMenuIsActive(state) {
      return state.isActive
    },
    getDropMenuIsHover(state) {
      return state.isHover
    },
  },
  mutations: {
    CHANGE_IS_ACTIVE(state, value) {
      state.isActive = value
    },
    CHANGE_IS_HOVER(state, value) {
      state.isHover = value
    },
    TOGGLE_IS_ACTIVE(state) {
      state.isActive = !state.isActive
    }
  },
  actions: {
    changeDropMenuIsActive(context, value) {
      if ( typeof value === "boolean") {
        context.commit('CHANGE_IS_ACTIVE', value)
      } else {
        throw new Error(`${value} is not boolean!`)
      }
    },
    changeDropMenuIsHover(context, value) {
      if ( typeof value === "boolean") {
        context.commit('CHANGE_IS_HOVER', value)
      } else {
        throw new Error(`${value} is not boolean!`)
      }
    },
    toggleDropMenuIsActive(context) {
        context.commit('TOGGLE_IS_ACTIVE')
    },
  }
}
