import { useState, useEffect } from 'react';
import { fetchServices } from '../api';

export function useServices() {
  const [services, setServices] = useState([]);

  useEffect(() => {
    fetchServices().then((res) => setServices(res.data));
  }, []);

  return { services };
}
