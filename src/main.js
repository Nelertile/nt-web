import { createApp } from 'vue'
import {createRouter, createWebHistory} from 'vue-router'
import App from './App.vue'
import Home from './views/Home.vue'
import Contacts from './views/Contacts.vue'

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
    }
        ]})

createApp(App)
.use(router)
.mount('#app')