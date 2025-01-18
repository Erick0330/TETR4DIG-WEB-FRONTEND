import type { createUserDto, updateUserDto, User } from '@/types/user';
import api from './api';




export const getUsers = async (): Promise<User[]> => {
  const response = await api.get('/users');
  return response.data;
};


export const createUser = async (user: createUserDto): Promise<User> => {
  const response = await api.post('/users', user);
  return response.data;
};


export const updateUser = async (id: number, user: updateUserDto): Promise<User> => {
  const response = await api.patch(`/users/${id}`, user);
  return response.data;
};


export const deleteUser = async (id: number): Promise<void> => {
  await api.delete(`/users/${id}`);
};


export const getUserById = async (id: number): Promise<User> => {
  const response = await api.get(`/users/${id}`);
  return response.data;
};

export const getCurrentUserName = async (): Promise<string> => {
  const response = await api.get('/users/current');
  return response.data;
};
