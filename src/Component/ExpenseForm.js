import React, { useState } from 'react';
import Card from './Card'; // Import the Card component
import Summary from './Summary';

function ExpenseForm({ budget, expenses, addExpense }) {
  const [description, setDescription] = useState('');
  const [amount, setAmount] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const newExpense = { description, amount: parseFloat(amount) };
    addExpense(newExpense);
    setDescription('');
    setAmount('');
  };

  return (
    <div>
      {/* Card layout for the Summary on Add Expense page */}
      <Card>
      <form onSubmit={handleSubmit}>
        <label>Expenses Details:</label>
        <input
          type="text"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Enter expense description"
          required
        />

        <label>Expenses Amount:</label>
        <span>Ksh</span>
        <input
          type="number"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          placeholder="Enter expense amount"
          required
        />
        <button type="submit">Add Expenses</button>
      </form>

      
        <Summary budget={budget} expenses={expenses} />
      </Card>
    </div>
  );
}

export default ExpenseForm;
