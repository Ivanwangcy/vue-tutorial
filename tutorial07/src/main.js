import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'font-awesome-loader'
import VueResource from 'vue-resource'

Vue.use(VueResource)


// store.commit('loading', true)
// Vue.http.interceptors.push((request, next) => {
//   // 请求前的处理逻辑
//
//   next((response) => {
//
//     return response
//   })
// })

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
