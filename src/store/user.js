import { userCode, register, login } from '@/api';
const state = {
    codeNumber: '',
    userInfo: {},
    token: localStorage.getItem('token'),
}
const mutations = {
    getCodeMu(state, list) {
        state.codeNumber = list
    },
    loginMu(state, list) {
        state.userInfo = list;
        state.token = list.token;
        localStorage.setItem('token', list.token)
    },
    //signOut
    signOutMu(state) {
        state.userInfo = {};
        state.token = '';
        localStorage.removeItem('token');
    }
}
const actions = {
    async getCode({ commit }, params = {}) {
        let result = await userCode(params);
        if (result.data.code == 200) {
            commit('getCodeMu', result.data.codeNumber)
            return Promise.resolve('ok');
        } else {
            return Promise.reject(new Error('faile'))
        }
    },
    //register
    async register({ commit }, params = {}) {
        let result = await register(params);
        if (result.data.code == 200) {
            return Promise.resolve('ok');
        } else {
            return Promise.reject(new Error('faile'));
        }
    },
    //login 
    async login({ commit }, params = {}) {
        let result = await login(params);
        if (result.data.code == 200) {
            //存到store
            commit('loginMu', result.data.data);
            return Promise.resolve('ok');
        } else {
            return Promise.reject(new Error('faile'))
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