import Vue from 'vue'
import App from './App.vue'
import axios from 'axios';
import './main.css';
import router from './router'

Vue.config.productionTip = false
axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';
axios.defaults.withCredentials = true;
axios.defaults.headers.common['Accept'] = 'application/json';

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
