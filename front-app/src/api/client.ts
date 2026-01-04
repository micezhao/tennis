import axios from 'axios';
import { mockData } from './mockData';

const useMock = import.meta.env.VITE_USE_MOCK === 'true';

const client = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
  timeout: 5000,
});

if (useMock) {
  console.log('Using Mock Data');
  client.interceptors.request.use(async (config) => {
    // Simulate network delay
    await new Promise(resolve => setTimeout(resolve, 500));
    
    const { url, method } = config;
    
    if (url?.includes('/user/info') && method === 'get') {
      throw { response: { data: mockData.userInfo, status: 200 } };
    }
    if (url?.includes('/court/list') && method === 'get') {
      throw { response: { data: { list: mockData.courts, total: mockData.courts.length }, status: 200 } };
    }
    if (url?.includes('/match/list') && method === 'get') {
      throw { response: { data: { list: mockData.matches, total: mockData.matches.length }, status: 200 } };
    }
    
    // Add more mock routes here
    
    return config;
  });

  client.interceptors.response.use(
    response => response,
    error => {
      if (error.response && error.response.data) {
        return Promise.resolve(error.response);
      }
      return Promise.reject(error);
    }
  );
}

export default client;
