import axios from 'axios';

const API_BASE_URL = 'https://neurawatch-backend.onrender.com';

console.log("Using API URL:", API_BASE_URL);

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

export const fetchCPU = () => api.get('/api/cpu');
export const fetchMemory = () => api.get('/api/memory');
export const fetchLatency = () => api.get('/api/latency');
export const fetchStatus = () => api.get('/api/status');
export const fetchJobs = () => api.get('/api/jobs');

export default api;
