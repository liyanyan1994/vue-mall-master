export const goodDetail = state => {
  return state.productList.find(p => p.id === state.curGoodId)
}
