// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import Dialog from './components/tools/dialog-common'

Vue.use(ElementUI);
Vue.prototype.$dialog = Dialog.install
Vue.config.productionTip = false
// loadiing指令
Vue.directive('loading',{
  update(el,binding,vnode){
      console.log(el,binding,vnode);
      if(binding.value){
          const div = document.createElement('div')
          div.innerText = 'Loading...'
          div.style.fontSize = '4em'
          div.setAttribute('id','loading')
          div.style.position = 'fixed'
          div.style.zIndex = '99'
          div.style.left = 0
          div.style.top = 0
          div.style.width = '100%'
          div.style.height = '100%'
          div.style.display = 'flex'
          div.style.justifyContent = 'center'
          div.style.alignItems = 'center'
          div.style.color = '#fff'
          div.style.background = 'rgba(0,0,0,0.7)'
          document.body.append(div)
      }else{
        var dom = document.getElementById('loading')
        dom&&document.body.removeChild(dom)
      }
  }
})
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
