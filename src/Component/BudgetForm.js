import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './BudgetForm.css'; // Import the CSS file for styling

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
    <div className="budget-form-container">
      <h1>Ck Budget Master</h1>
      <div className="welcome-box">
        <h2>Hello.</h2>
        <p>Welcome to Ck Budget Master. Track, save, and thrive with our easy-to-use budgeting tool.</p>
        <form onSubmit={handleSubmit} className="budget-form">
          <label htmlFor="budget-input">Please Enter Your Budget:</label>
          <div className="input-group">
            <span className="currency">Ksh</span>
            <input
              id="budget-input"
              type="number"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Enter Your Budget"
              required
            />
            <button type="submit" className="calculate-button">Calculate</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default BudgetForm;
