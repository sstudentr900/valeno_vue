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
            import ('../views/Member'),
        children: [{
                path: 'info',
                component: () =>
                    import ('@/views/Member/info'),
            },
            {
                path: 'changePassword',
                component: () =>
                    import ('@/views/Member/changePassword'),
            },
            {
                path: 'orderList',
                component: () =>
                    import ('@/views/Member/orderList'),
            },
            {
                path: 'coupon',
                component: () =>
                    import ('@/views/Member/coupon'),
            },
            {
                //沒有指定二級自動轉向
                path: '/member',
                redirect: '/member/info' //跳轉
            },
        ]
    },
    {
        path: '/cart',
        name: 'cart',
        component: () =>
            import ('@/views/Cart'),

    },
    {
        path: '/cartFill',
        name: 'cartFill',
        component: () =>
            import ('@/views/CartFill'),
            beforeEnter(to,from,next){
                //必須由cart頁進來
                // console.log(to.path)
                // console.log(from.path)
                if(from.path == '/cart'){
                    next();
                }else{
                    //停留在當頁
                    next(from.path);
                    
                }
            }
    },
    {
        path: '/cartFinish',
        name: 'cartFinish',
        component: () =>
            import ('@/views/CartFinish'),
            beforeEnter(to,from,next){
                if(from.path == '/cartFill'){
                    next();
                }else{
                    //停留在當頁
                    next(from.path);
                    
                }
            }
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
    scrollBehavior(to, from, savePosition) {
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
router.beforeEach((to, from, next) => {
    //to:獲取要跳轉到那個路由訊息
    //from:獲取從拿來的路由訊息
    //next(path):放行
    let token = store.state.user.token;
    let name = store.state.user.userInfo.name;

    if (token) {
        //有登入就不能再登入和註冊會跳轉到member
        if (to.path == '/login' || to.path == '/register') {
            next('/member/info')
        } else {
            next();
            //判斷登入名
            // if(name){
            //     next();
            // }else{
            //     抓不到名稱登出跳到登入頁
            // }
        }
    } else {
        //未登入
        let toPath = to.path;
        if(toPath.indexOf('/member')!=-1){
            next('/');
        }
        next();
    }
})

export default router