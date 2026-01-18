import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <h3>BrainBridge</h3>
          <p>Collaborative coding platform for developers</p>
        </div>
        
        <div className="footer-section">
          <h4>Product</h4>
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/features">Features</Link>
          <Link to="/contact">Contact</Link>
        </div>
        
        <div className="footer-section">
          <h4>Resources</h4>
          <Link to="/login">Login</Link>
          <Link to="/register">Sign Up</Link>
          <a href="#">Documentation</a>
          <a href="#">Help Center</a>
        </div>
        
        <div className="footer-section">
          <h4>Legal</h4>
          <a href="#">Privacy Policy</a>
          <a href="#">Terms of Service</a>
          <a href="#">Cookie Policy</a>
        </div>
      </div>
      
      <div className="footer-bottom">
        <p>&copy; 2025 BrainBridge. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;

