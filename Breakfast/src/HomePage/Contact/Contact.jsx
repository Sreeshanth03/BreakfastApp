import React from 'react';
import { FaInstagram, FaTwitter, FaPhone, FaEnvelope } from 'react-icons/fa';

const Contact = () => {
  const socialLinks = [
    { icon: <FaInstagram />, text: 'Follow us on Instagram' },
    { icon: <FaTwitter />, text: 'Follow us on Twitter' },
    { icon: <FaPhone />, text: 'Contact us: 123-456-7890' }
  ];

  return (
    <div id="Contact" className="contact-container">
      <div className="contact-content">
        <div className="contact-card">
          <div className="contact-header">
            <FaEnvelope className="email-icon" />
            <h2>Get In Touch</h2>
          </div>
          <div className="email-link">
            <a href="mailto:hello@thebreakfast.app">
              thebreakfast.app@gmail.com
            </a>
          </div>
          <div className="contact-info">
            <p>We'd love to hear from you!</p>
            <p>Reach out for partnerships, feedback, or just to say hello.</p>
          </div>
        </div>
      </div>

      <footer className="social-footer">
        <div className="marquee">
          {[...socialLinks, ...socialLinks].map((item, index) => (
            <div key={index} className="social-item">
              <span className="social-icon">{item.icon}</span>
              <span className="social-text">{item.text}</span>
            </div>
          ))}
        </div>
      </footer>

      <style jsx>{`
        .contact-container {
          position: relative;
          min-height: 100vh;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          background-color: #f9f9f9;
        }
        
        .contact-content {
          width: 100%;
          max-width: 1200px;
          padding: 2rem;
          display: flex;
          justify-content: center;
        }
        
        .contact-card {
          background: white;
          border-radius: 16px;
          padding: 2.5rem;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
          text-align: center;
          max-width: 500px;
          width: 100%;
          transition: transform 0.3s ease;
        }
        
        .contact-card:hover {
          transform: translateY(-5px);
        }
        
        .contact-header {
          margin-bottom: 1.5rem;
        }
        
        .email-icon {
          font-size: 2.5rem;
          color: orange;
          margin-bottom: 1rem;
        }
        
        .contact-header h2 {
          color: #333;
          font-size: 1.8rem;
          margin: 0;
        }
        
        .email-link a {
          color: orange;
          font-size: 1.5rem;
          text-decoration: none;
          transition: color 0.3s;
          font-weight: 600;
          display: inline-block;
          margin: 1rem 0;
          padding: 0.5rem 1rem;
          border-radius: 8px;
          background-color: rgba(255, 165, 0, 0.1);
        }
        
        .email-link a:hover {
          color: darkorange;
          background-color: rgba(255, 165, 0, 0.2);
        }
        
        .contact-info {
          color: #666;
          line-height: 1.6;
          margin-top: 1.5rem;
        }
        
        .contact-info p {
          margin: 0.5rem 0;
        }
        
        .social-footer {
          position: fixed;
          bottom: 0;
          left: 0;
          right: 0;
          background-color: orange;
          color: white;
          padding: 0.8rem 0;
          overflow: hidden;
          z-index: 100;
        }
        
        .marquee {
          display: flex;
          animation: scroll 20s linear infinite;
          white-space: nowrap;
        }
        
        .social-item {
          display: flex;
          align-items: center;
          margin: 0 2rem;
        }
        
        .social-icon {
          font-size: 1.5rem;
          margin-right: 0.8rem;
        }
        
        .social-text {
          font-weight: 500;
        }
        
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }

        @media (max-width: 768px) {
          .contact-card {
            padding: 1.5rem;
          }
          
          .email-link a {
            font-size: 1.2rem;
          }
          
          .contact-header h2 {
            font-size: 1.5rem;
          }
        }
      `}</style>
    </div>
  );
};

export default Contact;