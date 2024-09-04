import React from 'react';

const Balance = ({ balance }) => (
  <div>
    <h2 className="text-lg font-semibold">Balance: ${balance.toFixed(2)}</h2>
  </div>
);

export default Balance;
