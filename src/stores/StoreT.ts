import { defineStore } from 'pinia';

export const useCurrentTetraStore = defineStore('StoreT', {
  state: () => ({
    currentView: 'LandingPage',
    indicadores:[
      'Consulta de valores',
      'Resultados de los valores'
    ],
    usuarios:[
      { nombre: 'Juan Perez', rol: 'Admin' },
      { nombre: 'Maria Lopez', rol: 'Usuario' },
      { nombre: 'Carlos Ruiz', rol: 'Editor' }
    ]
  }),
  actions:{
    changeToQuestions(){
      this.currentView = 'Questions';
    },
    changeToReports(){
      this.currentView = 'Reports';
    },
    changeToSettings(){
      this.currentView = 'Settings';
    },
    changeToLogin(){
      this.currentView = 'Login';
    },
    changeToLP(){
      this.currentView = 'LandingPage';
    },
    editQuestion(index:number, text:string){
      this.indicadores[index] = text;
    },
    deleteQuestion(index: number) {
      if (index >= 0 && index < this.indicadores.length) {
        this.indicadores.splice(index, 1);
      }
    },
    editUser(index: number, nuevoUsuario: { nombre: string; rol: string }) {
      if (this.usuarios[index]) {
        this.usuarios[index] = { ...this.usuarios[index], ...nuevoUsuario };
      }
    },
    deleteUser(index: number) {
      if (index >= 0 && index < this.indicadores.length) {
        this.usuarios.splice(index, 1);
      }
    },

  }
});
