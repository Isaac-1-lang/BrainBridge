import { useState } from 'react';
import Card from '../components/Card';
import Button from '../components/Button';
import './Contact.css';
import attachment from '../assets/attach-file.png';
import telephone from '../assets/telephone.png';
import address from '../assets/location.png';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
    alert('Thank you for your message! We\'ll get back to you soon.');
  };

  return (
    <div className="contact-page">
      <div className="container">
        <div className="contact-header">
          <h1>Contact Us</h1>
          <p>Have questions? We'd love to hear from you. Send us a message and we'll respond as soon as possible.</p>
        </div>

        <div className="contact-content">
          <Card className="contact-form-card">
            <form onSubmit={handleSubmit} className="contact-form">
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="Your name"
                />
              </div>

              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="your.email@example.com"
                />
              </div>

              <div className="form-group">
                <label htmlFor="subject">Subject</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  placeholder="What is this regarding?"
                />
              </div>

              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  placeholder="Tell us more about your inquiry..."
                />
              </div>

              <Button type="submit" variant="primary" size="lg">
                Send Message
              </Button>
            </form>
          </Card>

          <div className="contact-info">
            <Card className="info-card">
              <h3>Get in Touch</h3>
              <div className="info-item">
                <span className="info-icon"><img src={attachment} alt="Mail-icon" className='contact-icon' /></span>
                <div>
                  <strong>Email</strong>
                  <p>support@brainbridge.com</p>
                </div>
              </div>
              <div className="info-item">
                <span className="info-icon"><img src={telephone} alt="telephone-icon" className='contact-icon' /></span>
                <div>
                  <strong>Phone</strong>
                  <p>+250 7885-98775</p>
                </div>
              </div>
              <div className="info-item">
                <span className="info-icon"><img src={address} alt="address-icon" className='contact-icon' /></span>
                <div>
                  <strong>Address</strong>
                  <p>123 Innovation Street<br />Kigali, Rwanda</p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
