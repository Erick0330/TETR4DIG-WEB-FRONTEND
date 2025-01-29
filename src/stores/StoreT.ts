import { defineStore } from 'pinia';

const getFromLocalStorage = (key: string, defaultValue: boolean) => {
  const value = localStorage.getItem(key);
  if (value === null || value === "undefined") {
    return defaultValue;
  }
  return JSON.parse(value);
};


const getNumberFromLocalStorage = (key: string, defaultValue: number) => {
  const value = localStorage.getItem(key);
  if (value === null || value === "undefined") {
    return defaultValue;
  }
  return JSON.parse(value);
};

export const useCurrentTetraStore = defineStore('StoreT', {
  state: () => ({
    currentView: 'LandingPage',
    email: '', // Email del usuario autenticado
    token: localStorage.getItem('token') || '', // Token JWT del usuario
    isAuthenticated: getFromLocalStorage('isAuthenticated', false),
    isSideBarActive: false,
    isAdmin: getFromLocalStorage('isAdmin', false),
    currentUser: localStorage.getItem('currentUser') || '',
    idUser: getNumberFromLocalStorage('idUser', 0),
    currentReportId: getNumberFromLocalStorage('idReport', 0),
  }),
  actions: {
    changeCurrentUser(user: string) {
      this.currentUser = user;
      localStorage.setItem('currentUser', user); // Guardar en localStorage
    },
    changeCurrentReport(id: number){
      this.currentReportId = id;
      localStorage.setItem('idReport', JSON.stringify(id));
    },
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
      localStorage.setItem('token', token); // Guardar en localStorage
    },
    getToken() {
      return this.token || localStorage.getItem('token'); // Obtener el token desde el estado o localStorage
    },
    getIsSideBarActive() {
      return this.isSideBarActive;
    },
    changeSideBar() {
      this.isSideBarActive = !this.isSideBarActive;
    },
    changeIsAdmin(isAdmin: boolean) {
      this.isAdmin = isAdmin;
      localStorage.setItem('isAdmin', JSON.stringify(isAdmin)); // Guardar en localStorage
    },
    changeIsAuthenticated(isAuthenticated: boolean) {
      this.isAuthenticated = isAuthenticated;
      localStorage.setItem('isAuthenticated', JSON.stringify(isAuthenticated)); // Guardar en localStorage
    },
    changeIdUser(id:number){
      this.idUser = id;
      localStorage.setItem('idUser', JSON.stringify(id))
    },
    closeSection(){
      this.changeIdUser(0);
      this.changeCurrentUser('');
      this.changeIsAuthenticated(false);
      this.changeCurrentReport(0);
      this.changeIsAdmin(false);
      this.changeIsAuthenticated(false);
    }
  },
});
