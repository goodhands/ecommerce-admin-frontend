import Vue from 'vue'
import App from './App.vue'
import axios from 'axios';
import './main.css';
import router from './router'
import { Model } from 'vue-api-query'

Vue.config.productionTip = false

// inject global axios instance as http client to Model
Model.$http = axios

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
  inserted: function(el, binding){
    if(!binding.value) return;
    el.innerText = money.format(binding.value);
  },
  update: function(el, binding){
    if(!binding.value) return;
    el.innerText = money.format(binding.value);
  }
});

Vue.filter('money', function(value){
  return money.format(value);
})

Vue.filter('money', function(value){
  return money.format(value);
})

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
