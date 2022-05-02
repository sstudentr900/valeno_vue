import { storeReq } from '@/api';
const state = {
    storeData: {},
}
const mutations = {
    storeMu(state, list) {
        state.storeData = list
    }
}
const actions = {
    async storeAc({ commit }) {
        let result = await storeReq();
        if (result.data.code == 200) {
            commit('storeMu', result.data.data)
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