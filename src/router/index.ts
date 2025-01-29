import { createRouter, createWebHistory } from 'vue-router'
// import PagesContainer from '@/components/PagesContainer.vue'
import QuiestionsComponent from '@/components/QuiestionsComponent.vue'
import ReportsComponent from '@/components/ReportsComponent.vue'
import LoginComponent from '@/components/LoginComponent.vue'
import LandingPage from '@/views/LandingPage.vue'
import SettingsComponent from '@/components/SettingsComponent.vue'
import SettingsComponentUser from '@/components/SettingsComponentUser.vue'
import OTPComponent from '@/components/OTPComponent.vue'
import { useCurrentTetraStore } from '@/stores/StoreT'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: LandingPage,
      name: 'landingPage'
    },
    {
      path: '/questions',
      component: QuiestionsComponent,
      name: 'questions',
      meta: { auth: true }, // Marca esta ruta como protegida
    },
    {
      path: '/reports',
      component: ReportsComponent,
      name: 'reports'
    },
    {
      path: '/login',
      name: 'login',
      component: LoginComponent
    },
    {
      path: '/settings',
      component: SettingsComponent,
      name: 'settings'
    },
    {
      path: '/profile',
      component: SettingsComponentUser,
      name: 'profile'
    },
    {
      path: '/verification',
      name: 'verification',
      component: OTPComponent
    },
  ],
})

router.beforeEach((to) => {
  const authStore = useCurrentTetraStore();

  if(!authStore.isAuthenticated && to.name!== 'login' && to.name!== 'landingPage'){
    return { name: 'login'}
  }
});
export default router
