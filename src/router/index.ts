import { createRouter, createWebHistory } from 'vue-router'
// import PagesContainer from '@/components/PagesContainer.vue'
import QuiestionsComponent from '@/components/QuiestionsComponent.vue'
import ReportsComponent from '@/components/ReportsComponent.vue'
import LoginComponent from '@/components/LoginComponent.vue'
import LandingPage from '@/views/LandingPage.vue'
import SettingsComponent from '@/components/SettingsComponent.vue'
import SettingsComponentUser from '@/components/SettingsComponentUser.vue'
import OTPComponent from '@/components/OTPComponent.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: LandingPage
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
    {
      path:'/settings',
      component:SettingsComponent
    },
    {
      path: '/profile',
      component: SettingsComponentUser
    },
    {
      path: '/verification',
      component: OTPComponent
    },
  ],
})

export default router
