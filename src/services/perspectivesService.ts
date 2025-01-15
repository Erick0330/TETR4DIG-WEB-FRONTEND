import type { createPerspectiveDto, Perspective, updatePerspectiveDto } from '@/types/perspective';
import api from './api';



export const getPerspectives = async (): Promise<Perspective[]> => {
  const response = await api.get('/perspective');
  return response.data;
};


export const createPerspective = async (perspective: createPerspectiveDto): Promise<Perspective> => {
  const response = await api.post('/perspective', perspective);
  return response.data;
};


export const updatePerspective = async (id: number, perspective: updatePerspectiveDto): Promise<Perspective> => {
  const response = await api.patch(`/perspective/${id}`, perspective);
  return response.data;
};


export const deletePerspective = async (id: number): Promise<void> => {
  await api.delete(`/perspective/${id}`);
};


export const getPerspectiveById = async (id: number): Promise<Perspective> => {
  const response = await api.get(`/perspective/${id}`);
  return response.data;
};

export const getPerspectiveByIdAmbit = async (id: number): Promise<Perspective[]> => {
  const response = await api.get(`/perspective/ambit/${id}`);
  return response.data;
};
