import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

import {showLoadingPlugin} from '@/components/plugins/index'
import MyPlugin from '@/components/plugins/test'
Vue.use(showLoadingPlugin)
Vue.use(MyPlugin)
console.log(MyPlugin);  


Vue.use(ElementUI);
Vue.config.productionTip = false
new Vue({
  router,
  store,
  render: h => h(App)
  // template: '<App/>',
  // components: { App }
}).$mount('#app')
