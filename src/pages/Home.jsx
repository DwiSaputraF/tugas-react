import React, { useState, useEffect } from 'react';
import HealthTips from '../components/HealthTips';

function Home() {
  const [healthTips, setHealthTips] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate a data fetch
    setTimeout(() => {
      setHealthTips([
        "Stay hydrated",
        "Exercise regularly",
        "Get enough sleep",
        "Eat a balanced diet",
        "Practice mindfulness",
      ]);
      setLoading(false);
    }, 1000);
  }, []);

  return (
    <div>
      <HeroSection />
      <HealthTips loading={loading} tips={healthTips} />
    </div>
  );
}

function HeroSection() {
  return (
    <section id="home" className="text-center py-16 bg-green-500 text-white">
      <h1 className="text-4xl font-bold mb-4">Welcome to HealthHub</h1>
      <p className="text-lg">Your go-to resource for staying healthy and fit</p>
    </section>
  );
}

export default Home;
