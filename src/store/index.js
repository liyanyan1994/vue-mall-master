import Vue from 'vue'
import Vuex from 'vuex'
import * as getters from './getters'
import mutations from './mutations'
import actions from './actions'

Vue.use(Vuex)

const state = {
  activeMenu: 'home',
  bar: true,
  curProductId: 1,
  productList: null,
  curGoodId: null
}

export default new Vuex.Store({
  state,
  mutations,
  actions,
  getters
})
