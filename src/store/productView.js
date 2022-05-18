import { productViewReq } from '@/api';
const state = {
    productViewData: {},
    addOrUpdateShopCartData: [],
}
const mutations = {
    productViewMu(state, list) {
        state.productViewData = list
    },
    addOrUpdateShopCartMu(state, list){
        state.addOrUpdateShopCartData.push(list)
    }
}
const actions = {
    async productViewAc({ commit }, params = {}) {
        // console.log(params)
        let result = await productViewReq(params);
        if (result.data.code == 200) {
            commit('productViewMu', result.data.data)
        }
    },
    async addOrUpdateShopCart({ commit },params = {}) {
        // console.log(params)
        // let result = await addOrUpdateShopCartReq(params);
        // console.log(result.data)
        // if (result.data.code == 200) {
        //     // commit('addOrUpdateShopCartMu', result.data.data)
        //     return 'ok';
        // }else{
        //     return Promise.reject(new Error('faile'));     
        // }
        commit('addOrUpdateShopCartMu',params)
    }
    

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