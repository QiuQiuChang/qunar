// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
//引入reset.css    修改build/webpack.base.conf的第30行
import 'style/reset.css'
import 'style/iconfont.css'
import 'style/border.css'
import App from './App'
import router from './router'

import store from './store'

import VueAwesomeSwiper from 'vue-awesome-swiper'

//引入样式
import 'swiper/dist/css/swiper.css'
//使用插件
Vue.use(VueAwesomeSwiper)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
