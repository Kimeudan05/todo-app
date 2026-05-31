import axios from 'axios';
import { io, Socket } from 'socket.io-client';

const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:5000/api';
const WS_URL = process.env.REACT_APP_WS_URL || 'http://localhost:5000';

// Create axios instance
export const api = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Add token to requests
api.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

// Socket.io instance
let socket: Socket | null = null;

export const initSocket = () => {
  if (socket) return socket;

  socket = io(WS_URL, {
    reconnection: true,
    reconnectionDelay: 1000,
    reconnectionDelayMax: 5000,
    reconnectionAttempts: 5,
    autoConnect: false,
  });

  return socket;
};

export const getSocket = () => socket;

// Auth API
export const authAPI = {
  register: (data: { email: string; name: string; password: string }) =>
    api.post('/auth/register', data),
  login: (data: { email: string; password: string }) =>
    api.post('/auth/login', data),
  logout: () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
  },
  refresh: () => api.post('/auth/refresh'),
};

// Workspace API
export const workspaceAPI = {
  list: () => api.get('/workspaces'),
  create: (data: { name: string; description?: string }) =>
    api.post('/workspaces', data),
  get: (id: string) => api.get(`/workspaces/${id}`),
  update: (id: string, data: any) => api.put(`/workspaces/${id}`, data),
  delete: (id: string) => api.delete(`/workspaces/${id}`),
  addMember: (workspaceId: string, userId: string) =>
    api.post(`/workspaces/${workspaceId}/members`, { userId }),
  removeMember: (workspaceId: string, userId: string) =>
    api.delete(`/workspaces/${workspaceId}/members/${userId}`),
};

// Task API
export const taskAPI = {
  list: (workspaceId: string) =>
    api.get(`/workspaces/${workspaceId}/tasks`),
  create: (workspaceId: string, data: any) =>
    api.post(`/workspaces/${workspaceId}/tasks`, data),
  get: (id: string) => api.get(`/tasks/${id}`),
  update: (id: string, data: any) => api.put(`/tasks/${id}`, data),
  delete: (id: string) => api.delete(`/tasks/${id}`),
  assign: (id: string, userId: string) =>
    api.patch(`/tasks/${id}/assign`, { userId }),
  updateStatus: (id: string, status: string) =>
    api.patch(`/tasks/${id}/status`, { status }),
};

// Comment API
export const commentAPI = {
  list: (taskId: string) => api.get(`/tasks/${taskId}/comments`),
  create: (taskId: string, data: { content: string }) =>
    api.post(`/tasks/${taskId}/comments`, data),
  delete: (id: string) => api.delete(`/comments/${id}`),
};

// Notification API
export const notificationAPI = {
  list: () => api.get('/notifications'),
  markAsRead: (id: string) => api.patch(`/notifications/${id}/read`),
  markAllAsRead: () => api.patch('/notifications/read-all'),
};
