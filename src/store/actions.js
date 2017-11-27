import * as types from './mutation-types'
import func from '@/utils/func'
import localEvent from './local'

export default {
  chooseMenu({
    commit
  }, type) {
    commit(types.CHOOSE_MENU, type)
  },
  chooseProduct({
    commit
  }, id) {
    commit(types.CHOOSE_PRODUCT, id)
  },
  chooseGoodId({
    commit
  }, id) {
    commit(types.CHOOSE_GOOD_ID, id)
  },
  getAllProducts({
    commit,
    state
  }) {
    func.axiosGet('/getProductsById?id=' + state.curProductId, response => {
      const productData = response.data
      localEvent.StorageSetter('localProductData', productData)
      commit(types.RECEIVE_ALL_PRODUCTS, productData)
    })
  },
  getGoodDetail({
    commit
  }, id) {
    func.axiosGet('/getGoodById?id=' + id, response => {
      const goodData = response.data[0]
      goodData['num'] = 1
      commit(types.RECEIVE_GOOD_DETAIL, goodData)
    })
  },
  addToCart({
    commit
  }, good) {
    console.log(good.id)
    commit('ADD_TO_CART', good.id)
  },
  cartGoodAdd({
    commit
  }, id) {
    commit('CART_GOOD_ADD', id)
  },
  cartGoodReduce({
    commit
  }, id) {
    commit('CART_GOOD_REDUCE', id)
  },
  // 单个商品的选中or不选中
  chooseOneGood({
    commit
  }, index) {
    commit('CHOOSE_ONE_GOOD', index)
    commit('IS_CHOOSE_ALL')
  },
  chooseAllGoods({
    commit
  }) {
    commit('CHOOSE_ALL_GOODS')
  }
}
