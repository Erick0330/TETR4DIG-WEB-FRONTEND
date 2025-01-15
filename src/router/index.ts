import { createRouter, createWebHistory } from 'vue-router'
// import PagesContainer from '@/components/PagesContainer.vue'
import QuestionsComponent from '@/components/QuestionsComponent.vue'
import ReportsComponent from '@/components/ReportsComponent.vue'
import LoginComponent from '@/components/LoginComponent.vue'
import LandingPage from '@/views/LandingPage.vue'
import SettingsComponent from '@/components/SettingsComponent.vue'
import OTPComponent from '@/components/OTPComponent.vue'
import SettingsComponentUser from '@/components/SettingsComponentUser.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: LandingPage
    },
    {
      path: '/questions',
      component: QuestionsComponent
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
      path:'/verification',
      component: OTPComponent
    },
    {
      path:'/settings',
      component:SettingsComponent
    },
    {
      path:'/settingsUser',
      component: SettingsComponentUser
    }
  ],
})

export default router
