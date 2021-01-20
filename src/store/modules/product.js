import ProductService from '@/services/ProductService.js';

const state = () => ({
    products: null,
    product: null,
    error: null,
})

const mutations = {
    setProducts(state, products){
        state.products = products;
    },
    setProduct(state, product){
        state.product = product;
    },
    setError(state, error){
        state.error = error;
    }
}

const getters = {
    productError: state =>{
        return state.error;
    },
    product: state => {
        return state.product;
    }
}

const actions = {
    index({commit}){
        const products = ProductService.index({});
        products.then((response) => {
            commit('setProducts', response);
        }, console.error)
    },

    get({commit}, id){
        const product = ProductService.getById(id);
        product.then((response) => {
            commit('setProduct', response);
        }, console.error)
    },

    save({commit}, form){
        return form.post('/products', {
                step: 'save'
            }).then(res => {
                let data = res.data;
                commit('setProduct', data);
            }).catch(err => {
                commit('setError', err);
            })
    }

}

export default {
    namespaced: true,
    actions,
    getters,
    mutations,
    state
}