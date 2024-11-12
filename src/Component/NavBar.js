import React from 'react';
import { Link } from 'react-router-dom';

function NavBar() {
  return (
    <nav>
      <Link to="/">Set Budget</Link>
      <Link to="/add-expense">Add Expense</Link>
      <Link to="/summary">Summary</Link>
      <Link to="/expenses">All Expenses</Link>
    </nav>
  );
}

export default NavBar;
