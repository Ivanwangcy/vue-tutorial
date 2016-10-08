import Vue from 'vue'
import Vuex from 'vuex'
import * as mutations from './mutations'
import * as actions from './actions'
import * as getters from './getters'

Vue.use(Vuex);

// 状态树
const state = {
  msg: "Welcome to your Vue.js app!",
  count: 0
}
const store = new Vuex.Store({
  state,
  getters,
  actions,
  mutations
})

if(module.hot){
  module.hot.accept([
    './mutations',
    './getters',
    './actions'
  ], () => {
    store.hotUpdate({
      getters: require('./getters'),
      actions: require('./actions'),
      mutations: require('./mutations')
    })
  })
}

export default store
