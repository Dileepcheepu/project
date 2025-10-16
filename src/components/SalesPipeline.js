// src/components/SalesPipeline.js
import React from 'react';
import '../styles/SalesPipeline.css';

const SalesPipeline = () => {
  const stages = [
    { 
      title: 'Prospects', 
      description: 'New leads who are interested in your product or service.', 
      deals: 15, 
      revenue: '₹50,000' 
    },
    { 
      title: 'Qualified', 
      description: 'Leads that have been qualified and show potential.', 
      deals: 10, 
      revenue: '₹30,000' 
    },
    { 
      title: 'Negotiation', 
      description: 'Leads who are in the negotiation phase of the sales process.', 
      deals: 5, 
      revenue: '₹20,000' 
    },
    { 
      title: 'Closed', 
      description: 'Deals that have been closed successfully.', 
      deals: 8, 
      revenue: '₹1,00,000' 
    }
  ];

  return (
    <div className="sales-pipeline">
      <h2>Sales Pipeline</h2>
      <p>Manage your sales process, track prospects, and move them through various stages of the pipeline.</p>
      
      <div className="pipeline-stages">
        {stages.map((stage, index) => (
          <div className="stage" key={index}>
            <h3>{stage.title}</h3>
            <p>{stage.description}</p>
            <div className="stage-details">
              <p><strong>Deals:</strong> {stage.deals}</p>
              <p><strong>Revenue:</strong> {stage.revenue}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SalesPipeline;
