import { reqProduct } from '@/api';
const state = {
    productData: {},
}
const mutations = {
    productMu(state, list) {
        state.productData = list
    }
}
const actions = {
    async productAc({ commit }) {
        let result = await reqProduct();
        if (result.data.code == 200) {
            commit('productMu', result.data.data)
        }
    }
}
const getters = {

}
export default {
    namespaced: true,
    state,
    mutations,
    actions,
    getters,
}