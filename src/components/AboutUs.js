// src/components/AboutUs.js
import React from 'react';
import '../styles/AboutUs.css';
import { Code, Database, Zap, Shield, LifeBuoy } from 'lucide-react';

const AboutUs = () => {
  return (
    <div className="about-container">
      <h2>About Us</h2>

      <p>
        Welcome to the CRM System Project! Our mission is to help businesses manage their customer interactions more effectively, track sales, and enhance customer satisfaction. Our system provides a robust platform for managing customer data, tracking interactions, and monitoring sales pipelines, making it an essential tool for businesses aiming to optimize their customer management process.
      </p>

      <p>
        Our CRM System is designed to streamline your business processes, improve customer relationships, and provide you with actionable insights for growth. From lead generation to customer retention, our platform offers a range of features that help businesses nurture their customer base and increase profitability. Our focus is on providing a user-friendly interface combined with powerful analytics to drive better decision-making.
      </p>

      <p>
        We believe in continuous improvement, which is why our team is always working on new features, performance optimizations, and user experience enhancements. Whether you are a small startup or a large enterprise, our CRM system can be customized to suit your specific needs. We are committed to providing reliable support and ensuring that our users get the best out of our platform.
      </p>

      <div className="team-section">
        <div className="team-member">
          <Code size={40} color="#3498db" />
          <h3>Frontend Development (UI/UX)</h3>
          <p><strong>Yarabarla Saran Kumar</strong></p>
          <p>Implement responsive layouts and navigation. Create forms for customer data entry, interaction logging, and sales tracking.</p>
        </div>

        <div className="team-member">
          <Database size={40} color="#e74c3c" />
          <h3>Backend Development (API & Database)</h3>
          <p><strong>Vyshya Raju Swaraj</strong></p>
          <p>Manage the database (PostgreSQL, MySQL, or MongoDB) to store customer data, interactions, and sales pipeline details.</p>
        </div>

        <div className="team-member">
          <Zap size={40} color="#f39c12" />
          <h3>Automation & Integrations</h3>
          <p><strong>Vallikuti Pavan</strong></p>
          <p>Implement automation for email campaigns and follow-up reminders.</p>
        </div>

        <div className="team-member">
          <Shield size={40} color="#27ae60" />
          <h3>Security & Compliance</h3>
          <p><strong>Team Member Name</strong></p>
          <p>Ensure the security of customer data, manage user roles, and maintain compliance with data protection standards.</p>
        </div>

        <div className="team-member">
          <LifeBuoy size={40} color="#8e44ad" />
          <h3>User Support & Maintenance</h3>
          <p><strong>Team Member Name</strong></p>
          <p>Provide technical support, troubleshoot issues, and maintain system performance and availability.</p>
        </div>

      </div>
    </div>
  );
};

export default AboutUs;
