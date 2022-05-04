import { createStore } from 'vuex'
import home from "./home"
import product from "./product"
import productView from "./productView"
import news from "./news"
import beauty from "./beauty"
import store from "./store"
export default createStore({
    state: {},
    getters: {},
    mutations: {},
    actions: {},
    modules: {
        home,
        product,
        productView,
        news,
        beauty,
        store
    }
})