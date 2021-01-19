import ProductService from '@/services/ProductService.js';

const state = () => ({
    products: null,
    product: null,
})

const mutations = {
    setProducts(state, products){
        state.products = products;
    },
    setProduct(state, product){
        state.product = product;
    }
}

const getters = {

}

const actions = {
    index({commit}){
        const products = ProductService.index({});
        products.then((response) => {
            commit('setProducts', response);
        }, console.error)
    },

    get({commit}, id){
        const product = ProductService.find(id);
        product.then((response) => {
            commit('setProduct', response);
        }, console.error)
    }

}

export default {
    namespaced: true,
    actions,
    getters,
    mutations,
    state
}