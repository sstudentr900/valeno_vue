import { productListReq, productReq } from '@/api';
const state = {
    productData: {},
    productListData: {},
}
const mutations = {
    productMu(state, list) {
        state.productData = list
    },
    productListMu(state, list) {
        state.productListData = list
    }
}
const actions = {
    async productAc({ commit }) {
        let result = await productReq();
        if (result.data.code == 200) {
            commit('productMu', result.data.data)
        }
    },
    async productListAc({ commit }, params = {}) {
        // console.log(params)
        let result = await productListReq(params);
        // console.log(result)
        if (result.data.code == 200) {
            commit('productListMu', result.data.data)
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