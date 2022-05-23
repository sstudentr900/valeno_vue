import { createRouter, createWebHistory } from 'vue-router'
import Product from '@/views/Product'
import News from '@/views/News'
import Beauty from '@/views/Beauty'
// import Store from '@/views/Store'
import Contact from '@/views/contact'
import Member from '@/views/Member'
import Question from '@/views/question'

const routes = [{
        path: '/',
        name: 'home',
        component: () =>
            import ('../views/Home/index.vue')
    },
    {
        path: '/product/:keyword?',
        name: 'product',
        component: Product
    },
    {
        path: '/product_view/:id',
        name: 'product_view',
        component: () =>
            import ('../views/ProductView')
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
        path: '/news_view/:id',
        name: 'news_view',
        component: () =>
            import ('../views/newsView')
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
        path: '/member_register',
        name: 'member_register',
        component: () =>
            import ('../views/MemberRegister')
    },
    {
        path: '/question',
        name: 'question',
        component: Question
    },
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
    //滾動行為
    scrollBehavior(to,from,savePosition){
        if (to.hash) {
            const el = window.location.href.split("#")[1];
            if (el.length) {
                document.getElementById(el).scrollIntoView({ behavior: "smooth" });
            }
        } else if (savePosition) {
            return savePosition;
        } else {
            document.getElementById("app").scrollIntoView({ behavior: "smooth" });
        }
    }
})

export default router