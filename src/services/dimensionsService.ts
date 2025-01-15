import api from './api';
import type { createDimensionDto, Dimension, updateDimensionDto } from '@/types/dimension';


export const getDimensions = async (): Promise<Dimension[]> => {
  const response = await api.get('/dimension');
  return response.data;
};


export const createDimension = async (dimension: createDimensionDto): Promise<Dimension> => {
  const response = await api.post('/dimension', dimension);
  return response.data;
};


export const updateDimension = async (id: number, dimension:updateDimensionDto): Promise<Dimension> => {
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

export const getDimensionByIdPerspective = async (id: number): Promise<Dimension[]> => {
  const response = await api.get(`dimension/perspective/${id}`);
  return response.data;
};
