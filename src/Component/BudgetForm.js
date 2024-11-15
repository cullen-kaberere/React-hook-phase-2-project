import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './BudgetForm.css';

function BudgetForm({ setBudget }) {
  const [title, setTitle] = useState('');
  
  const [amount, setAmount] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const budgetData = {
      title,

      amount: parseFloat(amount),
    };

    try {
      // Save budget data to db.json
      await fetch('http://localhost:3000/budgets', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(budgetData),
      });
      setBudget(parseFloat(amount));
      setTitle('');
      
      setAmount('');
      navigate('/add-expense');
    } catch (error) {
      console.error('Failed to save budget data:', error);
    }
  };

  return (
    <div className="budget-form-container">
      <div className="welcome-box">
        <h2>Hello.</h2>
        <p>Welcome to Ck Budget Master. Track, save, and thrive with our easy-to-use budgeting tool.</p>
        <form onSubmit={handleSubmit} className="budget-form">
          <label htmlFor="title">Please Enter Your Budget Title:</label>
          <input
            id="title"
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Eg. Trip to diani"
            required
          />

          

          <label htmlFor="budget-input">Please Enter Your Budget Amount:</label>
          <div className="input-group">
            <input
              id="budget-input"
              type="number"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              placeholder="Enter Your Budget in Ksh"
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
