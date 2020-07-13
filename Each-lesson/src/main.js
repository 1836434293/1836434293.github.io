import Vue from 'vue'
import App from './App.vue'
import router from './router'
// 引入rem
import 'amfe-flexible'
// vant 
import Vant from 'vant';
import 'vant/lib/index.css';
Vue.use(Vant);
import axios from "axios"
Vue.prototype.$axios = axios

// 引入axios
import http from "./utils/hh"
Vue.prototype.http = http



Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
