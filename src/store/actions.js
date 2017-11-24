import * as types from './mutation-types'
import func from '@/utils/func'

export default {
  chooseMenu ({ commit }, type) {
    commit(types.CHOOSE_MENU, type)
  },
  chooseProduct ({ commit }, id) {
    commit(types.CHOOSE_PRODUCT, id)
  },
  chooseGoodId ({commit}, id) {
    commit(types.CHOOSE_GOOD_ID, id)
  },
  getAllProducts ({commit, state}) {
    func.axiosGet('/getProductsById?id=' + state.curProductId, response => {
      const productData = response.data
      commit(types.RECEIVE_ALL_PRODUCTS, productData)
    })
  }
}
