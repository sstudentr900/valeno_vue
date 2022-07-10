import { createStore } from 'vuex'
import home from "./home"
import product from "./product"
import productView from "./productView"
import shopCar from "./shopCar"
import news from "./news"
import beauty from "./beauty"
import store from "./store"
import user from "./user"
import register from "./register"
import contact from "./contact"
export default createStore({
    state: {},
    getters: {},
    mutations: {},
    actions: {},
    modules: {
        home,
        product,
        productView,
        shopCar,
        news,
        beauty,
        store,
        user,
        register,
        contact
    }
})