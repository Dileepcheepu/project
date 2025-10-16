// src/components/Commerce.js
import React from 'react';
import '../styles/Commerce.css';
import { FaShoppingCart, FaTags, FaCreditCard, FaTruck, FaReceipt } from 'react-icons/fa';

const Commerce = () => {
  return (
    <div className="commerce-container">
      <h2>Commerce Management</h2>
      <p>
        Boost your online sales and efficiently manage your e-commerce operations.
      </p>

      <div className="commerce-features">
        <div className="commerce-feature">
          <FaShoppingCart className="commerce-icon" />
          <h3>Product Management</h3>
          <p>Add, update, and manage your product catalog with ease.</p>
        </div>

        <div className="commerce-feature">
          <FaTags className="commerce-icon" />
          <h3>Discount Management</h3>
          <p>Create and manage discounts, offers, and promotional codes.</p>
        </div>

        <div className="commerce-feature">
          <FaCreditCard className="commerce-icon" />
          <h3>Secure Payments</h3>
          <p>Process secure online payments through multiple payment gateways.</p>
        </div>

        <div className="commerce-feature">
          <FaTruck className="commerce-icon" />
          <h3>Order Management</h3>
          <p>Track and manage customer orders efficiently.</p>
        </div>

        <div className="commerce-feature">
          <FaReceipt className="commerce-icon" />
          <h3>Billing & Invoicing</h3>
          <p>Generate invoices and manage billing with ease.</p>
        </div>
      </div>
    </div>
  );
};

export default Commerce;
