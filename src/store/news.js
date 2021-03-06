import { newsReq } from '@/api';
const state = {
    newsData: {},
}
const mutations = {
    newsMu(state, list) {
        state.newsData = list
    }
}
const actions = {
    async newsAc({ commit },params={}) {
        let result = await newsReq(params);
        if (result.data.code == 200) {
            commit('newsMu', result.data.data)
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