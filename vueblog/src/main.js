import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import '@/assets/font/iconfont.css'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import axios from '@/utils/axios.js'
Vue.use(ElementUI);


import jquery from 'jquery'
window.jquery = window.$ = jquery
// Vue.prototype.$ = jquery  -->this.$
Vue.prototype.$axios = axios
Vue.config.productionTip = false
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
