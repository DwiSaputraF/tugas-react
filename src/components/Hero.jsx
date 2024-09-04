import React from 'react';

const Hero = () => {
  return (
    <section id="home" className="bg-blue-600 text-white py-20">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-4xl md:text-6xl font-bold">Manage Your Finances Efficiently</h1>
        <p className="mt-4 text-lg md:text-xl">Take control of your financial future with our all-in-one finance management platform.</p>
        <a href="#" className="mt-8 inline-block bg-white text-blue-600 px-6 py-3 rounded-full shadow-md hover:bg-gray-200">Get Started</a>
      </div>
    </section>
  );
};

export default Hero;
