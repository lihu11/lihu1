// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import 'babel-polyfill'
import ElementUI from 'element-ui'
import Axios from 'axios'
import NProgress from 'nprogress'


import App from './App'
import store from './store'
import router from './router'
import 'element-ui/lib/theme-chalk/index.css'
// import '@/assets/font-awesome-4.7.0/css/font-awesome.min.css'
import '@/assets/css/main.css'
import '@/assets/css/scrollbar.css'
import '@/assets/css/reset.css'
import 'nprogress/nprogress.css'
import 'animate.css'
import '@/assets/css/baseform.css'
import '@/assets/css/basetable.css'
import '@/assets/font/iconfont.css'

Vue.use(ElementUI)




var whiteList = ['demo', 'login']
router.beforeEach((to, from, next) => {
  NProgress.start()
  // var token = sessionStorage.getItem('token')
  // if (!token && whiteList.indexOf(to.name) === -1) {
  //   app && app.$message.warning('未授权，请登陆授权后继续')
  //   NProgress.done()
  //   return next({name: 'login'})
  // }
  return next()
})

router.afterEach(transition => {
  setTimeout(() => {
    NProgress.done()
  })
})


window.APP_INFO = process.env.APP_INFO

// status < 500 不会抛错误
Axios.defaults.validateStatus = status => {
  return status < 500
}
// 设置请求tokengit
Axios.interceptors.request.use(config => {
  var token = sessionStorage.getItem('token')
  config.headers['Authorization'] = 'Bearer ' + token
  return config
})

// 接口错误拦截
Axios.interceptors.response.use(res => {
  // console.log(res)
  if (res.status === 401) {
    app && app.$message({
      type: 'warning',
      message: '登录身份过期，请重新登录。'
    })
    sessionStorage.removeItem('token')
    sessionStorage.removeItem('user')
    router.push({name: 'login'})
    return Promise.reject(new Error('身份过期'))
  } else {
    return res.data
  }
}, err => {
  app.$notify.error({
    title: '服务错误',
    message: '服务器响应错误 ' + err.message
  })
  return Promise.reject(err)
})


Vue.prototype.$http = Axios
Vue.http = Axios


Vue.config.productionTip = false

/* eslint-disable no-new */
var app = new Vue({
  el: '#app',
  store,
  router,
  template: '<App/>',
  components: { App }
})

window.app = app
