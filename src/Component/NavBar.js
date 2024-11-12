import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css'; // Import the CSS file for styling

function NavBar() {
  return (
    <nav className="navbar">
      <h1 className="navbar-title">Ck Budget Master</h1>
      <div className="nav-links">
        <Link to="/" className="nav-link">Set budget</Link>
        <Link to="/add-expense" className="nav-link">Add Expense</Link>
        <Link to="/summary" className="nav-link">Summary</Link>
        <Link to="/expenses" className="nav-link">All Expenses</Link>
      </div>
    </nav>
  );
}

export default NavBar;
