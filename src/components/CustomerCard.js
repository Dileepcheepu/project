import React from 'react';
import '../styles/CustomerCard.css';

const CustomerCard = ({ customer }) => {
  return (
    <div className="customer-card">
      <h3 className="customer-name">{customer.name}</h3>
      <p className="customer-email">Email: {customer.email}</p>
      <p className="customer-phone">Phone: {customer.phone}</p>
      <button className="view-details">View Details</button>
    </div>
  );
};

export default CustomerCard;
