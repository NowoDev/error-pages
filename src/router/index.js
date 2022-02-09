import { createRouter, createWebHistory } from 'vue-router'
import Home from "../Pages/Home.vue"
import FirstPage from "../Pages/404/FirstPage.vue"

const routes = [
    { path: '/', name: 'Home', component: Home },
    { path: '/404/first', name: 'First', component: FirstPage }
]

const router = createRouter({
    history: createWebHistory(), routes,
})

export default router