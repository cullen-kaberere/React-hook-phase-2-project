import React from 'react';

function Summary({ budget, expenses }) {
  const totalExpenses = expenses.reduce((total, expense) => total + expense.amount, 0);
  const remaining = budget - totalExpenses;

  return (
    <div>
      <h2>Budget Summary</h2>
      <p>Total Budget: Ksh{budget}</p>
      <p>Total Expenses: Ksh{totalExpenses}</p>
      <p>Remaining Balance: Ksh{remaining}</p>
    </div>
  );
}

export default Summary;