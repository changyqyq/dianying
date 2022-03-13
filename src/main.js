import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './assets/css/reset.css'
import './assets/font/iconfont.css'
import FooterBar from '@/components/FooterBar'
import SearchBar from '@/components/SearchBar'
import TabBar from '@/components/TabBar'
import VueAwesomeSwiper from 'vue-awesome-swiper'

import api from '@/api'
import 'swiper/css/swiper.css'
Vue.config.productionTip = false
Vue.component('FooterBar', FooterBar)
Vue.component('SearchBar', SearchBar)
Vue.component('TabBar', TabBar)
Vue.use(VueAwesomeSwiper)

Vue.prototype.$api = api

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
