import { createRouter, createWebHistory } from 'vue-router'
import PagesContainer from '@/components/PagesContainer.vue'
import QuiestionsComponent from '@/components/QuiestionsComponent.vue'
import ReportsComponent from '@/components/ReportsComponent.vue'
import LoginComponent from '@/components/LoginComponent.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: PagesContainer
    },
    {
      path: '/questions',
      component: QuiestionsComponent
    },
    {
      path:'/reports',
      component: ReportsComponent
    },
    {
      path:'/login',
      component: LoginComponent
    },
  ],
})

export default router
