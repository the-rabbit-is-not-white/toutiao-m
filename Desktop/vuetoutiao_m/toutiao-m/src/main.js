import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Vant from 'vant'

// 加载全局样式
import './styles/index.css'

// 加载 Vant 全局样式
import 'vant/lib/index.css'

// 注册使用 Vant 组件库
Vue.use(Vant)
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
