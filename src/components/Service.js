// src/components/Service.js
import React from 'react';
import '../styles/Service.css';
import { FaHeadset, FaTools, FaClipboardCheck, FaLaptop, FaPeopleCarry } from 'react-icons/fa';

const Service = () => {
  return (
    <div className="service-container">
      <h2>Service Management</h2>
      <p>
        Enhance customer satisfaction and streamline service operations with our powerful tools.
      </p>

      <div className="service-features">
        <div className="service-feature">
          <FaHeadset className="service-icon" />
          <h3>Customer Support</h3>
          <p>Provide round-the-clock customer support to address issues and queries.</p>
        </div>

        <div className="service-feature">
          <FaTools className="service-icon" />
          <h3>Issue Resolution</h3>
          <p>Quickly resolve customer issues with streamlined ticketing systems.</p>
        </div>

        <div className="service-feature">
          <FaClipboardCheck className="service-icon" />
          <h3>Service Tracking</h3>
          <p>Track service requests and monitor resolution progress for customers.</p>
        </div>

        <div className="service-feature">
          <FaLaptop className="service-icon" />
          <h3>Self-Service Portal</h3>
          <p>Enable customers to access knowledge bases and solve issues independently.</p>
        </div>

        <div className="service-feature">
          <FaPeopleCarry className="service-icon" />
          <h3>Customer Feedback</h3>
          <p>Collect and analyze customer feedback to improve service quality.</p>
        </div>
      </div>
    </div>
  );
};

export default Service;
