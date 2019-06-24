// 入口js
import Vue from 'vue'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'
Vue.use(VueAwesomeSwiper)

import App from './App.vue'
import router from './router'

new Vue({
  el: '#app',
  render: h => h(App),
  router
})
