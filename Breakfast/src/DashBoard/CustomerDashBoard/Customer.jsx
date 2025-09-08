import React, { useState, useEffect } from 'react'
import Filter from './Filter'
import Display from './Display'
import { LuShoppingCart } from "react-icons/lu";
import { FaArrowLeft } from "react-icons/fa6";
import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import "./Customer.css";

const Customer = () => {
  const navigate = useNavigate()

  // ✅ Default to "All" so all items show immediately
  const [Recipes, SetRecipes] = useState("All")  

  const AdminLocalData = JSON.parse(localStorage.getItem("Customer"))
  
  const HandleNavigate = () => {
    navigate("/login")
  }

  // ✅ Make sure it's always set at mount
  useEffect(() => {
    SetRecipes("All")
  }, [])

  return (
    <div className="customer-container">
      <div className="customer-header">
        <div style={{ display: "flex", gap: "20px" }}>
          <Button className="back-button" onClick={HandleNavigate}>
            <FaArrowLeft /> Back
          </Button>
        </div>
        
        <h1 className="welcome-text">
          Welcome {AdminLocalData?.user?.displayName || "Guest"} <span className="pulse-smiley"></span>
        </h1>
        
        <Button className="cart-button" onClick={() => navigate("/cart")}>
          <LuShoppingCart size={20} /> Cart
        </Button>
      </div>
      
      <div className="content-container">
        {/* 🔑 Pass setter to Filter */}
        <Filter ee={SetRecipes} />

        {/* 🔑 Always show "All" items on first load */}
        <Display eee={Recipes} />
        <div><img src="https://static.vecteezy.com/system/resources/thumbnails/033/268/074/original/eating-and-leisure-concept-group-of-people-having-dinner-at-table-with-food-traditional-asian-food-above-angle-of-people-eating-video.jpg" alt="" /></div>
      </div>
    </div>
  )
}

export default Customer
