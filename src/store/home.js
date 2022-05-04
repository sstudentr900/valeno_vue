import { reqHome } from '@/api';
const state = {
    home: {},
    homeProductList: []
}
const mutations = {
    homeMu(state, list) {
        //console.log(list)
        state.home = list
        state.homeProductList = list['productList']
    }
}
const actions = {
    async home({ commit }) {
        let result = await reqHome();
        if (result.data.code == 200) {
            // console.log(result.data.data)
            commit('homeMu', result.data.data)
        }
    }
}
const getters = {
    homeProductListRight(state) {
        return state.homeProductList.filter((item, index) => index < 4)
            // return state.homeProductList.filter(function(item, index, array){
            //     return index < 4
            // })
    },
    homeProductListBottom(state) {
        return state.homeProductList.filter((item, index) => index > 3)
            // return state.homeProductList.filter(function(item, index, array) {
            //     return index >3
            // });
    },
}
export default {
    namespaced: true,
    state,
    mutations,
    actions,
    getters,
}