import API from './api';

export const registerUser = (username: string, email: string, password: string) =>
  API.post('/register/', { username, email, password });

export const loginUser = (username: string, password: string) =>
  API.post('/login/', { username, password });

export const getProfile = () => API.get('/profile/');
