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
            path: '/map',
            name: 'Map',
            component: () => import('../views/Map.vue'),
        },
        {
            path: '/project',
            name: 'Project',
            component: () => import('../views/Project.vue'),
        },
        {
            path: '/underground',
            name: 'Underground',
            component: () => import('../views/Underground.vue'),
        },
        {
            path: '/rodniki',
            name: 'Rodniki',
            component: () => import('../views/Rodniki.vue'),
        },
        {
            path: '/krai',
            name: 'Krai',
            component: () => import('../views/Krai.vue'),
        },
    ],
    scrollBehavior(to, from, savedPosition) {
        if (!(to.name == 'Landing'))
            return { top: 0 }
        else return savedPosition
    }
})

export default router
