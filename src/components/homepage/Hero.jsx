import React from 'react';
import './Hero.css';

const Hero = () => {
  return (
    <section id="home" className="hero">
      <div className="hero-overlay"></div>
      <div className="container hero-content">
        <h1>Shri Balaji Handloom</h1>
        <p className="tagline">Weaving Tradition, Quality & Elegance into Every Home.</p>
        <p className="intro">
          Discover our exquisite collection of premium bedsheets, curtains, 
          sofas, and fine home decor items designed to transform your spaces.
        </p>
        <div className="hero-cta">
          <a href="#products" className="btn btn-primary">View Products</a>
          <a href="#contact" className="btn btn-outline">Contact Us</a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
