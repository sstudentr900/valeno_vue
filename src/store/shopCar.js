// import { productViewReq } from '@/api';
const state = {
    shopCarList: JSON.parse(sessionStorage.getItem('shopCarList')) || [],
    shopCarInfo: JSON.parse(sessionStorage.getItem('shopCarInfo')) || [],
}
const mutations = {
    skuDeletMu(state, { index, name }) {
        let shopCarArry = JSON.parse(sessionStorage.getItem(name));
        shopCarArry.splice(index, 1);
        sessionStorage.setItem(name, JSON.stringify(shopCarArry));
        state[name] = shopCarArry;
    },
    listAddMu(state, list) {
        let dataName = 'shopCarList';
        let shopCarArry = [list];
        if (sessionStorage.getItem(dataName)) {
            shopCarArry = JSON.parse(sessionStorage.getItem(dataName));
            shopCarArry.forEach(el => {
                // console.log(el['id'], list['id'], el['specification']['specIndex'], list)
                if (el['id'] == list['id'] && el['specification']['specIndex'] == list['specification']['specIndex']) {
                    el['skuNum'] += +list['skuNum'];
                    list = [];
                }
            })
            shopCarArry = shopCarArry.concat(list);
        }
        sessionStorage.setItem(dataName, JSON.stringify(shopCarArry));
        state[dataName] = shopCarArry;
    },
    listUpdataNumMu(state, list) {
        let shopCarArry = JSON.parse(sessionStorage.getItem('shopCarList'));
        shopCarArry.forEach(el => {
            if (el['id'] == list['id'] && el['specification']['specIndex'] == list['specIndex']) {
                el['skuNum'] += list['num']
            }
        })
        sessionStorage.setItem('shopCarList', JSON.stringify(shopCarArry));
        state.shopCarList = shopCarArry;
    },
    listCheckMu(state, list) {
        let shopCarArry = JSON.parse(sessionStorage.getItem('shopCarList'));
        shopCarArry[list.index]['isChecked'] = list.checked ? 1 : 0;
        sessionStorage.setItem('shopCarList', JSON.stringify(shopCarArry));
        state.shopCarList = shopCarArry;
    },
    listCheckAllMu(state, list) {
        let shopCarArry = JSON.parse(sessionStorage.getItem('shopCarList'));
        shopCarArry.map(el => el['isChecked'] = list.checked ? 1 : 0);
        sessionStorage.setItem('shopCarList', JSON.stringify(shopCarArry));
        state.shopCarList = shopCarArry;
    },
    listCheckDeletMu(state) {
        let shopCarArry = JSON.parse(sessionStorage.getItem('shopCarList'));
        shopCarArry = shopCarArry.filter(el => el['isChecked'] === 0)
        sessionStorage.setItem('shopCarList', JSON.stringify(shopCarArry));
        state.shopCarList = shopCarArry;
    },
    infoCopyMu(state) {
        let listArry = JSON.parse(sessionStorage.getItem('shopCarList')) || [];
        let infoArry = JSON.parse(sessionStorage.getItem('shopCarInfo')) || [];
        listArry.forEach((listEl, index) => {
            if (listEl['isChecked'] === 1) {
                infoArry = infoArry.filter(el => listEl['id'] != el['id']);
                listArry[index]['isChecked'] = 0;
            }
        })
        infoArry = infoArry.concat(listArry)
        sessionStorage.setItem('shopCarInfo', JSON.stringify(infoArry));
        sessionStorage.setItem('shopCarList', JSON.stringify(listArry));
        state.shopCarInfo = infoArry;
        state.shopCarList = listArry;
    },
    // infoCopyMu(state) {
    //     let istArry = JSON.parse(sessionStorage.getItem('shopCarList')) || [];
    //     let infoArry = JSON.parse(sessionStorage.getItem('shopCarInfo')) || [];
    //     istArry.forEach(listEl => {
    //         infoArry = infoArry.filter(el => listEl['id'] != el['id'])
    //     })
    //     infoArry = infoArry.concat(istArry)
    //     sessionStorage.setItem('shopCarInfo', JSON.stringify(infoArry));
    //     state.shopCarInfo = infoArry;
    // },
    infoAddMu(state, list) {
        let infoArry = JSON.parse(sessionStorage.getItem('shopCarInfo')) || [];
        if (!infoArry.some(el => el['id'] == list['id'])) {
            infoArry = infoArry.concat(list)
        }
        sessionStorage.setItem('shopCarInfo', JSON.stringify(infoArry));
        state.shopCarInfo = infoArry;
    }
}
const actions = {
    // skuDelet({ commit }, params) {
    //     commit('skuDeletMu', params)
    // },
    // listAdd({ commit }, params = []) {
    //     commit('listAddMu', params)
    // },
    // listUpdataNum({ commit }, params) {
    //     commit('listUpdataNumMu', params)
    // },
    // listCheck({ commit }, params) {
    //     commit('listCheckMu', params)
    // },
    // infoAdd({ commit }, params) {
    //     commit('infoAddMu', params)
    // },
    // infoCopy({ commit }, params) {
    //     commit('infoCopyMu', params)
    // }
}
const getters = {
    // itemData(state){
    //     return state.productViewData.item||{}
    // },
    // linkListData(state){
    //     return state.productViewData.linkList||[]
    // },
    // recommendListData(state){
    //     return state.productViewData.recommendList||[]
    // },
}
export default {
    namespaced: true,
    state,
    mutations,
    actions,
    getters,
}