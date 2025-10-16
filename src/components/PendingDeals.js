// src/components/PendingDeals.js
import React from 'react';
import '../styles/PendingDeals.css';

const PendingDeals = () => {
  const pendingDeals = [
    { id: 1, name: "Deal with ABC Corp", status: "Pending Approval", value: "₹20,000" },
    { id: 2, name: "Deal with XYZ Pvt Ltd", status: "Pending Negotiation", value: "₹35,000" },
    { id: 3, name: "Deal with LMN Enterprises", status: "Pending Customer Response", value: "₹15,000" },
  ];

  return (
    <div className="pending-deals-container">
      <h2>Pending Deals</h2>
      <div className="pending-deals-list">
        {pendingDeals.map((deal) => (
          <div className="pending-deal-card" key={deal.id}>
            <h3>{deal.name}</h3>
            <p>Status: {deal.status}</p>
            <p>Value: {deal.value}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PendingDeals;
