// src/components/Dashboard.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import StatsCard from './StatsCard';
import NotificationsPanel from './NotificationsPanel';
import AnalyticsAndInsights from './AnalyticsAndInsights'; // ✅ Importing AnalyticsAndInsights
import '../styles/Dashboard.css';

const Dashboard = () => {
  const navigate = useNavigate();

  const stats = [
    { title: 'Total Customers', value: '200', icon: '👥', link: '/customers' },
    { title: 'Active Deals', value: '50', icon: '💼', link: '/active-deals' },
    { title: 'Closed Deals', value: '30', icon: '✅', link: '/closed-deals' },
    { title: 'Pending Deals', value: '20', icon: '🕒', link: '/pending-deals' },
    { title: 'Completed Tasks', value: '15', icon: '✔️', link: '/completed-tasks' },
    { title: 'Revenue Generated', value: '₹1,00,000', icon: '💰', link: '/revenue-generated' }
  ];

  return (
    <div className="dashboard">
      <h2 className="dashboard-title">Dashboard</h2>
      <div className="stats-grid">
        {stats.map((stat, index) => (
          <div key={index} onClick={() => stat.link && navigate(stat.link)}>
            <StatsCard title={stat.title} value={stat.value} icon={stat.icon} />
          </div>
        ))}
      </div>
      
      <NotificationsPanel />

      {/* ✅ Adding Analytics and Insights Component */}
      <AnalyticsAndInsights />
    </div>
  );
};

export default Dashboard;
