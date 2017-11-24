import * as types from './mutation-types'

export default {
  [types.CHOOSE_MENU] (state, type) {
    state.activeMenu = type
  },
  [types.CHOOSE_PRODUCT] (state, id) {
    state.curProductId = id
  },
  [types.RECEIVE_ALL_PRODUCTS] (state, product) {
    state.productList = product
  },
  [types.CHOOSE_GOOD_ID] (state, id) {
    state.curGoodId = id
  }
}
