import React from 'react';
import { FaApple, FaGooglePlay } from 'react-icons/fa';

const Places = () => {
  return (
    <div id="Places" className="places-container">
      <div className="places-content">
        <div className="places-card">
          <div className="places-header">
            <h1 style={{color:"orange"}}>Breakfast places</h1>
            <h3>The best breakfast places, recommended by The Breakfasts members. Have breakfast with someone new here.</h3>
          </div>
          
          <div className="places-highlight">
            <h2>Join & meet new</h2>
            <h2>interesting people</h2>
            <h2>over breakfast</h2>
          </div>
          
          <div className="download-buttons">
            <a href="#" className="download-btn apple-btn">
              <FaApple className="store-icon" />
              <div className="btn-text">
                <span>Download on the</span>
                <span>App Store</span>
              </div>
            </a>
            
            <a href="#" className="download-btn play-btn">
              <FaGooglePlay className="store-icon" />
              <div className="btn-text">
                <span>Get it on</span>
                <span>Google Play</span>
              </div>
            </a>
          </div>
        </div>
      </div>

      <style jsx>{`
        .places-container {
          position: relative;
          min-height: 100vh;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          background-color: #f9f9f9;
          padding: 2rem;
        }
        
        .places-content {
          width: 100%;
          max-width: 1200px;
          display: flex;
          justify-content: center;
        }
        
        .places-card {
          background: white;
          border-radius: 16px;
          padding: 3rem;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
          text-align: center;
          max-width: 800px;
          width: 100%;
          transition: transform 0.3s ease;
        }
        
        .places-card:hover {
          transform: translateY(-5px);
        }
        
        .places-header h1 {
          color: #333;
          font-size: 2.2rem;
          margin-bottom: 1rem;
        }
        
        .places-header h3 {
          color: #666;
          font-size: 1.2rem;
          font-weight: 400;
          line-height: 1.6;
          max-width: 600px;
          margin: 0 auto 2rem;
        }
        
        .places-highlight h2 {
          color: orange;
          font-size: 1.8rem;
          margin: 0.5rem 0;
          font-weight: 600;
        }
        
        .download-buttons {
          display: flex;
          justify-content: center;
          gap: 1.5rem;
          margin-top: 2.5rem;
          flex-wrap: wrap;
        }
        
        .download-btn {
          display: flex;
          align-items: center;
          padding: 0.8rem 1.5rem;
          border-radius: 10px;
          text-decoration: none;
          transition: transform 0.3s, box-shadow 0.3s;
        }
        
        .apple-btn {
          background-color: #000;
          color: white;
        }
        
        .play-btn {
          background-color: #4285F4;
          color: white;
        }
        
        .download-btn:hover {
          transform: translateY(-3px);
          box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
        }
        
        .store-icon {
          font-size: 1.8rem;
          margin-right: 1rem;
        }
        
        .btn-text {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          line-height: 1.2;
        }
        
        .btn-text span:first-child {
          font-size: 0.8rem;
        }
        
        .btn-text span:last-child {
          font-size: 1.2rem;
          font-weight: 600;
        }
        
        @media (max-width: 768px) {
          .places-card {
            padding: 2rem 1.5rem;
          }
          
          .places-header h1 {
            font-size: 1.8rem;
          }
          
          .places-header h3 {
            font-size: 1rem;
          }
          
          .places-highlight h2 {
            font-size: 1.4rem;
          }
          
          .download-buttons {
            flex-direction: column;
            align-items: center;
          }
          
          .download-btn {
            width: 100%;
            max-width: 250px;
            justify-content: center;
          }
        }
      `}</style>
    </div>
  );
};

export default Places;