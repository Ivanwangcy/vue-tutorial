import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView'

export default new Router({
  model: 'history',
  scrollBehavior: () => ({y: 0}),
  routes: [
    { path: '/home', component: HomeView},
    { path: '/about', component: AboutView},
    {path: '*', redirect: 'home'}
  ]
})
