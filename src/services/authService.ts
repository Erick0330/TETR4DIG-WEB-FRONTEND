import { useCurrentTetraStore } from '@/stores/StoreT';
import api from './api';

export const loginUser = async (email: string, password: string) => {
  try {
    const response = await api.post('/auth/login', { email, password });
    const token = response.data.token; // Suponiendo que el token está en la respuesta
    const store = useCurrentTetraStore();
    store.setToken(token); // Guardamos el token en el store
    return token; // Retornamos el token para que se pueda usar en otras partes si es necesario
  } catch (error) {
    console.error("Error de autenticación", error);
    throw new Error("Credenciales incorrectas");
  }
};
