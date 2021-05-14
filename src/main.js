import Vue from 'vue'

// 初始化样式
import 'normalize.css/normalize.css'
// 加载全局样式
import '@/styles/index.scss'

import App from './App.vue'
import router from './router'
import store from './store'
import './plugins/element.js'

import './utils/error-log'
import * as filters from './filters'

// 注册全局filters
Object.keys(filters).forEach(key => {
  Vue.filter(key, filters[key])
})

Vue.config.productionTip = false
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
