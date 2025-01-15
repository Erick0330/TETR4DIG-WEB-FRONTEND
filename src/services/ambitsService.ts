import api from './api';
import type { Ambit, createAmbitDto } from '@/types/ambit';



export const getAmbits = async (): Promise<Ambit[]> => {
  const response = await api.get('/ambit');
  return response.data;
};


export const createAmbit = async (ambit: createAmbitDto): Promise<Ambit> => {
  const response = await api.post('/ambit', ambit);
  return response.data;
};


export const updateAmbit = async (id: number, ambit: createAmbitDto): Promise<Ambit> => {
  const response = await api.patch(`/ambit/${id}`, ambit);
  return response.data;
};


export const deleteAmbit = async (id: number): Promise<void> => {
  await api.delete(`/ambit/${id}`);
};


export const getAmbitById = async (id: number): Promise<Ambit> => {
  const response = await api.get(`/ambit/${id}`);
  return response.data;
};
