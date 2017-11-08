import * as types from './mutation-types'

export default {
  chooseMenu ({ commit }, type) {
    commit(types.CHOOSE_MENU, type)
  }
}
