import { createApp } from 'vue'
import {createRouter, createWebHistory} from 'vue-router'
import App from './App.vue'
import Home from './views/Home.vue'
import Contacts from './views/Contacts.vue'
import Software from './views/Software.vue'
import Posts from './views/Posts.vue'

import Post01 from './views/posts/01.vue'
import Post02 from './views/posts/02.vue'

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
    },{
        path: '/community-posts',
        name: 'community-posts',
        component: Posts
    },{
        path: '/posts',
        redirect: 'community-posts'
    },{
        path: '/community-posts/new-website',
        name: 'post-01',
        component: Post01
    },{
        path: '/posts/01',
        redirect: '/community-posts/new-website'
    },{
        path: '/posts/02',
        redirect: '/community-posts/future-of-nottoxic'
    },{
        path: '/community-posts/future-of-nottoxic',
        name: 'post-02',
        component: Post02
    }
        ]})

createApp(App)
.use(router)
.mount('#app')