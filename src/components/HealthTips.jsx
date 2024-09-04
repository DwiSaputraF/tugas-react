import React from 'react';

function HealthTips({ loading, tips }) {
  return (
    <section id="tips" className="py-8">
      <h2 className="text-2xl font-bold text-center mb-6">Health Tips</h2>
      {loading ? (
        <p className="text-center">Loading...</p>
      ) : (
        <ul className="space-y-4">
          {tips.map((tip, index) => (
            <li key={index} className="bg-white p-4 shadow rounded">
              {tip}
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}

export default HealthTips;
