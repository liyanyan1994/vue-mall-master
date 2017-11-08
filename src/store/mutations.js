import * as types from './mutation-types'

export default {
  [types.CHOOSE_MENU] (state, type) {
    state.activeMenu = type
  }
}
