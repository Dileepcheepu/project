// src/components/Sales.js
import React from 'react';
import '../styles/Sales.css';
import { FaDollarSign, FaChartBar, FaUserTie, FaClipboardList, FaHandshake } from 'react-icons/fa';

const Sales = () => {
  return (
    <div className="sales-container">
      <h2>Sales Management</h2>
      <p>
        Optimize and manage your sales pipeline, track performance, and increase revenue with ease.
      </p>

      <div className="sales-features">
        <div className="sales-feature">
          <FaDollarSign className="sales-icon" />
          <h3>Revenue Tracking</h3>
          <p>Track and analyze your revenue generation from different sales channels.</p>
        </div>

        <div className="sales-feature">
          <FaChartBar className="sales-icon" />
          <h3>Sales Analytics</h3>
          <p>Get detailed analytics on sales performance and trends.</p>
        </div>

        <div className="sales-feature">
          <FaUserTie className="sales-icon" />
          <h3>Sales Team Management</h3>
          <p>Manage and motivate your sales team to hit targets effectively.</p>
        </div>

        <div className="sales-feature">
          <FaClipboardList className="sales-icon" />
          <h3>Task Management</h3>
          <p>Assign tasks and track progress to keep the sales pipeline moving.</p>
        </div>

        <div className="sales-feature">
          <FaHandshake className="sales-icon" />
          <h3>Client Relations</h3>
          <p>Build strong relationships with clients and manage communication efficiently.</p>
        </div>
      </div>
    </div>
  );
};

export default Sales;
