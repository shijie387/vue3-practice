import {createRouter,createWebHashHistory} from 'vue-router'

import Home from '../components/Home.vue'
import Add from '../components/Add.vue'
import List from '../components/List.vue'
import Update from '../components/Update.vue'

const router = createRouter({
    history:createWebHashHistory(),
    routes:[
        {
            path:"/home",
            component:Home
        },
        {
            path:"/add",
            component:Add
        },
        {
            path:"/list",
            component:List
        },
        {
            path:"/Update",
            component:Update
        },
        {
            path:"/", 
            component:Home
        },
        {
            path:"/showAll",
            redirect:"/list"
        }
    ]
})

export default router