import Vue from 'vue'
import Router from 'vue-router'
import Index from './views/index.vue'
import mainContent from './components/main-content.vue'

Vue.use(Router);

export default new Router({
    routes: [
        {
            path: '/',
            /*重定向*/
            redirect: '/index/mainContent'
        },
        {
            path: '/index',
            name: 'index',
            component: Index,
            children: [
                {
                    path: 'mainContent',
                    name:'mainContent',
                    components:{
                        mainArea:mainContent
                    }
                }
            ]
        }
    ]
})
