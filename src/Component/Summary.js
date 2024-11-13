import React from 'react';
import './Summary.css';

function Summary({ budget, expenses, exchangeRate, currency }) {
  const totalExpenses = expenses.reduce((acc, expense) => acc + expense.amount, 0);
  const balance = (budget * exchangeRate) - totalExpenses;

  return (
    <div className="summary-card">
      
      <div>Budget: {currency} { (budget * exchangeRate).toFixed(2)}</div>
      <div>Expenses: {currency} {totalExpenses.toFixed(2)}</div>
      <div>Balance: {currency} {balance.toFixed(2)}</div>

      
    </div>
  );
}

export default Summary;
