import React from "react";
import "../index.css";

const Hero = () => {
  return (
    <section className="hero-section">
      <div className="hero-overlay">
        <div className="hero-content">
          <div className="hero-text">
            <h1>Calculating Loans Made Simple</h1>
            <p>Get quick estimates and connect with loan experts instantly.</p>
          </div>

          <form className="form">
            <input type="text" placeholder="Name" required />
            <input type="email" placeholder="Email" required />
            <textarea placeholder="Message" rows="4"></textarea>
            <button type="submit">Submit</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Hero;