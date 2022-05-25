import { createRouter, createWebHistory } from 'vue-router'
import Product from '@/views/Product'
import News from '@/views/News'
import Beauty from '@/views/Beauty'
// import Store from '@/views/Store'
import Contact from '@/views/contact'
import Login from '@/views/Login'
import Question from '@/views/question'
import store from '@/store'
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
        path: '/login',
        name: 'login',
        component: Login
    },
    {
        path: '/register',
        name: 'register',
        component: () =>
            import ('../views/Register')
    },
    {
        path: '/member',
        name: 'member',
        component: () =>
            import ('../views/Member')
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

//路由之前判斷
router.beforeEach((to,from,next)=>{
    //to:獲取要跳轉到那個路由訊息
    //from:獲取從拿來的路由訊息
    //next(path):放行
    let token = store.state.user.token;
    let name = store.state.user.userInfo.name;
    if(token){
        //以登入就不能再登入和註冊會跳轉到member
        if(to.path=='/login'||to.path=='/register'){
            next('/member')
        }else{
            next();
            //判斷登入名
            // if(name){
            //     next();
            // }else{
            //     抓不到名稱登出跳到登入頁
            // }
        }
    }else{
        //未登入
        next();
    }
})

export default router