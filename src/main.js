import { createApp } from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import Home from './views/Home.vue'
import Contacts from './views/Contacts.vue'

const router = new VueRouter({
    mode: 'history',
    routes: [{
        path: '/',
        name: 'home',
        component: Home
    },{
        path: '/contacts',
        name: 'contacts',
        component: Contacts
    }
        ]})

createApp(App)
.use(router)
.mount('#app')