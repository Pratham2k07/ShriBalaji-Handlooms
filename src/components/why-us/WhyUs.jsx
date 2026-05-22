import React from 'react';
import './WhyUs.css';

const WhyUs = () => {
  const features = [
    { title: 'Quality Fabrics', icon: '✦', desc: 'We source only the finest materials for unparalleled comfort.' },
    { title: 'Wide Variety', icon: '✦', desc: 'A diverse range of designs to suit every taste and home style.' },
    { title: 'Affordable Pricing', icon: '✦', desc: 'Premium luxury home furnishings that fit your budget.' },
    { title: 'Trusted by Customers', icon: '✦', desc: 'Years of building trust with thousands of happy homes.' },
    { title: 'Traditional & Modern Designs', icon: '✦', desc: 'A perfect blend of heritage weaves and contemporary trends.' },
    { title: 'Personalized Service', icon: '✦', desc: 'Dedicated customer care from our family to yours.' }
  ];

  return (
    <section id="why-us" className="section section-bg-alternate">
      <div className="container">
        <h2>Why Choose Us</h2>
        <div className="features-grid">
          {features.map((feature, index) => (
            <div key={index} className="feature-card">
              <div className="feature-icon">{feature.icon}</div>
              <h3>{feature.title}</h3>
              <p>{feature.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
