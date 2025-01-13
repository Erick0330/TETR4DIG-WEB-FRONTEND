import type { Question } from '@/types/question';
import api from './api';

export const getQuestions = async () => {
  const response = await api.get('/questions');
  return response.data;
};

export const createQuestion = async (question: Question) => {
  const response = await api.post('/questions', question);
  return response.data;
};
