// import { productViewReq } from '@/api';
const state = {
    shopCarList: JSON.parse(sessionStorage.getItem('shopCarList'))||[],
    shopCarInfo: JSON.parse(sessionStorage.getItem('shopCarInfo'))||[],
}
const mutations = {
    shopCarAddMu(state, list){
        let concatIf = true;
        if (sessionStorage.getItem('shopCar')) {
            let shopCarArry = JSON.parse(sessionStorage.getItem('shopCar')).map((el)=>{
                if(el['id']==list[0]['id']){
                    el['skuNum'] += list[0]['skuNum'];
                    concatIf = false
                }
                return el
            })
            if(concatIf){
                list = shopCarArry.concat(list);
            }else{
                list = shopCarArry;
            }
        }
        sessionStorage.setItem('shopCar', JSON.stringify(list));
        state.shopCarList = list;
    },
    shopCarDeletMu(state, index){
        let shopCarArry = JSON.parse(sessionStorage.getItem('shopCar'));
        shopCarArry.splice(index, 1);
        sessionStorage.setItem('shopCar', JSON.stringify(shopCarArry));
        state.shopCarList = shopCarArry;
    }
}
const actions = {
    async shopCarAdd({ commit },params = []) {
        // console.log(params)
        // let result = await addOrUpdateShopCartReq(params);
        // console.log(result.data)
        // if (result.data.code == 200) {
        //     // commit('addOrUpdateShopCartMu', result.data.data)
        //     return 'ok';
        // }else{
        //     return Promise.reject(new Error('faile'));     
        // }
        commit('shopCarAddMu',params)
    },
    async shopCarDelet({ commit },params) {
        commit('shopCarDeletMu',params)
    }
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