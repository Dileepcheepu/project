// src/components/ActiveDeals.js
import React, { useState } from 'react';
import '../styles/ActiveDeals.css';

const ActiveDeals = () => {
  const [deals, setDeals] = useState([
    { id: 1, title: 'Deal with ABC Corp', amount: '₹20,000', status: 'In Progress' },
    { id: 2, title: 'Partnership with XYZ Ltd', amount: '₹15,000', status: 'Negotiation' }
  ]);

  const [newDeal, setNewDeal] = useState({ title: '', amount: '', status: 'In Progress' });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewDeal({ ...newDeal, [name]: value });
  };

  const addDeal = () => {
    if (newDeal.title && newDeal.amount) {
      setDeals([...deals, { ...newDeal, id: Date.now() }]);
      setNewDeal({ title: '', amount: '', status: 'In Progress' });
    }
  };

  const deleteDeal = (id) => {
    setDeals(deals.filter((deal) => deal.id !== id));
  };

  return (
    <div className="active-deals">
      <h2>Active Deals Management</h2>

      <div className="deal-form">
        <input type="text" name="title" placeholder="Deal Title" value={newDeal.title} onChange={handleInputChange} />
        <input type="text" name="amount" placeholder="Amount" value={newDeal.amount} onChange={handleInputChange} />
        <select name="status" value={newDeal.status} onChange={handleInputChange}>
          <option value="In Progress">In Progress</option>
          <option value="Negotiation">Negotiation</option>
          <option value="Pending">Pending</option>
        </select>
        <button onClick={addDeal}>Add Deal</button>
      </div>

      <div className="deal-list">
        {deals.map((deal) => (
          <div className="deal-card" key={deal.id}>
            <h3>{deal.title}</h3>
            <p>Amount: {deal.amount}</p>
            <p>Status: {deal.status}</p>
            <button onClick={() => deleteDeal(deal.id)}>Delete</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ActiveDeals;
