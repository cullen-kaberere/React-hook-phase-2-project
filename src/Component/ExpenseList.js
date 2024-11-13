import React from 'react';

function ExpenseList({ expenses }) {
  if (expenses.length === 0) {
    return <p>No expenses added yet.</p>;
  }

  return (
    <div>
      <h2>All Expenses</h2>
      <ul>
        {expenses.map((expense) => (
          <li key={expense.id}>
            {expense.description}: Ksh{expense.amount.toFixed(2)}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ExpenseList;
