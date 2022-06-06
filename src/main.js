import { createApp } from 'vue'
import App from './App.vue'

createApp(App).mount('#app')

const router = new VueRouter({
    mode: "history"
});