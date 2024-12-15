import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

import 'bootstrap/dist/css/bootstrap.min.css';  // Para los estilos de Bootstrap
import 'bootstrap';  // Para los scripts de Bootstrap

import 'bootstrap-icons/font/bootstrap-icons.css'; // Para los iconos de Bootstrap



const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')
