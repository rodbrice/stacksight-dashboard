import { useState } from 'react';
import { fetchWeather } from '../api';

export function useWeather() {
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const getWeather = async (city) => {
    setLoading(true);
    setError('');
    try {
      const res = await fetchWeather(city);
      setWeather(res.data);
    } catch (err) {
      console.error(err);
      setError('Unable to fetch weather. Try another city.');
    } finally {
      setLoading(false);
    }
  };

  return { weather, loading, error, getWeather };
}
