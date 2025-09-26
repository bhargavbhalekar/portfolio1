import axios from 'axios'

const baseURL = import.meta.env.VITE_API_BASE || 'http://localhost:8000/api'

export const api = axios.create({ baseURL, timeout: 10000 })

export const fetchWeather = () => api.get('/location-weather/')
export const fetchNowPlaying = () => api.get('/spotify/')
export const fetchBlogs = (page = 1) => api.get('/blogs/', { params: { page } })
