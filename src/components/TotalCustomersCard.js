// src/components/TotalCustomersCard.js
import React from 'react';
import '../styles/TotalCustomersCard.css';

const TotalCustomersCard = ({ totalCustomers }) => {
  return (
    <div className="total-customers-card">
      <h3>Total Customers</h3>
      <p className="customer-count">{totalCustomers}</p>
    </div>
  );
};

export default TotalCustomersCard;
