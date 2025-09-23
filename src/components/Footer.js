import React from 'react';
import '../styles/Footer.css';

const Footer = ({ companyName = "Your Company", socialLinks = [] }) => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <p>&copy; {currentYear} {companyName}. Privacy</p>

      {socialLinks.length > 0 && (
        <div className="social-links">
          {socialLinks.map((link, index) => (
            <a key={index} href={link.url} target="_blank" rel="noopener noreferrer">
              <img src={link.icon} alt={link.name} className="social-icon" />
            </a>
          ))}
        </div>
      )}
    </footer>
  );
};

export default Footer;