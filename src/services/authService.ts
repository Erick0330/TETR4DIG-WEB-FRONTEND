import { useCurrentTetraStore } from '@/stores/StoreT';
import api from './api';


export const loginUser = async (email: string, password: string) => {
  try {
    const response = await api.post('/auth/login', { email, password });

    const store = useCurrentTetraStore();


    if(response.data.rol === 'ADMIN'){
      store.changeIsAdmin(true);
    }
    else{
      store.changeIsAdmin(false);
    }

    store.changeCurrentUser(response.data.userName);
    const token = response.data.token; // Suponiendo que el token está en la respuesta
    store.setToken(token); // Guardamos el token en el store
    store.changeIdUser(response.data.id);
    store.changeCurrentReport(response.data.currentReportId);
    store.changeIsAuthenticated(true);
    return token; // Retornamos el token para que se pueda usar en otras partes si es necesario
  } catch (error) {
    console.error("Error de autenticación", error);
    throw new Error("Credenciales incorrectas");
  }
};

export const registerUser = async(email: string, name: string, password: string) => {

  try{
    await api.post('/auth/register', { name, email, password });
  }
  catch(error){
    throw new Error("Error al crear usuario"+ error);
  }


}
