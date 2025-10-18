import { createRouter, createWebHashHistory } from 'vue-router'

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/index',
      name: 'first',
      component: () => import('../views/FirstView.vue'),
    },
    {
      path: '/second',
      name: 'second',
      component: () => import('../views/SecondView.vue'),
    },
    {
      path: '/third',
      name: 'third',
      component: () => import('../views/ThirdView.vue'),
    },
    {
      path: '/fourth',
      name: 'fourth',
      component: () => import('../views/FourthView.vue'),
    },
    {
      path: '/fifth',
      name: 'fifth',
      component: () => import('../views/FifthView.vue'),
    },
  ],
})

export default router
