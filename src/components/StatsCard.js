// src/components/StatsCard.js
import React from 'react';
import '../styles/StatsCard.css';

const StatsCard = ({ title, value, icon }) => {
  return (
    <div className="stats-card">
      <div className="icon">{icon}</div>
      <div className="details">
        <h3>{title}</h3>
        <p>{value}</p>
      </div>
    </div>
  );
};

export default StatsCard;
