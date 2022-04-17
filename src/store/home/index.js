import { reqHomeSlide } from '@/api';
const state = {
    slideData: [
        { 'image': 'ban1.jpg', 'id': 1 },
        { 'image': 'ban2.jpg', 'id': 2 },
        { 'image': 'ban1.jpg', 'id': 3 }
    ],
}
const mutations = {
    slideMu(state, list) {
        state.slideData = list
    }
}
const actions = {
    async slide({ commit }) {
        let result = await reqHomeSlide();
        if (result.status == 200) {
            commit('slideMu', result.data.list)
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