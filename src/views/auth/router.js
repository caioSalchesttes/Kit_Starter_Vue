import AuthLayout from '@/layouts/auth.vue'

export default [
    {
        path: '/login',
        name: 'login',
        component: () => import("@/views/auth/login.vue"),
        meta: {
            layout: AuthLayout,
            requireAuth: false
        }
    },
    {
        path: '/register',
        name: 'register',
        component: () => import("@/views/auth/register.vue"),
        meta: {
            layout: AuthLayout,
            requireAuth: false
        }
    },
]