import React from 'react';

function Summary({ budget, expenses }) {
  // Calculate total expenses and remaining balance
  const totalExpenses = expenses.reduce((acc, expense) => acc + expense.amount, 0);
  const balance = budget - totalExpenses;

  return (
    <div className="summary-card">
      <h2>Summary</h2>
      <div>Budget: Ksh {budget.toFixed(2)}</div>
      <div>Expenses: Ksh {totalExpenses.toFixed(2)}</div>
      <div>Balance: Ksh {balance.toFixed(2)}</div>

      <h3>Expense List</h3>
      <ul>
        {expenses.map((expense, index) => (
          <li key={index}>
            {expense.description}: Ksh {expense.amount.toFixed(2)}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Summary;
