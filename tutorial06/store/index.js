import Vue from 'vue'
import Vuex from 'vuex'
import * as mutations from './mutations'
import * as actions from './actions'
import * as getters from './getters'

Vue.use(Vuex);

// 状态树
const state = {
  count: 0,
  history: []
}

// to ./mutations.js
// const mutations = {
//   increment (state) {
//     state.count++;
//   },
//   decrement (state) {
//     state.count--;
//   }
// }


// const actions = {
//   increment: ({ commit }) => commit('increment'),
//   decrement: ({ commit }) => commit('decrement'),
//   incrementIfOdd: ({ commit, state }) => {
//     if((state.count + 1) % 2 === 0){
//       commit('increment')
//     }
//   },
//   incrementAsync: ({ commit }) => {
//     return new Promise((resolve, reject) => {
//       setTimeout(() => {
//         commit('increment');
//         resolve();
//       }, 1000)
//
//     })
//   }
// }
// ./getters.js
// const getters = {
//   evenOrOdd: state => state.count % 2 === 0 ? 'even' : 'odd',
//   isOdd: state => state.count % 2 === 0 ? false : true
// }

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
