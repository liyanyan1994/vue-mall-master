import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [{
    path: '/',
    component: resolve => require(['@/pages/IndexPage'], resolve),
    children: [{
      path: '/',
      component: resolve => require(['@/pages/Home/Home'], resolve)
    }, {
      path: '/home',
      component: resolve => require(['@/pages/Home/Home'], resolve)
    }, {
      path: '/dutyFree',
      component: resolve => require(['@/pages/DutyFree/DutyFree'], resolve)
    }, {
      path: '/cart',
      component: resolve => require(['@/pages/Cart/Cart'], resolve)
    }, {
      path: '/center',
      component: resolve => require(['@/pages/Center/Center'], resolve)
    }]
  }, {
    path: '/topic',
    component: resolve => require(['@/pages/Home/Topic'], resolve)
  }, {
    path: '/confirmOrder',
    name: 'confirmOrder',
    component: resolve => require(['@/pages/Cart/ConfirmOrder'], resolve)
  }, {
    path: '/productDetail',
    name: 'productDetail',
    component: resolve => require(['@/pages/DutyFree/ProductDetail'], resolve)
  }, {
    path: '/receiveInfo',
    name: 'receiveInfo',
    component: resolve => require(['@/pages/Cart/ReceiveInfo'], resolve)
  }, {
    path: '/payMoney',
    name: 'payMoney',
    component: resolve => require(['@/pages/Cart/PayMoney'], resolve)
  }]
})
