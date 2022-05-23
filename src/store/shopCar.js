// import { productViewReq } from '@/api';
const state = {
    shopCarList: JSON.parse(sessionStorage.getItem('shopCarList')) || [],
    shopCarInfo: JSON.parse(sessionStorage.getItem('shopCarInfo')) || [],
}
const mutations = {
    setSession(state,list){
        sessionStorage.setItem(list.name, JSON.stringify(list.data));
        state[list.name] = list.data;
    },
    skuDeletMu(state, { index, name }) {
        let shopCarArry = state[name];
        shopCarArry.splice(index, 1);
        this.commit("shopCar/setSession",{name:name,data:shopCarArry});
    },
    listAddMu(state, list) {
        let dataName = 'shopCarList';
        let shopCarArry = [list];
        if (sessionStorage.getItem(dataName)) {
            // shopCarArry = JSON.parse(sessionStorage.getItem(dataName));
            shopCarArry = state[dataName];
            shopCarArry.forEach(el => {
                // console.log(el['id'], list['id'], el['specification']['specIndex'], list)
                if (el['id'] == list['id'] && el['specification']['specIndex'] == list['specification']['specIndex']) {
                    el['skuNum'] += +list['skuNum'];
                    list = [];
                }
            })
            shopCarArry = shopCarArry.concat(list);
        }
        // sessionStorage.setItem(dataName, JSON.stringify(shopCarArry));
        // state[dataName] = shopCarArry;
        this.commit("shopCar/setSession",{name:dataName,data:shopCarArry});
    },
    listUpdataNumMu(state, list) {
        let dataName = 'shopCarList';
        // let shopCarArry = JSON.parse(sessionStorage.getItem(dataName));
        let shopCarArry = state[dataName];
        shopCarArry.forEach(el => {
            if (el['id'] == list['id'] && el['specification']['specIndex'] == list['specIndex']) {
                el['skuNum'] += list['num']
            }
        })
        // sessionStorage.setItem('shopCarList', JSON.stringify(shopCarArry));
        // state.shopCarList = shopCarArry;
        this.commit("shopCar/setSession",{name:dataName,data:shopCarArry});
    },
    listCheckMu(state, list) {
        let dataName = 'shopCarList';
        // let shopCarArry = JSON.parse(sessionStorage.getItem(dataName));
        let shopCarArry = state[dataName];
        shopCarArry[list.index]['isChecked'] = list.checked ? 1 : 0;
        // sessionStorage.setItem('shopCarList', JSON.stringify(shopCarArry));
        // state.shopCarList = shopCarArry;
        this.commit("shopCar/setSession",{name:dataName,data:shopCarArry});
    },
    listCheckAllMu(state, list) {
        let dataName = 'shopCarList';
        // let shopCarArry = JSON.parse(sessionStorage.getItem(dataName));
        let shopCarArry = state[dataName];
        shopCarArry.map(el => el['isChecked'] = list.checked ? 1 : 0);
        // sessionStorage.setItem('shopCarList', JSON.stringify(shopCarArry));
        // state.shopCarList = shopCarArry;
        this.commit("shopCar/setSession",{name:dataName,data:shopCarArry});
    },
    listCheckDeletMu(state) {
        let dataName = 'shopCarList';
        let shopCarArry = state[dataName];
        // let shopCarArry = JSON.parse(sessionStorage.getItem('shopCarList'));
        shopCarArry = shopCarArry.filter(el => el['isChecked'] === 0)
        // sessionStorage.setItem('shopCarList', JSON.stringify(shopCarArry));
        // state.shopCarList = shopCarArry;
        this.commit("shopCar/setSession",{name:dataName,data:shopCarArry});
    },
    infoCopyMu(state) {
        let dataNameList = 'shopCarList';
        let dataNameInfo = 'shopCarInfo';
        // let listArry = JSON.parse(sessionStorage.getItem('shopCarList')) || [];
        // let infoArry = JSON.parse(sessionStorage.getItem('shopCarInfo')) || [];
        let listArry = state[dataNameList];
        let infoArry = state[dataNameInfo];
        listArry.forEach((listEl, index) => {
            //判斷list選取
            if (listEl['isChecked'] === 1) {
                //判斷info有無重複
                infoArry = infoArry.filter(el => listEl['id'] != el['id']);
                infoArry = infoArry.concat(listEl);
                // sessionStorage.setItem('shopCarInfo', JSON.stringify(infoArry));
                // state.shopCarInfo = infoArry;
                this.commit("shopCar/setSession",{name:dataNameInfo,data:infoArry});
                listArry[index]['isChecked'] = 0;
            }
        })
        this.commit("shopCar/setSession",{name:dataNameList,data:listArry});
        // sessionStorage.setItem('shopCarList', JSON.stringify(listArry));
        // state.shopCarList = listArry;
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
        let dataName = 'shopCarInfo';
        let infoArry = state[dataName];
        // let infoArry = JSON.parse(sessionStorage.getItem('shopCarInfo')) || [];
        //記錄到5個
        if(infoArry.length>5)return;
        //查找info沒有該ID
        if (!infoArry.some(el => el['id'] == list['id'])) {
            infoArry = infoArry.concat(list);
        }
        // sessionStorage.setItem('shopCarInfo', JSON.stringify(infoArry));
        // state.shopCarInfo = infoArry;
        this.commit("shopCar/setSession",{name:dataName,data:infoArry});
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