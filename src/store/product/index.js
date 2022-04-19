// import { reqHomeSlide } from '@/api';
const state = {
    nav: [
        { 'name': '臉部彩妝', 'id': 1, 'class_id': 0 ,'child':[
            {'name': '妝前修飾乳', 'id': 26, 'class_id': 1,'href':''},
            {'name': 'BB/CC霜', 'id': 27,'class_id': 1,'href':''},
            {'name': '氣墊式粉底', 'id': 28,'class_id': 1,'href':''},
            {'name': '遮瑕霜', 'id': 29,'class_id': 1,'href':''},
            {'name': '蜜粉', 'id': 30,'class_id': 1,'href':''},
            {'name': '腮紅 / 修容', 'id': 31,'class_id': 1,'href':''},
        ]},
        { 'name': '眼部彩妝', 'id': 2, 'class_id': 0 ,'child':[
            {'name': '妝前修飾乳', 'id': 7, 'class_id': 2,'href':''},
            {'name': 'BB/CC霜', 'id': 8, 'class_id': 2,'href':''},
            {'name': '氣墊式粉底', 'id': 9, 'class_id': 2,'href':''},
            {'name': '遮瑕霜', 'id': 10, 'class_id': 2,'href':''},
            {'name': '蜜粉', 'id': 11, 'class_id': 2,'href':''},
            {'name': '腮紅 / 修容', 'id': 12, 'class_id': 2,'href':''},
        ]},
        { 'name': '唇部彩妝', 'id': 3, 'class_id': 0 ,'child':[
            {'name': '妝前修飾乳', 'id': 13, 'class_id': 3,'href':''},
            {'name': 'BB/CC霜', 'id': 14, 'class_id': 3,'href':''},
            {'name': '氣墊式粉底', 'id': 15, 'class_id': 3,'href':''},
            {'name': '遮瑕霜', 'id': 16, 'class_id': 3,'href':''},
            {'name': '蜜粉', 'id': 17, 'class_id': 3,'href':''},
            {'name': '腮紅 / 修容', 'id': 18, 'class_id': 3,'href':''},
        ]},
        { 'name': '美髮保養', 'id': 4, 'class_id': 0 ,'child':[
            {'name': '妝前修飾乳', 'id': 20, 'class_id': 4,'href':''},
            {'name': 'BB/CC霜', 'id': 21, 'class_id': 4,'href':''},
            {'name': '氣墊式粉底', 'id': 22, 'class_id': 4,'href':''},
            {'name': '遮瑕霜', 'id': 23, 'class_id': 4,'href':''},
            {'name': '蜜粉', 'id': 24, 'class_id': 4,'href':''},
            {'name': '腮紅 / 修容', 'id': 25, 'class_id': 4,'href':''},
        ]},
        { 'name': '身體乳液', 'id': 5 , 'class_id': 0},
        { 'name': '其他', 'id': 6 , 'class_id': 0},
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