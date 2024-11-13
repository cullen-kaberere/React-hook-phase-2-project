import React, { useState } from 'react';
import Card from './Card';
import Summary from './Summary';
import './ExpenseForm.css';

const apiKey = 'ae193a0e7b9ac60f1dfb55cc';

function ExpenseForm({ budget, expenses, addExpense }) {
  const [description, setDescription] = useState('');
  const [amount, setAmount] = useState('');
  const [currency, setCurrency] = useState('KES'); // Default currency (Kenyan Shilling)
  const [convertedExpenses, setConvertedExpenses] = useState([]);
  const [exchangeRate, setExchangeRate] = useState(1);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newExpense = { description, amount: parseFloat(amount) };
    addExpense(newExpense);
    setDescription('');
    setAmount('');
  };

  const handleCurrencyChange = (e) => {
    setCurrency(e.target.value);
  };

  const handleConvert = async () => {
    if (currency === 'KES') {
      setExchangeRate(1);
      setConvertedExpenses(expenses);
      return;
    }

    try {
      const response = await fetch(`https://api.currencyapi.com/v3/latest?apikey=${apiKey}&base_currency=KES`);
      const data = await response.json();
      const rate = data?.data[currency]?.value;

      if (rate) {
        setExchangeRate(rate);
        const updatedExpenses = expenses.map(expense => ({
          ...expense,
          amount: expense.amount * rate
        }));
        setConvertedExpenses(updatedExpenses);
      }
    } catch (error) {
      console.error('Error fetching exchange rate:', error);
    }
  };

  return (
    <div>
      <Card>
        <h2 className="header">Add Expenses</h2>
        <form onSubmit={handleSubmit} className="expense-form">
          <div className="form-group">
            <label>Expenses Details:</label>
            <input
              type="text"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Enter expense description"
              required
            />
          </div>

          <div className="form-group">
            <label>Expenses Amount:</label>
            <span>Ksh</span>
            <input
              type="number"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              placeholder="Enter expense amount"
              required
            />
            <button type="submit" className="add-expense-btn">Add Expense</button>
          </div>
        </form>

        <div className="currency-converter">
          <label>Choose Currency:</label>
          <select value={currency} onChange={handleCurrencyChange}>
            <option value="KES">Kenyan Shilling (Ksh)</option>
            <option value="USD">US Dollar (USD)</option>
            <option value="EUR">Euro (EUR)</option>
            <option value="GBP">British Pound (GBP)</option>
          </select>
          <button onClick={handleConvert} className="convert-btn">Convert</button>
        </div>

        <Summary budget={budget} expenses={convertedExpenses.length ? convertedExpenses : expenses} exchangeRate={exchangeRate} currency={currency} />
      </Card>
    </div>
  );
}

export default ExpenseForm;
