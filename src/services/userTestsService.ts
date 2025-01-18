import api from './api';
import type { createUserTestsDto, UserTest } from '@/types/userTest';


export const getUserTests = async (): Promise<UserTest[]> => {
  const response = await api.get('/user-test/findAll/1');
  return response.data;
};


export const createUserTest = async (userTest: createUserTestsDto): Promise<UserTest> => {
  const response = await api.post('/user-test', userTest);
  return response.data;
};



export const getUserTestById = async (id: number): Promise<UserTest> => {
  const response = await api.get(`/user-test/${id}`);
  return response.data;
};


