import { defineStore } from 'pinia';

export const useCurrentTetraStore = defineStore('StoreT', {
  state: () => ({
    currentView: 'LandingPage',
    email: '', // Email del usuario autenticado
    token: '', // Token JWT del usuario
    isAuthenticated: false, // Estado de autenticación
    isSideBarActive: false,
    isAdmin:false,
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
    changeToVerification() {
      this.currentView = 'Verification';
    },
    changeToProfile() {
      this.currentView = 'Profile';
    },
    setToken(token: string) {
      this.token = token;
      localStorage.setItem('token', token); // Guardar en el localStorage si quieres persistir el token
    },
    getToken() {
      return this.token || localStorage.getItem('token'); // Obtiene el token desde el estado o localStorage
    },
    getIsSideBarActive(){
      return this.isSideBarActive;
    },
    changeSideBar() {
      this.isSideBarActive = !this.isSideBarActive;
      console.log(this.isSideBarActive);
    },
    changeIsAdmin() {
      this.isAdmin = true;
    },
    changeIsNotAdmin(){
      this.isAdmin = false;
    }
  },
});
