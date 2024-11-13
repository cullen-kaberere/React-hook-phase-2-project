
import React, { useState } from 'react';
import './ExpenseList.css';

function ExpenseList({ expenses, setExpenses }) {
  const [editingId, setEditingId] = useState(null); // Track the currently editing expense ID
  const [editedDescription, setEditedDescription] = useState('');
  const [editedAmount, setEditedAmount] = useState('');

  const startEditing = (expense) => {
    setEditingId(expense.id);
    setEditedDescription(expense.description);
    setEditedAmount(expense.amount);
  };

  const cancelEditing = () => {
    setEditingId(null);
    setEditedDescription('');
    setEditedAmount('');
  };

  const saveEditing = (id) => {
    const updatedExpenses = expenses.map((expense) =>
      expense.id === id
        ? { ...expense, description: editedDescription, amount: parseFloat(editedAmount) }
        : expense
    );
    setExpenses(updatedExpenses);
    cancelEditing();
  };

  const handleDelete = (id) => {
    const updatedExpenses = expenses.filter(expense => expense.id !== id);
    setExpenses(updatedExpenses);
  };

  return (
    <div className="expense-list">
      {expenses.map((expense) => (
        <div key={expense.id} className="expense-item">
          {editingId === expense.id ? (
            <>
              <input
                type="text"
                value={editedDescription}
                onChange={(e) => setEditedDescription(e.target.value)}
                placeholder="Edit description"
                className="edit-input"
              />
              <input
                type="number"
                value={editedAmount}
                onChange={(e) => setEditedAmount(e.target.value)}
                placeholder="Edit amount"
                className="edit-input"
              />
              <button className="save-btn" onClick={() => saveEditing(expense.id)}>Save</button>
              <button className="cancel-btn" onClick={cancelEditing}>Cancel</button>
            </>
          ) : (
            <>
              <span>{expense.description}</span>
              <span>Ksh{expense.amount}</span>
              <button className="edit-btn" onClick={() => startEditing(expense)}>Edit</button>
              <button className="delete-btn" onClick={() => handleDelete(expense.id)}>Delete</button>
            </>
          )}
        </div>
      ))}
    </div>
  );
}

export default ExpenseList;
