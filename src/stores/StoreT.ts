import { defineStore } from 'pinia';

export const useCurrentTetraStore = defineStore('StoreT', {
  state: () => ({
    currentView: 'LandingPage',
    indicadores: [
      'Consulta de valores',
      'Resultados de los valores',
    ],
    email: '', // Email del usuario autenticado
    token: '', // Token JWT del usuario
    isAuthenticated: false, // Estado de autenticación
    isSideBarActive: false,
  }),
  actions: {
    // Cambio de vistas
    changeToQuestions() {
      this.currentView = 'Questions';
    },
    changeToReports() {
      this.currentView = 'Reports';
    },
    changeToSettings() {
      this.currentView = 'Settings';
    },
    changeToLogin() {
      this.currentView = 'Login';
    },
    changeToLP() {
      this.currentView = 'LandingPage';
    },

    setToken(token: string) {
      this.token = token;
      console.log(token)
      localStorage.setItem('token', token); // Guardar en el localStorage si quieres persistir el token
    },
    getToken() {
      return this.token || localStorage.getItem('token'); // Obtiene el token desde el estado o localStorage
    },

    toggleSidebar() {
      this.isSideBarActive = !this.isSideBarActive;
    },

  },
});
