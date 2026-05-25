import React, { useState } from 'react';
import './ContactUs.css';
import { saveContactMessage } from '../../firebase/db';

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    message: ''
  });
  const [status, setStatus] = useState({ submitting: false, success: false, error: null });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData(prev => ({ ...prev, [id]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name || !formData.phone || !formData.message) {
      setStatus({ ...status, error: 'Please fill in all fields' });
      return;
    }

    setStatus({ submitting: true, success: false, error: null });
    
    const result = await saveContactMessage(formData);
    
    if (result.success) {
      setStatus({ submitting: false, success: true, error: null });
      setFormData({ name: '', phone: '', message: '' });
      setTimeout(() => setStatus(prev => ({ ...prev, success: false })), 5000);
    } else {
      setStatus({ submitting: false, success: false, error: result.error || 'Failed to send message' });
    }
  };

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
              <span>Shri Balaji Handloom</span>
            </div>
            
            <div className="contact-info-item">
              <strong>Phone:</strong>
              <span>9413879038</span>
            </div>
            
            <div className="contact-info-item">
              <strong>Email:</strong>
              <span>shribalajihandlooms2003@gmail.com</span>
            </div>
            
            <div className="contact-info-item">
              <strong>Address:</strong>
              <span>shop no :-117,Shree Talkies Road, opposite shiv mandir, Ajmer, Rajasthan 305001</span>
            </div>

            <div className="whatsapp-btn-container" style={{ marginTop: '2rem' }}>
              <a 
                href="https://wa.me/919413879038?text=Hello!%20I%20would%20like%20to%20know%20more%20about%20your%20products." 
                target="_blank" 
                rel="noopener noreferrer" 
                className="btn btn-primary whatsapp-btn"
                style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}
              >
                <svg xmlns="http://www.w3.org/2003/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16">
                  <path d="M13.601 2.326A7.85 7.85 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.9 7.9 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.9 7.9 0 0 0 13.6 2.326zM7.994 14.521a6.6 6.6 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.56 6.56 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592m3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.73.73 0 0 0-.529.247c-.182.198-.691.677-.691 1.654s.71 1.916.81 2.049c.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232"/>
                </svg>
                Chat on WhatsApp
              </a>
            </div>
          </div>

          <div className="contact-form-container">
            <form className="contact-form" onSubmit={handleSubmit}>
              {status.success && <div className="alert alert-success">Thank you! Your message has been sent successfully.</div>}
              {status.error && <div className="alert alert-danger">{status.error}</div>}
              
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input type="text" id="name" placeholder="Your Name" value={formData.name} onChange={handleChange} required />
              </div>
              <div className="form-group">
                <label htmlFor="phone">Phone Number</label>
                <input type="tel" id="phone" placeholder="Your Phone Number" value={formData.phone} onChange={handleChange} required />
              </div>
              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea id="message" rows="5" placeholder="How can we help you?" value={formData.message} onChange={handleChange} required></textarea>
              </div>
              <button type="submit" className="btn btn-primary" disabled={status.submitting}>
                {status.submitting ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ContactUs;
