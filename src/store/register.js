import { registerDistricts } from '@/api';
const state = {
    districts: [],
}
const mutations = {
    districtsMu(state, list) {
        state.districts = list;
    }
}
const actions = {
    //register
    async districtsAc({ commit }, params = {}) {
        let result = await registerDistricts(params);
        if (result.data.code == 200) {
            commit('districtsMu', result.data.data)
        }
    },
}
const getters = {}
export default {
    namespaced: true,
    state,
    mutations,
    actions,
    getters,
}