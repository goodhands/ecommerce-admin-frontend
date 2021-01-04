import Vue from 'vue';
import money from '../config/money';

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