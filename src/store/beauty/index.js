import { beautyReq } from '@/api';
const state = {
    beautyData: {},
}
const mutations = {
    beautyMu(state, list) {
        state.beautyData = list
    }
}
const actions = {
    async beautyAc({ commit },params={}) {
        let result = await beautyReq(params);
        if (result.data.code == 200) {
            commit('beautyMu', result.data.data)
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