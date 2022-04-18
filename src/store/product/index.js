// import { reqHomeSlide } from '@/api';
const state = {
    nav: [
        { 'name': '臉部彩妝', 'id': 1 ,'child':[
            {'name': '妝前修飾乳', 'id': 1,'href':''},
            {'name': 'BB/CC霜', 'id': 2,'href':''},
            {'name': '氣墊式粉底', 'id': 3,'href':''},
            {'name': '遮瑕霜', 'id': 4,'href':''},
            {'name': '蜜粉', 'id': 5,'href':''},
            {'name': '腮紅 / 修容', 'id': 6,'href':''},
        ]},
        { 'name': '眼部彩妝', 'id': 2 ,'child':[
            {'name': '妝前修飾乳', 'id': 1,'href':''},
            {'name': 'BB/CC霜', 'id': 2,'href':''},
            {'name': '氣墊式粉底', 'id': 3,'href':''},
            {'name': '遮瑕霜', 'id': 4,'href':''},
            {'name': '蜜粉', 'id': 5,'href':''},
            {'name': '腮紅 / 修容', 'id': 6,'href':''},
        ]},
        { 'name': '唇部彩妝', 'id': 3 ,'child':[
            {'name': '妝前修飾乳', 'id': 1,'href':''},
            {'name': 'BB/CC霜', 'id': 2,'href':''},
            {'name': '氣墊式粉底', 'id': 3,'href':''},
            {'name': '遮瑕霜', 'id': 4,'href':''},
            {'name': '蜜粉', 'id': 5,'href':''},
            {'name': '腮紅 / 修容', 'id': 6,'href':''},
        ]},
        { 'name': '美髮保養', 'id': 4 ,'child':[
            {'name': '妝前修飾乳', 'id': 1,'href':''},
            {'name': 'BB/CC霜', 'id': 2,'href':''},
            {'name': '氣墊式粉底', 'id': 3,'href':''},
            {'name': '遮瑕霜', 'id': 4,'href':''},
            {'name': '蜜粉', 'id': 5,'href':''},
            {'name': '腮紅 / 修容', 'id': 6,'href':''},
        ]},
        { 'name': '身體乳液', 'id': 5 },
        { 'name': '其他', 'id': 6 },
    ],
}
const mutations = {
    // slideMu(state, list) {
    //     state.slideData = list
    // }
}
const actions = {
    // async slide({ commit }) {
    //     let result = await reqHomeSlide();
    //     if (result.status == 200) {
    //         commit('slideMu', result.data.list)
    //     }
    // }
}
const getters = {}
export default {
    namespaced: true,
    state,
    mutations,
    actions,
    getters,
}