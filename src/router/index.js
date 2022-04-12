import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/Home'
import Product from '@/views/Product'
import News from '@/views/News'
import Beauty from '@/views/Beauty'
import Store from '@/views/Store'
import Contact from '@/views/Contact'

const routes = [{
        path: '/',
        name: 'home',
        component: Home
    },
    {
        path: '/product',
        name: 'product',
        component: Product
    },
    {
        path: '/news',
        name: 'news',
        component: News
    },
    {
        path: '/beauty',
        name: 'beauty',
        component: Beauty
    },
    {
        path: '/store',
        name: 'store',
        component: Store
    },
    {
        path: '/contact',
        name: 'contact',
        component: Contact
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