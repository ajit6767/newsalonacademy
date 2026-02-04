import axios from 'axios'

// Create axios instance pointing to backend API
const api = axios.create({
  // Vite exposes env vars prefixed with VITE_
  baseURL: (import.meta.env.VITE_API_URL || 'http://localhost:5000') + '/api'
})

// Attach JWT token from localStorage to every request if present
api.interceptors.request.use((config) => {
  const token = localStorage.getItem('token')
  if (token) config.headers.Authorization = `Bearer ${token}`
  return config
})

export default api
