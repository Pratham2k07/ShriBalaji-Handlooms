import React from 'react';
import './Footer.css';
import logo from '../../assets/logo.png';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container footer-container">
        <div className="footer-brand">
          <div className="footer-logo-container">
            <img src={logo} alt="Shri Balaji Handlooms Logo" className="footer-logo-img" />
            <h2>Shri Balaji Handloom</h2>
          </div>
          <p>Premium home furnishing products combining traditional elegance with modern quality.</p>
        </div>
        
        <div className="footer-links">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#history">Our History</a></li>
            <li><a href="#products">Products</a></li>
            <li><a href="#contact">Contact Us</a></li>
          </ul>
        </div>

        <div className="footer-contact">
          <h3>Contact Info</h3>
          <p>Phone: +91 9413879038</p>
          <p>Email: shribalajihandlooms2003@gmail.com</p>
          <p>Address: shop no :-117,Shree Talkies Road, opposite shiv mandir, Ajmer, Rajasthan 305001</p>
        </div>
      </div>
      
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Shri Balaji Handloom. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
