import React from 'react';
import '../index.css'; 

const Navbar = () => {
  return (
    <header className="navbar">
      <div className="container">
        <a className="logo">LoanCalculator</a>
      <div className="searchbar">
        <input type="text" placeholder="Search" />
      </div>
        <div className="links">
          <a>Home</a>
          <a>About</a>
          <a>Services</a>
          <a>Blog</a>
          <button className="login-btn">Login</button>
          <button className="signup-btn">Sign Up</button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;