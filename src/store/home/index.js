import { reqHomeSlide,reqHomeAd } from '@/api';
const state = {
    slide: [
        // { 'image': 'ban1.jpg', 'id': 1 },
        // { 'image': 'ban2.jpg', 'id': 2 },
        // { 'image': 'ban1.jpg', 'id': 3 }
    ],
    ad: [],
}
const mutations = {
    slideMu(state, list) {
        state.slide = list
    },
    adMu(state, list) {
        state.ad = list
    }
}
const actions = {
    async slide({ commit }) {
        let result = await reqHomeSlide();
        if (result.data.code == 200) {
            commit('slideMu', result.data.data)
        }
    },
    async ad({ commit }) {
        let result = await reqHomeAd();
        if (result.data.code == 200) {
            commit('adMu', result.data.data)
        }
    }
}
const getters = {}
export default {
    namespaced: true,
    state,
    mutations,
    actions,
    getters,
}