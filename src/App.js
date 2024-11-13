// App.js
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
  const [editingExpense, setEditingExpense] = useState(null); // Track the expense being edited

  useEffect(() => {
    fetch('http://localhost:3000/expenses')
      .then(res => res.json())
      .then(data => setExpenses(data));
  }, []);

  const addExpense = (newExpense) => {
    if (editingExpense) {
      // If editing, update the existing expense
      setExpenses(prevExpenses =>
        prevExpenses.map(exp => exp.id === editingExpense.id ? newExpense : exp)
      );
      setEditingExpense(null); // Reset editing state
    } else {
      setExpenses(prevExpenses => [...prevExpenses, newExpense]);
    }
  };

  const editExpense = (expense) => {
    setEditingExpense(expense);
  };

  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<BudgetForm setBudget={setBudget} />} />
        <Route 
          path="/add-expense" 
          element={<ExpenseForm 
            addExpense={addExpense} 
            budget={budget} 
            expenses={expenses} 
            editingExpense={editingExpense} 
          />} 
        />
        <Route 
          path="/summary" 
          element={<Summary 
            budget={budget} 
            expenses={expenses} 
          />} 
        />
        <Route 
          path="/expenses" 
          element={<ExpenseList 
            expenses={expenses} 
            setExpenses={setExpenses} 
            editExpense={editExpense} 
          />} 
        />
      </Routes>
    </Router>
  );
}

export default App;
