import Vue from 'vue'
import Vuex from 'vuex'
import user from './modules/user';
import store from './modules/store';

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
        store
    }
})
