export default function WeatherCard({ data }) {
  if (!data || !data.city) {
    return (
      <div className="bg-yellow-100 p-4 rounded shadow mb-4">
        <p>No weather data yet. Search for a city above 👆</p>
      </div>
    );
  }

  return (
    <div className="bg-blue-100 p-4 rounded shadow mb-4">
      <h2 className="text-xl font-bold mb-2">{data.city}</h2>
      <p>🌡️ Temperature: <strong>{data.temperature}°C</strong></p>
      <p>🤒 Feels Like: {data.feels_like}°C</p>
      <p>🌥️ {data.description}</p>
    </div>
  );
}
