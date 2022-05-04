import { createRouter, createWebHistory } from 'vue-router'
import Product from '@/views/Product'
import News from '@/views/News'
import Beauty from '@/views/Beauty'
// import Store from '@/views/Store'
import Contact from '@/views/contact'
import Member from '@/views/member'
import Question from '@/views/question'

const routes = [{
        path: '/',
        name: 'home',
        component: () =>
            import ('../views/Home/index.vue')
    },
    {
        path: '/product/:id?',
        name: 'product',
        component: Product
    },
    {
        path: '/product_view/:id?',
        name: 'product_view',
        component: () =>
            import ('../views/ProductView.vue')
    },
    // {
    //     path: '/search/:keyword',
    //     name: 'news',
    //     component: News
    // },
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
    // {
    //     path: '/store',
    //     name: 'store',
    //     component: Store
    // },
    {
        path: '/contact',
        name: 'contact',
        component: Contact
    },
    {
        path: '/member',
        name: 'member',
        component: Member
    },
    {
        path: '/question',
        name: 'question',
        component: Question
    },
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router