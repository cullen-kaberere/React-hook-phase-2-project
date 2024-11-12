import React, { useState } from 'react';

function BudgetForm({ setBudget }) {
  const [input, setInput] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setBudget(parseFloat(input));
    setInput('');
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
