export default function ServiceList({ services }) {
  if (!services || services.length === 0) return null;

  return (
    <div className="bg-green-100 rounded-md p-6 shadow-md">
      <h3 className="text-xl font-bold text-green-800 mb-3">🛠️ Connected Services</h3>
      <ul className="list-disc list-inside text-green-900 space-y-1">
        {services.map((s) => (
          <li key={s.id}>
            <strong>{s.name}</strong>: {s.description}
          </li>
        ))}
      </ul>
    </div>
  );
}
