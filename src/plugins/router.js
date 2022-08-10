import { createRouter, createWebHistory } from 'vue-router'
import Landing from '../views/Landing.vue'

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'Landing',
            component: Landing,
        },
        {
            path: '/info',
            name: 'Info',
            component: () => import('../views/Info.vue'),
        },
        {
            path: '/map',
            name: 'Map',
            component: () => import('../views/Map.vue'),
        },
    ],
    scrollBehavior(to, from, savedPosition) {
        if (to.name == 'Map')
            return { top: 0 }
    }
})

export default router
