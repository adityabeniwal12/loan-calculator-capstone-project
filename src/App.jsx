import React from 'react';
import Navbar from '/src/components/Navbar.jsx'
import './App.css'
import './index.css';
import Hero from "./components/hero.jsx"; 


function App() {
  return (

    <div>
      <Navbar/>
      <h1 class="welcome">WELCOME LOANTOOL</h1>
      <p class="welcome-para">Smart Loan Calculator Website Designed To Make Your Work Easier</p>
      <Hero />
    </div>
  );
}

export default App;
