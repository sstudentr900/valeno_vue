import { contactSend } from '@/api';
const state = {}
const mutations = {}
const actions = {
    //register
    async send({ commit }, params = {}) {
        // let result = await contactSend(params);
        // if (result.data.code == 200) {
        //     return Promise.resolve('ok');
        // } else {
        //     return Promise.reject(new Error('faile'));
        // }
        return Promise.resolve('ok');
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