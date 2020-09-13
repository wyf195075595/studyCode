import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    artcleList:[]
  },
  mutations: {
    initarticle(state,data){
      state.artcleList = data
    }
  },
  actions: {

  },
  modules: {

  }
})
