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
          <h4>Quick Links</h4>
          <Link to="/">Home</Link>
          <Link to="/read">Browse Projects</Link>
          <Link to="/projects/create">Create Project</Link>
        </div>
        
        <div className="footer-section">
          <h4>Support</h4>
          <Link to="/chat">Chat</Link>
          <Link to="/ai-chat">AI Assistant</Link>
          <Link to="/settings">Settings</Link>
        </div>
        
        <div className="footer-section">
          <h4>Legal</h4>
          <a href="#">Privacy Policy</a>
          <a href="#">Terms of Service</a>
          <a href="#">Contact</a>
        </div>
      </div>
      
      <div className="footer-bottom">
        <p>&copy; 2025 BrainBridge. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;

