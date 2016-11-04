import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'font-awesome-loader'


new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
