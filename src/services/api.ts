import axios from 'axios';

const api = axios.create({
  baseURL: '/api',
});

export const authService = {
  login: async (email: string, password: string) => {
    const response = await api.post('/login', { email, password });
    return response.data;
  },

  register: async (email: string, password: string, name: string) => {
    const response = await api.post('/register', { email, password, name });
    return response.data;
  },

  forgotPassword: async (email: string) => {
    const response = await api.post('/forgot-password', { email });
    return response.data;
  },

  resetPassword: async (token: string, password: string) => {
    const response = await api.post('/reset-password', { token, password });
    return response.data;
  },
};

export const courseService = {
  enrollCourse: async (courseId: number) => {
    const response = await api.post(`/courses/${courseId}/enroll`);
    return response.data;
  },

  getCourses: async () => {
    const response = await api.get('/courses');
    return response.data;
  },
};