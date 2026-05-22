import React from 'react';
import './OurHistory.css';

const OurHistory = () => {
  return (
    <section id="history" className="section section-bg-alternate">
      <div className="container">
        <h2>Our History</h2>
        <div className="history-content">
          <div className="history-text">
            <h3>A Legacy of Quality and Trust</h3>
            <p>
              Founded on the principles of authenticity and craftsmanship, 
              <strong> Shree Balaji Handloom</strong> has been a trusted name in home furnishings for years. 
              Our journey began with a simple vision: to bring the warmth and elegance of traditional 
              Indian handlooms into every modern home.
            </p>
            <p>
              Over the years, we have built lasting relationships with our customers through our 
              unwavering dedication to quality, affordable pricing, and personalized service. 
              We carefully curate every fabric, ensuring that from our bedsheets to our curtains, 
              every piece tells a story of comfort and style.
            </p>
            <p>
              As a proud family business, our values are rooted in honesty and excellence, 
              striving always to make your house feel more like a home.
            </p>
          </div>
          <div className="history-image">
            <div className="image-placeholder">
              [Family Business / Store Heritage Image]
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurHistory;
