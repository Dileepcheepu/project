// src/components/Operations.js
import React from 'react';
import '../styles/Operations.css';
import { FaCogs, FaSyncAlt, FaProjectDiagram, FaChartPie, FaWarehouse } from 'react-icons/fa';

const Operations = () => {
  return (
    <div className="operations-container">
      <h2>Operations Management</h2>
      <p>
        Streamline business processes, automate tasks, and enhance operational efficiency.
      </p>

      <div className="operations-features">
        <div className="operations-feature">
          <FaCogs className="operations-icon" />
          <h3>Process Automation</h3>
          <p>Automate repetitive tasks to save time and improve productivity.</p>
        </div>

        <div className="operations-feature">
          <FaSyncAlt className="operations-icon" />
          <h3>Workflow Management</h3>
          <p>Design and manage workflows for seamless task execution.</p>
        </div>

        <div className="operations-feature">
          <FaProjectDiagram className="operations-icon" />
          <h3>Project Management</h3>
          <p>Manage projects, assign tasks, and track progress efficiently.</p>
        </div>

        <div className="operations-feature">
          <FaChartPie className="operations-icon" />
          <h3>Analytics & Reporting</h3>
          <p>Gain insights into operational performance with detailed reports.</p>
        </div>

        <div className="operations-feature">
          <FaWarehouse className="operations-icon" />
          <h3>Inventory Management</h3>
          <p>Monitor and manage inventory levels to avoid stockouts.</p>
        </div>
      </div>
    </div>
  );
};

export default Operations;
