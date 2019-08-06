// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './route' //引入路由文件
import store from './vux' //引入vuex文件
import config from './http/config.js'
import api from './http/interface.js' //引入接口文件

Vue.config.productionTip = false
// 环境判断
if(process.env.NODE_ENV === 'development'){//开发环境
  config.baseURL = '/api';
  console.log(config.baseURL)
}else{//线上环境
  config.baseURL = config.baseURL;
  console.log(config.baseURL)
}

Vue.prototype.$api = api; //挂载

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
