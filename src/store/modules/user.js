
const state = () => ({
    auth: false,
    user: null,
    error: {},
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
            
            if(Object.prototype.hasOwnProperty.call(response, "data") ){
                commit('setAuthenticatedUser', response.data);
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