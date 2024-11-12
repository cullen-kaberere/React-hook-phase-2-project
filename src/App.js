import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from "./Component/NavBar";
import BudgetForm from "./Component/BudgetForm";
import ExpenseForm from "./Component/ExpenseForm";
import ExpenseList from './Component/ExpenseList';
import Summary from './Component/Summary';

function App() {
  const [budget, setBudget] = useState(0);
  const [expenses, setExpenses] = useState([]);

  // Fetch expenses from json-server on mount
  useEffect(() => {
    fetch('http://localhost:3000/expenses')
      .then(res => res.json())
      .then(data => setExpenses(data));
  }, []);

  // Function to add a new expense
  const addExpense = (newExpense) => {
    setExpenses(prevExpenses => [...prevExpenses, newExpense]);
  };

  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<BudgetForm setBudget={setBudget} />} />
        <Route path="/add-expense" element={<ExpenseForm addExpense={addExpense} />} />
        <Route path="/summary" element={<Summary budget={budget} expenses={expenses} />} />
        <Route path="/expenses" element={<ExpenseList expenses={expenses} />} />
      </Routes>
    </Router>
  );
}

export default App;
