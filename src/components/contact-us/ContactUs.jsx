import React from 'react';
import './ContactUs.css';

const ContactUs = () => {
  return (
    <section id="contact" className="section">
      <div className="container">
        <h2>Contact Us</h2>
        <div className="contact-wrapper">
          
          <div className="contact-details">
            <h3>Get In Touch</h3>
            <p>We would love to hear from you. Reach out to us for any queries or to explore our collections.</p>
            
            <div className="contact-info-item">
              <strong>Business Name:</strong>
              <span>Shree Balaji Handloom</span>
            </div>
            
            <div className="contact-info-item">
              <strong>Phone:</strong>
              <span>[Phone Number Placeholder]</span>
            </div>
            
            <div className="contact-info-item">
              <strong>Email:</strong>
              <span>[Email Placeholder]</span>
            </div>
            
            <div className="contact-info-item">
              <strong>Address:</strong>
              <span>[Address Placeholder]</span>
            </div>

            <div className="whatsapp-btn-container">
              <button className="btn btn-primary whatsapp-btn">
                [WhatsApp Button Placeholder]
              </button>
            </div>
          </div>

          <div className="contact-form-container">
            <form className="contact-form">
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input type="text" id="name" placeholder="Your Name" />
              </div>
              <div className="form-group">
                <label htmlFor="phone">Phone Number</label>
                <input type="tel" id="phone" placeholder="Your Phone Number" />
              </div>
              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea id="message" rows="5" placeholder="How can we help you?"></textarea>
              </div>
              <button type="button" className="btn btn-primary">Send Message</button>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ContactUs;
