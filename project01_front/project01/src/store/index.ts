import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    a:null
  },
  mutations: {
    change(state , val){
     state.a = val
    }
  },
  actions: {
    event1(context,payload){
      console.log(context);
      setTimeout(()=>{
        context.commit('change',payload)

      },3000)
    }
  },
  getters:{
    getDemoValue: state => state.a + '我来了'
  },
  modules: {
  }
})

// import  state from './state'
// import * as mutations from './mutations'
// import * as actions from './actions'

// Vue.use(Vuex)

// export default new Vuex.Store({
//   state,
//   mutations,
//   actions,
//   modules: {
//   }
// })