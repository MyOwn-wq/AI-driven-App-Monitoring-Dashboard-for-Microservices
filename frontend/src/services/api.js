import axios from 'axios';

const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000';

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
