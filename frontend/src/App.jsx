import { useState } from 'react';

import { useWeather } from './hooks/useWeather';
import { useServices } from './hooks/useServices';
import WeatherCard from './components/WeatherCard';
import ServiceList from './components/ServiceList';

function App() {
  const [city, setCity] = useState('');
  const { weather, loading, error, getWeather } = useWeather();
  const { services } = useServices();

  const handleSearch = () => {
    if (city.trim() === '') return;
    getWeather(city);
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-3xl mx-auto bg-white shadow-lg rounded-lg p-6">
        <h1 className="text-3xl font-bold mb-6 text-center">🌤️ Stacksight Dashboard</h1>
        <div className="flex gap-2 mb-4">
          <input
            type="text"
            className="flex-1 px-4 py-2 border border-gray-300 rounded"
            placeholder="Enter a city..."
            value={city}
            onChange={(e) => setCity(e.target.value)}
          />
          <button
            onClick={handleSearch}
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
          >
            {loading ? 'Loading...' : 'Get Weather'}
          </button>
        </div>

        {error && <div className="text-red-600 mb-4">{error}</div>}

        <WeatherCard data={weather} />
        <ServiceList services={services} />
      </div>
    </div>
  );
}

export default App;
