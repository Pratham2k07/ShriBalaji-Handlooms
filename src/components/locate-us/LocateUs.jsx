import React from 'react';
import './LocateUs.css';

const LocateUs = () => {
  return (
    <section id="locate" className="section section-bg-alternate">
      <div className="container">
        <h2>Locate Us</h2>
        <div className="map-container" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '2rem' }}>
          <div style={{ width: '100%', height: '400px', borderRadius: 'var(--radius-md)', overflow: 'hidden', boxShadow: 'var(--shadow-sm)' }}>
            <iframe 
              src="https://maps.google.com/maps?q=Shree%20Talkies%20Road,%20opposite%20shiv%20mandir,%20Ajmer,%20Rajasthan%20305001&t=&z=15&ie=UTF8&iwloc=&output=embed" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen="" 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              title="Shri Balaji Handloom Location"
            ></iframe>
          </div>
          <a 
            href="https://maps.app.goo.gl/uv2QpzNohnW32riGA" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="btn btn-primary"
            style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}
          >
            <svg xmlns="http://www.w3.org/2003/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16">
              <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z"/>
            </svg>
            Open in Google Maps
          </a>
        </div>
      </div>
    </section>
  );
};

export default LocateUs;
