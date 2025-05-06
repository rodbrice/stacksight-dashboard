import axios from 'axios';

const API = axios.create({
  baseURL: 'http://localhost:8000',
});

export const fetchWeather = (city) => API.get(`/weather/${city}`);
export const fetchServices = () => API.get('/services');
