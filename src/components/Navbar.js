// src/components/Navbar.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Navbar.css';

const Navbar = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showProductsDropdown, setShowProductsDropdown] = useState(false);

  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
    console.log("Searching for:", e.target.value);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <h2>CRM System</h2>
      </div>

      <div className="navbar-search">
        <input 
          type="text" 
          placeholder="Search customers..." 
          value={searchQuery} 
          onChange={handleSearch} 
        />
      </div>

      <div className="navbar-links">
        <ul>
          <li><Link to="/" className="navbar-link">Dashboard</Link></li>
          <li><Link to="/customers" className="navbar-link">Customers</Link></li>
          <li><Link to="/sales-pipeline" className="navbar-link">Sales Pipeline</Link></li>
          <li><Link to="/profile" className="navbar-link">Profile</Link></li>
          
          {/* Product Dropdown Menu */}
          <li 
            className="navbar-link products-dropdown" 
            onMouseEnter={() => setShowProductsDropdown(true)}
            onMouseLeave={() => setShowProductsDropdown(false)}
          >
            Products
            <ul className={`dropdown-menu ${showProductsDropdown ? 'show' : ''}`}>
              <li><Link to="/products/marketing">Marketing</Link></li>
              <li><Link to="/products/sales">Sales</Link></li>
              <li><Link to="/products/service">Service</Link></li>
              <li><Link to="/products/content">Content</Link></li>
              <li><Link to="/products/operations">Operations</Link></li>
              <li><Link to="/products/commerce">Commerce</Link></li>
            </ul>
          </li>

          <li><Link to="/about-us" className="navbar-link">About Us</Link></li>
        </ul>
      </div>

      <div className="navbar-auth">
        {isLoggedIn ? (
          <div className="user-profile">
            <img src="/assets/user-icon.png" alt="User" className="user-icon" />
            <div className="profile-dropdown">
              <ul>
                <li><Link to="/profile">View Profile</Link></li>
                <li><button onClick={handleLogout}>Logout</button></li>
              </ul>
            </div>
          </div>
        ) : (
          <Link to="/sign-in" className="login-button">Sign In</Link>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
