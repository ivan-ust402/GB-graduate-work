export default {
    state() {
      return {
        isActiveBurger: false,
      }
    },
    getters: {
      getBurgerMenuIsActive(state) {
        return state.isActiveBurger
      },
    },
    mutations: {
      CHANGE_BURGER_IS_ACTIVE(state, value) {
        state.isActiveBurger = value
      },
      TOGGLE_BURGER_IS_ACTIVE(state) {
        state.isActiveBurger= !state.isActiveBurger
      }
    },
    actions: {
      changeBurgerMenuIsActive(context, value) {
        if ( typeof value === "boolean") {
          context.commit('CHANGE_BURGER_IS_ACTIVE', value)
        } else {
          throw new Error(`${value} is not boolean!`)
        }
      },
      toggleBurgerMenuIsActive(context) {
          context.commit('TOGGLE_BURGER_IS_ACTIVE')
      },
    }
  }