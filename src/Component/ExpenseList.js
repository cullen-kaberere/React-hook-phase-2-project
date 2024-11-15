import React, { useState } from 'react';
import './ExpenseList.css';

function ExpenseList({ expenses, setExpenses }) {
  const [searchTerm, setSearchTerm] = useState('');
  const [editingExpenseId, setEditingExpenseId] = useState(null);

  const startEditing = (expenseId) => {
    setEditingExpenseId(expenseId);
  };

  const cancelEditing = () => {
    setEditingExpenseId(null);
  };

  const saveEditing = (expenseId, newDescription, newAmount) => {
    const updatedExpenses = expenses.map((expense) =>
      expense.id === expenseId
        ? { ...expense, description: newDescription, amount: parseFloat(newAmount) }
        : expense
    );
    setExpenses(updatedExpenses);
    setEditingExpenseId(null);
  };

  const handleDelete = (expenseId) => {
    const updatedExpenses = expenses.filter((expense) => expense.id !== expenseId);
    setExpenses(updatedExpenses);
  };

  const filteredExpenses = expenses.filter((expense) =>
    expense.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="expense-list">
      <input
        type="text"
        placeholder="Search expenses"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      {filteredExpenses.map((expense) => (
        <div key={expense.id} className="expense-item">
          {editingExpenseId === expense.id ? (
            <>
              <input
                type="text"
                value={expense.description}
                onChange={(e) => saveEditing(expense.id, e.target.value, expense.amount)}
                placeholder="Edit description"
                className="edit-input"
              />
              <input
                type="number"
                value={expense.amount}
                onChange={(e) => saveEditing(expense.id, expense.description, e.target.value)}
                placeholder="Edit amount"
                className="edit-input"
              />
              <button className="save-btn" onClick={() => cancelEditing()}>Save</button>
              <button className="cancel-btn" onClick={() => cancelEditing()}>Cancel</button>
            </>
          ) : (
            <>
              <span>{expense.description}</span>
              <span>Ksh {expense.amount}</span>
              <button className="edit-btn" onClick={() => startEditing(expense.id)}>Edit</button>
              <button className="delete-btn" onClick={() => handleDelete(expense.id)}>Delete</button>
            </>
          )}
        </div>
      ))}
    </div>
  );
}

export default ExpenseList;