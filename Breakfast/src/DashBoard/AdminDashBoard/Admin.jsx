import React from "react";
import PostItems from "./PostItems/PostItems";
import MyPosting from "./Myposting/MyPosting";
import { Outlet, Link } from "react-router-dom";
import "./Admin.css";

const Admin = () => {
  return (
    <div className="admin-container">
      <h1 className="admin-title">Admin Dashboard</h1>

      <div className="admin-layout">
        {/* Sidebar */}
        <nav className="admin-sidebar">
          <Link to="PostItems" className="admin-link">
            Post Items
          </Link>
          <Link to="MyPosting" className="admin-link">
            My Posting
          </Link>
        </nav>

        {/* Main content */}
        <div className="admin-content">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Admin;

