import api from './api';
import type { createDimensionDto, Dimension } from '@/types/dimension';


export const getDimensions = async (): Promise<Dimension[]> => {
  const response = await api.get('/dimension');
  return response.data;
};


export const createDimension = async (dimension: createDimensionDto): Promise<Dimension> => {
  const response = await api.post('/dimension', dimension);
  return response.data;
};


export const updateDimension = async (id: number, dimension: createDimensionDto): Promise<Dimension> => {
  const response = await api.patch(`/dimension/${id}`, dimension);
  return response.data;
};


export const deleteDimension = async (id: number): Promise<void> => {
  await api.delete(`/dimension/${id}`);
};


export const getDimensionById = async (id: number): Promise<Dimension> => {
  const response = await api.get(`/dimension/${id}`);
  return response.data;
};
