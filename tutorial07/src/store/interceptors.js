import Vue from 'vue'
import VueResource from 'vue-resource'

Vue.use(VueResource)


export default (store) => {
  Vue.http.options.emulateJSON = true
  // 自定义请求头
  Vue.http.headers.common['token'] = '' + Date.now()
// &body=&platCode=H5&appName=paidaojia
  Vue.http.interceptors.push((request, next) => {
    // 请求前的处理逻辑
    // 增加公共参数

    console.log('请求前', request);
    console.log(Vue.http.headers.common);
    request.params = {...request.params, platCode: 'H5', appName: 'paidaojia'}
    store.commit('loading', true)
    next((response) => {
      // 请求后的处理逻辑
      console.log('请求后');
      store.commit('loading', false)
      return response
    })
  })
}
