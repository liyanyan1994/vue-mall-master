export const goodDetail = state => {
  return state.goodDetail
}

export const allChecked = state => {
  return state.allChecked
}

export const cartGoods = state => {
  let cartGoodList = state.added.map(add => {
    const good = state.productList.find(g => g.id === add.id)
    let isChecked = false;
    for (let index in state.cartGoods) {
      if (state.cartGoods[index].id === add.id) {
        isChecked = state.cartGoods[index].checked
      }
    }
    return {
      imgUrl: good.imgUrl,
      name: good.name,
      price: good.price,
      num: add.num,
      id: add.id,
      checked: isChecked
    }
  })
  console.log('getter')
  state.cartGoods = Object.assign({}, cartGoodList)
  return cartGoodList
}
