import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [{
        path: '/',
        name: 'home',
        component: HomeView
    },
    {
        path: '/product',
        name: 'product',
        component: () =>
            import ('../views/ProductView.vue')
    },
    {
        path: '/news',
        name: 'news',
        component: () =>
            import ('../views/NewsView.vue')
    },
    {
        path: '/beauty',
        name: 'beauty',
        component: () =>
            import ('../views/BeautyView.vue')
    },
    {
        path: '/store',
        name: 'store',
        component: () =>
            import ('../views/StoreView.vue')
    },
    {
        path: '/contact',
        name: 'contact',
        component: () =>
            import ('../views/ContactView.vue')
    },
    {
        path: '/member',
        name: 'member',
        component: () =>
            import ('../views/MemberView.vue')
    },
    {
        path: '/question',
        name: 'question',
        component: () =>
            import ('../views/QuestionView.vue')
    },
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router