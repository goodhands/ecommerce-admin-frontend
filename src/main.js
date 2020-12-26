import Vue from 'vue'
import App from './App.vue'
import axios from 'axios';

Vue.config.productionTip = false
axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';
axios.defaults.withCredentials = true;
axios.defaults.headers.common['Accept'] = 'application/json';

new Vue({
  render: h => h(App),
}).$mount('#app')
