import React from "react";
import "./HomeImage.css";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { MdOutlineFreeBreakfast } from "react-icons/md";
import WelcomePage from "../WelcomePage/WelcomePage";
const HomeImage = () => {
  const navigate = useNavigate();
   const buttonStyle = {
    backgroundColor: '#FF8C00',
    color: 'white',
    border: '2px solid #FF8C00',
    padding: '10px 25px',
    borderRadius: '30px',
    fontWeight: '600',
    fontFamily: "'Montserrat', sans-serif",
    letterSpacing: '0.5px',
    transition: 'all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1)',
    margin: '0 8px',
    textTransform: 'uppercase',
    fontSize: '0.9rem',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
    cursor: 'pointer',
    ':hover': {
      backgroundColor: '#E67E22',
      borderColor: '#E67E22',
      transform: 'translateY(-3px)',
      boxShadow: '0 4px 12px rgba(230, 126, 34, 0.4)'
    },
    ':active': {
      transform: 'translateY(0)',
      boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)'
    }
  };
  const HandleFAQ=()=>{
    navigate("/FAQ")
  }
  return (
    <div className="Homepage">
      
      <div className="navbar">
        <div className="navbar-buttons">
       <div className="navbar-buttons">
        <a href="#Faq">
      <Button 
        style={buttonStyle}
        onClick={HandleFAQ}
        onMouseOver={(e) => {
          e.currentTarget.style.backgroundColor = '#E67E22';
          e.currentTarget.style.transform = 'translateY(-3px)';
          e.currentTarget.style.boxShadow = '0 4px 12px rgba(230, 126, 34, 0.4)';
        }}
        onMouseOut={(e) => {
          e.currentTarget.style.backgroundColor = '#FF8C00';
          e.currentTarget.style.transform = 'translateY(0)';
          e.currentTarget.style.boxShadow = '0 2px 4px rgba(0, 0, 0, 0.1)';
        }}
      >
        FAQ
      </Button>
      </a>
      <a href="#Places">
      <Button 
        style={buttonStyle}
        onClick={() => navigate("/Places")}
        onMouseOver={(e) => {
          e.currentTarget.style.backgroundColor = '#E67E22';
          e.currentTarget.style.transform = 'translateY(-3px)';
          e.currentTarget.style.boxShadow = '0 4px 12px rgba(230, 126, 34, 0.4)';
        }}
        onMouseOut={(e) => {
          e.currentTarget.style.backgroundColor = '#FF8C00';
          e.currentTarget.style.transform = 'translateY(0)';
          e.currentTarget.style.boxShadow = '0 2px 4px rgba(0, 0, 0, 0.1)';
        }}
      >
        Places
      </Button>
      </a>
      <a href="#Contact">
      <Button 
        style={buttonStyle}
        onClick={() => navigate("/Contact")}
        onMouseOver={(e) => {
          e.currentTarget.style.backgroundColor = '#E67E22';
          e.currentTarget.style.transform = 'translateY(-3px)';
          e.currentTarget.style.boxShadow = '0 4px 12px rgba(230, 126, 34, 0.4)';
        }}
        onMouseOut={(e) => {
          e.currentTarget.style.backgroundColor = '#FF8C00';
          e.currentTarget.style.transform = 'translateY(0)';
          e.currentTarget.style.boxShadow = '0 2px 4px rgba(0, 0, 0, 0.1)';
        }}
      >
        Contact
      </Button>
      </a>
    </div>
        </div>
      </div>
      
      <div className="title-container">
     <div className="breakfast-title">
      <h1>Bre</h1>
      <h1 style={{marginLeft:"80px"}}>akf</h1>
      <h1 style={{marginLeft:"180px"}}>ast</h1>
     </div>
        <p className="tagline">"Where Every Bite Tells a Story" </p>
      </div>
     
    </div>
  );
};

export default HomeImage;