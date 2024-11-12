import React from 'react';
import './Card.css'; // Create a CSS file for card styling

function Card({ children }) {
  return <div className="card">{children}</div>;
}

export default Card;
