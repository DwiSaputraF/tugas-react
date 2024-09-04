import React from 'react';

const Features = () => {
  return (
    <section id="features" className="py-20">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-12">Features</h2>
        <div className="grid md:grid-cols-3 gap-10">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-4">Budgeting</h3>
            <p>Track your spending and stay on top of your budget with our intuitive tools.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-4">Investment Tracking</h3>
            <p>Monitor your investments and make informed decisions to grow your wealth.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-4">Expense Analysis</h3>
            <p>Get detailed insights into your expenses to understand your financial habits.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
