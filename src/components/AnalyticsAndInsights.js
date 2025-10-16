// src/components/AnalyticsAndInsights.js
import React from 'react';
import {
  LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid,
  Tooltip, ResponsiveContainer, PieChart, Pie, Cell, AreaChart, Area
} from 'recharts';
import '../styles/AnalyticsAndInsights.css';

const AnalyticsAndInsights = () => {
  // Sample data for charts
  const customerGrowthData = [
    { month: 'Jan', customers: 50 },
    { month: 'Feb', customers: 80 },
    { month: 'Mar', customers: 120 },
    { month: 'Apr', customers: 150 },
    { month: 'May', customers: 200 },
  ];

  const revenueData = [
    { month: 'Jan', revenue: 5000 },
    { month: 'Feb', revenue: 8000 },
    { month: 'Mar', revenue: 12000 },
    { month: 'Apr', revenue: 15000 },
    { month: 'May', revenue: 20000 },
  ];

  const satisfactionData = [
    { name: 'Satisfied', value: 75 },
    { name: 'Neutral', value: 15 },
    { name: 'Dissatisfied', value: 10 },
  ];

  const leadConversionData = [
    { name: 'Converted', value: 60 },
    { name: 'Not Converted', value: 40 },
  ];

  const dealStagesData = [
    { stage: 'Prospect', value: 40 },
    { stage: 'Qualified', value: 30 },
    { stage: 'Negotiation', value: 20 },
    { stage: 'Closed Won', value: 10 },
  ];

  const retentionData = [
    { month: 'Jan', retention: 70 },
    { month: 'Feb', retention: 72 },
    { month: 'Mar', retention: 75 },
    { month: 'Apr', retention: 73 },
    { month: 'May', retention: 76 },
  ];

  const COLORS = ['#4CAF50', '#FFC107', '#F44336', '#3498db'];

  return (
    <div className="analytics-container">
      <h2 className="analytics-title">Analytics and Insights</h2>

      <div className="analytics-charts">
        {/* Customer Growth Line Chart */}
        <div className="chart-card">
          <h3>Customer Growth</h3>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={customerGrowthData}>
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Line type="monotone" dataKey="customers" stroke="#3498db" strokeWidth={3} />
            </LineChart>
          </ResponsiveContainer>
        </div>

        {/* Revenue Trends Bar Chart */}
        <div className="chart-card">
          <h3>Revenue Trends</h3>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={revenueData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="revenue" fill="#f39c12" />
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* Customer Satisfaction Pie Chart */}
        <div className="chart-card">
          <h3>Customer Satisfaction</h3>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={satisfactionData}
                cx="50%"
                cy="50%"
                outerRadius={120}
                label={({ name, value }) => `${name}: ${value}%`}
                fill="#8884d8"
                dataKey="value"
              >
                {satisfactionData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
            </PieChart>
          </ResponsiveContainer>
        </div>

        {/* Lead Conversion Rate Doughnut Chart */}
        <div className="chart-card">
          <h3>Lead Conversion Rate</h3>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={leadConversionData}
                cx="50%"
                cy="50%"
                innerRadius={70}
                outerRadius={120}
                fill="#82ca9d"
                dataKey="value"
              />
            </PieChart>
          </ResponsiveContainer>
        </div>

        {/* Deal Stages Distribution Bar Chart */}
        <div className="chart-card">
          <h3>Deal Stages Distribution</h3>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={dealStagesData}>
              <XAxis dataKey="stage" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="value" fill="#e74c3c" />
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* Customer Retention Area Chart */}
        <div className="chart-card">
          <h3>Customer Retention Rate</h3>
          <ResponsiveContainer width="100%" height={300}>
            <AreaChart data={retentionData}>
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Area type="monotone" dataKey="retention" stroke="#2ecc71" fill="#2ecc71" />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default AnalyticsAndInsights;
