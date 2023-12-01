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
                    path: '/ello',
                    name: 'homeview',
                    component: () => import('@/components/HomeView.vue')
                }
            ]
        }
    ]
});

export default router;
