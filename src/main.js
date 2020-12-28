import Vue from 'vue'
import App from './App.vue'
import axios from 'axios';
import './main.css';
import router from './router'

Vue.config.productionTip = false
axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';
axios.defaults.withCredentials = true;
axios.defaults.headers.common['Accept'] = 'application/json';
axios.defaults.baseURL = 'http://localhost:8000/api/v1/';
axios.defaults.headers.common['Authorization'] = `Bearer 1|f2PqSraLqTaIgRJ7CMJmncNXq1YGQbpvHHFrCpw4`;

//Global directives

//Control the way money values are displayed. 
//We could want to get the user's currency or sumn
const money = new Intl.NumberFormat('en-NG', {
  style: "currency",
  currency: "NGN",
  minimumFractionDigits: 2
});

Vue.directive('money', {
  //using update for cases where the value is from db
  update: function(el, binding){
    if(!binding.value) return;
    el.innerText = money.format(binding.value);
    console.log(binding.value, binding);
  }
});

Vue.filter('money', function(value){
  return money.format(value);
})

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
