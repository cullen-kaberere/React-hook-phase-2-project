import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function BudgetForm({ setBudget }) {
  const [input, setInput] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    setBudget(parseFloat(input));
    setInput('');
    navigate('/add-expense'); // Navigate to "Add Expenses" page
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>Budget:</label>
      <input
        type="number"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        required
      />
      <button type="submit">Set Budget</button>
    </form>
  );
}

export default BudgetForm;
