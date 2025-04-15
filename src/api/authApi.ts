import axios from './axios';
import { LoginCredentials, RegisterData } from '../types';

export const authApi = {
  login: async (credentials: LoginCredentials) => {
    const response = await axios.post('/auth/login', credentials);
    return response.data;
  },

  register: async (data: RegisterData) => {
    const response = await axios.post('/auth/register', data);
    return response.data;
  },

  getCurrentUser: async () => {
    const response = await axios.get('/auth/me');
    return response.data;
  },
}; 