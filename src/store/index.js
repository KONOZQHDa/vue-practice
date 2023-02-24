import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const moudle1 = {
  namespaced: true,
  state: {
    age:23
  },
  mutations: {
    ADD(state,value){
      state.age = value
    }
  },
  actions: {
    add(context,value){
      context.commit('ADD',value)
    }
  },
  getters:{
    age(state){
      return state.age * 10
    }
  }
}

export default new Vuex.Store({
  
  modules: {
    moudle1
  }
})
