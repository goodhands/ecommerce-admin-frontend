import router from "../../router/index";

const state = () => ({
    auth: false,
    user: null,
})

const mutations = {
    setAuthStatus(state, status){
        state.auth = status;
    },
    setAuthenticatedUser(state, user){
        state.user = user;
    },
    setAuthenticationError(state, error){
        state.error = error;
    }
}

const getters = {

    // email: (state, getters, rootState) => {
    //     return state.email;
    // }
}

const actions = {
    login({commit, rootState}, user){
        //inform the global state we are doing some asynchronous action
        rootState.busy = true;

        user.login().then( (response) => {
            rootState.busy = false;
            
            //init localstorage
            const localStorage = window.localStorage;

            if(Object.prototype.hasOwnProperty.call(response, "user") ){
                router.push({name: 'Overview'});

                //store some items in local storage
                localStorage.setItem('auth', true);
                localStorage.setItem('user', JSON.stringify(response.user));
                localStorage.setItem('store', JSON.stringify(response.store));

                //commit changes to the store
                commit('setAuthStatus', true);
                commit('setAuthenticatedUser', response.user);
                commit('store/setStore', response.store, {root: true});
            }

        }).catch(error => {
            rootState.busy = false;

            //if the error is not auth error, log it bugsnap or something
            console.log(error.response);
        })
    }
}

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}