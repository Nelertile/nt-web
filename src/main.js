import { createApp } from 'vue'
import {createRouter, createWebHistory} from 'vue-router'
import App from './App.vue'
import Home from './views/Home.vue'
import Contacts from './views/Contacts.vue'
import Software from './views/Software.vue'

const router = createRouter({
    history: createWebHistory(),
    routes: [{
        path: '/',
        name: 'home',
        component: Home
    },{
        path: '/contacts',
        name: 'contacts',
        component: Contacts
    },{
        path: '/software',
        name: 'software',
        component: Software
    }
        ]})

createApp(App)
.use(router)
.mount('#app')