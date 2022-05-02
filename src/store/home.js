// import { reqHomeSlide,reqHomeAd } from '@/api';
import { reqHome } from '@/api';
const state = {
    // slide: [
    //     // { 'image': 'ban1.jpg', 'id': 1 },
    //     // { 'image': 'ban2.jpg', 'id': 2 },
    //     // { 'image': 'ban1.jpg', 'id': 3 }
    // ],
    // ad: [],
    home: {},
}
const mutations = {
    // slideMu(state, list) {
    //     state.slide = list
    // },
    // adMu(state, list) {
    //     state.ad = list
    // }
    homeMu(state, list) {
        //console.log(list)
        state.home = list
    }
}
const actions = {
    // async slide({ commit }) {
    //     let result = await reqHomeSlide();
    //     if (result.data.code == 200) {
    //         commit('slideMu', result.data.data)
    //     }
    // },
    // async ad({ commit }) {
    //     let result = await reqHomeAd();
    //     if (result.data.code == 200) {
    //         commit('adMu', result.data.data)
    //     }
    // },
    async home({ commit }) {
        let result = await reqHome();
        if (result.data.code == 200) {
            // console.log(result.data.data)
            commit('homeMu', result.data.data)
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