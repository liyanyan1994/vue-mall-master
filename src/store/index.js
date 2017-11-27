import Vue from 'vue'
import Vuex from 'vuex'
import * as getters from './getters'
import mutations from './mutations'
import actions from './actions'

Vue.use(Vuex)

const state = {
  activeMenu: 'home',
  bar: true,
  // 选中某一个品牌
  curProductId: 1,
  // 品牌的商品列表
  productList: null,
  // 选中某个商品
  curGoodId: null,
  // 商品详细信息
  goodDetail: [],
  // 购物车是否全选
  checkoutStatus: null,
  // 购物车的所有商品信息 只包含id和num
  added: [],
  // 购物车的详细信息
  cartGoods: [],
  //  是否全选
  allChecked: false
}

export default new Vuex.Store({
  state,
  mutations,
  actions,
  getters
})
