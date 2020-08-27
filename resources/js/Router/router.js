import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)
const routes = [
    { 
        path: '/',
        name:'home',
        component: ()=> import('../components/Page/Home') 
    },
    {
        path: '/shop',
        name:'shop',
        component: ()=> import('../components/Page/ShopArt')
    },
    {
        path: '/about',
        component: ()=> import('../components/Page/AboutUs')
    },
    {
        path: '/terms',
        component: ()=> import('../components/Page/Terms')
    },
    { 
        path: '/privacy',
        component: ()=> import('../components/Page/Privacy')
    },
    { 
        path: '/refund',
        component: ()=> import('../components/Page/Refund')
    },
    { 
        path: '/payment',
        component: ()=> import('../components/Page/Payment')
    },
    { 
        path: '/joinus',
        component: ()=> import('../components/Page/JoinUs')
    },
]

const router = new VueRouter({
    routes, // short for `routes: routes`
    hashbang : false,
    mode : 'history',
    scrollBehavior (to, from, savedPosition) {
        return {x:0,y:0};
    }
})


export default router;
