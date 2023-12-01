import { createRouter, createWebHashHistory } from 'vue-router';
import AppLayout from '@/layout/AppLayout.vue';

const router = createRouter({
    history: createWebHashHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            component: AppLayout,
            children: [
                {
                    path: '/',
                    name: 'homeview',
                    component: () => import('@/components/HomeView.vue')
                },
                {
                    path: '/about',
                    name: 'about',
                    component: () => import('@/components/AboutView.vue')
                }
            ]
        }
    ]
});

export default router;
