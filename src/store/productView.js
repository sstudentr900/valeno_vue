import { productViewReq } from '@/api';
const state = {
    productViewData: {},
}
const mutations = {
    productViewMu(state, list) {
        state.productViewData = list
    },
}
const actions = {
    async productViewAc({ commit }, params = {}) {
        // console.log(params)
        let result = await productViewReq(params);
        if (result.data.code == 200) {
            commit('productViewMu', result.data.data)
        }
    },
}
const getters = {
    itemData(state){
        return state.productViewData.item||{}
    },
    linkListData(state){
        return state.productViewData.linkList||[]
    },
    recommendListData(state){
        return state.productViewData.recommendList||[]
    },
}
export default {
    namespaced: true,
    state,
    mutations,
    actions,
    getters,
}