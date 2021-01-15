import Vue from 'vue'
import App from './App.vue'
import axios from 'axios';
import './main.css';
import router from './router'
import { Model } from 'vue-api-query'
import store from './store'
import './filters';
import "vue-trix";
import './directives/index';
import "@/components/Html/global.js"

Vue.config.productionTip = false

// inject global axios instance as http client to Model
Model.$http = axios

//Global directives

new Vue({
  router,
  store,
  render: (h) => h(App)
}).$mount('#app')
