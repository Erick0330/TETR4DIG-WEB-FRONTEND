import type { createQuestionDto, Question } from '@/types/question';
import api from './api';


export const getQuestions = async (): Promise<Question[]> => {
  const response = await api.get('/questions');
  return response.data;
};


export const createQuestion = async (question: createQuestionDto): Promise<Question> => {
  const response = await api.post('/questions', question);
  return response.data;
};


export const updateQuestion = async (id: number, question: createQuestionDto): Promise<Question> => {
  const response = await api.patch(`/questions/${id}`, question);
  return response.data;
};


export const deleteQuestion = async (id: number): Promise<void> => {
  await api.delete(`/questions/${id}`);
};


export const getQuestionById = async (id: number): Promise<Question> => {
  const response = await api.get(`/questions/${id}`);
  return response.data;
};
