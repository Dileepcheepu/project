// src/components/ProductSidebar.js
import React from 'react';
import '../styles/ProductSidebar.css';
import { Link } from 'react-router-dom';

const ProductSidebar = () => {
  return (
    <div className="product-sidebar">
      <h3 className="product-sidebar-title">Products</h3>
      <ul className="product-list">
        <li><Link to="/products/marketing">Marketing</Link></li>
        <li><Link to="/products/sales">Sales</Link></li>
        <li><Link to="/products/service">Service</Link></li>
        <li><Link to="/products/content">Content</Link></li>
        <li><Link to="/products/operations">Operations</Link></li>
        <li><Link to="/products/commerce">Commerce</Link></li>
      </ul>
    </div>
  );
};

export default ProductSidebar;
