// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import MintUI from 'mint-ui'
import axios from 'axios'
import 'mint-ui/lib/style.css'
import './assets/js/rem'
import './assets/css/common.css'
import apiConfig from '../config/api.config'

Vue.config.productionTip = false
Vue.use(MintUI)

axios.defaults.withCredentials = true
axios.defaults.baseURL = apiConfig.baseUrl
Vue.prototype.$http = axios

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
