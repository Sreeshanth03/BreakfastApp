import React from "react";
import { Routes, Route } from "react-router-dom";
import WelcomePage from "./Components/WelcomePage/WelcomePage";
import Navbar from "./Components/Navbar/Navbar";
import HomeImage from "./Components/HomeImage/HomeImage";
import FAQ from "./HomePage/FAQ/FAQ";
import Places from "./HomePage/Places/Places";
import Contact from "./HomePage/Contact/Contact";
import SignUp from "./Components/Navbar/SignUp/SignUp";
import Login from "./Components/Navbar/Login/Login";
import Customer from "./DashBoard/CustomerDashBoard/Customer";
import Admin from "./DashBoard/AdminDashBoard/Admin";
import PostItems from "./DashBoard/AdminDashBoard/PostItems/PostItems";
import MyPosting from "./DashBoard/AdminDashBoard/Myposting/MyPosting";
import Cart from "./DashBoard/CustomerDashBoard/Cart";
const App = () => {
  return (
    <Routes>
      {/* Home route (shows HomeImage + WelcomePage) */}
      <Route
        path="/"
        element={
          <>
            <HomeImage />
            <WelcomePage />
          </>
        }
      />

      {/* Other routes (replaces the entire page) */}
      <Route path="/navbar" element={<Navbar />} />
      <Route path="/faq" element={<FAQ />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/places" element={<Places />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/SignUp" element={<SignUp />} />
      <Route path="/Login" element={<Login />} />
      <Route path="/Customer" element={<Customer />}></Route>
      <Route path="/Admin" element={<Admin />}>
        <Route path="PostItems" element={<PostItems />}></Route>
        <Route path="MyPosting" element={<MyPosting />}></Route>
      </Route>
    </Routes>
  );
};

export default App;
