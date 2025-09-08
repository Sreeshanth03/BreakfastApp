import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import "./Navbar.css";

const Navbar = () => {
  return (
    <div className="navbar-container">
      {/* Navbar with centered vertical buttons */}
      <motion.div 
        className="Navbar"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <div className="navbar-overlay"></div>
        
        <div className="nav-buttons">
          {/* 🚀 Sign Up button */}
          <motion.div
            initial={{ x: -30, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link to="/SignUp" className="nav-button signup-btn">
              🚀 Sign Up →
            </Link>
          </motion.div>
          
          {/* 🔑 Login button */}
          <motion.div
            initial={{ x: 30, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.5 }}
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link to="/Login" className="nav-button login-btn">
              🔑 Login →
            </Link>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default Navbar;
