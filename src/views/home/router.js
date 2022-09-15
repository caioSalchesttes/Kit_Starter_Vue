import AppLayout from '@/layouts/app.vue'

export default [
    {
        path: '/',
        name: 'home',
        component: () => import("@/views/home/index.vue"),
        meta: {
            layout: AppLayout,
            requireAuth: true
        }
    },
]