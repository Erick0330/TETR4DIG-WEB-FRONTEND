import axios from 'axios';
import { useCurrentTetraStore } from '@/stores/StoreT';

const api = axios.create({
  baseURL: 'http://localhost:3001',
});

api.interceptors.request.use(
  (config) => {
    const store = useCurrentTetraStore(); // Accede al store para obtener el token
    const token = store.getToken(); // Obtén el token desde el store

    if (token) {
      config.headers['Authorization'] = `Bearer ${token}`; // Agrega el token a las cabeceras
    }

    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default api;
