import React from 'react';
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';

function HeroSection() {
  return (
    <div className='hero-container'>
      <img src="../images/logo.jpg" alt="logo" />
      <h1>Welcome to Medicius</h1>
      <div className='hero-btns'>
        <a className='classUs' href="tel:917759995200">Get in Touch</a>
      </div>
    </div>
  );
}

export default HeroSection;
