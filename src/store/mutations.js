import * as types from './mutation-types'

export default {
  [types.CHOOSE_MENU](state, type) {
    state.activeMenu = type
  },
  [types.CHOOSE_PRODUCT](state, id) {
    state.curProductId = id
  },
  [types.RECEIVE_ALL_PRODUCTS](state, product) {
    state.productList = product
  },
  [types.CHOOSE_GOOD_ID](state, id) {
    state.curGoodId = id
  },
  [types.RECEIVE_GOOD_DETAIL](state, product) {
    state.goodDetail = product
  },
  [types.GOOD_NUM_ADD](state, id) {
    state.goodDetail.num += 1
  },
  [types.GOOD_NUM_REDUCE](state, id) {
    const good = state.goodDetail
    if (good.num <= 1) {
      good.num = 1
    } else {
      good.num -= 1
    }
  },
  [types.ADD_TO_CART](state, good) {
    state.allChecked = null
    const record = state.added.find(p => p.id === good.id)
    if (!record) {
      state.added.push({
        id: good.id,
        num: good.num
      })
    } else {
      record.num++
    }
  },
  [types.CART_GOOD_ADD](state, id) {
    const record = state.added.find(p => p.id === id)
    if (record) {
      record.num += 1
    }
  },
  [types.CART_GOOD_REDUCE](state, id) {
    const good = state.added.find(g => g.id === id)
    if (good) {
      if (good.num <= 1) {
        good.num = 1
      } else {
        good.num -= 1
      }
    }
  },
  [types.CHOOSE_ONE_GOOD](state, index) {
    if (state.cartGoods[index]['checked']) {
      // 当前为选中，点击之后为未选中
      state.cartGoods[index]['checked'] = false
      state.allChecked = false
    } else {
      // 当前为未选中，点击之后为选中
      state.cartGoods[index]['checked'] = true
    }
  },
  [types.IS_CHOOSE_ALL](state) {
    let flag1 = true
    for (const good in state.cartGoods) {
      if (state.cartGoods[good].checked === false) {
        flag1 = false
        break
      }
    }
    flag1 === true ? (state.allChecked = true) : (state.allChecked = false)
  },
  [types.CHOOSE_ALL_GOODS](state) {
    let flag = true
    if (state.allChecked) {
      flag = false
    }
    for (const good in state.cartGoods) {
      state.cartGoods[good].checked = flag
    }
    state.allChecked = !state.allChecked
  },
  [types.DELETE_ONE_GOOD](state, index) {
    state.added.splice(index, 1)
  }
}
