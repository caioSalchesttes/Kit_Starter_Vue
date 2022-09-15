import { createRouter, createWebHistory } from 'vue-router'
import BlankLayout from '@/layouts/blank.vue'
import HomePage from '@/views/home/router.js'
import AuthPage from '@/views/auth/router.js'
import { auth } from '@/services/api.js'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/:pathMatch(.*)*",
      name: "404",
      component: () => import("@/views/errors/404.vue"),
      meta: {
        layout: BlankLayout,
      },
    },
    ...HomePage,
    ...AuthPage,
  ]
})

router.beforeEach((to, from, next) => {
  if (to.meta.requireAuth) {
    if (localStorage.getItem("token")) {
      auth.get('/medico').then((response) => {
        next();
      }).catch((error) => {
        next("/login");
      });
    } else {
      next("/login");
    }
  } else {
    next();
  }
});

export default router
