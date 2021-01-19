import Vue from 'vue'
import Vuex from 'vuex'
import user from './modules/user';
import store from './modules/store';
import collection from './modules/collection';
import product from './modules/product';

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        busy: false,
    },
    getters:{
        user(state){
            return state.user;
        }
    },
    mutations: {

    },
    actions: {
    },
    modules: {
        user,
        store,
        collection,
        product
    }
})
