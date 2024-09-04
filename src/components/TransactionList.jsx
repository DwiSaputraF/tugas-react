import React from 'react';

const TransactionList = ({ transactions }) => (
  <ul className="mb-4 space-y-2">
    {transactions.map((transaction, index) => (
      <li
        key={index}
        className="flex justify-between p-2 border border-gray-300 rounded-md"
      >
        <span>{transaction.description}</span>
        <span>${transaction.amount.toFixed(2)}</span>
      </li>
    ))}
  </ul>
);

export default TransactionList;
