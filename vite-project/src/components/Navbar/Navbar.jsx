import React from "react";
import "./Navbar.css"; 
import tdm from "/src/assets/tdm.jpg"

const Navbar = () => {
  return (
    <div className="navbar"> 
    <img src={tdm} className="logo"/> 
      <ul>
        <li>Home</li>
        <li>Gallery</li>
        <li>Login</li>
        <li>Sign up</li> 
      </ul>
    </div>
  );
};

export default Navbar;
