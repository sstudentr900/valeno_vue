import { userCode,registerSubmit } from '@/api';
const state = {
    codeNumber: '',
    userData: [],
}
const mutations = {
    getCodeMu(state, list) {
        state.codeNumber = list
    },
    registerSubmitMu(state,list){
        state.userData.push(list)
    }
}
const actions = {
    async getCode({ commit }, params={}) {
        let result = await userCode(params);
        if(result.data.code==200){
            commit('getCodeMu', result.data.codeNumber)
            return 'ok';
        }else{
            return Promise.reject(new Error('faile'))
        }
    },
    async registerSubmit({commit},params={}){
        let result = await registerSubmit(params);
        if(result.data.code==200){
            commit('registerSubmitMu',params);
            return 'ok';
        }else{
            return Promise.reject(new Error('faile'));
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