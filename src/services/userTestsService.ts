import api from './api';
import type { createUserTestsDto, UserTest } from '@/types/userTest';


export const getUserTests = async (id: number): Promise<UserTest[]> => {
  const response = await api.get(`/user-test/findAll/${id}`);
  return response.data;
};


export const createUserTest = async (userTest: createUserTestsDto): Promise<UserTest> => {
  const response = await api.post('/user-test', userTest);
  return response.data;
};



export const getUserTestById = async (id_u: number, id: number): Promise<UserTest> => {
  const response = await api.get(`/user-test/${id_u}/${id}`);
  return response.data;
};


