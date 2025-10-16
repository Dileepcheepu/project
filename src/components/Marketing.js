// src/components/Marketing.js
import React from 'react';
import '../styles/Marketing.css';
import { FaBullhorn, FaChartLine, FaUsers, FaEnvelope, FaSearchDollar } from 'react-icons/fa';

const Marketing = () => {
  return (
    <div className="marketing-container">
      <h2>Marketing Strategies</h2>
      <p>
        Manage marketing campaigns, track customer engagement, and generate leads
        to boost your business growth.
      </p>

      <div className="marketing-features">
        <div className="marketing-feature">
          <FaBullhorn className="marketing-icon" />
          <h3>Campaign Management</h3>
          <p>Create and manage targeted marketing campaigns with ease.</p>
        </div>

        <div className="marketing-feature">
          <FaChartLine className="marketing-icon" />
          <h3>Analytics & Insights</h3>
          <p>Analyze campaign performance with real-time insights and reports.</p>
        </div>

        <div className="marketing-feature">
          <FaUsers className="marketing-icon" />
          <h3>Customer Segmentation</h3>
          <p>Segment customers based on behavior, interests, and demographics.</p>
        </div>

        <div className="marketing-feature">
          <FaEnvelope className="marketing-icon" />
          <h3>Email Campaigns</h3>
          <p>Automate email marketing and personalize messages to customers.</p>
        </div>

        <div className="marketing-feature">
          <FaSearchDollar className="marketing-icon" />
          <h3>Lead Generation</h3>
          <p>Generate quality leads and nurture them through the sales funnel.</p>
        </div>
      </div>
    </div>
  );
};

export default Marketing;
