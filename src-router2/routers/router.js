import {createRouter,createWebHashHistory} from 'vue-router'

import Login from '../components/Login.vue'
import Home from '../components/Home.vue'

const router = createRouter({
    history:createWebHashHistory(),
    routes:[
        {
            path:'/home',
            component:Home
        },
        {
            path:'/login',
            component:Login
        },
    ]
})


router.beforeEach((to, from, next)=>{
    if(to.path == '/login'){
        next()
    }else{
        const username = sessionStorage.getItem("username")
        if(username != null){
            next()
        }else{
            next('/login')
        }
    }
})


export default router