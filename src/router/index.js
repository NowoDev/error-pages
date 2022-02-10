import { createRouter, createWebHistory } from 'vue-router'
import Home from "../Pages/Home.vue"
import Error404 from "../Pages/404.vue"
import FirstPage from "../Pages/404/FirstPage.vue"
import NotFound from "../Pages/NotFound.vue"

const routes = [
    { path: '/', name: 'Home', component: Home },
    { path: '/404', name: '404', component: Error404 },
    { path: '/404/first', name: 'First', component: FirstPage },
    { path: '/:pathMatch(.*)', name: 'NotFound', component: NotFound }
]

const router = createRouter({
    history: createWebHistory(), routes,
})

export default router